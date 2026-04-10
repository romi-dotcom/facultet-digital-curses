"use client";

import { useEffect, useRef, useState } from "react";
import FadeUp from "./FadeUp";

type Programme = {
  name: string;
  desc: string;
  image: string;
  iconBg: string;
  iconColor: string;
  salary: string;
  tags: string[];
  badge?: string;
};

const programmes: Programme[] = [
  {
    name: "Digital Marketing",
    desc: "SEO, PPC, Social Media, Analytics — learn to drive growth for any business.",
    image:
      "https://images.unsplash.com/photo-1649762202604-cc7cf2737aa0?w=800&q=80",
    iconBg: "#FFF7ED",
    iconColor: "#E85D26",
    salary: "€1 200–1 800/mo",
    tags: ["SEO", "Google Ads", "Social Media", "Analytics"],
    badge: "Most Popular",
  },
  {
    name: "Data Analytics",
    desc: "Python, SQL, Tableau, Power BI — transform raw data into business decisions.",
    image:
      "https://images.unsplash.com/photo-1686061593213-98dad7c599b9?w=800&q=80",
    iconBg: "#EFF6FF",
    iconColor: "#3B82F6",
    salary: "€2 500–4 000/mo",
    tags: ["Python", "SQL", "Tableau", "Power BI"],
  },
  {
    name: "Project Management",
    desc: "Agile, Scrum, Stakeholder Management — lead teams and deliver projects on time.",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    iconBg: "#F0FDF4",
    iconColor: "#16A34A",
    salary: "€2 000–3 500/mo",
    tags: ["Agile", "Scrum", "Jira", "Stakeholder Mgmt"],
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

export default function Programmes() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const CARD = 300;
    const GAP = 12;
    const step = CARD + GAP;
    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / step);
      setActive(Math.min(Math.max(idx, 0), programmes.length - 1));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="programmes" className="bg-white">
      {/* ── Mobile (§05 Programmes Mobile) ── */}
      <div className="md:hidden flex flex-col gap-5 pt-10 pb-10">
        <FadeUp>
          <div className="flex flex-col items-center gap-4 px-5 text-center">
            <p className="text-[#E86339] font-semibold uppercase" style={{ fontSize: 10, letterSpacing: 2 }}>
              OUR PROGRAMMES
            </p>
            <h2 className="text-[#1E293B] font-bold leading-[1.2] w-full" style={{ fontSize: 20 }}>
              Choose Your Programme — Start Studying, Keep Working
            </h2>
            <p className="text-[#64748B]" style={{ fontSize: 14 }}>
              Evening · 13+ months · Licensed · Permit Renewal
            </p>
            <p className="text-[#94A3B8]" style={{ fontSize: 12 }}>
              Trusted by 423 students from 12 countries
            </p>
          </div>
        </FadeUp>

        <div
          ref={scrollRef}
          className="flex h-[512px] items-center gap-3 overflow-x-auto pl-5 pr-5 scrollbar-hide"
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
        >
          {programmes.map((p) => (
            <article
              key={p.name}
              className="flex h-[476px] w-[300px] flex-shrink-0 flex-col overflow-hidden rounded-[20px] border border-[#E2E8F0] bg-white"
              style={{
                boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
                scrollSnapAlign: "start",
              }}
            >
              <div className="relative h-[160px] w-full flex-shrink-0 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="flex min-h-0 flex-1 flex-col justify-between gap-3 p-5">
                <div className="flex flex-col gap-3">
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
                  <p className="text-[#64748B] leading-[1.5]" style={{ fontSize: 13 }}>
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1 text-[#64748B]" style={{ fontSize: 12, fontWeight: 500 }}>
                      <IconTimer />
                      13 months
                    </span>
                    <span className="inline-flex items-center gap-1 text-[#64748B]" style={{ fontSize: 12, fontWeight: 500 }}>
                      <IconSunset />
                      Evening classes
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div>
                    <p className="text-[#1E293B] font-extrabold tracking-[-0.5px]" style={{ fontSize: 16 }}>
                      {p.salary}
                    </p>
                    <p className="text-[#94A3B8]" style={{ fontSize: 11 }}>
                      Average EU remote salary after graduation
                    </p>
                  </div>
                  <a
                    href="#consult"
                    className="flex h-[45px] w-[260px] max-w-full items-center justify-center gap-2 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] text-[#475569]"
                    style={{ fontSize: 14, fontWeight: 600 }}
                  >
                    Show details
                    <IconChevronDown />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center gap-1.5">
          {programmes.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Programme ${i + 1}`}
              className="rounded-sm border-0 p-0"
              style={{
                width: i === active ? 20 : 6,
                height: 6,
                background: i === active ? "#E85D26" : "#CBD5E1",
              }}
              onClick={() => {
                const el = scrollRef.current;
                if (!el) return;
                el.scrollTo({ left: i * (300 + 12), behavior: "smooth" });
              }}
            />
          ))}
        </div>

        <div className="flex flex-col items-center gap-[15px] px-5">
          <p className="text-center text-[#64748B]" style={{ fontSize: 13 }}>
            Not sure which programme to choose?
          </p>
          <a
            href="#consult"
            className="inline-flex items-center gap-2 rounded-[10px] bg-[#E85D26] px-5 py-3 text-white"
            style={{ fontSize: 13, fontWeight: 600 }}
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
              <div className="h-3" />
              <p className="text-[#94A3B8]" style={{ fontSize: 13 }}>
                Trusted by 423 students from 12 countries
              </p>
              <div className="h-2" />
            </div>
          </FadeUp>

          <div className="grid grid-cols-3 gap-5">
            {programmes.map((p, i) => (
              <FadeUp key={p.name} delay={i * 0.08}>
                <div
                  className="flex h-full flex-col overflow-hidden rounded-[20px] border border-[#E2E8F0] bg-white"
                  style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.10)" }}
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
