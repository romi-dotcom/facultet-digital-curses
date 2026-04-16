"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import FadeUp from "./FadeUp";

// ── Counter hook (rAF, easeOut cubic) ──────────────────────────────────────

function useCounter(target: number, inView: boolean, duration = 1300) {
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

// ── Data ───────────────────────────────────────────────────────────────────

const statDefs = [
  { target: 200, suffix: "+", lbl: ["Students", "supported"] },
  { target: 5,   suffix: "",  lbl: ["Business days", "for documents"] },
  { target: 100, suffix: "%", lbl: ["Documents", "accepted by AIMA"] },
];

const steps = [
  { num: "1", title: "Stay enrolled at Facultet",       desc: "Active enrolment at a DGERT-licensed school is the legal basis for your annual permit renewal.", orange: true  },
  { num: "2", title: "Request your renewal certificate", desc: "We issue an official active-student confirmation. Ready in 2 business days.",                     orange: false },
  { num: "3", title: "Submit renewal to AIMA",          desc: "Book your appointment at the AIMA office in Lisbon or Porto. We prepare all required documents.",  orange: false },
  { num: "4", title: "Permit renewed for another year", desc: "Continue studying, working, and building your life in Portugal. Repeat each year.",                orange: false },
];

// ── Component ───────────────────────────────────────────────────────────────

export default function VisaSteps() {
  const mobileRef = useRef<HTMLDivElement>(null);
  const mobileInView = useInView(mobileRef, { once: true, margin: "-60px" });

  // ② Stat counters
  const c0 = useCounter(200, mobileInView);
  const c1 = useCounter(5,   mobileInView);
  const c2 = useCounter(100, mobileInView);
  const counts = [c0, c1, c2];

  return (
    <section id="visa-steps" className="bg-[#F7F5F2]">

      <style>{`
        /* ⑥ Step-1 ping ring */
        @keyframes visaPing {
          0%   { transform: scale(1); opacity: 0.55; }
          100% { transform: scale(2.4); opacity: 0; }
        }
        .visa-ping { animation: visaPing 2s ease-out infinite; }

        /* ⑤ Urgency bar border pulse */
        @keyframes urgencyPulse {
          0%, 100% { border-left-color: #F59E0B; }
          50%       { border-left-color: #FCD34D; }
        }
        .urgency-pulse { animation: urgencyPulse 2.2s ease-in-out infinite; }
      `}</style>

      {/* ── Mobile ──────────────────────────────────────────────────────── */}
      <div ref={mobileRef} className="md:hidden flex flex-col gap-6 px-5 pt-10 pb-10">

        {/* ① Header — FadeUp */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={mobileInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
          className="flex flex-col gap-3 text-center"
        >
          <p className="text-[#E86339] font-semibold uppercase" style={{ fontSize: 10, letterSpacing: 2 }}>
            HOW IT WORKS
          </p>
          <h2 className="text-[#1A1A2E] font-bold leading-[1.2]" style={{ fontSize: 22 }}>
            Renew your student permit — without leaving Portugal
          </h2>
          <p className="text-[#64748B] leading-[1.6]" style={{ fontSize: 14 }}>
            Stay enrolled at a DGERT-licensed school — AIMA renews your student residence permit every year.
          </p>
        </motion.div>

        {/* ② Stats — FadeUp + counters */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={mobileInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.12 }}
          className="flex items-start"
        >
          {statDefs.map(({ suffix, lbl }, i) => (
            <div key={i} className="flex items-start flex-1">
              <div className="flex flex-col items-center flex-1 gap-1">
                <span className="text-[#1A1A2E] font-bold leading-none" style={{ fontSize: 28 }}>
                  {counts[i]}{suffix}
                </span>
                <span className="text-[#64748B] text-center leading-tight" style={{ fontSize: 11 }}>
                  {lbl.map((line, j) => <span key={j} className="block">{line}</span>)}
                </span>
              </div>
              {i < 2 && <div className="flex-shrink-0 bg-[#E2E0DC] self-stretch" style={{ width: 1 }} />}
            </div>
          ))}
        </motion.div>

        {/* ③④ Steps — stagger + line grows */}
        <div className="flex flex-col gap-1">
          {steps.map(({ num, title, desc, orange }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, x: -14 }}
              animate={mobileInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.22 + i * 0.1 }}
              className="relative flex gap-4"
              style={{ paddingBottom: i < steps.length - 1 ? 20 : 0 }}
            >
              {/* Circle + growing line */}
              <div className="flex-shrink-0 relative" style={{ width: 32 }}>
                {/* ⑥ Ping ring behind step-1 circle */}
                {orange && (
                  <div
                    className="visa-ping"
                    style={{
                      position: "absolute", top: 0, left: 0,
                      width: 32, height: 32,
                      borderRadius: "50%",
                      background: "#E86339",
                      pointerEvents: "none",
                    }}
                  />
                )}
                <div
                  className="flex items-center justify-center rounded-full relative z-10"
                  style={{ width: 32, height: 32, background: orange ? "#E86339" : "#1A1A2E" }}
                >
                  <span className="text-white" style={{ fontSize: 13, fontWeight: 500 }}>{num}</span>
                </div>
                {/* ③ Line grows scaleY from top */}
                {i < steps.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      left: 15, top: 32, bottom: -20, width: 1,
                      background: "#E2E0DC",
                      transformOrigin: "top",
                      transform: mobileInView ? "scaleY(1)" : "scaleY(0)",
                      transition: `transform 0.55s ease-out ${0.3 + i * 0.1}s`,
                    }}
                  />
                )}
              </div>
              {/* Content */}
              <div className="flex flex-col gap-1.5" style={{ paddingTop: 6 }}>
                <h3 className="text-[#1A1A2E] font-semibold" style={{ fontSize: 15 }}>{title}</h3>
                <p className="text-[#64748B] leading-relaxed" style={{ fontSize: 13 }}>{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ⑤ Urgency bar — border pulse */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={mobileInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.65 }}
          className="urgency-pulse rounded-lg px-4 py-3"
          style={{ background: "#FFFBEB", borderLeft: "3px solid #F59E0B" }}
        >
          <p className="text-[#92400E] leading-relaxed" style={{ fontSize: 13 }}>
            AIMA appointments fill up weeks in advance. Most students start the renewal process 60–90 days before their permit expires.
          </p>
        </motion.div>

        {/* ① Trust box — FadeUp */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={mobileInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.75 }}
          className="rounded-xl bg-white flex flex-col gap-2 p-5"
          style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}
        >
          <p className="text-[#1A1A2E] font-bold" style={{ fontSize: 14 }}>
            Does Facultet&apos;s certificate work with AIMA?
          </p>
          <p className="text-[#64748B] leading-relaxed" style={{ fontSize: 13 }}>
            Yes. DGERT-licensed enrolment is explicitly recognised by AIMA as the legal basis for annual student permit renewal. We have supported 200+ students — all documents accepted.
          </p>
        </motion.div>
      </div>

      {/* ── Desktop (unchanged) ──────────────────────────────────────────── */}
      <div className="hidden md:block py-20">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-[160px]">

          <FadeUp className="text-center mb-8">
            <p className="text-[#E86339] font-semibold uppercase mb-4" style={{ fontSize: 11, letterSpacing: 2 }}>HOW IT WORKS</p>
            <h2 className="text-[#1A1A2E] text-[40px] font-bold leading-[1.15] max-w-[800px] mx-auto">
              Renew your student permit — without leaving Portugal
            </h2>
            <p className="text-[#64748B] leading-[1.6] mt-4 max-w-[720px] mx-auto" style={{ fontSize: 16 }}>
              Stay enrolled at a DGERT-licensed school — AIMA renews your student residence permit every year.
            </p>
          </FadeUp>

          <FadeUp delay={0.05} className="mb-12">
            <div className="flex items-center justify-center max-w-[1120px] mx-auto border border-[#E2E8F0] rounded-xl overflow-hidden bg-white">
              {statDefs.map(({ target, suffix, lbl }, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-1.5 py-5 px-6 flex-1"
                  style={{ borderRight: i < 2 ? "1px solid #E2E0DC" : undefined }}
                >
                  <span className="text-[#1A1A2E] text-[36px] font-bold leading-none">{target}{suffix}</span>
                  <span className="text-[#64748B] text-sm text-center leading-tight max-w-[140px]">
                    {lbl.join(" ")}
                  </span>
                </div>
              ))}
            </div>
          </FadeUp>

          <div className="flex gap-16 max-w-[1120px] mx-auto">
            <FadeUp delay={0.1} className="flex-1">
              <div className="flex flex-col">
                {steps.map(({ num, title, desc, orange }, i) => (
                  <div key={num} className="relative flex gap-4" style={{ paddingBottom: i < steps.length - 1 ? 32 : 0 }}>
                    <div className="flex-shrink-0 w-10">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: orange ? "#E86339" : "#1A1A2E" }}>
                        <span className="text-white font-bold" style={{ fontSize: 16 }}>{num}</span>
                      </div>
                      {i < steps.length - 1 && (
                        <div className="absolute bg-[#E2E0DC]" style={{ left: 19, top: 40, bottom: 0, width: 1 }} />
                      )}
                    </div>
                    <div className="flex flex-col gap-1 pt-1.5 pb-2">
                      <h3 className="text-[#1A1A2E] font-semibold" style={{ fontSize: 16 }}>{title}</h3>
                      <p className="text-[#64748B] leading-relaxed" style={{ fontSize: 14 }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.15} className="w-[480px]">
              <div className="flex flex-col gap-8">
                <div className="p-5 rounded-lg" style={{ background: "#FFFBEB", borderLeft: "3px solid #F59E0B" }}>
                  <div className="flex items-start gap-3">
                    <svg className="text-[#F59E0B] w-5 h-5 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                      <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                    </svg>
                    <div>
                      <p className="text-[#92400E] font-semibold text-sm">Don&apos;t wait too long</p>
                      <p className="text-[#92400E]/80 text-sm mt-1 leading-relaxed">
                        AIMA appointment slots fill up fast. Start the process 60–90 days before your permit expires.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg" style={{ border: "1px solid #E2E0DC" }}>
                  <p className="text-[#1A1A2E] font-semibold text-sm mb-3">Does Facultet&apos;s certificate work with AIMA?</p>
                  <p className="text-[#64748B] text-sm leading-relaxed">
                    Yes. DGERT-licensed enrolment is explicitly recognised by AIMA. Every certificate we issue follows the format required for annual permit renewal.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
