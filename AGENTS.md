# AGENTS.md — SteerIn Landing Page

## 📋 Project Overview

**SteerIn** is a landing page website for a private Android vehicle management application. The site promotes the SteerIn app, which helps users manage cars and motorcycles, track maintenance, log trips, discover workshops, and protect vehicle history with local-first storage.

### Key Information
- **Project Name:** steerin-site
- **Version:** 2.0.0
- **Type:** Static Astro landing page with vanilla JS islands
- **Hosting:** Netlify (static + serverless functions)
- **Live URL:** https://steerin.app
- **Repository:** GitLab

---

## 🛠 Tech Stack

### Core Technologies
| Technology | Purpose | Version |
|------------|---------|---------|
| **Astro** | Static site framework & build system | ^6.4.2 |
| **Vanilla JavaScript** | Client-side islands/behavior | ES2022+ |
| **Three.js** | 3D WebGL scene (car animation) | ^0.172.0 |
| **CSS3** | Styling (custom properties, animations) | - |
| **Netlify** | Hosting, serverless functions, redirects | - |

### Development Tools
- **Node.js** — Required for Vite and npm
- **npm** — Package manager
- **Git** — Version control

---

## 📁 Project Structure

```
steerin-site/
├── astro.config.mjs            # Astro static build config
├── package.json                # Project config & dependencies
├── vite.config.js              # Vite build configuration
├── netlify.toml                # Netlify deployment config
├── logo.png                    # SteerIn logo (root copy)
├── .gitignore                  # Git ignore rules
│
├── public/                     # Static assets (copied to dist/)
│   ├── _headers                # Security headers for Netlify
│   ├── logo.png                # Logo for production
│   └── privacy-policy/
│       └── index.html          # Privacy policy page
│
├── src/                        # Source code
│   ├── pages/
│   │   └── index.astro         # Main landing page
│   ├── main.js                 # Client entry — initializes all components
│   ├── style.css               # Global styles
│   └── components/             # Modular JS components
│       ├── animate.js          # Intersection Observer fade-up animations
│       ├── canvas3d.js         # Three.js 3D car scene (code-split)
│       ├── counter.js          # Animated number counter
│       ├── faq.js              # FAQ accordion logic
│       ├── form.js             # Email subscription form handler
│       ├── mouse.js            # Cursor glow & hero parallax effects
│       ├── nav.js              # Mobile navigation toggle
│       ├── theme.js            # Dark/light theme toggle
│       └── tilt.js             # 3D tilt effect on feature cards
│
├── netlify/
│   └── functions/
│       └── subscribe.mjs       # Serverless function for email subscription
│
├── scripts/                    # Developer tooling scripts
│   ├── hermes.ps1              # Hermes agent wrapper (Windows)
│   ├── install-hermes-agent.ps1
│   └── install-hermes-agent.sh
│
├── dist/                       # Build output (generated)
└── node_modules/               # Dependencies (gitignored)
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm 9+

### Installation
```bash
# Clone the repository
git clone <repository-url>
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

---

## 🏗 Architecture & Components

### Entry Point (`src/main.js`)
Initializes all components on `DOMContentLoaded`:
```javascript
initTheme()      → Theme toggle (dark/light)
initNav()        → Mobile menu
initFAQ()        → Accordion FAQ
initAnimations() → Scroll animations
initForms()      → Email subscription
initTilt()       → Card tilt effects
initCounter()    → Number animation
initMouseGlow()  → Cursor effects
init3DScene()    → Three.js scene (async, desktop only)
```

### Component Architecture
Each component is a self-contained ES module with:
- Single responsibility
- Exported `init*()` function
- Optional cleanup/destroy function
- No shared state (except DOM)

#### Component Details

| Component | File | Description |
|-----------|------|-------------|
| **Theme** | `theme.js` | Toggles `data-theme` on `<html>`, persists to `localStorage` |
| **Nav** | `nav.js` | Mobile hamburger menu, locks body scroll when open |
| **FAQ** | `faq.js` | Accordion with `aria-expanded` for accessibility |
| **Animate** | `animate.js` | `IntersectionObserver` adds `.visible` class to `.fade-up` elements |
| **Form** | `form.js` | Handles `[data-form]` submissions, honeypot spam protection |
| **Tilt** | `tilt.js` | Mouse-follow 3D perspective transform on `.feature-card` |
| **Counter** | `counter.js` | Counts up to target number when scrolled into view |
| **Mouse** | `mouse.js` | Cursor glow effect + hero parallax (desktop only) |
| **Canvas3D** | `canvas3d.js` | Three.js low-poly car scene, code-split, desktop only (≥900px) |

---

## 🎨 Styling

### Architecture
- Single CSS file: `src/style.css` (32KB+)
- CSS Custom Properties for theming
- Dark mode by default (`data-theme="dark"`)
- Responsive design with mobile-first approach

### Theme System
```css
/* Dark theme (default) */
[data-theme="dark"] {
  --bg: #0a0f0d;
  --text: #e2e8f0;
  /* ... */
}

/* Light theme */
[data-theme="light"] {
  --bg: #ffffff;
  --text: #1e293b;
  /* ... */
}
```

### Key Design Elements
- **Noise texture** overlay for depth
- **Orb gradients** — animated background blobs
- **Cursor glow** — radial gradient follows mouse
- **Fade-up animations** — triggered on scroll
- **Glass morphism** — backdrop blur effects

---

## 🔌 API & Backend

### Netlify Function: `subscribe.mjs`
**Endpoint:** `POST /api/subscribe` → redirects to `/.netlify/functions/subscribe`

