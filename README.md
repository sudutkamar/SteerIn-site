# SteerIn Landing Page 🚗

Landing page website for **SteerIn** — a private Android vehicle management application for cars and motorcycles.

## 🌐 Live Site

**https://steerin.app**

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

| Technology | Purpose | Version |
|------------|---------|---------|
| **Astro** | Static site framework & build system | ^6.4.2 |
| **Vanilla JavaScript** | Client-side islands/behavior | ES2022+ |
| **Three.js** | 3D WebGL scene (car animation) | ^0.172.0 |
| **CSS3** | Styling with custom properties | - |
| **Netlify** | Hosting & serverless functions | - |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://gitlab.com/yourusername/steerin-site.git
cd steerin-site

# Install dependencies
npm install
```

### Development

```bash
# Start dev server with LAN access
npm run dev

# Dev server on default port (5173)
npm run dev:5173
```

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
steerin-site/
├── astro.config.mjs            # Astro static build config
├── package.json                # Project config & dependencies
├── netlify.toml                # Netlify deployment config
├── logo.png                    # SteerIn logo (root copy)
│
├── public/                     # Static assets (copied to dist/)
│   ├── _headers                # Security headers for Netlify
│   ├── logo.png                # Logo for production
│   ├── og-image.png            # Open Graph image
│   ├── manifest.json           # PWA manifest
│   ├── sitemap.xml             # Sitemap for SEO
│   ├── robots.txt              # Robots configuration
│   ├── icons/                  # App icons (192, 512)
│   ├── downloads/              # APK download files
│   │   ├── steerin-latest.apk
│   │   └── steerin-latest.apk.sha256
│   ├── api/
│   │   └── version.json        # Version info for app updates
│   └── terms/                  # Terms of service
│
├── src/                        # Source code
│   ├── pages/
│   │   ├── index.astro         # Main landing page
│   │   ├── changelog.astro     # Changelog page with filters
│   │   └── privacy-policy.astro
│   ├── components/
│   │   ├── Navbar.astro        # Navigation component
│   │   ├── Footer.astro        # Footer component
│   │   ├── MobileSidebar.astro # Mobile sidebar
│   │   ├── animate.js          # Intersection Observer animations
│   │   ├── canvas3d.js         # Three.js 3D car scene
│   │   ├── changelog.js        # Changelog badge & filters
│   │   ├── counter.js          # Animated number counter
│   │   ├── faq.js              # FAQ accordion
│   │   ├── form.js             # Email subscription form
│   │   ├── lang.js             # Language utilities
│   │   ├── mouse.js            # Cursor glow & parallax
│   │   ├── nav.js              # Mobile navigation
│   │   ├── theme.js            # Dark/light theme toggle
│   │   └── tilt.js             # 3D tilt effect on cards
│   ├── layouts/
│   │   └── BaseLayout.astro    # Base layout template
│   ├── data/
│   │   └── changelog.json      # Structured changelog data
│   ├── main.js                 # Client entry — initializes all components
│   └── style.css               # Global styles
│
├── netlify/
│   └── functions/
│       └── subscribe.mjs       # Serverless function for email subscription
│
└── scripts/                    # Developer tooling
    ├── dev-lan.mjs             # Dev server with LAN access
    ├── lan-info.mjs            # Display LAN connection info
    └── allow-dev-firewall.ps1  # Windows firewall rule for dev
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

## 🧩 Components

### Astro Components

| Component | File | Description |
|-----------|------|-------------|
| **Navbar** | `Navbar.astro` | Top navigation bar |
| **Footer** | `Footer.astro` | Page footer |
| **MobileSidebar** | `MobileSidebar.astro` | Mobile navigation drawer |
| **BaseLayout** | `BaseLayout.astro` | Base HTML layout template |

### JavaScript Components

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
| **Changelog** | `changelog.js` | Changelog badge & filters |

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Landing | `/` | Main landing page with all sections |
| Changelog | `/changelog` | Version history with filters |
| Privacy Policy | `/privacy-policy` | Privacy policy page |

## 📦 Deployment

### Netlify

1. Push to `main` branch
2. Netlify detects changes
3. Runs `npm run build`
4. Deploys `dist/` folder + serverless functions

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
- Rate limiting on API endpoints (5 req/min per IP)
- Honeypot spam protection

## 📱 Download APK

The APK download feature allows users to download SteerIn directly from the landing page.

### Setup

1. Place your APK in `public/downloads/steerin-latest.apk`
2. Generate checksum:
   ```bash
   npm run checksum public/downloads/steerin-latest.apk
   ```
3. Commit and deploy

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
- [ ] Changelog page loads with filters
- [ ] Privacy policy page loads

### Browser Support

- Chrome/Edge 90+
- Firefox 90+
- Safari 15+
- Mobile browsers (iOS Safari, Chrome Mobile)

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

- Built with [Astro](https://astro.build/)
- 3D graphics powered by [Three.js](https://threejs.org/)
- Hosted on [Netlify](https://netlify.com)

---

**Made with ❤️ for vehicle owners in Indonesia**
