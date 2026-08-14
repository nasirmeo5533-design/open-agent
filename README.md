# Open Agent — AI & Digital Marketing for Small Businesses

Official website for **Open Agent**, founded by **Abeer Nasir** (Generative AI Specialist, AI Agent Developer, and Digital Marketing Specialist) based in Karachi, Pakistan. Serving small businesses in Pakistan and the US with Meta & Google Ads, social media management, AI agents, AI websites, and more — in plain English, with prices from PKR 15,000.

> Live at [open-agent.agency](https://open-agent.agency) — hosted on **GitHub Pages** (deployed via GitHub Actions on push to `main`).

## Tech Stack

- **HTML5 / CSS3 / JavaScript** — vanilla, no frameworks, no build step
- **GitHub Pages** — static deployment via GitHub Actions (`CNAME` = open-agent.agency)
- **SVG** — hand-crafted icons and blog image fallbacks

## Two coexisting site structures

The repo is a merge of two unrelated histories and carries **two parallel, fully-working site versions**, both live on GitHub Pages.

**Structure A — flat pages (primary / actively edited):**
- Root `*.html`: `index.html`, `about.html`, `services.html`, `pricing.html`, `portfolio.html`, `case-studies.html`, `faq.html`, `blog.html`, `contact.html`, `privacy.html`, `terms.html`, `refund.html`, `slides.html`
- Static blog posts in `blog/*.html` (linked from `blog.html`)
- Assets: `assets/css/style.css`, `assets/js/main.js`, `assets/images/...`
- `sitemap.xml` lists these flat URLs

**Structure B — folder pages (remote import, left untouched):**
- `about/`, `services/` (7 sub-pages), `pricing/`, `contact/`, `faq/`, `terms/`, `privacy/`, `blog/index.html`, `blog-post.html`, `blog-post/`
- Root `css/style.css`, `js/main.js`, `js/posts.js` (a different style system)
- `404.html`, `llms.txt`, `llms-full.txt`, `site.webmanifest`, root favicons, `assets/logo.png`, `assets/images/abeer.jpg`, `assets/images/portfolio-N.png`, `assets/images/blog-*.svg`

The two structures are independent and do not link to each other. New work goes into Structure A.

## Blog

- **Flat blog (extend this one)**: `blog.html` → static cards → `blog/*.html` posts
- **Dynamic blog**: `blog/index.html` + `blog-post.html` render content from `js/posts.js` (~11 posts not present as flat files)

## Getting Started

1. Clone the repo:
   ```bash
   git clone git@github.com:nasirmeo5533-design/open-agent.git
   cd open-agent
   ```
2. No build step needed — just open `index.html` in a browser, or serve it:
   ```bash
   python -m http.server 8000
   # or: npx serve .
   ```

## Deployment

The site deploys automatically to GitHub Pages via `.github/workflows/deploy.yml` on every push to `main`. The `CNAME` file points the deployment to `open-agent.agency`. (`vercel.json` redirects are inert on GitHub Pages — kept for reference.)

## License

All content and code in this repository are the property of Open Agent. All rights reserved.
