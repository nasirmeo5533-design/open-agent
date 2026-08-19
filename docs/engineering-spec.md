# Engineering Specification — OpenAgent Website Rebuild

**Author:** Agent 3 — Senior Frontend Engineer & QA Engineer
**Date:** 2026-08-19
**Status:** Specification (no code changes applied)

---

## PART A: ARCHITECTURE DECISION

### Recommendation: Stay with pure HTML/CSS/JS

**Verdict: No build tool. Keep it simple.**

### Justification

| Factor | Pure HTML/CSS/JS | Lightweight Build (Vite/11ty) |
|---|---|---|
| Deployment | Push `main` → GitHub Pages (zero config) | Same, but must include build output or configure output dir |
| Complexity | One less thing to break | Another dependency to maintain, lock file to update |
| Team size | Solo founder edits HTML directly | Requires `npm install` + `npm run build` before deploy |
| Site scale | ~9 pages + ~12 blog posts = ~21 files | Build tool only pays off at 100+ pages (templating) |
| CSS complexity | One 500-line file; well-organized | Could use nesting, but not worth a build for this size |
| JS complexity | 176 lines of vanilla JS; no framework needed | No benefit — already minimal |
| Performance | Already fast; no bundle splitting needed | Would add Node.js to deploy pipeline |
| Current deploy pipeline | `deploy.yml` already works perfectly | Would need to modify workflow to run build step |
| Maintenance | Any text editor, zero tooling | Requires Node.js environment |

**Why a build tool is NOT warranted:**
1. The site has ~21 HTML files. Build tools like 11ty shine at 100+ pages with shared templates — this site doesn't have that problem.
2. CSS is a single 496-line file. PostCSS nesting or Sass would save maybe 50 lines — not worth a build step.
3. The deploy workflow (`actions/upload-pages-artifact`) already uploads the repo root directly. Adding a build step means modifying the workflow and managing a `dist/` output.
4. The solo founder (Abeer) edits HTML files directly. Adding `npm run build` creates friction.
5. GitHub Pages has zero build step support — perfect for pure static.

**If the site grows beyond 50 pages**, revisit with 11ty (zero-config SSG, outputs static HTML, minimal config). But for now, the complexity cost outweighs the benefit.

---

## PART B: FILE STRUCTURE PLAN

### Target Structure (after rebuild)

```
open-agent-site/
├── .github/
│   └── workflows/
│       └── deploy.yml              # KEEP — no changes needed
├── assets/
│   ├── css/
│   │   └── style.css               # REWRITE — new dark theme CSS
│   ├── js/
│   │   └── main.js                 # REWRITE — clean vanilla JS
│   └── images/
│       ├── branding/
│       │   ├── favicons/           # KEEP — all favicon files
│       │   │   ├── favicon.ico
│       │   │   ├── favicon-16x16.png
│       │   │   ├── favicon-32x32.png
│       │   │   ├── favicon-96x96.png
│       │   │   ├── apple-touch-icon.png
│       │   │   ├── android-chrome-192x192.png
│       │   │   └── android-chrome-512x512.png
│       │   ├── abeer.png           # KEEP — founder photo
│       │   └── website logo.png    # KEEP — brand logo
│       ├── founder/
│       │   └── abeer-founder.jpg   # KEEP — founder hero
│       ├── og/
│       │   ├── og-image.png        # KEEP — update if theme changes
│       │   ├── og-square.png       # KEEP
│       │   └── twitter-image.png   # KEEP — update if theme changes
│       ├── portfolio/              # KEEP — all portfolio images
│       │   ├── portfolio13.png ... portfolio21.png
│       │   └── portfolio_12.png, portfolio_14.png
│       ├── logo.svg                # KEEP — site logo
│       ├── logo-mark.svg           # KEEP — logo mark
│       ├── hero-bg.jpg             # KEEP — hero background
│       ├── about-hero.jpg          # KEEP
│       ├── services-hero.jpg       # KEEP
│       ├── contact-hero.jpg        # KEEP
│       ├── portfolio-hero.jpg      # KEEP
│       ├── portfolio-1.png ... portfolio-11.png  # KEEP
│       ├── portfolio-*.svg         # KEEP — portfolio case study images
│       └── blog-*.svg              # KEEP — blog illustrations
├── blog/                           # KEEP — static blog posts
│   ├── ai-agent-cost-2026.html
│   ├── ai-automation-recruiters.html
│   ├── ai-automation-small-business.html
│   ├── ai-content-social-media.html
│   ├── ai-industry.html
│   ├── ai-tools-small-business.html
│   ├── digital-marketing.html
│   ├── meta-ads-perfume-beauty.html
│   ├── meta-ads-perfume-budget.html
│   ├── meta-vs-google-ads.html
│   ├── shopify-cro-guide.html
│   └── shopify-pakistan-guide.html
├── index.html                      # REWRITE — homepage
├── services.html                   # REWRITE — services page
├── industries.html                 # NEW — industries we serve
├── work.html                       # RENAME from portfolio.html — portfolio/case studies
├── pricing.html                    # REWRITE — pricing page
├── about.html                      # REWRITE — about page
├── contact.html                    # REWRITE — contact page
├── blog.html                       # REWRITE — blog listing
├── privacy.html                    # REWRITE — privacy policy
├── terms.html                      # REWRITE — terms of service
├── 404.html                        # REWRITE — custom 404
├── sitemap.xml                     # REWRITE — updated URLs
├── robots.txt                      # KEEP — already correct
├── CNAME                           # KEEP — open-agent.agency
├── AGENTS.md                       # KEEP — dev docs
├── README.md                       # KEEP
├── .gitignore                      # KEEP
├── google3cef563566032184.html     # KEEP — Google verification (DO NOT DELETE)
├── llms.txt                        # KEEP — Structure B
├── llms-full.txt                   # KEEP — Structure B
├── site.webmanifest                # KEEP — Structure B
├── vercel.json                     # KEEP — inert on GH Pages, but don't remove
├── favicon.svg                     # KEEP — Structure B
├── favicon.ico                     # KEEP — Structure B
├── favicon-96x96.png               # KEEP — Structure B
├── apple-touch-icon.png            # KEEP — Structure B
│
│  ── Structure B (DO NOT TOUCH) ──
├── about/index.html
├── contact/index.html
├── faq/index.html
├── pricing/index.html
├── privacy/index.html
├── terms/index.html
├── services/
│   ├── index.html
│   ├── ai-agent/index.html
│   ├── ai-agent-development/index.html
│   ├── ai-website-development/index.html
│   ├── digital-marketing/index.html
│   ├── generative-ai/index.html
│   ├── meta-google-ads/index.html
│   └── social-media/index.html
├── blog/index.html
├── blog-post.html
├── blog-post/index.html
├── css/style.css                   # Structure B CSS (dark/orange theme)
├── js/main.js                      # Structure B JS
├── js/posts.js                     # Structure B blog data
└── versions/                       # Archived builds (DO NOT TOUCH)
```

