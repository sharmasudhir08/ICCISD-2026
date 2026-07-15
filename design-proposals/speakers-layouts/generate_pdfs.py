from __future__ import annotations

from html import escape
from pathlib import Path

from PIL import Image
from pypdf import PdfReader, PdfWriter
from reportlab.lib.colors import Color, HexColor
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A3, landscape
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph


ROOT = Path(__file__).resolve().parents[2]
OUTPUT_DIR = ROOT / "output" / "pdf"
TEMP_DIR = ROOT / "tmp" / "pdfs" / "speaker-layouts"
ASSET_DIR = TEMP_DIR / "assets"
PORTRAIT_DIR = ROOT / "public" / "images" / "keynote-speakers" / "portrait-uniform"

PAGE_SIZE = landscape(A3)
PAGE_W, PAGE_H = PAGE_SIZE

INK = HexColor("#071820")
TEAL = HexColor("#0A7784")
TEAL_LIGHT = HexColor("#DCE9E8")
TEAL_MID = HexColor("#BDD3D0")
RED = HexColor("#D34A44")
RED_LIGHT = HexColor("#F1DEDA")
PAPER = HexColor("#F3F6F5")
WHITE = HexColor("#FFFFFF")
SLATE = HexColor("#5E6B72")
LINE = HexColor("#CDD6D5")
COOL = HexColor("#E7EAEE")


SPEAKERS = [
    {
        "order": "01",
        "name": "Shri Ashok Gupta",
        "role": "Chief Guest",
        "designation": "Director, STPI & CEO, STPI Apiary",
        "affiliation": "Gurugram, Haryana",
        "short": "STPI & STPI Apiary",
        "image": "ashok-gupta.png",
    },
    {
        "order": "02",
        "name": "Prof. (Dr.) Sri Niwas Singh",
        "role": "Guest of Honour",
        "designation": "Director",
        "affiliation": "ABV-IIITM, Gwalior, India",
        "short": "ABV-IIITM, Gwalior",
        "image": "sri-niwas-singh.png",
    },
    {
        "order": "03",
        "name": "Dr. Pankaj Kumar Rawat",
        "role": "Guest of Honour / Keynote Speaker",
        "designation": "Scientist E",
        "affiliation": "ANRF",
        "short": "ANRF",
        "image": "pankaj-kumar-rawat.png",
    },
    {
        "order": "04",
        "name": "Dr. Pramod Kumar Prasad",
        "role": "Guest of Honour / Keynote Speaker",
        "designation": "Scientist E",
        "affiliation": "ANRF",
        "short": "ANRF",
        "image": "pramod-kumar-prasad.png",
    },
    {
        "order": "05",
        "name": "Paulina Muszyńska",
        "role": "Keynote Speaker",
        "designation": "Head of Development Projects Department",
        "affiliation": "Wrocław Agglomeration Development Agency, Poland",
        "short": "Startup Wrocław, Poland",
        "image": "paulina-muszynska.png",
    },
    {
        "order": "06",
        "name": "Shri Akash Takyar",
        "role": "Keynote Speaker",
        "designation": "Founder and CEO",
        "affiliation": "LeewayHertz, USA",
        "short": "LeewayHertz, USA",
        "image": "akash-takyar.png",
    },
    {
        "order": "07",
        "name": "Dr. Ankit Agrawal",
        "role": "Keynote Speaker",
        "designation": "Research Professor, Department of ECE",
        "affiliation": "Northwestern University, USA",
        "short": "Northwestern University",
        "image": "ankit-agrawal.png",
    },
    {
        "order": "08",
        "name": "Dr. Yash Chawla",
        "role": "Keynote Speaker",
        "designation": "Founder and Head of CRAFT",
        "affiliation": "Wroclaw University of Science and Technology, Poland",
        "short": "Wroclaw University of Science and Technology",
        "image": "yash-chawla.png",
    },
]


