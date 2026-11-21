"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

interface ServiceItem {
    id: string;
    slug?: string;
    title: string;
    desc: string;
    seoPhrase: string;
    href: string;
    exploreLabel: string;
}

const servicesData: ServiceItem[] = [
    {
        id: "01",
        slug: "web-saas",
        title: "Website & Web Application Development",
        desc: "We build professional websites and web applications that help your business reach customers, share information and manage online services.",
        seoPhrase: "Website Development Services",
        href: "/services?service=web-saas#what-we-can-build",
        exploreLabel: "Build Your Digital Presence",
    },
    {
        id: "02",
        slug: "custom-software",
        title: "Custom Software Development",
        desc: "We develop software based on your business needs, from management systems and customer portals to tools that simplify daily work.",
        seoPhrase: "Custom Software Development",
        href: "/services?service=custom-software#what-we-can-build",
        exploreLabel: "Explore Software Solutions",
    },
    {
        id: "03",
        slug: "ai-automation",
        title: "AI & Business Automation",
        desc: "We use AI and automation to reduce repetitive work, connect business tools and make everyday tasks easier.",
        seoPhrase: "AI Automation Services",
        href: "/services?service=ai-automation#what-we-can-build",
        exploreLabel: "Explore AI Workflows",
    },
    {
        id: "04",
        slug: "cloud-devops",
        title: "Cloud & DevOps Solutions",
        desc: "We help deploy, host and manage applications with reliable cloud infrastructure and smooth development workflows.",
        seoPhrase: "Cloud and DevOps Services",
        href: "/services?service=cloud-devops#what-we-can-build",
        exploreLabel: "Explore Cloud Architecture",
    },
    {
        id: "05",
        slug: "managed-it",
        title: "Managed IT Services",
        desc: "We provide ongoing technical support, maintenance and improvements to help keep your business systems running.",
        seoPhrase: "Managed IT Services",
        href: "/contact",
        exploreLabel: "Contact Support Team",
    },
];

