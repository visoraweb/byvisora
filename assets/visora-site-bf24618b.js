/* Visora — menu trois traits, actions de contact et pages par catégorie */
(() => {
  const C = {"tel":"+33650094348","email":"visora.webstudio@gmail.com","forms":"visora.webstudio@gmail.com","arrow":"<svg class=\"ic-arrow-r\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M4 12h15M13 6l6 6-6 6\"/></svg>","links":[{"key":"home","href":"/","n":"01","label":"Accueil","sub":"L’expérience Visora"},{"key":"offres","href":"/offres/","n":"02","label":"Nos offres","sub":"5 offres · dès 100&nbsp;€"},{"key":"tarifs","href":"/tarifs/","n":"03","label":"Tarifs","sub":"Dès 49,99&nbsp;€ par mois"},{"key":"fonctionnement","href":"/fonctionnement/","n":"04","label":"Fonctionnement","sub":"Deux temps, zéro surprise"},{"key":"inclus","href":"/inclus/","n":"05","label":"Inclus partout","sub":"Sans supplément"},{"key":"questions","href":"/questions/","n":"06","label":"Questions","sub":"9 réponses claires"},{"key":"contact","href":"/contact/","n":"07","label":"Contact","sub":"Réponse sous 24&nbsp;h ouvrées"}],"actions":[{"k":"rdv","href":"/rendez-vous/","icon":"<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect x=\"3.5\" y=\"5\" width=\"17\" height=\"15.5\" rx=\"2.5\"/><path d=\"M3.5 10h17M8 3v4M16 3v4\"/></svg>","label":"Réserver un appel","sub":"30 min · en visio · gratuit"},{"k":"devis","href":"/devis/","icon":"<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M6 3h8l4 4v14H6z\"/><path d=\"M14 3v4h4M9 12h6M9 15.5h6M9 19h3\"/></svg>","label":"Demander un devis","sub":"En deux minutes · PDF"},{"k":"ecrire","href":"/contact/#ecrire","icon":"<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"m4 7 8 6 8-6\"/></svg>","label":"Nous écrire","sub":"Réponse sous 24 h ouvrées"},{"k":"appel","href":"tel:+33650094348","icon":"<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2\"/></svg>","label":"Appeler","sub":"06 50 09 43 48"}],"previews":{"home":"<p class=\"vm-k\">L’expérience</p><p>La page d’accueil en 3D, où votre futur site se construit sous vos yeux.</p><ul><li><a href=\"/\">Revenir à l’accueil <em>3D</em></a></li><li><a href=\"/a-propos/\">À propos de Visora <em>Studio</em></a></li></ul>","offres":"<p class=\"vm-k\">5 offres</p><ul><li><a href=\"/offres/site-vitrine/\">Site vitrine<em>Dès 300&nbsp;€</em></a></li><li><a href=\"/offres/landing-page/\">Landing page<em>Dès 200&nbsp;€</em></a></li><li><a href=\"/offres/application-web/\">Application web<em>Dès 1 900&nbsp;€</em></a></li><li><a href=\"/offres/saas-mvp/\">SaaS / MVP<em>Sur devis</em></a></li><li><a href=\"/offres/refonte-migration/\">Refonte & migration<em>Dès 100&nbsp;€</em></a></li></ul>","tarifs":"<p class=\"vm-k\">Formules avec abonnement</p><ul><li><a href=\"/tarifs/\">Essentiel<em>49,99&nbsp;€ / mois</em></a></li><li><a href=\"/tarifs/\">Pro<em>79,99&nbsp;€ / mois</em></a></li><li><a href=\"/tarifs/\">Sur mesure<em>Sur devis</em></a></li></ul><p style=\"margin-top:10px\">Facturé chaque mois, sans engagement.</p>","fonctionnement":"<p class=\"vm-k\">Deux temps</p><ul><li><span>Découverte<em>I</em></span></li><li><span>Design<em>II</em></span></li><li><span>Développement<em>III</em></span></li><li><span>Lancement<em>IV</em></span></li><li><span>Accompagnement<em>∞</em></span></li></ul>","inclus":"<p class=\"vm-k\">Dans chaque création</p><ul><li><span>Design sur mesure<em>Aucun template</em></span></li><li><span>Tous les écrans<em>Mobile, tablette, ordinateur</em></span></li><li><span>Référencement<em>Pensé pour Google</em></span></li><li><span>Performance<em>Des pages légères</em></span></li><li><span>Vous êtes propriétaire<em>Code, contenus et accès</em></span></li><li><span>Prise en main<em>Session incluse</em></span></li></ul>","questions":"<p class=\"vm-k\">On nous demande souvent</p><ul><li><a href=\"/questions/#q1\">Pourquoi des prix « à partir de » ?</a></li><li><a href=\"/questions/#q2\">Comment recevoir un devis ?</a></li><li><a href=\"/questions/#q3\">Combien de temps faut-il ?</a></li><li><a href=\"/questions/#q4\">Le site m’appartient-il ?</a></li></ul>","contact":"<p class=\"vm-k\">Coordonnées</p><ul><li><a href=\"tel:+33650094348\">Téléphone<em>06 50 09 43 48</em></a></li><li><a href=\"mailto:visora.webstudio@gmail.com\">E-mail<em>visora.webstudio@gmail.com</em></a></li><li><span>Disponibilité<em>du lundi au vendredi, hors jours fériés</em></span></li></ul>"},"anchors":{"offres":"/offres/","tarifs":"/tarifs/","fonctionnement":"/fonctionnement/","inclus":"/inclus/","faq":"/questions/","contact":"/contact/","offre-vitrine":"/offres/site-vitrine/","offre-landing":"/offres/landing-page/","offre-application":"/offres/application-web/","offre-saas":"/offres/saas-mvp/","offre-refonte":"/offres/refonte-migration/"},"dots":["#070707","#e2382c","#c9a58a"],"legal":[["/mentions-legales/","Mentions légales"],["/confidentialite/","Confidentialité"],["/cgv/","Conditions de vente"]]};
  const d = document, html = d.documentElement;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const onHome = !!d.getElementById('app');
  const direct = html.dataset.vpDirect || '';
  const here = location.pathname.replace(/index\.html$/, '') || '/';
  let panel = null, isOpen = false, lastFocus = null, timer = 0;

  /* ---------------- menu ---------------- */
  function build() {
    if (panel) return panel;
    panel = d.createElement('div');
    panel.className = 'vm-panel';
    panel.id = 'vm-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-modal', 'true');
    panel.setAttribute('aria-label', 'Menu du site');
    const links = C.links.map((l, i) => `<li><a class="vm-link" href="${l.href}" data-key="${l.key}" style="--i:${i}"${l.href === here ? ' aria-current="page"' : ''}><span class="vm-n">${l.n}</span><span class="vm-t"><span>${l.label}</span></span><span class="vm-s">${l.sub}</span></a></li>`).join('');
    const prev = Object.entries(C.previews).map(([k, v]) => `<div class="vm-prev" data-key="${k}">${v}</div>`).join('');
    const acts = C.actions.map((a) => `<a class="vm-act" href="${a.href}" data-vm-act="${a.k}"><i>${a.icon}</i><span><b>${a.label}</b><small>${a.sub}</small></span>${C.arrow}</a>`).join('');
    const uni = onHome
      ? `<button type="button" class="vm-uni" data-vm-act="univers"><i aria-hidden="true">${C.dots.map((c) => `<b style="--c:${c}"></b>`).join('')}</i>Changer d’univers</button><button type="button" data-vm-act="replay">Rejouer la construction ↻</button>`
      : `<a class="vm-uni" href="/#univers"><i aria-hidden="true">${C.dots.map((c) => `<b style="--c:${c}"></b>`).join('')}</i>Changer d’univers</a>`;
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
    const current = C.links.find((l) => l.href === here);
    show(current && C.previews[current.key] ? current.key : 'offres');
    return panel;
  }

  function burgers(v) {
    d.querySelectorAll('.vm-burger').forEach((b) => {
      b.setAttribute('aria-expanded', String(v));
      b.setAttribute('aria-label', v ? 'Fermer le menu' : 'Ouvrir le menu');
    });
  }

  function measure() {
    const head = d.querySelector('.s-nav, .vp-head, .top');
    const bottom = head ? Math.round(head.getBoundingClientRect().bottom) : 80;
    panel.style.setProperty('--vm-top', `${Math.max(56, Math.min(bottom, 140))}px`);
  }

  function openMenu() {
    if (isOpen) return;
    build();
    clearTimeout(timer);
    measure();
    lastFocus = d.activeElement;
    isOpen = true;
    panel.classList.remove('is-closing', 'is-leaving');
    html.classList.add('vm-open');
    void panel.offsetWidth;
    panel.classList.add('is-open');
    burgers(true);
    timer = setTimeout(() => panel.querySelector('.vm-link[aria-current]')?.focus({ preventScroll: true }) || panel.querySelector('.vm-link')?.focus({ preventScroll: true }), reduce ? 30 : 450);
  }

  function closeMenu(then, fast) {
    if (!isOpen) { then?.(); return; }
    isOpen = false;
    clearTimeout(timer);
    burgers(false);
    panel.classList.remove('is-open');
    panel.classList.add('is-closing');
    const total = reduce ? 160 : 1050;
    if (then) setTimeout(then, reduce ? 0 : fast ? 380 : 700);
    timer = setTimeout(() => {
      panel.classList.remove('is-closing');
      html.classList.remove('vm-open');
      if (!then) lastFocus?.focus?.({ preventScroll: true });
    }, total);
  }

  function leave(href) {
    try { sessionStorage.setItem('vm-nav', '1'); } catch {}
    if (panel && isOpen) {
      panel.classList.add('is-leaving');
      setTimeout(() => { location.href = href; }, reduce ? 0 : 430);
    } else location.href = href;
  }

  /* ---------------- actions (rendez-vous, devis…) ---------------- */
  function trigger(kind, data = {}) {
    const v = window.visora;
    if (kind === 'univers') { if (v?.open) { v.open(); return true; } return false; }
    if (kind === 'replay') { if (v?.replay) { v.replay(); return true; } return false; }
    const site = d.getElementById('site');
    const action = { rdv: 'book', devis: 'devis', saas: 'saas' }[kind];
    if (!site || !action) return false;
    // The site binds its panels to the buttons it rendered: reuse one of them,
    // with the requested offer or plan set just for this click.
    const el = site.querySelector(`[data-action="${action}"]`);
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
    if (kind === 'appel') { location.href = `tel:${C.tel}`; return; }
    if (kind === 'ecrire') {
      const target = d.getElementById('ecrire');
      if (target) {
        target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
        setTimeout(() => target.querySelector('input:not([type=radio]):not(.vp-hp)')?.focus({ preventScroll: true }), reduce ? 0 : 500);
      } else leave('/contact/#ecrire');
      return;
    }
    if (onHome && trigger(kind, data)) return;
    const q = new URLSearchParams();
    if (data.type) q.set('type', data.type);
    if (data.plan) q.set('formule', data.plan);
    if (data.saas) q.set('saas', data.saas);
    const qs = q.toString();
    const page = { rdv: '/rendez-vous/', devis: '/devis/' }[kind];
    leave(page ? `${page}${qs ? `?${qs}` : ''}` : `/${qs ? `?${qs}` : ''}#${kind}`);
  }

  d.addEventListener('click', (e) => {
    if (e.defaultPrevented || e.button > 0) return;
    const burger = e.target.closest('.vm-burger');
    if (burger) { e.preventDefault(); isOpen ? closeMenu() : openMenu(); return; }
    const a = e.target.closest('[data-vm-act]');
    if (a) {
      e.preventDefault();
      const kind = a.dataset.vmAct;
      const data = { type: a.dataset.type || '', plan: a.dataset.plan || '', saas: a.dataset.saas || '' };
      isOpen ? closeMenu(() => act(kind, data), kind === 'appel') : act(kind, data);
      return;
    }
    const link = e.target.closest('.vm-panel a[href]');
    if (link && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && link.target !== '_blank') {
      const u = new URL(link.href, location.href);
      if (u.origin !== location.origin) return;
      e.preventDefault();
      if (u.pathname === location.pathname) closeMenu(() => { if (u.hash) location.hash = u.hash; });
      else leave(u.href);
    }
  });

  d.addEventListener('keydown', (e) => {
    if (!isOpen) return;
    if (e.key === 'Escape') { e.preventDefault(); closeMenu(); return; }
    if (e.key !== 'Tab') return;
    const burger = [...d.querySelectorAll('.vm-burger')].find((b) => b.offsetParent);
    const items = [burger, ...panel.querySelectorAll('a[href], button')].filter(Boolean);
    const i = items.indexOf(d.activeElement);
    if (e.shiftKey && (i <= 0)) { e.preventDefault(); items[items.length - 1].focus(); }
    else if (!e.shiftKey && i === items.length - 1) { e.preventDefault(); items[0].focus(); }
  });

  addEventListener('pageshow', (e) => {
    if (e.persisted && panel) {
      isOpen = false;
      panel.classList.remove('is-open', 'is-closing', 'is-leaving');
      html.classList.remove('vm-open', 'vp-enter');
      burgers(false);
    }
  });
  addEventListener('resize', () => { if (isOpen) measure(); });

  /* ---------------- accueil : liens profonds et anciennes ancres ---------------- */
  if (onHome) {
    const want = decodeURIComponent(location.hash.slice(1));
    const ready = () => new Promise((res) => {
      const t0 = performance.now();
      const tick = () => {
        const v = window.visora;
        if (v?.state && !v.state.busy && d.querySelector('#site [data-action]')) return res(true);
        if (performance.now() - t0 > 20000) return res(false);
        setTimeout(tick, 120);
      };
      tick();
    });
    if (['rdv', 'devis', 'saas', 'univers'].includes(want)) {
      ready().then(() => {
        const p = new URLSearchParams(location.search);
        history.replaceState(null, '', direct ? location.pathname : '/');
        setTimeout(() => trigger(want, { type: p.get('type') || '', plan: p.get('formule') || '', saas: p.get('saas') || '' }), direct ? 60 : 250);
        if (!direct) return;
        // Dedicated page (/devis/, /rendez-vous/): leave it when its panel is closed.
        const sel = direct === 'devis' ? '.book.quote' : '.book:not(.quote):not(.saas)';
        const t0 = performance.now();
        const watch = () => {
          const el = d.querySelector(sel);
          if (el?.classList.contains('is-open')) {
            const mo = new MutationObserver(() => {
              if (el.classList.contains('is-open')) return;
              mo.disconnect();
              let back = false;
              try { back = history.length > 1 && new URL(d.referrer).origin === location.origin; } catch {}
              back ? history.back() : location.replace('/contact/');
            });
            mo.observe(el, { attributes: true, attributeFilter: ['class'] });
            return;
          }
          if (performance.now() - t0 < 25000) setTimeout(watch, 120);
        };
        watch();
      });
    } else if (C.anchors[want]) {
      ready().then(() => { if (!d.querySelector(`#site [id="${want}"]`)) location.replace(C.anchors[want]); });
    }
  }

  /* ---------------- pages ---------------- */
  if (!d.body.classList.contains('vp-page')) return;
  const head = d.querySelector('.vp-head');
  const onScroll = () => head?.classList.toggle('is-scrolled', scrollY > 8);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const io = new IntersectionObserver((es) => es.forEach((en) => {
    en.target.classList.toggle('is-on', en.isIntersecting);
    if (en.isIntersecting) en.target.classList.add('is-drawn');
  }), { threshold: 0.2 });
  d.querySelectorAll('.s-anim, .s-offer').forEach((el) => io.observe(el));

  d.addEventListener('pointermove', (e) => {
    const g = e.target.closest?.('.glass');
    if (!g) return;
    const r = g.getBoundingClientRect();
    g.style.setProperty('--mx', `${Math.round(e.clientX - r.left)}px`);
    g.style.setProperty('--my', `${Math.round(e.clientY - r.top)}px`);
  }, { passive: true });

  const vio = new IntersectionObserver((es) => es.forEach((en) => {
    const v = en.target.querySelector('video');
    if (!v) return;
    if (en.isIntersecting) { const p = v.play(); p?.catch?.(() => {}); } else v.pause();
  }), { threshold: 0.35 });
  d.querySelectorAll('.s-screen.has-video[data-video]').forEach((box) => {
    const view = box.querySelector('.s-screen-view');
    if (!view) return;
    const v = d.createElement('video');
    v.muted = true; v.defaultMuted = true; v.loop = true; v.playsInline = true;
    v.setAttribute('muted', ''); v.setAttribute('playsinline', '');
    v.preload = 'none';
    if (box.dataset.poster) v.poster = box.dataset.poster;
    v.src = box.dataset.video;
    v.setAttribute('aria-label', box.dataset.label || 'Démo vidéo');
    view.appendChild(v);
    vio.observe(box);
  });

  if (innerWidth > 760) d.querySelectorAll('details[data-open-wide]').forEach((x) => { x.open = true; });
  const hashOpen = () => {
    const t = location.hash && d.getElementById(location.hash.slice(1));
    if (t?.tagName === 'DETAILS') t.open = true;
  };
  hashOpen();
  addEventListener('hashchange', hashOpen);

  const form = d.querySelector('form.vp-form');
  if (form) {
    const note = form.querySelector('.vp-form-note');
    const submit = form.querySelector('[type=submit]');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const nom = form.nom.value.trim(), email = form.email.value.trim(), message = form.message.value.trim();
      const type = form.querySelector('input[name=type]:checked')?.value || '';
      const bad = [];
      form.nom.setAttribute('aria-invalid', String(!nom)); if (!nom) bad.push(form.nom);
      const okMail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
      form.email.setAttribute('aria-invalid', String(!okMail)); if (!okMail) bad.push(form.email);
      form.message.setAttribute('aria-invalid', String(!message)); if (!message) bad.push(form.message);
      note.className = 'vp-form-note';
      if (bad.length) { note.textContent = 'Merci de compléter les champs indiqués.'; note.classList.add('is-bad'); bad[0].focus(); return; }
      if (form._honey.value) { note.textContent = 'Merci, votre message est envoyé.'; note.classList.add('is-ok'); form.reset(); return; }
      submit.disabled = true;
      note.textContent = 'Envoi en cours…';
      const fd = new FormData();
      fd.append('_subject', `Message depuis le site — ${type || 'Contact'}`);
      fd.append('_template', 'table');
      fd.append('_captcha', 'false');
      fd.append('_honey', '');
      fd.append('_replyto', email);
      fd.append('Nom', nom);
      fd.append('E-mail', email);
      if (type) fd.append('Projet', type);
      fd.append('Message', message);
      fd.append('Page', location.href);
      const ctrl = new AbortController();
      const stop = setTimeout(() => ctrl.abort(), 20000);
      try {
        const r = await fetch(`https://formsubmit.co/ajax/${C.forms}`, { method: 'POST', headers: { Accept: 'application/json' }, body: fd, signal: ctrl.signal });
        const j = await r.json().catch(() => ({}));
        if (!r.ok || String(j.success) !== 'true') throw new Error(j.message || `HTTP ${r.status}`);
        note.textContent = 'Merci, votre message est envoyé. Nous vous répondons sous 24 h ouvrées.';
        note.classList.add('is-ok');
        form.reset();
      } catch {
        const body = `${message}\n\n${nom} — ${email}${type ? `\nProjet : ${type}` : ''}`;
        note.innerHTML = `L’envoi direct n’a pas abouti. <a href="mailto:${C.email}?subject=${encodeURIComponent(`Contact — ${type || 'site'}`)}&body=${encodeURIComponent(body)}">Envoyer avec votre messagerie</a>`;
        note.classList.add('is-bad');
      } finally {
        clearTimeout(stop);
        submit.disabled = false;
      }
    });
  }
})();
