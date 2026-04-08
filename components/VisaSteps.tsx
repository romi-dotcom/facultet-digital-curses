import FadeUp from "./FadeUp";

const steps = [
  {
    num: "01",
    title: "Enrol at Facultet",
    desc: "Apply online and sign the enrolment agreement. No immigration documents needed from you at this stage.",
  },
  {
    num: "02",
    title: "Receive your documents",
    desc: "We issue the official enrolment certificate accepted by AIMA — ready in 5 business days.",
  },
  {
    num: "03",
    title: "Book your AIMA appointment",
    desc: "Submit the renewal application with our document package. We prepare a full checklist so nothing is missing.",
  },
  {
    num: "04",
    title: "Get your renewed permit",
    desc: "AIMA processes and renews your student residence permit. 100% acceptance rate with our documentation.",
  },
];

export default function VisaSteps() {
  return (
    <section id="visa-steps" className="bg-[#F7F5F2] py-14 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[160px]">

        {/* Header */}
        <FadeUp className="text-center mb-10">
          <p className="text-[#E86339] text-[11px] font-semibold tracking-[2px] uppercase mb-4">HOW IT WORKS</p>
          <h2 className="text-[#1A1A2E] text-[28px] sm:text-[40px] font-bold leading-[1.15] max-w-[800px] mx-auto">
            Renew your student permit —<br className="hidden sm:block" />
            without leaving Portugal
          </h2>
          <p className="text-[#64748B] text-[17px] leading-[1.5] mt-5 max-w-[720px] mx-auto">
            Stay enrolled at a DGERT-licensed school — AIMA renews your student residence permit every year. We issue the documents you need.
          </p>
        </FadeUp>

        {/* Stats row */}
        <FadeUp delay={0.05} className="mb-12">
          <div className="flex items-center justify-center flex-wrap gap-0 max-w-[1120px] mx-auto border border-[#E2E8F0] rounded-xl overflow-hidden bg-white">
            {[
              { val: "200+", lbl: "Students supported" },
              { val: "5", lbl: "Business days for documents" },
              { val: "100%", lbl: "Documents accepted by AIMA" },
            ].map(({ val, lbl }, i) => (
              <div
                key={val}
                className="flex flex-col items-center gap-1.5 py-5 px-6 flex-1 min-w-[160px]"
                style={{ borderRight: i < 2 ? "1px solid #E2E0DC" : undefined }}
              >
                <span className="text-[#1A1A2E] text-[36px] font-bold leading-none">{val}</span>
                <span className="text-[#64748B] text-sm text-center leading-tight max-w-[140px]">{lbl}</span>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Body: steps + right column */}
        <div className="flex flex-col lg:flex-row gap-16 max-w-[1120px] mx-auto">

          {/* Left: steps */}
          <FadeUp delay={0.1} className="flex-1">
            <div className="flex flex-col">
              {steps.map(({ num, title, desc }, i) => (
                <div
                  key={num}
                  className="flex gap-4 pb-5"
                  style={{ paddingBottom: i < steps.length - 1 ? 20 : 0 }}
                >
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">{num}</span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px flex-1 min-h-[24px] bg-[#E2E8F0]" />
                    )}
                  </div>
                  <div className="flex flex-col gap-1 pt-1 pb-2">
                    <h3 className="text-[#1A1A2E] text-base font-semibold">{title}</h3>
                    <p className="text-[#64748B] text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Right: urgency + trust boxes */}
          <FadeUp delay={0.15} className="lg:w-[480px]">
            <div className="flex flex-col gap-8">
              {/* Urgency bar */}
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

              {/* Trust box */}
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
