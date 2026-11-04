import AboutSection from "@/components/AboutSection";

export const metadata = {
    title: "About Us - Nisschay",
    description: "Learn about Nisschay's mission, values, and three-chapter story. A small studio built on one idea: do the work properly.",
};

export default function AboutPage() {
    return (
        <main className="relative bg-white min-h-screen pt-24 sm:pt-28">
            <AboutSection isStandalone={true} />
        </main>
    );
}
