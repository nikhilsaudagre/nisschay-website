import HeroSection from "@/components/HeroSection";
import QuoteSection from "@/components/QuoteSection";
import MeetNisschaySection from "@/components/MeetNisschaySection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ProcessSection from "@/components/ProcessSection";
import HomeTechStackSection from "@/components/HomeTechStackSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="relative bg-[var(--site-bg)] min-h-screen">
      <HeroSection />
      <QuoteSection />
      <MeetNisschaySection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <HomeTechStackSection />
      <ContactSection />
    </main>
  );
}