#### Security Features
- **Rate limiting:** 5 requests/minute per IP
- **CORS whitelist:** Only allows `steerin.app`, `steerin.netlify.app`, localhost
- **Body size limit:** 1KB max
- **Input validation:** Email regex, length check
- **Honeypot field:** Hidden input to catch bots

#### Request Format
```json
{
  "email": "user@example.com"
}
```

#### Response Format
```json
// Success (200)
{
  "success": true,
  "message": "✓ You're on the list! We'll notify you when SteerIn launches."
}

// Error (400/405/413/429/500)
{
  "error": "Error message here"
}
```

---

## 🔒 Security

### Content Security Policy (CSP)
Defined in `public/_headers`:
```
default-src 'self';
script-src 'self' 'unsafe-inline';
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
font-src https://fonts.gstatic.com;
img-src 'self' data:;
connect-src 'self';
```

### Security Headers
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `X-Frame-Options: DENY`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

### Input Sanitization
- HTML sanitization via `textContent` assignment in `form.js`
- Server-side email validation in `subscribe.mjs`

---

## 📦 Build & Deployment

### Vite Configuration
```javascript
// vite.config.js
export default defineConfig({
  build: {
    outDir: 'dist',
    cssMinify: true,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],  // Code-split Three.js
        },
      },
    },
  },
});
```

### Netlify Configuration
```toml
[build]
  command = "npm run build"
  publish = "dist"
  functions = "netlify/functions"

[[redirects]]
  from = "/api/subscribe"
  to = "/.netlify/functions/subscribe"
  status = 200
```

### Deployment Flow
1. Push to `main` branch
2. Netlify detects changes
3. Runs `npm run build`
4. Deploys `dist/` folder
5. Serverless functions deploy from `netlify/functions/`

---

## 🧪 Testing & QA

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
- [ ] Privacy policy page loads

### Browser Support
- Chrome/Edge 90+
- Firefox 90+
- Safari 15+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🎯 Performance Considerations

### Code Splitting
- Three.js is code-split into separate chunk
- 3D scene only loads on desktop (≥900px width)
- Async import: `const THREE = await import('three')`

### Optimization
- CSS minification enabled
- ESBuild minification
- Intersection Observer for lazy animations
- Passive event listeners for scroll/mouse
- `will-change` used sparingly
- Hardware-accelerated transforms

### 3D Scene Optimization
- Low-poly wireframe style
- Limited particle count (250)
- Pixel ratio capped at 2
- No shadows (performance)
- Additive blending for particles

---

## 📝 Content Sections

The landing page includes these sections:

1. **Navbar** — Logo, navigation links, theme toggle, mobile menu
2. **Hero** — Headline, description, CTA buttons, email form, phone mockup
3. **Trust Bar** — 4 trust cards (local-first, cloud sync, encrypted, no ads)
4. **Problem** — 5 pain points + stat counter
5. **Features** — 8 feature cards with icons
6. **How It Works** — 6-step process
7. **Privacy & Security** — 6 privacy cards
8. **App Preview** — 6 mockup cards showing app screens
9. **Availability** — Early access CTA
10. **FAQ** — 7 accordion items
11. **Final CTA** — Email form + contact link
12. **Footer** — Brand, product links, legal, support

---

## 🐛 Common Issues & Solutions

### Issue: 3D Scene Not Loading
**Cause:** Window width < 900px or Three.js failed to load
**Solution:** Check console for errors, ensure `three` package installed

### Issue: Form Submission Fails
**Cause:** CORS issue or Netlify function not deployed
**Solution:** Check Netlify function logs, verify CORS origins

### Issue: Theme Not Persisting
**Cause:** localStorage blocked or cleared
**Solution:** Check browser settings, fallback to default dark theme

### Issue: Animations Not Working
**Cause:** Intersection Observer not supported or threshold too high
**Solution:** Check browser compatibility, adjust threshold

---

## 🔧 Development Guidelines

### Code Style
- ES Modules (import/export)
- No semicolons (optional, project uses them)
- Single quotes for strings
- camelCase for variables/functions
- Descriptive function names

### Adding New Components
1. Create file in `src/components/`
2. Export `init*()` function
3. Import in `src/main.js`
4. Call in `DOMContentLoaded` handler

### CSS Conventions
- Use CSS Custom Properties for colors
- BEM-like naming (`.block__element--modifier`)
- Mobile-first media queries
- Avoid `!important`

### Git Workflow
- Feature branches from `main`
- Descriptive commit messages
- Pull request reviews (if team)

---

## 📚 Related Documentation

- **HERMES_AGENT.md** — Hermes AI agent setup instructions
- **OFFLINE_SCALE.md** — Scaling considerations for 100k+ DAU (Android app context)
- **public/privacy-policy/index.html** — Full privacy policy

---

## 🤖 Agent Instructions

When working on this project:

1. **Always read before editing** — Use `read` tool to understand file content first
2. **Preserve structure** — Keep component separation intact
3. **Test responsiveness** — Check mobile (375px) and desktop (1440px)
4. **Maintain accessibility** — Keep ARIA attributes, semantic HTML
5. **Performance first** — Avoid adding heavy dependencies
6. **Security aware** — Sanitize inputs, respect CSP
7. **Dark mode default** — New styles should work in both themes

### Commands Reference
```bash
npm run dev      # Start Astro development server
npm run build    # Production build
npm run preview  # Preview production build
```

### File Edit Priorities
1. `src/pages/index.astro` — Content changes
2. `src/style.css` — Styling changes
3. `src/components/*.js` — Behavior changes
4. `netlify/functions/subscribe.mjs` — API changes
5. `vite.config.js` — Build config (rare)
6. `netlify.toml` — Deployment config (rare)

---

*Last updated: 2026-06-02*
*Generated for pi coding agent*