### Files to DELETE from Structure A (old rose-red versions)

These are replaced by the rebuild:
- `case-studies.html` → content merged into `work.html`
- `refund.html` → merge into `terms.html` or keep as separate if desired
- `portfolio.html` → replaced by `work.html`
- `slides.html` → unused internal file, delete

### Files to ADD

- `industries.html` — new page for industry verticals
- `work.html` — replaces portfolio.html + case-studies.html

### Files to KEEP UNCHANGED

- All Structure B folders (`about/`, `services/`, `pricing/`, `contact/`, `faq/`, `terms/`, `privacy/`, `blog/index.html`, `blog-post.html`, `blog-post/`)
- All Structure B assets (`css/style.css`, `js/main.js`, `js/posts.js`)
- `.github/workflows/deploy.yml`
- `CNAME`
- `google3cef563566032184.html`
- `versions/`
- `AGENTS.md`
- `llms.txt`, `llms-full.txt`
- `site.webmanifest`, `vercel.json`
- Root favicon files (`favicon.svg`, `favicon.ico`, `favicon-96x96.png`, `apple-touch-icon.png`)
- All blog posts in `blog/` directory (update internal links but keep content)
- All images in `assets/images/` (keep everything)

---

## PART C: TECHNICAL SPECIFICATIONS

### 1. CSS Architecture

#### Design Tokens (CSS Custom Properties)

```css
:root {
  /* --- Colors --- */
  --color-bg:          #0A0A0A;
  --color-bg-elevated: #111111;
  --color-surface:     #1A1A1A;
  --color-surface-alt: #222222;
  --color-border:      #2A2A2A;
  --color-border-light:#1F1F1F;

  --color-text:        #FFFFFF;
  --color-text-secondary: #A0A0A0;
  --color-text-muted:  #666666;

  --color-primary:     #FF6B00;
  --color-primary-hover: #FF8533;
  --color-primary-glow: rgba(255, 107, 0, 0.25);

  --color-success:     #22C55E;
  --color-whatsapp:    #25D366;

  /* --- Typography --- */
  --font-display: 'Inter', system-ui, -apple-system, sans-serif;
  --font-body:    'Inter', system-ui, -apple-system, sans-serif;
  --font-mono:    'JetBrains Mono', ui-monospace, monospace;

  /* --- Spacing --- */
  --space-xs:  0.25rem;   /* 4px */
  --space-sm:  0.5rem;    /* 8px */
  --space-md:  1rem;      /* 16px */
  --space-lg:  1.5rem;    /* 24px */
  --space-xl:  2rem;      /* 32px */
  --space-2xl: 3rem;      /* 48px */
  --space-3xl: 4rem;      /* 64px */
  --space-4xl: 6rem;      /* 96px */
  --space-section: 104px; /* section vertical padding */

  /* --- Layout --- */
  --max-width:    1180px;
  --border-radius: 12px;
  --border-radius-lg: 20px;

  /* --- Transitions --- */
  --ease: cubic-bezier(.22, .61, .36, 1);
  --transition-fast: 0.18s var(--ease);
  --transition-base: 0.25s var(--ease);
  --transition-slow: 0.4s var(--ease);

  /* --- Shadows --- */
  --shadow-sm:  0 2px 8px rgba(0,0,0,0.3);
  --shadow-md:  0 8px 24px rgba(0,0,0,0.4);
  --shadow-lg:  0 16px 48px rgba(0,0,0,0.5);
  --shadow-glow: 0 8px 32px var(--color-primary-glow);
}
```

