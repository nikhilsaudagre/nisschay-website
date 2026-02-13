import WorkSection from "@/components/WorkSection";
import ProcessSection from "@/components/ProcessSection";
import PortfolioFAQSection from "@/components/PortfolioFAQSection";

export const metadata = {
    title: "Our Portfolio - Nisschay",
    description: "View Nisschay's portfolio of successful projects and our proven development process that delivers exceptional results.",
};

export default function PortfolioPage() {
    return (
        <main className="relative bg-white min-h-screen pt-28">
            {/* Clean white background - no grid pattern */}

            <WorkSection />
            <ProcessSection />
            <PortfolioFAQSection />
        </main>
    );
}
