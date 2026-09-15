(() => {
  function initGeckoCursor(assetUrl) {
    const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
    if (document.querySelector('.gecko-cursor')) return;
    const cursor = document.createElement('div');
    cursor.className = 'gecko-cursor';
    cursor.setAttribute('aria-hidden', 'true');
    // Both layers use the original cutout. The raised arm hinges forward at the shoulder; the body stays fixed.
    cursor.innerHTML = `<svg class="gecko-cursor-art" viewBox="0 0 564 354" focusable="false">
      <defs>
        <clipPath id="gecko-arm-clip"><path d="M145 110H224L227 168L250 177L248 211L211 212L175 192L145 173Z"/></clipPath>
        <mask id="gecko-body-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="564" height="354">
          <rect width="564" height="354" fill="white"/>
          <path d="M145 110H224L225 173L225 179L225 207L211 212L175 192L145 173Z" fill="black"/>
        </mask>
      </defs>
      <g class="gecko-cursor-arm"><image href="${assetUrl}" width="564" height="354" clip-path="url(#gecko-arm-clip)"/></g>
      <image href="${assetUrl}" width="564" height="354" mask="url(#gecko-body-mask)"/>
    </svg>`;
    document.body.append(cursor);
    let loaded = false;
    let pendingPointer = null;
    let pressedAt = 0;
    let releaseTimer;
    const resetPress = () => {
      clearTimeout(releaseTimer);
      cursor.classList.remove('is-pressed');
    };
    const hide = () => {
      pendingPointer = null;
      resetPress();
      cursor.classList.remove('is-visible');
      document.body.classList.remove('gecko-cursor-ready');
    };
    const follow = event => {
      const target = event.composedPath().find(node => node instanceof Element);
      const editable = target?.closest('input, textarea, [contenteditable]:not([contenteditable="false"])');
      if (!finePointer.matches || event.pointerType !== 'mouse' || editable) {
        hide();
        return false;
      }
      if (!loaded) { pendingPointer = event; return false; }
      pendingPointer = null;
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      cursor.classList.toggle('is-active', Boolean(target?.closest('a, button, summary, select, [role="button"]')));
      cursor.classList.add('is-visible');
      document.body.classList.add('gecko-cursor-ready');
      return true;
    };
    document.addEventListener('pointermove', follow, { passive:true, capture:true });
    document.addEventListener('pointerdown', event => {
      if (event.button !== 0 || !follow(event)) return;
      clearTimeout(releaseTimer);
      pressedAt = performance.now();
      cursor.classList.add('is-pressed');
    }, { passive:true, capture:true });
    window.addEventListener('pointerup', event => {
      if (event.button !== 0) return;
      // Keep quick clicks visible, and keep the hand down for a held mouse button.
      releaseTimer = setTimeout(resetPress, Math.max(0, 260 - (performance.now() - pressedAt)));
    }, { passive:true, capture:true });
    window.addEventListener('pointercancel', hide, { passive:true });
    document.documentElement.addEventListener('pointerleave', hide, { passive:true });
    window.addEventListener('blur', hide);
    document.addEventListener('visibilitychange', () => { if (document.hidden) hide(); });
    finePointer.addEventListener('change', hide);
    const image = new Image();
    image.onload = () => {
      loaded = true;
      if (pendingPointer) follow(pendingPointer);
    };
    image.onerror = hide;
    image.src = assetUrl;
  }

  class SiteIndex extends HTMLElement {
    connectedCallback() {
      const root = this.dataset.root || '.';
      const path = location.pathname.toLowerCase();
      const params = new URLSearchParams(location.search);
      const isSample = path.endsWith('/species.html') && params.has('sample');
      const isShrimpinaRoute = path.includes('/groups/shrimpina') || path.endsWith('/research.html') || path.endsWith('/journal.html') || path.endsWith('/conditions.html') || path.endsWith('/lab.html') || isSample;
      const current = path.endsWith('/map.html') ? 'map'
        : path.endsWith('/observations.html') ? 'observations'
        : isSample ? 'archive'
        : path.includes('/groups/shrimpina') && location.hash === '#g-species' ? 'archive'
        : path.endsWith('/journal.html') ? 'journal'
        : path.endsWith('/conditions.html') ? 'conditions'
        : path.endsWith('/research.html') ? 'research'
        : path.endsWith('/lab.html') ? 'lab'
        : isShrimpinaRoute ? 'shrimpina'
        : path.endsWith('/species.html') ? 'map'
        : 'home';
      const href = value => root === '.' ? value : `${root}/${value}`;
      const link = (key, value, label) => `<a data-nav-key="${key}" href="${href(value)}"${current === key ? ' aria-current="page"' : ''}>${label}</a>`;
      const navGroup = (key, value, label, children = []) => `<div class="site-nav-group">
        ${link(key, value, label)}
        ${children.length ? `<div class="site-nav-dropdown">${children.map(item => `<a href="${item.external ? item.value : href(item.value)}"${item.external ? ' target="_blank" rel="noopener"' : ''}>${item.label}</a>`).join('')}</div>` : ''}
      </div>`;
      const primaryNavigation = `${navGroup('home', 'index.html', 'MBL', [
            { value:'index.html#about-mbl', label:'What is the MBL?' },
            { value:'index.html#field-map', label:'Course Collection' }
          ])}
          ${navGroup('map', 'map.html', 'Collection Map', [
            { value:'map.html#explorerMap', label:'Interactive Map' },
            { value:'map.html#resultsHeading', label:'Specimen List' }
          ])}
          ${navGroup('observations', 'observations.html', 'Observations', [
            { value:'observations.html#obsGrid', label:'Browse Observations' },
            { value:'https://www.inaturalist.org/projects/bios-27723-woods-hole-biodiversity', label:'Open in iNaturalist', external:true }
          ])}
          ${navGroup('shrimpina', 'groups/shrimpina.html', 'Shrimpina', [
            { value:'groups/shrimpina.html', label:'Project Overview' },
            { value:'groups/shrimpina.html#g-species', label:'Specimen Archive' },
            { value:'research.html', label:'Research Guide' },
            { value:'journal.html', label:'Field Journal' },
            { value:'conditions.html', label:'Field Conditions' },
            { value:'lab.html', label:'Laboratory' }
          ])}`;

      this.classList.toggle('is-shrimpina', isShrimpinaRoute);
      if (isShrimpinaRoute) initGeckoCursor(href('assets/gecko-cursor.png'));
      this.innerHTML = `<header class="site-masthead">
        <div class="site-masthead-inner">
          <a class="site-masthead-brand" href="${href('index.html')}" aria-label="Woods Hole Biodiversity Survey home">
            <img src="${href('assets/mbl-logo.png')}" alt="The University of Chicago Marine Biological Laboratory">
          </a>
          <nav class="site-masthead-primary" aria-label="Primary navigation">
            ${primaryNavigation}
          </nav>
          <details class="site-masthead-menu">
            <summary><span class="menu-open-label">Menu</span><span class="menu-close-label">Close</span><i aria-hidden="true"></i></summary>
            <div class="site-masthead-panel">
              <p>Woods Hole Biodiversity Survey</p>
              <nav aria-label="All pages">
                ${link('home', 'index.html', 'MBL overview')}
                ${link('map', 'map.html', 'Collection map')}
                ${link('observations', 'observations.html', 'Observations')}
                ${link('shrimpina', 'groups/shrimpina.html', 'Shrimpina project')}
                ${link('archive', 'groups/shrimpina.html#g-species', 'Specimen Archive')}
                ${link('research', 'research.html', 'Research Guide')}
                ${link('journal', 'journal.html', 'Field Journal')}
                ${link('conditions', 'conditions.html', 'Field Conditions')}
                ${link('lab', 'lab.html', 'Laboratory')}
              </nav>
              <small>Marine Biological Laboratory · 2026</small>
            </div>
          </details>
        </div>
      </header>`;

      if (isShrimpinaRoute) {
        this.querySelectorAll('.site-masthead-primary a[aria-current="page"]').forEach(anchor => anchor.removeAttribute('aria-current'));
        this.querySelector('.site-masthead-primary a[data-nav-key="shrimpina"]')?.setAttribute('aria-current', 'page');
      }

      const menu = this.querySelector('.site-masthead-menu');
      document.addEventListener('pointerdown', event => {
        if (menu.open && !menu.contains(event.target)) menu.removeAttribute('open');
      });
      document.addEventListener('keydown', event => {
        if (event.key === 'Escape') menu.removeAttribute('open');
      });
      if (path.includes('/groups/shrimpina')) {
        addEventListener('hashchange', () => {
          this.querySelectorAll('.site-masthead-primary a').forEach(anchor => anchor.removeAttribute('aria-current'));
          this.querySelector('.site-masthead-primary a[data-nav-key="shrimpina"]')?.setAttribute('aria-current', 'page');
        });
      }
    }
  }

  customElements.define('site-index', SiteIndex);
})();
