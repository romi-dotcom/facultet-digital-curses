"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import FadeUp from "./FadeUp";

// ── Animated check via CSS (avoids framer-motion SVG TS quirks) ─────────────

const AnimatedCheck = ({ delay, inView }: { delay: number; inView: boolean }) => (
  <svg
    width="16" height="16" viewBox="0 0 24 24" fill="none"
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
  >
    <path
      d="M20 6 L9 17 L4 12"
      stroke="#22C55E"
      fill="none"
      style={{
        strokeDasharray: 30,
        strokeDashoffset: inView ? 0 : 30,
        opacity: inView ? 1 : 0,
        transition: `stroke-dashoffset 0.45s ease-out ${delay}s, opacity 0.2s ease ${delay}s`,
      }}
    />
  </svg>
);

const StaticCheck = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

// ── Price counter (rAF) ─────────────────────────────────────────────────────

function usePriceCounter(inView: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf: number;
    let start: number | null = null;
    const duration = 1500;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.round(eased * 125));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView]);
  return val;
}

// ── Row data ────────────────────────────────────────────────────────────────

type CellKind = "text" | "check" | "check-docs" | "x" | "dash" | "forums" | "price";
interface RowDef { label: string; c1: CellKind; c1t?: string; c2: CellKind; c2t?: string; c3: CellKind }

const rowDefs: RowDef[] = [
  { label: "Price",                       c1: "text",       c1t: "€500–1,500/yr", c2: "text",    c2t: "€0 – €500", c3: "price"  },
  { label: "AIMA renewal documents",      c1: "check-docs",                        c2: "dash",                       c3: "check"  },
  { label: "Real professional education", c1: "x",                                 c2: "x",                          c3: "check"  },
  { label: "DGERT certification",         c1: "x",                                 c2: "x",                          c3: "check"  },
  { label: "Career services",             c1: "x",                                 c2: "x",                          c3: "check"  },
  { label: "Student community",           c1: "x",                                 c2: "forums",                     c3: "check"  },
];

// ── Cell renderers ──────────────────────────────────────────────────────────

interface MobileCellProps {
  kind: CellKind; text?: string; isFacultet?: boolean;
  rowDelay: number; tableInView: boolean; price: number;
}

function MobileCell({ kind, text, rowDelay, tableInView, price }: MobileCellProps) {
  const checkDelay = rowDelay + 0.25;
  switch (kind) {
    case "text":       return <span style={{ color: "#64748B", fontSize: 11, textAlign: "center", display: "block", width: 49 }}>{text}</span>;
    case "price":      return <span style={{ color: "#E85D26", fontSize: 12, fontWeight: 700, textAlign: "center", display: "block", width: 64 }}>€{price}/mo</span>;
    case "check":      return <AnimatedCheck delay={checkDelay} inView={tableInView} />;
    case "check-docs": return (
      <div className="flex flex-col items-center gap-0.5">
        <AnimatedCheck delay={checkDelay} inView={tableInView} />
        <span style={{ color: "#94A3B8", fontSize: 9, textAlign: "center" }}>docs only</span>
      </div>
    );
    case "dash":       return <span style={{ color: "#CBD5E1", fontSize: 16, fontWeight: 600 }}>—</span>;
    case "forums":     return <span style={{ color: "#94A3B8", fontSize: 10, textAlign: "center" }}>Forums only</span>;
    case "x":          return <XIcon />;
    default:           return null;
  }
}

function DesktopCell({ kind, text }: { kind: CellKind; text?: string }) {
  switch (kind) {
    case "text":       return <span style={{ color: "#64748B", fontSize: 14, textAlign: "center" }}>{text}</span>;
    case "price":      return <span style={{ color: "#E85D26", fontSize: 14, fontWeight: 700 }}>€125/mo</span>;
    case "check":      return <StaticCheck />;
    case "check-docs": return (
      <div className="flex flex-col items-center gap-1">
        <StaticCheck />
        <span style={{ color: "#94A3B8", fontSize: 9 }}>docs only</span>
      </div>
    );
    case "dash":       return <span style={{ color: "#CBD5E1", fontSize: 16, fontWeight: 600 }}>—</span>;
    case "forums":     return <span style={{ color: "#94A3B8", fontSize: 10 }}>Forums only</span>;
    case "x":          return <XIcon />;
    default:           return null;
  }
}

// ── Component ───────────────────────────────────────────────────────────────

