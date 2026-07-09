"""Generate Movior favicon assets from Movior logo-05 (English wordmark)."""
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
APP = ROOT / "app"

# Prefer logo-05 (English only); fall back to full bilingual logo
LOGO_CANDIDATES = [
    PUBLIC / "movior-logo-05.png",
    Path(r"C:\Users\jizar\Downloads\Movior\Movior\Movior logo-05.png"),
    PUBLIC / "movior-logo.png",
]

ORANGE = (226, 83, 31, 255)  # #e2531f


def load_logo() -> Image.Image:
    for path in LOGO_CANDIDATES:
        if path.exists():
            print(f"using logo: {path}")
            return Image.open(path).convert("RGBA")
    raise FileNotFoundError("No Movior logo found")


def white_on_transparent(crop: Image.Image) -> Image.Image:
    img = crop.convert("RGBA")
    new_data = []
    for r, g, b, a in img.getdata():
        if a > 200 and r > 180 and g > 180 and b > 180:
            new_data.append((255, 255, 255, 255))
        else:
            new_data.append((0, 0, 0, 0))
    img.putdata(new_data)
    return img


def extract_m_glyph(logo: Image.Image) -> Image.Image:
    """Crop the stylized wave-M from the Movior wordmark (logo-05 layout)."""
    # Measured on logo-05 (3409x1754): main wordmark band
    y0, y1 = 564, 1022
    x0 = 344
    word_w = 3064 - 344  # 2720

    # Full wave-M before it merges into the "o" (~39.2% of wordmark)
    m_w = int(word_w * 0.392)
    gy0 = y0 + int((y1 - y0) * 0.02)
    gy1 = y1 - int((y1 - y0) * 0.02)

    crop = logo.crop((x0, gy0, x0 + m_w, gy1))
    return white_on_transparent(crop)


def rounded_orange_icon(glyph: Image.Image, size: int, radius_ratio: float = 0.2) -> Image.Image:
    base = Image.new("RGBA", (size, size), ORANGE)
    pad = int(size * (0.14 if size <= 32 else 0.12))
    target = size - 2 * pad
    cw, ch = glyph.size
    scale = min(target / cw, target / ch)
    nw = max(1, int(cw * scale))
    nh = max(1, int(ch * scale))
    resized = glyph.resize((nw, nh), Image.Resampling.LANCZOS)
    ox = (size - nw) // 2
    oy = (size - nh) // 2
    base.paste(resized, (ox, oy), resized)

    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).rounded_rectangle(
        [0, 0, size - 1, size - 1],
        radius=max(2, int(size * radius_ratio)),
        fill=255,
    )
    out = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    out.paste(base, (0, 0))
    out.putalpha(mask)
    return out


def write_ico(images: list[Image.Image], path: Path) -> None:
    # Multi-size ICO — browsers prefer favicon.ico in tab
    largest = max(images, key=lambda i: i.size[0])
    largest.save(
        path,
        format="ICO",
        sizes=[(i.size[0], i.size[1]) for i in images],
    )


def main() -> None:
    logo = load_logo()
    print(f"logo size: {logo.size}")
    glyph = extract_m_glyph(logo)
    print(f"glyph size: {glyph.size}")

    sizes = {
        "icon-light-32x32.png": 32,
        "icon-dark-32x32.png": 32,
        "apple-icon.png": 180,
        "icon-192.png": 192,
        "favicon-48.png": 48,
        "favicon-32.png": 32,
        "favicon-16.png": 16,
        "icon-512.png": 512,
    }

    generated: dict[str, Image.Image] = {}
    for name, size in sizes.items():
        img = rounded_orange_icon(glyph, size)
        path = PUBLIC / name
        img.save(path, optimize=True)
        generated[name] = img
        print(f"wrote public/{name}")

    ico_images = [
        generated["favicon-16.png"],
        generated["favicon-32.png"],
        generated["favicon-48.png"],
    ]
    write_ico(ico_images, PUBLIC / "favicon.ico")
    print("wrote public/favicon.ico")

    # Next.js App Router file-based metadata (highest priority in browsers)
    APP.mkdir(exist_ok=True)
    write_ico(ico_images, APP / "favicon.ico")
    generated["apple-icon.png"].save(APP / "apple-icon.png", optimize=True)
    generated["icon-192.png"].save(APP / "icon.png", optimize=True)
    print("wrote app/favicon.ico, app/icon.png, app/apple-icon.png")


if __name__ == "__main__":
    main()
