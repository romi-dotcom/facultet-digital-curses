"use client";

export default function CTAMobileForm() {
  return (
    <section
      className="md:hidden"
      style={{ background: "#1A1A2E", padding: "48px 20px" }}
    >
      {/* Heading — 24px, 700, white, lineHeight 1.2 */}
      <h3
        className="text-white text-center"
        style={{ fontSize: 24, fontWeight: 700, lineHeight: 1.2 }}
      >
        Ready to sort out your student permit?
      </h3>

      {/* Spacer 12px */}
      <div style={{ height: 12 }} />

      {/* Subtitle — 14px, #94A3B8, lineHeight 1.5 */}
      <p
        className="text-center"
        style={{ color: "#94A3B8", fontSize: 14, lineHeight: 1.5 }}
      >
        Fill in two fields — your coordinator will call back within 2 hours. No paperwork needed at this stage.
      </p>

      {/* Spacer 20px */}
      <div style={{ height: 20 }} />

      {/* Trust row — 13px, #CBD5E1, gap 12 */}
      <div className="flex items-center justify-center" style={{ gap: 12 }}>
        {["✓ Free", "✓ No commitment", "✓ 2h response"].map((t) => (
          <span key={t} style={{ color: "#CBD5E1", fontSize: 13 }}>{t}</span>
        ))}
      </div>

      {/* Spacer 28px */}
      <div style={{ height: 28 }} />

      {/* Form card — bg white, cornerRadius 16, padding 24 */}
      <div style={{ background: "#FFFFFF", borderRadius: 16, padding: 24 }}>
        {/* Name field */}
        <label style={{ color: "#64748B", fontSize: 12, display: "block" }}>Your name</label>
        <div style={{ height: 4 }} />
        <input
          type="text"
          placeholder="Maria Silva"
          style={{
            width: "100%",
            height: 46,
            borderRadius: 8,
            border: "1px solid #E2E8F0",
            padding: "0 16px",
            fontSize: 14,
            color: "#1E293B",
            outline: "none",
            boxSizing: "border-box",
          }}
        />

        {/* Spacer 12px */}
        <div style={{ height: 12 }} />

        {/* WhatsApp field */}
        <label style={{ color: "#64748B", fontSize: 12, display: "block" }}>WhatsApp</label>
        <div style={{ height: 4 }} />
        <input
          type="tel"
          placeholder="+351 9XX XXX XXX"
          style={{
            width: "100%",
            height: 46,
            borderRadius: 8,
            border: "1px solid #E2E8F0",
            padding: "0 16px",
            fontSize: 14,
            color: "#1E293B",
            outline: "none",
            boxSizing: "border-box",
          }}
        />

        {/* Spacer 16px */}
        <div style={{ height: 16 }} />

        {/* CTA button — bg #E86339, h 52, cornerRadius 8 */}
        <button
          style={{
            width: "100%",
            height: 52,
            background: "#E86339",
            borderRadius: 8,
            border: "none",
            color: "#FFFFFF",
            fontSize: 16,
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Book a Free Consultation →
        </button>

        {/* Spacer 10px */}
        <div style={{ height: 10 }} />

        {/* Disclaimer — 12px, #64748B */}
        <p style={{ color: "#64748B", fontSize: 12, textAlign: "center", lineHeight: 1.5 }}>
          AIMA processing times vary. We provide the documents — AIMA makes the decision.
        </p>
      </div>
    </section>
  );
}
