# AGENTS.md

**OpenAgent** — digital marketing agency website for open-agent.agency.

## Commands

- **No build, test, lint, or install step.** Pure static HTML/CSS/JS.
- Local preview: `python -m http.server 8080` (repo root), then `http://localhost:8080`
- Deploy: push to `main` → GitHub Pages auto-deploys (`CNAME` = open-agent.agency)
- Verification is manual: start local server + check pages return 200; grep/`Test-Path` every internal href to catch broken links; validate JSON-LD blocks parse (`ConvertFrom-Json`). No automated suite exists.

## Three generations of files coexist — know which one you're editing

1. **Active design (v2 Indigo)** — the only set to edit for new work:
   - Root: `index.html`, `about.html`, `contact.html`, `services.html`, `pricing.html`, `portfolio.html`, `blogs.html`
   - Subfolder: `services/search-engine-optimization.html`, `services/social-media-management.html`, `services/performance-marketing.html`, `services/website-development.html`, `services/graphic-designing.html`
   - Shared assets: `assets/css/style.css` (v2 design system, indigo/pink light theme), `assets/js/main.js`
2. **Legacy Structure A (old dark `#0A0A0A`/orange `#FF6B00` theme)** — still live and in sitemap but superseded: `industries.html` + `industries/*.html`, `blog.html` + `blog/*.html` (12 posts), `faq.html`. Do not delete or restyle without asking.
3. **Structure B (DO NOT TOUCH)** — folder-based duplicates from a git-history merge: `about/`, `pricing/`, `contact/`, `faq/`, `terms/`, `privacy/`, `blog-post/`, `blog/index.html`, `services/index.html`, `services/<topic>/` folders, plus separate `css/style.css` and `js/main.js`. Blocked via robots.txt.

Never touch: `google3cef563566032184.html`, `CNAME`, `.nojekyll`, `versions/`.

## Path conventions (breaks silently if wrong)

- Root pages: `assets/css/style.css`, `assets/js/main.js`, plain links (`about.html`)
- Pages under `services/`: **every** asset/link prefixed `../` (`../assets/css/style.css`, `../index.html`); only intra-folder service links are bare slugs
- Canonicals stay absolute (`https://open-agent.agency/services/<slug>.html`)
- New top-level subfolders risk colliding with robots.txt Disallow rules that exist to block Structure B duplicates — check before adding

## Shared markup is copy-pasted, not included

There are no includes/templating. Header/topbar, offcanvas mobile menu, footer, WhatsApp float anchor are duplicated verbatim on every page. Any nav/footer change must be replicated across all 12 active pages (and decided whether legacy pages get it too).

- Exactly **one** `<div class="overlay" id="overlay">` per page — a second copy breaks the mobile-menu backdrop
- GA4 ID `G-MYQHFB4QNL` snippet is hardcoded in each page's `<head>`

## v2 design system (`assets/css/style.css`) + behavior in `main.js`

- Palette: indigo `#4E2FDA` (+hover `#3A1FC0`), pink `#FB3189`, ink `#16123A`, tint `--indigo-soft`; font Poppins; icons via Font Awesome 6.5.2 CDN
- **No external images anywhere.** Visuals = Font Awesome icons + gradient utility classes (`.bt-g1..g6`, `.wt-g1..g6`, `.media-panel`, `.avatar` initials). Keep it that way unless adding real assets deliberately
- JS-driven behaviors auto-init by class/attribute — reuse these instead of writing new JS:
  - Reveal on scroll: `.rv` + optional `data-delay="1..3"`
  - Counters: `<span data-count="350">0</span>` (IntersectionObserver)
  - Tabs: container `[data-tabs]`, buttons `[data-tab=key]`, panels `.plan-panel[data-panel=key]`
  - Filters: bar `[data-filter-group]`, buttons `[data-filter]`, cards `[data-cat="a b"]`
  - Testimonial slider: `.tslider` with `.tslide`s, `.t-dots`, `.t-prev`, `.t-next`
  - FAQ accordion: `.faq-wrap > .faq-item > .faq-q + .faq-a`
  - Lead forms: `form[data-lead-form]` → opens WhatsApp pre-filled with fields; needs a sibling `.form-status`
- WhatsApp number / email live in `main.js` `SITE` config AND hardcoded in float/footer anchors on every page — change both

## SEO

- Every page: unique title/description, canonical, og tags, Organization JSON-LD; inner pages add BreadcrumbList; service pages add Service schema; FAQ sections must have matching FAQPage JSON-LD (questions must equal on-page text)
- Add every new crawlable page to `sitemap.xml`
- robots.txt intentionally disallows Structure B duplicate paths while allowing active pages — keep that separation when editing

## Brand constants

- Contact: WhatsApp `+92 370 3159642` (`wa.me/923703159642`), email `abeerinfo5566@gmail.com`
- Socials: X @Abeergrowth, Facebook profile id 61572143246804, IG @growthbot_02, LinkedIn abeer-nasir
- Favicons: `assets/images/branding/favicons/`; OG images: `assets/images/og/`
