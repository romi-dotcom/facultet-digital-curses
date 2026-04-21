import dynamic from "next/dynamic";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import AudienceSelect from "@/components/AudienceSelect";
import PainAgitation from "@/components/PainAgitation";
import DoubleValue from "@/components/DoubleValue";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import CTAStrip from "@/components/CTAStrip";

const PhotoGalleryMobile = dynamic(() => import("@/components/PhotoGalleryMobile"));
const PhotoGalleryDesktop = dynamic(() => import("@/components/PhotoGalleryDesktop"));
const Programmes = dynamic(() => import("@/components/Programmes"));
const WhyFacultet = dynamic(() => import("@/components/WhyFacultet"));
const VisaSteps = dynamic(() => import("@/components/VisaSteps"));
const HowToApply = dynamic(() => import("@/components/HowToApply"));
const MiniCapture = dynamic(() => import("@/components/MiniCapture"));
const WhatsAppCTA = dynamic(() => import("@/components/WhatsAppCTA"));
const CTAMobileForm = dynamic(() => import("@/components/CTAMobileForm"));
const VisaFaq = dynamic(() => import("@/components/VisaFaq"));
const SuccessStories = dynamic(() => import("@/components/SuccessStories"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const ApplicationForm = dynamic(() => import("@/components/ApplicationForm"));
const CampusMap = dynamic(() => import("@/components/CampusMap"));

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
        <PhotoGalleryMobile />
        <PhotoGalleryDesktop />
        <Programmes />
        <WhyFacultet />
        <VisaSteps />
        <HowToApply />
        {/* Desktop only: Mini Capture form then WhatsApp CTA */}
        <MiniCapture />
        <WhatsAppCTA />
        {/* Mobile only: CTA form strip */}
        <CTAMobileForm />
        <VisaFaq />
        {/* Desktop only CTA #1 */}
        <CTAStrip
          heading="Ready to start? Apply in 2 minutes"
          sub="Takes 2 minutes · No commitment · Response within 2 business hours"
          btnText="Book a Free Consultation →"
          desktopOnly
          headingSize="large"
        />
        <SuccessStories />
        <Testimonials />
        {/* CTA #2 — both mobile and desktop */}
        <CTAStrip
          heading="Join Maria, Arjun, and 420 other students who chose Facultet."
          btnText="Get My Free Consultation"
          trust="No documents needed to apply · Response within 1 business day"
          highlightWords={["Maria", "Arjun", "420"]}
        />
        <ApplicationForm />
        <CampusMap />
      </main>
      <BackToTop />
      <Footer />
    </>
  );
}
