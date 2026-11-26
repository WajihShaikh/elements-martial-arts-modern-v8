/* Elements Modern V6: interaction polish. Static stack, vanilla JS only. */
(() => {
  'use strict';

  const doc = document;
  const body = doc.body;
  const header = doc.querySelector('.header');
  if (!(body && body.classList.contains('modern-v6'))) return;

  /* Scroll progress bar */
  const bar = doc.createElement('div');
  bar.className = 'scroll-progress';
  bar.setAttribute('aria-hidden', 'true');
  body.append(bar);

  /* Compact header: hide on scroll down, reveal on scroll up */
  let lastY = 0;
  let ticking = false;

  function onFrame() {
    const y = scrollY;
    const h = doc.documentElement.scrollHeight - innerHeight;
    bar.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';

    if (header) {
      if (y > 360 && y > lastY + 6 && !header.classList.contains('menu-open')) {
        header.classList.add('nav-hidden');
      } else if (y < lastY - 6 || y <= 360) {
        header.classList.remove('nav-hidden');
      }
    }
    lastY = y;
    ticking = false;
  }

  addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(onFrame); }
  }, { passive: true });
  onFrame();

  /* Mark the current page in nav, subnav and tab links */
  const here = location.pathname.replace(/index\.html?$/, '');
  doc.querySelectorAll('.nav a[href], .jump-inner a[href], .tabs a[href]').forEach(a => {
    const target = new URL(a.getAttribute('href'), location.href);
    const tp = target.pathname.replace(/index\.html?$/, '');
    if (tp === here && !target.hash) a.setAttribute('aria-current', 'page');
  });
})();
