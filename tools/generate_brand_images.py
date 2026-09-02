"""Regenerate OpenAgent brand images in the black/orange theme.

Creates:
  - OG/social images (1200x630, 1200x1200) in assets/images/og/
  - Favicon PNGs + ICO in assets/images/branding/favicons/ and repo root
"""
from PIL import Image, ImageChops, ImageDraw, ImageFont, ImageFilter
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FONTS = os.path.join(os.path.dirname(os.path.abspath(__file__)), "oagen-fonts")

INK = (10, 10, 10)        # #0A0A0A
INK_2 = (22, 22, 22)      # #161616 elevated surface
ORANGE = (255, 107, 0)    # #FF6B00
ORANGE_LIGHT = (255, 140, 26)  # #FF8C1A
WHITE = (248, 250, 252)   # #F8FAFC
MUTED = (148, 163, 184)   # slate-400

os.makedirs(FONTS, exist_ok=True)


def font(name, size):
    return ImageFont.truetype(os.path.join(FONTS, name), size)


def poppins(size, weight="Bold"):
    fname = f"Poppins-{weight}.ttf"
    path = os.path.join(FONTS, fname)
    if not os.path.exists(path):
        import urllib.request
        url = f"https://github.com/google/fonts/raw/main/ofl/poppins/{fname}"
        urllib.request.urlretrieve(url, path)
    return ImageFont.truetype(path, size)


