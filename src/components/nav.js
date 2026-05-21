export function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const isActive = links.classList.toggle('active');
    toggle.classList.toggle('active');
    document.body.style.overflow = isActive ? 'hidden' : '';
  });

  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('active');
      toggle.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}
