"use client";

import FadeUp from "./FadeUp";

const programmes = [
  {
    id: "ux-ui",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
    ),
    badge: "Most popular",
    name: "UX / UI Design",
    duration: "14 months",
    campuses: "Lisbon & Porto",
    description: "Design digital products people actually want to use. Graduate with a portfolio of 5 real Figma projects — from user research to high-fidelity prototypes.",
    skills: ["User Research", "Figma", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    id: "digital-marketing",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    name: "Digital Marketing",
    duration: "14 months",
    campuses: "Lisbon",
    description: "Run campaigns across SEO, Google Ads, Meta, email, and analytics. Manage real client campaigns in your final semester. Graduate with documented results.",
    skills: ["SEO & SEM", "Google Ads", "Meta Ads", "Analytics (GA4)", "Content Strategy"],
  },
  {
    id: "frontend-dev",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    name: "Frontend Development",
    duration: "10 months",
    campuses: "Lisbon & Porto",
    description: "Build web interfaces from scratch — HTML/CSS to React. Deploy three production-ready projects to your public portfolio. No prior coding experience required.",
    skills: ["HTML & CSS", "JavaScript", "React", "Git & GitHub", "REST APIs"],
  },
  {
    id: "graphic-design",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
        <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
        <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
        <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
      </svg>
    ),
    name: "Graphic Design & Motion",
    duration: "12 months",
    campuses: "Porto",
    description: "Brand identity, typography, print and digital design — plus motion graphics. Adobe Creative Suite from day one. Graduate with a Behance-ready portfolio.",
    skills: ["Illustrator", "Photoshop", "After Effects", "Typography", "Brand Identity"],
  },
];

export default function Programmes() {
  return (
    <section id="programmes" className="bg-warm py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <FadeUp className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Our programs
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand leading-tight">
            Choose your digital path
          </h2>
          <p className="text-text-secondary mt-4 text-lg max-w-xl mx-auto">
            All programs are evening-based so you can study while your residence permit is being processed.
          </p>
        </FadeUp>

        <div className="grid sm:grid-cols-2 gap-5">
          {programmes.map(({ id, icon, badge, name, duration, campuses, description, skills }, i) => (
            <FadeUp key={id} delay={i * 0.08}>
              <div className="h-full bg-white rounded-2xl p-7 lg:p-8 border border-border shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-warm flex items-center justify-center text-accent flex-shrink-0">
                    {icon}
                  </div>
                  {badge && (
                    <span className="bg-accent text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      {badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl font-bold text-brand mb-1">{name}</h3>
                <div className="flex gap-3 mb-4">
                  <span className="text-xs text-text-muted font-medium">{duration}</span>
                  <span className="text-xs text-text-muted">·</span>
                  <span className="text-xs text-text-muted font-medium">{campuses}</span>
                </div>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed mb-5 flex-1">
                  {description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-warm text-brand text-xs font-medium px-2.5 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#consult"
                  className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm hover:gap-2.5 transition-all"
                >
                  Ask about this program
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
