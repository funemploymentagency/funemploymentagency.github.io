// Replace this with your live Tally Form URL when you create it.
const TALLY_FORM_URL = 'https://tally.so/r/ODXJpk';

function setApplyLinks() {
  const btn = document.getElementById('applyButton');
  const fallback = document.getElementById('applyFallback');
  if (btn) btn.href = TALLY_FORM_URL;
  if (fallback) fallback.href = TALLY_FORM_URL;
}

function setYear() {
  const y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
}

function copyPageLink() {
  const btn = document.getElementById('copyLink');
  if (!btn) return;

  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      btn.textContent = 'Copied';
      setTimeout(() => (btn.textContent = 'Copy link'), 1200);
    } catch {
      window.prompt('Copy this link:', window.location.href);
    }
  });
}

function trackCtaClicks() {
  // Minimal hook. You can replace this with real analytics later.
  document.addEventListener('click', (e) => {
    const a = e.target.closest('[data-cta]');
    if (!a) return;
    console.log('CTA_CLICK', a.getAttribute('data-cta'));
  });
}

setApplyLinks();
setYear();
copyPageLink();
trackCtaClicks();