#### Mobile-First Responsive Approach

Breakpoints (mobile-first, min-width):
```css
/* Base: mobile (< 560px) */
/* sm: 560px  — small tablets */
/* md: 768px  — tablets */
/* lg: 900px  — small desktops */
/* xl: 1180px — full-width container */
```

Strategy:
- Start with single-column layouts
- Progressive enhancement at each breakpoint
- Never use max-width for layout shifts — only for minor tweaks
- `section` padding: `74px 0` on mobile → `104px 0` on desktop
- Grid columns: `1fr` → `repeat(2,1fr)` → `repeat(3,1fr)` → `repeat(4,1fr)`

#### Section Styling Strategy

Each page section follows this pattern:
```css
.section-name {
  padding: var(--space-section) 0;
  position: relative;
}
.section-name .wrap { /* boxed content */ }
```

Sections are styled by component class, not by page. Reusable components:
- `.hero`, `.hero-split`, `.hero-center` — hero variants
- `.svc-grid`, `.svc` — services cards
- `.why-grid`, `.why-card` — why-us cards
- `.pf-grid`, `.pf` — portfolio grid
- `.price-grid`, `.price` — pricing cards
- `.faq-acc`, `.faq-acc details` — FAQ accordion
- `.cgrid` — contact form + WhatsApp split
- `.footer` — site footer
- `.topbar` — sticky header

#### Performance Considerations

- **Critical CSS:** Inline the first ~200 lines (reset, tokens, topbar, hero) in `<style>` tag in `<head>`. Load full `style.css` with `media="print" onload="this.media='all'"` pattern or `<link rel="stylesheet" href="assets/css/style.css">` with `display=swap` for fonts.
- **No CSS processing needed:** Single file, no nesting, no post-processing.
- **Total CSS target:** < 25KB unminified (~8KB gzipped).

### 2. JavaScript Architecture

#### Required Interactions

| Feature | Approach | CSS-only? |
|---|---|---|
| Mobile menu toggle | Vanilla JS: classList.toggle('open') on nav | No — needs click handler |
| Scroll reveal animations | IntersectionObserver (CSS transitions) | No — JS triggers class |
| FAQ accordion | Native `<details>/<summary>` elements | **Yes** — CSS only |
| Smooth scroll | CSS `scroll-behavior: smooth` + JS for offset | Partial |
| WhatsApp floating button | Pure HTML/CSS link | **Yes** |
| Contact form handling | Vanilla JS validation + submit feedback | No |
| Testimonial carousel | Vanilla JS transform on click | No |
| Portfolio lightbox | Vanilla JS modal open/close | No |
| Stat counter animation | IntersectionObserver + requestAnimationFrame | No |
| Back-to-top button | IntersectionObserver + class toggle | Partial |
| Hero slider (if kept) | Vanilla JS interval + class toggle | No |

#### JS Architecture

```javascript
// main.js — Single IIFE, no modules needed
(function() {
  'use strict';

  // 01. Mobile menu
  // 02. Scroll reveal (IntersectionObserver)
  // 03. Stat counters (IntersectionObserver + rAF)
  // 04. Testimonial slider
  // 05. Portfolio lightbox
  // 06. Contact form handling
  // 07. Back-to-top button
  // 08. Active nav link on scroll
  // 09. Init on DOMContentLoaded
})();
```

#### JS Performance Rules

- **No jQuery.** No frameworks. Vanilla JS only.
- **`defer` attribute** on `<script>` tag — never `async` (except GA4).
- **IntersectionObserver** for all scroll-based animations (no scroll event listeners).
- **`requestAnimationFrame`** for counter animations.
- **`classList.toggle`** for all state changes (no inline styles).
- **Total JS target:** < 15KB unminified (~5KB gzipped).

### 3. HTML Semantic Structure

#### Standard Page Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Primary Meta -->
  <title>Page Title — OpenAgent</title>
  <meta name="description" content="...">
  <link rel="canonical" href="https://open-agent.agency/page.html">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://open-agent.agency/page.html">
  <meta property="og:title" content="Page Title — OpenAgent">
  <meta property="og:description" content="...">
  <meta property="og:image" content="https://open-agent.agency/assets/images/og/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:site_name" content="OpenAgent">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Page Title — OpenAgent">
  <meta name="twitter:description" content="...">
  <meta name="twitter:image" content="https://open-agent.agency/assets/images/og/twitter-image.png">

  <!-- Favicons (Structure A) -->
  <link rel="icon" type="image/png" sizes="32x32" href="assets/images/branding/favicons/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="assets/images/branding/favicons/favicon-16x16.png">
  <link rel="icon" type="image/png" sizes="96x96" href="assets/images/branding/favicons/favicon-96x96.png">
  <link rel="apple-touch-icon" sizes="180x180" href="assets/images/branding/favicons/apple-touch-icon.png">

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">

  <!-- Styles -->
  <link rel="stylesheet" href="assets/css/style.css">

  <!-- GA4 -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-MYQHFB4QNL"></script>
  <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-MYQHFB4QNL')</script>
