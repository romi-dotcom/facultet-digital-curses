import FadeUp from "./FadeUp";

const steps = [
  {
    num: "1",
    title: "Stay enrolled at Facultet",
    desc: "Active enrolment at a DGERT-licensed school is the legal basis for your annual permit renewal.",
    orange: true,
  },
  {
    num: "2",
    title: "Request your renewal certificate",
    desc: "We issue an official active-student confirmation. Ready in 2 business days.",
    orange: false,
  },
  {
    num: "3",
    title: "Submit renewal to AIMA",
    desc: "Book your appointment at the AIMA office in Lisbon or Porto. We prepare all required documents.",
    orange: false,
  },
  {
    num: "4",
    title: "Permit renewed for another year",
    desc: "Continue studying, working, and building your life in Portugal. Repeat each year.",
    orange: false,
  },
];

const stats = [
  { val: "200+", lbl: "Students\nsupported" },
  { val: "5", lbl: "Business days\nfor documents" },
  { val: "100%", lbl: "Documents\naccepted by AIMA" },
];

export default function VisaSteps() {
  return (
    <section id="visa-steps" className="bg-[#F5F0E8] py-10 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[160px]">

        {/* Header */}
        <FadeUp className="text-center mb-8">
          <p className="text-[#E86339] font-semibold uppercase mb-4" style={{ fontSize: 10, letterSpacing: 2 }}>HOW IT WORKS</p>
          <h2 className="text-[#1A1A2E] text-[22px] lg:text-[40px] font-bold leading-[1.15] max-w-[800px] mx-auto">
            Renew your student permit —<br className="hidden lg:block" /> without leaving Portugal
          </h2>
          <p className="text-[#64748B] leading-[1.6] mt-4 max-w-[720px] mx-auto" style={{ fontSize: 14 }}>
            Stay enrolled at a DGERT-licensed school — AIMA renews your student residence permit every year.
          </p>
        </FadeUp>

        {/* Stats row */}
        <FadeUp delay={0.05} className="mb-10 lg:mb-12">
          {/* Mobile: inline, no card */}
          <div className="flex items-start justify-between lg:hidden">
            {stats.map(({ val, lbl }, i) => (
              <div key={val} className="flex flex-col items-center flex-1" style={{ borderRight: i < 2 ? "1px solid #C9C0B0" : undefined }}>
                <span className="text-[#1A1A2E] font-bold leading-none" style={{ fontSize: 32 }}>{val}</span>
                <span className="text-[#64748B] text-center leading-tight mt-1" style={{ fontSize: 12 }}>
                  {lbl.split("\n").map((line, j) => <span key={j} className="block">{line}</span>)}
                </span>
              </div>
            ))}
          </div>

          {/* Desktop: white card */}
          <div className="hidden lg:flex items-center justify-center max-w-[1120px] mx-auto border border-[#E2E8F0] rounded-xl overflow-hidden bg-white">
            {stats.map(({ val, lbl }, i) => (
              <div
                key={val}
                className="flex flex-col items-center gap-1.5 py-5 px-6 flex-1"
                style={{ borderRight: i < 2 ? "1px solid #E2E0DC" : undefined }}
              >
                <span className="text-[#1A1A2E] text-[36px] font-bold leading-none">{val}</span>
                <span className="text-[#64748B] text-sm text-center leading-tight max-w-[140px]">
                  {lbl.split("\n").join(" ")}
                </span>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Body: steps + right column */}
        <div className="flex flex-col lg:flex-row gap-16 max-w-[1120px] mx-auto">

          {/* Steps */}
          <FadeUp delay={0.1} className="flex-1">
            <div className="flex flex-col">
              {steps.map(({ num, title, desc, orange }, i) => (
                <div
                  key={num}
                  className="flex gap-4"
                  style={{ paddingBottom: i < steps.length - 1 ? 32 : 0 }}
                >
                  <div className="flex flex-col items-center gap-1">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: orange ? "#E85D26" : "#1E293B" }}
                    >
                      <span className="text-white font-bold" style={{ fontSize: 16 }}>{num}</span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px flex-1 min-h-[24px] bg-[#D1CAC0]" />
                    )}
                  </div>
                  <div className="flex flex-col gap-1 pt-1.5 pb-2">
                    <h3 className="text-[#1A1A2E] font-bold" style={{ fontSize: 16 }}>{title}</h3>
                    <p className="text-[#64748B] leading-relaxed" style={{ fontSize: 14 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Right column: desktop only */}
          <FadeUp delay={0.15} className="hidden lg:flex lg:w-[480px]">
            <div className="flex flex-col gap-8 w-full">
              <div
                className="p-5 rounded-lg"
                style={{ background: "#FFFBEB", borderLeft: "3px solid #F59E0B" }}
              >
                <div className="flex items-start gap-3">
                  <svg className="text-[#F59E0B] w-5 h-5 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                    <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                  </svg>
                  <div>
                    <p className="text-[#92400E] font-semibold text-sm">Don&apos;t wait too long</p>
                    <p className="text-[#92400E]/80 text-sm mt-1 leading-relaxed">
                      AIMA appointment slots fill up fast. Start the process 60–90 days before your permit expires. We&apos;ll remind you and prepare everything in advance.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="bg-white p-6 rounded-lg"
                style={{ border: "1px solid #E2E0DC", borderLeft: "3px solid #E2E0DC" }}
              >
                <p className="text-[#1A1A2E] font-semibold text-sm mb-3">Why our documents are accepted</p>
                <div className="flex flex-col gap-2.5">
                  {[
                    "DGERT-certified institution registered with AIMA",
                    "Enrolment certificates follow AIMA's exact requirements",
                    "We prepare the full document checklist, not just the letter",
                    "Dedicated support until your permit is renewed",
                  ].map((t) => (
                    <div key={t} className="flex items-start gap-2">
                      <svg className="text-accent w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      <p className="text-[#475569] text-sm leading-snug">{t}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
