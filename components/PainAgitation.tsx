"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const pains = [
  {
    pulse: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
        <line x1="8" y1="14" x2="8" y2="14"/>
        <line x1="12" y1="14" x2="16" y2="14"/>
      </svg>
    ),
    title: "My student permit expires in 2 months. I don't know where to start.",
    body: "AIMA appointments take weeks to book. My documents need to be ready now — and I don't know exactly what AIMA requires. If I miss the deadline, I lose everything I built here.",
  },
  {
    pulse: false,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
        <line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    title: "I've sent 80 CVs. Two replies. Both: no.",
    body: "They want European experience. I have 7 years of experience — just not from here. My diploma is worthless. I need something that opens doors in Portugal.",
  },
  {
    pulse: false,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
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
    <div className="flex flex-col items-center gap-2">
      <span className="text-white font-bold leading-none" style={{ fontSize: 34 }}>
        {n}{suffix}
      </span>
      <span className="text-center leading-tight" style={{ fontSize: 11, color: "rgba(255,255,255,0.38)", maxWidth: 90 }}>
        {label}
      </span>
    </div>
  );
}

export default function PainAgitation() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef   = useRef<HTMLDivElement>(null);
  const inView      = useInView(sectionRef, { once: true, margin: "-8%" });
  const statsInView = useInView(statsRef,   { once: true, margin: "-15%" });

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

        {/* Pain cards — always open */}
        <div className="flex flex-col gap-3 max-w-[760px] mx-auto">
          {pains.map(({ icon, pulse, title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease, delay: i * 0.12 }}
              className="rounded-[14px]"
              style={{
                background: "rgba(255,255,255,0.06)",
                borderLeft: "3px solid rgba(255,255,255,0.2)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderLeftWidth: 3,
                borderLeftColor: "rgba(255,255,255,0.2)",
                padding: "20px 20px 22px",
              }}
            >
              {/* Icon + Title inline */}
              <div className="flex items-center gap-3 mb-2">
                <div className="relative flex-shrink-0">
                  <div
                    className="w-9 h-9 rounded-[10px] flex items-center justify-center"
                    style={{ background: "rgba(232,93,38,0.18)", border: "1.5px solid #E85D26", color: "#E85D26" }}
                  >
                    {icon}
                  </div>
                  {pulse && (
                    <>
                      <span
                        className="absolute -top-1 -right-1 w-2 h-2 rounded-full"
                        style={{ background: "#E85D26" }}
                      />
                      <motion.span
                        className="absolute -top-1 -right-1 w-2 h-2 rounded-full"
                        style={{ background: "#E85D26" }}
                        animate={{ scale: [1, 3], opacity: [0.6, 0] }}
                        transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
                      />
                    </>
                  )}
                </div>
                <h3
                  className="text-white font-bold leading-snug"
                  style={{ fontSize: 16 }}
                >
                  {title}
                </h3>
              </div>

              {/* Body — always visible */}
              <p
                className="mt-2"
                style={{ fontSize: 13, color: "rgba(255,255,255,0.52)", lineHeight: 1.65 }}
              >
                {body}
              </p>
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
            className="flex items-center justify-center gap-2 w-full lg:w-auto text-[#E85D26] font-medium px-8 py-4 rounded-full transition-all text-[13px] lg:text-sm whitespace-nowrap"
            style={{ border: "1.5px solid rgba(232,93,38,0.7)", background: "rgba(232,93,38,0.08)" }}
          >
            Facultet solves all three. Here&apos;s how
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </motion.div>

        {/* Stats — count-up on scroll, no dividers */}
        <div
          ref={statsRef}
          className="max-w-[760px] mx-auto mt-8 lg:mt-10 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <motion.div
            className="flex items-start justify-around"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.52 }}
          >
            {statTargets.map(({ target, suffix, label }, i) => (
              <StatItem key={i} target={target} suffix={suffix} label={label} active={statsInView} />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
