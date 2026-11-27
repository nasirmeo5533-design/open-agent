(function () {
  'use strict';

  var SITE = {
    name: 'OpenAgent',
    whatsapp: '923703159642'
  };

  /* ---------- Sticky header ---------- */
  var topbar = document.querySelector('.topbar');
  if (topbar) {
    var onScroll = function () {
      topbar.classList.toggle('scrolled', window.scrollY > 24);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Desktop dropdowns (hover + click/keyboard) ---------- */
  document.querySelectorAll('.nav-desktop > li.has-drop').forEach(function (li) {
    var trigger = li.querySelector('a');
    var dropdown = li.querySelector('.dropdown');
    trigger.setAttribute('aria-haspopup', 'true');
    trigger.setAttribute('aria-expanded', 'false');
    if (dropdown) {
      if (!dropdown.id) dropdown.id = 'services-menu';
      trigger.setAttribute('aria-controls', dropdown.id);
    }
    // Keep aria-expanded in sync with every way the menu opens or closes.
    new MutationObserver(function () {
      trigger.setAttribute('aria-expanded', li.classList.contains('open') ? 'true' : 'false');
    }).observe(li, { attributes: true, attributeFilter: ['class'] });
    // Keyboard users: tabbing onto "Services" (or into the menu) opens it, so Tab
    // walks through every service. Mouse clicks don't trigger :focus-visible,
    // so clicking "Services" still never leaves the menu stuck open.
    li.addEventListener('focusin', function (e) {
      // Escape hands focus back to "Services" on purpose; don't reopen the menu then.
      if (li.dataset.closing === '1') { delete li.dataset.closing; return; }
      var t = e.target;
      var keyboard = t.matches && (function () { try { return t.matches(':focus-visible'); } catch (err) { return false; } })();
      if (keyboard || (dropdown && dropdown.contains(t))) li.classList.add('open');
    });
    li.addEventListener('mouseenter', function () { li.classList.add('open'); });
    li.addEventListener('mouseleave', function () { li.classList.remove('open'); });
    trigger.addEventListener('click', function (e) {
      // Mouse users: the menu already opened on hover, so a click goes to services.html.
      // Touch / no-hover devices: first tap opens the menu, second tap follows the link.
      var canHover = window.matchMedia && window.matchMedia('(hover: hover)').matches;
      if (canHover || li.classList.contains('open')) return;
      e.preventDefault();
      li.classList.add('open');
    });
    trigger.addEventListener('keydown', function (e) {
      if (e.key === ' ') {
        e.preventDefault();
        li.classList.toggle('open');
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        li.classList.add('open');
        var first = li.querySelector('.dropdown a');
        if (first) first.focus();
      }
    });
    li.addEventListener('focusout', function () {
      window.setTimeout(function () {
        if (!li.contains(document.activeElement)) li.classList.remove('open');
      }, 10);
    });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.nav-desktop > li.open').forEach(function (li) {
        var hadFocus = li.contains(document.activeElement);
        li.classList.remove('open');
        if (hadFocus) {
          li.dataset.closing = '1';
          li.querySelector('a').focus();
        }
      });
    }
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-desktop')) {
      document.querySelectorAll('.nav-desktop > li.open').forEach(function (li) { li.classList.remove('open'); });
    }
  });

  /* ---------- Mobile offcanvas ---------- */
  var oc = document.getElementById('offcanvas');
  var overlay = document.getElementById('overlay');
  var openBtn = document.getElementById('hamburger');
  var closeBtn = document.getElementById('ocClose');

  function getFocusable() {
    if (!oc) return [];
    return Array.prototype.slice.call(oc.querySelectorAll('a[href], button:not([disabled])'))
      .filter(function (el) { return el.getClientRects().length > 0; });
  }

  function setMenu(open) {
    if (!oc || !overlay) return;
    oc.classList.toggle('open', open);
    overlay.classList.toggle('show', open);
    document.body.style.overflow = open ? 'hidden' : '';
    if (openBtn) openBtn.setAttribute('aria-expanded', String(open));
    if (open) {
      var first = getFocusable()[0];
      if (first) first.focus();
    } else if (openBtn) {
      openBtn.focus();
    }
  }
  if (openBtn) openBtn.addEventListener('click', function () { setMenu(true); });
  if (closeBtn) closeBtn.addEventListener('click', function () { setMenu(false); });
  if (overlay) overlay.addEventListener('click', function () { setMenu(false); });
  document.addEventListener('keydown', function (e) {
    if (!oc || !oc.classList.contains('open')) return;
    if (e.key === 'Escape') {
      setMenu(false);
    } else if (e.key === 'Tab') {
      var focusable = getFocusable();
      if (!focusable.length) return;
      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  document.querySelectorAll('.oc-item > .oc-link').forEach(function (btn) {
    btn.addEventListener('click', function () {
      btn.parentElement.classList.toggle('open');
    });
  });

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll('.rv');
  if ('IntersectionObserver' in window && revealEls.length) {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('in-view');
          ro.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { ro.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in-view'); });
  }

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    var a = item.querySelector('.faq-a');
    if (!q || !a) return;
    var wasOpen = item.classList.contains('open');
    q.setAttribute('aria-expanded', wasOpen ? 'true' : 'false');
    if (wasOpen) {
      a.style.maxHeight = a.scrollHeight + 'px';
    }
    q.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      var wrap = item.closest('.faq-wrap');
      if (wrap) {
        wrap.querySelectorAll('.faq-item.open').forEach(function (o) {
          o.classList.remove('open');
          o.querySelector('.faq-a').style.maxHeight = null;
          o.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
        });
      }
      if (!isOpen) {
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
        q.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ---------- Active nav highlighting ---------- */
  var path = (window.location.pathname.split('/').pop() || 'index.html');
  if (path === '' || path === '/') path = 'index.html';
  document.querySelectorAll('.nav-desktop > li').forEach(function (li) {
    li.querySelectorAll('a[href]').forEach(function (a) {
      var href = a.getAttribute('href').split('#')[0];
      if (href === '/' && path === 'index.html') li.classList.add('active');
      else if (href && href === path) li.classList.add('active');
    });
  });

  /* ---------- Lead form -> WhatsApp handoff ---------- */
  document.querySelectorAll('form[data-lead-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var lines = ['Hi ' + SITE.name + ', I want to grow my business:'];
      data.forEach(function (val, key) {
        if (val) lines.push(key + ': ' + val);
      });
      var msg = encodeURIComponent(lines.join('\n'));
      var url = 'https://wa.me/' + SITE.whatsapp + '?text=' + msg;
      var status = form.querySelector('.form-status');
      // Open WhatsApp in a new tab. If a popup blocker stops it, go there in this tab
      // instead, so the visitor's message is never lost. Only clear the form once
      // WhatsApp has actually opened.
      var win = window.open(url, '_blank');
      if (win) {
        try { win.opener = null; } catch (err) { /* cross-origin: nothing to clear */ }
        if (status) status.classList.add('show');
        form.reset();
      } else {
        window.location.href = url;
      }
    });
  });

  /* ---------- Scroll-to-top ---------- */
  var toTop = document.getElementById('toTop');
  if (toTop) {
    var onToTopScroll = function () {
      toTop.classList.toggle('show', window.scrollY > 400);
    };
    window.addEventListener('scroll', onToTopScroll, { passive: true });
    onToTopScroll();
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Year stamp ---------- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
