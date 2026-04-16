"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const legalItems = [
  "Student Residence Permit — renewed annually",
  "AIMA renewal documents — ready in 5 business days",
  "Legal student status — every year, without gaps",
  "Building towards permanent residency",
];

const careerItems = [
  "DGERT-recognised certificate",
  "Real portfolio — not just theory",
  "Evening schedule — study while you work",
  "Career support after graduation",
];

function AnimatedCheck({ color, delay = 0, trigger }: { color: string; delay?: number; trigger: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
         stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
         className="flex-shrink-0 mt-0.5" style={{ minWidth: 18 }}>
      <motion.polyline
        points="20 6 9 17 4 12"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={trigger ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 0.45, delay, ease }}
      />
    </svg>
  );
}

const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EF4444"
       strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

// Count DOWN from `from` to `to`:
// Phase 1 (0–55% time): fast, covers 450→131
// Phase 2 (55–100% time): slow crawl 131→125, each digit clearly visible
function useCountDown(from: number, to: number, duration: number, active: boolean) {
  const [n, setN] = useState(from);
  useEffect(() => {
    if (!active) return;
    const range = from - to;          // 325
    const slowStart = to + 6;         // 131 — slow phase begins here
    const fastShare = (from - slowStart) / range; // 0.9815…
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      let eased: number;
      if (p < 0.55) {
        // Fast: linear-ish, covers 0 → fastShare
        eased = (p / 0.55) * fastShare;
      } else {
        // Slow: cubic ease-out over last 45% of time, covers fastShare → 1
        const q = (p - 0.55) / 0.45;
        eased = fastShare + (1 - Math.pow(1 - q, 3)) * (1 - fastShare);
      }
      setN(Math.round(from - eased * range));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, from, to, duration]);
  return n;
}

function Checklist({ items, color, trigger }: { items: string[]; color: string; trigger: boolean }) {
  return (
    // C) gap-3.5, fontSize 15px
    <ul className="flex flex-col gap-3.5">
      {items.map((item, i) => (
        <motion.li
          key={item}
          className="flex items-start gap-2.5"
          initial={{ opacity: 0, x: -8 }}
          animate={trigger ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.08 + i * 0.07, duration: 0.35, ease }}
        >
          <AnimatedCheck color={color} delay={0.15 + i * 0.07} trigger={trigger} />
          <span className="text-[#374151] leading-snug" style={{ fontSize: 15 }}>{item}</span>
        </motion.li>
      ))}
    </ul>
  );
}

