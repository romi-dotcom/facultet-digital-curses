"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

// ── Typewriter hook ──────────────────────────────────────────────────────────

function useTypewriter(text: string, inView: boolean, speed = 35) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    if (!inView || !text) return;
    let i = 0;
    setDisplayed("");
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [inView, text, speed]);
  return displayed;
}

// ── Highlighted heading ──────────────────────────────────────────────────────

function HighlightedText({ text, words }: { text: string; words: string[] }) {
  if (!words.length) return <>{text}</>;
  const regex = new RegExp(`(${words.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "g");
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) =>
        words.includes(part)
          ? <span key={i} className="cta-name-highlight">{part}</span>
          : <span key={i}>{part}</span>
      )}
    </>
  );
}

// ── Particles ────────────────────────────────────────────────────────────────

const particles = [
  { top: "18%",  left: "6%",  size: 7,  delay: "0s"    },
  { top: "72%",  left: "91%", size: 5,  delay: "0.9s"  },
  { top: "42%",  left: "4%",  size: 9,  delay: "1.5s"  },
  { top: "82%",  left: "78%", size: 5,  delay: "0.4s"  },
  { top: "25%",  left: "88%", size: 6,  delay: "2.1s"  },
];

// ── Props ────────────────────────────────────────────────────────────────────

interface CTAStripProps {
  heading: string;
  sub?: string;
  btnText: string;
  trust?: string;
  mobileOnly?: boolean;
  desktopOnly?: boolean;
  headingSize?: "large" | "normal";
  highlightWords?: string[];
}

// ── Component ────────────────────────────────────────────────────────────────

export default function CTAStrip({
  heading,
  sub,
  btnText,
  trust,
  mobileOnly,
  desktopOnly,
  headingSize = "normal",
  highlightWords = [],
}: CTAStripProps) {
  const wrapClass = mobileOnly ? "md:hidden" : desktopOnly ? "hidden md:block" : "";

  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  // ⑤ Typewriter on trust text
  const typewritten = useTypewriter(trust ?? "", inView, 35);

  return (
    <section
      ref={ref}
      className={`${wrapClass} cta-strip-bg py-12 px-6 lg:px-20 relative overflow-hidden`}
    >
      <style>{`
        /* ② Animated gradient background */
        @keyframes gradientDrift {
          0%, 100% { background-position: 0% 50%; }
          50%       { background-position: 100% 50%; }
        }
        .cta-strip-bg {
          background: linear-gradient(135deg, #1E293B 0%, #2A1F1A 35%, #1A1F2E 70%, #2A1F1A 100%);
          background-size: 300% 300%;
          animation: gradientDrift 9s ease-in-out infinite;
        }

        /* ③ Name highlight flicker */
        @keyframes nameGlow {
          0%, 100% { color: #F97316; }
          50%       { color: #FFAC6B; }
        }
        .cta-name-highlight {
          font-weight: 700;
          animation: nameGlow 2.8s ease-in-out infinite;
        }

        /* ④ CTA button shimmer */
        @keyframes ctaBtnShimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .cta-btn-shimmer {
          background: linear-gradient(
            90deg, #E85D26 0%, #F97316 38%, #FFAC6B 50%, #F97316 62%, #E85D26 100%
          );
          background-size: 200% auto;
          animation: ctaBtnShimmer 2.4s linear infinite;
        }

        /* ④ Button scale pulse */
        @keyframes btnScalePulse {
          0%, 85%, 100% { transform: scale(1); box-shadow: 0 4px 16px rgba(232,93,38,0.35); }
          92%            { transform: scale(1.025); box-shadow: 0 8px 28px rgba(232,93,38,0.55); }
        }
        .cta-btn-pulse { animation: btnScalePulse 3.5s ease-in-out infinite; }

        /* ⑥ Floating particles */
        @keyframes floatUp {
          0%   { transform: translateY(0) scale(1);   opacity: 0.14; }
          50%  { transform: translateY(-18px) scale(1.2); opacity: 0.22; }
          100% { transform: translateY(0) scale(1);   opacity: 0.14; }
        }
        .cta-particle { animation: floatUp 5s ease-in-out infinite; position: absolute; border-radius: 50%; background: #F97316; pointer-events: none; }
      `}</style>

      {/* ⑥ Particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="cta-particle"
          style={{ top: p.top, left: p.left, width: p.size, height: p.size, animationDelay: p.delay }}
        />
      ))}

      {/* ① Content — FadeUp */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="max-w-[1440px] mx-auto flex flex-col items-center gap-4 text-center relative z-10"
      >
        {/* ③ Heading with highlighted names */}
        <p
          className="text-white"
          style={{
            fontSize: headingSize === "large" ? 28 : 16,
            fontWeight: headingSize === "large" ? 700 : 500,
            lineHeight: 1.5,
            maxWidth: 600,
          }}
        >
          {highlightWords.length > 0
            ? <HighlightedText text={heading} words={highlightWords} />
            : heading}
        </p>

        {sub && (
          <p
            className="text-white/85 max-w-[600px] leading-relaxed"
            style={{ fontSize: headingSize === "large" ? 16 : 13 }}
            dangerouslySetInnerHTML={{ __html: sub }}
          />
        )}

        {/* ④ CTA button — shimmer + scale pulse */}
        <a
          href="#consult"
          className="cta-btn-shimmer cta-btn-pulse mt-1 inline-flex items-center text-white font-bold rounded-lg"
          style={{ fontSize: 15, padding: "14px 36px" }}
        >
          {btnText}
        </a>

        {/* ⑤ Trust text — typewriter (CLS-safe: invisible spacer reserves height) */}
        {trust && (
          <div style={{ position: "relative" }}>
            <p aria-hidden="true" style={{ visibility: "hidden", fontSize: 12, lineHeight: 1.5, margin: 0 }}>{trust}</p>
            <p className="text-white/50" style={{ position: "absolute", top: 0, left: 0, fontSize: 12, lineHeight: 1.5, margin: 0 }}>
              {inView ? typewritten : ""}
              {inView && typewritten.length < trust.length && (
                <span style={{ opacity: 0.6 }}>|</span>
              )}
            </p>
          </div>
        )}
      </motion.div>
    </section>
  );
}
