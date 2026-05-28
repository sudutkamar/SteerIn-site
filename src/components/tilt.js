// ---------------------------------------------------------------------------
// 3D Tilt Effect — feature cards follow mouse with perspective transform
// ---------------------------------------------------------------------------

export function initTilt() {
  const cards = document.querySelectorAll('.feature-card');
  if (!cards.length || window.innerWidth < 900) return;

  cards.forEach(card => {
    card.addEventListener('mousemove', onMove);
    card.addEventListener('mouseleave', onLeave);
  });
}

function onMove(e) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const cx = rect.width / 2;
  const cy = rect.height / 2;

  const rotateX = ((y - cy) / cy) * -6;   // max ±6°
  const rotateY = ((x - cx) / cx) * 6;

  // Dynamic glare
  card.style.setProperty('--tilt-x', `${((x / rect.width) * 100)}%`);
  card.style.setProperty('--tilt-y', `${((y / rect.height) * 100)}%`);

  card.style.transform =
    `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px) scale(1.01)`;
}

function onLeave(e) {
  const card = e.currentTarget;
  card.style.transform = '';
  card.style.removeProperty('--tilt-x');
  card.style.removeProperty('--tilt-y');
}
