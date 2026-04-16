"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import FadeUp from "./FadeUp";

const stories = [
  {
    name: "Maria Fernandes",
    metaMobile: "🇧🇷 Brazil → Lisbon · Digital Marketing",
    metaDesktop: "Brazil → Lisbon · Digital Marketing",
    quote: "\"I never imagined I'd be working in Lisbon within 3 months. Facultet gave me the skills and the confidence.\"",
    tagsMobile: ["SEO", "Google Ads", "Analytics"],
    tagsDesktop: ["SEO", "Google Ads", "Content Strategy", "Analytics"],
    before: "Freelance designer.\nStudent permit expiring in 3 months.\nNo European credential to show employers.",
    after: "Junior Digital Marketer\nat a Lisbon agency.\n3 campaign portfolio.",
    afterLabelColor: "#64748B",
    metric: "3",
    metricLabel: "months\nfrom enrollment to job offer",
    metricLabelMobile: "months to job offer",
    badge: "Hired in 3 months",
    badgeMobileIcon: <IconBriefcase />,
    photo: "/reviews/maria.png",
  },
  {
    name: "Arjun Mehta",
    metaMobile: "🇮🇳 India → Porto · Digital Marketing",
    metaDesktop: "India → Porto · Digital Marketing",
    quote: "\"The visa process seemed impossible until Facultet showed me exactly how to do it step by step.\"",
    tagsMobile: ["Social Media", "CRM", "Branding"],
    tagsDesktop: ["Social Media", "Email Marketing", "CRM", "Branding"],
    before: "IT support in Mumbai.\nNo European work\nexperience.",
    after: "Marketing Specialist\nat a Porto startup.\nEU network built.",
    afterLabelColor: "#64748B",
    metric: "4",
    metricLabel: "months\nfrom enrollment to visa approval",
    metricLabelMobile: "months to visa approval",
    badge: "Student residence extended",
    badgeMobileIcon: <IconPlane />,
    photo: "/reviews/arjun.png",
  },
  {
    name: "Ana L.",
    metaMobile: "🇧🇷 Brazil → Porto · Project Management",
    metaDesktop: "Brazil → Porto · Project Management",
    quote: "\"From marketing assistant to freelance PM with EU clients — Facultet made it real.\"",
    tagsMobile: ["Agile", "Scrum", "Jira"],
    tagsDesktop: ["Agile", "Scrum", "Stakeholder Mgmt", "Jira"],
    before: "Marketing assistant\nin São Paulo. No PM\ncertification.",
    after: "Freelance PM for\n2 EU clients.\nResidency obtained.",
    afterLabelColor: "#16A34A",
    metric: "4",
    metricLabel: "months\nfrom enrollment to residency",
    metricLabelMobile: "months to residency",
    badge: "Residency in 4 months",
    badgeMobileIcon: <IconMapPin />,
    photo: "/reviews/ana.png",
  },
];

function IconBriefcase() {
  return (
    <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
  );
}

function IconPlane() {
  return (
    <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 19 2c-2-2-4-2-5.5-.5L10 5 1.8 6.2c-.5.1-.9.5-1 1-.1.6.1 1.2.6 1.6l3.6 3.6-3.6 3.6c-.5.4-.7 1-.6 1.6.1.5.5.9 1 1l8.2 1.2 1.4 1.4c.4.4.9.6 1.4.6s1-.2 1.4-.6l3.6-3.6c.4-.4.5-1 .2-1.4z"/>
    </svg>
  );
}

function IconMapPin() {
  return (
    <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

function IconGradCap() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  );
}

function IconTrophy() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#E85D26" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
      <path d="M4 22h16"/>
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
    </svg>
  );
}

function IconCheck({ size = 16, color = "#16A34A" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

function IconChevronLeft() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6"/>
    </svg>
  );
}

function IconChevronRight({ color = "white" }: { color?: string }) {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  );
}

// ── StoryCard (per-card inView for track animation) ─────────────────────────

type StoryData = typeof stories[number];

