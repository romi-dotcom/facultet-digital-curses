import FadeUp from "./FadeUp";

const values = [
  {
    tag: "Legal Residency",
    headline: "A legal path to staying in Portugal",
    description:
      "Your enrollment at Facultet generates an AIMA-compliant letter that qualifies you to apply for a student residence permit (D4 visa). Our 94% approval rate isn't an accident — our documentation package is built specifically for immigration success.",
    bullets: [
      "Enrollment letter ready in 14 calendar days",
      "Full documentation package included",
      "Legal status while you build your career",
      "Permit renewed for the program duration",
    ],
    dark: false,
  },
  {
    tag: "European Career",
    headline: "Credentials that actually open doors",
    description:
      "Our programs are recognized by Portuguese employers because they're built with them. You don't just get a certificate — you graduate with a real portfolio that you built during the program, working on actual briefs.",
    bullets: [
      "Portuguese Ministry of Education certificate",
      "Portfolio of 4–6 real projects",
      "Career placement support for 6 months post-graduation",
      "Alumni network in Lisbon & Porto",
    ],
    dark: true,
  },
];

export default function DoubleValue() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <FadeUp className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            The Facultet difference
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-brand leading-tight">
            One enrollment.
            <br />
            Two transformations.
          </h2>
          <p className="text-slate-500 mt-4 text-lg max-w-2xl mx-auto">
            No other licensed school in Portugal gives you both simultaneously. This is the only program that solves your visa problem while building your career.
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map(({ tag, headline, description, bullets, dark }, i) => (
            <FadeUp key={tag} delay={i * 0.1}>
              <div
                className={`h-full rounded-2xl border p-8 lg:p-10 ${
                  dark
                    ? "bg-brand border-brand text-white"
                    : "bg-warm border-warm-dark text-brand"
                }`}
              >
                <span
                  className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6 ${
                    dark ? "bg-white/15 text-white" : "bg-white text-accent"
                  }`}
                >
                  {tag}
                </span>
                <h3
                  className={`font-display text-2xl sm:text-3xl font-semibold leading-snug mb-4 ${
                    dark ? "text-white" : "text-brand"
                  }`}
                >
                  {headline}
                </h3>
                <p
                  className={`text-base leading-relaxed mb-7 ${
                    dark ? "text-white/70" : "text-slate-500"
                  }`}
                >
                  {description}
                </p>
                <ul className="space-y-3">
                  {bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 flex-shrink-0 font-bold ${
                          dark ? "text-accent" : "text-emerald-500"
                        }`}
                      >
                        ✓
                      </span>
                      <span
                        className={`text-sm ${dark ? "text-white/80" : "text-slate-600"}`}
                      >
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.2} className="mt-14 text-center">
          <a
            href="#consult"
            className="inline-block bg-accent hover:bg-accent-hover text-white font-semibold text-base px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25"
          >
            Book My Free Consultation
          </a>
          <p className="text-slate-400 text-sm mt-3">
            Free · No commitment · We respond within 2 hours
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
