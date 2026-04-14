"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const pains = [
  {
    cardBg: "rgba(255,255,255,0.07)",
    pulse: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E85D26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    title: "My student permit expires in 2 months. I don't know where to start.",
    body: "AIMA appointments take weeks to book. My documents need to be ready now — and I don't know exactly what AIMA requires. If I miss the deadline, I lose everything I built here.",
  },
  {
    cardBg: "rgba(255,255,255,0.10)",
    pulse: false,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E85D26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
      </svg>
    ),
    title: "I've sent 80 CVs. Two replies. Both: no.",
    body: "They want European experience. I have 7 years of experience — just not from here. My diploma is worthless. I need something that opens doors in Portugal.",
  },
  {
    cardBg: "rgba(255,255,255,0.15)",
    pulse: false,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E85D26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    title: "I'm floating. Status shaky. Career stalled. Nothing is moving.",
    body: "I didn't come to Portugal to be stuck. Every month without a plan costs me money, status, and momentum. I need one decision that fixes both.",
  },
];

const statTargets = [
  { target: 100, suffix: "%", label: "AIMA documents accepted" },
  { target: 5,   suffix: "",  label: "Business days to receive docs" },
  { target: 423, suffix: "",  label: "Students supported" },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target, duration]);
  return count;
}

function StatItem({ target, suffix, label, active }: { target: number; suffix: string; label: string; active: boolean }) {
  const n = useCountUp(target, 1400, active);
  return (
    <div className="flex flex-col items-center gap-1 flex-1">
      <span className="text-[#E86339] font-bold leading-none" style={{ fontSize: 26 }}>
        {n}{suffix}
      </span>
      <span className="text-[#94A3B8] text-xs text-center leading-tight mt-1">{label}</span>
    </div>
  );
}

export default function PainAgitation() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef   = useRef<HTMLDivElement>(null);
  const inView      = useInView(sectionRef, { once: true, margin: "-8%" });
  const statsInView = useInView(statsRef,   { once: true, margin: "-15%" });
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section
      ref={sectionRef}
      className="py-10 lg:py-[80px]"
      style={{ background: "linear-gradient(180deg, #1E293B 0%, #2A1F1A 100%)" }}
    >
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[160px]">

        {/* Heading */}
        <motion.div
          className="text-center mb-8 lg:mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease }}
        >
          <h2 className="text-white text-[22px] lg:text-[40px] font-bold leading-[1.2]">
            Does this sound familiar?
          </h2>
        </motion.div>

        {/* Pain cards — staggered + accordion */}
        <div className="flex flex-col gap-3 max-w-[760px] mx-auto">
          {pains.map(({ cardBg, pulse, icon, title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease, delay: i * 0.12 }}
            >
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="w-full text-left rounded-[14px]"
                style={{
                  background: cardBg,
                  border: "1px solid rgba(255,255,255,0.10)",
                  borderLeft: "3px solid rgba(96,165,250,0.6)",
                  padding: 20,
                  display: "block",
                }}
              >
                <div className="flex items-start gap-4">
                  {/* Icon + optional pulsing dot */}
                  <div className="relative flex-shrink-0">
                    <div
                      className="w-11 h-11 rounded-[10px] flex items-center justify-center"
                      style={{ background: "rgba(232,93,38,0.18)" }}
                    >
                      {icon}
                    </div>
                    {pulse && (
                      <>
                        <span
                          className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full"
                          style={{ background: "#E85D26" }}
                        />
                        <motion.span
                          className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full"
                          style={{ background: "#E85D26" }}
                          animate={{ scale: [1, 2.5], opacity: [0.7, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                        />
                      </>
                    )}
                  </div>

                  {/* Title + chevron */}
                  <div className="flex-1 flex items-start justify-between gap-2">
                    <h3 className="text-white font-semibold leading-snug" style={{ fontSize: 15 }}>
                      {title}
                    </h3>
                    <motion.svg
                      width="16" height="16" viewBox="0 0 24 24" fill="none"
                      stroke="rgba(255,255,255,0.35)" strokeWidth="2.5"
                      strokeLinecap="round" strokeLinejoin="round"
                      className="flex-shrink-0 mt-0.5"
                      animate={{ rotate: expanded === i ? 180 : 0 }}
                      transition={{ duration: 0.22 }}
                    >
                      <polyline points="6 9 12 15 18 9"/>
                    </motion.svg>
                  </div>
                </div>

                {/* Accordion body */}
                <AnimatePresence initial={false}>
                  {expanded === i && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.26, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <p
                        className="text-white/50 leading-relaxed"
                        style={{ fontSize: 13, marginTop: 10, paddingLeft: 52 }}
                      >
                        {body}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="flex justify-center mt-8 lg:mt-10"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease, delay: 0.44 }}
        >
          <a
            href="#double-value"
            className="flex items-center justify-center gap-2 w-full lg:w-auto bg-accent hover:bg-accent-hover text-white font-medium px-8 py-4 rounded-full transition-all shadow-[0_4px_20px_rgba(232,93,38,0.35)] text-[13px] lg:text-sm whitespace-nowrap"
          >
            Facultet solves all three. Here&apos;s how
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </motion.div>

        {/* Stats — count-up on scroll */}
        <div
          ref={statsRef}
          className="max-w-[760px] mx-auto mt-8 lg:mt-10 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.10)" }}
        >
          <motion.div
            className="flex items-center justify-between"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.52 }}
          >
            {statTargets.flatMap(({ target, suffix, label }, i) => [
              <StatItem key={`s${i}`} target={target} suffix={suffix} label={label} active={statsInView} />,
              ...(i < statTargets.length - 1
                ? [<div key={`d${i}`} className="w-px h-9 flex-shrink-0" style={{ background: "#334155" }} />]
                : []),
            ])}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
