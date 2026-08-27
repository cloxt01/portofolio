from PIL import Image, ImageDraw, ImageFont

BG = (14, 17, 22)
PANEL = (18, 22, 28)
GRID = (26, 32, 40)
GREEN = (34, 197, 94)
WHITE = (235, 238, 242)
GRAY = (140, 150, 162)
DIM = (95, 104, 116)

BOLD = "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf"
MONO = "/usr/share/fonts/truetype/liberation/LiberationMono-Regular.ttf"
MONO_BOLD = "/usr/share/fonts/truetype/liberation/LiberationMono-Bold.ttf"


def og_image():
    W, H = 1200, 630
    img = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(img)

    for x in range(0, W, 40):
        d.line([(x, 0), (x, H)], fill=GRID, width=1)
    for y in range(0, H, 40):
        d.line([(0, y), (W, y)], fill=GRID, width=1)

    d.rounded_rectangle([60, 70, W - 60, H - 70], radius=24, fill=PANEL, outline=(40, 48, 58), width=2)
    d.rounded_rectangle([60, 70, W - 60, 128], radius=24, fill=(24, 29, 36))
    d.rectangle([60, 104, W - 60, 128], fill=(24, 29, 36))
    for i, c in enumerate([(255, 95, 86), (255, 189, 46), (39, 201, 63)]):
        d.ellipse([92 + i * 34, 88, 114 + i * 34, 110], fill=c)
    d.text((W - 100, 99), "bash", font=ImageFont.truetype(MONO, 20), fill=DIM, anchor="rm")

    x = 110
    d.text((x, 175), "$ whoami", font=ImageFont.truetype(MONO, 26), fill=GREEN)
    d.text((x, 225), "Muhamad Ferdiansyah", font=ImageFont.truetype(BOLD, 68), fill=WHITE)
    d.text((x, 325), "Infrastructure Engineer", font=ImageFont.truetype(BOLD, 40), fill=GREEN)
    d.text((x, 385), "ISP Network Operations \u00b7 Linux \u00b7 Automation", font=ImageFont.truetype(MONO, 26), fill=GRAY)

    chips = ["MikroTik", "FreeRADIUS", "Proxmox VE", "Ansible", "Prometheus"]
    cf = ImageFont.truetype(MONO, 20)
    cx = x
    for chip in chips:
        w = d.textlength(chip, font=cf)
        d.rounded_rectangle([cx, 455, cx + w + 32, 495], radius=20, outline=(52, 62, 74), width=2)
        d.text((cx + 16, 466), chip, font=cf, fill=GRAY)
        cx += w + 48
    d.text((x, 520), "github.com/cloxt01", font=ImageFont.truetype(MONO_BOLD, 22), fill=DIM)

    img.save("/app/public/og_image.png")
    print("og_image.png generated")


def favicon_ico():
    S = 256
    img = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    d.rounded_rectangle([0, 0, S, S], radius=56, fill=BG)
    d.line([(64, 84), (118, 128), (64, 172)], fill=GREEN, width=22, joint="curve")
    d.ellipse([54, 74, 74, 94], fill=GREEN)
    d.ellipse([54, 162, 74, 182], fill=GREEN)
    d.ellipse([108, 118, 128, 138], fill=GREEN)
    d.rounded_rectangle([140, 156, 200, 176], radius=10, fill=WHITE)
    img.save("/app/public/favicon.ico", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
    print("favicon.ico generated")


if __name__ == "__main__":
    og_image()
    favicon_ico()
