import os from 'node:os';

const port = process.env.PORT || process.argv[2] || '4321';
const nets = os.networkInterfaces();
const addresses = [];

for (const [name, netList] of Object.entries(nets)) {
  for (const net of netList || []) {
    if (net.family === 'IPv4' && !net.internal && !net.address.startsWith('169.254.')) {
      addresses.push({ name, address: net.address });
    }
  }
}

console.log('\nSteerIn LAN URLs:');
if (!addresses.length) {
  console.log('  No LAN IPv4 address found. Check network connection.');
} else {
  for (const item of addresses) {
    console.log(`  http://${item.address}:${port}  (${item.name})`);
  }
}
console.log('\nIf phone cannot open it: run PowerShell as Administrator, then:');
console.log('  npm run firewall:dev\n');
