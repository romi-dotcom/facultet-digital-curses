"use client";

import { useRef, useState, useEffect } from "react";
import FadeUp from "./FadeUp";

const CARD_W = 300;
const GAP = 16;
const STEP = CARD_W + GAP;

const cards = [
  {
    bg: "#FFF1EC",
    iconBg: "#E85D26",
    fact: "200+ students renewed",
    factColor: "#C2410C",
    factBg: "#FEDDCC",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
    title: "My student permit\nis expiring",
    desc: "Need to renew before the deadline. One document from Facultet — and AIMA renews it.",
    btnText: "How renewal works",
    href: "#visa-steps",
  },
  {
    bg: "#D0ECE3",
    iconBg: "#166534",
    fact: "DGERT-certified credential",
    factColor: "#166534",
    factBg: "#BBF7D0",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    title: "My CV doesn't\nwork here",
    desc: "Experience from home doesn't count. Need a European credential.",
    btnText: "View programmes",
    href: "#programmes",
  },
  {
    bg: "#D0DFF0",
    iconBg: "#1E3A5F",
    fact: "From €125/month",
    factColor: "#1E3A5F",
    factBg: "#BFDBFE",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    title: "I need both —\nstatus and career",
    desc: "One enrolment. Annual permit renewal + marketable European credential.",
    btnText: "How it works",
    href: "#double-value",
  },
];

export default function AudienceSelect() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / STEP);
      setActive(Math.min(Math.max(idx, 0), cards.length - 1));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (i: number) => {
    trackRef.current?.scrollTo({ left: i * STEP, behavior: "smooth" });
  };

  return (
    <section id="audience" className="bg-[#F8FAFC] py-10 lg:py-20">
      <div className="max-w-[1440px] mx-auto lg:px-[160px]">
        <FadeUp className="text-center mb-8 px-5">
          <h2 className="text-[#1E293B] text-[22px] lg:text-[36px] font-bold leading-[1.2]">
            Is this your situation?
          </h2>
          <p className="text-[#64748B] mt-3" style={{ fontSize: 14, lineHeight: 1.5 }}>
            Which of these sounds like you?
          </p>
        </FadeUp>

        {/* Mobile: horizontal scroll carousel */}
        <div className="lg:hidden">
          <div
            ref={trackRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2"
            style={{ gap: GAP, paddingLeft: 20, paddingRight: 20, scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {cards.map(({ bg, iconBg, icon, title, desc, btnText, href, fact, factColor, factBg }, idx) => (
              <div
                key={title}
                className="flex-none snap-start"
                style={{ width: CARD_W }}
              >
                <div
                  className="relative flex flex-col items-center rounded-[16px] overflow-hidden h-full justify-between"
                  style={{ backgroundColor: bg, padding: 24, gap: 16 }}
                >
                  {/* Decorative circles */}
                  <svg
                    className="absolute bottom-0 right-0 pointer-events-none"
                    width="110" height="110" viewBox="0 0 110 110" fill="none"
                    style={{ opacity: 0.09 }}
                  >
                    <circle cx="95" cy="95" r="70" stroke={iconBg} strokeWidth="22"/>
                    <circle cx="95" cy="95" r="42" stroke={iconBg} strokeWidth="16"/>
                    <circle cx="95" cy="95" r="18" stroke={iconBg} strokeWidth="10"/>
                  </svg>

                  {/* Top content */}
                  <div className="flex flex-col items-center text-center relative z-10" style={{ gap: 14 }}>
                    <div
                      className="flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: iconBg, borderRadius: 28, width: 56, height: 56 }}
                    >
                      {icon}
                    </div>
                    <h3 className="text-[#1E293B] font-bold leading-tight whitespace-pre-line" style={{ fontSize: 17 }}>
                      {title}
                    </h3>
                    <p className="text-[#64748B]" style={{ fontSize: 14, lineHeight: 1.55 }}>
                      {desc}
                    </p>
                    {/* Fact pill */}
                    <span
                      className="inline-flex items-center font-semibold"
                      style={{
                        background: factBg,
                        color: factColor,
                        fontSize: 11,
                        borderRadius: 100,
                        padding: "4px 10px",
                      }}
                    >
                      ✓ {fact}
                    </span>
                  </div>

                  {/* CTA button */}
                  <a
                    href={href}
                    className="relative z-10 flex items-center justify-center bg-white text-[#1E293B] font-semibold rounded-full hover:shadow-md transition-all w-full"
                    style={{ fontSize: 14, height: 44 }}
                  >
                    {btnText} →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Counter navigation */}
          <div className="flex items-center justify-center mt-5" style={{ gap: 12 }}>
            <button
              onClick={() => goTo(Math.max(0, active - 1))}
              style={{ opacity: active === 0 ? 0.25 : 1, transition: "opacity 0.2s" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>

            <div className="flex items-baseline" style={{ gap: 4 }}>
              <span style={{ fontSize: 15, fontWeight: 700, color: "#1E293B" }}>{active + 1}</span>
              <span style={{ fontSize: 13, color: "#CBD5E1" }}>/</span>
              <span style={{ fontSize: 13, color: "#94A3B8" }}>{cards.length}</span>
            </div>

            <button
              onClick={() => goTo(Math.min(cards.length - 1, active + 1))}
              style={{ opacity: active === cards.length - 1 ? 0.25 : 1, transition: "opacity 0.2s" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop: grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6 px-0">
          {cards.map(({ bg, iconBg, icon, title, desc, btnText, href }, i) => (
            <FadeUp key={title} delay={i * 0.1}>
              <div
                className="flex flex-col items-center gap-6 rounded-[20px] p-10 h-full justify-between"
                style={{ backgroundColor: bg }}
              >
                <div className="flex flex-col items-center gap-6 text-center">
                  <div
                    className="w-[72px] h-[72px] rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: iconBg }}
                  >
                    {icon}
                  </div>
                  <h3 className="text-[#1E293B] text-[22px] font-bold leading-tight whitespace-pre-line">
                    {title}
                  </h3>
                  <p className="text-[#64748B] text-[15px] leading-[1.6] whitespace-pre-line">
                    {desc}
                  </p>
                </div>
                <a
                  href={href}
                  className="flex items-center justify-center gap-2 bg-white text-[#1E293B] text-sm font-semibold px-7 py-3.5 rounded-full hover:shadow-md transition-all w-full max-w-[280px]"
                >
                  {btnText} →
                </a>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
