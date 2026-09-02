# AGENTS.md

**OpenAgent** — digital marketing agency website for open-agent.agency.

## Commands

- **No build, test, lint, or install step.** Pure static HTML/CSS/JS.
- Local preview: `python -m http.server 8080` (repo root), then `http://localhost:8080`
- Deploy: push to `main` → GitHub Pages auto-deploys (`CNAME` = open-agent.agency, `.nojekyll`). `.github/workflows` is intentionally empty.
- Verification is manual: start a local server and check pages return 200; grep/`Test-Path` every internal href to catch broken links; validate JSON-LD blocks parse (`ConvertFrom-Json`). No automated suite exists.

## Three generations of files coexist — know which one you're editing

1. **Active design — five themes, know which one you're editing** (all use `assets/js/main.js`):
   - **Homepage (`index.html`)** — black/white/orange design system in `assets/css/home.css`, scoped under `<body class="home">`. Load order `style.css` THEN `home.css`. See "Homepage design system" below.
   - **About page (`about.html`)** — its OWN black/white/orange design system in `assets/css/about.css`, scoped under `<body class="about">`. Matches the homepage identity (same palette/Poppins/buttons/footer) but is a **separate** file — do homepage changes in `home.css` and About changes in `about.css`. See "About page design system" below.
   - **Services page (`services.html`)** — its OWN black/white/orange design system in `assets/css/services.css`, scoped under `<body class="services">`, same palette/Poppins/buttons/footer as the homepage/About. **No stock photos — typography + icons only.** See "Services page design system" below.
   - **Contact page (`contact.html`)** — its OWN black/white/orange design system in `assets/css/contact.css`, scoped under `<body class="contact">`, same palette/Poppins/buttons/footer as the others. **No images; the project-inquiry form is a real WhatsApp-handoff, not a fake submit.** See "Contact page design system" below.
   - **Blog / Insights (`blogs.html` listing + the 12 articles under `blog/`)** — its OWN black/white/orange design system in `assets/css/blogs.css`, scoped under `<body class="blogs">`. The listing is `blogs.html` (root); the articles live under `blog/` and use the `../` path convention like `services/` pages. See "Blog page design system" below.
   - **Homepage toolkit** — a "Tools I Work With" logo section (added later, in `index.html` + `home.css`) using 15 logo `.webp` files at the repo **root** (e.g. `chatgpt.webp`, `n8n.webp`, `gemini.webp`; renamed 2026-09 from spaced/typo names like `gemini logo.webp`, `searc console.webp`, `higgfeild logo.webp`). Don't move them; root pages reference them relative.
   - **Active service detail pages under `services/` (six, in nav + sitemap)** — `ai-agent-development.html`, `ai-automation.html`, `full-stack-development.html`, `meta-google-ads.html`, `video-editing.html`, `search-engine-optimization.html`. Now black/white/orange too, under `<body class="services">` loading `../assets/css/services.css` — see the Services page design system below.
   - **v2 Indigo pages (shared `assets/css/style.css`, indigo/pink light theme):**
     - Light v2 pages (footer + WhatsApp float, **no** offcanvas menu): `404.html`, `privacy.html`, `terms.html`
2. **Legacy Structure A (old dark `#0A0A0A`/orange `#FF6B00` theme)** — still live and in sitemap but superseded: `industries.html` + `industries/*.html`, `blog.html` + `blog/*.html` (12 posts), `faq.html`. Do not delete or restyle without asking. Aside from the About founder photo, these are the only pages using the local photos under `assets/images/`.
3. **Structure B (DO NOT TOUCH)** — folder-based duplicates from a git-history merge, blocked via robots.txt: `about/`, `pricing/`, `contact/`, `faq/`, `terms/`, `privacy/`, `blog-post/`, `blog/index.html`, `services/index.html`, `services/<topic>/` folders, plus separate `css/style.css` and `js/main.js`.

