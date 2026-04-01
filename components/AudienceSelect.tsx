import FadeUp from "./FadeUp";

const audiences = [
  {
    tag: "Visa Path",
    headline: "Your residency situation is uncertain",
    description:
      "Your tourist visa is running out, your temporary permit is ending, or you've been in legal limbo for months. You need a legit path to a student residence permit — now.",
    points: [
      "Enrollment letter ready in 14 days",
      "AIMA-accepted documentation package",
      "94% residence permit approval rate",
    ],
    cta: "See how the visa process works →",
    href: "#visa-steps",
    accent: false,
  },
  {
    tag: "Career Path",
    headline: "Your foreign degree isn't opening doors",
    description:
      "You have years of experience back home, but in Portugal, recruiters don't recognize your credentials. You've been applying for months. It's not about effort — it's about proof.",
    points: [
      "Portuguese/EU-recognized certificate",
      "Real portfolio built during the program",
      "78% employed in their field within 6 months",
    ],
    cta: "See our programs →",
    href: "#programmes",
    accent: true,
  },
];

export default function AudienceSelect() {
  return (
    <section id="audience" className="bg-warm py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <FadeUp className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Who comes to Facultet
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand leading-tight">
            Two problems. One solution.
          </h2>
          <p className="text-slate-500 mt-4 text-lg max-w-xl mx-auto">
            Most of our students come for one reason — and discover the second reason matters just as much.
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-6">
          {audiences.map(({ tag, headline, description, points, cta, href, accent }, i) => (
            <FadeUp key={tag} delay={i * 0.1}>
              <div
                className={`h-full rounded-2xl p-8 lg:p-10 border ${
                  accent
                    ? "bg-brand text-white border-brand"
                    : "bg-white text-brand border-gray-100"
                }`}
              >
                <span
                  className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6 ${
                    accent ? "bg-white/15 text-white" : "bg-warm text-accent"
                  }`}
                >
                  {tag}
                </span>
                <h3
                  className={`font-display text-2xl sm:text-3xl font-semibold leading-snug mb-4 ${
                    accent ? "text-white" : "text-brand"
                  }`}
                >
                  {headline}
                </h3>
                <p
                  className={`text-base leading-relaxed mb-6 ${
                    accent ? "text-white/70" : "text-slate-500"
                  }`}
                >
                  {description}
                </p>
                <ul className="space-y-2.5 mb-8">
                  {points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <span
                        className={`mt-0.5 flex-shrink-0 font-bold ${
                          accent ? "text-accent" : "text-emerald-500"
                        }`}
                      >
                        ✓
                      </span>
                      <span
                        className={`text-sm ${accent ? "text-white/80" : "text-slate-600"}`}
                      >
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={href}
                  className={`text-sm font-semibold transition-opacity hover:opacity-75 ${
                    accent ? "text-accent" : "text-brand"
                  }`}
                >
                  {cta}
                </a>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
