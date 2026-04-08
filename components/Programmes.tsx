import FadeUp from "./FadeUp";

const programmes = [
  {
    badge: "Most popular",
    name: "UX / UI Design",
    duration: "13+ months",
    campuses: "Lisbon & Porto",
    desc: "Design digital products people actually want to use. Graduate with a portfolio of 5 real Figma projects — from user research to high-fidelity prototypes.",
    skills: ["User Research", "Figma", "Wireframing", "Prototyping", "Design Systems"],
    color: "#F0F9FF",
    imgGradient: "linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)",
  },
  {
    badge: null,
    name: "Digital Marketing",
    duration: "13+ months",
    campuses: "Lisbon",
    desc: "Run campaigns across SEO, Google Ads, Meta, email, and analytics. Manage real client campaigns in your final semester. Graduate with documented results.",
    skills: ["SEO & SEM", "Google Ads", "Meta Ads", "Analytics (GA4)", "Content Strategy"],
    color: "#FFF7ED",
    imgGradient: "linear-gradient(135deg, #F59E0B 0%, #E85D26 100%)",
  },
  {
    badge: null,
    name: "Frontend Development",
    duration: "13+ months",
    campuses: "Lisbon & Porto",
    desc: "Build web interfaces from scratch — HTML/CSS to React. Deploy three production-ready projects to your public portfolio. No prior coding experience required.",
    skills: ["HTML & CSS", "JavaScript", "React", "Git & GitHub", "REST APIs"],
    color: "#F0FDF4",
    imgGradient: "linear-gradient(135deg, #22C55E 0%, #059669 100%)",
  },
];

export default function Programmes() {
  return (
    <section id="programmes" className="bg-white py-14 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[160px]">
        <FadeUp className="text-center mb-10">
          <p className="text-[#E86339] text-[11px] font-semibold tracking-[2px] uppercase mb-4">
            OUR PROGRAMMES
          </p>
          <h2 className="text-[#1E293B] text-[28px] sm:text-[36px] font-bold leading-tight max-w-2xl mx-auto">
            Choose Your Programme — Start Studying, Keep Working
          </h2>
          <p className="text-[#64748B] text-base mt-3">Evening · 13+ months · Licensed · Permit Renewal</p>
          <p className="text-[#94A3B8] text-sm mt-2">Trusted by 423 students from 12 countries</p>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-5">
          {programmes.map(({ badge, name, duration, campuses, desc, skills, imgGradient }, i) => (
            <FadeUp key={name} delay={i * 0.1}>
              <div className="flex flex-col rounded-[20px] overflow-hidden border border-[#E2E8F0] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.10)] h-full">
                {/* Image placeholder */}
                <div
                  className="h-[185px] flex-shrink-0 relative"
                  style={{ background: imgGradient }}
                >
                  {badge && (
                    <span className="absolute top-4 left-4 bg-white text-accent text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      {badge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4 p-7 flex-1">
                  <div>
                    <h3 className="text-[#1E293B] text-lg font-bold mb-1">{name}</h3>
                    <div className="flex items-center gap-3 text-[#64748B] text-sm">
                      <span>{duration}</span>
                      <span>·</span>
                      <span>{campuses}</span>
                    </div>
                  </div>

                  <p className="text-[#64748B] text-sm leading-relaxed flex-1">{desc}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {skills.map((s) => (
                      <span key={s} className="bg-[#F1F5F9] text-[#374151] text-xs font-medium px-2.5 py-1 rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#consult"
                    className="mt-auto inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeUp delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <p className="text-[#64748B] text-sm">Not sure which programme to choose?</p>
          <a
            href="#consult"
            className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white text-sm font-semibold px-8 py-3 rounded-lg h-12 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            Talk to our coordinator →
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
