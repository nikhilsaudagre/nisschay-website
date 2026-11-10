"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Caveat } from "next/font/google";
import { 
    FiArrowRight, 
    FiGlobe, 
    FiGrid, 
    FiLayers, 
    FiCpu, 
    FiTrendingUp, 
    FiServer 
} from "react-icons/fi";

// Handwritten font strictly for the 3 key headline action words: Build, Automate, Grow
const caveat = Caveat({
    subsets: ["latin"],
    weight: ["700"],
    display: "swap",
});

// =========================================================================
// SERVICES SECTION CONTENT
// Preserves all six services, deliverables, icons and compact CTA
// =========================================================================
export const SERVICES_SECTION_DATA = {
    eyebrow: "OUR SERVICES",
    heading: {
        prefix: "Digital solutions to",
        build: "Build",
        automate: "Automate",
        grow: "Grow",
        suffix: "your business.",
    },
    description:
        "From websites and custom software to AI automation and digital marketing, we help businesses build and grow with practical technology.",
    services: [
        {
            id: "web-dev",
            title: "Website & Web Development",
            outcome:
                "High-performance, responsive websites engineered for speed, search visibility, and customer conversion.",
            deliverables: "Business Websites · E-Commerce Stores · Landing Pages",
            href: "/services",
            icon: FiGlobe,
            paperBg: "bg-gradient-to-b from-[#f2f8ff] via-[#e3effe] to-[#d4e7fc]", // Authentic Post-it Sky Blue
            tiltClass: "-rotate-[1.4deg] lg:translate-y-1 sm:-rotate-[1.4deg] rotate-0",
            curlType: "curl-right" as const,
            attachment: "tape-top-center" as const,
            clipPath: "polygon(0.3% 0.2%, 99.8% 0%, 100% 99.7%, 0% 100%)",
        },
        {
            id: "web-app",
            title: "Web Application Development",
            outcome:
                "Modern, responsive web applications and SaaS platforms built around real user workflows and secure data architecture.",
            deliverables: "Custom Web Apps · SaaS Platforms · Client Portals",
            href: "/services",
            icon: FiGrid,
            paperBg: "bg-gradient-to-b from-[#fffde6] via-[#fef9c3] to-[#fef08a]", // Iconic 3M Canary Yellow
            tiltClass: "rotate-[1.6deg] lg:-translate-y-1 sm:rotate-[1.6deg] rotate-0",
            curlType: "curl-left" as const,
            attachment: "self-adhesive" as const, // self-adhesive without visible tape
            clipPath: "polygon(0% 0%, 99.7% 0.3%, 100% 100%, 0.3% 99.7%)",
        },
        {
            id: "custom-software",
            title: "Custom Software Development",
            outcome:
                "Bespoke software systems designed to solve operational bottlenecks, integrate tools, and scale with your business.",
            deliverables: "Internal Tools · CRM & ERP · Workflow Systems",
            href: "/services",
            icon: FiLayers,
            paperBg: "bg-gradient-to-b from-[#fffbf4] via-[#fdf5e8] to-[#f8edd6]", // Warm Kraft Manila Cream
            tiltClass: "-rotate-[1.1deg] lg:translate-y-1.5 sm:-rotate-[1.1deg] rotate-0",
            curlType: "curl-right" as const,
            attachment: "tape-top-right-angled" as const, // angled corner tape
            clipPath: "polygon(0.2% 0%, 100% 0.3%, 99.7% 99.8%, 0% 99.9%)",
        },
        {
            id: "ai-automation",
            title: "AI Development & Automation",
            outcome:
                "Intelligent AI agents, conversational chatbots, and automated workflows that eliminate repetitive manual tasks.",
            deliverables: "WhatsApp AI Bots · Workflow Automation · AI APIs",
            href: "/services",
            icon: FiCpu,
            paperBg: "bg-gradient-to-b from-[#f6f7ff] via-[#edf1fe] to-[#dfe6fc]", // Pastel Periwinkle Post-it
            tiltClass: "rotate-[1.7deg] lg:-translate-y-0.5 sm:rotate-[1.7deg] rotate-0",
            curlType: "curl-both" as const,
            attachment: "tape-top-left-angled" as const, // angled corner tape
            clipPath: "polygon(0% 0.3%, 99.8% 0%, 100% 100%, 0.2% 99.6%)",
        },
        {
            id: "digital-marketing",
            title: "Digital Marketing & SEO",
            outcome:
                "Data-driven marketing and search optimization strategies that attract qualified prospects and grow your inbound pipeline.",
            deliverables: "Technical SEO · Social Campaigns · Search & Meta Ads",
            href: "/services",
            icon: FiTrendingUp,
            paperBg: "bg-gradient-to-b from-[#fffbeb] via-[#fef3c7] to-[#fde68a]", // Sunlight Warm Yellow Post-it
            tiltClass: "-rotate-[1.5deg] lg:translate-y-1 sm:-rotate-[1.5deg] rotate-0",
            curlType: "curl-right" as const,
            attachment: "self-adhesive-curl" as const, // self-adhesive with delicate curled corner
            clipPath: "polygon(0.2% 0%, 100% 0.2%, 99.8% 99.7%, 0% 100%)",
        },
        {
            id: "cloud-devops",
            title: "Cloud, DevOps & IT Support",
            outcome:
                "Reliable cloud deployment, CI/CD pipeline automation, and proactive IT support to ensure uptime, security, and scalability.",
            deliverables: "Cloud Architecture · CI/CD Pipelines · Ongoing IT Support",
            href: "/services",
            icon: FiServer,
            paperBg: "bg-gradient-to-b from-[#f3fbf7] via-[#e4f7ee] to-[#d3f1e2]", // Pastel Mint Sage Post-it
            tiltClass: "rotate-[1.3deg] lg:-translate-y-1 sm:rotate-[1.3deg] rotate-0",
            curlType: "curl-left" as const,
            attachment: "tape-top-offset" as const, // slightly offset tape
            clipPath: "polygon(0% 0.2%, 99.8% 0%, 100% 99.8%, 0.3% 100%)",
        },
    ],
    cta: {
        heading: "Have something in mind? Let's build it.",
        supporting: "Tell us what you're working on and we'll help you find the right solution.",
        buttonText: "Start a Project",
        buttonHref: "/contact",
    },
} as const;

