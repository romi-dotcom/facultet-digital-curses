"use client";

import { useState } from "react";
import FadeUp from "./FadeUp";

const stories = [
  {
    name: "Maria S.",
    country: "Brazil",
    programme: "UX/UI Design",
    quote: "My permit was 3 weeks from expiring. Facultet prepared all documents in 4 days — AIMA renewed it without issues. And now I'm working at a Lisbon agency.",
    outcome: "UX Designer at a Lisbon studio",
    photo: "https://images.unsplash.com/photo-1651107466227-1a7100432973?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=360&q=80",
  },
  {
    name: "Arjun P.",
    country: "India",
    programme: "Digital Marketing",
    quote: "I had 8 years of marketing experience but zero Portuguese employers called back. One semester at Facultet and I had a local certificate, a real portfolio, and an offer.",
    outcome: "Marketing Manager at Porto startup",
    photo: "https://images.unsplash.com/photo-1607710577791-a31393e17748?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=360&q=80",
  },
  {
    name: "Priya K.",
    country: "Ukraine",
    programme: "Frontend Development",
    quote: "I needed both — a legal path to stay and a way to break into tech. Facultet solved both. My permit is renewed and I'm now a junior dev at a remote company.",
    outcome: "Junior Frontend Developer, remote",
    photo: "https://images.unsplash.com/photo-1517945577684-acd9255116a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=360&q=80",
  },
];

export default function SuccessStories() {
  const [active, setActive] = useState(0);
  const story = stories[active];

  return (
    <section id="success-stories" className="bg-[#F8FAFC] py-10 lg:py-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[160px]">

        {/* Header */}
        <FadeUp>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div className="flex flex-col gap-4">
              <h2 className="text-[#1E293B] text-[22px] lg:text-[40px] font-bold leading-[1.1]">
                From Zero to Career<br />in 3–5 Months
              </h2>
              <div className="inline-flex items-center gap-1.5 bg-[#FFF7ED] text-accent border border-[#FDBA74] text-sm font-bold px-4 py-2 rounded-full self-start">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 21l4-4 4 4M12 3v14"/>
                </svg>
                Success Rate 94%
              </div>
            </div>
            <p className="text-[#64748B] leading-[1.5] max-w-sm" style={{ fontSize: 14 }}>
              How 3 students transformed their careers in Portugal
            </p>
          </div>
        </FadeUp>

        {/* Story card */}
        <FadeUp delay={0.1}>
          <div className="flex flex-col lg:flex-row rounded-[20px] overflow-hidden border border-[#E2E8F0] shadow-[0_4px_24px_rgba(0,0,0,0.06)] bg-white h-auto lg:h-[480px]">
            {/* Photo */}
            <div
              className="lg:w-[360px] h-[240px] lg:h-full flex-shrink-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${story.photo})` }}
            />

            {/* Content */}
            <div
              className="flex flex-col justify-between gap-5 p-8 lg:p-[32px] flex-1"
              style={{ borderLeft: "1px solid rgba(255,255,255,0.5)" }}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-[#1E293B] font-bold text-sm">{story.name}</p>
                    <p className="text-[#64748B] text-xs">{story.country} · {story.programme}</p>
                  </div>
                </div>

                <blockquote className="text-[#1E293B] text-xl font-semibold leading-[1.4] italic">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
              </div>

              <div className="flex items-center gap-2 mt-2">
                <svg className="text-[#22C55E] flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <p className="text-[#1E293B] text-sm font-semibold">{story.outcome}</p>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Navigation */}
        <FadeUp delay={0.15} className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={() => setActive((active - 1 + stories.length) % stories.length)}
            className="w-11 h-11 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center shadow-sm hover:shadow-md transition-all"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
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
            className="w-11 h-11 rounded-full bg-accent flex items-center justify-center shadow-[0_2px_8px_rgba(232,93,38,0.30)] hover:bg-accent-hover transition-all"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </FadeUp>
      </div>
    </section>
  );
}