CONCEPTS = [
    ("01-classic-directory.pdf", "01", "Classic Directory", "Familiar, balanced and easy to scan", 1),
    ("02-programme-roster.pdf", "02", "Programme Roster", "Formal, role-first and conference-led", 2),
    ("03-executive-spotlight.pdf", "03", "Executive Spotlight", "Clear hierarchy around the chief guest", 3),
    ("04-editorial-profiles.pdf", "04", "Editorial Profiles", "Image-led rhythm with more personality", 4),
    ("05-modern-stage-wall.pdf", "05", "Modern Stage Wall", "Bold, visual and event-first", 5),
]


def register_fonts() -> None:
    font_dir = Path("/System/Library/Fonts/Supplemental")
    pdfmetrics.registerFont(TTFont("ICCISD-Regular", str(font_dir / "Arial.ttf")))
    pdfmetrics.registerFont(TTFont("ICCISD-Bold", str(font_dir / "Arial Bold.ttf")))
    pdfmetrics.registerFontFamily(
        "ICCISD",
        normal="ICCISD-Regular",
        bold="ICCISD-Bold",
    )


def prepare_assets() -> dict[str, Path]:
    ASSET_DIR.mkdir(parents=True, exist_ok=True)
    assets: dict[str, Path] = {}
    for speaker in SPEAKERS:
        source = PORTRAIT_DIR / speaker["image"]
        destination = ASSET_DIR / speaker["image"]
        with Image.open(source) as image:
            rgba = image.convert("RGBA")
            rgba.thumbnail((800, 1000), Image.Resampling.LANCZOS)
            quantized = rgba.quantize(colors=256, method=Image.Quantize.FASTOCTREE)
            quantized.save(destination, optimize=True)
        assets[speaker["image"]] = destination
    return assets


def draw_text(
    c: canvas.Canvas,
    text: str,
    x: float,
    top: float,
    width: float,
    size: float,
    leading: float | None = None,
    color=INK,
    bold: bool = False,
    align: int = TA_LEFT,
    max_height: float = 1000,
) -> float:
    leading = leading or size * 1.25
    style = ParagraphStyle(
        name="inline",
        fontName="ICCISD-Bold" if bold else "ICCISD-Regular",
        fontSize=size,
        leading=leading,
        textColor=color,
        alignment=align,
        splitLongWords=True,
        spaceAfter=0,
        spaceBefore=0,
    )
    content = escape(text).replace("\n", "<br/>")
    paragraph = Paragraph(content, style)
    _, height = paragraph.wrap(width, max_height)
    paragraph.drawOn(c, x, top - height)
    return top - height


def draw_image_contain(
    c: canvas.Canvas,
    image_path: Path,
    x: float,
    y: float,
    width: float,
    height: float,
    scale: float = 1.0,
) -> None:
    image_width, image_height = 800, 1000
    fit = min(width / image_width, height / image_height) * scale
    draw_width = image_width * fit
    draw_height = image_height * fit
    c.drawImage(
        str(image_path),
        x + (width - draw_width) / 2,
        y,
        draw_width,
        draw_height,
        mask="auto",
    )


