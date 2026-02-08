import WorkSection from "@/components/WorkSection";
import ProcessSection from "@/components/ProcessSection";

export const metadata = {
    title: "Our Portfolio - Nisschay",
    description: "View Nisschay's portfolio of successful projects and our proven development process that delivers exceptional results.",
};

export default function PortfolioPage() {
    return (
        <main className="relative bg-gradient-to-br from-primary-50 via-white to-primary-100/50 min-h-screen pt-28">
            {/* Shared Background Grid */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none fixed">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                {/* Background Orbs */}
                <div className="absolute right-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-purple-400 opacity-15 blur-[120px]"></div>
                <div className="absolute left-0 top-[100vh] -z-10 h-[400px] w-[400px] rounded-full bg-indigo-400 opacity-15 blur-[120px]"></div>
            </div>

            <WorkSection />
            <ProcessSection />
        </main>
    );
}
