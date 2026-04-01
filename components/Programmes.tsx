"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FadeUp from "./FadeUp";

interface Programme {
  id: string;
  name: string;
  duration: string;
  schedule: string;
  campuses: string;
  description: string;
  skills: string[];
  badge?: string;
}

const programmes: Programme[] = [
  {
    id: "ux-ui",
    name: "UX / UI Design",
    duration: "14 months",
    schedule: "Mon · Wed · Fri evenings + Saturday workshops",
    campuses: "Lisbon (Baixa) & Porto (Aliados)",
    badge: "Most popular",
    description:
      "Learn to design digital products people actually want to use. From user research and wireframes to high-fidelity prototypes in Figma, you'll graduate with a portfolio of 5 real projects that show employers you can do the work.",
    skills: ["User Research", "Figma", "Wireframing", "Prototyping", "Usability Testing", "Design Systems"],
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    duration: "14 months",
    schedule: "Tue · Thu evenings + Saturday workshops",
    campuses: "Lisbon (Baixa)",
    description:
      "Run campaigns across the full digital funnel — SEO, Google Ads, social media, email, and analytics. In your final semester, you'll manage actual campaigns for real clients. Graduate with documented results to show in every interview.",
    skills: ["SEO & SEM", "Google Ads", "Meta Ads", "Email Marketing", "Analytics (GA4)", "Content Strategy"],
  },
  {
    id: "frontend-dev",
    name: "Frontend Development",
    duration: "10 months",
    schedule: "Mon · Wed · Fri evenings",
    campuses: "Lisbon & Porto",
    description:
      "Build web interfaces from scratch. You'll go from HTML/CSS to JavaScript and React, deploying three production-ready projects to your public portfolio. No prior coding experience required — just consistency.",
    skills: ["HTML & CSS", "JavaScript", "React", "Git & GitHub", "Responsive Design", "REST APIs"],
  },
  {
    id: "graphic-design",
    name: "Graphic Design & Motion",
    duration: "12 months",
    schedule: "Weekend intensives + Thursday evenings",
    campuses: "Porto (Aliados)",
    description:
      "Brand identity, typography, print and digital design — plus motion graphics for social and video. Adobe Creative Suite from day one. Graduate with a Behance-ready portfolio and the brief-reading skills clients pay for.",
    skills: ["Adobe Illustrator", "Photoshop", "InDesign", "After Effects", "Typography", "Brand Identity"],
  },
];

export default function Programmes() {
  const [openId, setOpenId] = useState<string | null>("ux-ui");

  const toggle = (id: string) => setOpenId(openId === id ? null : id);

  return (
    <section id="programmes" className="bg-warm py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-5">
        <FadeUp className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Our programs
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-brand leading-tight">
            Choose your digital path
          </h2>
          <p className="text-slate-500 mt-4 text-lg">
            All programs are evening-based so you can study while your residence permit is being processed.
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="space-y-3">
            {programmes.map((prog) => {
              const isOpen = openId === prog.id;
              return (
                <div
                  key={prog.id}
                  className={`rounded-2xl border transition-colors duration-200 overflow-hidden ${
                    isOpen
                      ? "border-brand/30 bg-white shadow-sm"
                      : "border-warm-dark bg-white/60 hover:bg-white hover:border-brand/20"
                  }`}
                >
                  <button
                    onClick={() => toggle(prog.id)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                    aria-expanded={isOpen}
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-brand text-lg">{prog.name}</span>
                        {prog.badge && (
                          <span className="bg-accent text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
                            {prog.badge}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-x-4 gap-y-0.5 mt-1">
                        <span className="text-sm text-slate-400">{prog.duration}</span>
                        <span className="text-sm text-slate-400 hidden sm:inline">{prog.campuses}</span>
                      </div>
                    </div>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="flex-shrink-0 w-7 h-7 rounded-full bg-warm flex items-center justify-center text-brand text-lg font-light"
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <div className="px-6 pb-7 border-t border-gray-100">
                          <div className="pt-5">
                            <div className="flex flex-wrap gap-x-6 gap-y-1 mb-5">
                              <span className="text-sm text-slate-500">📅 {prog.schedule}</span>
                              <span className="text-sm text-slate-500">📍 {prog.campuses}</span>
                            </div>
                            <p className="text-slate-600 text-base leading-relaxed mb-6">
                              {prog.description}
                            </p>
                            <div>
                              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                                You'll learn
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {prog.skills.map((skill) => (
                                  <span
                                    key={skill}
                                    className="bg-warm text-brand text-sm px-3 py-1 rounded-full"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="mt-6">
                              <a
                                href="#consult"
                                className="inline-block bg-accent hover:bg-accent-hover text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors"
                              >
                                Ask about {prog.name} →
                              </a>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
