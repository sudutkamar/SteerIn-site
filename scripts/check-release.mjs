import { createHash } from 'node:crypto';
import { Readable } from 'node:stream';
import { readFile } from 'node:fs/promises';

const release = JSON.parse(await readFile(new URL('../src/data/release.json', import.meta.url)));
const version = JSON.parse(await readFile(new URL('../public/api/version.json', import.meta.url)));
if (release.version !== version.latestVersionName || release.url !== version.downloadUrl) {
  throw new Error('Version API and official release metadata disagree');
}
const response = await fetch(release.url, { signal: AbortSignal.timeout(180_000) });
if (!response.ok || !response.body) throw new Error(`APK download failed: HTTP ${response.status}`);
const hash = createHash('sha256');
let size = 0;
for await (const chunk of Readable.fromWeb(response.body)) {
  size += chunk.length;
  hash.update(chunk);
}
const digest = hash.digest('hex');
if (digest !== release.sha256 || size !== release.sizeBytes) {
  throw new Error(`APK mismatch: got ${digest} (${size} bytes), expected ${release.sha256} (${release.sizeBytes} bytes)`);
}
const checksumResponse = await fetch(`${release.url}.sha256`, { signal: AbortSignal.timeout(30_000) });
if (!checksumResponse.ok) throw new Error(`Release checksum download failed: HTTP ${checksumResponse.status}`);
const checksum = (await checksumResponse.text()).trim().split(/\s+/)[0].toLowerCase();
if (checksum !== digest) throw new Error(`Release checksum asset disagrees with APK: ${checksum} vs ${digest}`);
console.log(`Verified GitHub Release ${release.version}: ${digest} (${size} bytes)`);
