Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$hermesExe = Join-Path $env:LOCALAPPDATA 'hermes\hermes-agent\venv\Scripts\hermes.exe'
if (-not (Test-Path -LiteralPath $hermesExe)) {
  throw "Hermes not found at: $hermesExe. Run ./scripts/install-hermes-agent.ps1 first."
}

& $hermesExe @args
