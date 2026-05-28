// ---------------------------------------------------------------------------
// Animated Counter — counts up when scrolled into view
// ---------------------------------------------------------------------------

export function initCounter() {
  const el = document.querySelector('.problem-stat-num');
  if (!el) return;

  const target = parseInt(el.dataset.target || el.textContent, 10) || 3;
  let animated = false;

  const obs = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting && !animated) {
      animated = true;
      obs.unobserve(el);
      run(el, target);
    }
  }, { threshold: 0.5 });

  obs.observe(el);
}

function run(el, target) {
  const dur = 1600;
  const start = performance.now();
  const suffix = el.dataset.suffix || '';

  function tick(now) {
    const t = Math.min((now - start) / dur, 1);
    // ease-out quart
    const eased = 1 - Math.pow(1 - t, 4);
    const val = Math.round(eased * target);
    el.textContent = val + suffix;
    if (t < 1) requestAnimationFrame(tick);
    else el.textContent = target + suffix;
  }

  requestAnimationFrame(tick);
}
