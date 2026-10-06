import { initTheme } from './components/theme.js';
import { initNav } from './components/nav.js';
import { initFAQ } from './components/faq.js';
import { initAnimations } from './components/animate.js';
import { initForms } from './components/form.js';
import { initTilt } from './components/tilt.js';
import { initCounter } from './components/counter.js';
import { initMouseGlow } from './components/mouse.js';
import { initPhoneDemo } from './components/phone-demo.js';
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
  // Interactive phone demo (hero)
  initPhoneDemo();

});
