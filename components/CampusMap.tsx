"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import FadeUp from "./FadeUp";

const LISBON_IMG = "https://images.unsplash.com/photo-1733487266358-6582842194d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const PORTO_IMG  = "https://images.unsplash.com/photo-1705668598333-866ce19cd816?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

const campuses = [
  {
    img: LISBON_IMG,
    city: "Lisbon",
    address: "Rua [Placeholder], Lisbon",
    metro: "5 min from metro",
    mapsUrl: "https://maps.app.goo.gl/jUrP1UJ6FLD643xd6",
  },
  {
    img: PORTO_IMG,
    city: "Porto",
    address: "Rua [Placeholder], Porto",
    metro: "5 min from metro",
    mapsUrl: "https://maps.google.com/?q=Porto,Portugal",
  },
];

// ── B) Fixed metro icon ───────────────────────────────────────────────────────
function IconMetro() {
  return (
    <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="13" rx="3"/>
      <path d="M2 9h20"/>
      <path d="M7 16v4M17 16v4"/>
      <circle cx="7" cy="20" r="1.5"/>
      <circle cx="17" cy="20" r="1.5"/>
    </svg>
  );
}

function IconPin({ opacity = "0.7" }: { opacity?: string }) {
  return (
    <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke={`rgba(255,255,255,${opacity})`} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

// ── CampusCard ────────────────────────────────────────────────────────────────
function CampusCard({
  img, city, address, metro, mapsUrl, size, cardInView,
}: {
  img: string; city: string; address: string; metro: string;
  mapsUrl: string; size: "mobile" | "desktop"; cardInView?: boolean;
}) {
  const h = size === "desktop" ? 340 : 240;
  return (
    <div
      style={{
        position: "relative", borderRadius: 16, overflow: "hidden",
        height: h, width: "100%",
        backgroundImage: `url(${img})`,
        backgroundSize: "cover", backgroundPosition: "center", flexShrink: 0,
      }}
    >
      {/* Gradient overlay */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, #00000010 0%, #00000040 40%, #000000CC 100%)" }} />

      {/* Content */}
      <div
        style={{
          position: "absolute", inset: 0,
          display: "flex", flexDirection: "column", justifyContent: "flex-end",
          gap: size === "desktop" ? 10 : 8,
          padding: size === "desktop" ? "24px 28px" : 20,
        }}
      >
        <span style={{ color: "#FFFFFF", fontSize: size === "desktop" ? 32 : 24, fontWeight: 800, letterSpacing: -0.5 }}>
          {city}
        </span>

        <div className="flex items-center gap-1.5">
          <IconPin />
          <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 13 }}>{address}</span>
        </div>

        {/* B) Fixed metro icon */}
        <div className="flex items-center gap-1.5">
          <IconMetro />
          <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 13 }}>{metro}</span>
        </div>

        {/* A) "View on map" — real link + ④ shimmer */}
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: "rgba(255,255,255,0.20)", backdropFilter: "blur(12px)",
            borderRadius: 8, border: "1px solid rgba(255,255,255,0.30)",
            padding: size === "desktop" ? "10px 20px" : "8px 16px",
            width: "fit-content", textDecoration: "none",
            position: "relative", overflow: "hidden",
          }}
        >
          {/* ④ Shimmer sweep — plays once when card enters view */}
          {cardInView && (
            <div
              className="map-pill-shine"
              style={{
                position: "absolute", top: 0, bottom: 0,
                width: "60%", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)",
                pointerEvents: "none",
              }}
            />
          )}
          <IconPin opacity="1" />
          <span style={{ color: "white", fontSize: 13, fontWeight: 500, position: "relative" }}>View on map</span>
        </a>
      </div>
    </div>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function CampusMap() {
  const mobileRef    = useRef<HTMLDivElement>(null);
  const mobileInView = useInView(mobileRef, { once: true, margin: "-60px" });

  return (
    <section className="bg-white">

      {/* ── Mobile ── */}
      <div ref={mobileRef} className="md:hidden" style={{ padding: "48px 20px" }}>

        <style>{`
          /* ④ "View on map" pill shimmer — once */
          @keyframes mapPillShine {
            0%   { transform: translateX(-120%); }
            100% { transform: translateX(220%); }
          }
          .map-pill-shine { animation: mapPillShine 0.9s ease-out 0.5s both; }

          /* ③ CTA shimmer */
          @keyframes campusCTAShimmer {
            0%   { background-position: -200% center; }
            100% { background-position:  200% center; }
          }
          .campus-cta-shimmer {
            background: linear-gradient(90deg, #E86339 0%, #F97316 38%, #FFAC6B 50%, #F97316 62%, #E86339 100%);
            background-size: 200% auto;
            animation: campusCTAShimmer 2.4s linear infinite;
          }
          @keyframes campusCTAPulse {
            0%, 85%, 100% { transform: scale(1); box-shadow: 0 4px 16px rgba(232,99,57,0.3); }
            92%            { transform: scale(1.025); box-shadow: 0 8px 28px rgba(232,99,57,0.5); }
          }
          .campus-cta-pulse { animation: campusCTAPulse 3.5s ease-in-out infinite; }
        `}</style>

        {/* ① Header — motion.div + useInView */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={mobileInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ marginBottom: 28, textAlign: "center" }}
        >
          <h2 style={{ color: "#1E293B", fontSize: 24, fontWeight: 800, letterSpacing: -0.5, marginBottom: 8 }}>
            Here&apos;s where we are
          </h2>
          <p style={{ color: "#64748B", fontSize: 14, marginBottom: 14 }}>
            Evening classes in Lisbon and Porto — same programme, same quality.
          </p>
          {/* C) 2 campuses badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full" style={{ padding: "5px 14px", background: "#FFF7ED", border: "1px solid #FDBA74" }}>
            <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="#E85D26" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            <span style={{ color: "#E85D26", fontSize: 12, fontWeight: 600 }}>2 campuses · Lisbon &amp; Porto</span>
          </div>
        </motion.div>

        {/* ② Stagger cards + D) active tap state */}
        <div className="flex flex-col gap-4">
          {campuses.map((campus, i) => (
            <motion.div
              key={campus.city}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={mobileInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 + i * 0.1 }}
            >
              {/* D) tap active scale */}
              <div className="transition-transform duration-150 active:scale-[0.97]" style={{ transformOrigin: "center" }}>
                <CampusCard
                  img={campus.img} city={campus.city}
                  address={campus.address} metro={campus.metro}
                  mapsUrl={campus.mapsUrl} size="mobile"
                  cardInView={mobileInView}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ③ CTA — shimmer + pulse */}
        <motion.a
          href="#consult"
          initial={{ opacity: 0, y: 12 }}
          animate={mobileInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.32 }}
          className="campus-cta-shimmer campus-cta-pulse"
          style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            width: "100%", height: 52, borderRadius: 12, marginTop: 28,
            color: "white", fontSize: 15, fontWeight: 700, textDecoration: "none",
            border: "none",
          }}
        >
          <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          Schedule a Campus Visit
        </motion.a>
      </div>

      {/* ── Desktop (unchanged) ── */}
      <div className="hidden md:block" style={{ padding: "60px 160px" }}>
        <FadeUp>
          <h2 style={{ color: "#1E293B", fontSize: 40, fontWeight: 800, letterSpacing: -1, textAlign: "center", marginBottom: 8 }}>
            Here&apos;s where we are
          </h2>
          <p style={{ color: "#64748B", fontSize: 16, textAlign: "center", marginBottom: 40 }}>
            Evening classes in Lisbon and Porto — same programme, same quality.
          </p>
        </FadeUp>

        <FadeUp delay={0.05}>
          <div className="flex gap-6 justify-center">
            {campuses.map((campus) => (
              <div key={campus.city} style={{ width: 580 }}>
                <CampusCard img={campus.img} city={campus.city} address={campus.address} metro={campus.metro} mapsUrl={campus.mapsUrl} size="desktop" />
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="flex justify-center mt-10">
            <a
              href="#consult"
              style={{
                display: "flex", alignItems: "center", gap: 8,
                padding: "16px 36px", borderRadius: 12,
                background: "#E85D26", boxShadow: "0 4px 16px #E85D2640",
                color: "white", fontSize: 16, fontWeight: 700, textDecoration: "none",
              }}
            >
              <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Schedule a Campus Visit
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
