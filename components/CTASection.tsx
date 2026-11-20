"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import {
    LuCalendar,
    LuMessageSquare,
    LuLayers,
    LuRocket,
    LuShieldCheck,
} from "react-icons/lu";

export default function CTASection() {
    return (
        <section
            id="cta"
            className="relative w-full py-16 sm:py-20 lg:py-24 bg-transparent overflow-hidden select-none"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                {/* ============================================================
                    DESKTOP VIEW (lg+): Wide Landscape Physical Paper Sheet
                ============================================================ */}
                <div className="hidden lg:block relative w-full max-w-[1140px] xl:max-w-[1180px] mx-auto">
                    {/* Landscape Paper Canvas Container (2048x872 aspect ratio = ~2.348:1) */}
                    <div className="relative w-full aspect-[2048/872] overflow-visible">
                        {/* High-Resolution Paper Sheet Artwork with Transparent Background, Tapes, Grain & Curled Corner */}
                        <Image
                            src="/images/cta/nisschay_paper_cta_banner.webp"
                            alt="Nisschay physical paper banner"
                            fill
                            priority
                            unoptimized
                            className="object-contain pointer-events-none select-none"
                        />

                        {/* Live HTML Content Layer perfectly positioned on left half */}
                        <div className="absolute inset-0 z-10 grid grid-cols-12 h-full items-center">
                            <div className="col-span-7 flex flex-col justify-center pl-8 lg:pl-10 xl:pl-14 pr-2 py-6 lg:py-8 text-left max-w-[430px] xl:max-w-[500px]">
                                {/* Eyebrow - Matching Reference */}
                                <div className="inline-flex items-center gap-2 mb-2 xl:mb-3">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0057fe] opacity-75" />
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0057fe]" />
                                    </span>
                                    <span className="w-5 h-[2px] bg-[#0057fe]" aria-hidden="true" />
                                    <span className="text-[10px] xl:text-[11px] font-mono font-bold tracking-[0.22em] text-[#0057fe] uppercase">
                                        LET&apos;S BUILD TOGETHER
                                    </span>
                                </div>

                                {/* Main Heading with Signature Electric-Blue Underline */}
                                <h2 className="text-[26px] lg:text-[29px] xl:text-[36px] font-extrabold text-[#000c24] tracking-tight leading-[1.14] font-display mb-2 xl:mb-3">
                                    Build, Launch &amp; Grow{" "}
                                    <br />
                                    Your Business{" "}
                                    <span className="relative inline-block text-[#0057fe]">
                                        Online.
                                        <svg
                                            className="absolute -bottom-1 left-0 w-full h-[5px] xl:h-[6px] text-[#0057fe] pointer-events-none"
                                            viewBox="0 0 200 8"
                                            fill="none"
                                            preserveAspectRatio="none"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M 2 5.5 C 50 1.5, 150 1.5, 198 6.5"
                                                stroke="currentColor"
                                                strokeWidth="3.6"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </span>
                                </h2>

                                {/* Supporting Paragraph */}
                                <p className="text-slate-600 text-xs xl:text-[14px] leading-relaxed font-normal mb-4 xl:mb-5 max-w-[360px] xl:max-w-[440px]">
                                    Get expert guidance, the right technology, and a clear plan to turn your ideas into a scalable, real-world solution.
                                </p>

                                {/* Three Supporting Points */}
                                <div className="flex items-center gap-3.5 xl:gap-6 mb-5 xl:mb-6">
                                    {/* Point 1 */}
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 xl:w-7 xl:h-7 rounded-lg bg-blue-50/90 border border-blue-100/80 flex items-center justify-center text-[#0057fe] shrink-0 text-xs shadow-2xs">
                                            <LuMessageSquare className="w-3 xl:w-3.5 h-3 xl:h-3.5" />
                                        </div>
                                        <span className="text-[10px] xl:text-xs font-bold text-[#000c24] leading-tight">
                                            Discuss<br />Your Requirements
                                        </span>
                                    </div>
                                    {/* Point 2 */}
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 xl:w-7 xl:h-7 rounded-lg bg-blue-50/90 border border-blue-100/80 flex items-center justify-center text-[#0057fe] shrink-0 text-xs shadow-2xs">
                                            <LuLayers className="w-3 xl:w-3.5 h-3 xl:h-3.5" />
                                        </div>
                                        <span className="text-[10px] xl:text-xs font-bold text-[#000c24] leading-tight">
                                            Get a<br />Tailored Plan
                                        </span>
                                    </div>
                                    {/* Point 3 */}
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 xl:w-7 xl:h-7 rounded-lg bg-blue-50/90 border border-blue-100/80 flex items-center justify-center text-[#0057fe] shrink-0 text-xs shadow-2xs">
                                            <LuRocket className="w-3 xl:w-3.5 h-3 xl:h-3.5" />
                                        </div>
                                        <span className="text-[10px] xl:text-xs font-bold text-[#000c24] leading-tight">
                                            Launch<br />with Confidence
                                        </span>
                                    </div>
                                </div>

                                {/* CTA Action Buttons */}
                                <div className="flex items-center gap-3 xl:gap-3.5 mb-3.5 xl:mb-4">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center gap-2 px-5 xl:px-6 py-2.5 xl:py-3 bg-[#0057fe] hover:bg-[#0047d6] text-white font-bold font-outfit text-xs xl:text-sm rounded-full shadow-xs hover:shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 select-none group"
                                    >
                                        <LuCalendar className="w-3.5 xl:w-4 h-3.5 xl:h-4" />
                                        <span>Free Consultation</span>
                                        <FiArrowRight className="w-3 xl:w-3.5 h-3 xl:h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                                    </Link>

                                    <Link
                                        href="/services"
                                        className="inline-flex items-center justify-center px-4 xl:px-5 py-2.5 xl:py-3 bg-white/95 hover:bg-white text-[#000c24] hover:text-[#0057fe] font-bold font-outfit text-xs xl:text-sm rounded-full border border-slate-300/80 hover:border-[#0057fe]/40 shadow-2xs hover:shadow-xs transition-all duration-200 select-none"
                                    >
                                        <span>Explore Our Services</span>
                                    </Link>
                                </div>

                                {/* Reassurance Text */}
                                <div className="inline-flex items-center gap-1.5 xl:gap-2 text-[10px] xl:text-[11px] text-slate-500 font-medium select-none">
                                    <LuShieldCheck className="w-3 xl:w-3.5 h-3 xl:h-3.5 text-[#0057fe] shrink-0" />
                                    <span>No obligation</span>
                                    <span className="text-slate-300">|</span>
                                    <span>Expert advice</span>
                                    <span className="text-slate-300">|</span>
                                    <span>Solution fit for your business</span>
                                </div>
                            </div>

                            {/* Right side spacer (allows the high-res laptop illustration & floating cards to display) */}
                            <div className="col-span-5 h-full pointer-events-none" />
                        </div>
                    </div>
                </div>

                {/* ============================================================
                    MOBILE & TABLET VIEW (<lg): Fully Responsive Stacked Card
                ============================================================ */}
                <div className="lg:hidden relative w-full max-w-xl mx-auto">
                    {/* Paper Sheet Card with Soft Contact Shadow */}
                    <div className="relative w-full rounded-[28px] sm:rounded-[36px] bg-[#FAF8F5] border border-[#EAE4DC] shadow-[0_2px_10px_rgba(7,20,47,0.04),0_1px_3px_rgba(7,20,47,0.02)] p-6 sm:p-9 overflow-hidden">
                        {/* Realistic Paper Texture Overlay */}
                        <div
                            className="absolute inset-0 pointer-events-none opacity-[0.09] mix-blend-multiply"
                            style={{
                                backgroundImage: "url('/images/cta/paper_fiber_texture.webp')",
                                backgroundRepeat: "repeat",
                                backgroundSize: "280px 280px",
                            }}
                            aria-hidden="true"
                        />
                        {/* Realistic Translucent Masking Tape: Top-Left */}
                        <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-20 sm:w-24 pointer-events-none z-20">
                            <Image
                                src="/images/cta/cta_tape_left.webp"
                                alt=""
                                width={120}
                                height={100}
                                className="w-full h-auto object-contain select-none"
                            />
                        </div>

                        {/* Realistic Translucent Masking Tape: Top-Right */}
                        <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-20 sm:w-24 pointer-events-none z-20">
                            <Image
                                src="/images/cta/cta_tape_right.webp"
                                alt=""
                                width={120}
                                height={100}
                                className="w-full h-auto object-contain select-none"
                            />
                        </div>

                        {/* Realistic Curled Blue Paper Corner: Bottom-Right */}
                        <div className="absolute -bottom-1 -right-1 w-24 sm:w-32 pointer-events-none z-10">
                            <Image
                                src="/images/cta/cta_corner_curl.webp"
                                alt=""
                                width={180}
                                height={150}
                                className="w-full h-auto object-contain select-none"
                            />
                        </div>

                        {/* Stacked Content */}
                        <div className="relative z-10 flex flex-col items-start text-left">
                            {/* Eyebrow */}
                            <div className="inline-flex items-center gap-2 mb-3">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0057fe] opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0057fe]" />
                                </span>
                                <span className="w-5 h-[2px] bg-[#0057fe]" aria-hidden="true" />
                                <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.22em] text-[#0057fe] uppercase">
                                    LET&apos;S BUILD TOGETHER
                                </span>
                            </div>

                            {/* Headline */}
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#000c24] tracking-tight leading-[1.16] font-display mb-3">
                                Build, Launch &amp; Grow{" "}
                                <br />
                                Your Business{" "}
                                <span className="relative inline-block text-[#0057fe]">
                                    Online.
                                    <svg
                                        className="absolute -bottom-1 left-0 w-full h-[5px] text-[#0057fe] pointer-events-none"
                                        viewBox="0 0 200 8"
                                        fill="none"
                                        preserveAspectRatio="none"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M 2 5.5 C 50 1.5, 150 1.5, 198 6.5"
                                            stroke="currentColor"
                                            strokeWidth="3.6"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </span>
                            </h2>

                            {/* Supporting Paragraph */}
                            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal mb-5">
                                Get expert guidance, the right technology, and a clear plan to turn your ideas into a scalable, real-world solution.
                            </p>

                            {/* Three Supporting Points */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mb-6">
                                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/80 border border-[#EAE4DC]/80 shadow-2xs">
                                    <div className="w-7 h-7 rounded-lg bg-blue-50/90 border border-blue-100/80 flex items-center justify-center text-[#0057fe] shrink-0 text-xs shadow-2xs">
                                        <LuMessageSquare className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="text-xs font-bold text-[#000c24] leading-tight">
                                        Discuss Your Requirements
                                    </span>
                                </div>
                                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/80 border border-[#EAE4DC]/80 shadow-2xs">
                                    <div className="w-7 h-7 rounded-lg bg-blue-50/90 border border-blue-100/80 flex items-center justify-center text-[#0057fe] shrink-0 text-xs shadow-2xs">
                                        <LuLayers className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="text-xs font-bold text-[#000c24] leading-tight">
                                        Get a Tailored Plan
                                    </span>
                                </div>
                                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/80 border border-[#EAE4DC]/80 shadow-2xs">
                                    <div className="w-7 h-7 rounded-lg bg-blue-50/90 border border-blue-100/80 flex items-center justify-center text-[#0057fe] shrink-0 text-xs shadow-2xs">
                                        <LuRocket className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="text-xs font-bold text-[#000c24] leading-tight">
                                        Launch with Confidence
                                    </span>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full mb-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0057fe] hover:bg-[#0047d6] text-white font-bold font-outfit text-sm rounded-full shadow-xs active:scale-[0.98] transition-all duration-200 select-none group text-center"
                                >
                                    <LuCalendar className="w-4 h-4" />
                                    <span>Free Consultation</span>
                                    <FiArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                                </Link>

                                <Link
                                    href="/services"
                                    className="inline-flex items-center justify-center px-5 py-3.5 bg-white hover:bg-slate-50 text-[#000c24] hover:text-[#0057fe] font-bold font-outfit text-sm rounded-full border border-slate-300/80 shadow-2xs transition-all duration-200 select-none text-center"
                                >
                                    <span>Explore Our Services</span>
                                </Link>
                            </div>

                            {/* Reassurance Commitments */}
                            <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-500 font-medium select-none mb-6">
                                <LuShieldCheck className="w-3.5 h-3.5 text-[#0057fe] shrink-0" />
                                <span>No obligation</span>
                                <span className="text-slate-300">|</span>
                                <span>Expert advice</span>
                                <span className="text-slate-300">|</span>
                                <span>Solution fit for your business</span>
                            </div>

                            {/* Technology Laptop Illustration */}
                            <div className="w-full flex justify-center pt-2">
                                <Image
                                    src="/images/cta/cta_laptop_art.webp"
                                    alt="Nisschay digital technology illustration"
                                    width={500}
                                    height={380}
                                    className="w-full max-w-[340px] sm:max-w-[400px] h-auto object-contain select-none"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
