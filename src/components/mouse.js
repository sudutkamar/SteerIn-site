// ---------------------------------------------------------------------------
// 2D Mouse Effects — cursor glow + hero parallax
// Smooth lerp-based radial gradient follower + depth parallax on hero
// ---------------------------------------------------------------------------

let glow, glowPos = { x: 0, y: 0 }, mousePos = { x: 0.5, y: 0.5 };
let rafId = null;
let heroContent, heroVisual;
let hasMouse = false;

export function initMouseGlow() {
  // Only on devices with fine pointer (mouse, not touch)
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  hasMouse = true;
  glow = document.getElementById('cursor-glow');
  if (!glow) return;

  heroContent = document.querySelector('.hero-content');
  heroVisual = document.querySelector('.hero-visual');

  // Start hidden, fade in on first mouse move
  glow.style.opacity = '0';

  document.addEventListener('mousemove', onFirstMove, { once: true, passive: true });
  document.addEventListener('mousemove', onMove, { passive: true });

  tick();
}

function onFirstMove(e) {
  if (!glow) return;
  glow.style.opacity = '1';
  syncPos(e);
}

function onMove(e) {
  if (!hasMouse) return;
  mousePos.x = e.clientX / window.innerWidth;
  mousePos.y = e.clientY / window.innerHeight;
}

function syncPos(e) {
  glowPos.x = e.clientX;
  glowPos.y = e.clientY;
  mousePos.x = e.clientX / window.innerWidth;
  mousePos.y = e.clientY / window.innerHeight;
}

function tick() {
  rafId = requestAnimationFrame(tick);

  if (!hasMouse) return;

  // ── Cursor glow (smooth lerp) ──
  if (glow) {
    const cx = window.innerWidth * mousePos.x;
    const cy = window.innerHeight * mousePos.y;
    glowPos.x += (cx - glowPos.x) * 0.08;
    glowPos.y += (cy - glowPos.y) * 0.08;
    glow.style.translate = `${glowPos.x - 150}px ${glowPos.y - 150}px`;
  }

  // ── Hero parallax (depth layering) ──
  if (heroContent) {
    const dx = (mousePos.x - 0.5) * 12;
    const dy = (mousePos.y - 0.5) * 8;
    heroContent.style.translate = `${dx * 0.4}px ${dy * 0.3}px`;
  }
  if (heroVisual) {
    const dx = (mousePos.x - 0.5) * 12;
    const dy = (mousePos.y - 0.5) * 8;
    heroVisual.style.translate = `${dx * -0.6}px ${dy * -0.4}px`;
  }
}

export function destroyMouseGlow() {
  if (rafId) cancelAnimationFrame(rafId);
  document.removeEventListener('mousemove', onMove);
}