Never touch: `google3cef563566032184.html`, `CNAME`, `.nojekyll`, `versions/`.
Not real / orphaned (leftover, NOT linked in nav or sitemap — do not "fix" them):
- Root `pricing.html` and `portfolio.html` are legacy non-v2 files (no `style.css`, no offcanvas); dropped in commit "drop pricing/portfolio pages". They only self-reference in their own nav.
- `services/graphic-designing.html`, `services/performance-marketing.html`, `services/social-media-management.html`, `services/website-development.html` are pre-v2 service files, not the active six.
- Root `blog-post.html` is a noindex meta-refresh stub into Structure B; `snippet-*.html` are standalone copy-paste sections in the OLD orange theme (reference material only).

## Docs that lag behind reality — don't trust them for new work

- `docs/design-system.md` documents the LEGACY dark/orange palette, not the v2 system.
- `README.md` describes an older B2B lead-gen positioning and references `work.html`, which doesn't exist.
- `llms.txt` / `llms-full.txt` carry older positioning/pricing ("AI automation… PKR 15,000"). (`site.webmanifest` was updated 2026-09: current positioning description; `theme_color` back to the orange `#ff6a00`.)

## Path conventions (break silently if wrong)

- Root pages: `assets/css/style.css`, `assets/js/main.js`, plain links (`about.html`)
- Pages under `services/`: **every** asset/link prefixed `../` (`../assets/css/style.css`, `../index.html`); only intra-folder service links are bare slugs
- Canonicals stay absolute (`https://open-agent.agency/services/<slug>.html`)
- New top-level subfolders risk colliding with robots.txt Disallow rules that exist to block Structure B duplicates — check robots.txt before adding any folder

## Shared markup is copy-pasted, not included

There are no includes/templating. Header/topbar, offcanvas mobile menu, footer, WhatsApp float anchor, and the `<button id="toTop" class="to-top">` back-to-top control (sits directly before the `main.js` script tag) are duplicated verbatim on every page that has them. Any nav/footer-level change must be replicated across all that markup is duplicated on — and you must decide whether legacy Structure A pages get it too (`main.js` no-ops safely when `#toTop` is absent).

- The homepage, About, Services, Contact AND Blog page header/footer/offcanvas are restyled for their black/orange themes — same structure/classes, different colors (see the theme sections below). The homepage, About, Services, Contact and Blog footers share the labels "About", "Services", "Insights", "Contact", "Run by Abeer Nasir" — don't blindly copy that footer text to v2 pages, which use different labels.
- Exactly **one** `<div class="overlay" id="overlay">` per offcanvas page — a second copy breaks the mobile-menu backdrop (`404/privacy/terms.html` have no offcanvas at all)
- GA4 ID `G-MYQHFB4QNL` snippet is hardcoded in each page's `<head>`

## Homepage design system (`assets/css/home.css`, scoped under `body.home`)

- Deliberate minimum design: black `#000`, white, off-white `#f7f7f5` tints, and a restrained accent orange `#FF6B00` (CTAs, hovers, small accents — never dominant). Headings are **Poppins** (the shared `--ff-heading` Playfair is overridden here). No stock photos, no counters, no dashboards.
- Every rule is prefixed `body.home` and this file is loaded **after** `style.css` on `index.html` only, so the shared stylesheet is safe to reuse on all other pages. Do not move homepage styling into `style.css`.
- Business-voice contract: the site is run by ONE individual (Abeer Nasir) and copy deliberately avoids team/we wording, fake stats, testimonials, and guaranteed-results claims. When editing homepage copy, keep this honest, singular-voice tone.
- The "Tools I Work With" section (`section.tools` + `.tools-grid` in `index.html`/`home.css`) shows real tool logos you use — frame it honestly as tools used in projects, NOT as a client list or "trusted by" social proof (that would violate the honesty contract). Logos live at the repo root and render grayscale→color on hover (`.tool img`).

## About page design system (`assets/css/about.css`, scoped under `body.about`)

