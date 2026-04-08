"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

// ── data ────────────────────────────────────────────────────────────────────

type Signal = {
  icon: React.ReactNode;
  // Static prefix/suffix around animated numbers, e.g. ["5.", " ★ ", " Reviews"]
  parts: (string | { value: number; decimals?: number })[];
};

const signals: Signal[] = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
    parts: ["DGERT Licensed"],
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    parts: [{ value: 423 }, " Students"],
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    parts: [{ value: 5.0, decimals: 1 }, " ★ ", { value: 47 }, " Reviews"],
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    parts: [{ value: 3 }, " Programmes"],
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
    parts: ["AIMA Renewal Documents"],
  },
];

// Flat label for mobile marquee
function flatLabel(parts: Signal["parts"]) {
  return parts
    .map((p) => (typeof p === "string" ? p : p.decimals ? p.value.toFixed(p.decimals) : String(p.value)))
    .join("");
}

// ── CountUp hook ─────────────────────────────────────────────────────────────

function useCountUp(target: number, inView: boolean, duration = 1.4, decimals = 0) {
  const [display, setDisplay] = useState("0");
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const startTime = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
      const val = eased * target;
      setDisplay(decimals ? val.toFixed(decimals) : String(Math.round(val)));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration, decimals]);

  return display;
}

// ── Animated part ─────────────────────────────────────────────────────────────

function AnimatedNumber({ value, decimals = 0, inView }: { value: number; decimals?: number; inView: boolean }) {
  const display = useCountUp(value, inView, 1.4, decimals);
  return <span>{display}</span>;
}

// ── Marquee dot ───────────────────────────────────────────────────────────────

const Dot = () => <span className="text-[#CBD5E1] mx-3 select-none">·</span>;

// ── Main component ────────────────────────────────────────────────────────────

export default function TrustBar() {
  const desktopRef = useRef<HTMLDivElement>(null);
  const inView = useInView(desktopRef, { once: true, margin: "-60px" });

  return (
    <section className="bg-[#F8FAFC] border-y border-[#E2E8F0] overflow-hidden">

      {/* Mobile: marquee ticker */}
      <div className="lg:hidden py-5">
        <style>{`
          @keyframes marquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            display: flex;
            width: max-content;
            animation: marquee 18s linear infinite;
          }
          .marquee-track:hover { animation-play-state: paused; }
        `}</style>
        <div className="marquee-track">
          {[...signals, ...signals].map(({ icon, parts }, i) => (
            <span key={i} className="flex items-center gap-2 whitespace-nowrap">
              <span className="text-accent flex-shrink-0">{icon}</span>
              <span className="text-[#1E293B] text-sm font-bold">{flatLabel(parts)}</span>
              <Dot />
            </span>
          ))}
        </div>
      </div>

      {/* Desktop: counter-up row */}
      <div ref={desktopRef} className="hidden lg:block max-w-[1440px] mx-auto px-[160px] py-8">
        <div className="flex items-center justify-between gap-x-6">
          {signals.flatMap(({ icon, parts }, i) => [
            <motion.div
              key={i}
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
            >
              <span className="text-accent flex-shrink-0">{icon}</span>
              <span className="text-[#1E293B] text-sm font-bold">
                {parts.map((part, j) =>
                  typeof part === "string" ? (
                    <span key={j}>{part}</span>
                  ) : (
                    <AnimatedNumber key={j} value={part.value} decimals={part.decimals} inView={inView} />
                  )
                )}
              </span>
            </motion.div>,
            ...(i < signals.length - 1
              ? [<div key={`sep-${i}`} className="w-px h-6 bg-[#E2E8F0]" />]
              : []),
          ])}
        </div>
      </div>

    </section>
  );
}
