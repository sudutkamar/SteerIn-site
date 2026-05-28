import { initTheme } from './components/theme.js';
import { initNav } from './components/nav.js';
import { initFAQ } from './components/faq.js';
import { initAnimations } from './components/animate.js';
import { initForms } from './components/form.js';
import { initTilt } from './components/tilt.js';
import { initCounter } from './components/counter.js';
import { initMouseGlow } from './components/mouse.js';
import { init3DScene } from './components/canvas3d.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNav();
  initFAQ();
  initAnimations();
  initForms();
  initTilt();
  initCounter();
  initMouseGlow();
  // 3D scene loads asynchronously (code-split Three.js)
  init3DScene();
});
