"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Caveat } from "next/font/google";

// Handwritten font for the headline accent: "Software & AI"
const caveat = Caveat({
    subsets: ["latin"],
    weight: ["700"],
    display: "swap",
});

// =========================================================================
// CUSTOM CRISP VECTOR ICONS (DIRECT-PRINT INK STYLE ON PAPER)
// Lightweight SVG icons, zero external image assets
// =========================================================================

// Note 1: Web browser window with code tags < / >
function BrowserCodeIcon() {
    return (
        <svg 
            className="w-7 h-7 sm:w-8 sm:h-8 text-[#000c24]" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <rect x="2.5" y="3.5" width="19" height="17" rx="3" />
            <line x1="2.5" y1="8" x2="21.5" y2="8" />
            <circle cx="5.5" cy="5.7" r="0.75" fill="currentColor" stroke="none" />
            <circle cx="8" cy="5.7" r="0.75" fill="currentColor" stroke="none" />
            <path d="M8.5 12 L6.5 14 L8.5 16" className="text-[#0057fe]" stroke="currentColor" />
            <path d="M15.5 12 L17.5 14 L15.5 16" className="text-[#0057fe]" stroke="currentColor" />
            <line x1="13" y1="11.5" x2="11" y2="16.5" className="text-[#0057fe]" stroke="currentColor" />
        </svg>
    );
}

// Note 2: Web application laptop/dashboard with bar chart and trend line
function AnalyticsDashboardIcon() {
    return (
        <svg 
            className="w-7 h-7 sm:w-8 sm:h-8 text-[#000c24]" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <rect x="3" y="4" width="18" height="13" rx="2.5" />
            <line x1="1" y1="20" x2="23" y2="20" />
            <line x1="9" y1="20" x2="15" y2="20" strokeWidth="2.6" />
            <rect x="5.5" y="6.5" width="4.5" height="3.5" rx="0.5" className="text-[#0057fe]" stroke="currentColor" />
            <line x1="12.5" y1="14" x2="12.5" y2="11.5" className="text-[#0057fe]" stroke="currentColor" strokeWidth="2.5" />
            <line x1="15.5" y1="14" x2="15.5" y2="9.5" className="text-[#0057fe]" stroke="currentColor" strokeWidth="2.5" />
            <line x1="18.5" y1="14" x2="18.5" y2="7.5" className="text-[#0057fe]" stroke="currentColor" strokeWidth="2.5" />
        </svg>
    );
}

