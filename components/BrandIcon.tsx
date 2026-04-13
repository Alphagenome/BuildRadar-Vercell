import type { SVGProps } from "react";

// BuildRadar brand identity — 16-needle radar burst
// Three-tier compass hierarchy:
//   N/E/S/W gold  — longest  (ry=30)
//   NE/SE/SW/NW gold — medium  (ry=22.5)
//   Silver          — shortest (ry=15)

type Variant = "icon" | "stacked" | "horizontal" | "favicon";

interface Props extends Omit<SVGProps<SVGSVGElement>, "width" | "height"> {
  variant?: Variant;
  size?: number;
}

const NAVY = "#1B3A5C";
const GOLD = "#D4AF37";

// 16 needles with solid fills — works everywhere, no gradient issues
function Needles() {
  return (
    <>
      <g transform="rotate(0)">    <ellipse cx="0" cy="-45"   rx="1.2" ry="30"   fill={GOLD}/></g>
      <g transform="rotate(22.5)"> <ellipse cx="0" cy="-60"   rx="1.2" ry="15"   fill="#C0C0C0"/></g>
      <g transform="rotate(45)">   <ellipse cx="0" cy="-52.5" rx="1.2" ry="22.5" fill={GOLD}/></g>
      <g transform="rotate(67.5)"> <ellipse cx="0" cy="-60"   rx="1.2" ry="15"   fill="#C0C0C0"/></g>
      <g transform="rotate(90)">   <ellipse cx="0" cy="-45"   rx="1.2" ry="30"   fill={GOLD}/></g>
      <g transform="rotate(112.5)"><ellipse cx="0" cy="-60"   rx="1.2" ry="15"   fill="#C0C0C0"/></g>
      <g transform="rotate(135)">  <ellipse cx="0" cy="-52.5" rx="1.2" ry="22.5" fill={GOLD}/></g>
      <g transform="rotate(157.5)"><ellipse cx="0" cy="-60"   rx="1.2" ry="15"   fill="#C0C0C0"/></g>
      <g transform="rotate(180)">  <ellipse cx="0" cy="-45"   rx="1.2" ry="30"   fill={GOLD}/></g>
      <g transform="rotate(202.5)"><ellipse cx="0" cy="-60"   rx="1.2" ry="15"   fill="#C0C0C0"/></g>
      <g transform="rotate(225)">  <ellipse cx="0" cy="-52.5" rx="1.2" ry="22.5" fill={GOLD}/></g>
      <g transform="rotate(247.5)"><ellipse cx="0" cy="-60"   rx="1.2" ry="15"   fill="#C0C0C0"/></g>
      <g transform="rotate(270)">  <ellipse cx="0" cy="-45"   rx="1.2" ry="30"   fill={GOLD}/></g>
      <g transform="rotate(292.5)"><ellipse cx="0" cy="-60"   rx="1.2" ry="15"   fill="#C0C0C0"/></g>
      <g transform="rotate(315)">  <ellipse cx="0" cy="-52.5" rx="1.2" ry="22.5" fill={GOLD}/></g>
      <g transform="rotate(337.5)"><ellipse cx="0" cy="-60"   rx="1.2" ry="15"   fill="#C0C0C0"/></g>
      <circle r="5" fill="#FFFFFF"/>
    </>
  );
}

