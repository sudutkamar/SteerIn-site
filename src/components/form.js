export function initForms() {
  document.querySelectorAll('[data-form]').forEach(form => {
    form.addEventListener('submit', async e => {
      e.preventDefault();

      const input = form.querySelector('.form-input');
      const success = form.querySelector('.form-success');
      const error = form.querySelector('.form-error');
      const btn = form.querySelector('.form-btn');
      const email = input?.value.trim();

      if (!email) return;

      // Disable
      input.disabled = true;
      if (btn) btn.disabled = true;
      if (error) error.classList.remove('visible');

      try {
        const res = await fetch('/api/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });

        const data = await res.json();

        if (res.ok && data.success) {
          if (success) {
            success.classList.add('visible');
            success.textContent = data.message || "✓ You're on the list! We'll notify you when SteerIn launches.";
          }
          if (input) input.style.display = 'none';
          if (btn) btn.style.display = 'none';
        } else {
          if (error) {
            error.textContent = data.error || 'Something went wrong. Try again.';
            error.classList.add('visible');
          }
          input.disabled = false;
          if (btn) btn.disabled = false;
        }
      } catch {
        if (error) {
          error.textContent = 'Connection error. Please try again.';
          error.classList.add('visible');
        }
        input.disabled = false;
        if (btn) btn.disabled = false;
      }
    });
  });
}
