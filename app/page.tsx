/*
 * FACULTET SCHOOL — HIGH-CONVERSION LANDING PAGE
 *
 * MESSAGE MAP
 * H1: "Your Visa Problem Has an Education Solution"
 * Sub: Licensed 14-month programs in Lisbon & Porto —
 *      student residence permit + European certificate + portfolio
 *
 * SECTION FLOW & PURPOSE
 * 1. Nav            → One CTA, no exit links
 * 2. Hero           → "Am I in the right place?" → Yes.
 * 3. TrustBar       → "Can I trust this?" → 2,147 graduates, licensed, 4.9/5
 * 4. AudienceSelect → "Is this for me?" → Two specific personas
 * 5. PainAgitation  → "Do they understand my pain?" → Deeply
 * 6. DoubleValue    → "What do I actually get?" → Two problems, one enrollment
 * 7. Programmes     → "What are my options?" → 4 programs
 * 8. VisaSteps      → "Is the process complicated?" → No, 4 steps
 * 9. VisaFaq        → Pre-empt every objection
 * 10. Testimonials  → "Has it worked for people like me?" → Yes
 * 11. SuccessStories → "What happens after?" → Stats + final CTA
 *
 * PRIMARY CTA: "Book My Free Consultation" (Hero + post-testimonials + final)
 * OBJECTIONS HANDLED:
 *   "Is this legit?" → TrustBar + FAQ #1 (Ministry license)
 *   "Is this for me?" → AudienceSelect
 *   "How does the visa work?" → VisaSteps + FAQ
 *   "What if it fails?" → FAQ #6 (refund policy)
 *   "Can I afford it?" → FAQ #5 (monthly installments from €380)
 */

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import AudienceSelect from "@/components/AudienceSelect";
import PainAgitation from "@/components/PainAgitation";
import DoubleValue from "@/components/DoubleValue";
import Programmes from "@/components/Programmes";
import VisaSteps from "@/components/VisaSteps";
import VisaFaq from "@/components/VisaFaq";
import Testimonials from "@/components/Testimonials";
import SuccessStories from "@/components/SuccessStories";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <AudienceSelect />
        <PainAgitation />
        <DoubleValue />
        <Programmes />
        <VisaSteps />
        <Testimonials />
        <VisaFaq />
        <SuccessStories />
      </main>

      {/* Mobile sticky CTA — visible only on small screens */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-white border-t border-gray-200 shadow-lg p-4 sm:hidden">
        <a
          href="#consult"
          className="block w-full text-center bg-accent hover:bg-accent-hover text-white font-semibold py-3.5 rounded-xl transition-colors text-base"
        >
          Book My Free Consultation
        </a>
      </div>
    </>
  );
}
