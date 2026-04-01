import FadeUp from "./FadeUp";

const outcomes = [
  { stat: "2,147", label: "Graduates", sub: "since 2019" },
  { stat: "94%",   label: "Visa Approval Rate", sub: "across all student applications" },
  { stat: "78%",   label: "Employed in Their Field", sub: "within 6 months of graduating" },
  { stat: "4.9/5", label: "Student Rating", sub: "from 312 verified reviews" },
];

export default function SuccessStories() {
  return (
    <>
      {/* Outcome stats */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-5">
          <FadeUp className="text-center mb-14">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              After Facultet
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand leading-tight">
              What the numbers actually say
            </h2>
          </FadeUp>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {outcomes.map(({ stat, label, sub }, i) => (
              <FadeUp key={label} delay={i * 0.08}>
                <div className={`rounded-2xl p-6 lg:p-8 text-center border ${
                  i === 0 ? "bg-brand border-brand text-white" :
                  i === 1 ? "bg-accent border-accent text-white" :
                  i === 2 ? "bg-warm border-warm-dark text-brand" :
                  "bg-white border-border text-brand shadow-sm"
                }`}>
                  <p className={`font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 ${
                    i < 2 ? "text-white" : "text-brand"
                  }`}>
                    {stat}
                  </p>
                  <p className={`font-bold text-sm mb-1 ${
                    i < 2 ? "text-white/80" : "text-brand"
                  }`}>
                    {label}
                  </p>
                  <p className={`text-xs ${
                    i < 2 ? "text-white/50" : "text-text-muted"
                  }`}>
                    {sub}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA section */}
      <section id="consult" className="bg-deep-section py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <FadeUp>
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-5">
              Ready to start?
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Solve your visa and your career in one conversation.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Book a free 20-minute consultation with an admissions advisor. We'll look at your situation, explain your options, and tell you honestly if Facultet is the right fit.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="grid sm:grid-cols-3 gap-4 mb-10 text-left">
              {[
                { title: "Residency assessment", desc: "We'll tell you which visa route fits your timeline" },
                { title: "Program match", desc: "Find the right program for your background and goals" },
                { title: "Honest advice", desc: "No pressure. No sales scripts. Just real information." },
              ].map(({ title, desc }) => (
                <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <p className="font-semibold text-white text-sm mb-1">{title}</p>
                  <p className="text-white/50 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <form
              action="#consult"
              method="post"
              className="bg-white rounded-2xl p-7 sm:p-10 text-left"
            >
              <h3 className="font-semibold text-brand text-xl mb-6">
                Book your free consultation
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                    Your name
                  </label>
                  <input
                    type="text"
                    placeholder="Maria"
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-brand text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent placeholder:text-slate-300"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="maria@example.com"
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-brand text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent placeholder:text-slate-300"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                  Which program interests you?
                </label>
                <select
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-brand bg-white"
                  defaultValue=""
                >
                  <option value="" disabled>Select a program…</option>
                  <option>UX / UI Design</option>
                  <option>Digital Marketing</option>
                  <option>Frontend Development</option>
                  <option>Graphic Design & Motion</option>
                  <option>Not sure yet — need advice</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent-hover text-white font-semibold text-base py-4 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
              >
                Book My Free Consultation →
              </button>
              <p className="text-center text-slate-400 text-xs mt-4">
                Free · No commitment · We respond within 2 hours · 100% confidential
              </p>
            </form>
          </FadeUp>

          <p className="text-white/25 text-xs mt-8">
            Facultet School · Licensed by the Ministry of Education, Portugal · License #2847-DEP/2019 ·{" "}
            Campuses in Lisbon (Baixa) and Porto (Aliados)
          </p>
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="bg-brand-deep border-t border-white/5 py-6">
        <div className="max-w-6xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-display text-white/40 text-sm tracking-widest uppercase">
            Facultet School
          </span>
          <div className="flex gap-6 text-white/25 text-xs">
            <a href="#" className="hover:text-white/50 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/50 transition-colors">Terms</a>
            <a href="#" className="hover:text-white/50 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}
