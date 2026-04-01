import FadeUp from "./FadeUp";

const pains = [
  {
    number: "01",
    headline: "Your visa expires in weeks — and you still have no plan.",
    body:
      "Every time someone asks about your status, your stomach drops. The uncertainty is exhausting. You've looked into other options but nothing legitimate has come together.",
  },
  {
    number: "02",
    headline: "You've sent 60 CVs. You've had 3 callbacks.",
    body:
      "It's not your skills — it's your credentials. Portuguese employers see a foreign degree and move on. Years of hard-won experience, invisible on the local market.",
  },
  {
    number: "03",
    headline: "Other \"schools\" turned out to be visa factories, not real education.",
    body:
      "You've heard the horror stories. €1,500 for a fake enrollment letter. Documents rejected by immigration. We understand the skepticism. It's earned.",
  },
  {
    number: "04",
    headline: "Every month you wait is another month of lost income and legal risk.",
    body:
      "Visa uncertainty doesn't just affect your peace of mind — it's a constant ceiling on your career, your housing, and your ability to plan your life.",
  },
];

export default function PainAgitation() {
  return (
    <section className="bg-dark-section py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <FadeUp className="mb-14 max-w-2xl">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            If this sounds familiar
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight">
            You're not struggling because
            <br />
            you're not trying hard enough.
          </h2>
          <p className="text-white/60 mt-4 text-lg">
            The system isn't set up for people in your situation. You need a specific path that's been walked by thousands of people just like you.
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="grid sm:grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {pains.map(({ number, headline, body }) => (
              <div
                key={number}
                className="bg-brand-light/30 p-8 hover:bg-brand-light/50 transition-colors"
              >
                <span className="font-display text-5xl font-semibold text-white/10 block mb-4">
                  {number}
                </span>
                <h3 className="font-semibold text-white text-lg leading-snug mb-3">
                  {headline}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.2} className="mt-14 border-t border-white/10 pt-10 max-w-2xl">
          <p className="font-display text-3xl sm:text-4xl font-bold text-white leading-snug">
            It doesn't have to stay this way.
          </p>
          <p className="text-white/60 text-lg mt-3 mb-8">
            2,147 people in your exact situation enrolled at Facultet — and walked out with a residence permit and a career.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#consult"
              className="inline-block bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-3.5 rounded-lg transition-all hover:-translate-y-0.5 text-sm text-center"
            >
              Book My Free Consultation
            </a>
            <a
              href="#programmes"
              className="inline-block bg-white/10 hover:bg-white/15 border border-white/40 text-white font-semibold px-8 py-3.5 rounded-lg transition-all text-sm text-center"
            >
              See Programs →
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
