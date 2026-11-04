"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowRight, FiUsers, FiTarget } from "react-icons/fi";

export default function MeetNisschaySection() {
    const shouldReduceMotion = useReducedMotion();

    const animFadeUp = shouldReduceMotion
        ? {}
        : {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-40px" },
            transition: { duration: 0.5, ease: "easeOut" as const },
        };

    return (
        <section
            id="meet-nisschay"
            className="relative w-full overflow-x-clip bg-white py-14 sm:py-18 lg:py-24"
        >
            {/* Same container as Navbar and Hero */}
            <div className="relative z-10 w-full max-w-7xl mx-auto pl-6 pr-5 sm:pl-12 sm:pr-8 lg:pl-14 lg:pr-12 space-y-12 sm:space-y-16 lg:space-y-20">

                {/* ========================================================
                    PART 1: MAIN INTRODUCTION (Two-Column Layout)
                ======================================================== */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                    
                    {/* Left Column: Eyebrow, Heading, Description */}
                    <motion.div 
                        {...animFadeUp}
                        className="lg:col-span-6 space-y-5"
                    >
                        <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#eef4ff] text-xs font-mono font-bold tracking-wider text-[#0057fe] uppercase">
                            MEET NISSCHAY
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black text-[#000c24] tracking-tight leading-[1.12] text-balance">
                            A small studio for<br />
                            building{" "}
                            <span className="text-[#0057fe] relative inline-block whitespace-nowrap">
                                what&apos;s next.
                                <svg
                                    className="absolute -bottom-1 sm:-bottom-1.5 left-0 w-full h-2.5 text-[#0057fe]"
                                    viewBox="0 0 160 12"
                                    fill="none"
                                    preserveAspectRatio="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M2 9C40 2 120 2 158 9"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </span>
                        </h2>

                        <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-lg font-normal pt-1">
                            We bring software development, AI, and digital marketing together to help businesses build, improve, and grow their digital presence.
                        </p>
                    </motion.div>

                    {/* Right Column: Build, Automate & Grow Illustration */}
                    <motion.div 
                        {...animFadeUp}
                        className="lg:col-span-6 flex items-center justify-center lg:justify-end"
                    >
                        <div className="relative w-full max-w-[540px] flex items-center justify-center">
                            <Image
                                src="/nisschay-build-automate-grow.webp"
                                alt="Nisschay Build, Automate, and Grow capabilities illustration"
                                width={1536}
                                height={1024}
                                priority
                                className="w-full h-auto object-contain drop-shadow-sm select-none"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 540px"
                            />
                        </div>
                    </motion.div>

                </div>


                {/* ========================================================
                    PART 2: THREE COMPANY PRINCIPLES (Horizontal Row)
                ======================================================== */}
                <div className="border-t border-slate-200/80 pt-10 sm:pt-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200/80 gap-8 md:gap-0">
                        
                        {/* Principle 1: Build with care */}
                        <div className="md:pr-6 lg:pr-8 flex items-start gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-[#eef4ff] border border-blue-100/70 flex items-center justify-center shrink-0">
                                <span className="font-mono font-bold text-base text-[#0057fe] tracking-tighter">
                                    &lt;/&gt;
                                </span>
                            </div>
                            <div className="space-y-1.5">
                                <h3 className="text-base sm:text-lg font-bold text-[#000c24] tracking-tight leading-snug">
                                    Build with care
                                </h3>
                                <p className="text-sm text-slate-500 leading-relaxed font-normal">
                                    Thoughtful engineering and clean, reliable solutions.
                                </p>
                            </div>
                        </div>

                        {/* Principle 2: Work directly with the people doing the work */}
                        <div className="pt-8 md:pt-0 md:px-6 lg:px-8 flex items-start gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-[#eef4ff] border border-blue-100/70 flex items-center justify-center shrink-0 text-[#0057fe]">
                                <FiUsers className="w-5 h-5" />
                            </div>
                            <div className="space-y-1.5">
                                <h3 className="text-base sm:text-lg font-bold text-[#000c24] tracking-tight leading-snug">
                                    Work directly with the people doing the work
                                </h3>
                                <p className="text-sm text-slate-500 leading-relaxed font-normal">
                                    Clear communication, faster decisions and real ownership.
                                </p>
                            </div>
                        </div>

                        {/* Principle 3: Stay focused on the outcome */}
                        <div className="pt-8 md:pt-0 md:pl-6 lg:pl-8 flex items-start gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-[#eef4ff] border border-blue-100/70 flex items-center justify-center shrink-0 text-[#0057fe]">
                                <FiTarget className="w-5 h-5" />
                            </div>
                            <div className="space-y-1.5">
                                <h3 className="text-base sm:text-lg font-bold text-[#000c24] tracking-tight leading-snug">
                                    Stay focused on the outcome
                                </h3>
                                <p className="text-sm text-slate-500 leading-relaxed font-normal">
                                    Practical solutions that create real business value.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>


                {/* ========================================================
                    PART 3: ABOUT US CTA BANNER (Wide Pale-Blue Banner)
                ======================================================== */}
                <div className="p-6 sm:p-8 lg:px-9 lg:py-6 rounded-3xl bg-[#f0f6ff] border border-[#dbe8fd] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
                    
                    {/* Left & Middle Block */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-4 sm:gap-6 text-center sm:text-left flex-1">
                        
                        {/* Nisschay Arch Logo Badge */}
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white shadow-xs border border-blue-100/80 flex items-center justify-center p-3 shrink-0">
                            <Image
                                src="/logo-mark.png"
                                alt="Nisschay Logo"
                                width={48}
                                height={48}
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* Thin Vertical Divider */}
                        <div className="hidden sm:block w-px h-10 bg-blue-200/80 shrink-0" />

                        {/* Text Content */}
                        <div className="space-y-1">
                            <h4 className="text-base sm:text-lg lg:text-xl font-bold text-[#000c24] tracking-tight">
                                Want to know the people and thinking behind the work?
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-600 font-normal">
                                Learn more about our story, approach and the principles that guide Nisschay.
                            </p>
                        </div>

                    </div>

                    {/* Right Side: CTA Button */}
                    <Link
                        href="/about"
                        className="w-full sm:w-auto shrink-0 min-h-[46px] inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0057fe] hover:bg-[#0047d6] text-white text-sm sm:text-base font-bold font-outfit rounded-full transition-all duration-200 shadow-sm hover:shadow-md active:scale-95"
                    >
                        <span>Explore About Us</span>
                        <FiArrowRight size={15} />
                    </Link>

                </div>

            </div>
        </section>
    );
}
