import { initTheme } from './components/theme.js';
import { initNav } from './components/nav.js';
import { initFAQ } from './components/faq.js';
import { initAnimations } from './components/animate.js';
import { initForms } from './components/form.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNav();
  initFAQ();
  initAnimations();
  initForms();
});