// Note 3: Three stacked isometric software layers
function StackedLayersIcon() {
    return (
        <svg 
            className="w-7 h-7 sm:w-8 sm:h-8 text-[#000c24]" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 12 12 17 22 12" className="text-[#0057fe]" stroke="currentColor" />
            <polyline points="2 17 12 22 22 17" />
        </svg>
    );
}

// Note 4: AI processor chip with outer pins and centered "AI"
function AIChipIcon() {
    return (
        <svg 
            className="w-7 h-7 sm:w-8 sm:h-8 text-[#000c24]" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <rect x="4.5" y="4.5" width="15" height="15" rx="3" />
            <line x1="8" y1="1" x2="8" y2="4.5" />
            <line x1="12" y1="1" x2="12" y2="4.5" />
            <line x1="16" y1="1" x2="16" y2="4.5" />
            <line x1="8" y1="19.5" x2="8" y2="23" />
            <line x1="12" y1="19.5" x2="12" y2="23" />
            <line x1="16" y1="19.5" x2="16" y2="23" />
            <line x1="1" y1="8" x2="4.5" y2="8" />
            <line x1="1" y1="12" x2="4.5" y2="12" />
            <line x1="1" y1="16" x2="4.5" y2="16" />
            <line x1="19.5" y1="8" x2="23" y2="8" />
            <line x1="19.5" y1="12" x2="23" y2="12" />
            <line x1="19.5" y1="16" x2="23" y2="16" />
            <text 
                x="12" 
                y="15.2" 
                textAnchor="middle" 
                fill="#0057fe" 
                stroke="none" 
                fontSize="7.5" 
                fontWeight="900" 
                fontFamily="system-ui, -apple-system, sans-serif"
            >
                AI
            </text>
        </svg>
    );
}

// Note 5: Cloud with upward arrow inside
function CloudUploadIcon() {
    return (
        <svg 
            className="w-7 h-7 sm:w-8 sm:h-8 text-[#000c24]" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M18 19H6.5C4 19 2 17 2 14.5C2 12.2 3.6 10.3 5.8 10.05C6.4 6.6 9.4 4 13 4C16.3 4 19.1 6.3 19.8 9.5C21.6 9.8 23 11.4 23 13.3C23 15.3 21.4 17 19.4 17" />
            <polyline points="9.5 13.5 12 11 14.5 13.5" className="text-[#0057fe]" stroke="currentColor" />
            <line x1="12" y1="11" x2="12" y2="17.5" className="text-[#0057fe]" stroke="currentColor" />
        </svg>
    );
}

// =========================================================================
// SERVICES SECTION CONTENT (EXACTLY 5 IT SERVICES)
// =========================================================================
export const SERVICES_SECTION_DATA = {
    eyebrow: "OUR SERVICES",
    heading: {
        line1Before: "Build Better Digital",
        products: "Products",
        with: "with",
        accent: "Software & AI",
    },
    description:
        "Nisschay develops modern websites, web applications and intelligent software that help businesses improve efficiency and serve customers better.",
    services: [
        {
            id: "website-development",
            number: "01",
            title: "Website & Web Development",
            description:
                "High-performance, responsive websites engineered for speed, search visibility, and customer conversion.",
            href: "/services?service=web-saas#service-breakdown",
            icon: BrowserCodeIcon,
            paperGradient: "from-[#EEF6FF] via-[#E0EFFE] to-[#CFE5FD]",
            borderColor: "border-[#B8DCFE]",
            curlUnderside: "#BCDDFC",
            tiltClass: "-rotate-[1.2deg]",
        },
        {
            id: "web-app-development",
            number: "02",
            title: "Web Application Development",
            description:
                "Modern, responsive web applications and SaaS platforms built around real user workflows and secure data architecture.",
            href: "/services?service=web-saas#service-breakdown",
            icon: AnalyticsDashboardIcon,
            paperGradient: "from-[#FFFEEA] via-[#FFF6C8] to-[#FEEA9A]",
            borderColor: "border-[#F8E285]",
            curlUnderside: "#F7DF7C",
            tiltClass: "rotate-[0.6deg]",
        },
        {
            id: "custom-software",
            number: "03",
            title: "Custom Software Development",
            description:
                "Bespoke software systems designed to solve operational bottlenecks, integrate tools, and scale with your business.",
            href: "/services?service=custom-software#service-breakdown",
            icon: StackedLayersIcon,
            paperGradient: "from-[#FFF2EB] via-[#FEDDCB] to-[#FECBBA]",
            borderColor: "border-[#F9BAA5]",
            curlUnderside: "#F7B59E",
            tiltClass: "rotate-[1.4deg]",
        },
        {
            id: "ai-development",
            number: "04",
            title: "AI Development & Automation",
            description:
                "Intelligent AI agents, conversational chatbots, and automated workflows that eliminate repetitive manual tasks.",
            href: "/services?service=ai-automation#service-breakdown",
            icon: AIChipIcon,
            paperGradient: "from-[#F7F1FE] via-[#EDE0FC] to-[#DFCEFB]",
            borderColor: "border-[#D2B6F8]",
            curlUnderside: "#CBACF6",
            tiltClass: "rotate-[0.8deg]",
        },
        {
            id: "cloud-devops",
            number: "05",
            title: "Cloud, DevOps & IT Support",
            description:
                "Reliable cloud deployment, CI/CD pipeline automation, and proactive IT support to ensure uptime, security, and scalability.",
            href: "/services?service=cloud-devops#service-breakdown",
            icon: CloudUploadIcon,
            paperGradient: "from-[#EDFAF2] via-[#DBF4E2] to-[#C4EED1]",
            borderColor: "border-[#B2E2C4]",
            curlUnderside: "#A7DDC0",
            tiltClass: "-rotate-[1deg]",
        },
    ],
} as const;

// =========================================================================
// REALISTIC KRAFT MASKING TAPE (LIGHTWEIGHT CSS + SVG)
// Semi-translucent crepe tone with torn jagged ends and soft contact shadow
// =========================================================================
function TopMaskingTape() {
    return (
        <div 
            className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-24 sm:w-28 h-6 sm:h-7 pointer-events-none z-30 -rotate-[0.5deg]"
            aria-hidden="true"
        >
            {/* Natural soft contact shadow underneath tape */}
            <div 
                className="absolute inset-x-1.5 bottom-0 h-2 bg-amber-950/15 blur-[1.5px] rounded-full" 
            />
            
            {/* Kraft Tape body with torn serrated ends and crepe texture */}
            <div 
                className="w-full h-full border-t border-white/50 border-b border-[#c2af8a]/40 shadow-[0_1px_4px_rgba(7,20,47,0.08)] opacity-95"
                style={{
                    clipPath: "polygon(0% 20%, 1.2% 4%, 98.8% 5%, 100% 22%, 98.6% 40%, 100% 60%, 98.8% 78%, 100% 96%, 97% 95%, 3% 96%, 0% 80%, 1.2% 60%, 0% 40%)",
                    background: "linear-gradient(108deg, rgba(235,220,188,0.85) 0%, rgba(246,238,220,0.92) 22%, rgba(255,255,255,0.65) 28%, rgba(232,216,182,0.88) 50%, rgba(244,234,212,0.92) 80%, rgba(228,210,175,0.86) 100%)",
                }}
            >
                {/* Micro crepe stripes */}
                <div 
                    className="w-full h-full opacity-20"
                    style={{
                        backgroundImage: "repeating-linear-gradient(90deg, rgba(160,130,80,0.3) 0px, rgba(160,130,80,0.3) 1px, transparent 1px, transparent 4px)",
                    }}
                />
            </div>
        </div>
    );
}

// =========================================================================
// REALISTIC 3D ORGANIC CORNER CURL (BOTTOM-RIGHT)
// Smooth curved paper curl with paper underside shading and natural roll shadow
// =========================================================================
function RealisticCornerCurl({ undersideColor }: { undersideColor: string }) {
    return (
        <div 
            className="absolute bottom-0 right-0 w-12 h-12 pointer-events-none z-20 overflow-hidden" 
            aria-hidden="true"
        >
            {/* Soft curved contact shadow cast by the lifted paper curl on the surface */}
            <div 
                className="absolute bottom-0 right-0 w-11 h-11 bg-slate-900/18 blur-[3px] rounded-tl-[100%]"
                style={{ transform: "translate(1.5px, 1.5px)" }}
            />
            
            {/* Shaded cavity under the fold */}
            <div 
                className="absolute bottom-0 right-0 w-0 h-0 border-b-[40px] border-b-black/16 border-l-[40px] border-l-transparent" 
            />
            
            {/* The rolled paper underside flap with subtle curved highlight */}
            <div 
                className="absolute bottom-0 right-0 w-0 h-0 border-t-[38px] border-r-[38px] border-r-transparent filter drop-shadow-[0_2px_4px_rgba(7,20,47,0.18)]"
                style={{ 
                    borderTopColor: undersideColor,
                }}
            />
            
            {/* Natural lighting rim along the curved roll edge */}
            <div 
                className="absolute bottom-0 right-0 w-0 h-0 border-t-[38px] border-t-white/50 border-r-[38px] border-r-transparent"
                style={{ transform: "scale(0.95)" }}
            />
        </div>
    );
}

// =========================================================================
// DIRECT-PRINT ICON WITH 3 PLAYFUL RAY BURST DASHES
// =========================================================================
function IconWithRays({ Icon }: { Icon: React.ElementType }) {
    return (
        <div className="relative inline-block mb-2 sm:mb-2.5">
            {/* Direct-Print Icon on Paper (NO artificial white box) */}
            <div className="group-hover:scale-105 transition-transform duration-300">
                <Icon />
            </div>

            {/* 3 Playful Doodled Rays Burst in Top-Right */}
            <svg 
                className="absolute -top-1.5 -right-3.5 w-4 h-4 text-[#000c24] pointer-events-none opacity-90" 
                viewBox="0 0 16 16" 
                fill="none"
                aria-hidden="true"
            >
                <path d="M3 3 L5.5 5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M8 1 L8 4.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M13 3 L10.5 5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
        </div>
    );
}

// =========================================================================
// MAIN SERVICES SECTION
// =========================================================================
export default function ServicesSection() {
    return (
        <section
            id="services"
            className="relative w-full overflow-x-clip bg-transparent py-16 sm:py-20 lg:py-24"
        >
            {/* Responsive Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">

                {/* ========================================================
                    TOP ROW: TWO-COLUMN INTRO
                    Left: Eyebrow, Main Headline & Supporting Paragraph
                    Right: Exact Developer Mascot Illustration (PRESERVED)
                ======================================================== */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
                    
                    {/* Left Column: Heading & Paragraph */}
                    <div className="lg:col-span-7 xl:col-span-7 space-y-4">
                        {/* Eyebrow: • — OUR SERVICES */}
                        <div className="inline-flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#0057fe]" aria-hidden="true" />
                            <span className="w-4 h-[2px] bg-[#0057fe]" aria-hidden="true" />
                            <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#000c24] uppercase">
                                {SERVICES_SECTION_DATA.eyebrow}
                            </span>
                        </div>

                        {/* Main Headline (H2 for Semantic Hierarchy) */}
                        <h2 className="text-3xl sm:text-4xl md:text-[44px] lg:text-[46px] font-black text-[#000c24] tracking-tight leading-[1.15] text-balance">
                            {SERVICES_SECTION_DATA.heading.line1Before}{" "}
                            {/* "Products" with 3 playful radiating doodle rays above it */}
                            <span className="relative inline-block">
                                {SERVICES_SECTION_DATA.heading.products}
                                <svg 
                                    className="absolute -top-3.5 -right-5 sm:-right-6 w-6 h-6 text-[#0057fe] pointer-events-none" 
                                    viewBox="0 0 24 24" 
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <path d="M4 14 L1 11" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                                    <path d="M7 6 L3 3" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                                    <path d="M14 4 L13 0" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                                </svg>
                            </span>
                            <br />
                            {SERVICES_SECTION_DATA.heading.with}{" "}
                            <span className={`${caveat.className} text-[#0057fe] font-bold text-[1.22em] tracking-normal inline-block`}>
                                {SERVICES_SECTION_DATA.heading.accent}
                            </span>
                        </h2>

                        {/* Supporting Paragraph */}
                        <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal max-w-xl pt-0.5">
                            {SERVICES_SECTION_DATA.description}
                        </p>
                    </div>

                    {/* Right Column: Exact Developer Mascot Illustration (PRESERVED UNCHANGED) */}
                    <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end relative">
                        {/* Soft ambient blue glow behind illustration */}
                        <div
                            className="absolute right-6 top-1/2 -translate-y-1/2 w-64 h-64 bg-blue-100/60 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse"
                            style={{ animationDuration: "7s" }}
                            aria-hidden="true"
                        />
                        <div className="relative w-full max-w-[250px] sm:max-w-[280px] lg:max-w-[310px] xl:max-w-[330px]">
                            <Image
                                src="/Nisschay-Developer-Transparent.webp"
                                alt="Nisschay developer working on a laptop with technology, automation and business growth elements."
                                width={1536}
                                height={1024}
                                priority
                                className="w-full h-auto object-contain select-none pointer-events-none"
                            />
                        </div>
                    </div>

                </div>

                {/* ========================================================
                    FIVE REALISTIC PASTEL STICKY NOTES
                    Row 1: 3 notes (Soft Blue, Warm Yellow, Soft Peach)
                    Row 2: 2 notes centered (Light Lavender, Pale Mint)
                ======================================================== */}
                <div className="relative space-y-7 sm:space-y-9 pt-2">
                    
                    {/* Decorative Doodle: Hand-Drawn Arrow curving from Note 1 toward Note 4 */}
                    <svg 
                        className="hidden xl:block absolute -left-10 top-[48%] w-16 h-16 text-[#07142F]/35 pointer-events-none z-0" 
                        viewBox="0 0 60 60" 
                        fill="none"
                        aria-hidden="true"
                    >
                        <path d="M14 8 C 4 26, 8 46, 36 49" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" fill="none" />
                        <path d="M28 41 L 38 49 L 28 55" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>

                    {/* Decorative Doodle: Ray Burst near Note 5 */}
                    <svg 
                        className="hidden xl:block absolute -right-8 top-[68%] w-9 h-9 text-[#07142F]/35 pointer-events-none z-0" 
                        viewBox="0 0 32 32" 
                        fill="none"
                        aria-hidden="true"
                    >
                        <path d="M9 9 L3 3" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                        <path d="M18 7 L18 1" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                        <path d="M25 9 L31 3" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                        <path d="M26 18 L32 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                    </svg>

                    {/* ROW 1: 3 Sticky Notes */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 items-stretch">
                        {SERVICES_SECTION_DATA.services.slice(0, 3).map((service) => (
                            <StickyNoteCard key={service.id} service={service} />
                        ))}
                    </div>

                    {/* ROW 2: 2 Sticky Notes Centered */}
                    <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 sm:gap-7 lg:gap-8 max-w-4xl mx-auto">
                        {SERVICES_SECTION_DATA.services.slice(3, 5).map((service) => (
                            <div key={service.id} className="w-full md:w-1/2">
                                <StickyNoteCard service={service} />
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}

// =========================================================================
// SINGLE REALISTIC STICKY NOTE CARD COMPONENT
// Super lightweight pure CSS + SVG, authentic paper shadow, hover information reveal
// =========================================================================
function StickyNoteCard({ 
    service 
}: { 
    service: (typeof SERVICES_SECTION_DATA.services)[number] 
}) {
    const Icon = service.icon;

    return (
        <div 
            className={`group relative w-full h-full transform ${service.tiltClass} hover:rotate-0 hover:-translate-y-2 hover:scale-[1.012] transition-all duration-300 ease-out origin-top`}
        >
            {/* Realistic Hanging Paper Shadow (Deeper at bottom and corners where paper lifts) */}
            <div 
                className="absolute inset-x-2 -bottom-2 h-8 bg-[#07142f]/[0.08] blur-[8px] rounded-[50%] pointer-events-none group-hover:bg-[#07142f]/[0.14] group-hover:blur-[12px] group-hover:-bottom-3 transition-all duration-300"
                aria-hidden="true"
            />

            {/* Kraft Masking Tape at Top */}
            <TopMaskingTape />

            {/* Sticky Note Sheet Link with Natural Paper Box Shadow */}
            <Link
                href={service.href}
                aria-label={`${service.title}: ${service.description}`}
                className={`relative flex flex-col justify-between w-full h-full min-h-[210px] sm:min-h-[225px] bg-gradient-to-br ${service.paperGradient} ${service.borderColor} border rounded-[2px] p-6 sm:p-7 md:p-8 cursor-pointer select-none transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0057fe] focus-visible:ring-offset-2 overflow-hidden shadow-[0_2px_6px_rgba(7,20,47,0.04),0_8px_18px_-3px_rgba(7,20,47,0.07)] group-hover:shadow-[0_4px_12px_rgba(7,20,47,0.06),0_18px_30px_-5px_rgba(7,20,47,0.12)]`}
                style={{
                    /* Clipped corner for the realistic 3D bottom-right rolled curl */
                    clipPath: "polygon(0% 0%, 100% 0%, 100% calc(100% - 38px), calc(100% - 38px) 100%, 0% 100%)",
                }}
            >
                {/* 1. Realistic Paper Texture Grain Overlay (GPU SVG turbulence, < 300 bytes) */}
                <div 
                    className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-multiply z-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='stickyGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23stickyGrain)'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "repeat",
                    }}
                    aria-hidden="true" 
                />

                {/* 2. Realistic Organic Paper Wrinkles & Soft Lighting Folds */}
                <div 
                    className="absolute inset-0 pointer-events-none z-0 opacity-60"
                    style={{
                        background: "linear-gradient(125deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 24%, rgba(0,0,0,0.02) 28%, rgba(255,255,255,0.3) 34%, rgba(255,255,255,0) 48%, rgba(0,0,0,0.025) 58%, rgba(255,255,255,0.35) 66%, rgba(255,255,255,0) 85%, rgba(0,0,0,0.02) 100%)",
                    }}
                    aria-hidden="true" 
                />

                {/* 3. 3D Bottom-Right Corner Dog-Ear Roll */}
                <RealisticCornerCurl undersideColor={service.curlUnderside} />

                {/* 4. Top Area: Direct-Print Icon, Service Title & Directly Visible Description */}
                <div className="relative z-10 pt-1 flex-1 flex flex-col">
                    {/* Direct-Print Icon with 3 Playful Rays */}
                    <IconWithRays Icon={Icon} />

                    {/* Service Title */}
                    <h3 className="text-[17px] sm:text-[18px] md:text-[19px] font-bold text-[#000c24] tracking-tight leading-snug group-hover:text-[#0057fe] transition-colors mb-2">
                        {service.title}
                    </h3>

                    {/* Supporting Description: Directly Visible on Note */}
                    <p className="text-[#000c24]/80 text-xs sm:text-[13px] leading-relaxed font-normal">
                        {service.description}
                    </p>
                </div>
            </Link>
        </div>
    );
}