// =========================================================================
// REALISTIC MASKING & SCOTCH TAPE COMPONENT
// Realistic semi-transparency, serrated torn edges, wrinkle lines, and contact shadow
// =========================================================================
function MaskingTape({ 
    variant 
}: { 
    variant: "top-center" | "top-right-angled" | "top-left-angled" | "top-offset" 
}) {
    if (variant === "top-center") {
        return (
            <div
                className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-20 h-6 pointer-events-none z-20 -rotate-1"
                aria-hidden="true"
            >
                {/* Tape body with semi-transparency and subtle wrinkle lines */}
                <div 
                    className="w-full h-full bg-[#fbf6ed]/85 backdrop-blur-[0.5px] border-t border-b border-white/90 shadow-[0_2px_5px_rgba(0,12,36,0.12),0_0_1px_rgba(0,12,36,0.08)]"
                    style={{
                        clipPath: "polygon(0% 5%, 2% 0%, 98% 3%, 100% 8%, 99% 93%, 97% 99%, 3% 97%, 0% 91%)",
                        backgroundImage: "linear-gradient(105deg, transparent 25%, rgba(255,255,255,0.45) 27%, rgba(0,0,0,0.035) 29%, transparent 31%, transparent 68%, rgba(255,255,255,0.4) 70%, transparent 72%)",
                    }}
                />
            </div>
        );
    }

    if (variant === "top-right-angled") {
        return (
            <div
                className="absolute -top-3 -right-3.5 w-18 h-5.5 pointer-events-none z-20 rotate-[38deg]"
                aria-hidden="true"
            >
                <div 
                    className="w-full h-full bg-[#fbf6ed]/85 backdrop-blur-[0.5px] border-t border-b border-white/90 shadow-[0_2px_5px_rgba(0,12,36,0.12),0_0_1px_rgba(0,12,36,0.08)]"
                    style={{
                        clipPath: "polygon(0% 5%, 3% 0%, 97% 2%, 100% 7%, 99% 94%, 96% 100%, 4% 97%, 0% 91%)",
                        backgroundImage: "linear-gradient(110deg, transparent 35%, rgba(255,255,255,0.45) 37%, rgba(0,0,0,0.03) 39%, transparent 41%)",
                    }}
                />
            </div>
        );
    }

    if (variant === "top-left-angled") {
        return (
            <div
                className="absolute -top-3 -left-3.5 w-18 h-5.5 pointer-events-none z-20 -rotate-[36deg]"
                aria-hidden="true"
            >
                <div 
                    className="w-full h-full bg-[#fbf6ed]/85 backdrop-blur-[0.5px] border-t border-b border-white/90 shadow-[0_2px_5px_rgba(0,12,36,0.12),0_0_1px_rgba(0,12,36,0.08)]"
                    style={{
                        clipPath: "polygon(0% 6%, 3% 0%, 97% 3%, 100% 6%, 98% 95%, 96% 99%, 4% 96%, 0% 93%)",
                        backgroundImage: "linear-gradient(100deg, transparent 40%, rgba(255,255,255,0.5) 42%, rgba(0,0,0,0.035) 44%, transparent 46%)",
                    }}
                />
            </div>
        );
    }

    if (variant === "top-offset") {
        return (
            <div
                className="absolute -top-3.5 left-[40%] -translate-x-1/2 w-18 h-6 pointer-events-none z-20 rotate-[2deg]"
                aria-hidden="true"
            >
                <div 
                    className="w-full h-full bg-[#fbf6ed]/85 backdrop-blur-[0.5px] border-t border-b border-white/90 shadow-[0_2px_5px_rgba(0,12,36,0.12),0_0_1px_rgba(0,12,36,0.08)]"
                    style={{
                        clipPath: "polygon(0% 5%, 2% 0%, 98% 4%, 100% 7%, 99% 93%, 97% 99%, 3% 96%, 0% 91%)",
                        backgroundImage: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.45) 32%, transparent 34%, transparent 65%, rgba(255,255,255,0.35) 67%, transparent 69%)",
                    }}
                />
            </div>
        );
    }

    return null;
}

