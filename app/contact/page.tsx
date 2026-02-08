import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";

export const metadata = {
    title: "Contact Us - Nisschay",
    description: "Get in touch with Nisschay to discuss your next project. We're ready to transform your ideas into digital excellence.",
};

export default function ContactPage() {
    return (
        <main className="relative bg-gradient-to-br from-primary-50 via-white to-primary-100/50 min-h-screen pt-28">
            {/* Shared Background Grid */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none fixed">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                {/* Background Orbs */}
                <div className="absolute left-0 top-0 -z-10 h-[310px] w-[310px] rounded-full bg-primary-400 opacity-20 blur-[100px]"></div>
                <div className="absolute right-0 top-[60vh] -z-10 h-[400px] w-[400px] rounded-full bg-cyan-400 opacity-15 blur-[120px]"></div>
            </div>

            <CTASection />
            <ContactSection />
        </main>
    );
}
