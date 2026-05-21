export function initTheme() {
  const toggle = document.querySelector('.theme-toggle');
  const html = document.documentElement;

  const stored = localStorage.getItem('steerin-theme');
  if (stored) html.setAttribute('data-theme', stored);

  toggle?.addEventListener('click', () => {
    const cur = html.getAttribute('data-theme');
    const nxt = cur === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', nxt);
    localStorage.setItem('steerin-theme', nxt);
  });
}
