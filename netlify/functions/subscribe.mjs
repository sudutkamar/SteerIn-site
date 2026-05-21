const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Content-Type': 'application/json',
};

export const handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { email } = JSON.parse(event.body);

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Please enter a valid email address.' }),
      };
    }

    // In production, store this to your database or Netlify Blob.
    // Example with Netlify Blob (uncomment and add @netlify/blobs dep):
    // const { connect } = await import('@netlify/blobs');
    // const store = connect({ name: 'subscribers' });
    // await store.set(email, JSON.stringify({ email, ts: new Date().toISOString() }));

    console.log('[Subscribe]', email, new Date().toISOString());

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

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Something went wrong. Please try again.' }),
    };
  }
};
