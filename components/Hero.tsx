"use client";

import { motion, type Transition } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const item = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease, delay } as Transition,
});

// ① scale-pop for eyebrow
const popItem = (delay: number) => ({
  initial: { opacity: 0, scale: 0.8, y: 8 },
  animate: { opacity: 1, scale: 1, y: 0 },
  transition: { duration: 0.5, ease, delay } as Transition,
});

export default function Hero() {
  return (
    <section className="bg-[#F8FAFC] pt-[100px]">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[160px] py-[40px] lg:py-[80px]">
        <div className="flex flex-col lg:flex-row items-start gap-5 lg:gap-20">

          {/* Left column */}
          <div className="flex flex-col gap-5 lg:w-1/2 w-full">
            {/* ① Eyebrow — scale-pop */}
            <motion.p {...popItem(0)} style={{ color: "#E85D26", fontSize: 10, fontWeight: 700, letterSpacing: 1.5 }}>
              STUDY IN PORTUGAL · LICENSED INSTITUTION
            </motion.p>

            {/* H1 — 28px mobile, 40px desktop */}
            <motion.h1 {...item(0.05)} className="text-[#1E293B] text-[28px] lg:text-[40px] font-bold leading-[1.2]">
              Keep your student permit.<br />
              Build your European career.
            </motion.h1>

            {/* Subtitle — 15px, lineHeight 1.6 */}
            <motion.p {...item(0.1)} className="text-[#64748B] leading-[1.6]" style={{ fontSize: 15 }}>
              Evening professional programmes with an official enrolment
              certificate for your AIMA residence permit renewal.
              DGERT-licensed. Real campus. Real results.
            </motion.p>

            {/* ③ Location pills — stagger */}
            <div className="flex items-center gap-2">
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease, delay: 0.25 } as Transition}
                className="flex items-center gap-1.5 bg-white border border-[#E2E8F0] rounded-full px-3.5 py-1.5 text-[#374151] text-sm"
              >
                <svg className="text-accent w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                Lisbon Campus
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease, delay: 0.33 } as Transition}
                className="flex items-center gap-1.5 bg-white border border-[#E2E8F0] rounded-full px-3.5 py-1.5 text-[#374151] text-sm"
              >
                <svg className="text-accent w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                Porto Campus
              </motion.span>
            </div>

            {/* CTA */}
            <motion.div {...item(0.3)}>
              <motion.a
                href="#consult"
                className="relative inline-flex items-center justify-center text-white text-base font-bold px-9 py-3.5 rounded-lg w-full sm:w-auto overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #F05A1A 0%, #E85D26 55%, #F5793A 100%)",
                }}
                animate={{
                  boxShadow: [
                    "0 4px 12px rgba(232,93,38,0.25)",
                    "0 6px 28px rgba(232,93,38,0.55)",
                    "0 4px 12px rgba(232,93,38,0.25)",
                  ],
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Shimmer sweep */}
                <motion.span
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(105deg, transparent 38%, rgba(255,255,255,0.22) 50%, transparent 62%)",
                  }}
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 3.2, ease: "easeInOut" }}
                />
                <span className="relative z-10">Get Free Consultation →</span>
              </motion.a>
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

          {/* Right column — hero video */}
          <motion.div
            {...item(0.2)}
            className="lg:w-1/2 w-full rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:min-h-[420px]"
          >
            <video
              src="https://atdao8v8f9itay9b.public.blob.vercel-storage.com/002.mp4"
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              poster="/gallery/gallery-1.png"
            />
          </motion.div>

        </div>

        {/* ② Scroll-hint arrow — mobile only, bounce */}
        <motion.div
          className="lg:hidden flex justify-center mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