def draw_review_header(
    c: canvas.Canvas,
    number: str,
    title: str,
    descriptor: str,
    level: int,
    dark: bool = False,
) -> None:
    primary = WHITE if dark else INK
    secondary = HexColor("#B9C7CB") if dark else SLATE
    line_color = Color(1, 1, 1, 0.16) if dark else LINE
    c.setFillColor(primary)
    c.setFont("ICCISD-Bold", 8)
    c.drawString(36, PAGE_H - 31, "ICCISD 2026 / SPEAKER LAYOUT REVIEW")

    c.setFillColor(secondary)
    c.setFont("ICCISD-Regular", 8)
    c.drawRightString(PAGE_W - 36, PAGE_H - 31, f"CONCEPT {number} OF 05")

    c.setFillColor(primary)
    c.setFont("ICCISD-Bold", 25)
    c.drawString(36, PAGE_H - 67, title)
    c.setFillColor(secondary)
    c.setFont("ICCISD-Regular", 9.5)
    c.drawString(36, PAGE_H - 85, descriptor)

    meter_x = PAGE_W - 254
    c.setFont("ICCISD-Regular", 6.5)
    c.drawString(meter_x, PAGE_H - 65, "STANDARD")
    c.drawRightString(PAGE_W - 36, PAGE_H - 65, "MODERN")
    for index in range(5):
        c.setFillColor(TEAL if index + 1 <= level else line_color)
        c.roundRect(meter_x + 56 + index * 25, PAGE_H - 69, 17, 5, 2.5, fill=1, stroke=0)

    c.setStrokeColor(line_color)
    c.setLineWidth(0.6)
    c.line(36, PAGE_H - 101, PAGE_W - 36, PAGE_H - 101)


def draw_footer(c: canvas.Canvas, number: str, dark: bool = False) -> None:
    color = HexColor("#AAB8BC") if dark else SLATE
    c.setFillColor(color)
    c.setFont("ICCISD-Regular", 7)
    c.drawString(36, 20, "Desktop speaker-section concept / A3 landscape / Internal review")
    c.drawRightString(PAGE_W - 36, 20, f"ICCISD 2026 / {number}")


def draw_classic_directory(c: canvas.Canvas, assets: dict[str, Path]) -> None:
    c.setFillColor(PAPER)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    draw_review_header(c, "01", "Classic Directory", "Familiar, balanced and easy to scan", 1)

    margin_x = 36
    content_bottom = 42
    content_top = PAGE_H - 119
    gap_x = 13
    gap_y = 13
    card_width = (PAGE_W - 2 * margin_x - 3 * gap_x) / 4
    card_height = (content_top - content_bottom - gap_y) / 2

    for index, speaker in enumerate(SPEAKERS):
        column = index % 4
        row = index // 4
        x = margin_x + column * (card_width + gap_x)
        y = content_top - (row + 1) * card_height - row * gap_y
        portrait_height = 181

        c.setFillColor(WHITE)
        c.setStrokeColor(LINE)
        c.setLineWidth(0.7)
        c.roundRect(x, y, card_width, card_height, 6, fill=1, stroke=1)

        c.saveState()
        path = c.beginPath()
        path.roundRect(x, y + card_height - portrait_height, card_width, portrait_height, 6)
        c.clipPath(path, stroke=0, fill=0)
        c.setFillColor(TEAL_LIGHT if index % 2 == 0 else COOL)
        c.rect(x, y + card_height - portrait_height, card_width, portrait_height, fill=1, stroke=0)
        c.setStrokeColor(Color(7 / 255, 24 / 255, 32 / 255, 0.08))
        c.line(x + card_width / 2, y + card_height - portrait_height, x + card_width / 2, y + card_height)
        c.line(x, y + card_height - portrait_height / 2, x + card_width, y + card_height - portrait_height / 2)
        draw_image_contain(
            c,
            assets[speaker["image"]],
            x + 20,
            y + card_height - portrait_height,
            card_width - 40,
            portrait_height,
        )
        c.restoreState()

        c.setFillColor(TEAL)
        c.setFont("ICCISD-Bold", 22)
        c.drawString(x + 14, y + card_height - 29, speaker["order"])

        text_top = y + card_height - portrait_height - 15
        role_color = RED if index == 0 else TEAL
        text_top = draw_text(c, speaker["role"], x + 14, text_top, card_width - 28, 7.2, 9, role_color, True)
        text_top -= 7
        text_top = draw_text(c, speaker["name"], x + 14, text_top, card_width - 28, 13.5, 16, INK, True)
        text_top -= 7
        text_top = draw_text(c, speaker["designation"], x + 14, text_top, card_width - 28, 8.2, 10.5, INK, True)
        text_top -= 3
        draw_text(c, speaker["affiliation"], x + 14, text_top, card_width - 28, 7.5, 9.5, SLATE)

    draw_footer(c, "01")


