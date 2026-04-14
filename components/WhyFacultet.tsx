import FadeUp from "./FadeUp";

const Check = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const X = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const rows = [
  {
    label: "Price",
    c1: "€500–1,500/yr",
    c2: "€0 – €500",
    c3: "€125/mo",
    c3big: true,
  },
  {
    label: "AIMA renewal documents",
    c1: <><Check /><span style={{ color: "#94A3B8", fontSize: 9, textAlign: "center" as const }}>docs only</span></>,
    c2: <span style={{ color: "#CBD5E1", fontSize: 16, fontWeight: 600 }}>—</span>,
    c3: <Check />,
  },
  {
    label: "Real professional education",
    c1: <X />, c2: <X />, c3: <Check />,
  },
  {
    label: "DGERT certification",
    c1: <X />, c2: <X />, c3: <Check />,
  },
  {
    label: "Career services",
    c1: <X />, c2: <X />, c3: <Check />,
  },
  {
    label: "Student community",
    c1: <X />,
    c2: <span style={{ color: "#94A3B8", fontSize: 10, textAlign: "center" as const }}>Forums only</span>,
    c3: <Check />,
  },
];

export default function WhyFacultet() {
  return (
    <section className="bg-white">
      {/* ── Mobile ── */}
      <div className="md:hidden" style={{ padding: "60px 20px" }}>
        <FadeUp>
          <div className="flex flex-col items-center gap-2.5 mb-8">
            <h2 style={{ color: "#1E293B", fontSize: 28, fontWeight: 800, letterSpacing: -0.5, textAlign: "center", lineHeight: 1.2 }}>
              What do you get?<br />Compare Your Options
            </h2>
            <p style={{ color: "#64748B", fontSize: 15, textAlign: "center" }}>
              See how we stack up against the alternatives
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.05}>
          <div
            style={{
              borderRadius: 16,
              border: "1px solid #E2E8F0",
              overflow: "hidden",
              boxShadow: "0 8px 24px #0000000A",
            }}
          >
            {/* Header row */}
            <div className="flex" style={{ background: "#F8FAFC", borderBottom: "1px solid #E2E8F0", height: 79 }}>
              <div style={{ flex: 1, padding: 12 }} />
              <div
                className="flex flex-col items-center justify-center gap-1"
                style={{ width: 65, padding: "12px 8px", borderLeft: "1px solid #E2E8F0" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                <span style={{ color: "#64748B", fontSize: 10, fontWeight: 600, textAlign: "center", width: 52 }}>Formal enrolment</span>
              </div>
              <div
                className="flex flex-col items-center justify-center gap-1"
                style={{ width: 65, padding: "12px 8px", borderLeft: "1px solid #E2E8F0" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <polygon points="8 21 12 17 16 21" />
                </svg>
                <span style={{ color: "#64748B", fontSize: 10, fontWeight: 600, textAlign: "center", width: 49 }}>Online Courses</span>
              </div>
              <div
                className="flex flex-col items-center justify-center gap-1"
                style={{
                  width: 80, padding: "10px 4px",
                  borderLeft: "3px solid #E85D2630",
                  borderBottom: "1px solid #E85D2630",
                  background: "#FFF3ED",
                  borderTopRightRadius: 16,
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E85D26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
                <span style={{ color: "#E85D26", fontSize: 10, fontWeight: 700, textAlign: "center", width: 83, whiteSpace: "pre-line" }}>{"Facultet\nSchool"}</span>
                <span style={{ background: "#E85D26", color: "white", fontSize: 8, fontWeight: 700, padding: "2px 6px", borderRadius: 8 }}>Best</span>
              </div>
            </div>

            {/* Data rows */}
            {rows.map((row, i) => {
              const bg = i % 2 === 1 ? "#FAFBFC" : "#FFFFFF";
              const h = typeof row.c1 === "string" ? 54 : 62;
              return (
                <div key={i} className="flex" style={{ background: bg, borderBottom: i < rows.length - 1 ? "1px solid #F1F5F9" : undefined, minHeight: h }}>
                  <div className="flex items-center" style={{ flex: 1, padding: "12px 10px" }}>
                    <span style={{ color: "#1E293B", fontSize: 12, fontWeight: 600 }}>{row.label}</span>
                  </div>
                  <div className="flex items-center justify-center" style={{ width: 65, padding: "14px 8px", borderLeft: "1px solid #E2E8F0", minHeight: h }}>
                    {typeof row.c1 === "string" ? (
                      <span style={{ color: "#64748B", fontSize: 11, textAlign: "center", width: 49 }}>{row.c1}</span>
                    ) : (
                      <div className="flex flex-col items-center gap-0.5">{row.c1}</div>
                    )}
                  </div>
                  <div className="flex items-center justify-center" style={{ width: 65, padding: "14px 8px", borderLeft: "1px solid #E2E8F0", minHeight: h }}>
                    {typeof row.c2 === "string" ? (
                      <span style={{ color: "#64748B", fontSize: 11, textAlign: "center", width: 49 }}>{row.c2}</span>
                    ) : (
                      <div className="flex flex-col items-center gap-0.5">{row.c2}</div>
                    )}
                  </div>
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width: 80, padding: "14px 8px",
                      borderLeft: "3px solid #E85D2630",
                      borderBottom: i < rows.length - 1 ? "1px solid #E85D2630" : undefined,
                      background: "#FFF3ED",
                      minHeight: h,
                    }}
                  >
                    {row.c3big ? (
                      <span style={{ color: "#E85D26", fontSize: 12, fontWeight: 700, textAlign: "center", width: 64 }}>{row.c3 as string}</span>
                    ) : (
                      <div className="flex items-center justify-center">{row.c3}</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div style={{ marginTop: 20 }}>
            <div
              className="flex items-center gap-2"
              style={{
                background: "#F8FAFC", border: "1px solid #E2E8F0",
                borderRadius: 12, padding: "14px 16px", marginBottom: 12,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <p style={{ color: "#64748B", fontSize: 13, fontWeight: 500 }}>
                Formal enrolment gives you the paper. Facultet gives you the paper — and the career to back it up.
              </p>
            </div>
            <button
              style={{
                width: "100%", padding: "16px 24px", borderRadius: 14,
                background: "linear-gradient(90deg, #E85D26 0%, #F97316 100%)",
                boxShadow: "0 8px 24px #E85D2640",
                color: "white", fontSize: 15, fontWeight: 700,
                border: "none", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              }}
            >
              Book a Free Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
            <p style={{ color: "#94A3B8", fontSize: 12, textAlign: "center", marginTop: 8 }}>
              No commitment required · Response within 1 business day
            </p>
          </div>
        </FadeUp>
      </div>

      {/* ── Desktop ── */}
      <div className="hidden md:block" style={{ padding: 160 }}>
        <FadeUp>
          <div className="flex flex-col items-center gap-3 mb-10">
            <h2 style={{ color: "#1E293B", fontSize: 40, fontWeight: 800, letterSpacing: -1, textAlign: "center" }}>
              What do you get?{"\n"}Compare Your Options
            </h2>
            <p style={{ color: "#64748B", fontSize: 18, textAlign: "center" }}>
              See how we stack up against the alternatives
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.05}>
          <div
            style={{
              borderRadius: 20, border: "1px solid #E2E8F0",
              overflow: "hidden", boxShadow: "0 12px 40px #0000000A",
              maxWidth: 1000, margin: "0 auto",
            }}
          >
            {/* Header */}
            <div className="flex" style={{ background: "#F8FAFC", borderBottom: "1px solid #E2E8F0", height: 80 }}>
              <div style={{ width: 360, padding: "18px 24px" }} />
              <div
                className="flex flex-col items-center justify-center gap-1"
                style={{ width: 200, padding: "18px 24px" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
                </svg>
                <span style={{ color: "#64748B", fontSize: 13, fontWeight: 600, textAlign: "center" }}>Formal enrolment</span>
              </div>
              <div
                className="flex flex-col items-center justify-center gap-1"
                style={{ width: 200, padding: "18px 24px" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><polygon points="8 21 12 17 16 21" />
                </svg>
                <span style={{ color: "#64748B", fontSize: 13, fontWeight: 600, textAlign: "center" }}>Online Courses</span>
              </div>
              <div
                className="flex flex-col items-center justify-center gap-1"
                style={{
                  width: 240,
                  borderLeft: "3px solid #E85D2630",
                  borderBottom: "1px solid #E85D2630",
                  borderTopRightRadius: 16,
                  background: "#FFF3ED",
                  padding: "18px 24px",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E85D26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
                <span style={{ color: "#E85D26", fontSize: 13, fontWeight: 700, textAlign: "center" }}>Facultet School</span>
                <span style={{ background: "#E85D26", color: "white", fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 8 }}>Best</span>
              </div>
            </div>

            {/* Desktop data rows */}
            {rows.map((row, i) => {
              const bg = i % 2 === 1 ? "#FAFBFC" : "#FFFFFF";
              const h = typeof row.c1 === "string" ? 49 : 70;
              return (
                <div key={i} className="flex items-stretch" style={{ background: bg, borderBottom: i < rows.length - 1 ? "1px solid #F1F5F9" : undefined, minHeight: h }}>
                  <div className="flex items-center" style={{ width: 360, padding: "14px 24px" }}>
                    <span style={{ color: "#1E293B", fontSize: 14, fontWeight: 600 }}>{row.label}</span>
                  </div>
                  <div className="flex items-center justify-center" style={{ width: 200, padding: "14px 24px" }}>
                    {typeof row.c1 === "string" ? (
                      <span style={{ color: "#64748B", fontSize: 14, textAlign: "center" }}>{row.c1}</span>
                    ) : (
                      <div className="flex flex-col items-center gap-1">{row.c1}</div>
                    )}
                  </div>
                  <div className="flex items-center justify-center" style={{ width: 200, padding: "14px 24px" }}>
                    {typeof row.c2 === "string" ? (
                      <span style={{ color: "#64748B", fontSize: 14, textAlign: "center" }}>{row.c2}</span>
                    ) : (
                      <div className="flex flex-col items-center gap-1">{row.c2}</div>
                    )}
                  </div>
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width: 240,
                      borderLeft: "3px solid #E85D2630",
                      borderBottom: i < rows.length - 1 ? "1px solid #E85D2630" : undefined,
                      background: "#FFF3ED",
                    }}
                  >
                    {row.c3big ? (
                      <span style={{ color: "#E85D26", fontSize: 14, fontWeight: 700 }}>{row.c3 as string}</span>
                    ) : (
                      <div className="flex flex-col items-center gap-1">{row.c3}</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div style={{ maxWidth: 1000, margin: "24px auto 0" }}>
            <div
              className="flex items-start gap-3"
              style={{
                background: "#F8FAFC", border: "1px solid #E2E8F0",
                borderRadius: 14, padding: "16px 28px", marginBottom: 24,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <p style={{ color: "#64748B", fontSize: 14, fontWeight: 500 }}>
                Formal enrolment gives you the paper. Facultet gives you the paper — and the career to back it up.
              </p>
            </div>
            <div className="flex items-center justify-center gap-4">
              <button
                style={{
                  padding: "16px 40px", borderRadius: 14,
                  background: "linear-gradient(90deg, #E85D26 0%, #F97316 100%)",
                  boxShadow: "0 8px 24px #E85D2640",
                  color: "white", fontSize: 16, fontWeight: 700,
                  border: "none", cursor: "pointer",
                  display: "flex", alignItems: "center", gap: 8,
                }}
              >
                Book a Free Consultation
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
