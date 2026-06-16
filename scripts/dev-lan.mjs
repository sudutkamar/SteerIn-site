import { spawn } from 'node:child_process';
import os from 'node:os';

const port = process.env.PORT || '4321';

function getLanAddresses() {
  const addresses = [];
  for (const [name, netList] of Object.entries(os.networkInterfaces())) {
    for (const net of netList || []) {
      if (net.family === 'IPv4' && !net.internal && !net.address.startsWith('169.254.')) {
        addresses.push({ name, address: net.address });
      }
    }
  }
  return addresses;
}

console.log('\nStarting SteerIn dev server for LAN/mobile testing...');
console.log(`Port: ${port}`);
for (const item of getLanAddresses()) {
  console.log(`Phone URL: http://${item.address}:${port} (${item.name})`);
}
console.log('');

const command = process.platform === 'win32'
  ? `npx astro dev --host 0.0.0.0 --port ${port}`
  : 'npx';
const args = process.platform === 'win32'
  ? []
  : ['astro', 'dev', '--host', '0.0.0.0', '--port', port];

const child = spawn(command, args, {
  stdio: 'inherit',
  shell: process.platform === 'win32',
});

child.on('exit', code => process.exit(code ?? 0));
