import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";

export const metadata: Metadata = {
    title: "About Us · Why We Exist & How We Work | Nisschay",
    description: "Discover who Nisschay is, why we exist, and how we approach engineering practical digital solutions — from web development and software to AI automation and search growth.",
    alternates: {
        canonical: "/about",
    },
    openGraph: {
        title: "About Us · Nisschay",
        description: "A name rooted in determination. A belief in making ideas real. Explore how Nisschay designs and engineers digital systems for modern businesses.",
        url: "https://nisschay.com/about",
        siteName: "Nisschay",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Us · Nisschay",
        description: "A name rooted in determination. A belief in making ideas real.",
    },
};

export default function AboutPage() {
    return (
        <main className="relative bg-[#F8F9FC] min-h-screen pt-14 sm:pt-16 lg:pt-20">
            <AboutSection isStandalone={true} />
        </main>
    );
}
