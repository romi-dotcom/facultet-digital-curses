"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView, type Transition } from "framer-motion";
import FadeUp from "./FadeUp";

const ease = [0.22, 1, 0.36, 1] as const;

type Programme = {
  name: string;
  desc: string;
  image: string;
  iconBg: string;
  iconColor: string;
  salary: string;
  salarySource: string;
  tags: string[];
  badge?: string;
  duration: string;
  modules: string[];
  whatYouBuild: string[];
  schedule: string;
};

const programmes: Programme[] = [
  {
    name: "Digital Marketing",
    desc: "SEO, PPC, Social Media, Analytics — learn to drive measurable growth for any business.",
    image: "/covers/digital-marketing.png",
    iconBg: "#FFF7ED",
    iconColor: "#E85D26",
    salary: "€1 200–1 800/mo",
    salarySource: "Source: Glassdoor Portugal, 2025",
    tags: ["SEO", "Google Ads", "Social Media", "Analytics"],
    badge: "Most Popular",
    duration: "13 months",
    modules: [
      "SEO & Content Strategy",
      "Paid Advertising (Google, Meta)",
      "Social Media Management",
      "Analytics & Reporting",
      "Marketing Automation",
    ],
    whatYouBuild: [
      "Live ad campaigns with real budget",
      "SEO audit + content plan for a real business",
      "Analytics dashboard in GA4",
    ],
    schedule: "Mon & Wed · 19:00–21:30 · Lisbon campus + online\n13 months · Sept 2026 intake",
  },
  {
    name: "Data Science",
    desc: "Python, SQL, Machine Learning, Power BI — transform raw data into business decisions.",
    image: "/covers/data-science.png",
    iconBg: "#EFF6FF",
    iconColor: "#3B82F6",
    salary: "€2 500–4 000/mo",
    salarySource: "Source: Glassdoor Portugal, 2025",
    tags: ["Python", "SQL", "ML", "Power BI", "AI Tools"],
    duration: "14 months",
    modules: [
      "Python for Data Analysis",
      "SQL & Database Design",
      "Data Visualisation (Tableau, Power BI)",
      "Statistics & Machine Learning Basics",
      "Business Intelligence & Reporting",
    ],
    whatYouBuild: [
      "End-to-end data pipeline in Python",
      "Interactive BI dashboard for a real dataset",
      "Predictive model with documented methodology",
    ],
    schedule: "Tue & Thu · 19:00–21:30 · Lisbon campus + online\n14 months · Sept 2026 intake",
  },
  {
    name: "Project Management",
    desc: "Agile, Scrum, Stakeholder Management — lead teams and deliver projects on time.",
    image: "/covers/project-management.png",
    iconBg: "#F0FDF4",
    iconColor: "#16A34A",
    salary: "€2 000–3 500/mo",
    salarySource: "Source: Glassdoor Portugal, 2025",
    tags: ["Agile", "Scrum", "Jira", "Stakeholder Mgmt"],
    duration: "13 months",
    modules: [
      "Agile & Scrum Frameworks",
      "Project Planning & Risk Management",
      "Stakeholder Communication",
      "Budgeting & Resource Allocation",
      "Tools: Jira, Notion, MS Project",
    ],
    whatYouBuild: [
      "Full project plan for a real-world brief",
      "Sprint retrospective documentation",
      "Stakeholder presentation with risk register",
    ],
    schedule: "Wed & Fri · 19:00–21:30 · Porto campus + online\n13 months · Sept 2026 intake",
  },
];

function IconMegaphone({ color, size = 18 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 11 18-5v12L3 14v-3z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </svg>
  );
}

function IconChartLine({ color, size = 18 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  );
}

function IconLayoutDashboard({ color, size = 18 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
    </svg>
  );
}

function IconTimer() {
  return (
    <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function IconSunset() {
  return (
    <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 10V2" />
      <path d="m4.93 10.93 1.41 1.41" />
      <path d="M2 18h2" />
      <path d="M20 18h2" />
      <path d="m19.07 10.93-1.41 1.41" />
      <path d="M22 22H2" />
      <path d="m16 6-4 4-4-4" />
      <path d="M16 18a4 4 0 0 0-8 0" />
    </svg>
  );
}

function IconMessageCircle() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}

function IconChevronDown() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function ProgrammeIcon({ name, color, size = 18 }: { name: string; color: string; size?: number }) {
  if (name === "Digital Marketing") return <IconMegaphone color={color} size={size} />;
  if (name === "Data Analytics") return <IconChartLine color={color} size={size} />;
  return <IconLayoutDashboard color={color} size={size} />;
}

function IconChevronUp() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );
}


