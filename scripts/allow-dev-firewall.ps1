# Run as Administrator.
# Allows SteerIn Astro/Vite dev server from phones on the same LAN.

$ports = @(4321, 5173)
$nodePaths = @()

try {
  $nodeCmd = Get-Command node -ErrorAction SilentlyContinue
  if ($nodeCmd -and $nodeCmd.Source) { $nodePaths += $nodeCmd.Source }
} catch {}

$commonNodePaths = @(
  "F:\Apps\nodejs\node.exe",
  "$env:ProgramFiles\nodejs\node.exe",
  "${env:ProgramFiles(x86)}\nodejs\node.exe"
)
foreach ($path in $commonNodePaths) {
  if ($path -and (Test-Path $path)) { $nodePaths += $path }
}
$nodePaths = $nodePaths | Select-Object -Unique

foreach ($port in $ports) {
  $ruleName = "SteerIn Astro Dev Port $port"
  $existing = Get-NetFirewallRule -DisplayName $ruleName -ErrorAction SilentlyContinue
  if ($existing) {
    Set-NetFirewallRule -DisplayName $ruleName -Enabled True -Action Allow -Profile Any
  } else {
    New-NetFirewallRule -DisplayName $ruleName -Direction Inbound -Action Allow -Protocol TCP -LocalPort $port -Profile Any | Out-Null
  }
}

foreach ($nodePath in $nodePaths) {
  $ruleName = "SteerIn Node.js $nodePath"
  $existing = Get-NetFirewallRule -DisplayName $ruleName -ErrorAction SilentlyContinue
  if ($existing) {
    Set-NetFirewallRule -DisplayName $ruleName -Enabled True -Action Allow -Profile Any
  } else {
    New-NetFirewallRule -DisplayName $ruleName -Direction Inbound -Action Allow -Program $nodePath -Profile Any | Out-Null
  }
}

Write-Host "Allowed ports: $($ports -join ', ')" -ForegroundColor Green
if ($nodePaths.Count -gt 0) {
  Write-Host "Allowed node.exe:" -ForegroundColor Green
  $nodePaths | ForEach-Object { Write-Host "  $_" -ForegroundColor Green }
} else {
  Write-Host "node.exe path not found automatically. Port rules were still added." -ForegroundColor Yellow
}
Write-Host "Now run: npm run dev" -ForegroundColor Cyan
Write-Host "Open the Phone URL printed by npm run dev" -ForegroundColor Cyan
