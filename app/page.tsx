import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import WorkSection from "@/components/WorkSection";
import TechStackSection from "@/components/TechStackSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="relative bg-white min-h-screen">

      <HeroSection />
      <AboutSection showLearnMore={true} />
      <ServicesSection />
      <ProcessSection />
      <WorkSection />
      <TechStackSection />
      <CTASection />
      <ContactSection />
    </main>
  );
}
