# OpenAgent — open-agent.agency

Official website for OpenAgent, a focused social media and paid-growth studio serving U.S. clients, run by Abeer Nasir.

## What is inside

- Static HTML, CSS and vanilla JavaScript
- GitHub Pages deployment from `main`
- No build step or package installation required
- Services: Social Media Management, Social Media Marketing, Digital Marketing, Meta Ads and Google Ads
- Portfolio work and approved portfolio assets are preserved
- One paid-growth insight is retained under `blog/meta-vs-google-ads.html`; it is not linked from the main site navigation

## Local preview

```bash
python -m http.server 8080
```

Open `http://localhost:8080`.

## Structure

| Page | Stylesheet |
|---|---|
| `index.html` | `assets/css/home.css` |
| `about.html` | `assets/css/about.css` |
| `services.html` and five detail pages in `services/` | `assets/css/services.css` |
| `portfolio.html` | `assets/css/portfolio.css` |
| `contact.html` | `assets/css/contact.css` |
| `blogs.html` and the retained paid-growth article | `assets/css/blogs.css` |
| `404.html`, `privacy.html`, `terms.html` | `assets/css/style.css` |

All active pages share `assets/css/style.css` and `assets/js/main.js`. Pages under `services/` and `blog/` use `../` for root-relative paths.

## Contact

- WhatsApp: [+92 370 3159642](https://wa.me/923703159642)
- Email: [abeerinfo5566@gmail.com](mailto:abeerinfo5566@gmail.com)

## Deployment

Push to `main` for GitHub Pages deployment. `CNAME` points to `open-agent.agency`; `.nojekyll` is required.
