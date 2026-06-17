#!/usr/bin/env python
# Composite a 1200x630 OG card: Magnific base photo + olive scrim + SCM lockup + headline.
import sys, urllib.request
from PIL import Image, ImageDraw, ImageFont, ImageFilter

url, headline_top, headline_bot, sub, out = sys.argv[1:6]
W, H = 1200, 630
OLIVE = (45, 45, 28)
CREAM = (245, 241, 232)
LIME = (199, 212, 63)

# Fonts (fall back gracefully)
def font(paths, size):
    for p in paths:
        try:
            return ImageFont.truetype(p, size)
        except Exception:
            continue
    return ImageFont.load_default()

SERIF = ["C:/Windows/Fonts/georgia.ttf", "C:/Windows/Fonts/times.ttf", "C:/Windows/Fonts/arialbd.ttf"]
SERIFB = ["C:/Windows/Fonts/georgiab.ttf", "C:/Windows/Fonts/timesbd.ttf", "C:/Windows/Fonts/arialbd.ttf"]
SANS = ["C:/Windows/Fonts/arial.ttf"]
SANSB = ["C:/Windows/Fonts/arialbd.ttf"]
f_head = font(SERIFB, 82)
f_sub = font(SANSB, 30)
f_dom = font(SANSB, 26)

# Base photo, cover-crop to 1200x630
if url.startswith("http"):
    tmp = out + ".src.jpg"
    urllib.request.urlretrieve(url, tmp)
    img = Image.open(tmp).convert("RGB")
else:
    img = Image.open(url).convert("RGB")
sc = max(W / img.width, H / img.height)
img = img.resize((int(img.width * sc), int(img.height * sc)), Image.LANCZOS)
x = (img.width - W) // 2
y = (img.height - H) // 2
img = img.crop((x, y, x + W, y + H))

# Olive scrim: opaque-ish on left, fading right; plus bottom vignette
scrim = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sd = ImageDraw.Draw(scrim)
for px in range(W):
    a = int(238 * max(0, 1 - px / (W * 0.62)))           # left to right fade
    sd.line([(px, 0), (px, H)], fill=(OLIVE[0], OLIVE[1], OLIVE[2], a))
for py in range(H):
    a = int(150 * max(0, (py - H * 0.45) / (H * 0.55)))   # bottom darken
    sd.line([(0, py), (W, py)], fill=(20, 20, 14, a))
img = Image.alpha_composite(img.convert("RGBA"), scrim)
d = ImageDraw.Draw(img)

PAD = 72
# Logo lockup (light variant) top-left
try:
    logo = Image.open("public/assets/logo-lockup-light.png").convert("RGBA")
    lw = 320
    logo = logo.resize((lw, int(logo.height * lw / logo.width)), Image.LANCZOS)
    img.paste(logo, (PAD, 56), logo)
except Exception as e:
    print("logo skip:", e)

# Headline
ty = 210
d.text((PAD, ty), headline_top, font=f_head, fill=CREAM)
d.text((PAD, ty + 92), headline_bot, font=f_head, fill=CREAM)

# Lime rule + subline
ry = ty + 200
d.rectangle([PAD, ry, PAD + 64, ry + 6], fill=LIME)
d.text((PAD, ry + 22), sub, font=f_sub, fill=LIME)

# Domain bottom-left
d.text((PAD, H - 64), "securitycompanyinmelbourne.com", font=f_dom, fill=CREAM)

img.convert("RGB").save(out, "JPEG", quality=88)
print("saved", out)
