import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import AudienceSelect from "@/components/AudienceSelect";
import PainAgitation from "@/components/PainAgitation";
import DoubleValue from "@/components/DoubleValue";
import PhotoGalleryMobile from "@/components/PhotoGalleryMobile";
import PhotoGalleryDesktop from "@/components/PhotoGalleryDesktop";
import Programmes from "@/components/Programmes";
import WhyFacultet from "@/components/WhyFacultet";
import VisaSteps from "@/components/VisaSteps";
import HowToApply from "@/components/HowToApply";
import MiniCapture from "@/components/MiniCapture";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import CTAMobileForm from "@/components/CTAMobileForm";
import VisaFaq from "@/components/VisaFaq";
import CTAStrip from "@/components/CTAStrip";
import SuccessStories from "@/components/SuccessStories";
import Testimonials from "@/components/Testimonials";
import ApplicationForm from "@/components/ApplicationForm";
import CampusMap from "@/components/CampusMap";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

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
