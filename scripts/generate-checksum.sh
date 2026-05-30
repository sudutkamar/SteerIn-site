#!/bin/bash

# Script to generate SHA-256 checksum for SteerIn APK
# Usage: ./generate-checksum.sh <path-to-apk>

set -e

if [ -z "$1" ]; then
    echo "Usage: $0 <path-to-apk>"
    echo "Example: $0 steerin-latest.apk"
    exit 1
fi

APK_FILE="$1"

if [ ! -f "$APK_FILE" ]; then
    echo "Error: File '$APK_FILE' not found"
    exit 1
fi

# Generate checksum
CHECKSUM=$(sha256sum "$APK_FILE" | awk '{print $1}')
FILENAME=$(basename "$APK_FILE")

# Create checksum file
CHECKSUM_FILE="${APK_FILE}.sha256"
echo "$CHECKSUM  $FILENAME" > "$CHECKSUM_FILE"

echo "✓ Checksum generated: $CHECKSUM_FILE"
echo "  Hash: $CHECKSUM"
echo "  File: $FILENAME"
