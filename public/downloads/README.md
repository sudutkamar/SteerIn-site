# Downloads Directory

This directory (`public/downloads/`) contains the SteerIn Android APK files for download.

**Location:** `public/downloads/` (will be available at `/downloads/` after build)

## Files

- `steerin-latest.apk` - The latest SteerIn Android application
- `steerin-latest.apk.sha256` - SHA-256 checksum for verification

## How to Replace Placeholders

1. **Build your APK** using Android Studio or your build system
2. **Rename** the APK to `steerin-latest.apk`
3. **Generate checksum** using one of these methods:

   **Windows (PowerShell):**
   ```powershell
   .\scripts\generate-checksum.ps1 steerin-latest.apk
   ```

   **Linux/macOS:**
   ```bash
   ./scripts/generate-checksum.sh steerin-latest.apk
   ```

   **Manual:**
   ```bash
   # Linux/macOS
   sha256sum steerin-latest.apk > steerin-latest.apk.sha256
   
   # Windows (PowerShell)
   (Get-FileHash steerin-latest.apk -Algorithm SHA256).Hash.ToLower() + "  steerin-latest.apk" | Out-File steerin-latest.apk.sha256
   ```

4. **Replace** both files in this directory
5. **Commit** the changes to Git
6. **Deploy** to Netlify

## File Size Considerations

- Netlify has a **100MB limit** per file for static sites
- Consider compressing the APK if it's too large
- For larger files, consider using a CDN or external hosting

## Security

- Always generate checksums before deployment
- Users can verify file integrity using the SHA-256 checksum
- Keep the checksum file updated with each release

## Version History

| Version | Date | Size | Notes |
|---------|------|------|-------|
| 2.0.0-rc.1 | 2026-05-30 | ~15 MB | Initial release candidate |

---

*Last updated: 2026-05-30*
