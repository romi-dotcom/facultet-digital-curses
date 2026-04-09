import FadeUp from "./FadeUp";

const steps = [
  {
    num: "01",
    title: "Fill in the online form",
    desc: "Fill out the online form — no documents needed at this stage. Just tell us about yourself and your goals.",
    badge: "Takes 5 minutes",
    badgeColor: "#22C55E",
  },
  {
    num: "02",
    title: "Get your acceptance letter",
    desc: "Our admissions team reviews your application and sends an acceptance letter with next steps.",
    badge: "Within 1 business day",
    badgeColor: "#22C55E",
  },
  {
    num: "03",
    title: "Sign & receive documents",
    desc: "Sign the enrolment agreement and receive official documents for your AIMA student permit renewal application.",
    badge: "Within 5 business days",
    badgeColor: "#22C55E",
  },
];

export default function HowToApply() {
  return (
    <section id="how-to-apply" className="bg-white py-[60px] lg:py-20">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[160px]">
        <FadeUp className="text-center mb-10">
          <h2 className="text-[#1E293B] text-[28px] lg:text-[40px] font-extrabold leading-tight" style={{ letterSpacing: -0.5 }}>
            How to Apply
          </h2>
          <p className="text-[#64748B] leading-[1.6] mt-3 max-w-2xl mx-auto" style={{ fontSize: 15 }}>
            3 simple steps — from application to<br className="hidden lg:block" /> enrolment documents in your hands.
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="grid md:grid-cols-3 gap-5">
            {steps.map(({ num, title, desc, badge, badgeColor }) => (
              <div
                key={num}
                className="flex flex-col gap-4 bg-[#F8FAFC] rounded-2xl p-6 border border-[#F1F5F9]"
              >
                {/* Header */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">{num}</span>
                  </div>
                  <h3 className="text-[#1E293B] font-semibold text-base leading-tight">{title}</h3>
                </div>

                <p className="text-[#64748B] text-sm leading-[1.5]">{desc}</p>

                {/* Badge */}
                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full self-start"
                  style={{ border: `1px solid ${badgeColor}` }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={badgeColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span className="text-xs font-medium" style={{ color: badgeColor }}>{badge}</span>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.2} className="flex flex-col items-center gap-3 mt-10">
          <a
            href="#consult"
            className="inline-flex items-center bg-accent hover:bg-accent-hover text-white font-bold text-base px-9 py-4 rounded-[10px] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25"
          >
            Start Your Application →
          </a>
          <p className="text-[#94A3B8] text-sm">No documents needed · Response within 1 business day</p>
        </FadeUp>
      </div>
    </section>
  );
}
