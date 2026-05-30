# Script to generate SHA-256 checksum for SteerIn APK
# Usage: .\generate-checksum.ps1 <path-to-apk>

param(
    [Parameter(Mandatory=$true)]
    [string]$ApkFile
)

if (-not (Test-Path $ApkFile)) {
    Write-Error "Error: File '$ApkFile' not found"
    exit 1
}

# Generate checksum
$checksum = (Get-FileHash $ApkFile -Algorithm SHA256).Hash.ToLower()
$filename = Split-Path $ApkFile -Leaf

# Create checksum file
$checksumFile = "${ApkFile}.sha256"
"$checksum  $filename" | Out-File -FilePath $checksumFile -Encoding UTF8

Write-Host "✓ Checksum generated: $checksumFile" -ForegroundColor Green
Write-Host "  Hash: $checksum"
Write-Host "  File: $filename"