export default function ITServicesSection() {
    const handleServiceSelect = (slug?: string) => {
        if (typeof window !== "undefined" && slug) {
            const event = new CustomEvent("nisschay-select-service", { detail: slug });
            window.dispatchEvent(event);
        }
    };

    return (
        <section 
            id="it-services" 
            className="relative w-full overflow-x-clip bg-transparent text-[#07142F] pt-4 sm:pt-6 lg:pt-8 pb-16 sm:pb-24 lg:pb-28"
        >
            <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
                
                {/* ========================================================
                    HERO SECTION: 2-COLUMN COPY & LAPTOP ILLUSTRATION
                    (Preserved untouched from existing design)
                ======================================================== */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center mb-16 sm:mb-20 lg:mb-24">
                    
                    {/* Left Column: Copy & Actions (7 cols on lg) */}
                    <div className="lg:col-span-7 flex flex-col items-start text-left justify-center">
                        
                        {/* Eyebrow Capsule */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF2FE] border border-blue-200/80 text-slate-800 text-xs font-semibold select-none mb-5 sm:mb-6 shadow-[0_1px_2px_rgba(7,20,47,0.04)]">
                            <span className="text-[#075BFA] font-bold text-xs tracking-tight">{'</>'}</span>
                            <span className="font-mono uppercase tracking-[0.14em] text-[11px] text-[#07142F]">IT Services</span>
                        </div>

                        {/* H1 Headline */}
                        <h1 className="text-3xl sm:text-5xl lg:text-[50px] xl:text-[56px] font-black font-display text-[#07142F] tracking-tight leading-[1.14] sm:leading-[1.12] mb-5 sm:mb-6">
                            Technology Solutions That Move Your{" "}
                            <span className="relative inline-block whitespace-nowrap">
                                <span className="bg-gradient-to-r from-[#075BFA] via-[#206aff] to-[#0047d6] bg-clip-text text-transparent">
                                    Business Forward
                                </span>
                                <svg
                                    className="absolute -bottom-1 sm:-bottom-1.5 left-0 w-full h-[6px] sm:h-[8px] text-[#075BFA]/35 pointer-events-none"
                                    viewBox="0 0 160 8"
                                    fill="none"
                                    preserveAspectRatio="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M2 5.5C40 2.2 120 2.2 158 6"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed max-w-xl mb-7 sm:mb-9">
                            We build reliable websites, custom software, AI-powered workflows and cloud solutions that help businesses work smarter.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#075BFA] hover:bg-blue-600 text-white font-semibold text-sm sm:text-base shadow-[0_4px_14px_rgba(7,91,250,0.3)] hover:shadow-[0_6px_20px_rgba(7,91,250,0.4)] transition-all duration-200 group"
                            >
                                <span>Start a Project</span>
                                <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                            <Link
                                href="#our-it-services"
                                className="inline-flex items-center justify-center gap-2 px-3 py-3.5 text-[#075BFA] hover:text-blue-700 font-semibold text-sm sm:text-base transition-colors group"
                            >
                                <span>Explore All Services</span>
                                <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Realistic Paper Sketch Illustration */}
                    <div className="lg:col-span-5 relative w-full flex items-center justify-center lg:justify-end">
                        <div 
                            className="absolute right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-4 top-1/2 -translate-y-1/2 w-[280px] sm:w-[380px] lg:w-[440px] h-[280px] sm:h-[380px] bg-gradient-to-br from-blue-100/40 via-sky-50/20 to-transparent rounded-full filter blur-[50px] pointer-events-none -z-10" 
                            aria-hidden="true" 
                        />
                        
                        <div className="relative w-full max-w-[300px] sm:max-w-[420px] lg:max-w-[540px] mx-auto lg:mr-0 flex items-center justify-center transition-transform duration-500 hover:rotate-[-0.5deg] hover:scale-[1.01]">
                            <Image
                                src="/nisschay-realistic-sketch.webp"
                                alt="Nisschay hand-drawn concept sketch of laptop with brand logo on paper with masking tape"
                                width={997}
                                height={776}
                                priority
                                className="w-full h-auto object-contain select-none"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 540px"
                            />
                        </div>
                    </div>
                </div>

                {/* ========================================================
                    REDESIGNED CORE SERVICES SECTION
                    (Fidelity to Reference Mockup: Warm White Cards #FAF8F4,
                     Floating Line-Art Illustrations, Active Blue Laptop Hover)
                ======================================================== */}
                <div id="our-it-services" className="w-full pt-6 sm:pt-10 scroll-mt-28">
                    
                    {/* Section Header & Introduction */}
                    <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
                        
                        {/* Section Label: — OUR CORE SERVICES • */}
                        <div className="inline-flex items-center justify-center gap-2 mb-3.5 select-none">
                            <span className="w-4 h-[2px] bg-[#075BFA] rounded-full" aria-hidden="true" />
                            <span className="text-xs sm:text-[12.5px] font-mono font-bold tracking-[0.2em] text-[#07142F] uppercase">
                                OUR CORE SERVICES
                            </span>
                            <span className="w-2 h-2 rounded-full bg-[#075BFA]" aria-hidden="true" />
                        </div>

                        {/* H2 Heading with hand-drawn blue underline under 'Your Business' */}
                        <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-black font-display text-[#07142F] tracking-tight leading-[1.18] mb-3.5">
                            Technology Services Built Around{" "}
                            <span className="relative inline-block whitespace-nowrap">
                                <span>Your Business</span>
                                <svg
                                    className="absolute -bottom-1.5 sm:-bottom-2 left-0 w-full h-[7px] sm:h-[9px] text-[#075BFA] pointer-events-none"
                                    viewBox="0 0 200 10"
                                    fill="none"
                                    preserveAspectRatio="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M3 6.5C55 2.5 145 2.5 197 7"
                                        stroke="currentColor"
                                        strokeWidth="3.2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </span>
                        </h2>

                        {/* Concise, readable supporting paragraph */}
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans max-w-xl mx-auto">
                            From websites and custom software to AI automation and cloud solutions, we help businesses choose and build the right technology for their needs.
                        </p>
                    </div>

                    {/* Responsive Grid Layout matching Reference Mockup:
                        - Warm White (#FAF8F4) cards with tactile borders (#EBE4D8) & soft elevation shadows
                        - Floating line-art illustrations directly on card canvas (no grey inset boxes)
                        - Card 01 tall on desktop left (col-span-5) with active blue laptop hover animation
                        - Cards 02-05 in 2x2 grid on desktop right (col-span-7) with side-by-side text & illustration
                    */}
                    <div className="max-w-[1140px] mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
                            
                            {/* ====================================================
                                CARD 01: Website & Web Application Development
                                (Big rectangular rounded card in Warm White #FAF8F4,
                                 floating laptop illustration with Electric Blue hover)
                            ==================================================== */}
                            <div className="lg:col-span-5 flex flex-col h-full">
                                <Link
                                    href={servicesData[0].href}
                                    onClick={() => handleServiceSelect(servicesData[0].slug)}
                                    aria-label={`${servicesData[0].title} - ${servicesData[0].seoPhrase}`}
                                    className="group relative bg-[#FAF8F4] rounded-[28px] sm:rounded-[32px] border border-[#EAE4D8] p-6 sm:p-7 lg:p-8 flex flex-col justify-between h-full shadow-[0_4px_16px_rgba(7,20,47,0.05),0_1px_2px_rgba(7,20,47,0.03)] hover:shadow-[0_16px_36px_-6px_rgba(7,20,47,0.1),0_4px_14px_rgba(7,91,250,0.12)] hover:border-[#075BFA]/50 transition-all duration-300 transform hover:-translate-y-1.5 select-none overflow-hidden cursor-pointer"
                                >
                                    {/* Top Content: Badge, H3, Underline, Description */}
                                    <div className="relative z-10">
                                        {/* Number Badge */}
                                        <div className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full bg-[#EBF2FE] text-[#075BFA] font-bold text-[11px] tracking-wider font-mono w-fit mb-3">
                                            {servicesData[0].id}
                                        </div>

                                        {/* H3 Heading */}
                                        <h3 className="text-xl sm:text-[23px] font-extrabold font-display text-[#07142F] group-hover:text-[#075BFA] leading-snug tracking-tight transition-colors duration-200">
                                            Website &amp; Web<br className="hidden sm:inline" /> Application Development
                                        </h3>

                                        {/* Blue underline accent under title */}
                                        <svg className="w-16 h-2 text-[#075BFA] mt-1.5 mb-3" viewBox="0 0 60 8" fill="none" aria-hidden="true">
                                            <path d="M2 5C18 2 42 2 58 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                        </svg>

                                        {/* Description */}
                                        <p className="text-slate-600 text-xs sm:text-[13.5px] leading-relaxed font-sans">
                                            {servicesData[0].desc}
                                        </p>
                                    </div>

                                    {/* Middle Graphic: Floating Line-Art Laptop matching Reference Mockup
                                        Hover turns screen to rich electric blue with streaming active white code */}
                                    <div className="relative z-10 my-6 sm:my-8 flex items-center justify-center overflow-visible">
                                        <svg
                                            viewBox="0 0 320 200"
                                            className="w-full max-w-[245px] sm:max-w-[275px] h-auto select-none transition-transform duration-300 group-hover:scale-[1.03]"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                        >
                                            {/* Soft subtle blue radial aura beneath laptop */}
                                            <ellipse 
                                                cx="160" 
                                                cy="180" 
                                                rx="105" 
                                                ry="12" 
                                                fill="#075BFA" 
                                                className="transition-all duration-500 group-hover:fill-opacity-30 group-hover:rx-[125px] group-hover:ry-[15px]" 
                                                fillOpacity="0.12" 
                                            />

                                            {/* Spark lines above laptop top-right */}
                                            <g className="transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                                                <path 
                                                    d="M258 26L264 18M272 34L282 32M266 42L274 48" 
                                                    className="stroke-[#075BFA] group-hover:stroke-[#075BFA] group-hover:stroke-[2.4] transition-all duration-300" 
                                                    strokeWidth="2" 
                                                    strokeLinecap="round" 
                                                />
                                            </g>

                                            {/* Laptop Display Body Bezel */}
                                            <rect 
                                                x="42" 
                                                y="24" 
                                                width="224" 
                                                height="142" 
                                                rx="12" 
                                                fill="#FFFFFF" 
                                                stroke="#075BFA" 
                                                strokeWidth="2.2" 
                                                className="transition-all duration-300 group-hover:stroke-[#075BFA]"
                                            />

                                            {/* Screen Display Area: CHANGES COLOUR TO BLUE ON HOVER (Working Laptop) */}
                                            <rect 
                                                x="48" 
                                                y="30" 
                                                width="212" 
                                                height="130" 
                                                rx="8" 
                                                className="fill-[#F8FAFC] group-hover:fill-[#075BFA] transition-colors duration-500 ease-out" 
                                            />

                                            {/* Browser Top Bar */}
                                            <rect 
                                                x="48" 
                                                y="30" 
                                                width="212" 
                                                height="18" 
                                                rx="8" 
                                                className="fill-white group-hover:fill-[#0543cf] transition-colors duration-500" 
                                            />
                                            <line 
                                                x1="48" 
                                                y1="48" 
                                                x2="260" 
                                                y2="48" 
                                                className="stroke-[#E2E8F0] group-hover:stroke-white/20 transition-colors duration-500" 
                                                strokeWidth="1.2" 
                                            />
                                            {/* Browser Status Dots */}
                                            <circle cx="58" cy="39" r="2.5" className="fill-[#075BFA] group-hover:fill-[#38bdf8] transition-colors duration-300" />
                                            <circle cx="66" cy="39" r="2.5" className="fill-[#075BFA]/40 group-hover:fill-white/80 transition-colors duration-300" />
                                            <circle cx="74" cy="39" r="2.5" className="fill-[#075BFA]/25 group-hover:fill-white/50 transition-colors duration-300" />

                                            {/* Left Image Placeholder Box */}
                                            <rect 
                                                x="58" 
                                                y="58" 
                                                width="86" 
                                                height="66" 
                                                rx="6" 
                                                className="fill-[#EBF2FE] stroke-[#075BFA] group-hover:fill-white/15 group-hover:stroke-white/90 transition-all duration-500" 
                                                strokeWidth="1.6" 
                                            />
                                            <circle 
                                                cx="74" 
                                                cy="74" 
                                                r="5" 
                                                className="fill-[#075BFA]/30 group-hover:fill-white transition-colors duration-300" 
                                            />
                                            <path 
                                                d="M64 116L82 92L96 106L112 86L138 116H64Z" 
                                                className="fill-[#C7DCFE] stroke-[#075BFA] group-hover:fill-white/40 group-hover:stroke-white transition-all duration-500" 
                                                strokeWidth="1.4" 
                                                strokeLinejoin="round" 
                                            />

                                            {/* Right Wireframe Content: TURNS TO STREAMING WHITE CODE LINES ON HOVER */}
                                            <rect 
                                                x="156" 
                                                y="62" 
                                                width="92" 
                                                height="8" 
                                                rx="3" 
                                                className="fill-[#075BFA] group-hover:fill-white transition-colors duration-300" 
                                            />
                                            <rect 
                                                x="156" 
                                                y="76" 
                                                width="72" 
                                                height="6" 
                                                rx="3" 
                                                className="fill-[#C7DCFE] group-hover:fill-white/85 transition-colors duration-300" 
                                            />
                                            <rect 
                                                x="156" 
                                                y="88" 
                                                width="82" 
                                                height="6" 
                                                rx="3" 
                                                className="fill-[#E2E8F0] group-hover:fill-white/70 transition-colors duration-300" 
                                            />
                                            <rect 
                                                x="156" 
                                                y="100" 
                                                width="54" 
                                                height="6" 
                                                rx="3" 
                                                className="fill-[#E2E8F0] group-hover:fill-white/60 transition-colors duration-300" 
                                            />

                                            {/* Floating Code Tag Badge: LIGHTS UP AS WORKING TAG ON HOVER */}
                                            <g className="transition-transform duration-300 group-hover:scale-105 origin-bottom-right">
                                                <rect 
                                                    x="196" 
                                                    y="120" 
                                                    width="50" 
                                                    height="28" 
                                                    rx="6" 
                                                    className="fill-white stroke-[#075BFA] group-hover:fill-white group-hover:stroke-white group-hover:shadow-md transition-all duration-300" 
                                                    strokeWidth="1.8" 
                                                />
                                                <text 
                                                    x="221" 
                                                    y="139" 
                                                    fill="#075BFA" 
                                                    className="font-bold font-mono text-[13px] transition-colors" 
                                                    textAnchor="middle"
                                                >
                                                    &lt;/&gt;
                                                </text>
                                            </g>

                                            {/* Laptop Keyboard Base */}
                                            <path 
                                                d="M20 166C20 166 32 165 44 165H264C276 165 288 166 288 166C294 166.5 298 171 295 176L285 181C283 182 280 182.5 277 182.5H31C28 182.5 25 182 23 181L13 176C10 171 14 166.5 20 166Z" 
                                                fill="#FFFFFF" 
                                                stroke="#075BFA" 
                                                strokeWidth="2.2" 
                                                strokeLinejoin="round" 
                                                className="transition-colors duration-300 group-hover:stroke-[#075BFA]"
                                            />
                                            {/* Trackpad notch */}
                                            <path 
                                                d="M136 166H172V171C172 172.5 170.5 174 169 174H139C137.5 174 136 172.5 136 171V166Z" 
                                                fill="#EBF2FE" 
                                                stroke="#075BFA" 
                                                strokeWidth="1.4" 
                                                className="transition-colors duration-300 group-hover:fill-[#C7DCFE]"
                                            />
                                        </svg>
                                    </div>

                                    {/* Bottom Action: Clean White Pill Button matching Reference Mockup */}
                                    <div className="relative z-10 mt-auto pt-2">
                                        <span
                                            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white border border-[#E0D9CD] text-[#07142F] group-hover:border-[#075BFA] group-hover:text-[#075BFA] font-bold text-xs sm:text-[13px] shadow-[0_2px_8px_rgba(7,20,47,0.04)] group-hover:shadow-[0_4px_14px_rgba(7,91,250,0.18)] transition-all duration-300"
                                        >
                                            <span>Build Your Digital Presence</span>
                                            <FiArrowRight className="w-3.5 h-3.5 text-[#075BFA] transition-transform duration-200 group-hover:translate-x-1" />
                                        </span>
                                    </div>
                                </Link>
                            </div>

                            {/* ====================================================
                                CARDS 02 - 05: 2x2 Responsive Grid
                                (Warm White #FAF8F4 cards, two-column internal layout
                                 with free-floating line-art illustrations on the right)
                            ==================================================== */}
                            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 h-full">
                                
                                {/* Card 02: Custom Software Development */}
                                <Link
                                    href={servicesData[1].href}
                                    onClick={() => handleServiceSelect(servicesData[1].slug)}
                                    aria-label={`${servicesData[1].title} - ${servicesData[1].seoPhrase}`}
                                    className="group relative bg-[#FAF8F4] rounded-[24px] sm:rounded-[28px] border border-[#EAE4D8] p-5 sm:p-6 flex flex-col justify-between h-full shadow-[0_4px_16px_rgba(7,20,47,0.05),0_1px_2px_rgba(7,20,47,0.03)] hover:shadow-[0_16px_36px_-6px_rgba(7,20,47,0.1),0_4px_14px_rgba(7,91,250,0.12)] hover:border-[#075BFA]/50 transition-all duration-300 transform hover:-translate-y-1.5 select-none overflow-hidden cursor-pointer"
                                >
                                    <div className="relative z-10 flex items-center justify-between gap-3 h-full">
                                        {/* Left Text Column */}
                                        <div className="flex-1 min-w-0 pr-1">
                                            <div className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full bg-[#EBF2FE] text-[#075BFA] font-bold text-[11px] tracking-wider font-mono w-fit mb-2.5">
                                                {servicesData[1].id}
                                            </div>

                                            <h3 className="text-[17px] sm:text-[18px] font-extrabold font-display text-[#07142F] group-hover:text-[#075BFA] leading-snug tracking-tight transition-colors duration-200">
                                                Custom Software<br />Development
                                            </h3>

                                            <svg className="w-14 h-2 text-[#075BFA] mt-1 mb-2.5" viewBox="0 0 60 8" fill="none" aria-hidden="true">
                                                <path d="M2 5C18 2 42 2 58 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                            </svg>

                                            <p className="text-slate-600 text-xs sm:text-[12.5px] leading-relaxed font-sans">
                                                {servicesData[1].desc}
                                            </p>
                                        </div>

                                        {/* Right Illustration: Free-floating vector graphic matching Mockup */}
                                        <div className="flex-shrink-0 w-24 sm:w-28 flex items-center justify-center">
                                            <svg
                                                viewBox="0 0 120 100"
                                                className="w-full h-auto select-none transition-transform duration-300 group-hover:scale-105"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true"
                                            >
                                                {/* Spark lines top right */}
                                                <path d="M96 16L100 10M106 22L114 20M104 28L110 32" stroke="#075BFA" strokeWidth="1.6" strokeLinecap="round" className="transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                                
                                                {/* Software Window */}
                                                <rect x="14" y="22" width="76" height="58" rx="8" fill="#FFFFFF" stroke="#075BFA" strokeWidth="2" className="transition-colors group-hover:stroke-blue-600" />
                                                <path d="M14 34H90" stroke="#075BFA" strokeWidth="1.6" />
                                                <circle cx="22" cy="28" r="2" fill="#075BFA" />
                                                <circle cx="28" cy="28" r="2" fill="#075BFA" />
                                                <circle cx="34" cy="28" r="2" fill="#075BFA" />
                                                
                                                {/* Left square placeholders */}
                                                <rect x="22" y="40" width="16" height="14" rx="3" fill="#EBF2FE" stroke="#075BFA" strokeWidth="1.4" className="transition-colors group-hover:fill-blue-100" />
                                                <rect x="22" y="58" width="16" height="14" rx="3" fill="#EBF2FE" stroke="#075BFA" strokeWidth="1.4" className="transition-colors group-hover:fill-blue-100" />
                                                
                                                {/* Padlock / lock badge on right */}
                                                <rect x="46" y="44" width="16" height="14" rx="3" fill="#EBF2FE" stroke="#075BFA" strokeWidth="1.4" className="transition-colors group-hover:fill-blue-100" />
                                                <path d="M50 44V40C50 37.8 51.8 36 54 36C56.2 36 58 37.8 58 40V44" stroke="#075BFA" strokeWidth="1.4" strokeLinecap="round" />
                                                
                                                {/* Mechanical gear bottom right with rotation on hover */}
                                                <g transform="translate(74, 52)" className="transition-transform duration-500 ease-out group-hover:rotate-45 origin-center">
                                                    <circle cx="16" cy="16" r="8" fill="#FFFFFF" stroke="#075BFA" strokeWidth="2" />
                                                    <circle cx="16" cy="16" r="3.5" fill="#EBF2FE" stroke="#075BFA" strokeWidth="1.4" />
                                                    <path d="M16 4V8M16 24V28M4 16H8M24 16H28M7.5 7.5L10.5 10.5M21.5 21.5L24.5 24.5M7.5 24.5L10.5 21.5M21.5 10.5L24.5 7.5" stroke="#075BFA" strokeWidth="2.4" strokeLinecap="round" />
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </Link>

                                {/* Card 03: AI & Business Automation */}
                                <Link
                                    href={servicesData[2].href}
                                    onClick={() => handleServiceSelect(servicesData[2].slug)}
                                    aria-label={`${servicesData[2].title} - ${servicesData[2].seoPhrase}`}
                                    className="group relative bg-[#FAF8F4] rounded-[24px] sm:rounded-[28px] border border-[#EAE4D8] p-5 sm:p-6 flex flex-col justify-between h-full shadow-[0_4px_16px_rgba(7,20,47,0.05),0_1px_2px_rgba(7,20,47,0.03)] hover:shadow-[0_16px_36px_-6px_rgba(7,20,47,0.1),0_4px_14px_rgba(7,91,250,0.12)] hover:border-[#075BFA]/50 transition-all duration-300 transform hover:-translate-y-1.5 select-none overflow-hidden cursor-pointer"
                                >
                                    <div className="relative z-10 flex items-center justify-between gap-3 h-full">
                                        {/* Left Text Column */}
                                        <div className="flex-1 min-w-0 pr-1">
                                            <div className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full bg-[#EBF2FE] text-[#075BFA] font-bold text-[11px] tracking-wider font-mono w-fit mb-2.5">
                                                {servicesData[2].id}
                                            </div>

                                            <h3 className="text-[17px] sm:text-[18px] font-extrabold font-display text-[#07142F] group-hover:text-[#075BFA] leading-snug tracking-tight transition-colors duration-200">
                                                AI &amp; Business<br />Automation
                                            </h3>

                                            <svg className="w-14 h-2 text-[#075BFA] mt-1 mb-2.5" viewBox="0 0 60 8" fill="none" aria-hidden="true">
                                                <path d="M2 5C18 2 42 2 58 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                            </svg>

                                            <p className="text-slate-600 text-xs sm:text-[12.5px] leading-relaxed font-sans">
                                                {servicesData[2].desc}
                                            </p>
                                        </div>

                                        {/* Right Illustration: AI Chip with Circuit Nodes */}
                                        <div className="flex-shrink-0 w-24 sm:w-28 flex items-center justify-center">
                                            <svg
                                                viewBox="0 0 120 100"
                                                className="w-full h-auto select-none transition-transform duration-300 group-hover:scale-105"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true"
                                            >
                                                {/* Spark lines top right */}
                                                <path d="M96 16L100 10M106 22L114 20M104 28L110 32" stroke="#075BFA" strokeWidth="1.6" strokeLinecap="round" className="transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                                
                                                {/* Chip circuit pins */}
                                                <path d="M46 16V26M60 16V26M74 16V26" stroke="#075BFA" strokeWidth="2" strokeLinecap="round" />
                                                <path d="M46 74V84M60 74V84M74 74V84" stroke="#075BFA" strokeWidth="2" strokeLinecap="round" />
                                                <path d="M22 38H32M22 50H32M22 62H32" stroke="#075BFA" strokeWidth="2" strokeLinecap="round" />
                                                <path d="M88 38H98M88 50H98M88 62H98" stroke="#075BFA" strokeWidth="2" strokeLinecap="round" />
                                                
                                                {/* Outer chip body */}
                                                <rect x="32" y="26" width="56" height="48" rx="8" fill="#FFFFFF" stroke="#075BFA" strokeWidth="2" className="transition-colors group-hover:stroke-blue-600" />
                                                
                                                {/* Inner core */}
                                                <rect x="40" y="34" width="40" height="32" rx="5" fill="#EBF2FE" stroke="#075BFA" strokeWidth="1.4" className="transition-all duration-300 group-hover:fill-blue-100" />
                                                <text x="60" y="55" fill="#075BFA" fontSize="15" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.05em">AI</text>
                                            </svg>
                                        </div>
                                    </div>
                                </Link>

                                {/* Card 04: Cloud & DevOps Solutions */}
                                <Link
                                    href={servicesData[3].href}
                                    onClick={() => handleServiceSelect(servicesData[3].slug)}
                                    aria-label={`${servicesData[3].title} - ${servicesData[3].seoPhrase}`}
                                    className="group relative bg-[#FAF8F4] rounded-[24px] sm:rounded-[28px] border border-[#EAE4D8] p-5 sm:p-6 flex flex-col justify-between h-full shadow-[0_4px_16px_rgba(7,20,47,0.05),0_1px_2px_rgba(7,20,47,0.03)] hover:shadow-[0_16px_36px_-6px_rgba(7,20,47,0.1),0_4px_14px_rgba(7,91,250,0.12)] hover:border-[#075BFA]/50 transition-all duration-300 transform hover:-translate-y-1.5 select-none overflow-hidden cursor-pointer"
                                >
                                    <div className="relative z-10 flex items-center justify-between gap-3 h-full">
                                        {/* Left Text Column */}
                                        <div className="flex-1 min-w-0 pr-1">
                                            <div className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full bg-[#EBF2FE] text-[#075BFA] font-bold text-[11px] tracking-wider font-mono w-fit mb-2.5">
                                                {servicesData[3].id}
                                            </div>

                                            <h3 className="text-[17px] sm:text-[18px] font-extrabold font-display text-[#07142F] group-hover:text-[#075BFA] leading-snug tracking-tight transition-colors duration-200">
                                                Cloud &amp; DevOps<br />Solutions
                                            </h3>

                                            <svg className="w-14 h-2 text-[#075BFA] mt-1 mb-2.5" viewBox="0 0 60 8" fill="none" aria-hidden="true">
                                                <path d="M2 5C18 2 42 2 58 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                            </svg>

                                            <p className="text-slate-600 text-xs sm:text-[12.5px] leading-relaxed font-sans">
                                                {servicesData[3].desc}
                                            </p>
                                        </div>

                                        {/* Right Illustration: Cloud + Up/Down Arrows + Server Blades */}
                                        <div className="flex-shrink-0 w-24 sm:w-28 flex items-center justify-center">
                                            <svg
                                                viewBox="0 0 120 100"
                                                className="w-full h-auto select-none transition-transform duration-300 group-hover:scale-105"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true"
                                            >
                                                {/* Cloud */}
                                                <path
                                                    d="M36 38C36 30.268 42.268 24 50 24C56.2434 24 61.5476 28.0838 63.3503 33.7225C65.2635 32.6288 67.4913 32 69.8667 32C76.9946 32 82.8 37.747 82.8 44.8C82.8 45.4754 82.7482 46.1387 82.6483 46.7865C85.7828 48.0694 88 51.1578 88 54.8C88 59.6601 84.0601 63.6 79.2 63.6H36C29.3726 63.6 24 58.2274 24 51.6C24 45.2428 28.9497 40.0396 35.2018 39.6307C35.4628 39.0768 35.7317 38.5323 36 38Z"
                                                    fill="#FFFFFF"
                                                    stroke="#075BFA"
                                                    strokeWidth="2"
                                                    strokeLinejoin="round"
                                                    className="transition-colors group-hover:stroke-blue-600"
                                                />
                                                {/* Sync arrows */}
                                                <g transform="translate(52, 34)" className="transition-transform duration-300 ease-out group-hover:-translate-y-1">
                                                    <path d="M4 14V4M4 4L1 7M4 4L7 7" stroke="#075BFA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M12 4V14M12 14L9 11M12 14L15 11" stroke="#075BFA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                                </g>
                                                {/* Server blade 1 */}
                                                <rect x="42" y="66" width="48" height="12" rx="3" fill="#EBF2FE" stroke="#075BFA" strokeWidth="1.6" className="transition-colors group-hover:fill-blue-100" />
                                                <line x1="47" y1="72" x2="63" y2="72" stroke="#075BFA" strokeWidth="1.5" strokeLinecap="round" />
                                                <circle cx="73" cy="72" r="1.5" fill="#075BFA" />
                                                <circle cx="78" cy="72" r="1.5" fill="#075BFA" />
                                                <circle cx="83" cy="72" r="1.5" fill="#075BFA" />
                                                {/* Server blade 2 */}
                                                <rect x="42" y="81" width="48" height="12" rx="3" fill="#EBF2FE" stroke="#075BFA" strokeWidth="1.6" className="transition-colors group-hover:fill-blue-100" />
                                                <line x1="47" y1="87" x2="63" y2="87" stroke="#075BFA" strokeWidth="1.5" strokeLinecap="round" />
                                                <circle cx="73" cy="87" r="1.5" fill="#075BFA" />
                                                <circle cx="78" cy="87" r="1.5" fill="#075BFA" />
                                                <circle cx="83" cy="87" r="1.5" fill="#075BFA" />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>

                                {/* Card 05: Managed IT Services */}
                                <Link
                                    href={servicesData[4].href}
                                    aria-label={`${servicesData[4].title} - ${servicesData[4].seoPhrase}`}
                                    className="group relative bg-[#FAF8F4] rounded-[24px] sm:rounded-[28px] border border-[#EAE4D8] p-5 sm:p-6 flex flex-col justify-between h-full shadow-[0_4px_16px_rgba(7,20,47,0.05),0_1px_2px_rgba(7,20,47,0.03)] hover:shadow-[0_16px_36px_-6px_rgba(7,20,47,0.1),0_4px_14px_rgba(7,91,250,0.12)] hover:border-[#075BFA]/50 transition-all duration-300 transform hover:-translate-y-1.5 select-none overflow-hidden cursor-pointer"
                                >
                                    <div className="relative z-10 flex items-center justify-between gap-3 h-full">
                                        {/* Left Text Column */}
                                        <div className="flex-1 min-w-0 pr-1">
                                            <div className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full bg-[#EBF2FE] text-[#075BFA] font-bold text-[11px] tracking-wider font-mono w-fit mb-2.5">
                                                {servicesData[4].id}
                                            </div>

                                            <h3 className="text-[17px] sm:text-[18px] font-extrabold font-display text-[#07142F] group-hover:text-[#075BFA] leading-snug tracking-tight transition-colors duration-200">
                                                Managed IT<br />Services
                                            </h3>

                                            <svg className="w-14 h-2 text-[#075BFA] mt-1 mb-2.5" viewBox="0 0 60 8" fill="none" aria-hidden="true">
                                                <path d="M2 5C18 2 42 2 58 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                            </svg>

                                            <p className="text-slate-600 text-xs sm:text-[12.5px] leading-relaxed font-sans">
                                                {servicesData[4].desc}
                                            </p>
                                        </div>

                                        {/* Right Illustration: Laptop with Security Shield */}
                                        <div className="flex-shrink-0 w-24 sm:w-28 flex items-center justify-center">
                                            <svg
                                                viewBox="0 0 120 100"
                                                className="w-full h-auto select-none transition-transform duration-300 group-hover:scale-105"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true"
                                            >
                                                <circle cx="60" cy="46" r="24" fill="#075BFA" className="transition-all duration-300 group-hover:fill-opacity-15" fillOpacity="0.08" />
                                                <rect x="24" y="24" width="72" height="46" rx="6" fill="#FFFFFF" stroke="#075BFA" strokeWidth="2" className="transition-colors group-hover:stroke-blue-600" />
                                                <rect x="28" y="28" width="64" height="38" rx="4" fill="#F8FAFC" />
                                                <path
                                                    d="M60 34L70 38V47C70 53.5 65.8 58.8 60 61C54.2 58.8 50 53.5 50 47V38L60 34Z"
                                                    fill="#EBF2FE"
                                                    stroke="#075BFA"
                                                    strokeWidth="1.8"
                                                    strokeLinejoin="round"
                                                    className="transition-colors group-hover:fill-blue-100"
                                                />
                                                <path d="M56 47.5L59 50.5L64.5 45" stroke="#075BFA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M16 70C16 70 20 69.5 24 69.5H96C100 69.5 104 70 104 70C106 70 107.5 72 106.5 74L103.5 76C102.5 76.5 101 77 99 77H21C19 77 17.5 76.5 16.5 76L13.5 74C12.5 72 14 70 16 70Z" fill="#FFFFFF" stroke="#075BFA" strokeWidth="2" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