export default function DoubleValue() {
  const sectionRef  = useRef<HTMLElement>(null);
  const tableRef    = useRef<HTMLDivElement>(null);
  const inView      = useInView(sectionRef,  { once: true, margin: "-8%" });
  const tableInView = useInView(tableRef,    { once: true, margin: "-80px" });
  const price       = useCountDown(450, 125, 3200, tableInView);
  const [tab, setTab] = useState<"legal" | "career">("legal");
  const [prevTab, setPrevTab] = useState<"legal" | "career">("legal");
  const tabOrder = { legal: 0, career: 1 };
  const dir = tabOrder[tab] > tabOrder[prevTab] ? 1 : -1;

  const switchTab = (t: "legal" | "career") => {
    if (t === tab) return;
    setPrevTab(tab);
    setTab(t);
  };

  const si = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.5, ease, delay },
  });

  return (
    <section ref={sectionRef} id="double-value" className="bg-[#F8FAFC] py-10 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[160px]">

        {/* Header */}
        <motion.div {...si(0)} className="text-center mb-6">
          <p className="text-accent font-bold uppercase mb-4" style={{ fontSize: 10, letterSpacing: 2 }}>
            WHY FACULTET
          </p>
          <h2 className="text-[#1E293B] text-[22px] lg:text-[36px] font-bold leading-[1.2] max-w-2xl mx-auto">
            One decision.<br className="sm:hidden" /> Two problems solved.
          </h2>
          <p className="text-[#64748B] mt-4 max-w-xl mx-auto leading-relaxed" style={{ fontSize: 14, lineHeight: 1.6 }}>
            No formal enrolment gives you a career. No online course helps you keep your status. We do both — in one evening programme.
          </p>
        </motion.div>

        {/* ── MOBILE: Tab switcher ── */}
        <motion.div {...si(0.1)} className="lg:hidden mb-6">

          {/* Tab bar */}
          <div className="relative flex rounded-xl p-1 mb-4" style={{ background: "#E8EDF2" }}>
            {(["legal", "career"] as const).map((t) => (
              <button
                key={t}
                onClick={() => switchTab(t)}
                className="relative flex-1 py-2.5 z-10 font-semibold"
                style={{
                  fontSize: 13,
                  // ② Active tab label color matching card
                  color: tab === t
                    ? (t === "legal" ? "#E85D26" : "#16A34A")
                    : "#64748B",
                  transition: "color 0.2s ease",
                }}
              >
                {t === "legal" ? "Legal Status" : "Marketable Career"}
                {tab === t && (
                  <motion.div
                    layoutId="tabIndicator"
                    className="absolute inset-0 rounded-lg bg-white shadow-sm"
                    style={{ zIndex: -1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={tab}
              custom={dir}
              // ① Slide direction based on tab order
              initial={{ opacity: 0, x: dir * 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -24 }}
              transition={{ duration: 0.22, ease }}
              className="rounded-2xl p-6"
              style={{ background: tab === "legal" ? "#FFF4EE" : "#EDFAF3" }}
            >
              <div className="flex items-center gap-3 mb-5">
                {/* B) Icon 56→44 on mobile */}
                <div className="flex items-center justify-center flex-shrink-0"
                     style={{ width: 44, height: 44, borderRadius: 22,
                              background: tab === "legal" ? "#FFF1EC" : "#D0ECE3",
                              border: tab === "legal" ? "1.5px solid rgba(232,93,38,0.4)" : "1.5px solid rgba(22,163,74,0.4)" }}>
                  {tab === "legal" ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="#E85D26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      <polyline points="9 12 11 14 15 10"/>
                    </svg>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                      <polyline points="17 6 23 6 23 12"/>
                    </svg>
                  )}
                </div>
                <h3 className="font-bold" style={{ fontSize: 18, color: tab === "legal" ? "#E85D26" : "#16A34A" }}>
                  {tab === "legal" ? "Legal student status" : "Marketable profession"}
                </h3>
              </div>
              {/* trigger=true: content just mounted, animate immediately */}
              <Checklist
                items={tab === "legal" ? legalItems : careerItems}
                color="#16A34A"
                trigger={true}
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* ── DESKTOP: two-column grid ── */}
        <motion.div {...si(0.1)} className="hidden lg:grid grid-cols-2 gap-4 mb-6">
          {[
            { bg: "#FFF4EE", iconBg: "#FFF1EC", color: "#E85D26", title: "Legal student status", items: legalItems,
              icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E85D26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>
              </svg> },
            { bg: "#EDFAF3", iconBg: "#D0ECE3", color: "#16A34A", title: "Marketable profession", items: careerItems,
              icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
              </svg> },
          ].map(({ bg, iconBg, color, title, items, icon }) => (
            <div key={title} className="rounded-2xl p-6" style={{ background: bg }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center flex-shrink-0"
                     style={{ width: 56, height: 56, borderRadius: 28, background: iconBg,
                              border: `1.5px solid ${color}66` }}>
                  {icon}
                </div>
                <h3 className="font-bold" style={{ fontSize: 18, color }}>{title}</h3>
              </div>
              <Checklist items={items} color="#16A34A" trigger={inView} />
            </div>
          ))}
        </motion.div>

        {/* Comparison table */}
        <motion.div {...si(0.18)}>
          <div ref={tableRef} className="rounded-2xl overflow-hidden" style={{ background: "#1A1A2E" }}>

            {/* Row 1 */}
            <motion.div
              className="flex items-start justify-between px-5 py-5"
              initial={{ opacity: 0, x: -16 }}
              animate={tableInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, ease, delay: 0 }}
            >
              <div>
                <p className="text-[#94A3B8] font-medium mb-1" style={{ fontSize: 11 }}>Formal enrolment elsewhere</p>
                <p className="text-white/50 font-bold leading-tight mb-1" style={{ fontSize: 16 }}>Renewal docs only</p>
                <p className="text-[#87898C]" style={{ fontSize: 12 }}>No career support, no education</p>
              </div>
              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-4 mt-1"
                   style={{ background: "rgba(239,68,68,0.18)" }}>
                <XIcon />
              </div>
            </motion.div>

            <div className="h-px mx-5" style={{ background: "rgba(255,255,255,0.07)" }} />

            {/* Row 2 */}
            <motion.div
              className="flex items-start justify-between px-5 py-5"
              initial={{ opacity: 0, x: -16 }}
              animate={tableInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, ease, delay: 0.1 }}
            >
              <div>
                <p className="text-[#94A3B8] font-medium mb-1" style={{ fontSize: 11 }}>Immigration lawyer</p>
                <p className="text-white/50 font-bold leading-tight mb-1" style={{ fontSize: 16 }}>€1,000–3,000</p>
                <p className="text-[#87898C]" style={{ fontSize: 12 }}>Legal help only, no education</p>
              </div>
              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-4 mt-1"
                   style={{ background: "rgba(239,68,68,0.18)" }}>
                <XIcon />
              </div>
            </motion.div>

            {/* Row 3 — Facultet (scale-up + ③ glow) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={tableInView ? {
                opacity: 1, scale: 1,
                boxShadow: ["0 0 0px rgba(22,163,74,0)", "0 0 24px rgba(22,163,74,0.4)", "0 0 0px rgba(22,163,74,0)"],
              } : {}}
              transition={{ duration: 0.5, ease, delay: 0.2,
                boxShadow: { duration: 1.2, delay: 0.5, ease: "easeOut" } }}
            >
              <div className="flex items-center justify-between px-5 py-3" style={{ background: "#16A34A" }}>
                <p className="text-white font-bold text-sm">Facultet School</p>
                <span className="text-white text-[11px] font-bold px-3 py-1 rounded-full"
                      style={{ background: "rgba(255,255,255,0.2)" }}>Best Value</span>
              </div>
              <div className="px-5 py-5" style={{ background: "#EEF2F7" }}>
                <p className="text-[#1E293B] font-extrabold leading-tight mb-1" style={{ fontSize: 28 }}>
                  from €{price}/month
                </p>
                <p className="text-[#64748B] text-sm">Renewal docs + real education. Both.</p>
              </div>
            </motion.div>

          </div>
        </motion.div>

        {/* CTA — gradient + shimmer */}
        <motion.div {...si(0.28)} className="mt-6">
          <motion.a
            href="#consult"
            className="relative flex items-center justify-center w-full text-white font-bold rounded-xl overflow-hidden"
            style={{ background: "linear-gradient(135deg, #F05A1A 0%, #E85D26 55%, #F5793A 100%)", height: 52, fontSize: 16 }}
            animate={{ boxShadow: ["0 4px 12px rgba(232,93,38,0.25)", "0 6px 28px rgba(232,93,38,0.55)", "0 4px 12px rgba(232,93,38,0.25)"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.span
              className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(105deg, transparent 38%, rgba(255,255,255,0.22) 50%, transparent 62%)" }}
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 3.2, ease: "easeInOut" }}
            />
            <span className="relative z-10">Get Free Consultation →</span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
