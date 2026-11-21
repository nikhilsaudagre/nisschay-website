import ITServicesSection from "@/components/ITServicesSection";
import WhatWeCanBuildSection from "@/components/WhatWeCanBuildSection";
import ServiceDetailsSection from "@/components/ServiceDetailsSection";
import TechStackSection from "@/components/TechStackSection";
import ServicesFAQSection from "@/components/ServicesFAQSection";

export const metadata = {
    title: "IT Services - Technology Solutions That Move Your Business Forward | Nisschay",
    description: "We build reliable websites, custom software, AI-powered workflows and cloud solutions that help businesses work smarter. Explore Nisschay's end-to-end technology services.",
};

export default function ServicesPage() {
    return (
        <main className="relative bg-[var(--site-bg)] min-h-screen pt-24 sm:pt-28 lg:pt-32">
            <ITServicesSection />
            <WhatWeCanBuildSection />
            <ServiceDetailsSection />
            <TechStackSection />
            <ServicesFAQSection />
        </main>
    );
}
