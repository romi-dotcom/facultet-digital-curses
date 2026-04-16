"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import FadeUp from "./FadeUp";

const programmeOptions = [
  { value: "digital-marketing", label: "Digital Marketing" },
  { value: "data-science", label: "Data Science" },
  { value: "project-management", label: "Project Management" },
];

const statusOptions = [
  { value: "valid", label: "Student permit valid (renewal in 3+ months)", short: "Valid — renewal in 3+ months" },
  { value: "expiring-soon", label: "Student permit expiring soon (less than 90 days)", short: "Expiring soon (< 90 days)" },
  { value: "expiring-urgent", label: "Expiring very soon (less than 30 days)", short: "Expiring urgently (< 30 days)" },
  { value: "expired", label: "Student permit already expired", short: "Already expired" },
  { value: "not-sure", label: "Not sure — need advice", short: "Not sure — need advice" },
];

// ── FloatSelect ───────────────────────────────────────────────────────────────

function FloatSelect({ label, placeholder, value, options, onChange }: {
  label: string;
  placeholder: string;
  value: string;
  options: { value: string; label: string; short?: string }[];
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selected = options.find(o => o.value === value);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between rounded-lg text-left"
        style={{
          height: 52, padding: "6px 14px",
          border: `1px solid ${value ? "#16A34A" : "#E2E8F0"}`,
          background: "#FFF7ED",
          boxShadow: value ? "0 0 0 3px rgba(22,163,74,0.1)" : "none",
          transition: "border-color 0.2s ease, box-shadow 0.2s ease",
        }}
      >
        <div className="flex flex-col" style={{ gap: 2 }}>
          <span className="font-semibold text-[#94A3B8]" style={{ fontSize: 10 }}>{label}</span>
          <span style={{ fontSize: 13, color: selected ? "#374151" : "#CBD5E1" }}>
            {selected ? (selected.short ?? selected.label) : placeholder}
          </span>
        </div>
        <svg
          width={16} height={16} viewBox="0 0 24 24" fill="none"
          stroke="#374151" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
          style={{ flexShrink: 0, transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>

      {open && (
        <div
          className="absolute left-0 right-0 z-50 flex flex-col overflow-hidden"
          style={{ top: "calc(100% + 4px)", background: "white", borderRadius: 12, border: "1px solid #E2E8F0", boxShadow: "0 8px 24px rgba(0,0,0,0.10)" }}
        >
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => { onChange(opt.value); setOpen(false); }}
              className="text-left transition-colors"
              style={{
                padding: "12px 14px", fontSize: 13,
                color: opt.value === value ? "#E85D26" : "#374151",
                background: opt.value === value ? "#FFF7ED" : "white",
                fontWeight: opt.value === value ? 600 : 400,
                borderBottom: "1px solid #F1F5F9",
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Icons ─────────────────────────────────────────────────────────────────────

const mobileBullets = [
  "Response within 1 business day",
  "No documents needed to apply",
  "Enrolment certificate in 5–10 business days",
];

const trustSignals = [
  "DGERT-licensed institution registered with AIMA",
  "Documents ready in 5 business days",
  "100% document acceptance rate at AIMA",
  "Support throughout the full renewal process",
];

function IconCheckCircle() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="#E85D26" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/>
    </svg>
  );
}

function IconCheckSmall() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

function IconLock() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#E85D26" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  );
}

function IconValidCheck() {
  return (
    <svg className="valid-icon" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function ApplicationForm() {
  const [form, setForm] = useState({ name: "", email: "", whatsapp: "", programme: "", status: "" });
  const [touched, setTouched] = useState({ name: false, email: false, whatsapp: false });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Animations
  const mobileRef = useRef<HTMLDivElement>(null);
  const mobileInView = useInView(mobileRef, { once: true, margin: "-60px" });

  // A) Progress bar — 5 fields
  const filledCount = [
    form.name.trim().length >= 2,
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email),
    form.whatsapp.length >= 8,
    !!form.programme,
    !!form.status,
  ].filter(Boolean).length;
  const progress = (filledCount / 5) * 100;

  // C) Validation
  const isNameValid    = form.name.trim().length >= 2;
  const isEmailValid   = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const isWaValid      = form.whatsapp.length === 0 || form.whatsapp.length >= 8;

  // ③ Field border/shadow helpers
  const fBorder = (name: string, touch: boolean, valid: boolean) => {
    if (focusedField === name) return "#E85D26";
    if (touch && !valid) return "#EF4444";
    if (touch && valid) return "#16A34A";
    return "#E2E8F0";
  };
  const fShadow = (name: string, touch: boolean, valid: boolean) => {
    if (focusedField === name) return "0 0 0 3px rgba(232,93,38,0.15)";
    if (touch && !valid) return "0 0 0 3px rgba(239,68,68,0.10)";
    if (touch && valid) return "0 0 0 3px rgba(22,163,74,0.10)";
    return "none";
  };

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); };

  return (
    <section id="consult">

      {/* ── Mobile ── */}
      <div ref={mobileRef} className="md:hidden flex flex-col gap-6 bg-[#F8FAFC]" style={{ padding: "32px 0" }}>

        <style>{`
          /* B) Urgency blinking dot */
          @keyframes urgencyBlink { 0%, 100% { opacity: 1; } 50% { opacity: 0.15; } }
          .urgency-dot { animation: urgencyBlink 1.4s ease-in-out infinite; }

          /* ④ Submit button shimmer */
          @keyframes appSubmitShimmer {
            0%   { background-position: -200% center; }
            100% { background-position:  200% center; }
          }
          .app-submit-shimmer {
            background: linear-gradient(90deg, #E86339 0%, #F97316 38%, #FFAC6B 50%, #F97316 62%, #E86339 100%);
            background-size: 200% auto;
            animation: appSubmitShimmer 2.4s linear infinite;
          }
          @keyframes appSubmitPulse {
            0%, 85%, 100% { transform: scale(1); box-shadow: 0 4px 16px rgba(232,99,57,0.3); }
            92%            { transform: scale(1.025); box-shadow: 0 8px 28px rgba(232,99,57,0.5); }
          }
          .app-submit-pulse { animation: appSubmitPulse 3.5s ease-in-out infinite; }

          /* C) Valid icon pop */
          @keyframes validPop {
            0%   { transform: scale(0); opacity: 0; }
            70%  { transform: scale(1.35); }
            100% { transform: scale(1); opacity: 1; }
          }
          .valid-icon { animation: validPop 0.3s ease-out forwards; }
        `}</style>

        {/* ① FadeUp — heading + bullets + social proof */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={mobileInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col gap-6"
          style={{ padding: "0 20px" }}
        >
          {/* ① Overline label */}
          <div className="flex flex-col gap-3 text-center items-center">
            <p style={{ fontSize: 10, fontWeight: 700, color: "#E85D26", letterSpacing: 2, textTransform: "uppercase" }}>
              FREE CONSULTATION
            </p>
            <h2 className="text-[#1E293B] font-bold" style={{ fontSize: 28, lineHeight: 1.2 }}>
              Ready to renew your student permit?
            </h2>
          </div>

          {/* ② Stagger bullets */}
          <div className="flex flex-col" style={{ gap: 10 }}>
            {mobileBullets.map((b, i) => (
              <motion.div
                key={b}
                className="flex items-center"
                style={{ gap: 10 }}
                initial={{ opacity: 0, x: -10 }}
                animate={mobileInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.35, ease: "easeOut", delay: 0.15 + i * 0.08 }}
              >
                <IconCheckCircle />
                <span className="text-[#1E293B]" style={{ fontSize: 14 }}>{b}</span>
              </motion.div>
            ))}
          </div>

          {/* ④ Social proof — white card + real avatars + ③ star rating */}
          <div
            className="flex items-center"
            style={{ gap: 12, borderRadius: 12, padding: "12px 16px", background: "white", border: "1px solid #E2E8F0", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
          >
            <div className="flex items-center flex-shrink-0">
              {[
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=56&h=56&fit=crop&crop=faces",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=56&h=56&fit=crop&crop=faces",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="rounded-full border-2 border-white"
                  style={{ width: 28, height: 28, objectFit: "cover", marginLeft: i > 0 ? -10 : 0 }}
                />
              ))}
              <div
                className="rounded-full border-2 border-white flex items-center justify-center text-white font-bold"
                style={{ width: 28, height: 28, background: "#E85D26", marginLeft: -10, fontSize: 8 }}
              >
                +423
              </div>
            </div>
            <div className="flex flex-col" style={{ gap: 2 }}>
              <div className="flex items-center" style={{ gap: 4 }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width={11} height={11} viewBox="0 0 24 24" fill="#F59E0B" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
                <span style={{ fontSize: 11, fontWeight: 700, color: "#F59E0B", marginLeft: 2 }}>4.9</span>
              </div>
              <span className="text-[#475569] font-medium" style={{ fontSize: 13 }}>423 students enrolled</span>
            </div>
          </div>

          {/* ⑤ Urgency pill — left orange accent */}
          <div
            className="flex items-center rounded-lg"
            style={{ gap: 8, padding: "8px 16px", background: "#FFF0E8", borderLeft: "3px solid #E85D26" }}
          >
            <div className="urgency-dot rounded-full bg-red-500 flex-shrink-0" style={{ width: 7, height: 7 }} />
            <IconCalendar />
            <span className="text-[#E85D26] font-semibold" style={{ fontSize: 13 }}>Next Intake: September 2026 · Limited spots</span>
          </div>
        </motion.div>

        {/* ② Slide-up form card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={mobileInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col mx-5"
          style={{ background: "rgba(255,255,255,0.85)", borderRadius: 20, border: "1px solid rgba(255,255,255,0.38)", boxShadow: "0 8px 40px rgba(0,0,0,0.08)", backdropFilter: "blur(32px)" }}
        >
          {/* A) Progress bar */}
          <div style={{ height: 4, background: "#F1F5F9" }}>
            <div style={{
              height: "100%",
              width: `${progress}%`,
              background: progress === 100
                ? "linear-gradient(90deg, #16A34A, #22C55E)"
                : "linear-gradient(90deg, #E85D26, #F97316)",
              transition: "width 0.4s ease-out, background 0.6s ease",
            }} />
          </div>

          <div className="flex flex-col" style={{ gap: 10, padding: 28 }}>

            <div className="flex flex-col" style={{ gap: 4 }}>
              <div className="flex items-center justify-between">
                <h3 className="text-[#1E293B] font-bold" style={{ fontSize: 20 }}>Free Consultation</h3>
                <span style={{ fontSize: 11, color: progress === 100 ? "#16A34A" : "#94A3B8", fontWeight: 600, transition: "color 0.3s" }}>
                  {filledCount}/5 filled
                </span>
              </div>
              <p className="text-[#64748B]" style={{ fontSize: 13 }}>No commitment required</p>
              <div className="flex items-center" style={{ gap: 8, marginTop: 2 }}>
                <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/>
                  <line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
                </svg>
                <span className="text-[#94A3B8] font-medium" style={{ fontSize: 12 }}>Just 5 fields — takes 2 minutes</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col" style={{ gap: 8 }}>

              {/* ③ Full Name — focus glow + C) validation */}
              <div
                className="relative flex flex-col justify-center bg-white rounded-lg"
                style={{
                  height: 52, padding: "6px 36px 6px 14px",
                  border: `1px solid ${fBorder("name", touched.name, isNameValid)}`,
                  boxShadow: fShadow("name", touched.name, isNameValid),
                  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                <span className="font-semibold text-[#94A3B8]" style={{ fontSize: 10 }}>Full Name</span>
                <input type="text" placeholder="Your full name" value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => { setFocusedField(null); setTouched(t => ({ ...t, name: true })); }}
                  className="w-full bg-transparent text-[#1E293B] placeholder-[#CBD5E1] outline-none"
                  style={{ fontSize: 14 }} required />
                {touched.name && isNameValid && (
                  <div className="absolute right-12 top-1/2 -translate-y-1/2"><IconValidCheck /></div>
                )}
              </div>

              {/* ③ WhatsApp — focus glow + C) validation */}
              <div
                className="relative flex flex-col justify-center bg-white rounded-lg"
                style={{
                  height: 52, padding: "6px 36px 6px 14px",
                  border: `1px solid ${fBorder("whatsapp", touched.whatsapp && form.whatsapp.length > 0, isWaValid)}`,
                  boxShadow: fShadow("whatsapp", touched.whatsapp && form.whatsapp.length > 0, isWaValid),
                  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                <span className="font-semibold text-[#94A3B8]" style={{ fontSize: 10 }}>WhatsApp</span>
                <input type="tel" placeholder="+351 XXX XXX XXX" value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                  onFocus={() => setFocusedField("whatsapp")}
                  onBlur={() => { setFocusedField(null); setTouched(t => ({ ...t, whatsapp: true })); }}
                  className="w-full bg-transparent text-[#1E293B] placeholder-[#CBD5E1] outline-none"
                  style={{ fontSize: 14 }} />
                {touched.whatsapp && form.whatsapp.length > 0 && isWaValid && (
                  <div className="absolute right-12 top-1/2 -translate-y-1/2"><IconValidCheck /></div>
                )}
              </div>

              {/* ③ Email — focus glow + C) validation */}
              <div
                className="relative flex flex-col justify-center bg-white rounded-lg"
                style={{
                  height: 52, padding: "6px 36px 6px 14px",
                  border: `1px solid ${fBorder("email", touched.email, isEmailValid)}`,
                  boxShadow: fShadow("email", touched.email, isEmailValid),
                  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                <span className="font-semibold text-[#94A3B8]" style={{ fontSize: 10 }}>Email</span>
                <input type="email" placeholder="your@email.com" value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => { setFocusedField(null); setTouched(t => ({ ...t, email: true })); }}
                  className="w-full bg-transparent text-[#1E293B] placeholder-[#CBD5E1] outline-none"
                  style={{ fontSize: 14 }} required />
                {touched.email && isEmailValid && (
                  <div className="absolute right-12 top-1/2 -translate-y-1/2"><IconValidCheck /></div>
                )}
              </div>

              {/* Programme — green border when selected */}
              <FloatSelect
                label="Programme"
                placeholder="Not sure — help me choose"
                value={form.programme}
                options={programmeOptions}
                onChange={(v) => setForm({ ...form, programme: v })}
              />

              {/* Status — green border when selected */}
              <FloatSelect
                label="Student permit status"
                placeholder="Select your status"
                value={form.status}
                options={statusOptions}
                onChange={(v) => setForm({ ...form, status: v })}
              />

              {/* ④ Submit — shimmer + pulse */}
              <button
                type="submit"
                className="app-submit-shimmer app-submit-pulse w-full flex items-center justify-center gap-2 text-white font-bold rounded-lg"
                style={{ height: 48, fontSize: 15, marginTop: 8, border: "none", cursor: "pointer" }}
              >
                <IconLock />
                Get My Free Consultation →
              </button>

              <p className="text-[#94A3B8] text-center" style={{ fontSize: 12 }}>
                We respect your privacy. No spam, ever.
              </p>

            </form>
          </div>
        </motion.div>
      </div>

      {/* ── Desktop (unchanged) ── */}
      <div
        className="hidden md:block relative py-20"
        style={{ background: "#0F172A" }}
      >
        <div
          className="absolute inset-0 opacity-25 bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1555881400-74d7acaacd8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1440&q=60)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(15,23,42,0.9) 0%, rgba(30,41,59,0.8) 50%, rgba(42,31,26,0.7) 100%)" }}
        />

        <div className="relative max-w-[1440px] mx-auto px-5 lg:px-[160px]">
          <div className="flex gap-[120px] justify-center items-start">

            <FadeUp className="flex flex-col gap-6 w-[560px]">
              <h2 className="text-white text-[40px] font-extrabold leading-[1.1] tracking-[-1px]">
                Ready to renew your student permit?
              </h2>
              <div className="flex flex-col gap-3">
                {trustSignals.map((t) => (
                  <div key={t} className="flex items-start gap-3">
                    <span className="text-accent flex-shrink-0 mt-0.5"><IconCheckSmall /></span>
                    <p className="text-white/75 text-sm leading-snug">{t}</p>
                  </div>
                ))}
              </div>
              <div
                className="flex items-center gap-4 rounded-2xl px-5 py-4"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(16px)" }}
              >
                <div className="flex -space-x-2">
                  {["#E85D26", "#166534", "#1E3A5F", "#1E293B"].map((c, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white/20 flex items-center justify-center text-white text-xs font-bold" style={{ background: c }}>
                      {["M", "A", "P", "+"][i]}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">423 students enrolled</p>
                  <p className="text-white/50 text-xs">from 12 countries · Class of 2024–25</p>
                </div>
              </div>
              <div
                className="flex items-center gap-3 px-4 py-3 rounded-xl"
                style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.18)" }}
              >
                <svg className="text-red-400 flex-shrink-0" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                <p className="text-red-300 text-sm">Next intake: September 2026 · Limited spots remaining</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.15} className="w-[440px]">
              <div
                className="rounded-[20px] p-9"
                style={{ background: "rgba(255,255,255,0.85)", backdropFilter: "blur(32px)", border: "1px solid rgba(255,255,255,0.38)", boxShadow: "0 8px 40px rgba(0,0,0,0.12)" }}
              >
                <h3 className="text-[#1E293B] text-xl font-bold mb-1">Book a Free Consultation</h3>
                <p className="text-[#64748B] text-sm mb-6">No commitment · Response within 1 business day</p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#374151] text-sm font-medium">Full name</label>
                    <input type="text" placeholder="Your name" value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white border border-[#E2E8F0] rounded-lg px-4 py-3 text-[#1E293B] text-sm placeholder-[#94A3B8] outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
                      required />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#374151] text-sm font-medium">Email</label>
                    <input type="email" placeholder="your@email.com" value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white border border-[#E2E8F0] rounded-lg px-4 py-3 text-[#1E293B] text-sm placeholder-[#94A3B8] outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
                      required />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#374151] text-sm font-medium">Programme of interest</label>
                    <select value={form.programme}
                      onChange={(e) => setForm({ ...form, programme: e.target.value })}
                      className="w-full bg-white border border-[#E2E8F0] rounded-lg px-4 py-3 text-[#1E293B] text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all">
                      <option value="">Select a programme</option>
                      <option>Digital Marketing</option>
                      <option>Data Science</option>
                      <option>Project Management</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#374151] text-sm font-medium">Phone (optional)</label>
                    <input type="tel" placeholder="+351 XXX XXX XXX" value={form.whatsapp}
                      onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                      className="w-full bg-white border border-[#E2E8F0] rounded-lg px-4 py-3 text-[#1E293B] text-sm placeholder-[#94A3B8] outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all" />
                  </div>
                  <button type="submit"
                    className="w-full bg-accent hover:bg-accent-hover text-white font-bold text-base py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-accent/25 mt-2">
                    Book My Free Consultation →
                  </button>
                  <p className="text-[#94A3B8] text-xs text-center">
                    No documents needed to apply · We respond within 1 business day
                  </p>
                </form>
              </div>
            </FadeUp>

          </div>
        </div>
      </div>
    </section>
  );
}