</head>
<body>

  <header class="topbar" role="banner">
    <div class="wrap">
      <a href="/" class="brand" aria-label="OpenAgent — Home">
        <span class="dot" aria-hidden="true"></span>Open<span>Agent</span>
      </a>
      <nav class="nav" id="nav" role="navigation" aria-label="Main navigation">
        <a href="/">Home</a>
        <a href="services.html">Services</a>
        <a href="industries.html">Industries</a>
        <a href="work.html">Work</a>
        <a href="pricing.html">Pricing</a>
        <a href="about.html">About</a>
        <a href="blog.html">Blog</a>
        <a href="contact.html" class="btn">Get a Quote</a>
      </nav>
      <button class="menu-btn" id="menuBtn" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="nav">
        <span class="hamburger" aria-hidden="true"></span>
      </button>
    </div>
  </header>

  <main id="main-content">
    <!-- Page content here -->
  </main>

  <footer class="footer" role="contentinfo">
    <div class="wrap">
      <!-- Footer content -->
    </div>
  </footer>

  <!-- WhatsApp floating button -->
  <a href="https://wa.me/923703159642"
     class="fwa"
     target="_blank"
     rel="noopener"
     aria-label="Chat on WhatsApp"
     role="link">
    <!-- WhatsApp SVG icon -->
  </a>

  <!-- Mobile CTA bar -->
  <div class="mobile-cta" aria-hidden="true">
    <!-- Call + WhatsApp buttons -->
  </div>

  <script src="assets/js/main.js" defer></script>
</body>
</html>
```

#### Blog Post Template (in `blog/`)

```html
<!-- Same head pattern, but with ../ prefix -->
<link rel="stylesheet" href="../assets/css/style.css">
<script src="../assets/js/main.js" defer></script>
```

#### ARIA and Accessibility

- All `<nav>` elements get `role="navigation"` and `aria-label`
- All icon-only buttons get `aria-label`
- `aria-expanded="false/true"` on mobile menu button
- `aria-controls="nav"` on menu button linking to nav ID
- `role="banner"` on `<header>`
- `role="contentinfo"` on `<footer>`
- `role="main"` on `<main>` (implicit, but explicit for older screen readers)
- Skip-to-content link: `<a href="#main-content" class="skip-link">Skip to content</a>` (hidden visually, shown on focus)
- All images get descriptive `alt` text
- Decorative SVGs get `aria-hidden="true"`
- Form inputs linked to labels via `for`/`id`

#### JSON-LD Structured Data

Place in `<head>` of each page. Schemas needed:

**Organization (every page):**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "OpenAgent",
  "url": "https://open-agent.agency",
  "logo": "https://open-agent.agency/assets/images/logo.svg",
  "description": "AI-powered digital marketing and business-growth team.",
  "email": "abeerinfo5566@gmail.com",
  "telephone": "+92-370-3159642",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Karachi",
    "addressCountry": "PK"
  },
  "sameAs": [
    "https://x.com/Abeergrowth",
    "https://www.facebook.com/profile.php?id=61572143246804",
    "https://www.instagram.com/growthbot_02/",
    "https://www.linkedin.com/in/abeer-nasir-3052b628a/"
  ],
  "founder": {
    "@type": "Person",
    "name": "Abeer Nasir"
  }
}
```

**LocalBusiness (about, contact pages):**
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "OpenAgent",
  "url": "https://open-agent.agency",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Karachi",
    "addressRegion": "Sindh",
    "addressCountry": "PK"
  }
}
```

**Service (services page):**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Digital Marketing",
  "provider": { "@type": "Organization", "name": "OpenAgent" },
  "areaServed": "PK",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Marketing Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Meta Ads Management" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Shopify Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Automation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Agent Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Development" } }
    ]
  }
}
```

**FAQ (faq page + FAQ sections on other pages):**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services do you offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Meta Ads, Shopify development, AI automation, AI agents, AI content, web development..."
      }
    }
  ]
}
```

**BreadcrumbList (all inner pages):**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://open-agent.agency/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://open-agent.agency/services.html" }
  ]
}
```

**Product/Service (pricing page):**
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "OpenAgent Starter Plan",
  "offers": {
    "@type": "Offer",
    "price": "30000",
    "priceCurrency": "PKR",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock"
  }
}
```

**Article (blog posts):**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Post Title",
  "author": { "@type": "Person", "name": "Abeer Nasir" },
  "publisher": { "@type": "Organization", "name": "OpenAgent", "logo": { "@type": "ImageObject", "url": "https://open-agent.agency/assets/images/logo.svg" } },
  "datePublished": "2026-01-15",
  "dateModified": "2026-01-15",
  "image": "https://open-agent.agency/assets/images/blog-hero.jpg",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://open-agent.agency/blog/post-slug.html" }
}
```