- The About page (`about.html`) matches the homepage visual identity — black `#000`/white/off-white `#f7f7f5`/orange `#FF6B00`, Poppins headings (Playfair overridden), minimal premium layout. **It is a separate stylesheet, not `home.css`**; only `about.html` loads it (`style.css` THEN `about.css`). Never move About styling into `style.css` or share it with the homepage.
- Same honesty rules as the homepage apply: singular-voice, independent operator (Abeer works alone) — no team/we language ("team", "specialists", "developers", "departments", "staff"), no fake stats, testimonials, portfolio, credentials, or guarantees.
- **Real founder photo**: the only genuine personal image lives at `assets/images/founder/abeer-founder.jpg` (1254×1254 square, used in the About intro portrait). Other `abeer`-named files (`assets/images/abeer.jpg`, `assets/images/branding/abeer.png`) are only referenced by Structure B / legacy files — don't rely on them for active pages. Replace/pick a portrait by editing the `<img src>` in `about.html` Section 1.
- The homepage hero uses geometric SVGs, but the About intro uses the founder photo in a `portrait` panel with an overlay name card — don't remove or stub it with a stock/AI image.
- Load-order and scoping rules mirror the homepage: every rule prefixed `body.about`, loaded after the shared `style.css`, so `style.css` stays reusable on v2 pages.

## Services page design system (`assets/css/services.css`, scoped under `body.services`)

- The Services page (`services.html`) AND the six active service detail pages under `services/` (ai-agent-development, ai-automation, full-stack-development, meta-google-ads, video-editing, search-engine-optimization) match the homepage/About visual identity — black `#000`/white/off-white `#f7f7f5`/orange `#FF6B00`, Poppins headings (Playfair overridden), minimal premium layout. **It is a separate stylesheet, not `home.css`/`about.css`**; only `services.html` and the six detail pages load it (`style.css` THEN `services.css`). Never move Services styling into `style.css` or the other scoped sheets.
- **One scoped sheet styles both**: `services.css` carries the overview page (`.service-card`, `.card-link`) AND the detail-page layout (`.page-hero`, `.split`, `.detail-visual`, `.check-list`, `.feat-grid`/`.feat-card`, `.proc-grid`, `.faq-wrap`, `.more-grid`/`.more-card`, `.final-cta`). All six detail pages use the same shell and classes.
- Same honesty rules as the homepage/About: singular-voice, independent operator (Abeer works alone), direct client contact — no team/we wording, no fake stats, results, testimonials, portfolio, credentials, or guarantees. Advertising and SEO detail pages carry explicit no-guarantee transparency notes (e.g. SEO FAQ "Do you guarantee page one rankings?" is honestly answered "No").
- **No stock photos at all** — the Services pages must stay typography + icon led (no `<img>` tags in `services.html` or the six detail pages). Use numbered service cards, "Good for" lists, borders and orange accents instead.
- Path conventions: `services.html` links to detail pages as bare slugs (`ai-automation.html`); detail pages use `../` for everything pointing at root and intra-folder service links as bare slugs.
- Load-order/scoping rules mirror the homepage/About: every rule prefixed `body.services`, loaded after `style.css`.

## Contact page design system (`assets/css/contact.css`, scoped under `body.contact`)

