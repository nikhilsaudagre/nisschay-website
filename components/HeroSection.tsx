"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Caveat } from "next/font/google";
import { motion } from "framer-motion";
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
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-24 pb-8 lg:pb-10 bg-white"
        >
            {/* Drifting Background Gradients */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-40">
                <div className="absolute -top-10 -left-10 w-96 h-96 bg-blue-100/35 rounded-full filter blur-[100px] animate-pulse" style={{ animationDuration: "8s" }} />
                <div className="absolute top-1/4 -right-10 w-80 h-80 bg-indigo-100/25 rounded-full filter blur-[100px] animate-pulse" style={{ animationDuration: "12s" }} />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto pl-6 pr-5 sm:pl-12 sm:pr-8 lg:pl-14 lg:pr-12 py-4 lg:py-8">
                <div className="grid grid-cols-1 lg:grid-cols-[53%_1fr] gap-8 lg:gap-10 xl:gap-12 items-center">
                    
                    {/* Left Column: Copy & Actions (about 53%) */}
                    <div className="w-full flex flex-col items-start text-left justify-center">
                        {/* Pre-title Plain Category Label */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-700 bg-slate-100/90 border border-slate-200/80 px-3.5 py-1.5 rounded-full select-none mb-5"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0057fe]" />
                            <span>IT Services &amp; Digital Marketing</span>
                        </motion.div>

                        {/* Title: single H1 on page, navy text, accent only on 'move your business forward.' */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-balance leading-[1.14] mb-5 font-black tracking-tight text-[#000c24] font-display text-[clamp(1.65rem,1.15vw+0.95rem,2.45rem)] w-full max-w-none"
                        >
                            Technology and digital solutions<br className="hidden md:block" />{" "}
                            that{" "}
                            <span className="text-[#0057fe]">
                                move your business forward.
                            </span>
                        </motion.h1>

                        {/* Subline: 60-65 characters per line, WCAG AA contrast */}
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-slate-600 mb-6 leading-relaxed font-normal text-base sm:text-lg max-w-[580px]"
                        >
                            From custom software and websites to intelligent automation and digital marketing, we help businesses turn challenges into practical digital solutions.
                        </motion.p>

                        {/* Buttons: Primary "Book Free Consultation" & Quieter Secondary "Our Services" (full-width stacked on mobile) */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 items-stretch sm:items-center w-full sm:w-auto"
                        >
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#0057fe] hover:bg-[#0047d6] text-white text-sm font-bold font-outfit rounded-full transition-all duration-200 shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0057fe] active:scale-95"
                            >
                                <span>Book Free Consultation</span>
                                <FiArrowRight size={14} />
                            </Link>
                            <Link
                                href="#services"
                                className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center px-7 py-3.5 bg-white text-slate-700 hover:text-slate-900 text-sm font-semibold font-outfit rounded-full border border-slate-200/90 hover:bg-slate-50 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0057fe] active:scale-95 shadow-xs"
                            >
                                Our Services
                            </Link>
                        </motion.div>

                        {/* Three Commitment Chips (No fake numbers/ratings) */}
                        {/* // VERIFY that I can keep each promise. */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-5 sm:pt-6 border-t border-slate-100 mt-6 sm:mt-7 w-full"
                        >
                            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 text-[11px] sm:text-xs font-medium text-slate-700 select-none">
                                <FiClock className="text-[#0057fe] shrink-0" size={13} />
                                <span>Reply within 24 hours</span>
                            </div>
                            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 text-[11px] sm:text-xs font-medium text-slate-700 select-none">
                                <FiCode className="text-[#0057fe] shrink-0" size={13} />
                                <span>You own the source code</span>
                            </div>
                            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 text-[11px] sm:text-xs font-medium text-slate-700 select-none">
                                <FiCheckCircle className="text-[#0057fe] shrink-0" size={13} />
                                <span>Fixed-price quotes</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Business Journey Illustration (about 52%) */}
                    <div className="w-full flex flex-col items-center lg:items-end justify-center mt-8 lg:mt-0">
                        {/* Handwritten Note (keeps from overlapping on any screen size) */}
                        <div className="w-full flex justify-center lg:justify-end pr-0 lg:pr-2 mb-2 select-none">
                            <div className="inline-flex items-center gap-1.5 rotate-[-2deg] max-w-full">
                                <span className={`${caveat.className} text-xl sm:text-2xl font-bold text-[#0057fe] tracking-wide text-center`}>
                                    a good website works while you sleep
                                </span>
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#0057fe] translate-y-1 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