def draw_programme_roster(c: canvas.Canvas, assets: dict[str, Path]) -> None:
    c.setFillColor(WHITE)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    draw_review_header(c, "02", "Programme Roster", "Formal, role-first and conference-led", 2)

    rail_x = 36
    rail_width = 62
    content_top = PAGE_H - 117
    content_bottom = 42
    c.setFillColor(INK)
    c.rect(rail_x, content_bottom, rail_width, content_top - content_bottom, fill=1, stroke=0)
    c.setFillColor(WHITE)
    c.setFont("ICCISD-Bold", 26)
    c.drawCentredString(rail_x + rail_width / 2, content_top - 42, "23")
    c.setFont("ICCISD-Bold", 9)
    c.drawCentredString(rail_x + rail_width / 2, content_top - 61, "JULY")
    c.setFillColor(HexColor("#9FC7CB"))
    c.setFont("ICCISD-Regular", 7)
    c.drawCentredString(rail_x + rail_width / 2, content_top - 80, "09:00 AM")
    c.saveState()
    c.translate(rail_x + 22, content_bottom + 45)
    c.rotate(90)
    c.setFont("ICCISD-Bold", 11)
    c.setFillColor(HexColor("#C8D8DA"))
    c.drawString(0, 0, "OPENING CEREMONY / INVITED LINEUP")
    c.restoreState()

    grid_x = rail_x + rail_width + 18
    grid_width = PAGE_W - grid_x - 36
    col_gap = 20
    col_width = (grid_width - col_gap) / 2
    row_height = (content_top - content_bottom) / 4

    for index, speaker in enumerate(SPEAKERS):
        column = index % 2
        row = index // 2
        x = grid_x + column * (col_width + col_gap)
        y_top = content_top - row * row_height
        y_bottom = y_top - row_height

        c.setStrokeColor(LINE)
        c.setLineWidth(0.7)
        c.line(x, y_bottom, x + col_width, y_bottom)

        number_width = 46
        image_width = 96
        image_height = 120
        image_y = y_bottom + (row_height - image_height) / 2

        c.setFillColor(RED if index == 0 else TEAL)
        c.setFont("ICCISD-Bold", 22)
        c.drawString(x, y_top - 31, speaker["order"])
        c.setFillColor(SLATE)
        c.setFont("ICCISD-Regular", 6.8)
        c.drawString(x, y_bottom + 18, "PROGRAMME")

        stage_x = x + number_width
        c.setFillColor(TEAL_LIGHT if index % 2 == 0 else COOL)
        c.rect(stage_x, image_y, image_width, image_height, fill=1, stroke=0)
        draw_image_contain(c, assets[speaker["image"]], stage_x + 3, image_y, image_width - 6, image_height)

        text_x = stage_x + image_width + 15
        text_width = col_width - (text_x - x)
        text_top = y_top - 25
        text_top = draw_text(
            c,
            speaker["role"],
            text_x,
            text_top,
            text_width,
            7.2,
            9,
            RED if index == 0 else TEAL,
            True,
        )
        text_top -= 7
        text_top = draw_text(c, speaker["name"], text_x, text_top, text_width, 14, 16.5, INK, True)
        text_top -= 7
        text_top = draw_text(c, speaker["designation"], text_x, text_top, text_width, 8.2, 10, INK, True)
        text_top -= 3
        draw_text(c, speaker["affiliation"], text_x, text_top, text_width, 7.3, 9.2, SLATE)

    draw_footer(c, "02")


