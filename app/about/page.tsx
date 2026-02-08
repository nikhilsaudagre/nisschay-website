import AboutSection from "@/components/AboutSection";

export const metadata = {
    title: "About Us - Nisschay",
    description: "Learn about Nisschay's mission, values, and team. We're dedicated to transforming ideas into digital excellence.",
};

export default function AboutPage() {
    return (
        <main className="relative bg-white min-h-screen pt-28">

            <AboutSection />
        </main>
    );
}
