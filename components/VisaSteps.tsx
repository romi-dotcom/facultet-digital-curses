import FadeUp from "./FadeUp";

const steps = [
  {
    step: "01",
    title: "Apply online",
    timeline: "5 minutes",
    description:
      "Fill out our short program application. No documents needed yet — just your name, email, and the program you're interested in.",
  },
  {
    step: "02",
    title: "Get your acceptance",
    timeline: "Within 48 hours",
    description:
      "An admissions advisor reviews your application and sends your acceptance letter and enrollment agreement to sign.",
  },
  {
    step: "03",
    title: "Receive your documents",
    timeline: "Within 14 days",
    description:
      "After your first tuition payment, we prepare your full AIMA-compliant documentation package: enrollment letter, program schedule, and supporting materials.",
  },
  {
    step: "04",
    title: "Submit to AIMA",
    timeline: "You control the timeline",
    description:
      "Submit your student residence permit (D4) application to AIMA. Our documentation advisor is available to answer any questions throughout the process.",
  },
  {
    step: "05",
    title: "Start studying",
    timeline: "Next cohort: September",
    description:
      "While your permit is being processed, you can attend classes. Most students receive their student permit within 6–10 weeks of submission.",
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
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-brand leading-tight">
            From application to
            <br />
            residence permit in 5 steps
          </h2>
          <p className="text-slate-500 mt-4 text-lg max-w-xl mx-auto">
            Our admissions team has walked this process with over 2,000 students. We know exactly what AIMA needs.
          </p>
        </FadeUp>

        {/* Steps — vertical on mobile, horizontal on desktop */}
        <FadeUp delay={0.1}>
          <div className="relative">
            {/* Connector line — desktop only */}
            <div
              aria-hidden
              className="hidden lg:block absolute top-9 left-[calc(10%+36px)] right-[calc(10%+36px)] h-0.5 bg-gradient-to-r from-warm-dark via-accent/30 to-warm-dark"
            />

            {/* Desktop: 5 columns | Mobile: vertical list */}
            <div className="hidden lg:grid lg:grid-cols-5 gap-8">
              {steps.map(({ step, title, timeline, description }) => (
                <div key={step} className="text-left">
                  <div className="w-[72px] h-[72px] rounded-full bg-warm border-2 border-warm-dark flex items-center justify-center mb-5 relative z-10">
                    <span className="font-display text-2xl font-semibold text-brand">{step}</span>
                  </div>
                  <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent bg-orange-50 px-2.5 py-0.5 rounded-full mb-2">
                    {timeline}
                  </span>
                  <h3 className="font-semibold text-brand text-lg mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
                </div>
              ))}
            </div>

            {/* Mobile: vertical steps with left connector */}
            <div className="lg:hidden relative pl-12">
              {/* Vertical connector */}
              <div
                aria-hidden
                className="absolute left-[22px] top-9 bottom-9 w-0.5 bg-gradient-to-b from-warm-dark via-accent/30 to-warm-dark"
              />
              <div className="space-y-10">
                {steps.map(({ step, title, timeline, description }) => (
                  <div key={step} className="relative">
                    {/* Step bubble anchored to left */}
                    <div className="absolute -left-12 w-11 h-11 rounded-full bg-warm border-2 border-warm-dark flex items-center justify-center z-10">
                      <span className="font-display text-base font-semibold text-brand">{step}</span>
                    </div>
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent bg-orange-50 px-2.5 py-0.5 rounded-full mb-2">
                      {timeline}
                    </span>
                    <h3 className="font-semibold text-brand text-lg mb-1">{title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.2} className="mt-16">
          <div className="bg-warm rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border border-warm-dark flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B2B4B" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-brand text-lg mb-1">
                Our 94% approval rate isn't luck — it's process.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                Every Facultet documentation package is reviewed by our compliance team before it leaves our hands. If your application is rejected, we assist with the appeal and re-application at no extra charge.
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