def draw_executive_spotlight(c: canvas.Canvas, assets: dict[str, Path]) -> None:
    c.setFillColor(INK)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    draw_review_header(c, "03", "Executive Spotlight", "Clear hierarchy around the chief guest", 3, True)

    left = 36
    bottom = 42
    top = PAGE_H - 117
    feature_width = 405
    gap = 17
    right_x = left + feature_width + gap
    right_width = PAGE_W - right_x - 36

    chief = SPEAKERS[0]
    c.setFillColor(TEAL)
    c.roundRect(left, bottom, feature_width, top - bottom, 6, fill=1, stroke=0)
    c.saveState()
    c.setFillAlpha(0.55)
    c.setFillColor(WHITE)
    c.setFont("ICCISD-Bold", 62)
    c.drawString(left + 20, top - 70, chief["order"])
    c.setStrokeAlpha(0.13)
    c.setStrokeColor(WHITE)
    c.line(left + feature_width / 2, bottom, left + feature_width / 2, top)
    c.line(left, bottom + 350, left + feature_width, bottom + 350)
    c.restoreState()
    draw_image_contain(c, assets[chief["image"]], left + 20, bottom + 170, feature_width - 40, 470)
    c.setFillColor(WHITE)
    c.rect(left, bottom, feature_width, 172, fill=1, stroke=0)
    c.setFillColor(RED)
    c.rect(left, bottom + 168, feature_width, 4, fill=1, stroke=0)
    y = bottom + 147
    y = draw_text(c, chief["role"], left + 20, y, feature_width - 40, 8.5, 10, RED, True)
    y -= 8
    y = draw_text(c, chief["name"], left + 20, y, feature_width - 40, 22, 25, INK, True)
    y -= 9
    y = draw_text(c, chief["designation"], left + 20, y, feature_width - 40, 9, 11, INK, True)
    y -= 4
    draw_text(c, chief["affiliation"], left + 20, y, feature_width - 40, 8, 10, SLATE)

    guest = SPEAKERS[1]
    guest_height = 177
    guest_y = top - guest_height
    c.setFillColor(HexColor("#143039"))
    c.setStrokeColor(Color(1, 1, 1, 0.12))
    c.roundRect(right_x, guest_y, right_width, guest_height, 6, fill=1, stroke=1)
    stage_width = 142
    c.setFillColor(TEAL_MID)
    c.roundRect(right_x, guest_y, stage_width, guest_height, 6, fill=1, stroke=0)
    draw_image_contain(c, assets[guest["image"]], right_x + 5, guest_y, stage_width - 10, guest_height)
    text_x = right_x + stage_width + 22
    y = guest_y + guest_height - 26
    y = draw_text(c, guest["role"], text_x, y, right_width - stage_width - 44, 7.5, 9, HexColor("#8CD3DB"), True)
    y -= 7
    y = draw_text(c, guest["name"], text_x, y, right_width - stage_width - 44, 17, 20, WHITE, True)
    y -= 7
    y = draw_text(c, guest["designation"], text_x, y, right_width - stage_width - 44, 8.5, 10.5, WHITE, True)
    y -= 3
    draw_text(c, guest["affiliation"], text_x, y, right_width - stage_width - 44, 8, 10, HexColor("#BBC8CC"))

    middle_top = guest_y - gap
    middle_height = 164
    small_gap = 14
    half_width = (right_width - small_gap) / 2
    for local_index, speaker in enumerate(SPEAKERS[2:4]):
        x = right_x + local_index * (half_width + small_gap)
        y_bottom = middle_top - middle_height
        c.setFillColor(HexColor("#10272F"))
        c.setStrokeColor(Color(1, 1, 1, 0.12))
        c.roundRect(x, y_bottom, half_width, middle_height, 6, fill=1, stroke=1)
        c.setFillColor(TEAL if local_index == 0 else HexColor("#31515A"))
        c.rect(x, y_bottom, 118, middle_height, fill=1, stroke=0)
        draw_image_contain(c, assets[speaker["image"]], x + 4, y_bottom, 110, middle_height)
        tx = x + 132
        ty = y_bottom + middle_height - 25
        ty = draw_text(c, speaker["role"], tx, ty, half_width - 146, 6.8, 8.2, HexColor("#8CD3DB"), True)
        ty -= 7
        ty = draw_text(c, speaker["name"], tx, ty, half_width - 146, 13, 15.5, WHITE, True)
        ty -= 7
        ty = draw_text(c, speaker["designation"], tx, ty, half_width - 146, 7.5, 9.2, WHITE, True)
        ty -= 3
        draw_text(c, speaker["short"], tx, ty, half_width - 146, 7.2, 9, HexColor("#BBC8CC"))

    lower_top = middle_top - middle_height - gap
    lower_bottom = bottom
    feature_small_width = 315
    paulina = SPEAKERS[4]
    c.setFillColor(HexColor("#E5E8E4"))
    c.roundRect(right_x, lower_bottom, feature_small_width, lower_top - lower_bottom, 6, fill=1, stroke=0)
    c.setFillColor(TEAL_LIGHT)
    c.rect(right_x, lower_bottom + 106, feature_small_width, lower_top - lower_bottom - 106, fill=1, stroke=0)
    draw_image_contain(
        c,
        assets[paulina["image"]],
        right_x + 12,
        lower_bottom + 106,
        feature_small_width - 24,
        lower_top - lower_bottom - 106,
    )
    py = lower_bottom + 90
    py = draw_text(c, paulina["role"], right_x + 16, py, feature_small_width - 32, 7, 8.5, TEAL, True)
    py -= 5
    py = draw_text(c, paulina["name"], right_x + 16, py, feature_small_width - 32, 14, 16, INK, True)
    py -= 5
    draw_text(c, paulina["short"], right_x + 16, py, feature_small_width - 32, 7.5, 9, SLATE)

    stack_x = right_x + feature_small_width + small_gap
    stack_width = right_width - feature_small_width - small_gap
    stack_gap = 8
    stack_height = (lower_top - lower_bottom - 2 * stack_gap) / 3
    for local_index, speaker in enumerate(SPEAKERS[5:]):
        y_bottom = lower_top - (local_index + 1) * stack_height - local_index * stack_gap
        c.setFillColor(HexColor("#143039"))
        c.setStrokeColor(Color(1, 1, 1, 0.12))
        c.roundRect(stack_x, y_bottom, stack_width, stack_height, 5, fill=1, stroke=1)
        stage = 72
        c.setFillColor(HexColor("#29464F"))
        c.roundRect(stack_x, y_bottom, stage, stack_height, 5, fill=1, stroke=0)
        draw_image_contain(c, assets[speaker["image"]], stack_x + 3, y_bottom, stage - 6, stack_height)
        tx = stack_x + stage + 12
        ty = y_bottom + stack_height - 18
        ty = draw_text(c, speaker["name"], tx, ty, stack_width - stage - 22, 10.5, 12, WHITE, True)
        ty -= 3
        draw_text(c, speaker["short"], tx, ty, stack_width - stage - 22, 6.8, 8.2, HexColor("#BBC8CC"))

    draw_footer(c, "03", True)


