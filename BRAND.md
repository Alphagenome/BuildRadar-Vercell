BuildRadar Brand System v1.0
Generated: 2026-04-12 by Edison
Status: READY — hand to Mike for deploy

==========================================================================
COLOUR PALETTE
==========================================================================

PRIMARY
  Navy          #1B3A5C    Backgrounds, primary surfaces, navbar
  Navy Light    #244B73    Cards, elevated surfaces, hover states
  Navy Dark     #0F2440    Gradients, depth, footer
  Navy Deep     #091628    Absolute darkest (hero sections)

ACCENT
  Gold          #D4AF37    Brand accent — logos, taglines, subtle borders
  CTA Gold      #F0B429    Buttons, links, highlights, "good news" colour
  CTA Hover     #F7CC4F    Button/link hover/active states

TEXT
  White         #FFFFFF    Primary text on dark backgrounds
  Silver        #C0C0C0    Logo text, secondary headings
  Slate         #94A3B8    Body text, paragraphs, descriptions
  Muted         #7B8FA3    Placeholders, disabled states, tertiary text

CONTRAST RATIOS (on Navy #1B3A5C)
  White on Navy      ~14:1  (AAA)
  CTA Gold on Navy   ~6.5:1 (AA — approved for all text)
  Silver on Navy     ~5.2:1 (AA)
  Slate on Navy      ~3.7:1 (AA large text only)
  Gold on Navy       ~4.4:1 (AA large text only)

USAGE RULES
  - Headings: CTA Gold (#F0B429) for hero headlines, Silver for section headings
  - Body text: White (#FFFFFF) or Slate (#94A3B8)
  - CTA buttons: CTA Gold (#F0B429) bg, Navy text, CTA Hover on hover
  - Links: CTA Gold (#F0B429), underline on hover
  - Borders: Gold (#D4AF37) at low opacity, or white at 10%
  - Backgrounds: Navy (#1B3A5C) primary, gradient to Navy Dark (#0F2440)

DO NOT USE
  - #0A1628 (old too-dark navy — replaced)
  - #1A1C1E (old near-black — replaced)
  - #FF6B00 (orange — not in brand palette)
  - #CC5500 (dark orange — not in brand palette)
  - #0F172A (Tailwind slate-900 — not our navy)

==========================================================================
TYPOGRAPHY
==========================================================================

HEADINGS
  Font: Cinzel (Google Fonts), fallback Georgia
  Weight: 700 (Bold)
  Colour: CTA Gold for hero, Silver for sections

BODY
  Font: Montserrat (Google Fonts), fallback Arial/Helvetica
  Weight: 400 (Regular) for body, 600 (SemiBold) for labels
  Colour: White or Slate

TAGLINE
  "CONSTRUCTION INTELLIGENCE YOU CAN TRUST"
  Font: Montserrat
  Weight: 400
  Colour: Gold (#D4AF37)
  Letter-spacing: 2-3px (wide, uppercase)

MONOSPACE
  Font: JetBrains Mono, fallback monospace
  Use: reference numbers, Intel IDs (BR26-0847-SW15)

==========================================================================
LOGO SYSTEM
==========================================================================

THE MARK: 16-needle radar/compass burst
  - N/E/S/W: longest needles, gold gradient (r 15→75)
  - NE/SE/SW/NW: medium needles, gold gradient (r 30→75)
  - Intercardinal (8x): shortest needles, silver gradient (r 45→75)
  - Centre: white-to-gold dot (r=5)

VARIANTS (all in public/brand/)
  buildradar-icon.svg             Standalone mark on navy background
  buildradar-icon-transparent.svg  Standalone mark, no background
  buildradar-horizontal.svg        Icon + BUILD RADAR + tagline (navbar)
  buildradar-stacked.svg           Icon on top + text below (social profiles)
  buildradar-favicon.svg           Simplified 8-point, 32x32 (browsers)
  buildradar-text-only.svg         Text only, no icon (watermarks)

SOCIAL COVERS (in public/brand/)
  fb-cover-desktop-820x312.svg     Facebook cover, desktop
  fb-cover-mobile-640x360.svg      Facebook cover, mobile

SHARE IMAGE
  og-image.svg                     Open Graph (WhatsApp/Facebook/Twitter share)

PNG GENERATION NEEDED
  These SVGs need raster PNG exports for platforms that don't support SVG:
  - buildradar-icon-400.png        (from buildradar-icon.svg, 400x400)
  - buildradar-icon-180.png        (from buildradar-icon.svg, 180x180, Apple touch icon)
  - buildradar-favicon-32.png      (from buildradar-favicon.svg, 32x32)
  - buildradar-horizontal-820.png  (from buildradar-horizontal.svg, 820px wide)
  - buildradar-stacked-800.png     (from buildradar-stacked.svg, 800px wide)
  - favicon.ico                    (from buildradar-favicon.svg, multi-size ICO)
  - og-image.png                   (from og-image.svg, 1200x630)
  - fb-cover-desktop-820x312.png   (from SVG)
  - fb-cover-mobile-640x360.png    (from SVG)

  Tool: npx sharp-cli or Inkscape CLI for batch conversion.

LOGO USAGE RULES
  - Minimum size: 32x32px (favicon)
  - Clear space: 1x needle length around all sides
  - Do NOT rotate, skew, or stretch
  - Do NOT place on busy backgrounds without the navy rectangle
  - On light backgrounds: use buildradar-icon-transparent.svg
  - On dark backgrounds: use buildradar-icon.svg (navy bg blends)
  - Do NOT recolour the needles
  - Do NOT add shadows, glows, or effects

==========================================================================
COMPONENT COLOUR MAP (for Mike)
==========================================================================

What colour goes where in the Next.js components:

globals.css
  --background:        #1B3A5C    (was #1A1C1E)
  --background-dark:   #0F2440    (was #0F172A)
  --navy-light:        #244B73    (NEW — cards, elevated surfaces)
  --gold:              #D4AF37    (NEW — brand accent)
  --cta:               #F0B429    (NEW — replaces --orange)
  --cta-hover:         #F7CC4F    (NEW — replaces --orange-dark)
  --silver:            #C0C0C0    (NEW — secondary text)
  --slate:             #94A3B8    (existing, keep)
  --white:             #FFFFFF
  --muted:             #7B8FA3    (NEW)

  DELETE these old variables:
  --orange: #FF6B00
  --orange-dark: #CC5500

Navbar.tsx
  Background: bg-[#1B3A5C]  (was bg-[#1A1C1E])
  CTA button: bg-[#F0B429] text-[#1B3A5C]  (was bg-[#FF6B00])

Hero.tsx
  Background: gradient #1B3A5C to #0F2440
  Headline: text-[#F0B429]
  Body: text-[#C0C0C0] or text-[#94A3B8]
  CTA button: bg-[#F0B429] text-[#1B3A5C]

SampleLead.tsx
  Background: bg-[#0F2440]
  Header: replace old BR div with <BrandIcon variant="icon" size={32} />
  Intel ID: text-[#F0B429]

SocialProof.tsx
  Badge: replace old BR div with <BrandIcon variant="icon" size={56} />
  Stars: text-[#F0B429]

FAQ.tsx
  Accordion icons: text-[#F0B429] (was text-[#FF6B00])

SignupForm.tsx
  Button: bg-[#F0B429] text-[#1B3A5C] hover:bg-[#F7CC4F]
  Input border focus: border-[#F0B429]
  Input background: bg-[#0F2440]

Footer.tsx
  Background: bg-[#0F2440]
  Links: text-[#F0B429]

privacy/page.tsx
  All #FF6B00 references: change to #F0B429

waitlist/page.tsx
  All #FF6B00 references: change to #F0B429

claim/page.tsx
  All #FF6B00 references: change to #F0B429

get-leads/[trade]/page.tsx
  Replace old BR badge div with <BrandIcon variant="icon" size={32} />

==========================================================================
FILES TO DELETE (old assets)
==========================================================================

After copying new assets, Mike should remove:
  public/brand/buildradar-favicon-32 invalid.png    (broken filename)
  public/brand/fb-cover-desktop-option-b-stacked.svg  (old concept)
  public/brand/fb-cover-desktop-option-b-stacked.png  (old concept)
  public/brand/concept-2-scan.svg                    (exploration)
  public/brand/concept-3-chiseled.svg                (exploration)
  public/brand/concept-4-apex.svg                    (exploration)
  public/brand/concept-5-pulse.svg                   (exploration)
  public/br-logo-400.png                             (deleted, dead reference)

==========================================================================
MIGRATION CHECKLIST
==========================================================================

[ ] Copy new SVGs to public/brand/
[ ] Generate PNGs from SVGs (sharp-cli or Inkscape)
[ ] Generate favicon.ico from buildradar-favicon.svg
[ ] Copy buildradar-favicon.svg to public/ (for modern browsers)
[ ] Update globals.css CSS variables
[ ] Update Navbar.tsx background colour
[ ] Replace old BR badges in SampleLead.tsx with BrandIcon
[ ] Replace old BR badges in SocialProof.tsx with BrandIcon
[ ] Update all #FF6B00 references to #F0B429
[ ] Update all #1A1C1E references to #1B3A5C
[ ] Update all #0A1628 references to #1B3A5C
[ ] Delete old concept SVGs
[ ] Delete broken favicon file
[ ] Test: verify BrandIcon renders correctly in navbar
[ ] Test: verify CTA buttons use gold not orange
[ ] Test: check favicon in browser tab
[ ] Test: share URL on WhatsApp — verify OG image
[ ] Deploy to Vercel

==========================================================================
STEALTH VOCABULARY (reminder)
==========================================================================

NEVER SAY                    ALWAYS SAY
planning application         approved builds / approved work
council leads                verified opportunities
scraping data                verified opportunities
weekly alert / update        Data Drop
get more customers           find work / keep phone ringing
marketing                    intelligence / opportunity delivery

==========================================================================
END OF BRAND SYSTEM
==========================================================================
