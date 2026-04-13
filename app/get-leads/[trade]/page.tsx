import { getTradeConfig, getAllTrades } from "@/lib/trade-config"
import { notFound } from "next/navigation"
import Link from "next/link"

// Pre-render all known trade pages at build time
export function generateStaticParams() {
  return getAllTrades().map((trade) => ({ trade }))
}

interface Props {
  params: Promise<{ trade: string }>
}

export default async function GetLeadsPage({ params }: Props) {
  const { trade } = await params
  const cfg = getTradeConfig(trade)

  // Hard 404 only for completely nonsensical slugs (numbers, injections etc.)
  if (/[^a-z_-]/i.test(trade)) notFound()

  const signupUrl = "https://buildradar.co.uk/#signup"

  return (
    <main className="min-h-screen pb-24" style={{ background: "var(--background)" }}>

      {/* Nav */}
      <div style={{ background: "#1B3A5C", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "14px 16px", display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 32, height: 32, background: "var(--cta)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <span style={{ color: "white", fontWeight: 900, fontSize: 11 }}>BR</span>
        </div>
        <div>
          <p style={{ color: "white", fontWeight: 900, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.05em" }}>BuildRadar</p>
          <p style={{ color: "var(--arch-grey)", fontSize: 11 }}>Early construction intelligence</p>
        </div>
      </div>

      <div style={{ maxWidth: 520, margin: "0 auto", padding: "32px 16px" }}>

        {/* Context strip — explains why they're here */}
        <div style={{
          background: "rgba(240,180,41,0.08)",
          border: "1px solid rgba(240,180,41,0.25)",
          borderRadius: 10,
          padding: "10px 14px",
          marginBottom: 24,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}>
          <span style={{ fontSize: 16 }}>📬</span>
          <p style={{ fontSize: 13, color: "var(--arch-grey)", lineHeight: 1.4 }}>
            You got our email. This is{" "}
            <span style={{ color: "white", fontWeight: 700 }}>exactly what you&apos;d receive</span>
            {" "}every Friday — real jobs, your trade, your area.
          </p>
        </div>

        {/* Headline */}
        <div style={{ marginBottom: 28 }}>
          <h1 style={{
            fontSize: 26,
            fontWeight: 900,
            color: "white",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            marginBottom: 10,
            textTransform: "uppercase",
          }}>
            {cfg.headline}
          </h1>
          <p style={{ fontSize: 14, color: "var(--arch-grey)", lineHeight: 1.6 }}>
            {cfg.subline}
          </p>
        </div>

        {/* This week stat */}
        <div style={{
          background: "rgba(240,180,41,0.06)",
          border: "1px solid rgba(240,180,41,0.2)",
          borderRadius: 10,
          padding: "14px 16px",
          marginBottom: 24,
        }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: "var(--cta)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>
            This week · Wandsworth
          </p>
          <p style={{ fontSize: 18, fontWeight: 800, color: "white", marginBottom: 8 }}>{cfg.stat}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 12px" }}>
            {cfg.statBreakdown.map((s) => (
              <span key={s} style={{ fontSize: 12, color: "var(--arch-grey)" }}>✓ {s}</span>
            ))}
          </div>
        </div>

        {/* Sample leads */}
        <div style={{ marginBottom: 28 }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: "var(--arch-grey)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>
            Sample leads · {cfg.displayName}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {cfg.sampleLeads.map((lead, i) => (
              <div key={i} style={{
                background: i === 0 ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)",
                border: i === 0 ? "1px solid rgba(240,180,41,0.35)" : "1px solid rgba(255,255,255,0.07)",
                borderLeft: i === 0 ? "4px solid var(--cta)" : "4px solid rgba(255,255,255,0.1)",
                borderRadius: 10,
                padding: "14px 14px",
                position: "relative",
              }}>
                {i === 0 && (
                  <span style={{
                    position: "absolute", top: 10, right: 12,
                    fontSize: 10, fontWeight: 700, color: "var(--cta)",
                    textTransform: "uppercase", letterSpacing: "0.06em",
                    background: "rgba(240,180,41,0.12)",
                    border: "1px solid rgba(240,180,41,0.3)",
                    borderRadius: 6, padding: "2px 7px",
                  }}>
                    Example
                  </span>
                )}
                <p style={{ fontSize: 14, fontWeight: 700, color: "white", marginBottom: 4 }}>{lead.jobType}</p>
                <p style={{ fontSize: 12, color: "var(--cta)", fontWeight: 600, marginBottom: 4 }}>{lead.area}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 4 }}>
                  <span style={{ fontSize: 12, color: "#10B981", fontWeight: 600 }}>{lead.estValue}</span>
                  <span style={{ fontSize: 11, color: "var(--arch-grey)" }}>🟢 {lead.status}</span>
                </div>
                <p style={{ fontSize: 11, color: "var(--arch-grey)", marginTop: 6, lineHeight: 1.4 }}>{lead.detail}</p>
                {i === 0 && (
                  <p style={{ fontSize: 11, color: "var(--arch-grey)", marginTop: 8, fontStyle: "italic" }}>
                    Full address, contact detail, and door-knock script included when you claim.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Why it matters */}
        <div style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 10,
          padding: "16px",
          marginBottom: 28,
        }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: "var(--arch-grey)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>
            Why it works
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {cfg.whyItMatters.map((point, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <span style={{ color: "var(--cta)", fontWeight: 900, fontSize: 14, flexShrink: 0, marginTop: 1 }}>→</span>
                <p style={{ fontSize: 13, color: "white", lineHeight: 1.5 }}>{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How it works — 3 steps (before CTA so builder knows what they're signing up for) */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.07)",
          paddingTop: 20,
          marginBottom: 28,
        }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: "var(--arch-grey)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 14 }}>
            How it works
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { n: "1", label: "Every Friday morning", desc: "You get a data drop: addresses of approved projects in your area — your trade only." },
              { n: "2", label: "Claim the ones you want", desc: "Pick which jobs to pursue. Full address + door-knock script released on claim." },
              { n: "3", label: "Get there first", desc: "Post the letter, knock on day 3, follow up on day 7. The job goes to the builder who shows up first." },
            ].map((step) => (
              <div key={step.n} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <div style={{
                  width: 28, height: 28, background: "var(--cta)", borderRadius: 8,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0, fontSize: 13, fontWeight: 900, color: "white",
                }}>
                  {step.n}
                </div>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "white", marginBottom: 2 }}>{step.label}</p>
                  <p style={{ fontSize: 12, color: "var(--arch-grey)", lineHeight: 1.5 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Primary CTA */}
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <Link
            href={signupUrl}
            className="button-claim"
            style={{
              display: "block",
              width: "100%",
              padding: "18px 16px",
              borderRadius: 12,
              fontSize: 15,
              textAlign: "center",
              textDecoration: "none",
            }}
          >
            {cfg.ctaText} — free first month →
          </Link>
          <p style={{ fontSize: 11, color: "var(--arch-grey)", marginTop: 10, textTransform: "uppercase", letterSpacing: "0.08em" }}>
            {cfg.urgency} · No card · Cancel anytime
          </p>
        </div>

      </div>
    </main>
  )
}
