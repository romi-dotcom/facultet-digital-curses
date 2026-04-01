import FadeUp from "./FadeUp";

const steps = [
  {
    step: "01",
    title: "Apply online",
    timeline: "5 minutes",
    description: "Fill out our short program application. No documents needed yet — just your name, email, and the program you're interested in.",
  },
  {
    step: "02",
    title: "Get your acceptance",
    timeline: "Within 48 hours",
    description: "An admissions advisor reviews your application and sends your acceptance letter and enrollment agreement to sign.",
  },
  {
    step: "03",
    title: "Receive your documents",
    timeline: "Within 14 days",
    description: "After your first tuition payment, we prepare your full AIMA-compliant documentation package: enrollment letter, program schedule, and supporting materials.",
  },
  {
    step: "04",
    title: "Submit to AIMA",
    timeline: "You control the timeline",
    description: "Submit your student residence permit (D4) application to AIMA. Our documentation advisor is available throughout the process.",
  },
  {
    step: "05",
    title: "Start studying",
    timeline: "Next cohort: September",
    description: "While your permit is being processed, you can attend classes. Most students receive their permit within 6–10 weeks of submission.",
  },
];

export default function VisaSteps() {
  return (
    <section id="visa-steps" className="bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <FadeUp className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            The visa process
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand leading-tight">
            From application to{" "}
            <span className="text-accent">residence permit</span>
            <br />in 5 steps
          </h2>
          <p className="text-text-secondary mt-4 text-lg max-w-xl mx-auto">
            Our admissions team has walked this process with over 2,000 students. We know exactly what AIMA needs.
          </p>
        </FadeUp>

        {/* Split layout: steps list left + reassurance right */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left: steps */}
          <FadeUp delay={0.1}>
            <div className="space-y-0 divide-y divide-border">
              {steps.map(({ step, title, timeline, description }) => (
                <div key={step} className="flex gap-6 py-7 first:pt-0">
                  {/* Big step number */}
                  <div className="flex-shrink-0 w-14">
                    <span className="font-display text-5xl font-bold text-brand/10 leading-none">
                      {step}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                      <h3 className="font-bold text-brand text-lg">{title}</h3>
                      <span className="text-xs font-semibold text-accent bg-orange-50 px-2.5 py-0.5 rounded-full">
                        {timeline}
                      </span>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Right: sticky reassurance card */}
          <FadeUp delay={0.2}>
            <div className="lg:sticky lg:top-24 space-y-5">
              {/* Approval rate card */}
              <div className="bg-brand rounded-2xl p-8 text-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <p className="font-semibold text-white/80 text-sm leading-snug">
                    AIMA-compliant documentation
                  </p>
                </div>
                <p className="font-display text-6xl font-bold text-white mb-2">94%</p>
                <p className="text-white/60 text-sm leading-relaxed">
                  Student visa approval rate across all Facultet applications. Every documentation package is reviewed by our compliance team before it leaves our hands.
                </p>
              </div>

              {/* Timeline card */}
              <div className="bg-warm rounded-2xl p-7 border border-warm-dark">
                <p className="font-bold text-brand text-lg mb-4">Typical timeline</p>
                <div className="space-y-3">
                  {[
                    { label: "Enrollment letter", time: "14 days" },
                    { label: "AIMA processing", time: "6–10 weeks" },
                    { label: "Permit in hand", time: "~3 months total" },
                  ].map(({ label, time }) => (
                    <div key={label} className="flex items-center justify-between">
                      <span className="text-text-secondary text-sm">{label}</span>
                      <span className="font-bold text-brand text-sm">{time}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-5 border-t border-warm-dark">
                  <a
                    href="#consult"
                    className="block w-full text-center bg-accent hover:bg-accent-hover text-white font-semibold py-3.5 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25 text-sm"
                  >
                    Start My Application →
                  </a>
                </div>
              </div>

              {/* Guarantee note */}
              <p className="text-text-muted text-xs text-center leading-relaxed px-2">
                If your application is rejected, we appeal and re-apply at no extra charge.
                60% refund after two failed attempts.
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
