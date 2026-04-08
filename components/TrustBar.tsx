"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

const signals = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
    label: "DGERT Licensed",
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
    label: "423 Students",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    label: "5.0 ★ 47 Reviews",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    label: "3 Programmes",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
    label: "AIMA Renewal Documents",
  },
];

// Each cycle = 5s * 1.2 pause = 6s total, item active ~15% = 0.9s
const CYCLE = 6;
const ACTIVE_PCT = 15;

const Dot = () => <span className="text-[#CBD5E1] mx-3 select-none">·</span>;

export default function TrustBar() {
  const desktopRef = useRef<HTMLDivElement>(null);
  const inView = useInView(desktopRef, { once: true, margin: "-60px" });

  return (
    <section className="bg-[#F8FAFC] border-y border-[#E2E8F0] overflow-hidden">
      <style>{`
        /* Mobile marquee */
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

        /* Desktop shimmer */
        @keyframes shimmer-pulse {
          0%, ${ACTIVE_PCT}%, 100% {
            background-color: transparent;
            box-shadow: none;
          }
          ${ACTIVE_PCT / 2}% {
            background-color: rgba(232, 93, 38, 0.09);
            box-shadow: 0 0 0 1px rgba(232, 93, 38, 0.12);
          }
        }
        .shimmer-item {
          border-radius: 8px;
          padding: 4px 10px;
          animation: shimmer-pulse ${CYCLE}s ease-in-out infinite;
          transition: background-color 0.3s;
        }
        .shimmer-item:hover {
          animation-play-state: paused;
          background-color: rgba(232, 93, 38, 0.06) !important;
        }
      `}</style>

      {/* Mobile: marquee ticker */}
      <div className="lg:hidden py-5">
        <div className="marquee-track">
          {[...signals, ...signals].map(({ icon, label }, i) => (
            <span key={i} className="flex items-center gap-2 whitespace-nowrap">
              <span className="text-accent flex-shrink-0">{icon}</span>
              <span className="text-[#1E293B] text-sm font-bold">{label}</span>
              <Dot />
            </span>
          ))}
        </div>
      </div>

      {/* Desktop: shimmer highlight row */}
      <div ref={desktopRef} className="hidden lg:block max-w-[1440px] mx-auto px-[160px] py-8">
        <div className="flex items-center justify-between gap-x-2">
          {signals.flatMap(({ icon, label }, i) => [
            <div
              key={i}
              className="shimmer-item flex items-center gap-2"
              style={{
                animationDelay: inView ? `${i * (CYCLE / signals.length)}s` : "9999s",
              }}
            >
              <span className="text-accent flex-shrink-0">{icon}</span>
              <span className="text-[#1E293B] text-sm font-bold">{label}</span>
            </div>,
            ...(i < signals.length - 1
              ? [<div key={`sep-${i}`} className="w-px h-6 bg-[#E2E8F0] flex-shrink-0" />]
              : []),
          ])}
        </div>
      </div>

    </section>
  );
}