def draw_editorial_profiles(c: canvas.Canvas, assets: dict[str, Path]) -> None:
    c.setFillColor(HexColor("#F2F3F1"))
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    draw_review_header(c, "04", "Editorial Profiles", "Image-led rhythm with more personality", 4)

    rail_x = 36
    rail_y = 42
    rail_w = 142
    rail_h = PAGE_H - 159
    c.setFillColor(INK)
    c.rect(rail_x, rail_y, rail_w, rail_h, fill=1, stroke=0)
    c.setFillColor(WHITE)
    c.setFont("ICCISD-Bold", 49)
    c.drawString(rail_x + 18, rail_y + rail_h - 70, "04")
    c.setFillColor(HexColor("#8CC6CC"))
    c.setFont("ICCISD-Bold", 10)
    c.drawString(rail_x + 18, rail_y + rail_h - 101, "INVITED")
    c.drawString(rail_x + 18, rail_y + rail_h - 117, "VOICES")
    c.setFillColor(HexColor("#B8C7CB"))
    c.setFont("ICCISD-Regular", 7)
    c.drawString(rail_x + 18, rail_y + 54, "23 JULY 2026")
    c.drawString(rail_x + 18, rail_y + 39, "SHARDA UNIVERSITY")
    c.setFillColor(RED)
    c.rect(rail_x + 18, rail_y + 24, 34, 3, fill=1, stroke=0)

    content_x = rail_x + rail_w + 18
    content_w = PAGE_W - content_x - 36
    column_gap = 12
    column_w = (content_w - 3 * column_gap) / 4
    section_gap = 15
    section_h = (rail_h - section_gap) / 2
    stage_colors = [TEAL_LIGHT, COOL, RED_LIGHT, TEAL_MID, COOL, TEAL_LIGHT, HexColor("#D8E0E4"), HexColor("#D3DDDA")]

    for index, speaker in enumerate(SPEAKERS):
        column = index % 4
        row = index // 4
        x = content_x + column * (column_w + column_gap)
        y = rail_y + (1 - row) * (section_h + section_gap)
        stage_h = 205 if column % 2 == 0 else 184
        text_h = section_h - stage_h
        image_first = (column + row) % 2 == 0
        stage_y = y + text_h if image_first else y
        text_top = stage_y - 13 if image_first else y + section_h - 12

        c.setFillColor(stage_colors[index])
        c.rect(x, stage_y, column_w, stage_h, fill=1, stroke=0)
        c.setStrokeColor(Color(7 / 255, 24 / 255, 32 / 255, 0.08))
        c.line(x + column_w / 2, stage_y, x + column_w / 2, stage_y + stage_h)
        c.line(x, stage_y + stage_h / 2, x + column_w, stage_y + stage_h / 2)
        draw_image_contain(c, assets[speaker["image"]], x + 10, stage_y, column_w - 20, stage_h)
        c.setFillColor(RED if index == 0 else TEAL)
        c.setFont("ICCISD-Bold", 24)
        c.drawString(x + 10, stage_y + stage_h - 28, speaker["order"])

        if image_first:
            name_top = text_top
        else:
            name_top = text_top
        name_top = draw_text(c, speaker["role"], x + 3, name_top, column_w - 6, 6.8, 8.2, RED if index == 0 else TEAL, True)
        name_top -= 6
        name_top = draw_text(c, speaker["name"], x + 3, name_top, column_w - 6, 12.5, 14.5, INK, True)
        name_top -= 5
        name_top = draw_text(c, speaker["designation"], x + 3, name_top, column_w - 6, 7.3, 8.8, INK, True)
        name_top -= 2
        draw_text(c, speaker["short"], x + 3, name_top, column_w - 6, 6.8, 8.2, SLATE)

    draw_footer(c, "04")


