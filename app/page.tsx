import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import AudienceSelect from "@/components/AudienceSelect";
import PainAgitation from "@/components/PainAgitation";
import DoubleValue from "@/components/DoubleValue";
import Programmes from "@/components/Programmes";
import VisaSteps from "@/components/VisaSteps";
import HowToApply from "@/components/HowToApply";
import CTAStrip from "@/components/CTAStrip";
import VisaFaq from "@/components/VisaFaq";
import SuccessStories from "@/components/SuccessStories";
import Testimonials from "@/components/Testimonials";
import ApplicationForm from "@/components/ApplicationForm";

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
        <HowToApply />
        <CTAStrip
          heading="Ready to start? Apply in 2 minutes"
          sub="Takes 2 minutes · No commitment · Response within 2 business hours"
          btnText="Book a free consultation →"
        />
        <VisaFaq />
        <SuccessStories />
        <Testimonials />
        <CTAStrip
          heading="Join Maria, Arjun, and 420 other students who chose Facultet."
          sub="No documents needed to apply · Response within 1 business day"
          btnText="Get My Free Consultation"
          trust="No documents needed to apply · Response within 1 business day"
        />
        <ApplicationForm />
      </main>

    </>
  );
}
