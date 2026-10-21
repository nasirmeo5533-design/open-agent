(function () {
  'use strict';

  var SITE = {
    name: 'OpenAgent',
    whatsapp: '923703159642',
    email: 'abeerinfo5566@gmail.com'
  };
  window.SITE = SITE;

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
    li.addEventListener('mouseenter', function () { li.classList.add('open'); });
    li.addEventListener('mouseleave', function () { li.classList.remove('open'); });
    trigger.addEventListener('click', function (e) {
      if (li.classList.contains('has-drop') && !li.contains(document.activeElement && document.activeElement.closest('.dropdown'))) {
        e.preventDefault();
        li.classList.toggle('open');
      }
    });
    li.addEventListener('focusout', function () {
      window.setTimeout(function () {
        if (!li.contains(document.activeElement)) li.classList.remove('open');
      }, 10);
    });
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

  function setMenu(open) {
    if (!oc || !overlay) return;
    oc.classList.toggle('open', open);
    overlay.classList.toggle('show', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }
  if (openBtn) openBtn.addEventListener('click', function () { setMenu(true); });
  if (closeBtn) closeBtn.addEventListener('click', function () { setMenu(false); });
  if (overlay) overlay.addEventListener('click', function () { setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

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

  /* ---------- Portfolio filters ---------- */
  document.querySelectorAll('[data-filter-group]').forEach(function (bar) {
    var btns = bar.querySelectorAll('[data-filter]');
    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        btns.forEach(function (b) { b.classList.remove('on'); });
        btn.classList.add('on');
        var f = btn.getAttribute('data-filter');
        document.querySelectorAll('[data-cat]').forEach(function (card) {
          var cats = card.getAttribute('data-cat').split(/\s+/);
          card.style.display = (f === 'all' || cats.indexOf(f) !== -1) ? '' : 'none';
        });
      });
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
      var status = form.querySelector('.form-status');
      window.open('https://wa.me/' + SITE.whatsapp + '?text=' + msg, '_blank', 'noopener');
      if (status) status.classList.add('show');
      form.reset();
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
