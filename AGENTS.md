# AGENTS.md

**OpenAgent** — digital marketing agency website for open-agent.agency.

## Commands

- **No build, test, lint, or install step.** Pure static HTML/CSS/JS.
- Local preview: `python -m http.server 8080` (repo root), then `http://localhost:8080`
- Deploy: push to `main` → GitHub Pages auto-deploys (`CNAME` = open-agent.agency, `.nojekyll`). `.github/workflows` is intentionally empty.
- Verification is manual: start a local server and check pages return 200; grep/`Test-Path` every internal href to catch broken links; validate JSON-LD blocks parse (`ConvertFrom-Json`). No automated suite exists.

## Three generations of files coexist — know which one you're editing

1. **Active design — two themes, know which one you're editing** (all use `assets/js/main.js`):
   - **Homepage (`index.html`) is its own black/white/orange design system** — load order `assets/css/style.css` THEN `assets/css/home.css`, everything scoped under `<body class="home">`. Headings are Poppins (NOT Playfair). No stock photos; icons + geometric SVGs only. Do homepage changes in `home.css`, never in `style.css` (shared).
   - **v2 Indigo pages (shared `assets/css/style.css`, indigo/pink light theme):**
     - Full-nav pages (offcanvas + hamburger): `about.html`, `services.html`, `blogs.html`, `contact.html`
     - Light v2 pages (footer + WhatsApp float, **no** offcanvas menu): `404.html`, `privacy.html`, `terms.html`
     - Active service pages under `services/`, the only six, in nav + sitemap: `ai-agent-development.html`, `ai-automation.html`, `full-stack-development.html`, `meta-google-ads.html`, `video-editing.html`, `search-engine-optimization.html`
2. **Legacy Structure A (old dark `#0A0A0A`/orange `#FF6B00` theme)** — still live and in sitemap but superseded: `industries.html` + `industries/*.html`, `blog.html` + `blog/*.html` (12 posts), `faq.html`. Do not delete or restyle without asking. These are the only pages using the local photos under `assets/images/`.
3. **Structure B (DO NOT TOUCH)** — folder-based duplicates from a git-history merge, blocked via robots.txt: `about/`, `pricing/`, `contact/`, `faq/`, `terms/`, `privacy/`, `blog-post/`, `blog/index.html`, `services/index.html`, `services/<topic>/` folders, plus separate `css/style.css` and `js/main.js`.

Never touch: `google3cef563566032184.html`, `CNAME`, `.nojekyll`, `versions/`.
Not real / orphaned (leftover, NOT linked in nav or sitemap — do not "fix" them):
- Root `pricing.html` and `portfolio.html` are legacy non-v2 files (no `style.css`, no offcanvas); dropped in commit "drop pricing/portfolio pages". They only self-reference in their own nav.
- `services/graphic-designing.html`, `services/performance-marketing.html`, `services/social-media-management.html`, `services/website-development.html` are pre-v2 service files, not the active six.
- Root `blog-post.html` is a noindex meta-refresh stub into Structure B; `snippet-*.html` are standalone copy-paste sections in the OLD orange theme (reference material only).

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

There are no includes/templating. Header/topbar, offcanvas mobile menu, footer, WhatsApp float anchor, and the `<button id="toTop" class="to-top">` back-to-top control (sits directly before the `main.js` script tag) are duplicated verbatim on every page that has them. Any nav/footer-level change must be replicated across all that markup is duplicated on — and you must decide whether legacy Structure A pages get it too (`main.js` no-ops safely when `#toTop` is absent).

- The homepage's header/footer/offcanvas are restyled for its black/orange theme — same structure/classes, different colors (see the homepage section below). The homepage footer diverges slightly (nav list labels "About", "Services", "Insights", "Contact") — don't blindly copy its footer text to other pages.
- Exactly **one** `<div class="overlay" id="overlay">` per offcanvas page — a second copy breaks the mobile-menu backdrop (`404/privacy/terms.html` have no offcanvas at all)
- GA4 ID `G-MYQHFB4QNL` snippet is hardcoded in each page's `<head>`

## Homepage design system (`assets/css/home.css`, scoped under `body.home`)

- Deliberate minimum design: black `#000`, white, off-white `#f7f7f5` tints, and a restrained accent orange `#FF6B00` (CTAs, hovers, small accents — never dominant). Headings are **Poppins** (the shared `--ff-heading` Playfair is overridden here). No stock photos, no counters, no dashboards.
- Every rule is prefixed `body.home` and this file is loaded **after** `style.css` on `index.html` only, so the shared stylesheet is safe to reuse on all other pages. Do not move homepage styling into `style.css`.
- Business-voice contract: the site is run by ONE individual (Abeer Nasir) and copy deliberately avoids team/we wording, fake stats, testimonials, and guaranteed-results claims. When editing homepage copy, keep this honest, singular-voice tone.

## v2 design system (`assets/css/style.css`) + behavior in `main.js`

- Palette: indigo `#4E2FDA` (+hover `#3A1FC0`), pink `#FB3189`, ink `#16123A`, tint `--indigo-soft`; font Poppins (Google Fonts); icons via Font Awesome 6.5.2 CDN; headings use Playfair Display (v2 only — not the homepage)
- **v2 page visuals are icon + photo classes, never local files.** Photos are lazy-loaded Unsplash `<img>`s with explicit `width`/`height`, wired through these CSS hooks: hero background = add `hero-photo` class to `.hero`; service-card photos = `<img class="card-media">` as first child of `.service-card`; photos inside a split's `.media-panel` get `class="photo"` (absolutely positioned, covers panel); contact page uses `.contact-visual`. Only og:image meta tags point at local `assets/images/og/`
- JS-driven behaviors auto-init by class/attribute — reuse these instead of writing new JS:
  - Reveal on scroll: `.rv` + optional `data-delay="1..3"`
  - Counters: `<span data-count="120" data-suffix="+">0</span>` — optional `data-prefix`/`data-suffix`, ~2s ease-out once visible. **Do NOT add counters to the homepage** — its honest-design contract forbids fake stat numbers.
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