export default function WhyFacultet() {
  const tableRef = useRef<HTMLDivElement>(null);
  const tableInView = useInView(tableRef, { once: true, margin: "-60px" });
  const price = usePriceCounter(tableInView);

  return (
    <section className="bg-white">
      <style>{`
        /* ③ Facultet column subtle glow on background */
        @keyframes facultetGlow {
          0%, 100% { background-color: #FFF3ED; }
          50%       { background-color: #FFE8D9; }
        }
        .facultet-col { animation: facultetGlow 3s ease-in-out infinite; }

        /* ⑥ CTA shimmer */
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .cta-shimmer {
          background: linear-gradient(90deg, #E85D26 0%, #F97316 38%, #FFAC6B 50%, #F97316 62%, #E85D26 100%);
          background-size: 200% auto;
          animation: shimmer 2.4s linear infinite;
        }

        /* ⑥ Arrow wiggle */
        @keyframes arrowBounce {
          0%, 100% { transform: translateX(0); }
          50%       { transform: translateX(4px); }
        }
        .arrow-bounce { animation: arrowBounce 1.2s ease-in-out infinite; }

        /* ④ "Best" badge pop */
        @keyframes badgePop {
          0%   { transform: scale(0); opacity: 0; }
          60%  { transform: scale(1.18); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .badge-pop { animation: badgePop 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.4s both; }
        .badge-hidden { opacity: 0; }
      `}</style>

      {/* ── Mobile ──────────────────────────────────────────────────────── */}
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

        {/* ① Staggered table */}
        <div ref={tableRef} style={{ borderRadius: 16, border: "1px solid #E2E8F0", overflow: "hidden", boxShadow: "0 8px 24px #0000000A" }}>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={tableInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.05 }}
            className="flex"
            style={{ background: "#F8FAFC", borderBottom: "1px solid #E2E8F0", height: 79 }}
          >
            <div style={{ flex: 1, padding: 12 }} />
            <div className="flex flex-col items-center justify-center gap-1" style={{ width: 65, padding: "12px 8px", borderLeft: "1px solid #E2E8F0" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
              </svg>
              <span style={{ color: "#64748B", fontSize: 10, fontWeight: 600, textAlign: "center", width: 52 }}>Formal enrolment</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1" style={{ width: 65, padding: "12px 8px", borderLeft: "1px solid #E2E8F0" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><polygon points="8 21 12 17 16 21" />
              </svg>
              <span style={{ color: "#64748B", fontSize: 10, fontWeight: 600, textAlign: "center", width: 49 }}>Online Courses</span>
            </div>
            {/* Facultet column header */}
            <div
              className="flex flex-col items-center justify-center gap-1 facultet-col"
              style={{ width: 80, padding: "10px 4px", borderLeft: "1px solid #E2E8F0", borderBottom: "1px solid #F1F5F9", background: "#FFF3ED", borderTopRightRadius: 16 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E85D26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
              <span style={{ color: "#E85D26", fontSize: 10, fontWeight: 700, textAlign: "center", width: 83, whiteSpace: "pre-line" }}>{"Facultet\nSchool"}</span>
              {/* ④ "Best" badge bounce */}
              <span
                className={tableInView ? "badge-pop" : "badge-hidden"}
                style={{ background: "#E85D26", color: "white", fontSize: 8, fontWeight: 700, padding: "2px 6px", borderRadius: 8, display: "inline-block" }}
              >
                Best
              </span>
            </div>
          </motion.div>

          {/* ① Data rows with stagger */}
          {rowDefs.map((row, i) => {
            const bg = i % 2 === 1 ? "#FAFBFC" : "#FFFFFF";
            const rowDelay = 0.12 + i * 0.07;
            const isLast = i === rowDefs.length - 1;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={tableInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: rowDelay }}
                className="flex"
                style={{ background: bg, borderBottom: !isLast ? "1px solid #F1F5F9" : undefined, minHeight: 54 }}
              >
                <div className="flex items-center" style={{ flex: 1, padding: "12px 10px" }}>
                  <span style={{ color: "#1E293B", fontSize: 12, fontWeight: 600 }}>{row.label}</span>
                </div>
                <div className="flex items-center justify-center" style={{ width: 65, padding: "14px 8px", borderLeft: "1px solid #E2E8F0" }}>
                  <MobileCell kind={row.c1} text={row.c1t} rowDelay={rowDelay} tableInView={tableInView} price={price} />
                </div>
                <div className="flex items-center justify-center" style={{ width: 65, padding: "14px 8px", borderLeft: "1px solid #E2E8F0" }}>
                  <MobileCell kind={row.c2} text={row.c2t} rowDelay={rowDelay} tableInView={tableInView} price={price} />
                </div>
                <div
                  className="flex items-center justify-center facultet-col"
                  style={{ width: 80, padding: "14px 8px", borderLeft: "1px solid #E2E8F0", borderBottom: !isLast ? "1px solid #F1F5F9" : undefined, background: "#FFF3ED" }}
                >
                  <MobileCell kind={row.c3} isFacultet rowDelay={rowDelay} tableInView={tableInView} price={price} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <FadeUp delay={0.1}>
          <div style={{ marginTop: 20 }}>
            <div
              className="flex items-center gap-2"
              style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 12, padding: "14px 16px", marginBottom: 12 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <p style={{ color: "#64748B", fontSize: 13, fontWeight: 500 }}>
                Formal enrolment gives you the paper. Facultet gives you the paper — and the career to back it up.
              </p>
            </div>
            {/* ⑥ CTA shimmer + arrow bounce */}
            <button
              className="cta-shimmer"
              style={{
                width: "100%", padding: "16px 24px", borderRadius: 14,
                boxShadow: "0 8px 24px #E85D2640",
                color: "white", fontSize: 15, fontWeight: 700,
                border: "none", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              }}
            >
              Book a Free Consultation
              <span className="arrow-bounce" style={{ display: "inline-flex" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </button>
            <p style={{ color: "#94A3B8", fontSize: 12, textAlign: "center", marginTop: 8 }}>
              No commitment required · Response within 1 business day
            </p>
          </div>
        </FadeUp>
      </div>

      {/* ── Desktop ─────────────────────────────────────────────────────── */}
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
          <div style={{ borderRadius: 20, border: "1px solid #E2E8F0", overflow: "hidden", boxShadow: "0 12px 40px #0000000A", maxWidth: 1000, margin: "0 auto" }}>
            <div className="flex" style={{ background: "#F8FAFC", borderBottom: "1px solid #E2E8F0", height: 80 }}>
              <div style={{ width: 360, padding: "18px 24px" }} />
              <div className="flex flex-col items-center justify-center gap-1" style={{ width: 200, padding: "18px 24px" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
                </svg>
                <span style={{ color: "#64748B", fontSize: 13, fontWeight: 600 }}>Formal enrolment</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1" style={{ width: 200, padding: "18px 24px" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><polygon points="8 21 12 17 16 21" />
                </svg>
                <span style={{ color: "#64748B", fontSize: 13, fontWeight: 600 }}>Online Courses</span>
              </div>
              <div
                className="flex flex-col items-center justify-center gap-1"
                style={{ width: 240, borderLeft: "1px solid #E2E8F0", borderBottom: "1px solid #F1F5F9", borderTopRightRadius: 16, background: "#FFF3ED", padding: "18px 24px" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E85D26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
                <span style={{ color: "#E85D26", fontSize: 13, fontWeight: 700 }}>Facultet School</span>
                <span style={{ background: "#E85D26", color: "white", fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 8 }}>Best</span>
              </div>
            </div>

            {rowDefs.map((row, i) => {
              const bg = i % 2 === 1 ? "#FAFBFC" : "#FFFFFF";
              const isLast = i === rowDefs.length - 1;
              return (
                <div key={i} className="flex items-stretch" style={{ background: bg, borderBottom: !isLast ? "1px solid #F1F5F9" : undefined, minHeight: 54 }}>
                  <div className="flex items-center" style={{ width: 360, padding: "14px 24px" }}>
                    <span style={{ color: "#1E293B", fontSize: 14, fontWeight: 600 }}>{row.label}</span>
                  </div>
                  <div className="flex items-center justify-center" style={{ width: 200, padding: "14px 24px" }}>
                    <DesktopCell kind={row.c1} text={row.c1t} />
                  </div>
                  <div className="flex items-center justify-center" style={{ width: 200, padding: "14px 24px" }}>
                    <DesktopCell kind={row.c2} text={row.c2t} />
                  </div>
                  <div className="flex items-center justify-center" style={{ width: 240, borderLeft: "1px solid #E2E8F0", borderBottom: !isLast ? "1px solid #F1F5F9" : undefined, background: "#FFF3ED" }}>
                    <DesktopCell kind={row.c3} />
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
              style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 14, padding: "16px 28px", marginBottom: 24 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <p style={{ color: "#64748B", fontSize: 14, fontWeight: 500 }}>
                Formal enrolment gives you the paper. Facultet gives you the paper — and the career to back it up.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="cta-shimmer"
                style={{
                  padding: "16px 40px", borderRadius: 14,
                  boxShadow: "0 8px 24px #E85D2640",
                  color: "white", fontSize: 16, fontWeight: 700,
                  border: "none", cursor: "pointer",
                  display: "flex", alignItems: "center", gap: 8,
                }}
              >
                Book a Free Consultation
                <span className="arrow-bounce" style={{ display: "inline-flex" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
