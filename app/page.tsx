import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import TechStackSection from "@/components/TechStackSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import WorkTeaserSection from "@/components/WorkTeaserSection";

export default function Home() {
  return (
    <main className="relative bg-white min-h-screen">

      <HeroSection />
      <AboutSection showLearnMore={true} />
      <ServicesSection />
      <WorkTeaserSection />
      <ProcessSection />
      <TechStackSection />
      <CTASection />
      <ContactSection />
    </main>
  );
}
