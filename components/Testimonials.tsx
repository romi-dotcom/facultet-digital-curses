"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import FadeUp from "./FadeUp";

const videos = [
  {
    name: "Student Review",
    duration: "0:52",
    quote: "\"Facultet changed everything for me — both my career and my legal status in Portugal.\"",
    src: "https://atdao8v8f9itay9b.public.blob.vercel-storage.com/IMG_7815.MP4",
  },
  {
    name: "Maria Fernandes",
    duration: "0:49",
    quote: "\"I landed my first job in Lisbon within 3 months of enrolling\"",
    src: "https://atdao8v8f9itay9b.public.blob.vercel-storage.com/1.mp4",
  },
  {
    name: "Arjun Mehta",
    duration: "0:59",
    quote: "\"Renewing my permit felt like a maze. Facultet prepared every document — AIMA accepted it all first time.\"",
    src: "https://atdao8v8f9itay9b.public.blob.vercel-storage.com/2.mp4",
  },
];

// ── rAF counter ───────────────────────────────────────────────────────────────

function useCounter(target: number, inView: boolean, duration = 1200) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf: number;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);
  return val;
}

// ── VideoCard ─────────────────────────────────────────────────────────────────

function VideoCard({ src, name, duration, height, objectPosition = "center" }: { src: string; name: string; duration: string; height: number; objectPosition?: string }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggle = () => {
    if (!videoRef.current) return;
    if (playing) { videoRef.current.pause(); setPlaying(false); }
    else          { videoRef.current.play();  setPlaying(true);  }
  };

  return (
    <div
      className="relative overflow-hidden rounded-xl cursor-pointer w-full"
      style={{ height }}
      onClick={toggle}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        style={{ objectPosition }}
        playsInline
        preload="metadata"
        onEnded={() => setPlaying(false)}
      />

      {/* B) Duration pill — top right */}
      <div
        className="absolute flex items-center gap-1 rounded-full pointer-events-none"
        style={{ top: 10, right: 10, padding: "4px 10px", background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
      >
        <svg width={10} height={10} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
        </svg>
        <span style={{ fontSize: 11, color: "white", fontWeight: 600 }}>{duration}</span>
      </div>

      {/* ③ Play overlay with ping ring + C) "Tap to watch" */}
      {!playing && (
        <>
          {/* ③ Ping ring */}
          <div
            className="absolute rounded-full pointer-events-none play-ping"
            style={{ width: 88, height: 88, left: "50%", top: "50%", transform: "translate(-50%, -50%)", background: "#E85D2622", border: "2px solid #E85D2655" }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 pointer-events-none">
            <div
              className="flex items-center justify-center rounded-full"
              style={{ width: 64, height: 64, background: "rgba(232,93,38,0.92)", boxShadow: "0 4px 20px rgba(232,93,38,0.45)" }}
            >
              <svg width={28} height={28} viewBox="0 0 24 24" fill="white">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
            {/* C) Tap to watch hint */}
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.75)", fontWeight: 500, letterSpacing: "0.5px" }}>
              Tap to watch
            </span>
          </div>
        </>
      )}

      {/* Info bar — name only (duration moved to pill) */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ padding: "28px 16px 14px", background: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.72) 100%)" }}
      >
        <span className="text-white font-bold" style={{ fontSize: 13 }}>{name}</span>
      </div>
    </div>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function Testimonials() {
  // Mobile section inView
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef  = useRef<HTMLDivElement>(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: "-60px" });

  // ④ Reactive dots
  const [activeDot, setActiveDot] = useState(0);
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const total = el.scrollWidth - el.clientWidth;
      const seg   = total / (videos.length - 1);
      setActiveDot(Math.min(Math.max(Math.round(el.scrollLeft / seg), 0), videos.length - 1));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  // ⑤ Google count-up
  const googleRef = useRef<HTMLDivElement>(null);
  const googleInView = useInView(googleRef, { once: true, margin: "-40px" });
  const reviewCount = useCounter(47, googleInView, 1100);

  return (
    <section id="testimonials" className="bg-white">

      {/* ── Mobile ── */}
      <div ref={sectionRef} className="md:hidden flex flex-col gap-6 pt-10 pb-10">

        <style>{`
          /* ③ Play button ping ring */
          @keyframes playPing {
            0%   { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
            100% { transform: translate(-50%, -50%) scale(1.9); opacity: 0; }
          }
          .play-ping { animation: playPing 2s ease-out infinite; }

          /* ⑤ Star stagger pop-in */
          @keyframes starPop {
            0%   { opacity: 0; transform: scale(0.5); }
            70%  { transform: scale(1.2); }
            100% { opacity: 1; transform: scale(1); }
          }
          .star-pop { animation: starPop 0.35s ease-out both; }
        `}</style>

        {/* ① Header — FadeUp */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col gap-2 px-5 text-center"
        >
          <h2 className="text-[#1E293B] font-bold" style={{ fontSize: 22 }}>
            Watch Their Journey
          </h2>
          <p className="text-[#64748B]" style={{ fontSize: 14 }}>
            Unscripted stories from real Facultet graduates
          </p>
        </motion.div>

        {/* ② Scroll cards — stagger + A) peek next card */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide"
          style={{ scrollSnapType: "x mandatory", scrollPaddingLeft: 20, WebkitOverflowScrolling: "touch", paddingLeft: 20, paddingRight: 20 }}
        >
          {videos.map(({ name, duration, quote, src }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={sectionInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 + i * 0.1 }}
              className="flex-shrink-0 flex flex-col gap-2.5"
              style={{ width: "calc(100vw - 72px)", scrollSnapAlign: "start" }}
            >
              {/* A) Peek: card fills most of viewport, next card visible ~16px */}
              <VideoCard src={src} name={name} duration={duration} height={380} objectPosition={i === 0 ? "top" : "center"} />

              {/* ⑥ Quote + D) attribution — fade in after card */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.25 + i * 0.1 }}
                className="flex flex-col gap-1"
              >
                <p className="text-[#64748B] italic font-medium leading-[1.4]" style={{ fontSize: 13 }}>
                  {quote}
                </p>
                {/* D) Attribution */}
                <p className="text-[#94A3B8] font-semibold" style={{ fontSize: 11 }}>— {name}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* ④ Dots — reactive */}
        <div className="flex items-center justify-center gap-1.5">
          {videos.map((_, i) => (
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

        {/* ⑤ Google bar — count-up + star stagger + E) CTA pill */}
        <div
          ref={googleRef}
          className="flex items-center justify-center gap-3 rounded-2xl bg-[#F8FAFC] mx-5"
          style={{ padding: "16px 20px" }}
        >
          <span className="text-[#4285F4] font-bold leading-none" style={{ fontSize: 28 }}>G</span>
          <div className="bg-[#E2E8F0]" style={{ width: 1, height: 36 }} />
          <div className="flex flex-col items-center gap-0.5">
            <span className="text-[#1E293B] font-bold" style={{ fontSize: 20 }}>{googleInView ? reviewCount : 0}</span>
            {/* ⑤ Star stagger */}
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={googleInView ? "star-pop" : ""}
                  style={{ animationDelay: `${i * 80}ms`, opacity: googleInView ? undefined : 0 }}
                  width={12} height={12} viewBox="0 0 24 24" fill="#FBBF24"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <span className="text-[#64748B]" style={{ fontSize: 11 }}>reviews on Google</span>
          </div>
          <div className="bg-[#E2E8F0]" style={{ width: 1, height: 36 }} />
          {/* E) CTA as pill button */}
          <a
            href="#"
            className="flex items-center font-semibold rounded-full"
            style={{ fontSize: 12, color: "#E85D26", border: "1.5px solid #E85D26", padding: "6px 12px", whiteSpace: "nowrap" }}
          >
            Read all →
          </a>
        </div>
      </div>

      {/* ── Desktop ── */}
      <div className="hidden md:block py-20">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-[160px]">

          <FadeUp className="text-center mb-8">
            <h2 className="text-[#1E293B] font-bold" style={{ fontSize: 40 }}>
              Watch Their Journey
            </h2>
            <p className="text-[#64748B] mt-3" style={{ fontSize: 14 }}>
              Unscripted stories from real Facultet graduates
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="flex gap-5 justify-center">
              {videos.map(({ name, duration, quote, src }, i) => (
                <div key={name} className="flex flex-col gap-2.5 w-[280px]">
                  <VideoCard src={src} name={name} duration={duration} height={498} objectPosition={i === 0 ? "top" : "center"} />
                  <p className="text-[#64748B] text-sm italic leading-[1.4] font-medium">{quote}</p>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Google reviews badge */}
          <FadeUp delay={0.2} className="flex justify-center mt-10">
            <div className="flex items-center gap-5 bg-white border border-[#E2E8F0] rounded-2xl px-8 py-5 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
              <span className="text-[#4285F4] font-extrabold leading-none" style={{ fontSize: 32 }}>G</span>
              <div className="w-px h-12 bg-[#E2E8F0]" />
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width={16} height={16} viewBox="0 0 24 24" fill="#F59E0B">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#1E293B] text-sm font-semibold">5.0 rating</p>
              </div>
              <div className="w-px h-12 bg-[#E2E8F0]" />
              <div className="flex flex-col gap-0.5">
                <p className="text-[#1E293B] text-sm font-bold">47 reviews</p>
                <p className="text-[#64748B] text-xs">on Google</p>
              </div>
              <div className="w-px h-12 bg-[#E2E8F0]" />
              <a href="#" className="text-[#E85D26] text-sm font-semibold hover:underline">
                Read all reviews →
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
