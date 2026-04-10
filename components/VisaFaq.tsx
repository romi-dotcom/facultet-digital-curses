"use client";

import { useState } from "react";
import FadeUp from "./FadeUp";

const faqs = [
  {
    q: "Is Facultet a real licensed school?",
    a: "Yes. Facultet is licensed by DGERT and registered with AIMA (formerly SEF). Our enrolment certificates are legally valid documents for your annual student residence permit renewal through AIMA.",
  },
  {
    q: "How far in advance should I start the renewal process?",
    a: "We recommend starting 60–90 days before your permit expires. AIMA appointment availability varies — earlier is always safer. We will remind you when the time comes and prepare your renewal documents well in advance.",
  },
  {
    q: "What documents does AIMA require for renewal?",
    a: "AIMA requires proof of active enrolment at a DGERT-licensed institution. We prepare the official enrolment confirmation for you — ready in 2 business days. We also send you the complete checklist of supporting documents so nothing is missing on the day of your appointment.",
  },
  {
    q: "What if my permit expires before I can get an AIMA appointment?",
    a: "If you have submitted a renewal application before your permit expired, you are legally allowed to remain in Portugal while AIMA processes it — AIMA issues a 'manifestação de interesse' confirmation. Start the process early and our team will guide you through every step.",
  },
];

export default function VisaFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-10 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[160px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-start">

          {/* Left */}
          <FadeUp className="lg:w-[370px] flex-shrink-0 flex flex-col gap-5">
            <div className="w-16 h-16 rounded-2xl bg-[#FFF7ED] flex items-center justify-center">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#E85D26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>

            <h2 className="text-[#1E293B] text-[20px] lg:text-[36px] font-bold leading-[1.2]">
              Permit Renewal Questions & Answers
            </h2>

            <p className="text-[#64748B] leading-[1.6]" style={{ fontSize: 14 }}>
              Everything you need to know about the student permit renewal process through Facultet.
            </p>

            <div
              className="flex items-center gap-2.5 px-[18px] py-3.5 rounded-[10px] border border-[#BBF7D0] bg-[#F0FDF4] self-start"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <polyline points="9 12 11 14 15 10"/>
              </svg>
              <span className="text-[#16A34A] text-sm font-semibold">DGERT-licensed institution</span>
            </div>
          </FadeUp>

          {/* Right — accordion */}
          <FadeUp delay={0.1} className="flex-1">
            <div
              className="rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-[0_2px_12px_rgba(15,23,42,0.05)]"
            >
              {faqs.map(({ q, a }, i) => (
                <div key={q} className={i < faqs.length - 1 ? "border-b border-[#F1F5F9]" : ""}>
                  {/* Question row */}
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-[#FAFBFC] transition-colors"
                  >
                    <span className="text-[#1E293B] text-[15px] font-semibold leading-snug">
                      {q}
                    </span>
                    <svg
                      className="text-[#94A3B8] flex-shrink-0 transition-transform duration-200"
                      style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }}
                      width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </button>

                  {/* Answer */}
                  {open === i && (
                    <div className="px-6 pb-5 bg-[#FAFBFC] border-t border-[#F1F5F9]">
                      <p className="text-[#64748B] text-sm leading-[1.7] pt-2.5">{a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
