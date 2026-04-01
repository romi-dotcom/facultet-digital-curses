"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FadeUp from "./FadeUp";

interface FaqItem {
  q: string;
  a: string;
}

const faqs: FaqItem[] = [
  {
    q: "Is Facultet officially recognized for student visa (D4) purposes?",
    a: "Yes. Facultet is licensed by the Portuguese Ministry of Education — License #2847-DEP/2019. This license is what allows our enrollment letter to be accepted by AIMA (the Agency for Integration, Migration and Asylum) as supporting documentation for a student residence permit. You can verify our license on the Ministry of Education's public registry.",
  },
  {
    q: "How quickly can I receive my enrollment documents?",
    a: "Your full documentation package — enrollment letter, program confirmation, and all AIMA-required materials — is ready within 14 calendar days of your first tuition payment. We have a dedicated documentation team that prepares these packages daily.",
  },
  {
    q: "Can I work while studying at Facultet?",
    a: "Yes. A student residence permit in Portugal allows you to work up to 20 hours per week during term time, and full-time during academic breaks. Many of our students begin working in their field before they even graduate.",
  },
  {
    q: "Are classes in English? Do I need to speak Portuguese?",
    a: "All programs are delivered in English, with course materials also available in Russian. You do not need to speak Portuguese to study at Facultet. We do offer optional Portuguese language integration workshops, but they are not a requirement.",
  },
  {
    q: "What does the program cost, and are there payment options?",
    a: "Programs range from €3,800 to €5,200 depending on the program and campus. All programs offer a monthly installment plan — starting from €380/month — so you're not required to pay everything upfront. Book a free consultation and we'll give you the exact breakdown for your chosen program.",
  },
  {
    q: "What if I don't get approved for a residence permit?",
    a: "Our approval rate is 94%. If your application is rejected, our team reviews the rejection letter and helps you appeal or re-apply — at no additional cost. If after two attempts you are still unsuccessful, we offer a 60% tuition refund on your remaining program balance. We stand behind our process.",
  },
  {
    q: "Can my spouse or family apply for a dependent visa?",
    a: "Yes. Once you receive your student residence permit, your spouse and children can apply for a family reunification permit (dependent residence). Facultet's documentation team can provide guidance on this process during your enrollment.",
  },
  {
    q: "Do I need to attend classes in person, or can I study remotely?",
    a: "Our programs are designed as hybrid: the majority of instruction is in-person at our Lisbon or Porto campus (which matters for the visa documentation), with some theoretical modules available online. Full remote enrollment is not available, as in-person attendance is required for the student residence permit documentation to be valid.",
  },
];

export default function VisaFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-warm py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-5">
        <FadeUp className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Your questions, answered
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand leading-tight">
            Everything you need
            <br />
            to know before enrolling
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="divide-y divide-warm-dark">
            {faqs.map(({ q, a }, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className="py-1">
                  <button
                    onClick={() => toggle(i)}
                    className="w-full text-left py-5 flex items-start justify-between gap-4 group"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-brand text-base leading-snug group-hover:text-accent transition-colors pr-2">
                      {q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="flex-shrink-0 w-6 h-6 rounded-full bg-white border border-warm-dark flex items-center justify-center text-brand text-sm font-light mt-0.5"
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <div className="pb-5 pr-10">
                          <p className="text-slate-500 text-base leading-relaxed">{a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </FadeUp>

        <FadeUp delay={0.2} className="mt-12">
          <div className="text-center bg-white rounded-2xl border border-warm-dark p-7">
            <p className="text-brand font-semibold text-lg mb-2">
              Didn't find what you were looking for?
            </p>
            <p className="text-slate-500 text-sm mb-5">
              Book a free 20-minute consultation with an admissions advisor. No pressure, no sales pitch — just answers.
            </p>
            <a
              href="#consult"
              className="inline-block bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
            >
              Ask My Question
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
