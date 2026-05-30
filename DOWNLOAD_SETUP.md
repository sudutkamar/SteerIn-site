# Download Section Setup Guide

## Overview

This document explains the download section that has been added to the SteerIn landing page. The download section allows users to download the Android APK directly from the website.

## Changes Made

### 1. Navigation Bar
- Changed "Join Early Access" to "Download" in the navbar
- Links to the new `#download` section

### 2. Hero Section
- Changed "Join Early Access" button to "Download for Android"
- Added download icon to the button
- Links to the `#download` section

### 3. New Download Section
- Added a dedicated download section with:
  - App version information (2.0.0-rc.1)
  - File size (~15 MB)
  - Android requirements (8.0+)
  - Feature badges
  - Download APK button
  - SHA-256 verification button
  - Legal disclaimers

### 4. Footer
- Updated "Early Access" link to "Download" in the footer

### 5. Styling
- Added comprehensive CSS styling for the download section
- Responsive design for mobile devices
- Hover effects and animations
- Consistent with existing design system

## File Structure

```
public/downloads/
├── steerin-latest.apk          # Main APK file (replace placeholder)
├── steerin-latest.apk.sha256   # SHA-256 checksum file
├── steerin-latest.apk.txt      # Placeholder text file
├── steerin-latest.apk.sha256.txt  # Placeholder checksum file
└── README.md                   # Documentation
```

## Setup Instructions

### Step 1: Replace Placeholder Files

1. **Build your Android APK** using Android Studio or your build system
2. **Rename the APK** to `steerin-latest.apk`
3. **Generate SHA-256 checksum**:
   ```bash
   # On Windows (PowerShell)
   Get-FileHash steerin-latest.apk -Algorithm SHA256
   
   # On Linux/macOS
   sha256sum steerin-latest.apk
   ```
4. **Create checksum file** (`steerin-latest.apk.sha256`):
   ```
   <hash>  steerin-latest.apk
   ```
5. **Replace the placeholder files** in the `downloads/` directory

### Step 2: Update Version Information

Edit `index.html` and update the following in the download section:

```html
<div class="download-version">
  <span class="download-label">Version</span>
  <span class="download-value">YOUR_VERSION_HERE</span>
</div>
<div class="download-size">
  <span class="download-label">Size</span>
  <span class="download-value">~XX MB</span>
</div>
```

### Step 3: Test Download

1. Start the dev server: `npm run dev`
2. Navigate to http://localhost:5174/
3. Scroll to the download section or click "Download" in the navbar
4. Test the download button
5. Verify the SHA-256 checksum download works

## Deployment

### Netlify

The download files will be automatically deployed with your site. Make sure:

1. The `downloads/` folder is in the root of your project
2. Files are committed to your Git repository
3. Netlify build command includes the downloads folder

### Custom Domain

If using a custom domain, the download URLs will be:
- `https://steerin.app/downloads/steerin-latest.apk`
- `https://steerin.app/downloads/steerin-latest.apk.sha256`

## Security Considerations

1. **HTTPS Only**: Ensure your site uses HTTPS for secure downloads
2. **Checksum Verification**: Users can verify file integrity using SHA-256
3. **File Size Limits**: Netlify has a 100MB limit per file for static sites
4. **Virus Scanning**: Consider scanning APK files before deployment

## Future Enhancements

Consider adding:
- [ ] Download counter/analytics
- [ ] Multiple APK versions (arm64, x86, universal)
- [ ] Direct Play Store link when available
- [ ] QR code for mobile download
- [ ] Download mirror links
- [ ] Auto-update mechanism

## Troubleshooting

### Download Not Working
1. **Check file location:** Ensure APK is in `public/downloads/`
2. **Rebuild project:** Run `npm run build` after adding files
3. **Check browser console:** Look for CORS or network errors
4. **Verify Content-Type:** Should be `application/vnd.android.package-archive`

### SHA-256 Mismatch
- Regenerate the checksum file
- Ensure no extra whitespace or newlines
- Verify the APK file wasn't corrupted during transfer

### Mobile Download Issues
- Some mobile browsers may handle APK downloads differently
- Users may need to enable "Install from Unknown Sources"
- Consider adding installation instructions

### Content-Type Issues
**For Development (Vite):**
- Content-Type is set automatically via Vite plugin in `vite.config.js`
- Restart dev server after changes

**For Production (Netlify):**
- Content-Type is set via `_headers` file in `public/`
- Headers are automatically applied to `/downloads/*.apk`

## Contact

For issues with the download functionality, contact:
- Email: sudutkamar.co@gmail.com
- Subject: Download Issue

---

*Last updated: 2026-05-30*
