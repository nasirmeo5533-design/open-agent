# CLAUDE.md

Guidance for AI coding assistants working on this repo. Note: this file is committed and
therefore publicly served at open-agent.agency/CLAUDE.md, so keep it free of anything private.

## Project

Static website for OpenAgent (open-agent.agency): digital marketing services for U.S. businesses,
run by one person, Abeer Nasir. Plain HTML/CSS/vanilla JS on GitHub Pages. No framework, no build
step for the site, no tests.

## Commands

- Preview: `python -m http.server 8080`, then open http://localhost:8080
- Regenerate service pages: `python tools/build_services.py` (copy lives in `tools/services_data.py`)
- Deploy: push to `main` (GitHub Pages). `.github/workflows` is not used.

## Rules

- Always `git pull` before starting. The live site is whatever is on `main`.
- Never touch `CNAME`, `.nojekyll` or `google3cef563566032184.html` (Search Console verification).
- Everything in the repo is public. Don't commit backups, drafts, screenshots or secrets.
- Keep the 7 redirect stubs in `services/` (`ai-agent-development`, `ai-automation`,
  `ai-content-images-videos`, `full-stack-development`, `meta-google-ads`, `performance-marketing`,
  `social-media-management`). They keep old indexed URLs working.
- Don't hand-edit generated `services/<slug>.html`; change `tools/services_data.py` and rebuild.

## Styling

- `assets/css/theme.css` is loaded last on every page and defines the design system:
  purple `#2E0061` / `#370073`, yellow `#F3C90D` primary buttons with black text,
  grey `#E3E3E3` secondary buttons, 12px radius, Poppins.
- Its selectors start with `:root:root body` so they win over the older layers
  (`style.css`, `monochrome.css`, page CSS) without fighting specificity case by case.
- Page CSS map is in README.md. Homepage uses `tokens.css` + `base.css` + `home.css`;
  other pages use `style.css` + `monochrome.css` + their page CSS.
- After changing CSS or `main.js`, bump the `?v=` query on every page that loads it, and
  `CSS_VER` in `tools/build_services.py` for `theme.css`.

## Shared markup

There are no includes. Header, mobile menu, footer and WhatsApp float are copied into every
page. The services lists inside them are rewritten by `tools/build_services.py`; anything
else in the header/footer must be changed on every page by hand.

## Paths

- Root pages link plainly (`about.html`, `assets/...`).
- Pages in `services/` and `blog/` prefix root links with `../`.
- Canonicals and JSON-LD URLs are absolute `https://open-agent.agency/...`.

## Content and SEO

- One person runs the business: write in first person singular ("I"), no "we/team".
- No invented stats, testimonials, client logos or guaranteed results.
- Every page has a unique title and description, one `<h1>`, a canonical, OG/Twitter tags.
  Service pages carry Service + FAQPage + BreadcrumbList JSON-LD; FAQ schema must match
  the visible FAQ.
- `sitemap.xml` lists only live pages; `llms.txt` lists services and main pages.
- Copy from other websites must not be pasted in; write original text.

## Checks before pushing

1. Every internal `href`/`src` resolves to a file.
2. Every JSON-LD block parses.
3. Pages render at 1280px and 375px with no horizontal scroll.
