/**
 * SHA-256 Verification Component
 * Displays hash in tooltip without exposing a downloadable .sha256 file
 */

export function initSHA256() {
  const verifyBtn = document.querySelector('.btn--verify[data-sha256-hash]')
  if (!verifyBtn) return

  const tooltip = verifyBtn.querySelector('.sha256-tooltip')
  if (!tooltip) return

  const hashData = verifyBtn.dataset.sha256Hash

  verifyBtn.addEventListener('click', (e) => {
    e.preventDefault()

    const isVisible = tooltip.classList.contains('visible')
    tooltip.classList.toggle('visible', !isVisible)
    tooltip.setAttribute('aria-hidden', String(isVisible))
    tooltip.textContent = hashData
  })

  document.addEventListener('click', (e) => {
    if (!verifyBtn.contains(e.target) && tooltip.classList.contains('visible')) {
      tooltip.classList.remove('visible')
      tooltip.setAttribute('aria-hidden', 'true')
    }
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && tooltip.classList.contains('visible')) {
      tooltip.classList.remove('visible')
      tooltip.setAttribute('aria-hidden', 'true')
    }
  })
}
