export function initStickyCta() {
  const sticky = document.querySelector('.mobile-sticky-cta');
  if (!sticky) return;

  const update = () => {
    const shouldShow = window.innerWidth <= 640 && window.scrollY > 520;
    sticky.classList.toggle('is-visible', shouldShow);
  };

  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
}
