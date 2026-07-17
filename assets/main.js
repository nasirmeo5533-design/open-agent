/* ============================================================
   OPEN AGENT — main.js
   Mobile menu, scroll reveal, contact form feedback
   ============================================================ */

// Mobile menu
(function () {
  var btn = document.getElementById('menuBtn');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { nav.classList.remove('open'); });
    });
  }
})();

// Scroll reveal
(function () {
  var els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach(function (e) { e.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        en.target.classList.add('in');
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(function (e) { io.observe(e); });
})();

// Contact form — blank form, local confirmation only (no backend, no external service)
(function () {
  var form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault(); // no backend; just acknowledge locally
    var ok = document.getElementById('formOk');
    if (ok) ok.style.display = 'block';
    form.reset();
  });
})();
