// Menu trois traits et panneaux qui se déroulent : Inclus partout, Questions, Comparatif des formules.
// Un seul fichier, sans dépendance : importé par l'accueil (main.js) et publié tel quel pour les pages
// d'information (src/legal/plugin.js). Le contenu du menu vient de la page (#vm-data, voir
// menu-config.js) ; celui des panneaux, des modèles rendus par l'accueil (<template id="vx-…">).
// Tous les liens mènent à l'accueil : une section, un panneau ou une action, jamais une page séparée.
(() => {
  if (window.__visoraMenu) return;
  window.__visoraMenu = true;
  const d = document, html = d.documentElement;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const onHome = () => !!d.getElementById('app');
  // panneaux : nom dans l'adresse → modèle rendu par l'accueil
  const PANELS = { inclus: 'vx-inclus', faq: 'vx-faq', comparatif: 'vx-compare' };
  const ACTS = ['rdv', 'devis', 'saas', 'univers', 'replay', 'ecrire', 'appel'];
  const panelOf = (key) => (PANELS[key] ? { kind: key } : /^faq-\d+$/.test(key) ? { kind: 'faq', q: key.slice(4) } : null);
  let panel = null, isOpen = false, lastFocus = null, timer = 0;
  let vx = null, vxOpen = false, vxTimer = 0, vxFocus = null;

  const config = () => { try { return JSON.parse(d.getElementById('vm-data')?.textContent || 'null'); } catch { return null; } };
  const ARROW = '<svg class="ic-arrow-r" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6"/></svg>';
  // retour sur l'accueil depuis une page d'information : son rideau ne doit pas se rejouer plus tard
  if (onHome()) { try { sessionStorage.removeItem('vm-nav'); } catch { /* stockage indisponible */ } }

  /* ---------------------------------------------------------------- menu */
  function build() {
    if (panel) return panel;
    const C = config();
    if (!C) return null;
    panel = d.createElement('div');
    panel.className = 'vm-panel';
    panel.id = 'vm-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-modal', 'true');
    panel.setAttribute('aria-label', 'Menu du site');
    const links = C.links.map((l, i) => `<li><a class="vm-link" href="${l.href}" data-key="${l.key}" style="--i:${i}"><span class="vm-n">${l.n}</span><span class="vm-t"><span>${l.label}</span></span><span class="vm-s">${l.sub}</span></a></li>`).join('');
    const prev = Object.entries(C.previews).map(([k, v]) => `<div class="vm-prev" data-key="${k}">${v}</div>`).join('');
    const acts = C.actions.map((a) => `<a class="vm-act" href="${a.href}" data-vm-act="${a.k}"><i>${a.icon}</i><span><b>${a.label}</b><small>${a.sub}</small></span>${ARROW}</a>`).join('');
    const dots = `<i aria-hidden="true">${C.dots.map((c) => `<b style="--c:${c}"></b>`).join('')}</i>`;
    const uni = onHome()
      ? `<button type="button" class="vm-uni" data-vm-act="univers">${dots}Changer d’univers</button><button type="button" data-vm-act="replay">Rejouer la construction ↻</button>`
      : `<a class="vm-uni" href="/#univers">${dots}Changer d’univers</a>`;
    panel.innerHTML = `<div class="vm-curtain" aria-hidden="true"></div>
      <div class="vm-inner">
        <nav class="vm-nav" aria-label="Pages du site"><p class="vm-k">Menu</p><ol>${links}</ol></nav>
        <div class="vm-aside">
          <div class="vm-preview">${prev}</div>
          <div><p class="vm-k">Prendre contact</p><div class="vm-acts">${acts}</div></div>
          <div class="vm-foot">${uni}${C.legal.map(([h, t]) => `<a href="${h}">${t}</a>`).join('')}</div>
        </div>
      </div>`;
    d.body.appendChild(panel);
    const show = (key) => panel.querySelectorAll('.vm-prev').forEach((p) => p.classList.toggle('is-on', p.dataset.key === key));
    panel.querySelectorAll('.vm-link').forEach((a) => {
      a.addEventListener('mouseenter', () => show(a.dataset.key));
      a.addEventListener('focus', () => show(a.dataset.key));
    });
    show('offres');
    return panel;
  }

  function burgers(v) {
    d.querySelectorAll('.vm-burger').forEach((b) => {
      b.setAttribute('aria-expanded', String(v));
      b.setAttribute('aria-label', v ? 'Fermer le menu' : 'Ouvrir le menu');
    });
  }

  // le menu commence sous l'en-tête, dont le bouton reste visible pour le refermer
  function measure() {
    const head = d.querySelector('.s-nav, .top');
    const bottom = head ? Math.round(head.getBoundingClientRect().bottom) : 80;
    panel.style.setProperty('--vm-top', `${Math.max(56, Math.min(bottom, 140))}px`);
  }

  function openMenu() {
    if (isOpen || !build()) return;
    clearTimeout(timer);
    measure();
    lastFocus = d.activeElement;
    isOpen = true;
    panel.classList.remove('is-closing', 'is-leaving');
    html.classList.add('vm-open', 'vm-lock');
    void panel.offsetWidth;
    panel.classList.add('is-open');
    burgers(true);
    timer = setTimeout(() => panel.querySelector('.vm-link')?.focus({ preventScroll: true }), reduce ? 30 : 450);
  }

  function closeMenu(then, fast) {
    if (!isOpen) { then?.(); return; }
    isOpen = false;
    clearTimeout(timer);
    burgers(false);
    // la page peut défiler dès que le menu se referme (un lien du menu y descend aussitôt)
    html.classList.remove('vm-lock');
    panel.classList.remove('is-open');
    panel.classList.add('is-closing');
    if (then) setTimeout(then, reduce ? 0 : fast ? 380 : 640);
    timer = setTimeout(() => {
      panel.classList.remove('is-closing');
      html.classList.remove('vm-open');
      if (!then) lastFocus?.focus?.({ preventScroll: true });
    }, reduce ? 160 : 1100);
  }

  // vers une autre page : le rideau du menu se referme sur elle
  function leave(href) {
    try { sessionStorage.setItem('vm-nav', '1'); } catch { /* stockage indisponible */ }
    if (panel && isOpen) {
      panel.classList.add('is-leaving');
      setTimeout(() => { location.href = href; }, reduce ? 0 : 430);
    } else location.href = href;
  }

  /* ---------------------------------------------------------------- destinations dans l'accueil */
  const visora = () => window.visora;
  function scrollToEl(el) {
    const v = visora();
    if (v?.goTo) v.goTo(el);
    else if (el === d.body) scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    else el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  }
  // une carte d'un carrousel (téléphone) : il glisse jusqu'à elle
  const sliding = (track) => !!track && getComputedStyle(track).overflowX !== 'visible';
  function slideTo(track, el) {
    const left = el.offsetLeft - (track.clientWidth - el.offsetWidth) / 2;
    track.scrollTo({ left: Math.max(0, left), behavior: reduce ? 'auto' : 'smooth' });
  }

  function route(key, data = {}) {
    if (!key) return;
    const p = panelOf(key);
    if (p) { openPanel(p.kind, { q: p.q }); return; }
    if (ACTS.includes(key)) { act(key, data); return; }
    if (key === 'site') { scrollToEl(d.body); return; }
    const el = d.getElementById(key);
    if (!el) return;
    const track = el.closest('.s-track');
    if (sliding(track)) { scrollToEl(track); slideTo(track, el); } else scrollToEl(el);
  }

  // les volets de l'accueil (agenda, devis, SaaS) restent liés à leurs boutons : on en réutilise un,
  // avec l'offre ou la formule demandée posée juste le temps du clic
  function trigger(action, data) {
    const el = d.getElementById('site')?.querySelector(`[data-action="${action}"]`);
    if (!el) return false;
    const keys = ['type', 'plan', 'saas'];
    const keep = Object.fromEntries(keys.map((k) => [k, el.getAttribute(`data-${k}`)]));
    const set = (k, v) => (v ? el.setAttribute(`data-${k}`, v) : el.removeAttribute(`data-${k}`));
    set('type', data.type);
    set('plan', data.plan);
    if (action === 'saas') set('saas', data.saas || 'catalogue');
    el.click();
    keys.forEach((k) => set(k, keep[k]));
    return true;
  }

  function act(kind, data = {}) {
    if (kind === 'appel') { location.href = `tel:${config()?.tel || ''}`; return; }
    if (!onHome()) {
      const q = new URLSearchParams();
      if (data.type) q.set('type', data.type);
      if (data.plan) q.set('formule', data.plan);
      if (data.saas) q.set('saas', data.saas);
      const qs = q.toString();
      leave(`/${qs ? `?${qs}` : ''}#${kind}`);
      return;
    }
    const v = visora();
    if (kind === 'univers') { v?.open?.(); return; }
    if (kind === 'replay') { v?.replay?.(); return; }
    if (kind === 'ecrire') {
      const c = d.getElementById('contact');
      if (!c) return;
      scrollToEl(c);
      const tab = c.querySelector('[data-reach="write"]');
      if (tab && tab.getAttribute('aria-selected') !== 'true') tab.click();
      return;
    }
    trigger({ rdv: 'book', devis: 'devis', saas: 'saas' }[kind], data);
  }

  /* ---------------------------------------------------------------- panneaux qui se déroulent */
  function buildVx() {
    if (vx) return vx;
    vx = d.createElement('div');
    vx.className = 'vx-panel s-live';
    vx.setAttribute('role', 'dialog');
    vx.setAttribute('aria-modal', 'true');
    vx.innerHTML = '<div class="vx-curtain" aria-hidden="true"></div><button type="button" class="vx-close" data-vx-close aria-label="Fermer"><span class="vm-lines" aria-hidden="true"><i></i><i></i><i></i></span><span class="vx-close-t" aria-hidden="true">Fermer</span></button><div class="vx-scroll"></div>';
    d.body.appendChild(vx);
    return vx;
  }

  function openPanel(kind, { q } = {}) {
    const tpl = d.getElementById(PANELS[kind]);
    if (!tpl) { if (!onHome()) leave(`/#${q ? `faq-${q}` : kind}`); return; }
    buildVx();
    clearTimeout(vxTimer);
    if (!vxOpen) vxFocus = d.activeElement;
    vxOpen = true;
    const box = vx.querySelector('.vx-scroll');
    box.replaceChildren(tpl.content.cloneNode(true));
    vx.dataset.kind = kind;
    const title = box.querySelector('.vx-title');
    if (title) { title.id = `vx-t-${kind}`; vx.setAttribute('aria-labelledby', title.id); }
    vx.classList.remove('is-closing');
    html.classList.add('vx-open');
    box.scrollTop = 0;
    void vx.offsetWidth;
    vx.classList.add('is-open');
    // les cartes illustrées apparaissent l'une après l'autre, une fois le rideau descendu
    [...box.querySelectorAll('.s-anim')].forEach((li, i) => setTimeout(() => { if (vxOpen) li.classList.add('is-on', 'is-drawn'); }, reduce ? 0 : 560 + i * 90));
    const item = q && box.querySelector(`#vx-q${q}`);
    if (item) {
      item.open = true;
      setTimeout(() => { if (vxOpen) item.scrollIntoView({ block: 'center', behavior: reduce ? 'auto' : 'smooth' }); }, reduce ? 0 : 700);
    }
    vxTimer = setTimeout(() => vx.querySelector('.vx-close').focus({ preventScroll: true }), reduce ? 20 : 450);
  }

  function closePanel(then) {
    if (!vxOpen) { then?.(); return; }
    vxOpen = false;
    clearTimeout(vxTimer);
    html.classList.remove('vx-open');
    vx.classList.remove('is-open');
    vx.classList.add('is-closing');
    if (then) setTimeout(then, reduce ? 0 : 560);
    vxTimer = setTimeout(() => {
      vx.classList.remove('is-closing');
      html.classList.remove('vx-open');
      vx.querySelector('.vx-scroll').replaceChildren();
      if (!then) vxFocus?.focus?.({ preventScroll: true });
    }, reduce ? 150 : 1100);
  }

  /* ---------------------------------------------------------------- clics et clavier */
  d.addEventListener('click', (e) => {
    if (e.defaultPrevented || e.button > 0) return;
    const burger = e.target.closest('.vm-burger');
    if (burger) { e.preventDefault(); if (isOpen) closeMenu(); else closePanel(openMenu); return; }
    if (e.target.closest('[data-vx-close]')) { e.preventDefault(); closePanel(); return; }
    const opener = e.target.closest('[data-vx]');
    if (opener) { e.preventDefault(); const k = opener.dataset.vx, q = opener.dataset.q; closeMenu(() => openPanel(k, { q })); return; }
    const a = e.target.closest('[data-vm-act]');
    if (a) {
      e.preventDefault();
      const kind = a.dataset.vmAct;
      const data = { type: a.dataset.type || '', plan: a.dataset.plan || '', saas: a.dataset.saas || '' };
      const run = () => act(kind, data);
      if (vxOpen) closePanel(run);
      else if (isOpen) closeMenu(run, kind === 'appel');
      else run();
      return;
    }
    const link = e.target.closest('.vm-panel a[href], .vx-panel a[href]');
    if (!link || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || link.target === '_blank') return;
    const u = new URL(link.href, location.href);
    if (u.origin !== location.origin) return;
    e.preventDefault();
    const key = decodeURIComponent(u.hash.slice(1));
    if (onHome() && u.pathname === '/' && key) {
      const run = () => route(key);
      if (vxOpen) closePanel(run); else closeMenu(run);
      return;
    }
    if (u.pathname === location.pathname && u.hash) { closeMenu(() => { location.hash = u.hash; }); return; }
    leave(u.href);
  });

  // la touche Tab reste dans le menu ou le panneau ouvert ; Échap le referme
  const trap = (e, box, extra = []) => {
    const items = [...extra, ...box.querySelectorAll('a[href], button, summary, [tabindex="0"]')].filter((x) => x && x.offsetParent !== null);
    if (!items.length) return;
    const i = items.indexOf(d.activeElement);
    if (e.shiftKey && i <= 0) { e.preventDefault(); items[items.length - 1].focus(); } else if (!e.shiftKey && i === items.length - 1) { e.preventDefault(); items[0].focus(); }
  };
  d.addEventListener('keydown', (e) => {
    if (vxOpen) {
      if (e.key === 'Escape') { e.preventDefault(); closePanel(); } else if (e.key === 'Tab') trap(e, vx);
      return;
    }
    if (!isOpen) return;
    if (e.key === 'Escape') { e.preventDefault(); closeMenu(); return; }
    if (e.key === 'Tab') trap(e, panel, [[...d.querySelectorAll('.vm-burger')].find((b) => b.offsetParent)]);
  });

  addEventListener('pageshow', (e) => {
    if (!e.persisted) return;
    isOpen = false;
    panel?.classList.remove('is-open', 'is-closing', 'is-leaving');
    html.classList.remove('vm-open', 'vm-lock', 'vp-enter');
    burgers(false);
  });
  addEventListener('resize', () => { if (isOpen) measure(); });

  /* ---------------------------------------------------------------- comparatif : une formule à la fois sur téléphone */
  d.addEventListener('click', (e) => {
    const tab = e.target.closest('.vc-tab');
    if (!tab) return;
    const box = tab.closest('.vc');
    box.dataset.show = tab.dataset.vc;
    box.querySelectorAll('.vc-tab').forEach((t) => t.setAttribute('aria-selected', String(t === tab)));
  });

  /* ---------------------------------------------------------------- liens profonds vers l'accueil */
  if (onHome()) {
    const ready = () => new Promise((res) => {
      const t0 = performance.now();
      const tick = () => {
        const v = visora();
        if (v?.state && !v.state.busy && d.querySelector('#site [data-action]')) { res(true); return; }
        if (performance.now() - t0 > 20000) { res(false); return; }
        setTimeout(tick, 120);
      };
      tick();
    });
    const key = decodeURIComponent(location.hash.slice(1));
    if (panelOf(key) || (ACTS.includes(key) && key !== 'appel')) {
      ready().then((ok) => {
        if (!ok) return;
        const p = new URLSearchParams(location.search);
        history.replaceState(null, '', location.pathname);
        setTimeout(() => route(key, { type: p.get('type') || '', plan: p.get('formule') || '', saas: p.get('saas') || '' }), 250);
      });
    } else if (key) {
      // une offre précise sur téléphone : la page y descend (main.js), puis le carrousel glisse jusqu'à elle
      ready().then(() => {
        const el = d.getElementById(key), track = el?.closest('.s-track');
        if (sliding(track)) slideTo(track, el);
      });
    }
  }
})();
