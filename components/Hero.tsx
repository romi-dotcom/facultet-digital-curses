"use client";

import { motion, type Transition } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const item = (delay: number) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease, delay } as Transition,
});

export default function Hero() {
  return (
    <section className="relative bg-brand min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background accent glow */}
      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #E85D2F 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-5"
        style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 70%)" }}
      />

      <div className="relative max-w-6xl mx-auto px-5 py-20 lg:py-28 w-full">
        <div className="max-w-3xl">
          {/* Pre-headline badge */}
          <motion.div {...item(0)} className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent inline-block" />
            <span className="text-white/80 text-sm tracking-wide">
              Licensed by the Ministry of Education, Portugal
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1 {...item(0.1)} className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-white leading-tight tracking-tight mb-6">
            Your Visa Problem
            <br />
            <span className="text-accent">Has an Education</span>
            <br />
            Solution.
          </motion.h1>

          {/* Subheadline */}
          <motion.p {...item(0.2)} className="text-lg sm:text-xl text-white/75 leading-relaxed max-w-2xl mb-10">
            A licensed 14-month evening program in Lisbon or Porto — gives you
            a{" "}
            <span className="text-white font-medium">student residence permit</span>,
            a{" "}
            <span className="text-white font-medium">European certificate</span>, and a{" "}
            <span className="text-white font-medium">real digital portfolio</span>.
            One enrollment. Two life-changing outcomes.
          </motion.p>

          {/* CTA group */}
          <motion.div {...item(0.3)} className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="#consult"
              className="inline-block bg-accent hover:bg-accent-hover text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30 min-w-[220px] text-center"
            >
              Book My Free Consultation
            </a>
            <p className="text-white/50 text-sm">
              Free · No commitment · Response within 2 hours
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
