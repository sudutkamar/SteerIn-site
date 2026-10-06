import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { translations } from '../src/components/lang.js';

const read = path => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('official release metadata is consistent with the published version API', () => {
  const release = JSON.parse(read('src/data/release.json'));
  const api = JSON.parse(read('public/api/version.json'));
  assert.equal(release.url, api.downloadUrl);
  assert.equal(release.version, api.latestVersionName);
  assert.match(release.sha256, /^[a-f0-9]{64}$/);
  assert.equal(release.sha256, '5c81575071e9f8baec5df1c5cf5704342d97107f5e84bc554fad066f010652e4');
  assert.equal(read('public/downloads/steerin-latest.apk.sha256').split(' ')[0], release.sha256);
  const html = read('dist/index.html');
  assert.ok(html.includes(`data-sha256-hash="${release.sha256}"`));
  assert.ok(html.includes(`href="${release.url}"`));
});

test('built waitlist is detected by Netlify and never posts to missing API', () => {
  const html = read('dist/index.html');
  assert.ok(/name="form-name" value="early-access"/.test(html), 'Netlify form-name is present');
  assert.ok(/name="early-access"[^>]*data-netlify="true"/.test(html), 'Netlify detects form');
  assert.ok(!/\/api\/subscribe/.test(html), 'missing API is not used');
});

test('translated FAQ preserves icon in both languages', () => {
  const html = read('dist/index.html');
  assert.ok(/class="faq-q"[^>]*>[^<]*<span data-i18n="faq\.1\.q"/.test(html));
  assert.ok(/data-i18n="faq\.1\.q"[^>]*>[^<]*<\/span><svg/.test(html));
});

test('demo tabs point to corresponding panels', () => {
  const html = read('dist/index.html');
  for (const name of ['dash', 'garage', 'maps', 'settings']) {
    assert.ok(new RegExp(`id="demo-panel-${name}"[^>]*aria-labelledby="demo-tab-${name}"`).test(html), `panel ${name} linked`);
    assert.ok(new RegExp(`data-demo-tab="${name}"`).test(html), `tab ${name} exists`);
  }
});

test('home page does not block content behind a script-only loader', () => {
  const html = read('dist/index.html');
  assert.ok(!html.includes('id="loading-screen"'));
  assert.ok(!html.includes('kendaraan per rumah tangga rata-rata'));
});

test('all translated HTML keys exist in Indonesian and English', () => {
  const html = ['dist/index.html', 'dist/privacy-policy/index.html', 'dist/changelog/index.html']
    .map(read).join('\n');
  const keys = [...html.matchAll(/data-i18n(?:-html|-placeholder)?="([^"]+)"/g)].map(match => match[1]);
  for (const key of keys) {
    assert.ok(Object.hasOwn(translations.id, key), `Indonesian missing ${key}`);
    assert.ok(Object.hasOwn(translations.en, key), `English missing ${key}`);
  }
  assert.deepEqual(Object.keys(translations.id).sort(), Object.keys(translations.en).sort());
});
