import { initTheme } from './components/theme.js';
import { initNav } from './components/nav.js';
import { initFAQ } from './components/faq.js';
import { initAnimations } from './components/animate.js';
import { initForms } from './components/form.js';
import { initTilt } from './components/tilt.js';
import { initCounter } from './components/counter.js';
import { initMouseGlow } from './components/mouse.js';
import { init3DScene } from './components/canvas3d.js';
import { initChangelog } from './components/changelog.js';
import { initLang } from './components/lang.js';
import { initStickyCta } from './components/stickyCta.js';
import { initSHA256 } from './components/sha256.js';

/* ── Phone clock — WIB (UTC+7) ── */
function initPhoneClock() {
  const el = document.getElementById('phone-clock');
  if (!el) return;

  function updateWIB() {
    const now = new Date();
    const wib = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));
    const h = wib.getHours();
    const m = wib.getMinutes();
    el.textContent = `${h}:${m.toString().padStart(2, '0')}`;
  }

  updateWIB();
  setInterval(updateWIB, 10_000); // update every 10 seconds
}

function hideLoadingScreen() {
  const screen = document.getElementById('loading-screen');
  if (!screen) return;

  // Ensure the progress bar animation has time to finish
  const MIN_DISPLAY_MS = 600;
  const start = performance.timing?.navigationStart || performance.now();
  const elapsed = performance.now() - start;
  const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);

  setTimeout(() => {
    screen.classList.add('loaded');
    // Remove from DOM after transition completes
    screen.addEventListener('transitionend', () => screen.remove(), { once: true });
    // Fallback removal in case transitionend doesn't fire
    setTimeout(() => screen.remove(), 600);
  }, remaining);
}

document.addEventListener('DOMContentLoaded', () => {
  initLang();
  initTheme();
  initNav();
  initPhoneClock();
  initFAQ();
  initAnimations();
  initForms();
  initTilt();
  initCounter();
  initMouseGlow();
  initChangelog();
  initStickyCta();
  initSHA256();
  // 3D scene loads asynchronously (code-split Three.js)
  init3DScene();

  // Dismiss loading screen after all components are ready
  hideLoadingScreen();
});
