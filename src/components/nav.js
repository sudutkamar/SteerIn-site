export function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const sidebar = document.querySelector('.nav-sidebar');
  const overlay = document.querySelector('.nav-overlay');
  const closeBtn = document.querySelector('.sidebar-close');
  if (!toggle || !sidebar) return;

  const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
  let isAnimating = false;
  let lastFocused = null;
  let scrollY = 0;

  sidebar.setAttribute('aria-hidden', 'true');
  overlay?.setAttribute('aria-hidden', 'true');

  function getFocusable() {
    return [...sidebar.querySelectorAll(focusableSelector)].filter(el => el.offsetParent !== null);
  }

  function lockBody() {
    scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
  }

  function unlockBody() {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.width = '';
    window.scrollTo(0, scrollY);
  }

  function openMenu() {
    if (isAnimating) return;
    isAnimating = true;
    lastFocused = document.activeElement;
    sidebar.classList.add('active');
    toggle.classList.add('active');
    toggle.setAttribute('aria-expanded', 'true');
    sidebar.setAttribute('aria-hidden', 'false');
    overlay?.classList.add('active');
    overlay?.setAttribute('aria-hidden', 'false');
    document.body.classList.add('sidebar-open');
    lockBody();
    setTimeout(() => {
      isAnimating = false;
      (closeBtn || getFocusable()[0] || sidebar).focus?.();
    }, 300);
  }

  function closeMenu({ restoreFocus = true } = {}) {
    if (isAnimating) return;
    isAnimating = true;
    sidebar.classList.remove('active');
    toggle.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
    sidebar.setAttribute('aria-hidden', 'true');
    overlay?.classList.remove('active');
    overlay?.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('sidebar-open');
    unlockBody();
    setTimeout(() => {
      isAnimating = false;
      if (restoreFocus) (lastFocused || toggle).focus?.();
    }, 300);
  }

  toggle.addEventListener('click', () => {
    sidebar.classList.contains('active') ? closeMenu() : openMenu();
  });

  closeBtn?.addEventListener('click', () => closeMenu());
  overlay?.addEventListener('click', () => closeMenu());

  sidebar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => closeMenu({ restoreFocus: false }));
  });

  const sectionLinks = [...sidebar.querySelectorAll('a[href^="#"]')];
  const sectionObserver = sectionLinks.length && 'IntersectionObserver' in window
    ? new IntersectionObserver((entries) => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        sectionLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${visible.target.id}`);
        });
      }, { rootMargin: '-30% 0px -55%', threshold: [0.1, 0.35, 0.6] })
    : null;

  if (sectionObserver) {
    sectionLinks.forEach(link => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) sectionObserver.observe(target);
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!sidebar.classList.contains('active')) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      closeMenu();
      return;
    }

    if (e.key !== 'Tab') return;
    const focusable = getFocusable();
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });
}