### 4. Performance Requirements

#### Image Optimization

| Image Type | Format | Max Size | Lazy Load |
|---|---|---|---|
| Hero images | JPEG/WebP | 150KB | No (above fold) |
| Portfolio thumbnails | JPEG/WebP | 80KB | Yes (`loading="lazy"`) |
| Blog post images | JPEG/WebP | 100KB | Yes |
| OG images | PNG | 300KB | No (preload) |
| Favicons | PNG/ICO | 20KB | No |
| Founder photo | JPEG/WebP | 100KB | No (above fold on about) |

**Strategy:**
- Use `loading="lazy"` on all images below the fold
- Use `decoding="async"` on all images
- Use `width` and `height` attributes to prevent layout shift (CLS)
- Hero images: serve at 1600px wide max, use `srcset` for responsive
- Consider WebP conversion for portfolio images (future optimization)

#### CSS Loading

```html
<!-- Critical CSS inline (optional, for max performance) -->
<style>
  /* Reset, tokens, topbar, hero — ~3KB */
</style>

<!-- Full CSS with print swap -->
<link rel="stylesheet" href="assets/css/style.css">
```

For simplicity (and given the site is small), just load `style.css` normally with `<link rel="stylesheet">`. The file will be < 25KB unminified, ~8KB gzipped.

#### JS Loading

```html
<script src="assets/js/main.js" defer></script>
```

- `defer` ensures JS executes after HTML parsing
- No `async` (except GA4, which is already async)
- No inline scripts except GA4 config and dataLayer setup

#### Font Loading

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

- `font-display: swap` (Google Fonts `display=swap` parameter)
- System font stack as fallback: `system-ui, -apple-system, sans-serif`
- Preconnect hints to speed up font loading

#### Target Budget

| Resource | Target |
|---|---|
| CSS | < 25KB unminified, < 8KB gzipped |
| JS | < 15KB unminified, < 5KB gzipped |
| Total CSS+JS | < 40KB unminified, < 13KB gzipped |
| First Contentful Paint | < 1.5s on 4G |
| Largest Contentful Paint | < 2.5s on 4G |
| Cumulative Layout Shift | < 0.1 |
| Total page weight (excl. images) | < 100KB |

### 5. SEO Checklist

#### Title Tags

| Page | Title |
|---|---|
| index.html | `OpenAgent — AI Automation & Performance Marketing for E-commerce` |
| services.html | `Services — Meta Ads, Shopify, AI Automation \| OpenAgent` |
| industries.html | `Industries — E-commerce, D2C, Beauty, Tech \| OpenAgent` |
| work.html | `Our Work — Case Studies & Portfolio \| OpenAgent` |
| pricing.html | `Pricing — Simple, Honest Plans \| OpenAgent` |
| about.html | `About — Meet Abeer Nasir, Founder \| OpenAgent` |
| contact.html | `Contact — Start a Project \| OpenAgent` |
| blog.html | `Blog — Marketing Tips & AI Guides \| OpenAgent` |
| privacy.html | `Privacy Policy \| OpenAgent` |
| terms.html | `Terms of Service \| OpenAgent` |
| 404.html | `Page Not Found — OpenAgent` |

#### Meta Descriptions

| Page | Description (max 155 chars) |
|---|---|
| index | `OpenAgent helps e-commerce and D2C brands grow with Meta Ads, Shopify, AI automation and web development — founded by Abeer Nasir in Karachi.` |
| services | `Meta Ads management, Shopify development, AI automation, AI agents and web development — everything your e-commerce brand needs to grow.` |
| industries | `We specialize in e-commerce, D2C beauty, fashion, tech startups and local service businesses across Pakistan and beyond.` |
| work | `See real results: Meta Ads campaigns, Shopify builds, AI automation projects and case studies with measurable ROAS and ROI.` |
| pricing | `Starter from PKR 30,000/mo. Premium PKR 50,000/mo. Pro PKR 80,000/mo. 4-day money-back guarantee. No lock-in contracts.` |
| about | `OpenAgent was founded by Abeer Nasir — a data-driven marketer combining Meta Ads, Shopify expertise and AI automation for e-commerce growth.` |
| contact | `Ready to grow? Get a free strategy call with Abeer Nasir. WhatsApp, email or fill the form — response within hours.` |
| blog | `Marketing guides, AI automation tips, Meta Ads strategies and Shopify optimization — written by the OpenAgent team.` |
| privacy | `OpenAgent privacy policy — how we collect, use and protect your personal information.` |
| terms | `OpenAgent terms of service — rules governing use of our website and services.` |

#### Canonical URLs

Every page gets: `<link rel="canonical" href="https://open-agent.agency/page.html">`
- Use absolute URLs
- Include trailing slash for root: `https://open-agent.agency/`
- No trailing slash for `.html` pages: `https://open-agent.agency/services.html`

