"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const trustItems = ["✓ Free", "✓ No commitment", "✓ 2h response"];

function useSequentialTypewriter(items: string[], inView: boolean, charSpeed = 40, pauseBetween = 350) {
  const [itemIdx, setItemIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (itemIdx >= items.length) return;
    const current = items[itemIdx];
    if (charIdx < current.length) {
      const t = setTimeout(() => setCharIdx(c => c + 1), charSpeed);
      return () => clearTimeout(t);
    } else if (itemIdx < items.length - 1) {
      const t = setTimeout(() => { setItemIdx(i => i + 1); setCharIdx(0); }, pauseBetween);
      return () => clearTimeout(t);
    }
  }, [inView, itemIdx, charIdx, items, charSpeed, pauseBetween]);

  return items.map((item, i) => {
    if (i < itemIdx) return item;
    if (i === itemIdx) return item.slice(0, charIdx);
    return "";
  });
}

export default function CTAMobileForm() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const typed = useSequentialTypewriter(trustItems, inView);

  return (
    <section
      ref={ref}
      className="md:hidden cta-form-bg relative overflow-hidden"
      style={{ padding: "48px 20px" }}
    >
      <style>{`
        @keyframes formBgDrift {
          0%, 100% { background-position: 0% 50%; }
          50%       { background-position: 100% 50%; }
        }
        .cta-form-bg {
          background: linear-gradient(135deg, #1A1A2E 0%, #2A1F1A 40%, #1A1F2E 70%, #2A1F1A 100%);
          background-size: 300% 300%;
          animation: formBgDrift 9s ease-in-out infinite;
        }
        @keyframes formBtnShimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .form-btn-shimmer {
          background: linear-gradient(90deg, #E86339 0%, #F97316 38%, #FFAC6B 50%, #F97316 62%, #E86339 100%);
          background-size: 200% auto;
          animation: formBtnShimmer 2.4s linear infinite;
        }
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        .tw-cursor { animation: cursorBlink 0.7s ease-in-out infinite; }
        @keyframes formBtnPulse {
          0%, 85%, 100% { transform: scale(1);     box-shadow: 0 4px 16px rgba(232,99,57,0.3); }
          92%            { transform: scale(1.025); box-shadow: 0 8px 28px rgba(232,99,57,0.5); }
        }
        .form-btn-pulse { animation: formBtnPulse 3.5s ease-in-out infinite; }
      `}</style>

      <motion.h3
        initial={{ opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-white text-center"
        style={{ fontSize: 24, fontWeight: 700, lineHeight: 1.2 }}
      >
        Ready to sort out your student permit?
      </motion.h3>

      <div style={{ height: 12 }} />

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
        className="text-center"
        style={{ color: "#94A3B8", fontSize: 14, lineHeight: 1.5 }}
      >
        Fill in two fields — your coordinator will call back within 2 hours. No paperwork needed at this stage.
      </motion.p>

      <div style={{ height: 20 }} />

      {/* Trust items — sequential typewriter */}
      <div style={{ position: "relative" }}>
        <div aria-hidden="true" className="flex items-center justify-center" style={{ gap: 12, visibility: "hidden" }}>
          {trustItems.map(item => (
            <span key={item} style={{ fontSize: 13 }}>{item}</span>
          ))}
        </div>
        <div className="flex items-center justify-center" style={{ gap: 12, position: "absolute", top: 0, left: 0, right: 0 }}>
          {trustItems.map((item, i) => {
            const isTyping = typed[i].length > 0 && typed[i].length < item.length;
            const isNext = i > 0 && typed[i - 1] === trustItems[i - 1] && typed[i].length === 0;
            const showCursor = isTyping || (i === 0 && typed[0].length === 0 && inView) || isNext;
            return (
              <span key={item} style={{ color: "#CBD5E1", fontSize: 13 }}>
                {typed[i]}
                {showCursor && <span className="tw-cursor">|</span>}
              </span>
            );
          })}
        </div>
      </div>

      <div style={{ height: 32 }} />

      {/* CTA button — scrolls to main form */}
      <motion.a
        href="#consult"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
        className="form-btn-shimmer form-btn-pulse flex items-center justify-center"
        style={{
          width: "100%",
          height: 54,
          borderRadius: 10,
          color: "#FFFFFF",
          fontSize: 16,
          fontWeight: 700,
          textDecoration: "none",
          display: "flex",
        }}
      >
        Get My Free Consultation →
      </motion.a>
    </section>
  );
}
