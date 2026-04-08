"use client";

import { motion, type Transition } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const item = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease, delay } as Transition,
});

export default function Hero() {
  return (
    <section className="bg-[#F8FAFC] pt-[64px] sm:pt-[96px]">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[160px] py-[40px] lg:py-[72px]">
        <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-20">

          {/* Left column */}
          <div className="flex flex-col gap-6 lg:w-1/2 w-full">
            {/* H1 */}
            <motion.h1 {...item(0)} className="text-[#1E293B] text-[32px] sm:text-[40px] lg:text-[44px] font-bold leading-[1.15] tracking-tight">
              Keep your student permit.<br />
              Build your European career.
            </motion.h1>

            {/* Subtitle */}
            <motion.p {...item(0.2)} className="text-[#64748B] text-base leading-[1.6]">
              Evening professional programmes with an official enrolment
              certificate for your AIMA residence permit renewal.
              DGERT-licensed. Real campus. Real results.
            </motion.p>

            {/* Location pills */}
            <motion.div {...item(0.25)} className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 bg-white border border-[#E2E8F0] rounded-full px-3.5 py-1.5 text-[#374151] text-sm">
                <svg className="text-accent w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                Lisbon Campus
              </span>
              <span className="flex items-center gap-1.5 bg-white border border-[#E2E8F0] rounded-full px-3.5 py-1.5 text-[#374151] text-sm">
                <svg className="text-accent w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                Porto Campus
              </span>
            </motion.div>

            {/* CTA */}
            <motion.div {...item(0.3)}>
              <a
                href="#consult"
                className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white text-base font-bold px-9 py-3.5 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25 w-full sm:w-auto"
              >
                Apply Now →
              </a>
            </motion.div>

            {/* Urgency strip */}
            <motion.div {...item(0.35)} className="flex items-start gap-2">
              <svg className="text-[#F59E0B] w-3 h-3 flex-shrink-0 mt-[2px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              <span className="text-[#64748B] text-xs leading-[1.5]">
                Most permits need renewal 60–90 days before expiry ·
                <br />Next intake: September 2026 · Limited spots
              </span>
            </motion.div>
          </div>

          {/* Right column — hero image */}
          <motion.div
            {...item(0.2)}
            className="lg:w-1/2 w-full rounded-2xl overflow-hidden aspect-[16/9] lg:aspect-auto lg:min-h-[420px]"
          >
            <div
              className="w-full h-full rounded-2xl"
              style={{
                background: "linear-gradient(135deg, #1E293B 0%, #E85D26 50%, #F59E0B 100%)",
                opacity: 0.85,
                minHeight: "inherit",
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center px-8">
                  <p className="text-white/40 text-sm font-medium">Campus Photo</p>
                  <p className="text-white/20 text-xs mt-1">Lisbon & Porto</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
