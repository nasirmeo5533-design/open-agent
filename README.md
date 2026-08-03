# Open Agent — AI & Digital Marketing for Small Businesses

Official website for **Open Agent**, founded by **Abeer Nasir** (Generative AI Specialist, AI Agent Developer, and Digital Marketing Specialist) based in Karachi, Pakistan. Serving small businesses in Pakistan and the US with Meta & Google Ads, social media management, AI agents, AI websites, and more — in plain English, with prices from PKR 15,000.

> Live at [open-agent.agency](https://open-agent.agency)

## Tech Stack

- **HTML5** — semantic, accessible markup
- **CSS3** — vanilla CSS with design tokens (CSS variables), no frameworks
- **JavaScript** — vanilla JS for interactions, pricing calculator, and blog rendering
- **GitHub Pages** — static deployment via GitHub Actions
- **SVG** — hand-crafted icons and blog image fallbacks

## Pages

| Page | Purpose |
|------|---------|
| `index.html` | Homepage — hero, services, pricing calculator, how it works, about, FAQ, blog preview, contact |
| `blog.html` | Blog listing — all posts rendered from `js/posts.js`, with category filters |
| `blog-post.html` | Blog post template — content injected dynamically from `?post=` param |
| `contact.html` | Contact page — WhatsApp-based form (no backend needed) |
| `404.html` | Custom 404 page for moved or legacy URLs |

## Homepage Sections

- Hero with typewriter effect and floating trust badges
- Services — 7 services explained in plain English
- Pricing calculator — tap services, total updates live, send plan via WhatsApp
- How It Works — 3 steps
- About Me — Abeer Nasir
- FAQ — 8 common questions
- Blog preview
- Contact form (WhatsApp submission) + footer CTA

## SEO

- `robots.txt` and `sitemap.xml` (12 URLs) for search engines
- Per-page canonical, geo tags (Karachi), Open Graph, and Twitter cards
- JSON-LD structured data: `ProfessionalService`, `Blog`, and dynamic `BlogPosting`
- Google Analytics 4 (gtag.js) on every page

## File Structure

```
├── index.html          # Homepage
├── blog.html           # Blog listing
├── blog-post.html      # Blog post template
├── contact.html        # Contact page
├── 404.html            # Custom 404
├── robots.txt          # Crawler rules + sitemap ref
├── sitemap.xml         # XML sitemap
├── css/
│   └── style.css       # Global styles (design tokens, all sections)
├── js/
│   ├── main.js         # Interactions, pricing calculator, contact form, blog filters
│   └── posts.js        # Blog post data (9 posts)
├── assets/
│   ├── favicon.svg
│   └── images/         # Blog image fallbacks
├── CNAME               # Custom domain (open-agent.agency)
└── .github/
    └── workflows/
        └── deploy.yml  # Auto-deploy to GitHub Pages on push to main
```

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

The site deploys automatically to GitHub Pages via `.github/workflows/deploy.yml` on every push to `main`. The `CNAME` file points the deployment to `open-agent.agency`.

## Contributing

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

All content and code in this repository are the property of Open Agent. All rights reserved.
