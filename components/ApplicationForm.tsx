"use client";

import { useState } from "react";
import FadeUp from "./FadeUp";

const mobileBullets = [
  "No visa costs or hidden fees",
  "Fast and simple process",
  "Same day approval",
];

const trustSignals = [
  "DGERT-licensed institution registered with AIMA",
  "Documents ready in 5 business days",
  "100% document acceptance rate at AIMA",
  "Support throughout the full renewal process",
];

function IconCheckCircle() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
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

export default function ApplicationForm() {
  const [form, setForm] = useState({ name: "", email: "", whatsapp: "", programme: "", status: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="consult">

      {/* ── Mobile ── */}
      <div className="md:hidden flex flex-col gap-8 bg-[#F8FAFC]" style={{ padding: "48px 20px" }}>

        {/* Heading */}
        <div className="flex flex-col gap-6">
          <h2 className="text-[#1E293B] font-bold leading-[1.2]" style={{ fontSize: 32 }}>
            Ready to renew your student permit?
          </h2>

          {/* Bullets */}
          <div className="flex flex-col gap-4">
            {mobileBullets.map((b) => (
              <div key={b} className="flex items-center gap-3">
                <IconCheckCircle />
                <span className="text-[#475569] font-medium" style={{ fontSize: 14 }}>{b}</span>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="flex flex-col gap-3 rounded-xl bg-white p-4" style={{ border: "1px solid #E2E8F0" }}>
            <p className="text-[#475569] italic leading-[1.5]" style={{ fontSize: 14 }}>
              &ldquo;This process was incredibly smooth. They handled everything professionally.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-full text-white font-bold flex-shrink-0" style={{ width: 36, height: 36, background: "#1E293B", fontSize: 14 }}>
                J
              </div>
              <div>
                <p className="text-[#1E293B] font-bold" style={{ fontSize: 14 }}>Joana dos Santos</p>
                <p className="text-[#64748B]" style={{ fontSize: 13 }}>Student, Digital Marketing</p>
              </div>
            </div>
          </div>

          {/* Intake */}
          <div className="flex items-center gap-3">
            <IconCalendar />
            <p style={{ fontSize: 14 }}>
              <span className="text-[#1E293B] font-bold">Next intake: </span>
              <span className="text-[#475569]">20 January 2026</span>
            </p>
          </div>
        </div>

        {/* Form card */}
        <div className="flex flex-col gap-6 bg-white rounded-xl" style={{ padding: "24px", border: "1px solid #E2E8F0", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>

          <div className="flex flex-col gap-1">
            <h3 className="text-[#1E293B] font-bold" style={{ fontSize: 24 }}>Free Consultation</h3>
            <p className="text-[#64748B]" style={{ fontSize: 14 }}>No commitment required</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* Full Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[#1E293B] font-semibold" style={{ fontSize: 14 }}>Full Name</label>
              <input
                type="text"
                placeholder="Your full name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-white rounded-lg px-4 text-[#1E293B] placeholder-[#94A3B8] outline-none transition-all"
                style={{ height: 44, border: "1px solid #E2E8F0", fontSize: 14 }}
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[#1E293B] font-semibold" style={{ fontSize: 14 }}>Email</label>
              <input
                type="email"
                placeholder="your.email@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white rounded-lg px-4 text-[#1E293B] placeholder-[#94A3B8] outline-none transition-all"
                style={{ height: 44, border: "1px solid #E2E8F0", fontSize: 14 }}
                required
              />
            </div>

            {/* WhatsApp */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[#1E293B] font-semibold" style={{ fontSize: 14 }}>WhatsApp</label>
              <input
                type="tel"
                placeholder="+351 XXX XXX XXX"
                value={form.whatsapp}
                onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                className="w-full bg-white rounded-lg px-4 text-[#1E293B] placeholder-[#94A3B8] outline-none transition-all"
                style={{ height: 44, border: "1px solid #E2E8F0", fontSize: 14 }}
              />
            </div>

            {/* Programme */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[#1E293B] font-semibold" style={{ fontSize: 14 }}>Programme</label>
              <select
                value={form.programme}
                onChange={(e) => setForm({ ...form, programme: e.target.value })}
                className="w-full bg-white rounded-lg px-4 text-[#1E293B] outline-none transition-all appearance-none"
                style={{ height: 44, border: "1px solid #E2E8F0", fontSize: 14, color: form.programme ? "#1E293B" : "#94A3B8" }}
              >
                <option value="" disabled>Select your programme</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="ux-ui">UX / UI Design</option>
                <option value="frontend">Frontend Development</option>
                <option value="project-management">Project Management</option>
                <option value="not-sure">Not sure yet</option>
              </select>
            </div>

            {/* Student Permit Status */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[#1E293B] font-semibold" style={{ fontSize: 14 }}>Student Permit Status</label>
              <select
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
                className="w-full bg-white rounded-lg px-4 text-[#1E293B] outline-none transition-all appearance-none"
                style={{ height: 44, border: "1px solid #E2E8F0", fontSize: 14, color: form.status ? "#1E293B" : "#94A3B8" }}
              >
                <option value="" disabled>Select your current status</option>
                <option value="enrolled">Currently enrolled</option>
                <option value="expiring-1-3">Permit expiring in 1–3 months</option>
                <option value="expiring-3-6">Permit expiring in 3–6 months</option>
                <option value="expired">Permit already expired</option>
                <option value="not-sure">Not sure</option>
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 text-white font-semibold rounded-lg transition-all"
              style={{ height: 48, fontSize: 14, background: "linear-gradient(90deg, #E85D26 0%, #F97316 100%)", boxShadow: "0 4px 16px rgba(232,93,38,0.35)" }}
            >
              <IconLock />
              Get My Free Consultation →
            </button>

            {/* Footnote */}
            <p className="text-[#64748B] text-center" style={{ fontSize: 12 }}>
              We respect your privacy. No spam, ever.
            </p>

          </form>
        </div>
      </div>

      {/* ── Desktop ── */}
      <div
        className="hidden md:block relative py-20 overflow-hidden"
        style={{ background: "#0F172A" }}
      >
        {/* Background overlay */}
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

            {/* Left */}
            <FadeUp className="flex flex-col gap-6 w-[560px]">
              <h2 className="text-white text-[40px] font-extrabold leading-[1.1] tracking-[-1px]">
                Ready to renew your student permit?
              </h2>

              <div className="flex flex-col gap-3">
                {trustSignals.map((t) => (
                  <div key={t} className="flex items-start gap-3">
                    <span className="text-accent flex-shrink-0 mt-0.5">
                      <IconCheckSmall />
                    </span>
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

            {/* Right — Form */}
            <FadeUp delay={0.15} className="w-[440px]">
              <div
                className="rounded-[20px] p-9"
                style={{
                  background: "rgba(255,255,255,0.85)",
                  backdropFilter: "blur(32px)",
                  border: "1px solid rgba(255,255,255,0.38)",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
                }}
              >
                <h3 className="text-[#1E293B] text-xl font-bold mb-1">Book a Free Consultation</h3>
                <p className="text-[#64748B] text-sm mb-6">No commitment · Response within 1 business day</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#374151] text-sm font-medium">Full name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white border border-[#E2E8F0] rounded-lg px-4 py-3 text-[#1E293B] text-sm placeholder-[#94A3B8] outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#374151] text-sm font-medium">Email</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white border border-[#E2E8F0] rounded-lg px-4 py-3 text-[#1E293B] text-sm placeholder-[#94A3B8] outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#374151] text-sm font-medium">Programme of interest</label>
                    <select
                      value={form.programme}
                      onChange={(e) => setForm({ ...form, programme: e.target.value })}
                      className="w-full bg-white border border-[#E2E8F0] rounded-lg px-4 py-3 text-[#1E293B] text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
                    >
                      <option value="">Select a programme</option>
                      <option>UX / UI Design</option>
                      <option>Digital Marketing</option>
                      <option>Frontend Development</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#374151] text-sm font-medium">Phone (optional)</label>
                    <input
                      type="tel"
                      placeholder="+351 XXX XXX XXX"
                      value={form.whatsapp}
                      onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                      className="w-full bg-white border border-[#E2E8F0] rounded-lg px-4 py-3 text-[#1E293B] text-sm placeholder-[#94A3B8] outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent-hover text-white font-bold text-base py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-accent/25 mt-2"
                  >
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
