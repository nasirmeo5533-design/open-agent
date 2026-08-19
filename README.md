# Open Agent — AI-Powered Lead Generation for B2B

Official website for **OpenAgent**, founded by **Abeer Nasir** — a B2B lead generation agency serving project-based businesses (fit-out, healthcare, luxury interiors, hospitality, landscaping) across UAE, Saudi Arabia, Pakistan, USA, and Canada.

> Live at [open-agent.agency](https://open-agent.agency) — hosted on **GitHub Pages** (auto-deploys on push to `main`).

## Tech Stack

- **HTML5 / CSS3 / JavaScript** — vanilla, no frameworks, no build step
- **GitHub Pages** — static deployment from `main` branch (`CNAME` = open-agent.agency)
- **SVG** — inline icons throughout

## Two coexisting site structures

The repo is a merge of two unrelated histories and carries **two parallel site versions**.

**Structure A — flat pages (primary / actively edited):**
- Root `*.html`: `index.html`, `about.html`, `services.html`, `pricing.html`, `industries.html`, `work.html`, `blog.html`, `contact.html`, `privacy.html`, `terms.html`, `404.html`
- Static blog posts in `blog/*.html` (linked from `blog.html`)
- Assets: `assets/css/style.css`, `assets/js/main.js`, `assets/images/...`
- `sitemap.xml` lists these flat URLs

**Structure B — folder pages (remote import, left untouched):**
- `about/`, `services/`, `pricing/`, `contact/`, `faq/`, `terms/`, `privacy/`, `blog/index.html`, `blog-post.html`, `blog-post/`
- Root `css/style.css`, `js/main.js`, `js/posts.js` (a different style system)
- Blocked via `robots.txt` to avoid duplicate content

## Getting Started

```bash
git clone https://github.com/nasirmeo5533-design/open-agent.git
cd open-agent
python -m http.server 8080
```

No build step needed — just serve the static files.

## Deployment

Push to `main` → GitHub Pages auto-deploys (built-in "Deploy from a branch", no custom workflow). The `CNAME` file points to `open-agent.agency`. The `.nojekyll` file prevents Jekyll processing.

## License

All content and code in this repository are the property of Open Agent. All rights reserved.
