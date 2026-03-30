import ServicesBentoGrid from "@/components/ServicesBentoGrid";
import ServiceDetailsSection from "@/components/ServiceDetailsSection";
import ServiceBreakdownSection from "@/components/ServiceBreakdownSection";
import TechStackSection from "@/components/TechStackSection";

export const metadata = {
    title: "Our Services - Nisschay",
    description: "Explore Nisschay's comprehensive tech services including web development, mobile apps, AI automation, cloud solutions, and IT consulting.",
};

export default function ServicesPage() {
    return (
        <main className="relative bg-white min-h-screen pt-28">
            <ServicesBentoGrid />
            <ServiceBreakdownSection />
            <ServiceDetailsSection />
            <TechStackSection />
        </main>
    );
}