function StoryCard({ story, sectionInView }: { story: StoryData; sectionInView: boolean }) {
  const { name, metaMobile, quote, tagsMobile, metric, badge, badgeMobileIcon, photo } = story;
  const cardRef    = useRef<HTMLElement>(null);
  const cardInView = useInView(cardRef, { once: true, margin: "0px -40px 0px 0px" });

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={sectionInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="flex-shrink-0 flex flex-col overflow-hidden rounded-[20px] bg-white"
      style={{ width: 315, height: 510, border: "1px solid #E2E8F0", boxShadow: "0 2px 8px rgba(0,0,0,0.063), 0 16px 40px -8px rgba(0,0,0,0.071)", scrollSnapAlign: "start" }}
    >
      {/* ⑥ Photo + overlay gradient */}
      <div className="relative flex-shrink-0 overflow-hidden" style={{ height: 180 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photo} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 55%, rgba(0,0,0,0.28) 100%)" }} />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2.5 overflow-hidden" style={{ padding: "20px 20px 32px 20px" }}>
        <p className="text-[#1E293B] font-bold" style={{ fontSize: 17 }}>{name}</p>
        <p className="text-[#64748B]" style={{ fontSize: 12 }}>{metaMobile}</p>
        <p className="text-[#374151] leading-[1.5] italic" style={{ fontSize: 13 }}>{quote}</p>
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pb-1">
          {tagsMobile.map(t => (
            <span key={t} className="rounded-full font-semibold" style={{ fontSize: 11, background: "#FFF7ED", color: "#EA580C", border: "1px solid #FDBA74", padding: "4px 10px" }}>
              {t}
            </span>
          ))}
        </div>
        {/* Bottom: result track */}
        <div className="flex flex-col gap-2.5 mt-auto" style={{ paddingTop: 16 }}>
          <span className="font-bold text-[#CBD5E1]" style={{ fontSize: 9, letterSpacing: "1.5px" }}>RESULT</span>
          {/* ③ Animated track — dot travels left→right, orange→green */}
          <div className="relative" style={{ height: 10 }}>
            {/* Track line — starts at left:0 so its right edge never exceeds the dot */}
            <div className="absolute overflow-hidden" style={{ left: 0, right: 0, height: 2, top: 4, zIndex: 0 }}>
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(90deg, #E85D26, #16A34A)",
                transform: cardInView ? "scaleX(1)" : "scaleX(0)",
                transformOrigin: "left",
                transition: "transform 2.55s ease-out",
              }} />
            </div>
            {/* Static left orange dot — on top of line start */}
            <div className="rounded-full absolute" style={{ width: 8, height: 8, background: "#E85D26", left: 0, top: 1, zIndex: 2 }} />
            {/* Moving dot — left: 0 → calc(100% - 10px), orange→green */}
            <div style={{
              position: "absolute",
              width: 10, height: 10,
              borderRadius: "50%",
              top: 0,
              left: cardInView ? "calc(100% - 10px)" : "0px",
              zIndex: 3,
              background: cardInView ? "#16A34A" : "#E85D26",
              transition: cardInView
                ? "left 2.55s ease-out, background 2.55s ease-out"
                : "none",
              boxShadow: cardInView ? "0 0 0 3px rgba(22,163,74,0.2)" : "0 0 0 3px rgba(232,93,38,0.2)",
            }} />
          </div>
          {/* Labels */}
          <div className="flex items-center justify-between">
            <span className="text-[#94A3B8]" style={{ fontSize: 10, fontWeight: 500 }}>Start</span>
            <div className="flex items-center gap-1">
              <IconCheck size={11} color="#16A34A" />
              <span className={`text-[#16A34A] font-bold${cardInView ? " metric-pop" : ""}`} style={{ fontSize: 10 }}>{metric} months</span>
            </div>
          </div>
          {/* ⑤ Badge — shimmer + reveal after metric pop */}
          <div className={`relative overflow-hidden flex items-center gap-1.5 rounded-lg bg-[#F0FDF4]${cardInView ? " badge-reveal" : ""}`} style={{ padding: "8px 12px", opacity: cardInView ? undefined : 0 }}>
            <div className="story-badge-shimmer absolute inset-0 rounded-lg" />
            {badgeMobileIcon}
            <span className="font-semibold text-[#15803D] relative z-10" style={{ fontSize: 12 }}>{badge}</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function SuccessStories() {
  const [active, setActive] = useState(0);
  const story = stories[active];

  // Mobile refs
  const mobileRef = useRef<HTMLDivElement>(null);
  const scrollRef  = useRef<HTMLDivElement>(null);
  const mobileInView = useInView(mobileRef, { once: true, margin: "-60px" });

  // ④ Reactive dots
  const [activeDot, setActiveDot] = useState(0);
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const total = el.scrollWidth - el.clientWidth;
      const seg   = total / (stories.length - 1);
      setActiveDot(Math.min(Math.max(Math.round(el.scrollLeft / seg), 0), stories.length - 1));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="success-stories" className="bg-[#F8FAFC]">

      {/* ── Mobile ── */}
      <div ref={mobileRef} className="md:hidden flex flex-col gap-6 pt-10 pb-10">

        <style>{`
          /* ⑤ Badge shimmer */
          @keyframes storyBadgeShimmer {
            0%   { background-position: -200% center; }
            100% { background-position:  200% center; }
          }
          .story-badge-shimmer {
            background: linear-gradient(90deg, transparent 0%, rgba(34,197,94,0.18) 50%, transparent 100%);
            background-size: 200% auto;
            animation: storyBadgeShimmer 2.2s linear infinite;
          }

          /* Metric pop — fires when dot arrives */
          @keyframes metricPop {
            0%   { color: #16A34A; text-shadow: none; transform: scale(1); }
            30%  { color: #22C55E; text-shadow: 0 0 10px rgba(34,197,94,0.6); transform: scale(1.18); }
            65%  { color: #15803D; text-shadow: 0 0 6px rgba(22,163,74,0.35); transform: scale(1.08); }
            100% { color: #16A34A; text-shadow: none; transform: scale(1); }
          }
          .metric-pop {
            display: inline-block;
            animation: metricPop 1s ease-out 2.55s both;
          }

          /* Badge reveal — fires after metric pop completes (2.55s + 1s = 3.55s) */
          @keyframes badgeReveal {
            0%   { opacity: 0; transform: translateY(6px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .badge-reveal {
            animation: badgeReveal 0.45s ease-out 3.55s both;
          }
        `}</style>

        {/* ① Header — FadeUp */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={mobileInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col gap-2 px-5 text-center items-center"
        >
          <h2 className="text-[#1E293B] font-bold leading-[1.2]" style={{ fontSize: 22 }}>
            From Zero to Career in 3–5 Months
          </h2>
          <p className="text-[#64748B] leading-[1.5]" style={{ fontSize: 14 }}>
            How 3 students transformed their careers in Portugal
          </p>
        </motion.div>

        {/* ② Scroll cards — each with own inView */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide"
          style={{ scrollSnapType: "x mandatory", scrollPaddingLeft: 20, WebkitOverflowScrolling: "touch", paddingLeft: 20, paddingRight: 20 }}
        >
          {stories.map((s) => (
            <StoryCard key={s.name} story={s} sectionInView={mobileInView} />
          ))}
        </div>

        {/* ④ Dots — reactive to scroll */}
        <div className="flex items-center justify-center gap-1.5">
          {stories.map((_, i) => (
            <div
              key={i}
              style={{
                width: i === activeDot ? 20 : 6,
                height: 6,
                borderRadius: 3,
                background: i === activeDot ? "#E85D26" : "#CBD5E1",
                transition: "width 0.2s ease, background-color 0.2s ease",
              }}
            />
          ))}
        </div>
      </div>

      {/* ── Desktop ── */}
      <div className="hidden md:block py-20">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-[160px]">

          {/* Title row */}
          <FadeUp>
            <div className="flex items-start gap-4 mb-4">
              <h2 className="text-[#1E293B] font-extrabold leading-[1.1]" style={{ fontSize: 40, letterSpacing: -1 }}>
                From Zero to Career<br />in 3–5 Months
              </h2>
              <div className="flex items-center gap-1.5 rounded-full mt-2 px-4 py-2" style={{ background: "#FFF7ED", border: "1px solid #FDBA74" }}>
                <IconTrophy />
                <span className="text-[#E85D26] font-bold" style={{ fontSize: 13 }}>Success Rate 94%</span>
              </div>
            </div>
            <p className="text-[#64748B] mb-12" style={{ fontSize: 18 }}>
              How 3 students transformed their careers in Portugal
            </p>
          </FadeUp>

          {/* Card */}
          <FadeUp delay={0.1}>
            <div
              className="flex rounded-[20px] overflow-hidden border border-[#E2E8F0] max-w-[960px] mx-auto"
              style={{ height: 480, boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}
            >
              {/* Photo */}
              <div className="relative flex-shrink-0 overflow-hidden" style={{ width: 360 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={story.photo} alt="" className="h-full w-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.25) 100%)" }} />
              </div>

              {/* Content panel */}
              <div
                className="flex flex-1 flex-col justify-between pt-8 pr-8 pb-8 pl-7"
                style={{ background: "rgba(255,255,255,0.93)", borderLeft: "1px solid rgba(255,255,255,0.5)" }}
              >
                {/* Top: name + before/after */}
                <div className="flex flex-col gap-3.5">
                  <div>
                    <h3 className="text-[#1E293B] font-bold" style={{ fontSize: 22, letterSpacing: -0.5 }}>{story.name}</h3>
                    <div className="flex items-center gap-1.5 mt-1">
                      <IconGradCap />
                      <span className="text-[#64748B]" style={{ fontSize: 13, fontWeight: 500 }}>{story.metaDesktop}</span>
                    </div>
                  </div>

                  {/* Before / After */}
                  <div className="flex items-start gap-3">
                    <div className="flex flex-col gap-1.5" style={{ width: 160 }}>
                      <div className="flex items-center gap-1.5">
                        <div className="rounded-full bg-[#EF4444] flex-shrink-0" style={{ width: 10, height: 10 }} />
                        <span className="text-[#64748B] font-bold" style={{ fontSize: 11 }}>BEFORE</span>
                      </div>
                      <p className="text-[#1E293B] leading-snug whitespace-pre-line" style={{ fontSize: 13 }}>{story.before}</p>
                    </div>
                    <div className="flex flex-1 items-center mt-1.5">
                      <div className="h-0.5 flex-1" style={{ background: "linear-gradient(90deg, #EF4444, #22C55E)" }} />
                      <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"/>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1.5" style={{ width: 160 }}>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold" style={{ fontSize: 11, color: story.afterLabelColor }}>AFTER</span>
                        <div className="rounded-full bg-[#22C55E] flex-shrink-0" style={{ width: 10, height: 10 }} />
                      </div>
                      <p className="text-[#1E293B] leading-snug whitespace-pre-line" style={{ fontSize: 13 }}>{story.after}</p>
                    </div>
                  </div>
                </div>

                {/* Middle: quote + skills */}
                <div className="flex flex-col gap-3">
                  <p className="text-[#475569] leading-relaxed italic" style={{ fontSize: 14 }}>{story.quote}</p>
                  <div className="flex flex-wrap gap-2">
                    {story.tagsDesktop.map(t => (
                      <span key={t} className="rounded-full bg-[#F1F5F9] px-3 py-1 text-[#64748B]" style={{ fontSize: 12 }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom: metric + badge */}
                <div className="flex items-center gap-6">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[#E85D26] font-extrabold leading-none" style={{ fontSize: 48 }}>{story.metric}</span>
                    <span className="text-[#64748B] font-semibold whitespace-pre-line" style={{ fontSize: 12 }}>{story.metricLabel}</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full px-4 py-2.5 bg-[#F0FDF4]">
                    <IconCheck size={16} color="#16A34A" />
                    <span className="text-[#16A34A] font-semibold" style={{ fontSize: 14 }}>{story.badge}</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Nav row */}
          <FadeUp delay={0.15} className="flex items-center justify-center gap-6 mt-8 max-w-[960px] mx-auto">
            <button
              onClick={() => setActive((active - 1 + stories.length) % stories.length)}
              className="w-11 h-11 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center shadow-sm hover:shadow-md transition-all"
            >
              <IconChevronLeft />
            </button>

            <div className="flex items-center gap-2">
              {stories.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="rounded-full transition-all"
                  style={{
                    width: i === active ? 10 : 8,
                    height: i === active ? 10 : 8,
                    background: i === active ? "#E85D26" : "#CBD5E1",
                  }}
                />
              ))}
            </div>

            <button
              onClick={() => setActive((active + 1) % stories.length)}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all"
              style={{ background: "#E85D26", boxShadow: "0 2px 8px rgba(232,93,38,0.30)" }}
            >
              <IconChevronRight />
            </button>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
