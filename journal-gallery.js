document.querySelectorAll('.lab-gallery').forEach(gallery => {
  const slides = [...gallery.querySelectorAll('.lab-slide')];
  const thumbs = [...gallery.querySelectorAll('.lab-thumb')];
  let current = 0;
  function show(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      if (i !== current) slide.querySelector('video')?.pause();
      slide.hidden = i !== current;
      thumbs[i].setAttribute('aria-pressed', String(i === current));
    });
    const strip = gallery.querySelector('.lab-thumbnails');
    if (strip.scrollWidth > strip.clientWidth) {
      const thumb = thumbs[current];
      const left = thumb.getBoundingClientRect().left - strip.getBoundingClientRect().left + strip.scrollLeft;
      strip.scrollLeft = left - (strip.clientWidth - thumb.offsetWidth) / 2;
    }
    const slide = slides[current];
    gallery.querySelector('.lab-caption').hidden = !slide.dataset.title && !slide.dataset.caption;
    gallery.querySelector('[data-gallery-caption-title]').textContent = slide.dataset.title;
    gallery.querySelector('[data-gallery-caption-text]').textContent = slide.dataset.caption;
    gallery.querySelector('[data-gallery-kind]').textContent = slide.dataset.kind.toUpperCase();
    gallery.querySelector('[data-gallery-count]').textContent = `${String(current + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
  }
  thumbs.forEach((thumb, i) => thumb.addEventListener('click', () => show(i)));
  gallery.querySelector('[data-gallery-prev]').addEventListener('click', () => show(current - 1));
  gallery.querySelector('[data-gallery-next]').addEventListener('click', () => show(current + 1));
  gallery.addEventListener('keydown', event => {
    if (event.target.closest('video')) return;
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      show(current + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });
  const viewer = gallery.querySelector('.lab-viewer');
  let touchStart = null;
  viewer.addEventListener('touchstart', event => {
    touchStart = event.touches.length === 1 && !event.target.closest('video')
      ? { x: event.touches[0].clientX, y: event.touches[0].clientY } : null;
  }, { passive: true });
  viewer.addEventListener('touchend', event => {
    if (!touchStart) return;
    const dx = event.changedTouches[0].clientX - touchStart.x;
    const dy = event.changedTouches[0].clientY - touchStart.y;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) show(current + (dx < 0 ? 1 : -1));
    touchStart = null;
  }, { passive: true });
  viewer.addEventListener('touchcancel', () => { touchStart = null; }, { passive: true });
  // Keep the previously shared video link useful after moving it into the gallery.
  if (gallery.querySelector('#open-lab-video') && location.hash === '#open-lab-video') show(2);
  window.addEventListener('hashchange', () => { if (gallery.querySelector('#open-lab-video') && location.hash === '#open-lab-video') show(2); });
});
