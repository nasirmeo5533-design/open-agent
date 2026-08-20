# AGENTS.md

**OpenAgent** — B2B lead generation agency website for open-agent.agency.

## Architecture

- **Pure static HTML/CSS/JS** — no build step, no package.json, no framework
- Deployed to **GitHub Pages** via built-in "Deploy from a branch" (main → `/`)
- Remote: `https://github.com/nasirmeo5533-design/open-agent.git`
- Two coexisting site structures from a git merge — **do not delete Structure B**

## Commands

- No build, test, lint, or install step
- Local preview: `python -m http.server 8080` or any static server
- Deploy: push to `main` → GitHub Pages auto-deploys (no custom workflow)

## Design System

- **Theme:** Dark `#0A0A0A` with neon orange `#FF6B00` accent
- **Typography:** Poppins (headings 600-700), DM Sans (body 400-500), JetBrains Mono (labels)
- **Colors:** `--color-bg: #0A0A0A`, `--color-surface: #1A1A1A`, `--color-text: #FFFFFF`, `--color-text-secondary: #A0A0A0`, `--color-primary: #FF6B00`
- **Buttons:** Rounded `var(--r)` (12px), orange primary, ghost variant
- **Layout:** Full-width sections, boxed content via `.wrap` (max-width 1180px)
- **Responsive:** Mobile-first breakpoints at 560px, 768px, 900px

## File Structure (Structure A — active)

```
index.html          — Homepage (hero, trust, problem, services, industries, process, portfolio, why-us, pricing, FAQ, contact)
services.html       — 8 services detail page
industries.html     — 5 industry verticals
work.html           — Portfolio + case studies (JS grid + lightbox)
pricing.html        — 3 pricing tiers (Custom, not PKR)
about.html          — Founder story + expertise
contact.html        — Form with industry/budget dropdowns + WhatsApp
faq.html            — FAQ page with JSON-LD FAQPage schema
blog.html           — Blog listing (links to blog/*.html)
privacy.html        — Privacy policy
terms.html          — Terms of service
404.html            — Custom 404
assets/css/style.css — Complete CSS (~800 lines)
assets/js/main.js   — Vanilla JS (~200 lines): mobile menu, scroll reveal, stat counters, portfolio grid, lightbox, form handling
assets/images/      — All images (portfolio, industries, OG, favicons, founder)
blog/*.html         — 12 static blog posts
.nojekyll           — Prevents Jekyll processing on GitHub Pages
```

## HTML Conventions

Every Structure A page follows this pattern:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- charset, viewport, title, meta description, canonical -->
  <!-- og:*, twitter:* meta tags -->
  <!-- Google Fonts: Poppins, DM Sans, JetBrains Mono -->
  <!-- <link href="assets/css/style.css"> (root pages) or "../assets/css/style.css" (blog/) -->
  <!-- GA4 gtag.js async snippet -->
  <!-- <script type="application/ld+json"> Organization + page-specific schema -->
</head>
<body>
  <a class="skip-link" href="#main-content">Skip to content</a>
  <header class="topbar" role="banner"> ... nav ... </header>
  <main id="main-content" role="main"> ... sections ... </main>
  <footer class="footer" role="contentinfo"> ... </footer>
  <a class="fwa" href="https://wa.me/923703159642"> WhatsApp floating button </a>
  <div class="lightbox"> portfolio lightbox overlay </div>
  <script src="assets/js/main.js" defer></script>
</body>
</html>
```

- **Root pages** use relative paths: `assets/css/style.css`, `assets/js/main.js`
- **Blog posts** (`blog/`) use `../assets/css/style.css`, `../assets/js/main.js`
- **Accessibility:** skip-link, `role` attributes, `aria-label` on icon buttons, `aria-hidden="true"` on decorative SVGs, `loading="lazy"` + `width`/`height` on images
- **Schema:** Organization JSON-LD on every page; BreadcrumbList on inner pages; FAQPage on index + pricing

## SEO

- GA4: `G-MYQHFB4QNL`
- Canonical: `https://open-agent.agency/`
- JSON-LD: Organization (every page), BreadcrumbList (inner pages), FAQPage (index + pricing)
- sitemap.xml lists only Structure A URLs
- robots.txt blocks Structure B pages (avoids duplicate content)

## Key Configuration

- **WhatsApp:** `+92 370 3159642` (configurable in main.js `SITE.whatsapp`)
- **Email:** `abeerinfo5566@gmail.com`
- **Social:** X (@Abeergrowth), Facebook, Instagram, LinkedIn
- **Favicons:** `assets/images/branding/favicons/`
- **OG images:** `assets/images/og/`
- **Pricing:** "Custom" tiers — no PKR amounts shown on site

## Structure B (DO NOT TOUCH)

Folder-based pages (`about/`, `services/`, `pricing/`, `contact/`, `faq/`, `terms/`, `privacy/`, `blog/index.html`, `blog-post.html`, `blog-post/`) with separate CSS/JS (`css/style.css`, `js/main.js`, `js/posts.js`). Left untouched from the remote merge. Blocked via robots.txt.

## Don't Touch

- `google3cef563566032184.html` — Google site verification
- `versions/` — archived builds (gitignored)
- `CNAME` — custom domain config
- `.nojekyll` — required for GitHub Pages
- Structure B files and assets

## Target Audience

B2B project-based businesses:
1. Commercial Fit-Out & Design-Build
2. Healthcare / Clinic Fit-Out
3. Luxury Villa Interior / Design-Build
4. Hospitality Fit-Out
5. Commercial Landscaping

Markets: UAE, Saudi Arabia, Pakistan, USA, Canada

## Skills (`.opencode/skills/`)

- ~60 skills available (design, marketing, CRO, SEO, copywriting)
- `web-asset-generator` needs Python venv: `.opencode/skills/web-asset-generator/.venv/Scripts/python.exe`
- Set `$env:PYTHONIOENCODING='utf-8'` before running Python scripts on Windows
