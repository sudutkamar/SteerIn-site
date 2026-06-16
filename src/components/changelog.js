/**
 * Changelog component
 * - Detects recent changelog entries (within 7 days)
 * - Shows "New" badge on nav link
 * - Manages filter tabs on changelog page
 */

const CHANGELOG_KEY = 'steerin_changelog_seen';
const RECENT_DAYS = 7;

function isRecent(dateStr) {
  const entryDate = new Date(dateStr);
  const now = new Date();
  const diffMs = now - entryDate;
  const diffDays = diffMs / (1000 * 60 * 60 * 24);
  return diffDays <= RECENT_DAYS;
}

function getLatestVersion() {
  try {
    const badge = document.querySelector('.changelog-entry--latest .changelog-version');
    return badge?.textContent?.trim() || null;
  } catch {
    return null;
  }
}

function hasUnseenUpdate() {
  try {
    const seen = localStorage.getItem(CHANGELOG_KEY);
    const latest = getLatestVersion();
    if (!latest) return false;
    return seen !== latest;
  } catch {
    return false;
  }
}

function markAsSeen() {
  try {
    const latest = getLatestVersion();
    if (latest) {
      localStorage.setItem(CHANGELOG_KEY, latest);
    }
  } catch {}
}

function initNavBadge() {
  const navLink = document.querySelector('.nav-changelog');
  if (!navLink) return;

  // Check if latest entry is recent
  const latestEntry = document.querySelector('.changelog-entry--latest');
  const dateAttr = latestEntry?.querySelector('.changelog-date')?.getAttribute('datetime');

  if (dateAttr && isRecent(dateAttr) && hasUnseenUpdate()) {
    navLink.classList.add('has-new');
  }

  // Mark as seen when clicked
  navLink.addEventListener('click', () => {
    markAsSeen();
    navLink.classList.remove('has-new');
  });
}

function initFilters() {
  const filterBtns = document.querySelectorAll('.changelog-filter-btn');
  const entries = document.querySelectorAll('.changelog-entry');

  if (!filterBtns.length || !entries.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // Update active state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter entries
      entries.forEach(entry => {
        const type = entry.dataset.type;
        if (filter === 'all' || type === filter) {
          entry.style.display = '';
          entry.style.opacity = '0';
          entry.style.transform = 'translateY(16px)';
          requestAnimationFrame(() => {
            entry.style.transition = 'opacity 0.3s, transform 0.3s';
            entry.style.opacity = '1';
            entry.style.transform = 'translateY(0)';
          });
        } else {
          entry.style.display = 'none';
        }
      });

      // Update timeline visibility
      const timeline = document.querySelector('.changelog-timeline');
      const visibleCount = document.querySelectorAll('.changelog-entry[style=""], .changelog-entry:not([style])').length;
      if (timeline) {
        timeline.classList.toggle('changelog-timeline--filtered', filter !== 'all');
      }
    });
  });
}

function initChangelogNavMobile() {
  // Add changelog link to mobile nav if it exists
  const mobileNav = document.querySelector('.nav-links');
  const existingLink = mobileNav?.querySelector('.nav-changelog');
  if (!mobileNav || existingLink) return;

  // Clone from desktop nav or create new
  const desktopLink = document.querySelector('.nav-links .nav-changelog');
  if (desktopLink) {
    const clone = desktopLink.cloneNode(true);
    // Insert before the CTA button
    const cta = mobileNav.querySelector('.nav-cta');
    if (cta) {
      mobileNav.insertBefore(clone, cta);
    }
  }
}

export function initChangelog() {
  initNavBadge();
  initFilters();
  initChangelogNavMobile();
}