#### robots.txt

```
User-agent: *
Allow: /
Disallow: /versions/
Disallow: /about/
Disallow: /services/
Disallow: /pricing/
Disallow: /contact/
Disallow: /faq/
Disallow: /terms/
Disallow: /privacy/
Disallow: /blog/index.html
Disallow: /blog-post.html
Disallow: /blog-post/

Sitemap: https://open-agent.agency/sitemap.xml
```

Note: Block Structure B pages from crawlers to avoid duplicate content.

#### sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://open-agent.agency/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>https://open-agent.agency/services.html</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://open-agent.agency/industries.html</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://open-agent.agency/work.html</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://open-agent.agency/pricing.html</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://open-agent.agency/about.html</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://open-agent.agency/contact.html</loc><changefreq>yearly</changefreq><priority>0.7</priority></url>
  <url><loc>https://open-agent.agency/blog.html</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <!-- Blog posts -->
  <url><loc>https://open-agent.agency/blog/ai-agent-cost-2026.html</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>
  <!-- ... all blog posts ... -->
  <url><loc>https://open-agent.agency/privacy.html</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>
  <url><loc>https://open-agent.agency/terms.html</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>
</urlset>
```

Do NOT include Structure B URLs.

### 6. Accessibility Checklist

#### WCAG 2.1 AA Compliance Targets

| Criterion | Target | Implementation |
|---|---|---|
| 1.1.1 Non-text Content | AA | All images have descriptive `alt` text. Decorative SVGs get `aria-hidden="true"`. |
| 1.3.1 Info and Relationships | AA | Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`. Proper heading hierarchy (h1 → h2 → h3). |
| 1.4.1 Use of Color | AA | Info is not conveyed by color alone. Links have underline or visual indicator beyond color. |
| 1.4.3 Contrast Minimum | AA | Text: 4.5:1 ratio (white #FFF on dark #0A0A0A = 19.1:1 ✓). Muted text #A0A0A0 on #0A0A0A = 8.6:1 ✓. |
| 1.4.4 Resize Text | AA | All font sizes in `rem`/`em`. Text scales up to 200% without horizontal scroll. |
| 1.4.10 Reflow | AA | No horizontal scroll at 320px width (400% zoom). Single-column layout on mobile. |
| 2.1.1 Keyboard | AA | All interactive elements reachable via Tab. No keyboard traps. |
| 2.1.2 No Keyboard Trap | AA | Lightbox closes on Escape. Modal closes on Escape or click outside. |
| 2.4.1 Bypass Blocks | AA | Skip-to-content link: `<a href="#main-content" class="skip-link">`. |
| 2.4.3 Focus Order | AA | Logical tab order matching visual layout. |
| 2.4.6 Headings and Labels | AA | Descriptive headings. All form inputs have visible labels. |
| 2.4.7 Focus Visible | AA | 3px orange outline on focus-visible. No `outline: none` without replacement. |
| 3.1.1 Language of Page | AA | `<html lang="en">` on every page. |
| 3.3.2 Labels or Instructions | AA | All form fields have `<label>` elements linked via `for`/`id`. |
| 4.1.2 Name, Role, Value | AA | All custom controls have ARIA attributes. Menu button has `aria-expanded`. |

#### Keyboard Navigation

- Tab order: skip link → nav links → main content → footer links → WhatsApp button
- Mobile menu: Enter/Space toggles menu, Escape closes it
- Lightbox: Escape closes it, focus returns to trigger element
- FAQ: Enter/Space toggles `<details>` (native behavior)
- Testimonial slider: arrow buttons focusable and activatable via Enter/Space

#### Screen Reader Considerations

- Skip link: visually hidden, appears on focus
- All nav links have descriptive text (not "click here")
- Social media links have `aria-label="Follow on X"` etc.
- WhatsApp button: `aria-label="Chat on WhatsApp"`
- Hero section: `<h1>` is the first heading on every page
- Form errors: announce via `aria-live="polite"` region
- Lightbox: `role="dialog"` with `aria-modal="true"` and `aria-label`

#### Color Contrast Ratios (Dark Theme)

| Element | Foreground | Background | Ratio | Status |
|---|---|---|---|---|
| Body text | #FFFFFF | #0A0A0A | 19.1:1 | ✓ AAA |
| Secondary text | #A0A0A0 | #0A0A0A | 8.6:1 | ✓ AAA |
| Muted text | #666666 | #0A0A0A | 4.0:1 | ✓ AA (large text only) — use #777 for AA on small text |
| Primary orange | #FF6B00 | #0A0A0A | 5.3:1 | ✓ AA |
| Orange on dark surface | #FF6B00 | #1A1A1A | 4.6:1 | ✓ AA |
| White on orange | #FFFFFF | #FF6B00 | 3.5:1 | ⚠️ Large text only — use for headings/buttons, not body text |
| White on orange button | #FFFFFF | #FF6B00 | 3.5:1 | ✓ AA for large text (buttons are large) |

**Action items:**
- Use `#777777` minimum for muted text on small sizes (4.6:1)
- Orange buttons with white text are OK for buttons (large text, 3:1 minimum met)
- Body text: always white on dark — excellent contrast

### 7. GitHub Pages Deployment

#### deploy.yml — No Changes Needed

The existing workflow is correct:
```yaml
name: Deploy static content to Pages
on:
  push:
    branches: [main]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: pages
  cancel-in-progress: true
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: '.'
      - id: deployment
        uses: actions/deploy-pages@v4
```

This uploads the entire repo root to GitHub Pages. No build step needed.

#### CNAME — No Changes Needed

Content: `open-agent.agency`

#### Path Considerations

- **Always use relative paths** for internal links: `href="services.html"`, not `href="/services.html"`
- Exception: OG image URLs and canonical URLs use absolute paths with `https://open-agent.agency/`
- Blog posts in `blog/` use `../` prefix: `href="../assets/css/style.css"`
- Root pages use `./` or no prefix: `href="assets/css/style.css"`

#### 404 Page Handling

- `404.html` in repo root is served by GitHub Pages for all 404 errors
- Must be self-contained (inline styles or Structure A CSS)
- Keep `noindex` meta tag
- Link back to homepage
- Include search or sitemap link

#### Deployment Flow

1. Push to `main` branch
2. GitHub Actions triggers `deploy.yml`
3. Uploads repo root as Pages artifact
4. Deploys to `open-agent.agency`
5. CNAME file ensures custom domain

---

## PART D: COMPATIBILITY CHECK

### Assets to Preserve

| Asset | Location | Status |
|---|---|---|
| Favicons (7 files) | `assets/images/branding/favicons/` | KEEP — used by Structure A |
| OG images (3 files) | `assets/images/og/` | KEEP — used in meta tags |
| Founder photo | `assets/images/branding/abeer.png`, `assets/images/founder/abeer-founder.jpg` | KEEP |
| Portfolio images (9) | `assets/images/portfolio/` | KEEP — used by portfolio grid |
| Portfolio images (11) | `assets/images/portfolio-*.png` | KEEP — available for use |
| Portfolio SVGs (12) | `assets/images/portfolio-*.svg` | KEEP — case study illustrations |
| Hero background | `assets/images/hero-bg.jpg` | KEEP |
| Page hero images | `assets/images/about-hero.jpg`, `services-hero.jpg`, `contact-hero.jpg`, `portfolio-hero.jpg` | KEEP |
| Blog illustrations | `assets/images/blog-*.svg` | KEEP |
| Logo files | `assets/images/logo.svg`, `assets/images/logo-mark.svg` | KEEP |
| Brand logo PNG | `assets/images/branding/website logo.png` | KEEP |
| Abeer photo (blog) | `assets/images/abeer.jpg` | KEEP |
| Blog hero | `assets/images/blog-hero.jpg` | KEEP |

### Structure A Files to Replace (Rebuild)

| File | Action | Notes |
|---|---|---|
| `index.html` | REWRITE | New dark theme, new sections |
| `services.html` | REWRITE | Expanded services page |
| `pricing.html` | REWRITE | New pricing tiers |
| `about.html` | REWRITE | Founder story, team |
| `contact.html` | REWRITE | New contact layout |
| `blog.html` | REWRITE | Updated card grid |
| `privacy.html` | REWRITE | Updated policy |
| `terms.html` | REWRITE | Updated terms |
| `portfolio.html` | RENAME→`work.html` | Combined portfolio + case studies |
| `case-studies.html` | MERGE into `work.html` | Content absorbed |
| `refund.html` | MERGE into `terms.html` or KEEP | User decision needed |
| `slides.html` | DELETE | Unused internal file |
| `404.html` | REWRITE | New dark theme 404 |
| `assets/css/style.css` | REWRITE | Complete new CSS |
| `assets/js/main.js` | REWRITE | Clean vanilla JS |
| `sitemap.xml` | REWRITE | Updated URLs |

### Structure B Files — DO NOT TOUCH

| Path | Status |
|---|---|
| `about/index.html` | DO NOT MODIFY |
| `contact/index.html` | DO NOT MODIFY |
| `faq/index.html` | DO NOT MODIFY |
| `pricing/index.html` | DO NOT MODIFY |
| `privacy/index.html` | DO NOT MODIFY |
| `terms/index.html` | DO NOT MODIFY |
| `services/` (all subfolders) | DO NOT MODIFY |
| `blog/index.html` | DO NOT MODIFY |
| `blog-post.html` | DO NOT MODIFY |
| `blog-post/index.html` | DO NOT MODIFY |
| `css/style.css` | DO NOT MODIFY |
| `js/main.js` | DO NOT MODIFY |
| `js/posts.js` | DO NOT MODIFY |

### Broken References to Fix

1. **Blog posts** — Update any links from `portfolio.html` → `work.html` and `case-studies.html` → `work.html`
2. **Blog posts** — Ensure `../assets/css/style.css` and `../assets/js/main.js` paths still work (they will, files stay in same location)
3. **Footer links** — Update to match new page names (`work.html` instead of `portfolio.html`)
4. **Internal hash links** — Ensure `#services`, `#portfolio`, `#pricing`, `#faq`, `#contact` still resolve correctly on index.html

### Security Concerns

| Item | Status | Notes |
|---|---|---|
| API keys | ✅ None found | No exposed API keys in any file |
| GA4 ID | ✅ Safe | `G-MYQHFB4QNL` is a measurement ID, not a secret |
| WhatsApp number | ✅ Public | `+92 370 3159642` is intentionally public |
| Email | ✅ Public | `abeerinfo5566@gmail.com` is intentionally public |
| GitHub remote | ✅ HTTPS | Using HTTPS auth, no SSH keys exposed |
| `.gitignore` | ✅ Exists | Check that `.env` and node_modules are ignored |
| No secrets in repo | ✅ Clean | No `.env` files, no API keys, no tokens found |

### Updated AGENTS.md Sections

After the rebuild, `AGENTS.md` should be updated to reflect:
- New page list (add `industries.html`, `work.html`; remove `portfolio.html`, `case-studies.html`)
- New CSS tokens (dark theme, orange primary)
- New font (Inter instead of Playfair Display + Poppins)
- Updated design system section
- Updated "Known issue" section (remove stale blue rgba references — they'll be gone)

---

## IMPLEMENTATION ORDER

Recommended build sequence:

1. **CSS first** — Write `assets/css/style.css` with all tokens, resets, components
2. **JS second** — Write `assets/js/main.js` with all interactions
3. **index.html** — Homepage (most complex, most sections)
4. **services.html** — Services page
5. **industries.html** — Industries page (new)
6. **work.html** — Portfolio + case studies (replaces two old pages)
7. **pricing.html** — Pricing page
8. **about.html** — About page
9. **contact.html** — Contact page
10. **blog.html** — Blog listing (update links to new page names)
11. **privacy.html, terms.html** — Legal pages
12. **404.html** — Error page
13. **sitemap.xml** — Updated sitemap
14. **robots.txt** — Update to block Structure B
15. **Blog posts** — Update internal links (portfolio.html → work.html)
16. **AGENTS.md** — Update documentation
17. **QA pass** — Test all pages, links, accessibility, performance

---

## QA CHECKLIST (Post-Build)

### Visual Testing
- [ ] All pages render correctly on Chrome, Firefox, Safari, Edge
- [ ] Mobile layout works on iPhone SE, iPhone 14, Android viewport
- [ ] Tablet layout works at 768px and 1024px
- [ ] Dark theme renders correctly — no white flashes
- [ ] Orange (#FF6B00) is consistent across all pages
- [ ] Fonts load correctly (Inter, JetBrains Mono)
- [ ] All images display correctly
- [ ] Hover states work on desktop (cards, buttons, links)
- [ ] Mobile CTA bar shows on mobile, hidden on desktop

### Functional Testing
- [ ] Mobile menu opens/closes on tap
- [ ] All nav links work (no 404s)
- [ ] WhatsApp floating button opens WhatsApp
- [ ] Contact form validates and shows success message
- [ ] FAQ accordion opens/closes
- [ ] Portfolio lightbox opens/closes (if applicable)
- [ ] Testimonial slider scrolls (if applicable)
- [ ] Smooth scroll works for anchor links
- [ ] 404 page shows for invalid URLs

### SEO Testing
- [ ] All pages have unique `<title>` tags
- [ ] All pages have meta descriptions
- [ ] All pages have canonical URLs
- [ ] All pages have OG tags
- [ ] All pages have Twitter card tags
- [ ] sitemap.xml is valid and includes all pages
- [ ] robots.txt blocks Structure B pages
- [ ] JSON-LD structured data validates (use Google Rich Results Test)
- [ ] No duplicate content between Structure A and B

### Accessibility Testing
- [ ] Tab through entire page — logical order
- [ ] Skip-to-content link appears on first Tab press
- [ ] All images have alt text
- [ ] Color contrast meets WCAG AA (use axe DevTools)
- [ ] Screen reader test: VoiceOver on Mac or NVDA on Windows
- [ ] Focus indicators visible on all interactive elements
- [ ] Form labels properly associated with inputs
- [ ] `prefers-reduced-motion` disables animations

### Performance Testing
- [ ] Lighthouse Performance score > 90
- [ ] Lighthouse Accessibility score > 90
- [ ] Lighthouse SEO score > 90
- [ ] Total CSS+JS < 100KB (excluding images)
- [ ] No render-blocking resources
- [ ] Images have width/height attributes (no CLS)
- [ ] Font loading uses `font-display: swap`

### Deployment Testing
- [ ] Push to `main` triggers GitHub Actions
- [ ] Site deploys to `open-agent.agency`
- [ ] CNAME file is preserved
- [ ] All pages accessible on live site
- [ ] Structure B pages still work independently
- [ ] `google3cef563566032184.html` still accessible
- [ ] GA4 tracking fires on all pages

---

*End of engineering specification. No files were modified during the creation of this document.*