- The Contact page (`contact.html`) matches the homepage/About/Services visual identity — black `#000`/white/off-white `#f7f7f5`/orange `#FF6B00`, Poppins headings (Playfair overridden), minimal premium layout. **It is a separate stylesheet, not `home.css`/`about.css`/`services.css`**; only `contact.html` loads it (`style.css` THEN `contact.css`). Never move Contact styling into `style.css` or the other scoped sheets.
- Same honesty rules as the homepage/About/Services: singular-voice, independent operator (Abeer works alone), direct client contact — no team/we wording, no fake stats, testimonials, portfolio, credentials, or guarantees. No fake urgency ("Book now", "limited spots").
- **No stock photos at all** — the Contact page stays typography + icon led (no `<img>` tags). It also has **no FAQ section** (FAQ was dropped in the redesign) and no counters.
- **Form is a real WhatsApp-handoff, not a fake submit**: the `form[data-lead-form]` keeps the existing `main.js` handler (line ~221) which opens WhatsApp pre-filled with all fields to the real number, then shows `.form-status`. Don't ever replace it with a fake "message sent" that hits no backend — the site is static GitHub Pages. The WhatsApp contact-option button (option 01) carries the spec's suggested pre-filled message, which contains `[service]` as a literal placeholder — that's intentional handoff copy.
- Load-order/scoping rules mirror the others: every rule prefixed `body.contact`, loaded after `style.css`.

## Blog page design system (`assets/css/blogs.css`, scoped under `body.blogs`)

- The Blog/Insights page (`blogs.html`) and its 12 articles under `blog/` are black/white/orange matching the homepage/About/Services/Contact identity. **It is a separate stylesheet, not `home.css`/`about.css`/`services.css`/`contact.css`**; both `blogs.html` and every `blog/*.html` article load `style.css` THEN `blogs.css`. Never move Blog styling into `style.css` or the other scoped sheets.
- `blogs.css` also styles long-form article pages under `body.blogs .post` (h1/h2/h3, tables, blockquotes, `.post-note`, `.share-row`, `.post-foot`) — the listing and the articles share one scoped sheet.
- Same honesty rules as the other pages: singular-voice, independent operator — no team/we wording, no fake client results, campaign stats, ROAS/lead numbers, case studies, or testimonials. Articles must be educational unless genuinely based on a documented client campaign. `blogs.html` has no `<img>` tags — typography + category labels + dates only. Keep the category filter's classes (`[data-filter-group]`, `[data-filter]`, cards `[data-cat]`) and the CTA copy (`Read Article`, `Start A Conversation`, `Chat on WhatsApp`).
- Path conventions: section links on `blogs.html` are root-style (`blog/*.html`, plain links); links *inside* `blog/*.html` articles are `../`-prefixed (`../assets/css/blogs.css`, `../index.html`). Preserve existing article URLs — don't re-slug them (sitemap.xml lists all 12).
- Load-order/scoping rules mirror the others: every rule prefixed `body.blogs`, loaded after `style.css`.

## v2 design system (`assets/css/style.css`) + behavior in `main.js`

- Palette: indigo `#4E2FDA` (+hover `#3A1FC0`), pink `#FB3189`, ink `#16123A`, tint `--indigo-soft`; font Poppins (Google Fonts); icons via Font Awesome 6.5.2 CDN; headings use Playfair Display (v2 only — not the homepage, About, Services or Contact)
- **v2 page visuals are icon + photo classes, never local files.** Photos are lazy-loaded Unsplash `<img>`s with explicit `width`/`height`, wired through these CSS hooks: hero background = add `hero-photo` class to `.hero`; service-card photos = `<img class="card-media">` as first child of `.service-card`; photos inside a split's `.media-panel` get `class="photo"` (absolutely positioned, covers panel). Only og:image meta tags point at local `assets/images/og/`
- JS-driven behaviors auto-init by class/attribute — reuse these instead of writing new JS:
  - Reveal on scroll: `.rv` + optional `data-delay="1..3"`
  - Counters: `<span data-count="120" data-suffix="+">0</span>` — optional `data-prefix`/`data-suffix`, ~2s ease-out once visible. **Do NOT add counters to the homepage, About, Services, Contact or Blog** — their honest-design contract forbids fake stat numbers.
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
- Favicons: `assets/images/branding/favicons/`; OG images: `assets/images/og/` — both regenerated 2026-09 in the black/orange theme by `tools/generate_brand_images.py` (uses Poppins in `tools/oagen-fonts/`); root-level `favicon.ico/svg`, `apple-touch-icon.png`, `favicon-96x96.png` registered via `site.webmanifest`