// =========================================================================
// REALISTIC PHYSICAL SHADOW & UNDERLAY CURL
// Creates true contact pressure at top and physical corner lift at bottom
// =========================================================================
function PhysicalPaperShadow({ type }: { type: "curl-right" | "curl-left" | "curl-both" }) {
    return (
        <div className="absolute inset-0 pointer-events-none -z-10" aria-hidden="true">
            {/* Top flat contact shadow where glue/tape firmly presses paper to board */}
            <div className="absolute top-0 inset-x-2 h-3 bg-black/[0.04] blur-[1px]" />

            {/* Bottom-right lifted paper corner shadow */}
            {(type === "curl-right" || type === "curl-both") && (
                <div 
                    className="absolute -bottom-1.5 right-2 w-3/4 h-5 bg-slate-900/18 blur-[6px] rounded-[50%] transform rotate-[3.5deg] origin-bottom-right transition-all duration-300 group-hover:blur-[8px] group-hover:bg-slate-900/25 group-hover:h-6" 
                />
            )}

            {/* Bottom-left lifted paper corner shadow */}
            {(type === "curl-left" || type === "curl-both") && (
                <div 
                    className="absolute -bottom-1.5 left-2 w-3/4 h-5 bg-slate-900/18 blur-[6px] rounded-[50%] transform -rotate-[3.5deg] origin-bottom-left transition-all duration-300 group-hover:blur-[8px] group-hover:bg-slate-900/25 group-hover:h-6" 
                />
            )}

            {/* Soft physical drop shadow beneath sheet */}
            <div className="absolute inset-x-3 bottom-0 h-12 shadow-[0_10px_20px_-6px_rgba(0,12,36,0.09)] transition-shadow duration-300 group-hover:shadow-[0_18px_32px_-6px_rgba(0,12,36,0.16)]" />
        </div>
    );
}

