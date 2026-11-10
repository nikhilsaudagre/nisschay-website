import HeroSection from "@/components/HeroSection";
import QuoteSection from "@/components/QuoteSection";
import MeetNisschaySection from "@/components/MeetNisschaySection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import HomeTechStackSection from "@/components/HomeTechStackSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import WorkTeaserSection from "@/components/WorkTeaserSection";

export default function Home() {
  return (
    <main className="relative bg-white min-h-screen">

      <HeroSection />
      <QuoteSection />
      <MeetNisschaySection />
      <ServicesSection />
      <WhyChooseUsSection />
      <WorkTeaserSection />
      <ProcessSection />
      <HomeTechStackSection />
      <CTASection />
      <ContactSection />
    </main>
  );
}
