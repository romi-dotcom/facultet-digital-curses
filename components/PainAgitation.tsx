import FadeUp from "./FadeUp";

const pains = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E85D26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    title: "My student permit expires in 2 months. I don't know where to start.",
    body: "AIMA appointments take weeks to book. My documents need to be ready now — and I don't know exactly what AIMA requires.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E85D26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
      </svg>
    ),
    title: "I've sent 80 CVs. Two replies. Both: no.",
    body: "They want European experience. I have 7 years — just not from here. My diploma is worthless. I need something that opens doors in Portugal.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E85D26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    title: "I'm floating. Status shaky. Career stalled. Nothing is moving.",
    body: "I didn't come to Portugal to be stuck. Every month without a plan costs me money, status, and momentum. I need one decision that fixes both.",
  },
];

const stats = [
  { value: "100%", label: "AIMA docs accepted" },
  { value: "5", label: "Business days to docs" },
  { value: "423", label: "Students supported" },
];

export default function PainAgitation() {
  return (
    <section
      className="py-14 lg:py-[160px]"
      style={{ background: "linear-gradient(180deg, #1E293B 0%, #2A1F1A 100%)" }}
    >
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[160px]">
        <FadeUp className="mb-6 lg:text-center">
          <h2 className="text-white text-[28px] sm:text-[36px] font-bold leading-[1.2]">
            Does this sound familiar?
          </h2>
        </FadeUp>

        {/* Pain cards */}
        <FadeUp delay={0.1}>
          <div className="flex flex-col gap-4 max-w-[1100px] mx-auto">
            {pains.map(({ icon, title, body }) => (
              <div
                key={title}
                className="flex items-start gap-4 rounded-[14px] px-5 py-5 lg:px-7 lg:py-6"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(232,93,38,0.15)" }}
                >
                  {icon}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-white font-bold text-[15px] leading-snug">{title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* CTA button */}
        <FadeUp delay={0.2} className="max-w-[1100px] mx-auto mt-6">
          <a
            href="#double-value"
            className="flex items-center justify-center gap-2 w-full bg-accent hover:bg-accent-hover text-white font-medium px-5 py-4 rounded-full transition-all shadow-[0_4px_16px_rgba(232,93,38,0.31)] text-[13px] whitespace-nowrap"
          >
            Facultet solves all three. Here&apos;s how
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </FadeUp>

        {/* Stats row */}
        <FadeUp delay={0.25}>
          <div
            className="max-w-[1100px] mx-auto flex items-center justify-between mt-7 pt-6"
            style={{ borderTop: "1px solid rgba(255,255,255,0.10)" }}
          >
            {stats.flatMap(({ value, label }, i) => [
              <div key={value} className="flex flex-col items-center gap-1 flex-1">
                <span className="text-[#E86339] text-[26px] sm:text-[32px] font-bold leading-none">{value}</span>
                <span className="text-[#94A3B8] text-xs text-center leading-tight">{label}</span>
              </div>,
              ...(i < stats.length - 1
                ? [<div key={`s${i}`} className="w-px h-9 bg-[#334155] flex-shrink-0" />]
                : []),
            ])}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
