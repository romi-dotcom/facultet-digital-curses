"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col leading-tight">
          <span
            className={`font-display text-xl font-semibold tracking-widest uppercase transition-colors ${
              scrolled ? "text-brand" : "text-white"
            }`}
          >
            Facultet
          </span>
          <span
            className={`text-[10px] tracking-wider uppercase transition-colors hidden sm:block ${
              scrolled ? "text-slate-400" : "text-white/50"
            }`}
          >
            School · Lisbon & Porto
          </span>
        </div>

        {/* Primary CTA */}
        <a
          href="#consult"
          className={`text-sm font-semibold px-5 py-2.5 rounded-lg transition-all ${
            scrolled
              ? "bg-accent hover:bg-accent-hover text-white"
              : "bg-white/10 hover:bg-white/20 text-white border border-white/30"
          }`}
        >
          <span className="hidden sm:inline">Book Free Consultation</span>
          <span className="sm:hidden">Book Now</span>
        </a>
      </div>
    </nav>
  );
}
