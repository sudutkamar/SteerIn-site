import test from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { submitWaitlist } from '../src/components/form.js';

test('waitlist posts encoded email and form name to Netlify endpoint', async () => {
  let payload;
  const server = createServer(async (req, res) => {
    payload = {
      method: req.method,
      type: req.headers['content-type'],
      body: await new Promise(resolve => {
        let data = '';
        req.on('data', chunk => { data += chunk; });
        req.on('end', () => resolve(data));
      }),
    };
    res.writeHead(200).end();
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  try {
    await submitWaitlist(`http://127.0.0.1:${server.address().port}/`, 'user+beta@example.com');
    assert.equal(payload.method, 'POST');
    assert.equal(payload.type, 'application/x-www-form-urlencoded');
    assert.deepEqual(Object.fromEntries(new URLSearchParams(payload.body)), {
      'form-name': 'early-access', email: 'user+beta@example.com', website: '',
    });
  } finally {
    server.close();
  }
});

test('waitlist rejects non-success HTTP responses', async () => {
  const server = createServer((_req, res) => res.writeHead(422).end());
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  try {
    await assert.rejects(submitWaitlist(`http://127.0.0.1:${server.address().port}/`, 'user@example.com'), /422/);
  } finally {
    server.close();
  }
});
