"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import FadeUp from "./FadeUp";

// ── Icons ───────────────────────────────────────────────────────────────────

function IconClipboardList() {
  return (
    <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="#E86339" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
      <path d="M12 11h4"/><path d="M12 16h4"/>
      <path d="M8 11h.01"/><path d="M8 16h.01"/>
    </svg>
  );
}

function IconMail() {
  return (
    <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="#E86339" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}

function IconFileText() {
  return (
    <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="#E86339" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
      <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
      <path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>
    </svg>
  );
}

function IconTimer({ size = 13, color = "#22C55E" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 2h4"/><path d="M12 14 9 11"/>
      <circle cx="12" cy="14" r="8"/>
    </svg>
  );
}

// ── Data ───────────────────────────────────────────────────────────────────

const steps = [
  { step: "Step 1", title: "Submit Your Application",  desc: "Fill out the online form — no documents needed at this stage. Just tell us about yourself and your goals.", badge: "Takes 5 minutes"     },
  { step: "Step 2", title: "Receive Confirmation",      desc: "Our admissions team reviews your application and sends an acceptance letter with next steps.",               badge: "Within 1 business day" },
  { step: "Step 3", title: "Enrolment Documents",       desc: "Sign the enrolment agreement and receive official documents for your AIMA student permit renewal application.", badge: "5–6 business days"     },
];

const icons = [<IconClipboardList key="1" />, <IconMail key="2" />, <IconFileText key="3" />];

// ── Component ───────────────────────────────────────────────────────────────

export default function HowToApply() {
  const sectionRef  = useRef<HTMLDivElement>(null);
  const scrollRef   = useRef<HTMLDivElement>(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: "-60px" });

  // ② Active dot follows scroll
  const [active, setActive] = useState(0);
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const total = el.scrollWidth - el.clientWidth;
      const seg = total / (steps.length - 1);
      setActive(Math.min(Math.max(Math.round(el.scrollLeft / seg), 0), steps.length - 1));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="how-to-apply" className="bg-white">

      <style>{`
        /* ④ Icon container pulse */
        @keyframes iconPulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.6; }
        }
        .icon-pulse { animation: iconPulse 2.6s ease-in-out infinite; }

        /* ⑤ Badge shimmer */
        @keyframes badgeShimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .badge-shimmer {
          background: linear-gradient(
            90deg,
            transparent 0%, rgba(34,197,94,0.15) 50%, transparent 100%
          );
          background-size: 200% auto;
          animation: badgeShimmer 2.2s linear infinite;
        }

        /* ⑥ CTA shimmer */
        @keyframes ctaShimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .cta-shimmer-apply {
          background: linear-gradient(180deg, #E85D26 0%, #F97316 100%);
          background: linear-gradient(
            90deg,
            #E85D26 0%, #F97316 38%, #FFAC6B 50%, #F97316 62%, #E85D26 100%
          );
          background-size: 200% auto;
          animation: ctaShimmer 2.4s linear infinite;
        }

        /* ⑥ Arrow wiggle */
        @keyframes arrowRight {
          0%, 100% { transform: translateX(0); }
          50%       { transform: translateX(4px); }
        }
        .arrow-right { animation: arrowRight 1.2s ease-in-out infinite; display: inline-block; }
      `}</style>

      {/* ── Mobile ──────────────────────────────────────────────────────── */}
      <div ref={sectionRef} className="md:hidden flex flex-col gap-6 pt-[60px] pb-[60px]">

        {/* ① Header — FadeUp */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center gap-2 px-5 text-center"
        >
          <h2 className="text-[#1E293B] font-extrabold" style={{ fontSize: 28, letterSpacing: -0.5 }}>
            How to Apply
          </h2>
          <p className="text-[#64748B] leading-[1.5]" style={{ fontSize: 15 }}>
            3 simple steps — from application to<br />enrolment documents in your hands.
          </p>
        </motion.div>

        {/* ③ Cards carousel — stagger fade+scale */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto scrollbar-hide"
          style={{
            scrollSnapType: "x mandatory",
            scrollPaddingLeft: 20,
            WebkitOverflowScrolling: "touch",
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          {steps.map(({ step, title, desc, badge }, i) => (
            <motion.article
              key={step}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={sectionInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 + i * 0.09 }}
              className="flex-shrink-0 flex flex-col gap-4 rounded-[20px] bg-[#F8FAFC]"
              style={{
                width: 295,
                padding: 24,
                border: "1px solid #F1F5F9",
                scrollSnapAlign: "start",
              }}
            >
              {/* Header row */}
              <div className="flex items-center gap-4">
                {/* ④ Icon pulse */}
                <div
                  className="icon-pulse flex-shrink-0 flex items-center justify-center rounded-xl"
                  style={{ background: "#FFF3ED", padding: 12 }}
                >
                  {icons[i]}
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="font-semibold text-[#E86339]" style={{ fontSize: 12 }}>{step}</span>
                  <h3 className="text-[#1E293B] font-bold leading-tight" style={{ fontSize: 18 }}>{title}</h3>
                </div>
              </div>

              <p className="text-[#64748B] leading-[1.5]" style={{ fontSize: 14 }}>{desc}</p>

              {/* ⑤ Badge shimmer */}
              <div
                className="inline-flex items-center gap-1.5 self-start rounded-full relative overflow-hidden"
                style={{ border: "1px solid #22C55E", padding: "5px 12px", marginTop: "auto" }}
              >
                <div className="badge-shimmer absolute inset-0 rounded-full" />
                <IconTimer />
                <span className="text-[#22C55E] font-medium relative z-10" style={{ fontSize: 13 }}>{badge}</span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ② Dots — reactive to scroll */}
        <div className="flex items-center justify-center gap-1.5">
          {steps.map((_, i) => (
            <div
              key={i}
              style={{
                width: i === active ? 20 : 6,
                height: 6,
                borderRadius: 3,
                background: i === active ? "#E85D26" : "#CBD5E1",
                transition: "width 0.2s ease, background-color 0.2s ease",
              }}
            />
          ))}
        </div>

        {/* ① CTA — FadeUp + ⑥ shimmer + arrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.35 }}
          className="flex flex-col items-center gap-2.5 px-5"
        >
          <a
            href="#consult"
            className="cta-shimmer-apply w-full flex items-center justify-center rounded-[14px] text-white font-bold gap-2"
            style={{
              fontSize: 15,
              padding: "16px 24px",
              boxShadow: "0 8px 24px rgba(232, 93, 38, 0.25)",
            }}
          >
            Start Your Application
            <span className="arrow-right">→</span>
          </a>
          <p className="text-[#94A3B8] text-center" style={{ fontSize: 12 }}>
            No documents needed · Response within 1 business day
          </p>
        </motion.div>
      </div>

      {/* ── Desktop (unchanged) ──────────────────────────────────────────── */}
      <div className="hidden md:block py-20">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-[160px]">
          <FadeUp className="text-center mb-10">
            <h2 className="text-[#1E293B] text-[40px] font-extrabold leading-tight" style={{ letterSpacing: -0.5 }}>
              How to Apply
            </h2>
            <p className="text-[#64748B] leading-[1.6] mt-3 max-w-2xl mx-auto" style={{ fontSize: 15 }}>
              3 simple steps — from application to enrolment documents in your hands.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="grid grid-cols-3 gap-5">
              {steps.map(({ step, title, desc, badge }, i) => (
                <div key={step} className="flex flex-col gap-4 bg-[#F8FAFC] rounded-2xl p-6 border border-[#F1F5F9]">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 flex items-center justify-center rounded-xl" style={{ background: "#FFF3ED", padding: 12 }}>
                      {icons[i]}
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-semibold text-[#E86339]" style={{ fontSize: 12 }}>{step}</span>
                      <h3 className="text-[#1E293B] font-bold leading-tight" style={{ fontSize: 18 }}>{title}</h3>
                    </div>
                  </div>
                  <p className="text-[#64748B] leading-[1.5]" style={{ fontSize: 14 }}>{desc}</p>
                  <div className="inline-flex items-center gap-1.5 self-start rounded-full" style={{ border: "1px solid #22C55E", padding: "5px 12px" }}>
                    <IconTimer />
                    <span className="text-[#22C55E] font-medium" style={{ fontSize: 13 }}>{badge}</span>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.2} className="flex flex-col items-center gap-3 mt-10">
            <a
              href="#consult"
              className="inline-flex items-center justify-center rounded-[14px] text-white font-bold transition-opacity hover:opacity-90"
              style={{
                fontSize: 15,
                padding: "16px 32px",
                background: "linear-gradient(180deg, #E85D26 0%, #F97316 100%)",
                boxShadow: "0 8px 24px rgba(232, 93, 38, 0.25)",
              }}
            >
              Start Your Application →
            </a>
            <p className="text-[#94A3B8]" style={{ fontSize: 12 }}>
              No documents needed · Response within 1 business day
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
