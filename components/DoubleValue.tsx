import FadeUp from "./FadeUp";

const leftItems = [
  { title: "Stay legally in Portugal", desc: "AIMA-accepted enrolment certificate issued within 5 business days." },
  { title: "Annual permit renewal", desc: "We renew your documents every year for the programme duration." },
  { title: "Licensed institution", desc: "DGERT-certified. Recognised by the Ministry of Education." },
  { title: "Real campus, real classes", desc: "Evening schedule. Lisbon & Porto. No visa factories." },
];

const rightItems = [
  { title: "European certificate", desc: "Issued by a Portuguese licensed school. Recognised by local employers." },
  { title: "Real portfolio", desc: "Graduate with 4–6 real projects built during the programme." },
  { title: "Career support 6 months", desc: "Placement assistance and alumni network in Lisbon & Porto." },
  { title: "78% employed in field", desc: "Within 6 months of graduating, based on our 2024 cohort data." },
];

const strip = [
  { value: "DGERT", label: "Licensed institution" },
  { value: "5 days", label: "Document turnaround" },
  { value: "423+", label: "Students enrolled" },
];

export default function DoubleValue() {
  return (
    <section id="double-value" className="bg-[#F8FAFC] py-14 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[160px]">
        <FadeUp className="text-center mb-12">
          <p className="text-accent text-[11px] font-bold tracking-[2px] uppercase mb-5">
            WHY FACULTET
          </p>
          <h2 className="text-[#1E293B] text-[28px] sm:text-[36px] font-bold leading-[1.2] max-w-2xl mx-auto">
            One decision. Two problems solved.
          </h2>
          <p className="text-[#64748B] text-base mt-5 max-w-2xl mx-auto leading-relaxed">
            No formal enrolment gives you a career. No online course helps you keep your status. We do both — in one evening programme.
          </p>
        </FadeUp>

        {/* Two columns */}
        <FadeUp delay={0.1}>
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#E2E8F0] bg-white rounded-xl overflow-hidden shadow-sm border border-[#E2E8F0]">
            {/* Left — Visa */}
            <div className="p-10 lg:p-[60px] flex flex-col gap-6">
              <h3 className="text-[#1E293B] text-xl font-bold">Residency Path</h3>
              <div className="flex flex-col gap-5">
                {leftItems.map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <svg className="text-accent mt-0.5 flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <div>
                      <p className="text-[#1E293B] text-sm font-semibold">{title}</p>
                      <p className="text-[#64748B] text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Career */}
            <div className="p-10 lg:p-[60px] flex flex-col gap-6">
              <h3 className="text-[#1E293B] text-xl font-bold">Career Path</h3>
              <div className="flex flex-col gap-5">
                {rightItems.map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <svg className="text-accent mt-0.5 flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <div>
                      <p className="text-[#1E293B] text-sm font-semibold">{title}</p>
                      <p className="text-[#64748B] text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>

        {/* CTA */}
        <FadeUp delay={0.2} className="flex flex-col items-center gap-3 mt-10">
          <a
            href="#consult"
            className="inline-flex items-center bg-accent hover:bg-accent-hover text-white font-bold px-9 py-3.5 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25"
          >
            Book My Free Consultation
          </a>
          <p className="text-[#94A3B8] text-sm">Takes 2 minutes · No commitment</p>
        </FadeUp>

        {/* Stats strip */}
        <FadeUp delay={0.25} className="mt-10">
          <div
            className="rounded-xl flex items-center justify-around py-8 px-6 flex-wrap gap-6"
            style={{ background: "#1A1A2E" }}
          >
            {strip.flatMap(({ value, label }, i) => [
              <div key={value} className="flex flex-col items-center gap-1">
                <span className="text-white text-2xl font-bold">{value}</span>
                <span className="text-[#94A3B8] text-xs">{label}</span>
              </div>,
              ...(i < strip.length - 1
                ? [<div key={`d${i}`} className="hidden sm:block w-px h-9 bg-white/10" />]
                : []),
            ])}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
