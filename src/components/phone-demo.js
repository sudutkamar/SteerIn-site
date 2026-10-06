// ---------------------------------------------------------------------------
// Phone demo — interactive app preview (Dasbor / Garasi / Lokasi / Pengaturan)
// Click, tap, swipe, keyboard. No dependencies.
// ---------------------------------------------------------------------------

import { t } from './lang.js';

const ORDER = ['dash', 'garage', 'maps', 'settings'];

export function initPhoneDemo() {
  const phone = document.getElementById('phone-demo');
  if (!phone || phone.dataset.initialized) return;
  phone.dataset.initialized = '1';

  const tabs = Array.from(phone.querySelectorAll('[data-demo-tab]'));
  const screens = Array.from(phone.querySelectorAll('[data-demo-screen]'));
  if (!tabs.length || !screens.length) return;
  tabs.forEach(tab => {
    const name = tab.dataset.demoTab;
    tab.id = `demo-tab-${name}`;
    tab.setAttribute('aria-controls', `demo-panel-${name}`);
    tab.tabIndex = name === 'dash' ? 0 : -1;
  });

  // Graceful fallback if screenshot files are not added yet
  screens.forEach((s) => {
    const img = s.querySelector('img');
    img?.addEventListener('error', () => s.classList.add('is-missing'));
    if (img && img.complete && img.naturalWidth === 0) s.classList.add('is-missing');
  });

  let current = 'dash';
  let touchX = null;
  let touchY = null;

  function show(name) {
    if (!ORDER.includes(name)) return;
    current = name;
    phone.dataset.activeScreen = name;
    screens.forEach((s) => {
      const on = s.dataset.demoScreen === name;
      s.classList.toggle('is-active', on);
      if (on) s.removeAttribute('hidden');
      else s.setAttribute('hidden', '');
    });
    tabs.forEach((t) => {
      const on = t.dataset.demoTab === name;
      t.classList.toggle('is-active', on);
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
    });
  }

  tabs.forEach((t) => {
    t.addEventListener('click', () => show(t.dataset.demoTab));
  });

  // Swipe on the screen area (horizontal only — vertical scrolls the screen)
  const app = phone.querySelector('#phone-app');
  app?.addEventListener('touchstart', (e) => {
    touchX = e.touches[0].clientX;
    touchY = e.touches[0].clientY;
  }, { passive: true });
  app?.addEventListener('touchend', (e) => {
    if (touchX === null || touchY === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    const dy = e.changedTouches[0].clientY - touchY;
    touchX = null;
    touchY = null;
    if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
    const i = ORDER.indexOf(current);
    if (dx < 0 && i < ORDER.length - 1) show(ORDER[i + 1]);
    if (dx > 0 && i > 0) show(ORDER[i - 1]);
  }, { passive: true });

  phone.querySelector('[role="tablist"]')?.addEventListener('keydown', e => {
    if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(e.key)) return;
    e.preventDefault();
    const i = ORDER.indexOf(current);
    const next = e.key === 'Home' ? 0 : e.key === 'End' ? ORDER.length - 1
      : (i + (e.key === 'ArrowRight' ? 1 : -1) + ORDER.length) % ORDER.length;
    show(ORDER[next]);
    tabs.find(tab => tab.dataset.demoTab === ORDER[next])?.focus();
  });

  // ── Toast ──
  const toast = phone.querySelector('#demo-toast');
  let toastTimer = null;
  function notify(msgKey) {
    if (!toast) return;
    toast.textContent = t(msgKey);
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
  }

  // ── Range chips (Dasbor) ──
  const chips = Array.from(phone.querySelectorAll('[data-chip]'));
  const rangeLabel = phone.querySelector('.demo-range');
  const rangeLabel2 = phone.querySelector('.demo-range2');
  chips.forEach((c) => {
    c.addEventListener('click', () => {
      chips.forEach((x) => x.classList.remove('on'));
      c.classList.add('on');
      const v = c.dataset.chip;
      if (rangeLabel) rangeLabel.textContent = v;
      if (rangeLabel2) rangeLabel2.textContent = v === 'Semua' ? 'Jarak (semua)' : `Jarak (${v})`;
    });
  });

  // ── Odometer banner (Garasi) ──
  const odoBanner = phone.querySelector('#demo-odo-banner');
  const odoActions = phone.querySelector('#demo-odo-actions');
  phone.querySelector('[data-odo="sync"]')?.addEventListener('click', () => {
    odoActions?.setAttribute('hidden', '');
    notify('demo.toast.odo');
  });
  phone.querySelector('[data-odo="later"]')?.addEventListener('click', () => {
    odoBanner?.setAttribute('hidden', '');
    odoActions?.setAttribute('hidden', '');
  });

  // ── Expandable detail (Garasi) ──
  phone.querySelectorAll('[data-detail]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const panel = phone.querySelector(`#${btn.dataset.detail}`);
      if (!panel) return;
      const open = panel.hasAttribute('hidden');
      if (open) panel.removeAttribute('hidden');
      else panel.setAttribute('hidden', '');
      btn.setAttribute('aria-expanded', String(open));
    });
  });

  // ── Toast buttons (Rute, Kelola) ──
  phone.querySelectorAll('[data-act-toast]').forEach((btn) => {
    btn.addEventListener('click', () => notify(`demo.toast.${btn.dataset.actToast}`));
  });

  // ── Theme switch (Pengaturan) — actually re-themes the demo phone ──
  const themeBtns = Array.from(phone.querySelectorAll('[data-demo-theme]'));
  themeBtns.forEach((b) => {
    b.addEventListener('click', () => {
      themeBtns.forEach((x) => x.classList.remove('on'));
      b.classList.add('on');
      const mode = b.dataset.demoTheme;
      if (mode === 'system') phone.removeAttribute('data-demo-theme');
      else phone.setAttribute('data-demo-theme', mode);
    });
  });
}