def draw_modern_stage_wall(c: canvas.Canvas, assets: dict[str, Path]) -> None:
    background = HexColor("#08171D")
    c.setFillColor(background)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    draw_review_header(c, "05", "Modern Stage Wall", "Bold, visual and event-first", 5, True)

    c.saveState()
    c.setFillAlpha(0.055)
    c.setFillColor(WHITE)
    c.setFont("ICCISD-Bold", 95)
    c.drawCentredString(PAGE_W / 2, 615, "VOICES / 2026")
    c.restoreState()

    margin = 36
    gap = 8
    tower_width = (PAGE_W - 2 * margin - 7 * gap) / 8
    base_y = 192
    tower_heights = [388, 444, 358, 415, 376, 430, 348, 399]
    tower_colors = [RED, TEAL, HexColor("#29464F"), HexColor("#BECFD1"), HexColor("#D9E4E1"), HexColor("#31515A"), HexColor("#D4D9DF"), HexColor("#244149")]
    number_colors = [WHITE, WHITE, HexColor("#A8D3D7"), INK, INK, HexColor("#B9DDE0"), INK, HexColor("#B9DDE0")]

    for index, speaker in enumerate(SPEAKERS):
        x = margin + index * (tower_width + gap)
        height = tower_heights[index]
        c.setFillColor(tower_colors[index])
        c.rect(x, base_y, tower_width, height, fill=1, stroke=0)
        c.setStrokeColor(Color(1, 1, 1, 0.10))
        c.line(x + tower_width / 2, base_y, x + tower_width / 2, base_y + height)
        c.line(x, base_y + height * 0.58, x + tower_width, base_y + height * 0.58)
        c.setFillColor(number_colors[index])
        c.setFont("ICCISD-Bold", 24)
        c.drawString(x + 10, base_y + height - 31, speaker["order"])
        draw_image_contain(
            c,
            assets[speaker["image"]],
            x - 5,
            base_y,
            tower_width + 10,
            min(280, height - 42),
            scale=1.08,
        )

    c.setFillColor(HexColor("#10262E"))
    c.rect(0, 42, PAGE_W, 131, fill=1, stroke=0)
    c.setFillColor(RED)
    c.rect(0, 170, PAGE_W / 8, 3, fill=1, stroke=0)
    c.setFillColor(TEAL)
    c.rect(PAGE_W / 8, 170, PAGE_W - PAGE_W / 8, 3, fill=1, stroke=0)

    for index, speaker in enumerate(SPEAKERS):
        x = margin + index * (tower_width + gap)
        c.setFillColor(HexColor("#60747B"))
        c.setFont("ICCISD-Regular", 6.5)
        c.drawString(x, 151, speaker["order"])
        y = 137
        y = draw_text(c, speaker["name"], x, y, tower_width, 9.2, 10.5, WHITE, True)
        y -= 5
        y = draw_text(c, speaker["role"], x, y, tower_width, 6.3, 7.5, HexColor("#8CCDD4"), True)
        y -= 3
        draw_text(c, speaker["short"], x, y, tower_width, 6.2, 7.3, HexColor("#AAB8BC"))

    draw_footer(c, "05", True)


