"""Build blog/<slug>.html pages from tools/articles/<slug>.md.

Each .md file has a front-matter block (title, meta_title, description, keyword,
service, category, image_alt) and a Markdown body. The section starting with
"## Frequently asked questions" becomes the visible FAQ and the FAQPage JSON-LD.

The page shell (head assets, header, footer) is taken from TEMPLATE so it stays in
step with the rest of the site. Run: python tools/build_articles.py
"""
import glob
import html
import json
import os
import re
import sys
from urllib.parse import quote

from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = "https://open-agent.agency"
TEMPLATE = "blog/social-media-posting-frequency.html"
PUBLISHED = "2026-11-28"
PUBLISHED_TEXT = "November 28, 2026"
WA = "923703159642"

sys.path.insert(0, os.path.join(ROOT, "tools"))
from services_data import SERVICES  # noqa: E402

SVC = {s["slug"]: s for s in SERVICES}


def rd(p):
    raw = open(os.path.join(ROOT, p), encoding="utf-8", newline="").read()
    return raw.replace("\r\n", "\n")


def wr(p, s):
    full = os.path.join(ROOT, p)
    nl = "\n"
    if os.path.exists(full) and "\r\n" in open(full, encoding="utf-8", newline="").read():
        nl = "\r\n"
    open(full, "w", encoding="utf-8", newline="").write(s.replace("\n", nl))


def inline(t):
    t = html.escape(t, quote=False)
    t = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", t)

    def link(m):
        label, url = m.group(1), m.group(2)
        if url.startswith("http"):
            return f'<a href="{url}" target="_blank" rel="noopener">{label}</a>'
        return f'<a href="{url}">{label}</a>'

    return re.sub(r"\[([^\]]+)\]\(([^)\s]+)\)", link, t)


def md_blocks(md):
    """Return a list of (kind, payload) blocks."""
    out = []
    for block in re.split(r"\n\s*\n", md.strip()):
        lines = block.strip("\n").split("\n")
        first = lines[0]
        if first.startswith("### "):
            out.append(("h3", first[4:].strip()))
            rest = "\n".join(lines[1:]).strip()
            if rest:
                out.extend(md_blocks(rest))
        elif first.startswith("## "):
            out.append(("h2", first[3:].strip()))
            rest = "\n".join(lines[1:]).strip()
            if rest:
                out.extend(md_blocks(rest))
        elif first.startswith("|"):
            rows = [[c.strip() for c in ln.strip().strip("|").split("|")] for ln in lines if ln.strip()]
            rows = [r for r in rows if not all(re.fullmatch(r":?-{2,}:?", c) for c in r)]
            out.append(("table", rows))
        elif re.match(r"^- ", first):
            out.append(("ul", [ln[2:].strip() for ln in lines]))
        elif re.match(r"^\d+\. ", first):
            out.append(("ol", [re.sub(r"^\d+\.\s+", "", ln).strip() for ln in lines]))
        else:
            out.append(("p", " ".join(ln.strip() for ln in lines)))
    return out


def render(blocks, ind="    "):
    h = []
    for kind, val in blocks:
        if kind in ("h2", "h3"):
            h.append(f"{ind}<{kind}>{inline(val)}</{kind}>")
        elif kind == "p":
            h.append(f"{ind}<p>{inline(val)}</p>")
        elif kind in ("ul", "ol"):
            items = "".join(f"<li>{inline(i)}</li>" for i in val)
            h.append(f"{ind}<{kind}>{items}</{kind}>")
        elif kind == "table":
            head = "".join(f"<th>{inline(c)}</th>" for c in val[0])
            body = "".join("<tr>" + "".join(f"<td>{inline(c)}</td>" for c in r) + "</tr>" for r in val[1:])
            h.append(f'{ind}<div class="table-wrap"><table><thead><tr>{head}</tr></thead><tbody>{body}</tbody></table></div>')
    return "\n".join(h)


def plain(t):
    t = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", t)
    return t.replace("**", "")


