import ContactSection from "@/components/ContactSection";
import ContactHeroSection from "@/components/ContactHeroSection";

export const metadata = {
    title: "Contact Us - Nisschay",
    description: "Get in touch with Nisschay to discuss your next project. We're ready to transform your ideas into digital excellence.",
};

export default function ContactPage() {
    return (
        <main className="relative bg-white min-h-screen pt-28">
            <ContactHeroSection />
            <ContactSection />
        </main>
    );
}
