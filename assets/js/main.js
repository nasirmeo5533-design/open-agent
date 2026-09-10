(function () {
  'use strict';

  var SITE = {
    name: 'OpenAgent',
    whatsapp: '923703159642',
    email: 'hello@open-agent.agency'
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

  /* ---------- Animated counters ---------- */
  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-count'), 10) || 0;
    var dur = 2000; // ms — animate over 2 seconds
    var prefix = el.getAttribute('data-prefix') || '';
    var suffix = el.getAttribute('data-suffix') || '';
    var start = null;
    function tick(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
      el.textContent = prefix + Math.round(target * eased).toLocaleString('en-US') + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  var counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window && counters.length) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          animateCounter(en.target);
          co.unobserve(en.target);
        }
      });
    }, { threshold: 0.3 });
    counters.forEach(function (el) { co.observe(el); });
  } else {
    counters.forEach(animateCounter);
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

  /* ---------- Generic tabs (pricing etc.) ---------- */
  document.querySelectorAll('[data-tabs]').forEach(function (group) {
    var tabs = group.querySelectorAll('[data-tab]');
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var key = tab.getAttribute('data-tab');
        group.querySelectorAll('[data-tab]').forEach(function (t) { t.classList.remove('on'); });
        tab.classList.add('on');
        document.querySelectorAll('.plan-panel').forEach(function (p) {
          p.classList.toggle('on', p.getAttribute('data-panel') === key);
        });
      });
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

  /* ---------- Testimonial slider ---------- */
  document.querySelectorAll('.tslider').forEach(function (slider) {
    var slides = slider.querySelectorAll('.tslide');
    var dotsWrap = slider.querySelector('.t-dots');
    var prev = slider.querySelector('.t-prev');
    var next = slider.querySelector('.t-next');
    var idx = 0;
    var timer = null;

    if (!slides.length) return;

    function go(n) {
      idx = (n + slides.length) % slides.length;
      slides.forEach(function (s, i) { s.classList.toggle('active', i === idx); });
      if (dotsWrap) {
        dotsWrap.querySelectorAll('button').forEach(function (d, i) {
          d.classList.toggle('on', i === idx);
        });
      }
    }
    function auto() {
      timer = window.setInterval(function () { go(idx + 1); }, 6000);
    }

    slides.forEach(function (_, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-label', 'Go to testimonial ' + (i + 1));
      b.addEventListener('click', function () { go(i); window.clearInterval(timer); auto(); });
      if (dotsWrap) dotsWrap.appendChild(b);
    });

    if (prev) prev.addEventListener('click', function () { go(idx - 1); window.clearInterval(timer); auto(); });
    if (next) next.addEventListener('click', function () { go(idx + 1); window.clearInterval(timer); auto(); });

    go(0);
    auto();
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
