import FadeUp from "./FadeUp";

const videos = [
  {
    quote: "\"I landed my first job in Lisbon within 3 months of enrolling\"",
    gradient: "linear-gradient(135deg, #1E293B 0%, #E85D26 100%)",
  },
  {
    quote: "\"Renewing my permit felt like a maze. Facultet prepared every document — AIMA accepted it all first time.\"",
    gradient: "linear-gradient(135deg, #0F172A 0%, #1E3A5F 100%)",
  },
  {
    quote: "\"From assistant to freelance PM — all in just 4 months\"",
    gradient: "linear-gradient(135deg, #166534 0%, #1E293B 100%)",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-10 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[160px]">

        <FadeUp className="text-center mb-8">
          <h2 className="text-[#1E293B] text-[22px] lg:text-[40px] font-bold">
            Watch Their Journey
          </h2>
          <p className="text-[#64748B] mt-3" style={{ fontSize: 14 }}>
            Unscripted stories from real Facultet graduates
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            {videos.map(({ quote, gradient }, i) => (
              <div key={i} className="flex flex-col gap-2.5 w-full sm:w-[280px]">
                {/* Video card placeholder */}
                <div
                  className="w-full rounded-xl overflow-hidden relative"
                  style={{ height: 498, background: gradient }}
                >
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all cursor-pointer">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <polygon points="5 3 19 12 5 21 5 3"/>
                      </svg>
                    </div>
                  </div>
                </div>

                <p className="text-[#64748B] text-sm italic leading-[1.4] font-medium">
                  {quote}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Google reviews badge */}
        <FadeUp delay={0.2} className="flex justify-center mt-10">
          <div className="flex items-center gap-5 bg-white border border-[#E2E8F0] rounded-2xl px-8 py-5 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
            <span className="text-[#4285F4] text-[32px] font-extrabold leading-none">G</span>
            <div className="w-px h-12 bg-[#E2E8F0]" />
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
              <p className="text-[#1E293B] text-sm font-semibold">5.0 rating</p>
            </div>
            <div className="w-px h-12 bg-[#E2E8F0]" />
            <div className="flex flex-col gap-0.5">
              <p className="text-[#1E293B] text-sm font-bold">47 reviews</p>
              <p className="text-[#64748B] text-xs">on Google</p>
            </div>
            <div className="w-px h-12 bg-[#E2E8F0]" />
            <a href="#" className="text-accent text-sm font-semibold hover:underline">
              Read all reviews →
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
