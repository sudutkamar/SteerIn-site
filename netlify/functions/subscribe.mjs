// ---------------------------------------------------------------------------
// SteerIn Subscribe API — Netlify Function
// Security: rate limiting, CORS origin whitelist, body size check, input sanitization
// ---------------------------------------------------------------------------

const ALLOWED_ORIGINS = [
  'https://steerin.app',
  'https://steerin.netlify.app',
  'http://localhost:5173',
  'http://localhost:4173',
];

const MAX_BODY_BYTES = 1024;          // max request body
const RATE_WINDOW_MS = 60_000;        // 1 minute
const RATE_MAX = 5;                   // max requests per window per IP

const rateMap = new Map();

function getClientIP(event) {
  return event.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
         event.headers['client-ip'] ||
         event.headers['x-nf-client-connection-ip'] ||
         'unknown';
}

function checkRateLimit(ip) {
  const now = Date.now();
  const cutoff = now - RATE_WINDOW_MS;

  // purge stale entries
  for (const [key, ts] of rateMap) {
    if (ts < cutoff) rateMap.delete(key);
  }

  const count = rateMap.get(ip) ?? 0;
  if (count >= RATE_MAX) return false;

  rateMap.set(ip, count + 1);
  return true;
}

function resolveOrigin(event) {
  const origin = event.headers.origin || event.headers.Origin || '';
  if (ALLOWED_ORIGINS.includes(origin)) return origin;
  // fallback: allow requests with no origin (curl, native apps)
  if (!origin) return '*';
  // deny unknown origins by returning the first allowed origin (browser will reject)
  return ALLOWED_ORIGINS[0];
}

function buildHeaders(origin) {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  };
}

export const handler = async (event) => {
  const origin = resolveOrigin(event);
  const headers = buildHeaders(origin);

  // --- CORS preflight ---
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers, body: '' };
  }

  // --- Method check ---
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  // --- Rate limit ---
  const clientIP = getClientIP(event);
  if (!checkRateLimit(clientIP)) {
    return {
      statusCode: 429,
      headers,
      body: JSON.stringify({ error: 'Too many requests. Please try again later.' }),
    };
  }

  // --- Body size check ---
  if (!event.body || event.body.length > MAX_BODY_BYTES) {
    return { statusCode: 413, headers, body: JSON.stringify({ error: 'Request too large.' }) };
  }

  // --- Parse & validate ---
  try {
    const { email } = JSON.parse(event.body);

    if (!email || typeof email !== 'string' || email.length > 320) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid email address.' }) };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'Please enter a valid email address.' }) };
    }

    // --- Persist to Netlify Blob ---
    try {
      const { connect } = await import('@netlify/blobs');
      const store = connect({ name: 'subscribers' });
      await store.set(email.toLowerCase(), JSON.stringify({ email: email.toLowerCase(), ts: new Date().toISOString() }));
    } catch (blobErr) {
      console.warn('[Subscribe] Blob storage unavailable, logging only:', blobErr.message);
    }

    console.log('[Subscribe]', email.toLowerCase(), new Date().toISOString());

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: "✓ You're on the list! We'll notify you when SteerIn launches.",
      }),
    };
  } catch (err) {
    console.error('[Subscribe Error]', err);
    return { statusCode: 500, headers, body: JSON.stringify({ error: 'Something went wrong. Please try again.' }) };
  }
};