export default function BrandIcon({ variant = "stacked", size, className, ...rest }: Props) {
  switch (variant) {

    // ── Favicon — 32×32, simplified 8-point, flat colours ────────────────
    case "favicon":
      return (
        <svg viewBox="0 0 32 32" width={size ?? 32} height={size ?? 32}
             className={className} role="img" aria-label="BuildRadar" {...rest}>
          <rect width="32" height="32" fill={NAVY}/>
          <g transform="translate(16,16)">
            <g transform="rotate(0)">  <ellipse cx="0" cy="-9"  rx="1" ry="6"  fill={GOLD}/></g>
            <g transform="rotate(45)"> <ellipse cx="0" cy="-10" rx="1" ry="4.5" fill={GOLD}/></g>
            <g transform="rotate(90)"> <ellipse cx="0" cy="-9"  rx="1" ry="6"  fill={GOLD}/></g>
            <g transform="rotate(135)"><ellipse cx="0" cy="-10" rx="1" ry="4.5" fill={GOLD}/></g>
            <g transform="rotate(180)"><ellipse cx="0" cy="-9"  rx="1" ry="6"  fill={GOLD}/></g>
            <g transform="rotate(225)"><ellipse cx="0" cy="-10" rx="1" ry="4.5" fill={GOLD}/></g>
            <g transform="rotate(270)"><ellipse cx="0" cy="-9"  rx="1" ry="6"  fill={GOLD}/></g>
            <g transform="rotate(315)"><ellipse cx="0" cy="-10" rx="1" ry="4.5" fill={GOLD}/></g>
            <g transform="rotate(22.5)"> <ellipse cx="0" cy="-11" rx="0.8" ry="2.5" fill="#C0C0C0"/></g>
            <g transform="rotate(67.5)"> <ellipse cx="0" cy="-11" rx="0.8" ry="2.5" fill="#C0C0C0"/></g>
            <g transform="rotate(112.5)"><ellipse cx="0" cy="-11" rx="0.8" ry="2.5" fill="#C0C0C0"/></g>
            <g transform="rotate(157.5)"><ellipse cx="0" cy="-11" rx="0.8" ry="2.5" fill="#C0C0C0"/></g>
            <g transform="rotate(202.5)"><ellipse cx="0" cy="-11" rx="0.8" ry="2.5" fill="#C0C0C0"/></g>
            <g transform="rotate(247.5)"><ellipse cx="0" cy="-11" rx="0.8" ry="2.5" fill="#C0C0C0"/></g>
            <g transform="rotate(292.5)"><ellipse cx="0" cy="-11" rx="0.8" ry="2.5" fill="#C0C0C0"/></g>
            <g transform="rotate(337.5)"><ellipse cx="0" cy="-11" rx="0.8" ry="2.5" fill="#C0C0C0"/></g>
            <circle r="1.8" fill="#FFFFFF"/>
          </g>
        </svg>
      );

    // ── Icon — standalone mark ────────────────────────────────────────────
    case "icon":
      return (
        <svg viewBox="0 0 200 200" width={size ?? 200} height={size ?? 200}
             className={className} role="img" aria-label="BuildRadar" {...rest}>
          <rect width="200" height="200" fill={NAVY}/>
          <g transform="translate(100,100)"><Needles/></g>
        </svg>
      );

    // ── Horizontal — icon left, text right (navbar) ───────────────────────
    case "horizontal":
      return (
        <svg viewBox="0 0 480 80" width={size ?? 480} height={size ? Math.round(size * 80 / 480) : 80}
             className={className} role="img" aria-label="BuildRadar" {...rest}>
          <rect width="480" height="80" fill={NAVY}/>
          <g transform="translate(42,40) scale(0.43)"><Needles/></g>
          <text x="86" y="36" textAnchor="start"
                fontFamily="Cinzel, Georgia, serif" fontWeight="700" fontSize="20"
                fill="#C0C0C0" letterSpacing="1">BUILD RADAR</text>
          <text x="86" y="56" textAnchor="start"
                fontFamily="Montserrat, Arial, sans-serif" fontWeight="400" fontSize="6.5"
                fill={GOLD} letterSpacing="1.8">CONSTRUCTION INTELLIGENCE YOU CAN TRUST</text>
        </svg>
      );

    // ── Stacked (default) ─────────────────────────────────────────────────
    default:
      return (
        <svg viewBox="0 0 380 195" width={size ?? 380} height={size ? Math.round(size * 195 / 380) : 195}
             className={className} role="img" aria-label="BuildRadar" {...rest}>
          <rect width="380" height="195" fill={NAVY}/>
          <g transform="translate(190,76) scale(0.72)"><Needles/></g>
          <text x="190" y="152" textAnchor="middle"
                fontFamily="Cinzel, Georgia, serif" fontWeight="700" fontSize="26"
                fill="#C0C0C0" letterSpacing="1.3">BUILD RADAR</text>
          <text x="190" y="173" textAnchor="middle"
                fontFamily="Montserrat, Arial, sans-serif" fontWeight="400" fontSize="7.5"
                fill={GOLD} letterSpacing="2.25">CONSTRUCTION INTELLIGENCE YOU CAN TRUST</text>
        </svg>
      );
  }
}
