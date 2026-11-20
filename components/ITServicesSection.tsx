"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
    FiArrowRight, 
    FiMonitor, 
    FiLayers, 
    FiCpu, 
    FiCloud, 
    FiHeadphones 
} from "react-icons/fi";

const itServices = [
    {
        id: "01",
        slug: "web-saas",
        title: "Web & Web App Development",
        desc: "Fast, responsive websites and web apps built for performance and usability.",
        icon: FiMonitor,
        href: "/services?service=web-saas#service-breakdown",
    },
    {
        id: "02",
        slug: "custom-software",
        title: "Custom Software Development",
        desc: "Software tailored to your workflows, operations and business needs.",
        icon: FiLayers,
        href: "/services?service=custom-software#service-breakdown",
    },
    {
        id: "03",
        slug: "ai-automation",
        title: "AI & Business Automation",
        desc: "Practical AI tools and automated workflows that reduce repetitive work.",
        icon: FiCpu,
        href: "/services?service=ai-automation#service-breakdown",
    },
    {
        id: "04",
        slug: "cloud-devops",
        title: "Cloud & DevOps Solutions",
        desc: "Secure cloud infrastructure, deployment and monitoring for reliable delivery.",
        icon: FiCloud,
        href: "/services?service=cloud-devops#service-breakdown",
    },
    {
        id: "05",
        slug: "managed-it",
        title: "Managed IT Services",
        desc: "Ongoing technical support and system maintenance for smooth operations.",
        icon: FiHeadphones,
        href: "/contact",
    },
];

export default function ITServicesSection() {
    return (
        <section 
            id="it-services" 
            className="relative w-full overflow-x-clip bg-transparent text-[#07142F] pt-4 sm:pt-6 lg:pt-8 pb-16 sm:pb-24 lg:pb-32"
        >
            <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
                
                {/* ========================================================
                    HERO SECTION: 2-COLUMN COPY & LAPTOP ILLUSTRATION
                ======================================================== */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center mb-16 sm:mb-20 lg:mb-28">
                    
                    {/* Left Column: Copy & Actions (7 cols on lg) */}
                    <div className="lg:col-span-7 flex flex-col items-start text-left justify-center">
                        
                        {/* Eyebrow Capsule */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF2FE] border border-blue-200/80 text-slate-800 text-xs font-semibold select-none mb-5 sm:mb-6 shadow-[0_1px_2px_rgba(7,20,47,0.04)]">
                            <span className="text-[#0057FE] font-bold text-xs tracking-tight">{'</>'}</span>
                            <span className="font-mono uppercase tracking-[0.14em] text-[11px] text-[#07142F]">IT Services</span>
                        </div>

                        {/* H1 Headline - Unified font-display (Outfit) font-black matching Home page */}
                        <h1 className="text-3xl sm:text-5xl lg:text-[50px] xl:text-[56px] font-black font-display text-[#000c24] tracking-tight leading-[1.14] sm:leading-[1.12] mb-5 sm:mb-6">
                            Technology Solutions That Move Your{" "}
                            <span className="relative inline-block whitespace-nowrap">
                                <span className="bg-gradient-to-r from-[#0057fe] via-[#206aff] to-[#0047d6] bg-clip-text text-transparent">
                                    Business Forward
                                </span>
                                <svg
                                    className="absolute -bottom-1 sm:-bottom-1.5 left-0 w-full h-[6px] sm:h-[8px] text-[#0057fe]/35 pointer-events-none"
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
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0057FE] hover:bg-blue-600 text-white font-semibold text-sm sm:text-base shadow-[0_4px_14px_rgba(0,87,254,0.3)] hover:shadow-[0_6px_20px_rgba(0,87,254,0.4)] transition-all duration-200 group"
                            >
                                <span>Start a Project</span>
                                <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                            <Link
                                href="#our-it-services"
                                className="inline-flex items-center justify-center gap-2 px-3 py-3.5 text-[#0057FE] hover:text-blue-700 font-semibold text-sm sm:text-base transition-colors group"
                            >
                                <span>Explore All Services</span>
                                <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Realistic Paper Sketch Illustration (5 cols on lg) */}
                    <div className="lg:col-span-5 relative w-full flex items-center justify-center lg:justify-end">
                        {/* Soft atmospheric blue radial aura behind illustration */}
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
                    IT SERVICES GRID: HEADER & 5 SERVICE CARDS
                ======================================================== */}
                <div id="our-it-services" className="w-full pt-4 sm:pt-6 scroll-mt-28">
                    
                    {/* Section Header */}
                    <div className="max-w-3xl mb-8 sm:mb-12">
                        {/* Label with horizontal divider line */}
                        <div className="inline-flex items-center gap-3 mb-3">
                            <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#0057FE] uppercase">
                                OUR IT SERVICES
                            </span>
                            <span className="w-12 h-[1.5px] bg-[#0057FE]/60" aria-hidden="true" />
                        </div>

                        {/* H2 - Section Heading matching Home page Outfit font-black */}
                        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black font-display text-[#000c24] tracking-tight leading-tight mb-3">
                            End-to-End Technology Services
                        </h2>

                        {/* Description */}
                        <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans">
                            Practical technology solutions to build, automate and scale your business.
                        </p>
                    </div>

                    {/* 5-Column Responsive Card Grid (with tablet 2-column balance) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-4 xl:gap-5">
                        {itServices.map((service) => {
                            const Icon = service.icon;
                            return (
                                <Link
                                    key={service.id}
                                    href={service.href}
                                    onClick={() => {
                                        if (typeof window !== "undefined" && service.slug) {
                                            const event = new CustomEvent("nisschay-select-service", { detail: service.slug });
                                            window.dispatchEvent(event);
                                        }
                                    }}
                                    className="group relative bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 flex flex-col justify-start h-full shadow-[0_2px_8px_rgba(7,20,47,0.03)] hover:shadow-[0_12px_28px_-6px_rgba(7,20,47,0.08)] hover:border-blue-400/60 transition-all duration-300 transform hover:-translate-y-1 select-none cursor-pointer last:sm:col-span-2 last:lg:col-span-1"
                                >
                                    {/* Light Blue Rounded Icon Container */}
                                    <div className="w-12 h-12 rounded-xl bg-blue-50/90 border border-blue-100/90 flex items-center justify-center text-[#0057FE] mb-5 group-hover:scale-105 group-hover:bg-[#0057FE] group-hover:text-white transition-all duration-300 shadow-[0_1px_3px_rgba(0,87,254,0.08)]">
                                        <Icon className="w-6 h-6 stroke-[1.8]" />
                                    </div>

                                    {/* H3 Heading with calibrated min-height for uniform baseline */}
                                    <h3 className="text-base sm:text-[17px] font-bold font-display text-[#000c24] group-hover:text-[#0057FE] leading-snug mb-2.5 min-h-[44px] flex items-center transition-colors duration-200">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-sans">
                                        {service.desc}
                                    </p>
                                </Link>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}
