"use client";

import { useState, useRef } from "react";
import FadeUp from "./FadeUp";

const videos = [
  {
    name: "Maria Fernandes",
    duration: "0:49",
    quote: "\"I landed my first job in Lisbon within 3 months of enrolling\"",
    src: "/reviews/1.mp4",
  },
  {
    name: "Arjun Mehta",
    duration: "0:59",
    quote: "\"Renewing my permit felt like a maze. Facultet prepared every document — AIMA accepted it all first time.\"",
    src: "/reviews/2.mp4",
  },
  {
    name: "Ana L.",
    duration: "0:56",
    quote: "\"From assistant to freelance PM — all in just 4 months\"",
    src: "/reviews/3.mp4",
  },
];

function VideoCard({ src, name, duration, width, height }: { src: string; name: string; duration: string; width: number; height: number }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggle = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div
      className="relative overflow-hidden rounded-xl cursor-pointer flex-shrink-0"
      style={{ width, height }}
      onClick={toggle}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        playsInline
        preload="metadata"
        onEnded={() => setPlaying(false)}
      />

      {/* Overlay: pulse ring + play button */}
      {!playing && (
        <>
          <div
            className="absolute rounded-full pointer-events-none"
            style={{ width: 88, height: 88, left: "50%", top: "50%", transform: "translate(-50%, -50%)", background: "#E85D2633", border: "2px solid #E85D2666" }}
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="flex items-center justify-center rounded-full"
              style={{ width: 64, height: 64, background: "rgba(232,93,38,0.9)" }}
            >
              <svg width={28} height={28} viewBox="0 0 24 24" fill="white">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
          </div>
        </>
      )}

      {/* Info bar */}
      <div
        className="absolute bottom-0 left-0 right-0 flex items-center justify-between pointer-events-none"
        style={{ padding: "12px 16px", background: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)" }}
      >
        <span className="text-white font-bold" style={{ fontSize: 13 }}>{name}</span>
        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.7)" }}>{duration}</span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white">

      {/* ── Mobile ── */}
      <div className="md:hidden flex flex-col gap-6 pt-10 pb-10">

        {/* Header */}
        <div className="flex flex-col gap-2 px-5 text-center">
          <h2 className="text-[#1E293B] font-bold" style={{ fontSize: 22 }}>
            Watch Their Journey
          </h2>
          <p className="text-[#64748B]" style={{ fontSize: 14 }}>
            Unscripted stories from real Facultet graduates
          </p>
        </div>

        {/* Scroll */}
        <div
          className="flex gap-4 overflow-x-auto scrollbar-hide"
          style={{ scrollSnapType: "x mandatory", scrollPaddingLeft: 20, WebkitOverflowScrolling: "touch", paddingLeft: 20, paddingRight: 20 }}
        >
          {videos.map(({ name, duration, quote, src }) => (
            <div
              key={name}
              className="flex-shrink-0 flex flex-col items-center gap-2.5"
              style={{ width: 260, scrollSnapAlign: "start" }}
            >
              <VideoCard src={src} name={name} duration={duration} width={260} height={380} />
              <p className="text-[#64748B] italic font-medium leading-[1.4]" style={{ fontSize: 13 }}>
                {quote}
              </p>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-1.5">
          <div className="bg-[#E85D26]" style={{ width: 20, height: 6, borderRadius: 3 }} />
          <div className="bg-[#CBD5E1]" style={{ width: 6, height: 6, borderRadius: 3 }} />
          <div className="bg-[#CBD5E1]" style={{ width: 6, height: 6, borderRadius: 3 }} />
        </div>

        {/* Google bar */}
        <div className="flex items-center justify-center gap-3 rounded-2xl bg-[#F8FAFC]" style={{ padding: "16px 20px" }}>
          <span className="text-[#4285F4] font-bold leading-none" style={{ fontSize: 28 }}>G</span>
          <div className="bg-[#E2E8F0]" style={{ width: 1, height: 36 }} />
          <div className="flex flex-col items-center gap-0.5">
            <span className="text-[#1E293B] font-bold" style={{ fontSize: 20 }}>5.0</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width={12} height={12} viewBox="0 0 24 24" fill="#FBBF24">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <span className="text-[#64748B]" style={{ fontSize: 11 }}>47 reviews on Google</span>
          </div>
          <div className="bg-[#E2E8F0]" style={{ width: 1, height: 36 }} />
          <a href="#" className="text-[#E85D26] font-semibold" style={{ fontSize: 13 }}>
            Read all reviews →
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
              {videos.map(({ name, duration, quote, src }) => (
                <div key={name} className="flex flex-col gap-2.5 w-[280px]">
                  <VideoCard src={src} name={name} duration={duration} width={280} height={498} />
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
