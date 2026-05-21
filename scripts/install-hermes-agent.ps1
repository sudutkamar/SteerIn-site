Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

# Hermes Agent official installer (Windows native PowerShell).
# Docs: https://github.com/nousresearch/hermes-agent
iex (irm https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.ps1)
