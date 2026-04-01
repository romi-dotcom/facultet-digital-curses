import FadeUp from "./FadeUp";

interface Testimonial {
  quote: string;
  name: string;
  route: string;
  program: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "My tourist visa was expiring in 7 weeks and I was in full panic mode. I enrolled within 48 hours, had my documents in 9 days, and my student permit came through in 6 weeks. For the first time in two years, I can actually plan my future.",
    name: "Maria S.",
    route: "Brazil → Lisbon",
    program: "UX / UI Design, 2023",
    initials: "MS",
  },
  {
    quote:
      "I was a marketing manager in Moscow with 8 years of experience, but in Portugal nobody cared about my Russian credentials. Facultet gave me a certificate local employers actually recognized. Four months after graduation, my salary doubled.",
    name: "Dmitri K.",
    route: "Russia → Porto",
    program: "Digital Marketing, 2022",
    initials: "DK",
  },
  {
    quote:
      "I was terrified it was too late to change careers at 34. By month four I was actually building things. Got my residence permit in week 8. Landed my first developer job two months after graduation. If you're on the fence: don't wait.",
    name: "Priya A.",
    route: "India → Lisbon",
    program: "Frontend Development, 2023",
    initials: "PA",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-brand py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <FadeUp className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Student stories
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-white leading-tight">
            In their own words
          </h2>
          <p className="text-white/50 mt-4 text-lg">
            Real students. Real outcomes. Real names.
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(({ quote, name, route, program, initials }, i) => (
            <FadeUp key={name} delay={i * 0.1}>
              <div className="h-full bg-brand-light/40 border border-white/10 rounded-2xl p-7 flex flex-col">
                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span key={j} className="text-amber-400 text-sm">★</span>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-white/80 text-sm leading-relaxed italic flex-1 mb-7">
                  &ldquo;{quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                  <div className="w-11 h-11 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center text-accent font-bold text-sm flex-shrink-0">
                    {initials}
                  </div>
                  <div className="leading-tight">
                    <p className="font-semibold text-white text-sm">{name}</p>
                    <p className="text-white/40 text-xs">{route}</p>
                    <p className="text-white/40 text-xs">{program}</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3}>
          <p className="text-center text-white/30 text-sm mt-10">
            Read 312 more reviews on Google Maps · Average rating 4.9 / 5
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