DRAWERS = [
    draw_classic_directory,
    draw_programme_roster,
    draw_executive_spotlight,
    draw_editorial_profiles,
    draw_modern_stage_wall,
]


def create_pdf(path: Path, drawer, assets: dict[str, Path]) -> None:
    document = canvas.Canvas(str(path), pagesize=PAGE_SIZE, pageCompression=1)
    document.setTitle(path.stem.replace("-", " ").title())
    document.setAuthor("ICCISD 2026 Organizing Team")
    drawer(document, assets)
    document.showPage()
    document.save()


def combine_pdfs(paths: list[Path], destination: Path) -> None:
    writer = PdfWriter()
    for path in paths:
        reader = PdfReader(str(path))
        for page in reader.pages:
            writer.add_page(page)
    writer.add_metadata(
        {
            "/Title": "ICCISD 2026 Speaker Layout Options",
            "/Author": "ICCISD 2026 Organizing Team",
            "/Subject": "Five speaker-section concepts from standard to modern",
        }
    )
    with destination.open("wb") as output:
        writer.write(output)


def main() -> None:
    register_fonts()
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    TEMP_DIR.mkdir(parents=True, exist_ok=True)
    assets = prepare_assets()

    generated: list[Path] = []
    for concept, drawer in zip(CONCEPTS, DRAWERS):
        filename = concept[0]
        destination = OUTPUT_DIR / filename
        create_pdf(destination, drawer, assets)
        generated.append(destination)

    combine_pdfs(generated, OUTPUT_DIR / "ICCISD-2026-speaker-layout-options.pdf")
    print("Generated:")
    for path in generated:
        print(path)
    print(OUTPUT_DIR / "ICCISD-2026-speaker-layout-options.pdf")


if __name__ == "__main__":
    main()
