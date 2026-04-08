"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Programmes",      href: "#programmes" },
  { label: "Visa Process",    href: "#visa-steps" },
  { label: "Student Stories", href: "#testimonials" },
  { label: "FAQ",             href: "#faq" },
  { label: "Book Consultation", href: "#consult" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Top utility bar */}
      <div className="bg-[#1E293B] h-9 hidden sm:flex items-center">
        <div className="max-w-[1440px] mx-auto px-10 w-full flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <svg className="text-accent w-3 h-3 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>
            </svg>
            <span className="text-white/60 text-[11px] font-medium">DGERT Licensed Institution</span>
          </div>
          <div className="w-px h-3.5 bg-white/15" />
          <div className="flex items-center gap-1.5">
            <svg className="text-white/50 w-2.5 h-2.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.62 4.34a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.9-.9a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span className="text-white/60 text-[11px]">+351 XXX XXX XXX</span>
          </div>
          <div className="w-px h-3.5 bg-white/15" />
          <div className="flex items-center gap-1.5">
            <svg className="w-2.5 h-2.5 flex-shrink-0" viewBox="0 0 24 24" fill="#25D366">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            <span className="text-white/60 text-[11px]">WhatsApp</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`relative bg-white border-b border-border h-16 flex items-center transition-shadow duration-300 ${scrolled ? "shadow-[0_2px_12px_rgba(0,0,0,0.10)]" : "shadow-[0_2px_8px_rgba(0,0,0,0.06)]"}`}>
        {/* Centered label — absolute so it doesn't affect layout */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="hidden sm:block text-[10px] font-semibold tracking-[0.2em] uppercase text-text-muted">
            Study in Portugal · Licensed Institution
          </span>
        </div>

        <div className="max-w-[1440px] mx-auto px-5 lg:px-10 w-full flex items-center gap-3">

          {/* Logo — always left */}
          <a href="/" className="flex items-center flex-shrink-0">
            <span className="text-brand text-xl font-bold">facultet</span>
            <span className="text-accent text-xl font-normal">.school</span>
          </a>

          {/* CTA — center on mobile, right on desktop */}
          <a
            href="#consult"
            className="flex-shrink-0 bg-accent hover:bg-accent-hover text-white text-sm font-bold px-5 sm:px-6 py-2.5 rounded-md transition-colors sm:ml-auto"
          >
            Apply Now →
          </a>

          {/* Hamburger — right on mobile, hidden on desktop (desktop uses drawer too) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex-shrink-0 w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-lg hover:bg-warm transition-colors sm:ml-0 ml-auto sm:ml-0"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.22 }}
              className="block w-5 h-[1.75px] bg-brand rounded-full origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.18 }}
              className="block w-5 h-[1.75px] bg-brand rounded-full"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.22 }}
              className="block w-5 h-[1.75px] bg-brand rounded-full origin-center"
            />
          </button>
        </div>
      </nav>

      {/* Drawer overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={close}
              className="fixed inset-0 bg-black/40 z-40"
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-2xl flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 h-16 border-b border-border flex-shrink-0">
                <a href="/" onClick={close} className="flex items-center">
                  <span className="text-brand text-lg font-bold">facultet</span>
                  <span className="text-accent text-lg font-normal">.school</span>
                </a>
                <button
                  onClick={close}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-warm transition-colors text-brand"
                  aria-label="Close menu"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
                {navLinks.map(({ label, href }, i) => (
                  <motion.a
                    key={href}
                    href={href}
                    onClick={close}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.25 }}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors group ${
                      label === "Book Consultation"
                        ? "bg-accent text-white hover:bg-accent-hover mt-4"
                        : "text-brand hover:bg-warm hover:text-accent"
                    }`}
                  >
                    {label}
                    <svg
                      width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                      className={label === "Book Consultation" ? "text-white/70" : "text-text-muted group-hover:text-accent transition-colors"}
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </motion.a>
                ))}
              </nav>

              {/* Drawer footer */}
              <div className="px-6 py-5 border-t border-border flex-shrink-0">
                <p className="text-text-muted text-xs leading-relaxed">
                  Licensed by the Ministry of Education, Portugal
                  <br />
                  License #2847-DEP/2019
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
