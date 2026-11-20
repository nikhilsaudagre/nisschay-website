import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import QuoteSection from "@/components/QuoteSection";
import MeetNisschaySection from "@/components/MeetNisschaySection";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ProcessSection from "@/components/ProcessSection";
import HomeTechStackSection from "@/components/HomeTechStackSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Nisschay | High-Performance Software Engineering & AI Solutions",
  description:
    "Engineering custom software, SaaS platforms, AI automation, and high-performance websites. The premier digital technology partner in Amravati, built for enterprise scale and startup velocity.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="relative bg-[var(--site-bg)] min-h-screen">
      <HeroSection />
      <QuoteSection />
      <MeetNisschaySection />
      <ServicesSection />
      <IndustriesSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <HomeTechStackSection />
      <CTASection />
    </main>
  );
}