def parse(path):
    raw = open(path, encoding="utf-8").read().replace("\r\n", "\n")
    m = re.match(r"---\n(.*?)\n---\n(.*)", raw, re.S)
    meta = dict(line.split(": ", 1) for line in m.group(1).split("\n") if line.strip())
    body = m.group(2)
    main_md, faq_md = body.split("## Frequently asked questions", 1)
    faqs = []
    for chunk in re.split(r"\n### ", "\n" + faq_md.strip())[1:]:
        q, a = chunk.split("\n", 1)
        faqs.append((q.strip(), " ".join(a.strip().split())))
    meta["slug"] = os.path.splitext(os.path.basename(path))[0]
    meta["blocks"] = md_blocks(main_md)
    meta["faqs"] = faqs
    meta["words"] = len(re.findall(r"\b\w[\w'.-]*\b", plain(body)))
    return meta


def og_image(src, dest):
    im = Image.open(os.path.join(ROOT, src)).convert("RGB")
    w, h = im.size
    tw, th = 1200, 630
    scale = max(tw / w, th / h)
    im = im.resize((round(w * scale), round(h * scale)), Image.LANCZOS)
    w, h = im.size
    left, top = (w - tw) // 2, (h - th) // 2
    im.crop((left, top, left + tw, top + th)).save(os.path.join(ROOT, dest), "JPEG", quality=82, optimize=True)


def shell_parts():
    t = rd(TEMPLATE)
    assets = t[t.index('<link rel="preconnect"'):t.index('<script type="application/ld+json">')]
    icons = t[t.index('<link rel="icon"'):t.index('<script type="application/ld+json">{"@context":"https://schema.org","@type":"BreadcrumbList"')]
    theme = re.search(r'<link rel="stylesheet" href="\.\./assets/css/theme\.css\?v=[^"]+">', t).group(0)
    header = t[t.index('<body class="blogs">'):t.index('<main id="main-content" role="main">')]
    footer = t[t.index("</main>") + len("</main>"):]
    return assets, icons, theme, header, footer


def page(a, shell):
    assets, icons, theme, header, footer = shell
    slug, title = a["slug"], a["title"]
    svc = SVC[a["service"]]
    url = f"{SITE}/blog/{slug}.html"
    hero = f"assets/images/services/{a['service']}-hero.webp"
    with Image.open(os.path.join(ROOT, hero)) as im:
        hw, hh = im.size
    og = f"assets/images/og/blog/{slug}.jpg"
    og_image(hero, og)
    e = lambda s: html.escape(s, quote=True)  # noqa: E731

    graph = {"@context": "https://schema.org", "@graph": [
        {"@type": "Organization", "@id": f"{SITE}/#organization", "name": "OpenAgent", "url": f"{SITE}/",
         "logo": f"{SITE}/assets/images/branding/favicons/android-chrome-192x192.png"},
        {"@type": "Article", "@id": f"{url}#article", "headline": title, "description": a["description"],
         "image": [f"{SITE}/{og}"], "author": {"@id": f"{SITE}/#organization"},
         "publisher": {"@id": f"{SITE}/#organization"}, "mainEntityOfPage": url,
         "keywords": a["keyword"], "about": svc["name"],
         "datePublished": PUBLISHED, "dateModified": PUBLISHED},
        {"@type": "FAQPage", "@id": f"{url}#faq", "mainEntity": [
            {"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": plain(ans)}}
            for q, ans in a["faqs"]]},
        {"@type": "BreadcrumbList", "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": f"{SITE}/"},
            {"@type": "ListItem", "position": 2, "name": "Insights", "item": f"{SITE}/blogs.html"},
            {"@type": "ListItem", "position": 3, "name": title}]},
    ]}
    ld = json.dumps(graph, ensure_ascii=False).replace("</", "<\\/")

    faq_html = "\n".join(
        f'      <div class="post-faq-item"><h3>{inline(q)}</h3><p>{inline(ans)}</p></div>' for q, ans in a["faqs"])
    share_t = quote(title)
    svc_url = f"../services/{a['service']}.html"

    return f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{e(a["meta_title"])}</title>
