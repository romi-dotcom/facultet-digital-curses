import FadeUp from "./FadeUp";

const legalItems = [
  "Student Residence Permit — renewed annually",
  "AIMA renewal documents — ready in 5 business days",
  "Legal student status — every year, without gaps",
  "Building towards permanent residency",
];

const careerItems = [
  "DGERT-recognised certificate",
  "Real portfolio — not just theory",
  "Evening schedule — study while you work",
  "Career support after graduation",
];

const CheckIcon = ({ color }: { color: string }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

export default function DoubleValue() {
  return (
    <section id="double-value" className="bg-[#F8FAFC] py-14 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[160px]">

        {/* Header */}
        <FadeUp className="text-center mb-8">
          <p className="text-accent text-[11px] font-bold tracking-[2px] uppercase mb-4">
            WHY FACULTET
          </p>
          <h2 className="text-[#1E293B] text-[28px] sm:text-[36px] font-bold leading-[1.2] max-w-2xl mx-auto">
            One decision.<br className="sm:hidden" /> Two problems solved.
          </h2>
          <p className="text-[#64748B] text-sm sm:text-base mt-4 max-w-xl mx-auto leading-relaxed">
            No formal enrolment gives you a career. No online course helps you keep your status. We do both — in one evening programme.
          </p>
        </FadeUp>

        {/* Value cards */}
        <FadeUp delay={0.1} className="flex flex-col lg:grid lg:grid-cols-2 gap-4 mb-6">

          {/* Card 1 — Legal status */}
          <div className="rounded-2xl p-6" style={{ background: "#FFF4EE" }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#E85D26" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <polyline points="9 12 11 14 15 10"/>
                </svg>
              </div>
              <h3 className="text-[#1E293B] text-base font-bold">Legal student status</h3>
            </div>
            <ul className="flex flex-col gap-3">
              {legalItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckIcon color="#16A34A" />
                  <span className="text-[#374151] text-sm leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2 — Marketable profession */}
          <div className="rounded-2xl p-6" style={{ background: "#EDFAF3" }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#16A34A" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                  <polyline points="17 6 23 6 23 12"/>
                </svg>
              </div>
              <h3 className="text-[#1E293B] text-base font-bold">Marketable profession</h3>
            </div>
            <ul className="flex flex-col gap-3">
              {careerItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckIcon color="#16A34A" />
                  <span className="text-[#374151] text-sm leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </FadeUp>

        {/* CTA Button */}
        <FadeUp delay={0.15} className="mb-6">
          <a
            href="#consult"
            className="flex items-center justify-center w-full bg-accent hover:bg-accent-hover text-white font-bold py-4 rounded-xl transition-all text-base shadow-[0_4px_16px_rgba(232,93,38,0.25)]"
          >
            Apply Now →
          </a>
        </FadeUp>

        {/* Comparison table */}
        <FadeUp delay={0.2}>
          <div className="rounded-2xl overflow-hidden" style={{ background: "#2C3348" }}>

            {/* Row 1 */}
            <div className="flex items-start justify-between px-5 py-5">
              <div>
                <p className="text-[#94A3B8] text-[12px] font-medium mb-1">Formal enrolment elsewhere</p>
                <p className="text-white text-[16px] font-bold leading-tight mb-1">Renewal docs only</p>
                <p className="text-[#94A3B8] text-sm">No career support, no education</p>
              </div>
              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-4 mt-1" style={{ background: "rgba(239,68,68,0.2)" }}>
                <XIcon />
              </div>
            </div>

            {/* Divider */}
            <div className="h-px mx-5" style={{ background: "rgba(255,255,255,0.08)" }} />

            {/* Row 2 */}
            <div className="flex items-start justify-between px-5 py-5">
              <div>
                <p className="text-[#94A3B8] text-[12px] font-medium mb-1">Immigration lawyer</p>
                <p className="text-white text-[16px] font-bold leading-tight mb-1">€1,000–3,000</p>
                <p className="text-[#94A3B8] text-sm">Legal help only, no education</p>
              </div>
              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-4 mt-1" style={{ background: "rgba(239,68,68,0.2)" }}>
                <XIcon />
              </div>
            </div>

            {/* Row 3 — Facultet */}
            <div>
              {/* Green header */}
              <div className="flex items-center justify-between px-5 py-3" style={{ background: "#3D9E56" }}>
                <p className="text-white font-bold text-sm">Facultet School</p>
                <span className="bg-white/20 text-white text-[11px] font-bold px-3 py-1 rounded-full">Best Value</span>
              </div>
              {/* White content */}
              <div className="px-5 py-5 bg-white">
                <p className="text-[#1E293B] text-[28px] font-extrabold leading-tight mb-1">from €125/month</p>
                <p className="text-[#64748B] text-sm">Renewal docs + real education. Both.</p>
              </div>
            </div>

          </div>
        </FadeUp>

      </div>
    </section>
  );
}
