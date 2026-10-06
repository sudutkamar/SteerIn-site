import { t } from './lang.js';

export async function submitWaitlist(action, email) {
  const payload = new URLSearchParams({
    'form-name': 'early-access',
    email: email.trim(),
    website: '',
  });
  const response = await fetch(action, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: payload.toString(),
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
}

export function initForms() {
  document.querySelectorAll('[data-form]').forEach(form => {
    form.addEventListener('submit', async event => {
      event.preventDefault();
      const input = form.querySelector('[name="email"]');
      const button = form.querySelector('[type="submit"]');
      const success = form.querySelector('.form-success');
      const error = form.querySelector('.form-error');
      if (form.querySelector('[name="website"]')?.value) return;
      if (!input?.checkValidity()) {
        input?.reportValidity();
        return;
      }

      button.disabled = true;
      input.disabled = true;
      error.classList.remove('visible');
      success.classList.remove('visible');
      button.setAttribute('aria-busy', 'true');
      try {
        await submitWaitlist(form.action, input.value);
        success.textContent = t('form.success');
        success.classList.add('visible');
        button.hidden = true;
        input.hidden = true;
      } catch {
        error.textContent = t('form.error');
        error.classList.add('visible');
        input.disabled = false;
        button.disabled = false;
        input.focus();
      } finally {
        button.removeAttribute('aria-busy');
      }
    });
  });
}
