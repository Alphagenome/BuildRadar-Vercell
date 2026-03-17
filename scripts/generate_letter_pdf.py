#!/usr/bin/env python3
# Usage: python3 generate_letter_pdf.py --builder "John Smith" --company "Smith Builds" \
#          --phone "07700 900000" --email "john@smithbuilds.co.uk" \
#          --address "7 Dover House Road, SW15 5AA" --job "Rear Extension" \
#          --type extension
#
# Generates a pre-filled BuildRadar letter PDF and drops it in the Obsidian mirror.
# Requires: pip install reportlab

import argparse
import os
from datetime import datetime
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable
from reportlab.lib.enums import TA_LEFT, TA_CENTER

OUTPUT_DIR = "/home/clem/agent-lab/obsidian-mirror/01-Ready-to-Print"

TEMPLATES = {
    "extension": """Dear Homeowner,

Congratulations on your planning approval for your {job} — I noticed your application at {address} was recently approved and wanted to reach out before you start searching for builders.

My name is {name} and I'm a local builder specialising in rear and side extensions in this area. I've completed numerous similar projects within a few miles of your home, and I understand exactly what's involved in making your extension a success — on time and on budget.

Why choose a local builder?
• I know the local planning requirements and building regulations inside out
• My reputation depends on quality work in this postcode — you can speak to neighbours I've worked for
• No waiting months for availability — I have capacity in your area now

I am fully insured and happy to provide references from recent local projects.

I'd love to offer you a free, no-obligation quote. There's absolutely no pressure — just an honest conversation about your project and what it would realistically cost.

Please call or message me on {phone} or email {email} to arrange a visit.

Warm regards,

{name}
{company}
{phone} | {email}""",

    "loft": """Dear Homeowner,

I see your loft conversion at {address} has been approved — that's an exciting project and one I specialise in.

A well-executed loft conversion adds significant value to your home. I'm {name} from {company}, a local specialist with loft conversions completed nearby. My work includes dormer, hip-to-gable, and mansard conversions, full structural work and building regulations sign-off.

I'd welcome the chance to visit and give you a realistic quote. Completely free, completely honest.

Call {phone} or email {email} to see my recent loft projects.

{name} | {company} | {phone}""",

    "garden": """Dear Homeowner,

Your planning approval for garden works at {address} has just come through — congratulations. I wanted to reach out before you start looking for quotes.

I'm {name} from {company}. I've been building garden spaces in this area for many years — fully insured, references available, and I work to the approved plans exactly.

I'd love to pop round and give you a free quote. No obligation whatsoever.

{name} | {company} | {phone} | {email}""",

    "general": """Dear Homeowner,

I noticed your planning application for {job} at {address} was recently approved. As a local builder working extensively in this area, I wanted to introduce myself before you start searching for quotes.

A little about me:
• Local expertise with full insurance
• Happy to provide references from recent local work
• Free, no-obligation quote with no pressure

Please call me on {phone} or email {email}. I'd genuinely love to help make your project a success.

Kind regards,
{name}
{company} | {phone} | {email}""",
}


def generate_pdf(args):
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    date_str = datetime.now().strftime("%Y-%m-%d")
    safe_address = args.address.replace(" ", "-").replace(",", "").replace("/", "-")[:30]
    filename = f"{date_str}-{safe_address}-{args.type}.pdf"
    filepath = os.path.join(OUTPUT_DIR, filename)

    template = TEMPLATES.get(args.type, TEMPLATES["general"])
    body = template.format(
        name=args.builder,
        company=args.company,
        phone=args.phone,
        email=args.email,
        address=args.address,
        job=args.job,
    )

    doc = SimpleDocTemplate(
        filepath,
        pagesize=A4,
        leftMargin=25*mm,
        rightMargin=25*mm,
        topMargin=25*mm,
        bottomMargin=20*mm,
    )

    styles = getSampleStyleSheet()

    header_style = ParagraphStyle("Header", fontSize=10, textColor=colors.HexColor("#FF6B00"),
                                  fontName="Helvetica-Bold", spaceAfter=2)
    sender_style = ParagraphStyle("Sender", fontSize=10, fontName="Helvetica-Bold",
                                  textColor=colors.HexColor("#1A1C1E"), spaceAfter=2)
    date_style  = ParagraphStyle("Date", fontSize=10, spaceAfter=12)
    body_style  = ParagraphStyle("Body", fontSize=11, leading=16, spaceAfter=8)
    footer_style = ParagraphStyle("Footer", fontSize=8, textColor=colors.grey,
                                  alignment=TA_CENTER)

    story = []

    # Header
    story.append(Paragraph("BuildRadar", header_style))
    story.append(Spacer(1, 2*mm))
    story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor("#FF6B00")))
    story.append(Spacer(1, 6*mm))

    # Sender
    story.append(Paragraph(args.builder, sender_style))
    story.append(Paragraph(args.company, sender_style))
    story.append(Paragraph(f"{args.phone} | {args.email}", date_style))
    story.append(Spacer(1, 4*mm))
    story.append(Paragraph(datetime.now().strftime("%-d %B %Y"), date_style))
    story.append(Spacer(1, 6*mm))

    # Body
    for line in body.split("\n"):
        if line.strip():
            story.append(Paragraph(line.replace("•", "&#8226;"), body_style))
        else:
            story.append(Spacer(1, 4*mm))

    story.append(Spacer(1, 10*mm))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.lightgrey))
    story.append(Spacer(1, 3*mm))
    story.append(Paragraph(
        "BuildRadar Conversion Toolkit — Provided exclusively to BuildRadar pilot subscribers · buildradar.co.uk",
        footer_style
    ))

    doc.build(story)
    print(f"✅ PDF generated: {filepath}")
    return filepath


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Generate BuildRadar pre-filled letter PDF")
    parser.add_argument("--builder",  required=True, help="Builder's full name")
    parser.add_argument("--company",  required=True, help="Company name")
    parser.add_argument("--phone",    required=True, help="Phone number")
    parser.add_argument("--email",    required=True, help="Email address")
    parser.add_argument("--address",  required=True, help="Homeowner address")
    parser.add_argument("--job",      default="Building Works", help="Job type description")
    parser.add_argument("--type",     default="general",
                        choices=["extension", "loft", "garden", "general"],
                        help="Letter template type")
    args = parser.parse_args()
    generate_pdf(args)
