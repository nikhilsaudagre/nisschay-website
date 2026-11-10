"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Caveat } from "next/font/google";
import { 
    FiArrowRight,
    FiClock,
    FiCheckCircle,
    FiCode 
} from "react-icons/fi";

const caveat = Caveat({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
});

export default function HeroSection() {
    return (
        <section 
            id="home" 
            className="relative min-h-[620px] lg:h-[710px] lg:min-h-[680px] lg:max-h-[740px] flex items-center justify-center overflow-hidden pt-20 sm:pt-24 lg:pt-16 pb-8 sm:pb-10 lg:pb-6 bg-white"
        >
            {/* Delicate Tech Dot-Matrix Background Texture (Softly fades at borders) */}
            <div 
                className="absolute inset-0 pointer-events-none z-0" 
                aria-hidden="true"
                style={{
                    backgroundImage: "radial-gradient(rgba(0, 87, 254, 0.13) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                    maskImage: "radial-gradient(ellipse 75% 60% at 50% 45%, #000 35%, transparent 85%)",
                    WebkitMaskImage: "radial-gradient(ellipse 75% 60% at 50% 45%, #000 35%, transparent 85%)"
                }}
            />

            {/* Drifting Background Gradients */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-40">
                <div className="absolute -top-10 -left-10 w-96 h-96 bg-blue-100/35 rounded-full filter blur-[100px] animate-pulse" style={{ animationDuration: "8s" }} />
                <div className="absolute top-1/4 -right-10 w-80 h-80 bg-indigo-100/25 rounded-full filter blur-[100px] animate-pulse" style={{ animationDuration: "12s" }} />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto pl-6 pr-5 sm:pl-12 sm:pr-8 lg:pl-14 lg:pr-12 py-2 sm:py-4 lg:py-2">
                <div className="grid grid-cols-1 lg:grid-cols-[57%_1fr] gap-8 lg:gap-10 xl:gap-12 items-center">
                    
                    {/* Left Column: Copy & Actions (Expanded to 57% for more visual prominence) */}
                    <div className="w-full flex flex-col items-start text-left justify-center">
                        {/* Pre-title Plain Category Label */}
                        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-700 bg-slate-100/90 border border-slate-200/80 px-3.5 py-1.5 rounded-full select-none mb-4 sm:mb-5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0057fe]" />
                            <span>IT Services &amp; Digital Marketing</span>
                        </div>

                        {/* Title: 46–52px on desktop (lg:text-[48px] xl:text-[50px]), navy text, accent on 'move your business forward.' */}
                        <h1 className="text-balance leading-[1.12] mb-4 sm:mb-5 font-black tracking-tight text-[#000c24] font-display text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] xl:text-[50px] w-full max-w-none">
                            Technology and digital solutions that{" "}
                            <span className="relative inline sm:inline-block">
                                <span className="bg-gradient-to-r from-[#0057fe] via-[#206aff] to-[#0047d6] bg-clip-text text-transparent">
                                    move your business forward.
                                </span>
                                {/* Subtle editorial swoop underline (displayed on tablet/desktop where text is on one line) */}
                                <svg
                                    className="hidden sm:block absolute -bottom-1 sm:-bottom-1.5 left-0 w-full h-[5px] sm:h-[7px] text-[#0057fe]/30 pointer-events-none"
                                    viewBox="0 0 250 8"
                                    fill="none"
                                    preserveAspectRatio="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M2 5.5C65 2.2 185 2.2 248 6"
                                        stroke="currentColor"
                                        strokeWidth="2.8"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </span>
                        </h1>

                        {/* Subline: 18–20px on desktop, WCAG AA contrast */}
                        <p className="text-slate-600 mb-6 sm:mb-7 leading-relaxed font-normal text-base sm:text-lg lg:text-[19px] lg:leading-[1.6] max-w-[620px]">
                            From custom software and websites to intelligent automation and digital marketing, we help businesses turn challenges into practical digital solutions.
                        </p>

                        {/* Buttons: Primary "Book Free Consultation" & Quieter Secondary "Our Services" (full-width stacked on mobile) */}
                        <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 items-stretch sm:items-center w-full sm:w-auto">
                            <div className="relative group/cta w-full sm:w-auto">
                                {/* Ambient soft glow aura */}
                                <div
                                    className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#0057fe] to-[#38bdf8] opacity-35 blur-sm group-hover/cta:opacity-70 transition duration-300 -z-0"
                                    aria-hidden="true"
                                />
                                <Link
                                    href="/contact"
                                    className="relative w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#0057fe] hover:bg-[#0047d6] text-white text-sm font-bold font-outfit rounded-full transition-all duration-300 shadow-[0_4px_14px_rgba(0,87,254,0.35)] hover:shadow-[0_6px_25px_rgba(0,87,254,0.5)] overflow-hidden active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0057fe] z-10"
                                >
                                    {/* Glass-edge top rim light */}
                                    <span
                                        className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
                                        aria-hidden="true"
                                    />
                                    {/* Shimmer light sweep */}
                                    <span
                                        className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none animate-shimmer-sweep"
                                        aria-hidden="true"
                                    />
                                    <span className="relative z-10">Book Free Consultation</span>
                                    <FiArrowRight
                                        size={14}
                                        className="relative z-10 transition-transform duration-300 ease-out group-hover/cta:translate-x-1"
                                    />
                                </Link>
                            </div>

                            <Link
                                href="#services"
                                className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center px-7 py-3.5 bg-white text-slate-700 hover:text-slate-900 text-sm font-semibold font-outfit rounded-full border border-slate-200/90 hover:border-slate-300/90 hover:bg-slate-50 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0057fe]"
                            >
                                Our Services
                            </Link>
                        </div>

                        {/* Three Commitment Chips (No fake numbers/ratings) */}
                        {/* // VERIFY that I can keep each promise. */}
                        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-5 sm:pt-6 border-t border-slate-100 mt-6 sm:mt-7 w-full">
                            <div className="group/chip inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-50/90 hover:bg-white border border-slate-200/80 hover:border-[#0057fe]/35 text-[11px] sm:text-xs font-medium text-slate-700 hover:text-slate-900 shadow-xs hover:shadow-[0_4px_12px_rgba(0,87,254,0.08)] transition-all duration-200 hover:-translate-y-0.5 cursor-default select-none">
                                <FiClock className="text-[#0057fe] shrink-0 transition-transform duration-200 group-hover/chip:scale-110 group-hover/chip:rotate-[-6deg]" size={13} />
                                <span className="transition-colors duration-200 group-hover/chip:text-slate-900">Reply within 24 hours</span>
                            </div>
                            <div className="group/chip inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-50/90 hover:bg-white border border-slate-200/80 hover:border-[#0057fe]/35 text-[11px] sm:text-xs font-medium text-slate-700 hover:text-slate-900 shadow-xs hover:shadow-[0_4px_12px_rgba(0,87,254,0.08)] transition-all duration-200 hover:-translate-y-0.5 cursor-default select-none">
                                <FiCode className="text-[#0057fe] shrink-0 transition-transform duration-200 group-hover/chip:scale-110" size={13} />
                                <span className="transition-colors duration-200 group-hover/chip:text-slate-900">You own the source code</span>
                            </div>
                            <div className="group/chip inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-50/90 hover:bg-white border border-slate-200/80 hover:border-[#0057fe]/35 text-[11px] sm:text-xs font-medium text-slate-700 hover:text-slate-900 shadow-xs hover:shadow-[0_4px_12px_rgba(0,87,254,0.08)] transition-all duration-200 hover:-translate-y-0.5 cursor-default select-none">
                                <FiCheckCircle className="text-[#0057fe] shrink-0 transition-transform duration-200 group-hover/chip:scale-110 text-[#0057fe]" size={13} />
                                <span className="transition-colors duration-200 group-hover/chip:text-slate-900">Fixed-price quotes</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Business Journey Illustration (about 52%) */}
                    <div className="w-full flex flex-col items-center lg:items-end justify-center mt-8 lg:mt-0">
                        {/* Handwritten Note (keeps from overlapping on any screen size) */}
                        <div className="w-full flex justify-center lg:justify-end pr-0 lg:pr-2 mb-2 select-none">
                            <div className="group/note inline-flex items-center gap-1.5 rotate-[-2deg] hover:rotate-[-0.5deg] transition-transform duration-300 cursor-default max-w-full">
                                <span className={`${caveat.className} text-xl sm:text-2xl font-bold text-[#0057fe] tracking-wide text-center`}>
                                    a good website works while you sleep
                                </span>
                                <svg 
                                    className="w-4 h-4 sm:w-5 sm:h-5 text-[#0057fe] shrink-0 animate-arrow-nudge group-hover/note:translate-x-1 group-hover/note:-translate-y-1 transition-transform duration-300" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="2.2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                >
                                    <path d="M7 17l9.2-9.2M17 17V7H7" />
                                </svg>
                            </div>
                        </div>

                        {/* Transparent Business Journey Illustration (1641 x 887, max-w ~820px) */}
                        <div className="w-full flex justify-center lg:justify-end">
                            <Image
                                src="/images/nisschay-business-journey.webp"
                                alt="Nisschay business journey illustration: turning challenges into practical digital solutions"
                                width={1641}
                                height={887}
                                priority
                                className="w-full h-auto object-contain max-w-[820px] select-none pointer-events-none"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
