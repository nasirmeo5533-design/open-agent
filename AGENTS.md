# AGENTS.md

**OpenAgent** — digital marketing agency website for open-agent.agency.

## Commands

- **No build, test, lint, or install step.** Pure static HTML/CSS/JS.
- Local preview: `python -m http.server 8080` (repo root), then `http://localhost:8080`
- Deploy: push to `main` → GitHub Pages auto-deploys (`CNAME` = open-agent.agency, `.nojekyll`). `.github/workflows` is intentionally empty.
- Verification is manual: start a local server and check pages return 200; grep/`Test-Path` every internal href to catch broken links; validate JSON-LD blocks parse (`ConvertFrom-Json`). No automated suite exists.

## Three generations of files coexist — know which one you're editing

1. **Active design (v2 Indigo)** — the only set to edit for new work:
   - Full-nav pages: `index.html`, `about.html`, `contact.html`, `services.html`, `pricing.html`, `portfolio.html`, `blogs.html`
   - Light v2 pages (footer + WhatsApp float, **no** offcanvas menu): `404.html`, `privacy.html`, `terms.html`
   - Services subfolder: `search-engine-optimization.html`, `social-media-management.html`, `performance-marketing.html`, `website-development.html`, `graphic-designing.html` under `services/`
   - Shared assets: `assets/css/style.css` (v2 design system, indigo/pink light theme), `assets/js/main.js`
2. **Legacy Structure A (old dark `#0A0A0A`/orange `#FF6B00` theme)** — still live and in sitemap but superseded: `industries.html` + `industries/*.html`, `blog.html` + `blog/*.html` (12 posts), `faq.html`. Do not delete or restyle without asking. These are the only pages using the local photos under `assets/images/`.
3. **Structure B (DO NOT TOUCH)** — folder-based duplicates from a git-history merge, blocked via robots.txt: `about/`, `pricing/`, `contact/`, `faq/`, `terms/`, `privacy/`, `blog-post/`, `blog/index.html`, `services/index.html`, `services/<topic>/` folders, plus separate `css/style.css` and `js/main.js`.

Never touch: `google3cef563566032184.html`, `CNAME`, `.nojekyll`, `versions/`.
Not real pages: root `blog-post.html` is a noindex meta-refresh stub into Structure B; `snippet-*.html` are standalone copy-paste sections in the OLD orange theme (reference material only).

## Docs that lag behind reality — don't trust them for new work

- `docs/design-system.md` documents the LEGACY dark/orange palette, not the v2 system.
- `README.md` describes an older B2B lead-gen positioning and references `work.html`, which doesn't exist.
- `llms.txt` / `llms-full.txt` carry older positioning/pricing ("AI automation… PKR 15,000"); `site.webmanifest` still has the legacy orange `theme_color`.

## Path conventions (break silently if wrong)

- Root pages: `assets/css/style.css`, `assets/js/main.js`, plain links (`about.html`)
- Pages under `services/`: **every** asset/link prefixed `../` (`../assets/css/style.css`, `../index.html`); only intra-folder service links are bare slugs
- Canonicals stay absolute (`https://open-agent.agency/services/<slug>.html`)
- New top-level subfolders risk colliding with robots.txt Disallow rules that exist to block Structure B duplicates — check robots.txt before adding any folder

## Shared markup is copy-pasted, not included

There are no includes/templating. Header/topbar, offcanvas mobile menu, footer, WhatsApp float anchor, and the `<button id="toTop" class="to-top">` back-to-top control (sits directly before the `main.js` script tag) are duplicated verbatim on every v2 page. Any nav/footer-level change must be replicated across all 15 v2 pages — and you must decide whether legacy Structure A pages get it too (`main.js` no-ops safely when `#toTop` is absent).

- Exactly **one** `<div class="overlay" id="overlay">` per offcanvas page — a second copy breaks the mobile-menu backdrop (`404/privacy/terms.html` have no offcanvas at all)
- GA4 ID `G-MYQHFB4QNL` snippet is hardcoded in each page's `<head>`

## v2 design system (`assets/css/style.css`) + behavior in `main.js`

- Palette: indigo `#4E2FDA` (+hover `#3A1FC0`), pink `#FB3189`, ink `#16123A`, tint `--indigo-soft`; font Poppins (Google Fonts); icons via Font Awesome 6.5.2 CDN
- **v2 page visuals are icon + photo classes, never local files.** Photos are lazy-loaded Unsplash `<img>`s with explicit `width`/`height`, wired through these CSS hooks: hero background = add `hero-photo` class to `.hero`; service-card photos = `<img class="card-media">` as first child of `.service-card`; photos inside a split's `.media-panel` get `class="photo"` (absolutely positioned, covers panel); contact page uses `.contact-visual`. Only og:image meta tags point at local `assets/images/og/`
- JS-driven behaviors auto-init by class/attribute — reuse these instead of writing new JS:
  - Reveal on scroll: `.rv` + optional `data-delay="1..3"`
  - Counters: `<span data-count="120" data-suffix="+">0</span>` — optional `data-prefix`/`data-suffix`, ~2s ease-out once visible
  - Tabs: container `[data-tabs]`, buttons `[data-tab=key]`, panels `.plan-panel[data-panel=key]`
  - Filters: bar `[data-filter-group]`, buttons `[data-filter]`, cards `[data-cat="a b"]`
  - Testimonial slider: `.tslider` with `.tslide`s, `.t-dots`, `.t-prev`, `.t-next` — defined in `main.js` but **currently unused by any page**
  - FAQ accordion: `.faq-wrap > .faq-item > .faq-q + .faq-a`
  - Lead forms: `form[data-lead-form]` → opens WhatsApp pre-filled with fields; needs a sibling `.form-status`

## SEO

- Every active page already has unique title/description, absolute canonical, OG/Twitter tags, and exactly one `<h1>` — keep it that way
- Inner pages add BreadcrumbList JSON-LD; service pages add Service schema; FAQ sections must have matching FAQPage JSON-LD (questions must equal on-page text)
- Add every new crawlable page to `sitemap.xml` (it also lists legacy Structure A URLs — leave those entries alone)
- robots.txt intentionally disallows Structure B duplicate paths while allowing active pages — keep that separation when editing

## Brand constants

- Contact: WhatsApp `+92 370 3159642` (`wa.me/923703159642`), email `hello@open-agent.agency`. Both live in `main.js` `SITE` config AND hardcoded float/footer anchors on nearly every page — change both places together. The old gmail (`abeerinfo5566@gmail.com`) still appears in Structure B files only — one more reason never to copy markup out of them
- Socials: X @Abeergrowth, Facebook profile id 61572143246804, IG @growthbot_02, LinkedIn abeer-nasir
- Favicons: `assets/images/branding/favicons/`; OG images: `assets/images/og/`; root-level `favicon.ico/svg`, `apple-touch-icon.png`, `favicon-96x96.png` registered via `site.webmanifest`
