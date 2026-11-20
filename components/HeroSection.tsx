"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";

export default function HeroSection() {
    return (
        <section 
            id="home" 
            className="relative min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] flex items-center justify-center overflow-hidden pt-24 sm:pt-28 md:pt-30 lg:pt-32 pb-10 sm:pb-12 lg:pb-14 bg-[#FAF9F5]"
        >
            {/* Top-Left Elegant Layered Blue Waves with Subtle Liquid Sway Movement */}
            <div 
                className="absolute top-0 left-0 w-[260px] xs:w-[320px] sm:w-[440px] md:w-[540px] lg:w-[640px] h-[220px] xs:h-[250px] sm:h-[330px] md:h-[380px] lg:h-[440px] pointer-events-none select-none z-0 overflow-hidden"
                aria-hidden="true"
            >
                <svg 
                    className="w-full h-full" 
                    viewBox="0 0 680 500" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <linearGradient id="tl-grad-1" x1="0%" y1="0%" x2="90%" y2="90%">
                            <stop offset="0%" stopColor="#C7DFFC" stopOpacity="0.85" />
                            <stop offset="60%" stopColor="#DCEBFE" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#FAF9F5" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="tl-grad-2" x1="0%" y1="0%" x2="75%" y2="85%">
                            <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.7" />
                            <stop offset="50%" stopColor="#BFDBFE" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#FAF9F5" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="tl-grad-3" x1="0%" y1="0%" x2="60%" y2="70%">
                            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.45" />
                            <stop offset="60%" stopColor="#93C5FD" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#FAF9F5" stopOpacity="0" />
                        </linearGradient>
                    </defs>

                    {/* Outer broad flowing wave with slow liquid drift */}
                    <path 
                        className="animate-liquid-wave-1"
                        d="M0 0 H520 C420 120 330 260 210 330 C110 390 30 410 0 460 Z" 
                        fill="url(#tl-grad-1)" 
                    />
                    {/* Middle sweeping wave with fluid rhythm */}
                    <path 
                        className="animate-liquid-wave-2"
                        d="M0 0 H390 C310 100 240 200 150 255 C80 295 20 310 0 340 Z" 
                        fill="url(#tl-grad-2)" 
                    />
                    {/* Inner accent wave with subtle liquid breathe */}
                    <path 
                        className="animate-liquid-wave-3"
                        d="M0 0 H260 C200 70 150 135 95 180 C45 220 10 225 0 245 Z" 
                        fill="url(#tl-grad-3)" 
                    />
                </svg>
            </div>

            {/* Bottom-Right & Bottom Edge Layered Blue Waves with Subtle Liquid Sway Movement */}
            <div 
                className="absolute bottom-0 right-0 w-[300px] xs:w-[380px] sm:w-[540px] md:w-[680px] lg:w-[840px] h-[180px] xs:h-[220px] sm:h-[280px] md:h-[330px] lg:h-[380px] pointer-events-none select-none z-0 overflow-hidden"
                aria-hidden="true"
            >
                <svg 
                    className="w-full h-full" 
                    viewBox="0 0 920 440" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <linearGradient id="br-grad-1" x1="100%" y1="100%" x2="10%" y2="10%">
                            <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.75" />
                            <stop offset="50%" stopColor="#C7DFFC" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#FAF9F5" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="br-grad-2" x1="100%" y1="100%" x2="25%" y2="20%">
                            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.65" />
                            <stop offset="55%" stopColor="#93C5FD" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#FAF9F5" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="br-grad-3" x1="100%" y1="100%" x2="40%" y2="30%">
                            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.45" />
                            <stop offset="65%" stopColor="#60A5FA" stopOpacity="0.15" />
                            <stop offset="100%" stopColor="#FAF9F5" stopOpacity="0" />
                        </linearGradient>
                    </defs>

                    {/* Outer broad wave sweeping along bottom with liquid sway */}
                    <path 
                        className="animate-liquid-wave-br-1"
                        d="M0 440 C220 400 420 370 560 300 C730 220 810 110 920 0 V440 Z" 
                        fill="url(#br-grad-1)" 
                    />
                    {/* Middle wave */}
                    <path 
                        className="animate-liquid-wave-br-2"
                        d="M180 440 C360 410 520 370 640 310 C770 240 840 160 920 65 V440 Z" 
                        fill="url(#br-grad-2)" 
                    />
                    {/* Inner corner crest wave */}
                    <path 
                        className="animate-liquid-wave-br-3"
                        d="M380 440 C530 420 660 380 750 330 C830 280 870 210 920 140 V440 Z" 
                        fill="url(#br-grad-3)" 
                    />
                </svg>
            </div>

            {/* Central Content Container */}
            <div className="relative z-10 w-full max-w-5xl mx-auto px-4 xs:px-5 sm:px-8 md:px-10 lg:px-12 flex flex-col items-center text-center">
                
                {/* 1. Eyebrow Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#EBF2FE] border border-[#BFDBFE]/80 text-[#000C24] text-[11px] sm:text-xs md:text-[12px] font-bold tracking-wider sm:tracking-[0.14em] uppercase shadow-[0_1px_3px_rgba(0,87,254,0.06)] select-none mb-4 sm:mb-4.5">
                    {/* 4-point sparkle star matching visual reference */}
                    <svg 
                        className="w-3.5 h-3.5 text-[#0057FE] fill-[#0057FE] shrink-0" 
                        viewBox="0 0 24 24" 
                        aria-hidden="true"
                    >
                        <path d="M12 0L14.7 9.3L24 12L14.7 14.7L12 24L9.3 14.7L0 12L9.3 9.3L12 0Z" />
                    </svg>
                    <span>IT &amp; AI SOLUTIONS FOR BUSINESSES</span>
                </div>

                {/* 2. Main H1 Headline with Inverted Underline Arc Matching Brand Design */}
                <h1 className="font-display font-black tracking-tight text-center text-[24px] xs:text-[27px] sm:text-[40px] md:text-[48px] lg:text-[58px] leading-[1.14] sm:leading-[1.11] max-w-[920px] mx-auto mb-4 sm:mb-4.5">
                    {/* Mobile Line Structure (<sm: 3 comfortable lines) */}
                    <span className="sm:hidden block">
                        <span className="block text-[#000C24]">Grow Your Business with</span>
                        <span className="block text-[#0057FE] mt-0.5">Custom Software,</span>
                        <span className="relative inline-block text-[#0057FE] mt-0.5">
                            AI &amp; Technology.
                            {/* Inverted upward arch stroke matching Nisschay brand language */}
                            <svg 
                                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[105%] h-[8px] text-[#0057FE] pointer-events-none" 
                                viewBox="0 0 240 12" 
                                fill="none" 
                                preserveAspectRatio="none"
                                aria-hidden="true"
                            >
                                <path 
                                    d="M2 10C65 2 175 2 238 10" 
                                    stroke="currentColor" 
                                    strokeWidth="3.4" 
                                    strokeLinecap="round" 
                                />
                            </svg>
                        </span>
                    </span>

                    {/* Tablet & Desktop Line Structure (>=sm: exact 3-line composition matching reference mockup) */}
                    <span className="hidden sm:inline">
                        <span className="block text-[#000C24]">
                            Grow Your Business with
                        </span>
                        <span className="block text-[#0057FE] mt-0.5 sm:mt-1">
                            Custom Software, AI &amp;
                        </span>
                        <span className="relative inline-block text-[#0057FE] mt-0.5 sm:mt-1">
                            Technology.
                            {/* Inverted upward arch stroke matching Nisschay brand language */}
                            <svg 
                                className="absolute -bottom-2 sm:-bottom-2.5 md:-bottom-3 left-1/2 -translate-x-1/2 w-[105%] h-[9px] sm:h-[11px] text-[#0057FE] pointer-events-none" 
                                viewBox="0 0 240 12" 
                                fill="none" 
                                preserveAspectRatio="none"
                                aria-hidden="true"
                            >
                                <path 
                                    d="M2 10C65 2 175 2 238 10" 
                                    stroke="currentColor" 
                                    strokeWidth="3.4" 
                                    strokeLinecap="round" 
                                />
                            </svg>
                        </span>
                    </span>
                </h1>

                {/* 3. Supporting Paragraph */}
                <p className="text-slate-600 font-sans text-center text-[14px] xs:text-[14.5px] sm:text-[15.5px] md:text-[16.5px] lg:text-[17.5px] leading-relaxed sm:leading-[1.62] max-w-[670px] mx-auto mb-6 sm:mb-7">
                    <strong className="text-[#0057FE] font-bold">Nisschay</strong> is a technology partner helping startups and growing businesses build custom software, modern websites and intelligent AI-powered solutions that simplify operations, improve efficiency and support business growth.
                </p>

                {/* 4. CTA Buttons with Shimmering Light Sweep & Interactive Micro-Effects */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5 w-full max-w-[320px] sm:max-w-none sm:w-auto mb-7 sm:mb-8 lg:mb-9">
                    {/* Primary CTA: "Discuss Your Project" with Shimmer Effect */}
                    <Link
                        href="/contact"
                        className="group relative overflow-hidden w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 bg-[#0057FE] hover:bg-[#004cdb] text-white text-sm sm:text-[15px] font-semibold font-outfit rounded-full shadow-[0_4px_14px_rgba(0,87,254,0.28)] hover:shadow-[0_6px_20px_rgba(0,87,254,0.4)] hover:-translate-y-[2px] active:scale-[0.98] transition-all duration-200 ease-out motion-reduce:transition-none motion-reduce:transform-none motion-reduce:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0057FE]"
                    >
                        {/* Glass-Edge Top Rim Light */}
                        <span
                            className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none z-10"
                            aria-hidden="true"
                        />
                        {/* Shimmering Light Sweep Beam */}
                        <span
                            className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none animate-shimmer-sweep"
                            aria-hidden="true"
                        />

                        <span className="relative z-10">Discuss Your Project</span>
                        <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-1 motion-reduce:transform-none" />
                    </Link>

                    {/* Secondary CTA: "Explore Our Services" */}
                    <Link
                        href="/services"
                        className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center px-6 sm:px-7 py-3 bg-white hover:bg-[#F3F7FE] text-[#000C24] hover:text-[#0057FE] text-sm sm:text-[15px] font-semibold font-outfit rounded-full border border-slate-200/90 hover:border-[#93C5FD] shadow-[0_1px_4px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_14px_rgba(0,87,254,0.12)] hover:-translate-y-[2px] active:scale-[0.98] transition-all duration-200 ease-out motion-reduce:transition-none motion-reduce:transform-none motion-reduce:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0057FE]"
                    >
                        Explore Our Services
                    </Link>
                </div>

                {/* 5. Capability Highlights: Compact, Refined Capsule */}
                <div className="w-full max-w-[290px] xs:max-w-[320px] sm:max-w-none sm:w-auto inline-flex flex-col sm:flex-row items-center justify-center bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-2xl sm:rounded-full px-4 sm:px-6 py-2.5 sm:py-2.5 shadow-[0_4px_18px_rgba(7,20,47,0.035)] gap-3 sm:gap-5 md:gap-6">
                    
                    {/* Highlight 1: Custom Development */}
                    <div className="flex items-center gap-2.5 w-full sm:w-auto justify-start sm:justify-center">
                        <div className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-lg bg-[#EAF2FE] flex items-center justify-center text-[#0057FE] shrink-0 font-mono font-bold text-xs select-none">
                            &lt;/&gt;
                        </div>
                        <div className="text-left leading-tight">
                            <span className="block font-bold text-[#000C24] text-[12.5px] sm:text-[13px] font-outfit">Custom</span>
                            <span className="block font-bold text-[#000C24] text-[12.5px] sm:text-[13px] font-outfit">Development</span>
                        </div>
                    </div>

                    {/* Mobile Divider */}
                    <div className="block sm:hidden w-full h-[1px] bg-slate-100" aria-hidden="true" />
                    {/* Desktop Divider 1 */}
                    <div className="hidden sm:block w-[1px] h-6 bg-slate-200" aria-hidden="true" />

                    {/* Highlight 2: AI & Automation */}
                    <div className="flex items-center gap-2.5 w-full sm:w-auto justify-start sm:justify-center">
                        <div className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-lg bg-[#EAF2FE] flex items-center justify-center text-[#0057FE] shrink-0">
                            <Layers className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.2]" />
                        </div>
                        <div className="text-left leading-tight">
                            <span className="block font-bold text-[#000C24] text-[12.5px] sm:text-[13px] font-outfit">AI &amp;</span>
                            <span className="block font-bold text-[#000C24] text-[12.5px] sm:text-[13px] font-outfit">Automation</span>
                        </div>
                    </div>

                    {/* Mobile Divider */}
                    <div className="block sm:hidden w-full h-[1px] bg-slate-100" aria-hidden="true" />
                    {/* Desktop Divider 2 */}
                    <div className="hidden sm:block w-[1px] h-6 bg-slate-200" aria-hidden="true" />

                    {/* Highlight 3: Scalable IT Solutions */}
                    <div className="flex items-center gap-2.5 w-full sm:w-auto justify-start sm:justify-center">
                        <div className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-lg bg-[#EAF2FE] flex items-center justify-center text-[#0057FE] shrink-0">
                            <svg 
                                className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#0057FE]" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2.2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <rect x="4" y="14" width="3.5" height="7" rx="0.5" fill="currentColor" fillOpacity="0.2" />
                                <rect x="10.25" y="10" width="3.5" height="11" rx="0.5" fill="currentColor" fillOpacity="0.2" />
                                <rect x="16.5" y="6" width="3.5" height="15" rx="0.5" fill="currentColor" fillOpacity="0.2" />
                                <path d="M4 12l6-5 5 4 5-6" />
                                <polyline points="16 5 20 5 20 9" />
                            </svg>
                        </div>
                        <div className="text-left leading-tight">
                            <span className="block font-bold text-[#000C24] text-[12.5px] sm:text-[13px] font-outfit">Scalable</span>
                            <span className="block font-bold text-[#000C24] text-[12.5px] sm:text-[13px] font-outfit">IT Solutions</span>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