// Subtle top adhesive glue band (for self-adhesive notes)
function GlueBand() {
    return (
        <div
            className="absolute top-0 inset-x-0 h-7 bg-black/[0.025] border-b border-black/[0.04] pointer-events-none"
            aria-hidden="true"
        />
    );
}

// Authentic 3D dog-ear paper curl fold with realistic underside shadow
function CornerCurlFold({ type = "right" }: { type?: "right" | "left" }) {
    if (type === "right") {
        return (
            <div 
                className="absolute bottom-0 right-0 w-6 h-6 pointer-events-none z-20 overflow-hidden"
                aria-hidden="true"
            >
                {/* Triangular shadow cast by the curl onto the paper */}
                <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[20px] border-b-black/15 border-l-[20px] border-l-transparent" />
                {/* The turned-up corner flap with paper tint */}
                <div className="absolute bottom-0 right-0 w-0 h-0 border-t-[19px] border-t-white/95 border-r-[19px] border-r-transparent filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)]" />
            </div>
        );
    }
    return (
        <div 
            className="absolute bottom-0 left-0 w-6 h-6 pointer-events-none z-20 overflow-hidden"
            aria-hidden="true"
        >
            <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[20px] border-b-black/15 border-r-[20px] border-r-transparent" />
            <div className="absolute bottom-0 left-0 w-0 h-0 border-t-[19px] border-t-white/90 border-l-[19px] border-l-transparent filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)]" />
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
            className="relative w-full overflow-x-clip bg-white py-18 sm:py-22 lg:py-26"
        >
            {/* Responsive Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-14">

                {/* ========================================================
                    TOP ROW: TWO-COLUMN INTRO (Text Left + Developer Illustration Right)
                ======================================================== */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
                    
                    {/* Left Column: Eyebrow with Radar Ping, Headline, Supporting Description */}
                    <div className="lg:col-span-7 xl:col-span-8 space-y-3.5">
                        {/* Eyebrow Label: OUR SERVICES with Live Pulse Indicator */}
                        <div className="inline-flex items-center gap-2.5">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0057fe] opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0057fe]" />
                            </span>
                            <span className="w-5 h-[2px] bg-[#0057fe]/60" aria-hidden="true" />
                            <span className="text-xs font-mono font-bold tracking-[0.22em] text-[#000c24] uppercase">
                                {SERVICES_SECTION_DATA.eyebrow}
                            </span>
                        </div>

                        {/* Main Headline: Bold Nisschay font with Caveat highlights for Build, Automate, Grow */}
                        <h2 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[44px] font-black text-[#000c24] tracking-tight leading-[1.18]">
                            {SERVICES_SECTION_DATA.heading.prefix}{" "}
                            <span className={`${caveat.className} text-[#0057fe] font-bold text-[1.2em] tracking-normal inline-block`}>
                                {SERVICES_SECTION_DATA.heading.build}
                            </span>
                            ,{" "}
                            <span className={`${caveat.className} text-[#0057fe] font-bold text-[1.2em] tracking-normal inline-block`}>
                                {SERVICES_SECTION_DATA.heading.automate}
                            </span>{" "}
                            and{" "}
                            <span className={`${caveat.className} text-[#0057fe] font-bold text-[1.2em] tracking-normal inline-block`}>
                                {SERVICES_SECTION_DATA.heading.grow}
                            </span>{" "}
                            {SERVICES_SECTION_DATA.heading.suffix}
                        </h2>

                        {/* Supporting Description */}
                        <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal max-w-2xl">
                            {SERVICES_SECTION_DATA.description}
                        </p>
                    </div>

                    {/* Right Column: Developer Illustration with subtle ambient backlight */}
                    <div className="lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-end relative">
                        {/* Soft ambient blue backlight glow behind illustration */}
                        <div
                            className="absolute right-6 top-1/2 -translate-y-1/2 w-64 h-64 bg-blue-100/60 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse"
                            style={{ animationDuration: "7s" }}
                            aria-hidden="true"
                        />
                        <div className="relative w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[380px] xl:max-w-[400px]">
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
                    SIX AUTHENTIC PHYSICAL STICKY NOTES
                    (Fine grain inside notes, imperfect paper edges, organic tape & curls)
                ======================================================== */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
                    {SERVICES_SECTION_DATA.services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={service.id}
                                className={`group relative h-full transform ${service.tiltClass} transition-all duration-300 ease-out hover:rotate-0 hover:-translate-y-2.5 focus-within:rotate-0 focus-within:-translate-y-2.5 origin-top`}
                            >
                                {/* Physical 3D bottom curl shadow underneath paper */}
                                <PhysicalPaperShadow type={service.curlType} />

                                {/* Selective Masking Tape Attachments */}
                                {service.attachment === "tape-top-center" && (
                                    <MaskingTape variant="top-center" />
                                )}
                                {service.attachment === "tape-top-right-angled" && (
                                    <MaskingTape variant="top-right-angled" />
                                )}
                                {service.attachment === "tape-top-left-angled" && (
                                    <MaskingTape variant="top-left-angled" />
                                )}
                                {service.attachment === "tape-top-offset" && (
                                    <MaskingTape variant="top-offset" />
                                )}

                                {/* Sticky Note Paper Sheet */}
                                <Link
                                    href={service.href}
                                    aria-label={`${service.title}. ${service.outcome}`}
                                    className={`group relative flex flex-col justify-between h-full min-h-[305px] sm:min-h-[325px] ${service.paperBg} rounded-[2px] p-6 sm:p-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0057fe] focus-visible:ring-offset-2 transition-all duration-300 cursor-pointer overflow-hidden select-none shadow-[0_1px_3px_rgba(0,12,36,0.06),0_6px_16px_rgba(0,12,36,0.05)] group-hover:shadow-[0_20px_35px_-8px_rgba(0,12,36,0.16)]`}
                                    style={{
                                        clipPath: service.clipPath,
                                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.85), inset 0 -2px 4px rgba(0,0,0,0.03)",
                                    }}
                                >
                                    {/* Internal Fine Paper Grain & Fibers (Adds physical matte paper realism) */}
                                    <div 
                                        className="absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-multiply z-0"
                                        style={{
                                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noteNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noteNoise)'/%3E%3Cpath d='M10 20 Q25 22 40 21' stroke='%23000' stroke-width='0.5' opacity='0.25'/%3E%3Cpath d='M85 95 Q100 99 115 96' stroke='%23000' stroke-width='0.5' opacity='0.2'/%3E%3C/svg%3E")`,
                                            backgroundRepeat: "repeat",
                                        }}
                                        aria-hidden="true" 
                                    />

                                    {/* Self-Adhesive top glue band (when without visible tape) */}
                                    {(service.attachment === "self-adhesive" || service.attachment === "self-adhesive-curl") && (
                                        <GlueBand />
                                    )}

                                    {/* Real 3D corner curl dog-ear peel */}
                                    <CornerCurlFold type={service.curlType === "curl-left" ? "left" : "right"} />
                                    {service.curlType === "curl-both" && (
                                        <CornerCurlFold type="left" />
                                    )}

                                    {/* Paper Content Top */}
                                    <div className="relative z-10">
                                        {/* Minimal Category Icon directly on paper */}
                                        <div className="flex items-center justify-between mb-4">
                                            <Icon className="w-5 h-5 text-[#0057fe] group-hover:scale-115 transition-transform duration-300" />
                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-400/50 group-hover:bg-[#0057fe] transition-colors" />
                                        </div>

                                        {/* Service Title */}
                                        <h3 className="text-lg sm:text-[19px] font-bold text-[#000c24] tracking-tight leading-snug group-hover:text-[#0057fe] transition-colors mb-2.5">
                                            {service.title}
                                        </h3>

                                        {/* Outcome-Focused Note Description */}
                                        <p className="text-slate-700 text-sm leading-relaxed font-normal mb-5">
                                            {service.outcome}
                                        </p>
                                    </div>

                                    {/* Paper Footer: Studio Notes & Directional Link (no heavy dividers) */}
                                    <div className="relative z-10 space-y-3 pt-2">
                                        {/* Deliverables as studio annotations */}
                                        <p className="text-[11.5px] text-slate-500 font-medium tracking-wide">
                                            {service.deliverables}
                                        </p>

                                        {/* Clean Learn More link */}
                                        <div className="flex items-center justify-between pt-1">
                                            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0057fe] tracking-wider uppercase group-hover:text-[#0047d6] transition-colors">
                                                <span>Learn More</span>
                                                <FiArrowRight
                                                    size={12}
                                                    className="transform group-hover:translate-x-1.5 transition-transform duration-300"
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </div>
                                    </div>

                                    {/* Subtle paper bottom curl shadow gradient on surface */}
                                    <div 
                                        className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-black/[0.04] to-transparent pointer-events-none z-10" 
                                        aria-hidden="true" 
                                    />
                                </Link>
                            </div>
                        );
                    })}
                </div>

                {/* ========================================================
                    COMPACT STUDIO MEMO CTA (Pinned Centered Note, Not a Wide Banner)
                ======================================================== */}
                <div className="pt-2">
                    <div className="relative max-w-xl mx-auto rounded-[2px] bg-gradient-to-b from-[#fffefc] to-[#fbf8f0] border border-[#e5dfd3] shadow-[0_6px_20px_rgba(0,12,36,0.07),0_1px_3px_rgba(0,12,36,0.04)] px-6 py-4.5 sm:px-7 sm:py-5 -rotate-[0.35deg] hover:rotate-0 transition-transform duration-300">
                        
                        {/* Washi Tape Pinning Memo to Board */}
                        <div 
                            className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-5 bg-[#fbf6ed]/85 backdrop-blur-[0.5px] border-t border-b border-white/90 shadow-[0_1px_3px_rgba(0,12,36,0.08)] -rotate-1 pointer-events-none" 
                            style={{
                                clipPath: "polygon(0% 6%, 2% 0%, 98% 3%, 100% 7%, 99% 93%, 97% 99%, 3% 97%, 0% 92%)",
                            }}
                            aria-hidden="true" 
                        />

                        {/* Balanced Horizontal Memo Content */}
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-3.5 sm:gap-6 text-center sm:text-left">
                            <div className="space-y-0.5">
                                <h3 className="text-sm sm:text-[15px] font-bold text-[#000c24] tracking-tight">
                                    {SERVICES_SECTION_DATA.cta.heading}
                                </h3>
                                <p className="text-xs text-slate-500 font-normal">
                                    {SERVICES_SECTION_DATA.cta.supporting}
                                </p>
                            </div>

                            {/* Single Prominent Button with Luxury Glow Aura & Shimmer */}
                            <div className="relative group/cta shrink-0 w-full sm:w-auto">
                                <div
                                    className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#0057fe] to-[#38bdf8] opacity-35 blur-sm group-hover/cta:opacity-70 transition duration-300 -z-0"
                                    aria-hidden="true"
                                />
                                <Link
                                    href={SERVICES_SECTION_DATA.cta.buttonHref}
                                    className="relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#0057fe] hover:bg-[#0047d6] text-white text-xs sm:text-sm font-bold font-outfit rounded-full transition-all duration-300 shadow-[0_4px_14px_rgba(0,87,254,0.35)] hover:shadow-[0_6px_25px_rgba(0,87,254,0.5)] overflow-hidden active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0057fe] select-none z-10"
                                >
                                    <span
                                        className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
                                        aria-hidden="true"
                                    />
                                    <span
                                        className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none animate-shimmer-sweep"
                                        aria-hidden="true"
                                    />
                                    <span className="relative z-10">{SERVICES_SECTION_DATA.cta.buttonText}</span>
                                    <FiArrowRight size={13} className="relative z-10 transition-transform duration-300 group-hover/cta:translate-x-1" />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
