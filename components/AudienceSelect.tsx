"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, type Transition } from "framer-motion";
import FadeUp from "./FadeUp";

const ease = [0.22, 1, 0.36, 1] as const;

const CARD_W = 300;
const GAP = 16;
const STEP = CARD_W + GAP;

const cards = [
  {
    accent: "#E85D26",
    tag: "Student Permit",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E85D26" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
    fact: "200+ students renewed",
    title: "My student permit\nis expiring",
    desc: "Need to renew before the deadline. One document from Facultet — and AIMA renews it.",
    btnText: "How renewal works",
    href: "#visa-steps",
  },
  {
    accent: "#166534",
    tag: "Career",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#166534" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    fact: "DGERT-certified credential",
    title: "My CV doesn't\nwork here",
    desc: "Experience from home doesn't count. Need a European credential.",
    btnText: "View programmes",
    href: "#programmes",
  },
  {
    accent: "#1E3A5F",
    tag: "Best Value",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E3A5F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    fact: "From €125/month",
    title: "I need both —\nstatus and career",
    desc: "One enrolment. Annual permit renewal + marketable European credential.",
    btnText: "How it works",
    href: "#double-value",
  },
];

export default function AudienceSelect() {
  const trackRef   = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const sectionInView = useInView(sectionRef, { once: true, margin: "-60px" });

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
        <div ref={sectionRef} className="lg:hidden">
          <div
            ref={trackRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2"
            style={{
              gap: GAP,
              paddingLeft: 20,
              paddingRight: 20,
              scrollPaddingLeft: 20,
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {cards.map(({ accent, tag, icon, title, desc, btnText, href, fact }, idx) => (
              <motion.div
                key={title}
                className="flex-none snap-start"
                style={{ width: CARD_W, display: "flex", flexDirection: "column" }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={sectionInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.45, ease, delay: 0.1 + idx * 0.1 } as Transition}
              >
                <div className="transition-transform duration-150 active:scale-[0.97] h-full flex flex-col">
                  <div
                    className="flex flex-col flex-1 rounded-[16px] overflow-hidden"
                    style={{
                      backgroundColor: "white",
                      borderLeft: `3px solid ${accent}`,
                      padding: 24,
                      gap: 14,
                      boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                    }}
                  >
                    {/* Category tag */}
                    <span
                      className="inline-flex items-center gap-1.5 self-start font-semibold"
                      style={{
                        fontSize: 11,
                        color: accent,
                        background: `${accent}14`,
                        borderRadius: 6,
                        padding: "3px 8px",
                        letterSpacing: "0.03em",
                      }}
                    >
                      {icon}
                      {tag}
                    </span>

                    {/* Title + desc */}
                    <div className="flex flex-col" style={{ gap: 10 }}>
                      <h3 className="text-[#1E293B] font-bold leading-tight whitespace-pre-line" style={{ fontSize: 18 }}>
                        {title}
                      </h3>
                      <p className="text-[#64748B]" style={{ fontSize: 14, lineHeight: 1.6 }}>
                        {desc}
                      </p>
                    </div>

                    {/* Fact + CTA — pinned to bottom */}
                    <div className="flex flex-col mt-auto" style={{ gap: 14 }}>
                      <p className="text-[#94A3B8]" style={{ fontSize: 12 }}>
                        ✓ {fact}
                      </p>
                      <a
                        href={href}
                        className="font-bold"
                        style={{ fontSize: 14, color: accent, textDecoration: "none" }}
                      >
                        {btnText} →
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dots navigation */}
          <div className="flex items-center justify-center mt-5 gap-1.5">
            {cards.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                style={{
                  width: i === active ? 20 : 6,
                  height: 6,
                  borderRadius: 3,
                  background: i === active ? "#E85D26" : "#CBD5E1",
                  transition: "width 0.2s ease, background-color 0.2s ease",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        </div>

        {/* Desktop: grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6 px-0">
          {cards.map(({ accent, tag, icon, title, desc, btnText, href, fact }, i) => (
            <FadeUp key={title} delay={i * 0.1}>
              <div
                className="flex flex-col rounded-[20px] h-full"
                style={{
                  backgroundColor: "white",
                  borderLeft: `3px solid ${accent}`,
                  padding: "32px 28px",
                  gap: 16,
                  boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                }}
              >
                {/* Category tag */}
                <span
                  className="inline-flex items-center gap-1.5 self-start font-semibold"
                  style={{
                    fontSize: 11,
                    color: accent,
                    background: `${accent}14`,
                    borderRadius: 6,
                    padding: "3px 8px",
                    letterSpacing: "0.03em",
                  }}
                >
                  {icon}
                  {tag}
                </span>

                {/* Title + desc */}
                <div className="flex flex-col" style={{ gap: 12 }}>
                  <h3 className="text-[#1E293B] font-bold leading-tight whitespace-pre-line" style={{ fontSize: 20 }}>
                    {title}
                  </h3>
                  <p className="text-[#64748B]" style={{ fontSize: 15, lineHeight: 1.6 }}>
                    {desc}
                  </p>
                </div>

                {/* Fact + CTA — pinned to bottom */}
                <div className="flex flex-col mt-auto" style={{ gap: 16 }}>
                  <p className="text-[#94A3B8]" style={{ fontSize: 13 }}>
                    ✓ {fact}
                  </p>
                  <a
                    href={href}
                    className="font-bold"
                    style={{ fontSize: 15, color: accent, textDecoration: "none" }}
                  >
                    {btnText} →
                  </a>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
