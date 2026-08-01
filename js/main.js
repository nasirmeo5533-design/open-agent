/* ==========================================================================
   OPEN AGENT — Main Script
   Vanilla JS. No jQuery, no build tools.
   --------------------------------------------------------------------------
   Modules:
   01. Reduced-motion guard
   02. Scroll reveal (IntersectionObserver)
   03. Animated counters + progress bars
   04. Mobile menu toggle
   05. Smooth anchor scrolling
   06. FAQ accordion
   07. Testimonial slider
   08. Image fallback (stock photo → local SVG)
   09. Contact form (validation + mailto + success)
   10. Init
   ========================================================================== */

(function () {
  "use strict";

  /* ------------------------------------------------------------------
     01. REDUCED-MOTION GUARD
     ------------------------------------------------------------------ */
  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ------------------------------------------------------------------
     02. SCROLL REVEAL (IntersectionObserver)
     ------------------------------------------------------------------ */
  function initReveal() {
    var items = document.querySelectorAll("[data-reveal]");

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      items.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    items.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ------------------------------------------------------------------
     03. ANIMATED COUNTERS + PROGRESS BARS
     ------------------------------------------------------------------ */
  function animateCount(el) {
    var target = parseFloat(el.getAttribute("data-count")) || 0;
    var suffix = el.getAttribute("data-suffix") || "";
    var prefix = el.getAttribute("data-prefix") || "";
    var decimals = parseInt(el.getAttribute("data-decimals") || "0", 10);
    var duration = prefersReducedMotion ? 0 : 1400;
    var start = null;

    function frame(ts) {
      if (!start) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      // easeOutCubic
      var eased = 1 - Math.pow(1 - progress, 3);
      var value = target * eased;
      el.textContent = prefix + value.toFixed(decimals) + suffix;
      if (progress < 1) {
        window.requestAnimationFrame(frame);
      } else {
        el.textContent = prefix + target.toFixed(decimals) + suffix;
      }
    }

    if (prefersReducedMotion) {
      el.textContent = prefix + target.toFixed(decimals) + suffix;
    } else {
      window.requestAnimationFrame(frame);
    }
  }

  function initCounters() {
    var counters = document.querySelectorAll("[data-count]");
    if (!("IntersectionObserver" in window)) {
      counters.forEach(animateCount);
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    counters.forEach(function (el) {
      observer.observe(el);
    });
  }

  function initProgressBars() {
    var bars = document.querySelectorAll("[data-progress]");

    if (!("IntersectionObserver" in window)) {
      bars.forEach(function (bar) {
        bar.style.width = bar.getAttribute("data-progress") + "%";
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.style.width =
              entry.target.getAttribute("data-progress") + "%";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    bars.forEach(function (bar) {
      observer.observe(bar);
    });
  }

  /* ------------------------------------------------------------------
     04. MOBILE MENU TOGGLE
     ------------------------------------------------------------------ */
  function initNav() {
    var burger = document.querySelector(".nav-burger");
    var menu = document.querySelector(".mobile-menu");
    if (!burger || !menu) return;

    function close() {
      menu.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }

    function open() {
      menu.classList.add("open");
      burger.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    }

    burger.addEventListener("click", function () {
      var isOpen = menu.classList.contains("open");
      if (isOpen) {
        close();
      } else {
        open();
      }
    });

    // Close menu when a link inside it is clicked
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", close);
    });

    // Close on Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("open")) {
        close();
      }
    });
  }

  /* ------------------------------------------------------------------
     05. SMOOTH ANCHOR SCROLLING
     ------------------------------------------------------------------ */
  function initSmoothScroll() {
    if (prefersReducedMotion) return;

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function (e) {
        var hash = link.getAttribute("href");
        if (hash.length < 2) return;
        var target = document.querySelector(hash);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", hash);
      });
    });
  }

  /* ------------------------------------------------------------------
     06. FAQ ACCORDION
     ------------------------------------------------------------------ */
  function initFaq() {
    var items = document.querySelectorAll(".faq-item");
    if (!items.length) return;

    items.forEach(function (item) {
      var question = item.querySelector(".faq-question");
      var answer = item.querySelector(".faq-answer");
      if (!question || !answer) return;

      var open =
        item.classList.contains("faq-item--open") ||
        question.getAttribute("aria-expanded") === "true";

      if (open) {
        item.classList.add("faq-item--open");
        question.setAttribute("aria-expanded", "true");
        answer.setAttribute("aria-hidden", "false");
      } else {
        question.setAttribute("aria-expanded", "false");
        answer.setAttribute("aria-hidden", "true");
      }

      question.addEventListener("click", function () {
        var isOpen = item.classList.contains("faq-item--open");
        // Close all, then open clicked one (single-open accordion)
        items.forEach(function (other) {
          other.classList.remove("faq-item--open");
          other.querySelector(".faq-question").setAttribute("aria-expanded", "false");
          other.querySelector(".faq-answer").setAttribute("aria-hidden", "true");
        });
        if (!isOpen) {
          item.classList.add("faq-item--open");
          question.setAttribute("aria-expanded", "true");
          answer.setAttribute("aria-hidden", "false");
        }
      });
    });
  }

  /* ------------------------------------------------------------------
     07. TESTIMONIAL SLIDER (responsive pager)
     1 card per page on mobile, 3 on desktop (matches lg:grid-cols-3).
     ------------------------------------------------------------------ */
  function initSlider() {
    var track = document.getElementById("testi-track");
    var prevBtn = document.getElementById("testi-prev");
    var nextBtn = document.getElementById("testi-next");
    var dotsWrap = document.getElementById("testi-dots");
    if (!track || !prevBtn || !nextBtn || !dotsWrap) return;

    var cards = Array.prototype.slice.call(track.children);
    if (!cards.length) return;

    var index = 0;
    var pages = [];
    var dots = [];

    function perPage() {
      return window.innerWidth >= 1024 ? 3 : 1;
    }

    function buildPages() {
      var n = perPage();
      pages = [];
      for (var i = 0; i < cards.length; i += n) {
        pages.push(cards.slice(i, i + n));
      }
      if (index >= pages.length) index = pages.length - 1;
      if (index < 0) index = 0;
      renderDots();
      render();
    }

    function renderDots() {
      dotsWrap.innerHTML = "";
      dots = [];
      pages.forEach(function (_, i) {
        var dot = document.createElement("button");
        dot.type = "button";
        dot.className = "testi-dot";
        dot.setAttribute("aria-label", "Go to testimonial page " + (i + 1));
        dot.addEventListener("click", function () {
          goTo(i);
        });
        dotsWrap.appendChild(dot);
        dots.push(dot);
      });
      if (pages.length <= 1) {
        dotsWrap.style.display = "none";
      } else {
        dotsWrap.style.display = "";
      }
    }

    function render() {
      cards.forEach(function (card, i) {
        var active = false;
        pages.forEach(function (page) {
          if (page.indexOf(card) !== -1 && page === pages[index]) {
            active = true;
          }
        });
        card.style.display = active ? "" : "none";
      });
      dots.forEach(function (dot, i) {
        dot.classList.toggle("active", i === index);
        if (i === index) {
          dot.setAttribute("aria-current", "true");
        } else {
          dot.removeAttribute("aria-current");
        }
      });
      if (prevBtn) prevBtn.disabled = pages.length <= 1;
      if (nextBtn) nextBtn.disabled = pages.length <= 1;
    }

    function goTo(i) {
      if (i < 0) i = pages.length - 1;
      if (i > pages.length - 1) i = 0;
      index = i;
      render();
    }

    prevBtn.addEventListener("click", function () {
      goTo(index - 1);
    });
    nextBtn.addEventListener("click", function () {
      goTo(index + 1);
    });

    var resizeTimer = null;
    window.addEventListener(
      "resize",
      function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(buildPages, 150);
      },
      { passive: true }
    );

    buildPages();
  }

  /* ------------------------------------------------------------------
     08. BLOG CATEGORY FILTER
     ------------------------------------------------------------------ */
  function initBlogFilter() {
    var buttons = document.querySelectorAll("[data-filter]");
    if (!buttons.length) return;

    var cards = document.querySelectorAll(".blog-card");

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var filter = btn.getAttribute("data-filter");

        buttons.forEach(function (b) {
          b.classList.remove("filter-btn--active");
          b.setAttribute("aria-pressed", "false");
        });
        btn.classList.add("filter-btn--active");
        btn.setAttribute("aria-pressed", "true");

        cards.forEach(function (card) {
          var match =
            filter === "all" || card.getAttribute("data-category") === filter;

          if (match) {
            card.classList.remove("blog-card--hidden");
            card.classList.add("blog-card--fading");
            window.requestAnimationFrame(function () {
              card.classList.remove("blog-card--fading");
            });
          } else {
            card.classList.add("blog-card--hidden");
          }
        });
      });
    });
  }

  /* ------------------------------------------------------------------
     08b. IMAGE FALLBACK (stock photo → local SVG if it fails to load)
     ------------------------------------------------------------------ */
  function initImageFallback() {
    document.querySelectorAll("img[data-fallback]").forEach(function (img) {
      img.addEventListener("error", function () {
        var fallback = img.getAttribute("data-fallback");
        if (fallback) {
          img.src = fallback;
          img.removeAttribute("data-fallback");
        }
      });
      // If the stock image never loads, keep the local fallback as src
      if (img.complete && img.naturalWidth === 0) {
        var fb = img.getAttribute("data-fallback");
        if (fb) {
          img.src = fb;
          img.removeAttribute("data-fallback");
        }
      }
    });
  }

  /* ------------------------------------------------------------------
     09. CONTACT FORM (VALIDATION + MAILTO + SUCCESS)
     ------------------------------------------------------------------ */
  function initContactForm() {
    var form = document.querySelector("[data-contact-form]");
    if (!form) return;

    var submitBtn = form.querySelector("[type='submit']");
    var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    var phoneRe = /^[+]?[\d\s\-()]{7,20}$/;

    function setError(input, valid) {
      input.classList.toggle("form-field--invalid", !valid);
    }

    function validateField(input) {
      var name = input.name;
      var value = input.value.trim();
      var valid = true;

      if (input.hasAttribute("required") && !value) {
        valid = false;
      } else if (name === "email" && value && !emailRe.test(value)) {
        valid = false;
      } else if (name === "phone" && value && !phoneRe.test(value)) {
        valid = false;
      }

      setError(input, valid);
      return valid;
    }

    // Validate live on blur + re-validate on input
    form.querySelectorAll(".form-input").forEach(function (input) {
      input.addEventListener("blur", function () {
        validateField(input);
      });
      input.addEventListener("input", function () {
        setError(input, true);
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var inputs = Array.prototype.slice.call(
        form.querySelectorAll(".form-input")
      );
      var allValid = inputs.every(validateField);

      if (!allValid) {
        form.classList.remove("form-card--shake");
        // force reflow to restart animation
        void form.offsetWidth;
        form.classList.add("form-card--shake");
        var firstInvalid = form.querySelector(".form-field--invalid");
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // Build mailto link from fields
      var data = {};
      inputs.forEach(function (input) {
        data[input.name] = input.value.trim();
      });

      var subject =
        "New project inquiry from " + (data.name || "a store owner");
      var body =
        "Name: " + data.name + "\n" +
        "Phone: " + data.phone + "\n" +
        "Email: " + data.email + "\n" +
        "Store URL: " + (data.storeUrl || "-") + "\n" +
        "Budget: " + (data.budget || "-") + "\n\n" +
        "Message:\n" + (data.message || "-");

      var mailto =
        "mailto:nasirmeo5533@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      // Simulate a short "sending" state, then open mail client + show success
      submitBtn.classList.add("form-submit--loading");
      submitBtn.disabled = true;

      setTimeout(function () {
        window.location.href = mailto;
        submitBtn.classList.remove("form-submit--loading");
        submitBtn.disabled = false;
        form.classList.add("form-card--sent");
        form.reset();
      }, 700);
    });
  }

  /* ------------------------------------------------------------------
     10. INIT
     ------------------------------------------------------------------ */
  document.addEventListener("DOMContentLoaded", function () {
    initReveal();
    initCounters();
    initProgressBars();
    initNav();
    initSmoothScroll();
    initFaq();
    initSlider();
    initBlogFilter();
    initImageFallback();
    initContactForm();
  });
})();
