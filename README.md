# SteerIn Landing Page 🚗

Landing page website for **SteerIn** — a private Android vehicle management application for cars and motorcycles.

## 🌐 Live Site

**https://steerin-site.vercel.app**

## 📋 Overview

SteerIn helps users manage cars and motorcycles, track maintenance, log trips, discover workshops, and protect vehicle history with local-first storage and optional encrypted backup.

### Features

- 🚗 Multi-vehicle garage management
- 📊 Vehicle health tracking
- ⏰ Maintenance reminders
- 📝 Service history logging
- 📍 GPS trip logging
- 🔧 Workshop discovery
- ☁️ Optional cloud sync & backup
- 🔒 Privacy-focused (no ads, no trackers)

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| **Vite** | Build tool & dev server |
| **Vanilla JavaScript** | Frontend logic (no framework) |
| **Three.js** | 3D WebGL scene (car animation) |
| **CSS3** | Styling with custom properties |
| **Netlify** | Hosting & serverless functions |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/steerin-site.git
cd steerin-site

# Install dependencies
npm install
```

### Development

```bash
# Start dev server (http://localhost:5173)
npm run dev
```

### Production Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

## 📁 Project Structure

```
steerin-site/
├── index.html                  # Main HTML file (single-page)
├── package.json                # Project config & dependencies
├── vite.config.js              # Vite build configuration
├── netlify.toml                # Netlify deployment config
├── public/                     # Static assets
│   ├── _headers                # Security headers for Netlify
│   ├── logo.png                # Logo for production
│   ├── manifest.json           # PWA manifest
│   ├── downloads/              # APK download files
│   │   ├── README.md           # Download documentation
│   │   └── (APK files here)    # Downloadable APK
│   └── privacy-policy/
│       └── index.html          # Privacy policy page
├── src/                        # Source code
│   ├── main.js                 # Entry point
│   ├── style.css               # Global styles
│   └── components/             # Modular JS components
├── netlify/
│   └── functions/
│       └── subscribe.mjs       # Serverless function for email subscription
└── scripts/                    # Developer tooling scripts
    ├── generate-checksum.sh    # Generate SHA-256 checksum (Linux/macOS)
    └── generate-checksum.ps1   # Generate SHA-256 checksum (Windows)
```

## 🎨 Styling

- Single CSS file: `src/style.css`
- CSS Custom Properties for theming
- Dark mode by default (`data-theme="dark"`)
- Responsive design (mobile-first)

### Theme System

```css
/* Dark theme (default) */
[data-theme="dark"] {
  --bg: #0a0f0d;
  --text: #e2e8f0;
}

/* Light theme */
[data-theme="light"] {
  --bg: #ffffff;
  --text: #1e293b;
}
```

## 🔧 Components

| Component | File | Description |
|-----------|------|-------------|
| **Theme** | `theme.js` | Toggles dark/light theme |
| **Nav** | `nav.js` | Mobile hamburger menu |
| **FAQ** | `faq.js` | Accordion FAQ |
| **Animate** | `animate.js` | Scroll animations |
| **Form** | `form.js` | Email subscription form |
| **Tilt** | `tilt.js` | 3D tilt effect on cards |
| **Counter** | `counter.js` | Animated number counter |
| **Mouse** | `mouse.js` | Cursor glow & parallax |
| **Canvas3D** | `canvas3d.js` | Three.js 3D car scene |

## 📦 Deployment

### Netlify

1. Push to `main` branch
2. Netlify detects changes
3. Runs `npm run build`
4. Deploys `dist/` folder

### Manual Deploy

```bash
# Build
npm run build

# Deploy dist/ folder to any static hosting
```

## 🔐 Security

- Content Security Policy (CSP) configured
- Security headers (X-Frame-Options, X-Content-Type-Options, etc.)
- Input sanitization
- Rate limiting on API endpoints
- Honeypot spam protection

## 📱 Download APK

The APK download feature allows users to download SteerIn directly from the landing page.

### Setup

1. Place your APK in `public/downloads/steerin-latest.apk`
2. Generate checksum:
   ```powershell
   # Windows
   .\scripts\generate-checksum.ps1 "public\downloads\steerin-latest.apk"
   
   # Linux/macOS
   ./scripts/generate-checksum.sh public/downloads/steerin-latest.apk
   ```
3. Commit and deploy

See [DOWNLOAD_SETUP.md](DOWNLOAD_SETUP.md) for detailed instructions.

## 🧪 Testing

### Manual Testing Checklist

- [ ] Dark/light theme toggle works
- [ ] Mobile menu opens/closes
- [ ] FAQ accordion expands/collapses
- [ ] Email form submits successfully
- [ ] Honeypot field blocks spam
- [ ] 3D scene loads on desktop (≥900px)
- [ ] Scroll animations trigger correctly
- [ ] Counter animates on scroll
- [ ] Tilt effect works on feature cards
- [ ] Download button works
- [ ] Privacy policy page loads

### Browser Support

- Chrome/Edge 90+
- Firefox 90+
- Safari 15+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 Documentation

- [AGENTS.md](AGENTS.md) — Full project documentation
- [DOWNLOAD_SETUP.md](DOWNLOAD_SETUP.md) — Download feature setup guide
- [DOWNLOAD_FEATURE_SUMMARY.md](DOWNLOAD_FEATURE_SUMMARY.md) — Download feature summary
- [OFFLINE_SCALE.md](OFFLINE_SCALE.md) — Scaling considerations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is proprietary software. All rights reserved.

## 📧 Contact

- **Email:** sudutkamar.co@gmail.com
- **Website:** https://steerin.app

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- 3D graphics powered by [Three.js](https://threejs.org/)
- Hosted on [Netlify](https://netlify.com)

---

**Made with ❤️ for vehicle owners in Indonesia**