def radial_glow(size, color, max_alpha=110):
    """Soft radial glow centered in a size x size square; alpha fades to 0 at edges."""
    grad = Image.radial_gradient("L").resize((size, size))
    alpha = grad.point(lambda p: max(0, int((255 - p) / 255 * max_alpha)))
    # symmetric edge-fade window so the square boundary is invisible
    lr = Image.linear_gradient("L")
    def sym(img):
        return ImageChops.darker(img, img.transpose(Image.FLIP_LEFT_RIGHT)).point(lambda p: min(255, p * 3))
    h_win = sym(lr).resize((size, 1)).resize((size, size))
    v_win = sym(lr).resize((1, size)).resize((size, size))
    window = ImageChops.multiply(h_win, v_win)
    alpha = ImageChops.multiply(alpha, window)
    overlay = Image.new("RGBA", (size, size), color + (0,))
    overlay.putalpha(alpha)
    return overlay.filter(ImageFilter.GaussianBlur(size // 16))


def base_canvas(w, h):
    img = Image.new("RGB", (w, h), INK)
    draw = ImageDraw.Draw(img)
    # subtle vertical tint from INK to INK_2
    for y in range(h):
        t = y / h
        c = tuple(int(INK[i] + (INK_2[i] - INK[i]) * t) for i in range(3))
        draw.line([(0, y), (w, y)], fill=c)
    return img.convert("RGBA")


def glow(img, cx, cy, radius, color, max_alpha):
    w, h = img.size
    g = radial_glow(radius * 2, color, max_alpha)
    img.alpha_composite(g, (int(cx - radius), int(cy - radius)))
    return img


def grid_lines(img, alpha=14, step=80):
    w, h = img.size
    overlay = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    d = ImageDraw.Draw(overlay)
    for x in range(0, w, step):
        d.line([(x, 0), (x, h)], fill=ORANGE + (alpha,), width=1)
    for y in range(0, h, step):
        d.line([(0, y), (w, y)], fill=ORANGE + (alpha,), width=1)
    img.alpha_composite(overlay)
    return img


def gradient_text(img, xy, text, fnt, c1, c2):
    """Draw text filled with a vertical gradient c1->c2."""
    mask = Image.new("L", img.size, 0)
    d = ImageDraw.Draw(mask)
    d.text(xy, text, font=fnt, fill=255)
    grad = Image.new("RGBA", img.size, (0, 0, 0, 0))
    gd = ImageDraw.Draw(grad)
    bbox = mask.getbbox()
    if not bbox:
        return
    y0, y1 = bbox[1], bbox[3]
    for y in range(y0, y1 + 1):
        t = (y - y0) / max(1, (y1 - y0))
        c = tuple(int(c1[i] + (c2[i] - c1[i]) * t) for i in range(3))
        gd.line([(bbox[0], y), (bbox[2], y)], fill=c + (255,))
    img.paste(grad, (0, 0), mask)


def accent_bar(img, x, y, w, h, c1, c2):
    bar = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    bd = ImageDraw.Draw(bar)
    for i in range(w):
        t = i / max(1, w - 1)
        c = tuple(int(c1[j] + (c2[j] - c1[j]) * t) for j in range(3))
        bd.line([(i, 0), (i, h)], fill=c + (255,))
    img.alpha_composite(bar, (x, y))


def rounded(img, radius):
    """Apply rounded corners with transparency."""
    mask = Image.new("L", img.size, 0)
    d = ImageDraw.Draw(mask)
    d.rounded_rectangle([0, 0, img.size[0] - 1, img.size[1] - 1], radius=radius, fill=255)
    out = Image.new("RGBA", img.size, (0, 0, 0, 0))
    out.paste(img, (0, 0), mask)
    return out


def fit_font(img, text, size, weight="SemiBold", max_width=None):
    """Shrink font size until text fits max_width (default: canvas minus 2 margins)."""
    d = ImageDraw.Draw(img)
    if max_width is None:
        max_width = img.size[0] - 2 * int(img.size[0] * 0.075)
    while size > 10:
        f = poppins(size, weight)
        bbox = d.textbbox((0, 0), text, font=f)
        if bbox[2] - bbox[0] <= max_width:
            return f
        size -= 2
    return poppins(size, weight)


# ---------------------------------------------------------------- OG images
def make_og(path, w, h, tagline, layout="wide"):
    img = base_canvas(w, h)
    glow(img, w * 0.82, h * 0.1, int(w * 0.45), ORANGE, 60)
    glow(img, w * 0.05, h * 0.95, int(w * 0.35), ORANGE_LIGHT, 40)
    img = grid_lines(img, alpha=12)

    d = ImageDraw.Draw(img)
    margin = int(w * 0.075)

    # top eyebrow
    eyebrow_f = poppins(int(h * 0.035), "SemiBold")
    d.text((margin, margin), "OPENAGENT  ·  DIGITAL STUDIO", font=eyebrow_f,
           fill=MUTED + (255,))

    # wordmark
    wm_f = poppins(int(h * 0.135), "Bold")
    gradient_text(img, (margin - int(w * 0.004), h * 0.30), "OpenAgent",
                  wm_f, ORANGE_LIGHT, ORANGE)

    # accent bar under wordmark
    bar_y = h * 0.50
    accent_bar(img, margin, int(bar_y), int(w * 0.14), max(6, int(h * 0.014)),
               ORANGE_LIGHT, ORANGE)

    # tagline (auto-fit to canvas width; supports \n line breaks)
    longest_line = max(tagline.split("\n"), key=len)
    tag_f = fit_font(img, longest_line, int(h * 0.062), "SemiBold")
    d.text((margin, bar_y + h * 0.055), tagline, font=tag_f,
           fill=WHITE + (255,), spacing=int(h * 0.03))

    n_lines = tagline.count("\n") + 1
    sub_text = "AI Agents · Automation · Development · Ads · SEO"
    sub_f = fit_font(img, sub_text, int(h * 0.035), "Regular")
    d.text((margin, bar_y + h * 0.055 + n_lines * h * 0.105),
           sub_text, font=sub_f, fill=MUTED + (255,))

    # bottom domain chip
    dom_f = poppins(int(h * 0.032), "SemiBold")
    dom = "open-agent.agency"
    db = d.textbbox((0, 0), dom, font=dom_f)
    dw, dh = db[2] - db[0], db[3] - db[1]
    pad = int(h * 0.028)
    chip_h = dh + pad * 2
    chip_y = h - margin - chip_h
    d.rounded_rectangle([margin, chip_y, margin + dw + pad * 2.4, chip_y + chip_h],
                        radius=chip_h // 2, fill=ORANGE + (255,))
    d.text((margin + int(pad * 1.2), chip_y + pad - db[1] - int(h * 0.004)), dom,
           font=dom_f, fill=(255, 255, 255, 255))

    img.convert("RGB").save(path, "PNG", optimize=True)
    print("wrote", path)


# ---------------------------------------------------------------- favicons
FAV_BG = (11, 27, 58)  # #0b1b3a legacy favicon navy square


def make_favicon(size, rounded_corners=True):
    s = size * 4  # supersample
    img = Image.new("RGBA", (s, s), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    d.rounded_rectangle([0, 0, s - 1, s - 1], radius=int(s * 0.25), fill=FAV_BG + (255,))
    d.rounded_rectangle([int(s * 0.03)] * 2 + [s - int(s * 0.03)] * 2,
                        radius=int(s * 0.22), outline=ORANGE + (110,), width=max(1, s // 42))
    fnt = ImageFont.truetype(os.path.join(FONTS, "Poppins-Bold.ttf"), int(s * 0.42))
    text = "OA"
    bbox = d.textbbox((0, 0), text, font=fnt)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    x = (s - tw) // 2 - bbox[0]
    y = (s - th) // 2 - bbox[1] - int(s * 0.01)
    gradient_text(img, (x, y), text, fnt, ORANGE_LIGHT, ORANGE)
    img = img.resize((size, size), Image.LANCZOS)
    if rounded_corners:
        img = rounded(img, int(size * 0.25))
    return img


FAV_DIR = os.path.join(ROOT, "assets", "images", "branding", "favicons")
OG_DIR = os.path.join(ROOT, "assets", "images", "og")
os.makedirs(FAV_DIR, exist_ok=True)
os.makedirs(OG_DIR, exist_ok=True)

for name, size, rr in [
    ("favicon-16x16.png", 16, True),
    ("favicon-32x32.png", 32, True),
    ("favicon-96x96.png", 96, True),
    ("apple-touch-icon.png", 180, True),
    ("android-chrome-192x192.png", 192, True),
    ("android-chrome-512x512.png", 512, True),
]:
    make_favicon(size, rr).save(os.path.join(FAV_DIR, name), "PNG", optimize=True)
    print("wrote", name)

# ICO packs (16+32+48)
ico_sizes = [(16, 16), (32, 32), (48, 48)]
imgs = [make_favicon(sz, False) for sz, _ in ico_sizes]
imgs[0].save(os.path.join(FAV_DIR, "favicon.ico"), format="ICO", sizes=ico_sizes)
imgs[0].save(os.path.join(ROOT, "favicon.ico"), format="ICO", sizes=ico_sizes)
make_favicon(96, True).save(os.path.join(ROOT, "favicon-96x96.png"), "PNG", optimize=True)
make_favicon(180, True).save(os.path.join(ROOT, "apple-touch-icon.png"), "PNG", optimize=True)
print("wrote ico + root icons")

make_og(os.path.join(OG_DIR, "og-image.png"), 1200, 630,
        "Practical AI & digital growth, run by one person who does the work.")
make_og(os.path.join(OG_DIR, "og-square.png"), 1200, 1200,
        "Practical AI & digital growth,\nrun by one person who does the work.")
make_og(os.path.join(OG_DIR, "twitter-image.png"), 1200, 628,
        "Practical AI & digital growth, run by one person who does the work.")
print("done")