export default function Programmes() {
  const [detailsOpen, setDetailsOpen] = useState(false);

  // Mobile scroll tracking
  const trackRef   = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const total = el.scrollWidth - el.clientWidth;
      const seg   = total / (programmes.length - 1);
      if (seg > 0) setActiveDot(Math.min(Math.max(Math.round(el.scrollLeft / seg), 0), programmes.length - 1));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  // A) Dots navigation
  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const firstCard = el.children[0] as HTMLElement;
    const step = firstCard.offsetWidth + 12;
    el.scrollTo({ left: i * step, behavior: "smooth" });
  };

  return (
    <section id="programmes" className="bg-[#F1F5F9]">
      {/* ── Mobile (§05 Programmes Mobile) ── */}
      <div ref={sectionRef} className="md:hidden flex flex-col gap-5 pt-10 pb-10">

        <style>{`
          /* C) CTA shimmer + pulse */
          @keyframes progCTAShimmer {
            0%   { background-position: -200% center; }
            100% { background-position:  200% center; }
          }
          .prog-cta-shimmer {
            background: linear-gradient(90deg, #E86339 0%, #F97316 38%, #FFAC6B 50%, #F97316 62%, #E86339 100%);
            background-size: 200% auto;
            animation: progCTAShimmer 2.4s linear infinite;
          }
          @keyframes progCTAPulse {
            0%, 85%, 100% { box-shadow: 0 4px 16px rgba(232,99,57,0.3); }
            92%            { box-shadow: 0 8px 28px rgba(232,99,57,0.5); }
          }
          .prog-cta-pulse { animation: progCTAPulse 3.5s ease-in-out infinite; }
        `}</style>

        {/* Header */}
        <motion.div
          className="flex flex-col items-center gap-4 px-5 text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-[#E86339] font-semibold uppercase" style={{ fontSize: 10, letterSpacing: 2 }}>
            OUR PROGRAMMES
          </p>
          <h2 className="text-[#1E293B] font-bold leading-[1.2] w-full" style={{ fontSize: 20 }}>
            Choose Your Programme — Start Studying, Keep Working
          </h2>
          <p className="text-[#64748B]" style={{ fontSize: 14 }}>
            Evening · 13+ months · Licensed · Permit Renewal
          </p>
        </motion.div>

        {/* B) paddingLeft instead of spacer div */}
        <div
          ref={trackRef}
          className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide"
          style={{
            scrollSnapType: "x mandatory",
            scrollPaddingLeft: 20,
            WebkitOverflowScrolling: "touch",
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          {programmes.map((p, idx) => {
            const isOpen = detailsOpen;
            return (
              // ① Card entrance stagger
              <motion.article
                key={p.name}
                className="flex w-[300px] flex-shrink-0 flex-col overflow-hidden rounded-[20px] border border-[#E2E8F0] bg-white"
                style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06), 0 12px 32px rgba(0,0,0,0.10)", scrollSnapAlign: "start" }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.45, ease, delay: 0.1 + idx * 0.1 } as Transition}
              >
                <div className="relative h-[160px] w-full flex-shrink-0 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt="" className="h-full w-full object-cover" />
                  {/* ③ Most Popular badge on mobile */}
                  {p.badge && (
                    <span
                      className="absolute top-3 left-3 rounded-full font-bold text-white"
                      style={{ background: "#E85D26", fontSize: 11, padding: "5px 12px" }}
                    >
                      {p.badge}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[10px]"
                      style={{ background: p.iconBg }}
                    >
                      <ProgrammeIcon name={p.name} color={p.iconColor} />
                    </div>
                    <h3 className="text-[#1E293B] font-bold" style={{ fontSize: 18 }}>
                      {p.name}
                    </h3>
                  </div>
                  <p className="text-[#64748B] leading-[1.5]" style={{ fontSize: 13, minHeight: "59px" }}>
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full bg-[#F1F5F9] px-3 py-1 font-semibold text-[#475569]" style={{ fontSize: 11 }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1 text-[#64748B]" style={{ fontSize: 12, fontWeight: 500 }}>
                      <IconTimer />
                      {p.duration}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[#64748B]" style={{ fontSize: 12, fontWeight: 500 }}>
                      <IconSunset />
                      Evening classes
                    </span>
                  </div>
                  {/* Salary block */}
                  <div>
                    <p style={{ fontSize: 10, fontWeight: 700, color: "#16A34A", letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 3 }}>
                      After graduation
                    </p>
                    <p className="text-[#1E293B] font-extrabold tracking-[-0.5px]" style={{ fontSize: 16 }}>
                      {p.salary}
                    </p>
                    <p className="text-[#94A3B8]" style={{ fontSize: 11 }}>
                      Average EU remote salary
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-[#F1F5F9]" />

                  {/* Investment block */}
                  <div>
                    <p style={{ fontSize: 10, fontWeight: 700, color: "#64748B", letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 3 }}>
                      Your investment
                    </p>
                    <p className="text-[#1E293B] font-extrabold tracking-[-0.5px]" style={{ fontSize: 16 }}>
                      from €125/month
                    </p>
                    <p className="text-[#94A3B8]" style={{ fontSize: 11 }}>
                      Full 12-month programme
                    </p>
                  </div>

                  {/* ② Expandable details — AnimatePresence */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="details"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        <div className="flex flex-col rounded-xl border border-[#E2E8F0] overflow-hidden">
                          {/* Programme info */}
                          <div className="flex flex-col gap-2 p-4">
                            <p className="font-semibold uppercase tracking-widest text-[#94A3B8]" style={{ fontSize: 11 }}>
                              PROGRAMME INFO
                            </p>
                            {[
                              { label: "Format", value: "40% offline + 60% online" },
                              { label: "Study time", value: "~3 h / day, 2× per week" },
                              { label: "Tuition", value: "Flexible payments" },
                              { label: "City", value: "Lisbon, Porto" },
                            ].map(({ label, value }) => (
                              <div key={label} className="flex items-start gap-1.5">
                                <span className="text-[#94A3B8]" style={{ fontSize: 12, minWidth: 76 }}>{label}:</span>
                                <span className="text-[#1E293B]" style={{ fontSize: 12, fontWeight: 500 }}>{value}</span>
                              </div>
                            ))}
                          </div>
                          <div className="h-px bg-[#E2E8F0]" />
                          <div className="flex flex-col gap-2 p-4">
                            <p className="font-semibold uppercase tracking-widest text-[#94A3B8]" style={{ fontSize: 11 }}>
                              PROGRAMME MODULES
                            </p>
                            {p.modules.map((m) => (
                              <p key={m} className="text-[#1E293B]" style={{ fontSize: 13 }}>· {m}</p>
                            ))}
                          </div>
                          <div className="h-px bg-[#E2E8F0]" />
                          <div className="flex flex-col gap-2 p-4">
                            <p className="font-semibold uppercase tracking-widest text-[#94A3B8]" style={{ fontSize: 11 }}>
                              WHAT YOU BUILD
                            </p>
                            {p.whatYouBuild.map((w) => (
                              <p key={w} className="text-[#1E293B]" style={{ fontSize: 13 }}>· {w}</p>
                            ))}
                          </div>
                          <div className="h-px bg-[#E2E8F0]" />
                          <div className="flex flex-col gap-2 p-4">
                            <p className="font-semibold uppercase tracking-widest text-[#94A3B8]" style={{ fontSize: 11 }}>
                              SCHEDULE
                            </p>
                            {p.schedule.split("\n").map((line, i) => (
                              <p key={i} className="text-[#1E293B]" style={{ fontSize: 13 }}>{line}</p>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    type="button"
                    onClick={() => setDetailsOpen(!detailsOpen)}
                    className="mt-auto flex h-[45px] w-full items-center justify-center gap-2 rounded-xl border text-[#E85D26]"
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      borderColor: isOpen ? "#E85D26" : "#E2E8F0",
                      background: isOpen ? "#FFFFFF" : "#F8FAFC",
                      transition: "border-color 0.2s ease, background 0.2s ease",
                    }}
                  >
                    {isOpen ? "Hide details" : "Show details"}
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.22 }}
                      style={{ display: "flex" }}
                    >
                      <IconChevronDown />
                    </motion.span>
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* A) Dots + counter */}
        <div className="flex items-center justify-center gap-3">
          <div className="flex items-center gap-1.5">
            {programmes.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                style={{
                  width: i === activeDot ? 20 : 6,
                  height: 6,
                  borderRadius: 3,
                  background: i === activeDot ? "#E85D26" : "#CBD5E1",
                  transition: "width 0.2s ease, background-color 0.2s ease",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
          <span style={{ fontSize: 12, color: "#94A3B8", fontWeight: 500 }}>
            {activeDot + 1} / {programmes.length}
          </span>
        </div>

        {/* C) CTA — shimmer + pulse */}
        <div className="flex flex-col items-center gap-[15px] px-5 mt-2">
          <p className="text-center text-[#64748B]" style={{ fontSize: 13 }}>
            Not sure which programme to choose?
          </p>
          <a
            href="#consult"
            className="prog-cta-shimmer prog-cta-pulse inline-flex items-center gap-2 rounded-[10px] px-5 py-3 text-white w-full justify-center"
            style={{ fontSize: 13, fontWeight: 600, textDecoration: "none" }}
          >
            <IconMessageCircle />
            Talk to our coordinator →
          </a>
        </div>
      </div>

      {/* ── Desktop (§05 Programmes Desktop) ── */}
      <div className="hidden md:block py-20">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-[160px]">
          <FadeUp>
            <div className="mb-10 flex flex-col items-center text-center">
              <p className="text-[#E86339] font-semibold uppercase" style={{ fontSize: 11, letterSpacing: 2 }}>
                OUR PROGRAMMES
              </p>
              <div className="h-5" />
              <h2 className="text-[#1E293B] text-[36px] font-bold">Choose Your Programme — Start Studying, Keep Working</h2>
              <div className="h-4" />
              <p className="text-[#64748B]" style={{ fontSize: 16 }}>
                Evening · 13+ months · Licensed · Permit Renewal
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-3 gap-5">
            {programmes.map((p, i) => (
              <FadeUp key={p.name} delay={i * 0.08}>
                <div
                  className="flex h-full flex-col overflow-hidden rounded-[20px] border border-[#E2E8F0] bg-white"
                  style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06), 0 12px 32px rgba(0,0,0,0.10)" }}
                >
                  <div className="relative h-[185px] w-full flex-shrink-0 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.image} alt="" className="h-full w-full object-cover" />
                    {p.badge && (
                      <span
                        className="absolute left-4 top-4 rounded-full font-bold text-white"
                        style={{ background: "#E85D26", fontSize: 11, padding: "6px 14px" }}
                      >
                        {p.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col gap-[17px] p-7">
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl"
                        style={{ background: p.iconBg }}
                      >
                        <ProgrammeIcon name={p.name} color={p.iconColor} size={22} />
                      </div>
                      <h3 className="text-[#1E293B] text-[22px] font-bold">{p.name}</h3>
                    </div>
                    <p className="text-[#64748B] leading-[1.6]" style={{ fontSize: 14 }}>
                      {p.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-[#F1F5F9] px-3 py-1.5 font-semibold text-[#475569]"
                          style={{ fontSize: 11 }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="h-px w-full bg-[#F1F5F9]" />
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="inline-flex items-center gap-1.5 text-[#64748B]" style={{ fontSize: 13, fontWeight: 500 }}>
                        <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        13 months
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[#64748B]" style={{ fontSize: 13, fontWeight: 500 }}>
                        <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 10V2" />
                          <path d="m4.93 10.93 1.41 1.41" />
                          <path d="M2 18h2" />
                          <path d="M20 18h2" />
                          <path d="m19.07 10.93-1.41 1.41" />
                          <path d="M22 22H2" />
                          <path d="m16 6-4 4-4-4" />
                          <path d="M16 18a4 4 0 0 0-8 0" />
                        </svg>
                        Evening classes
                      </span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <p className="text-[#1E293B] font-extrabold tracking-[-0.5px]" style={{ fontSize: 18 }}>
                        {p.salary}
                      </p>
                      <p className="text-[#94A3B8]" style={{ fontSize: 12, fontWeight: 500 }}>
                        Average EU remote salary after graduation
                      </p>
                      <p className="text-[#CBD5E1]" style={{ fontSize: 12 }}>
                        Source: Glassdoor Portugal, 2025
                      </p>
                    </div>
                    <a
                      href="#consult"
                      className="mt-auto flex h-[45px] w-full max-w-[304px] items-center justify-center gap-2 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] text-[#475569] transition-colors hover:bg-[#F1F5F9]"
                      style={{ fontSize: 14, fontWeight: 600 }}
                    >
                      Show details
                      <IconChevronDown />
                    </a>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.25} className="mt-10 flex flex-col items-center gap-4">
            <p className="text-[#64748B]" style={{ fontSize: 14 }}>
              Not sure which programme to choose?
            </p>
            <a
              href="#consult"
              className="inline-flex h-12 items-center gap-2 rounded-[10px] bg-[#E85D26] px-8 text-white transition-opacity hover:opacity-95"
              style={{ fontSize: 14, fontWeight: 600 }}
            >
              <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
              </svg>
              Talk to our coordinator →
            </a>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