<meta name="description" content="{e(a["description"])}">
<link rel="canonical" href="{url}">
<meta property="og:type" content="article">
<meta property="og:url" content="{url}">
<meta property="og:title" content="{e(title)}">
<meta property="og:description" content="{e(a["description"])}">
<meta property="og:image" content="{SITE}/{og}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:site_name" content="OpenAgent">
<meta property="article:published_time" content="{PUBLISHED}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{e(title)}">
<meta name="twitter:description" content="{e(a["description"])}">
<meta name="twitter:image" content="{SITE}/{og}">
{assets}<script type="application/ld+json">{ld}</script>
{icons}{theme}
</head>
{header}<main id="main-content" role="main">
<article class="post">
  <div class="wrap post-inner">
    <a class="post-back" href="../blogs.html"><i class="fa-solid fa-arrow-left"></i> Back to Blog</a>
    <div class="post-meta"><span><i class="fa-solid fa-calendar" aria-hidden="true"></i> <time datetime="{PUBLISHED}">{PUBLISHED_TEXT}</time></span><span class="cat-tag">{e(a["category"])}</span></div>
    <h1>{inline(title)}</h1>
    <p class="post-byline">By the OpenAgent team</p>

    <figure class="post-hero"><img src="../{hero}" alt="{e(a["image_alt"])}" loading="eager" width="{hw}" height="{hh}"></figure>

{render(a["blocks"])}

    <section class="post-faq" id="faq">
      <h2>Frequently asked questions</h2>
{faq_html}
    </section>

    <div class="post-note">
      <p>Want help with this? Our {e(svc["name"])} service starts with a written scope, so you know what is included before any work begins. Talk to us on WhatsApp or by email.</p>
      <p><a href="{svc_url}">See the {e(svc["name"])} service</a> or <a href="../contact.html">send us your project details</a>.</p>
    </div>
  </div>

  <div class="wrap post-inner">
    <div style="border-top:1px solid #ece8e2;margin-top:44px;padding-top:26px;">
      <p class="share-label">Share this article:</p>
      <div class="share-row">
        <a class="share-link" href="https://twitter.com/intent/tweet?url={url}&text={share_t}" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-x-twitter"></i> X</a>
        <a class="share-link" href="https://www.facebook.com/sharer/sharer.php?u={url}" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook-f"></i> Facebook</a>
        <a class="share-link" href="https://www.linkedin.com/sharing/share-offsite/?url={url}" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin-in"></i> LinkedIn</a>
        <a class="share-link" href="https://wa.me/{WA}?text={share_t}%20{url}" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-whatsapp"></i> WhatsApp</a>
      </div>
    </div>
    <div class="post-foot">
      <a href="{svc_url}" class="btn btn-ghost-dark">Explore {e(svc["name"])}</a>
      <a href="../contact.html" class="btn btn-primary"><i class="fa-solid fa-paper-plane"></i> Start A Conversation</a>
    </div>
  </div>
</article>
</main>
{footer}'''


def main():
    shell = shell_parts()
    arts = [parse(p) for p in sorted(glob.glob(os.path.join(ROOT, "tools", "articles", "*.md")))]
    problems = []
    for a in arts:
        if len(a["meta_title"]) > 60:
            problems.append(f"{a['slug']}: meta title {len(a['meta_title'])} chars")
        if len(a["description"]) > 160:
            problems.append(f"{a['slug']}: description {len(a['description'])} chars")
        if a["service"] not in SVC:
            problems.append(f"{a['slug']}: unknown service {a['service']}")
        if "—" in open(os.path.join(ROOT, "tools", "articles", a["slug"] + ".md"), encoding="utf-8").read():
            problems.append(f"{a['slug']}: contains an em dash")
    if problems:
        sys.exit("\n".join(problems))
    for a in arts:
        wr(f"blog/{a['slug']}.html", page(a, shell))
        print(f"{a['slug']}: {a['words']} words, {len(a['faqs'])} FAQs, title {len(a['meta_title'])}, desc {len(a['description'])}")
    json.dump([{k: a[k] for k in ("slug", "title", "description", "service", "category", "image_alt")} for a in arts],
              open(os.path.join(ROOT, "tools", "articles", "index.json"), "w", encoding="utf-8"), indent=1)


if __name__ == "__main__":
    main()
