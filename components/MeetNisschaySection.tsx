"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCode, FiUsers, FiTrendingUp } from "react-icons/fi";

export default function MeetNisschaySection() {
    const cards = [
        {
            number: "01",
            title: "Build with care",
            description: "We create reliable solutions that are easy to use and built to last.",
            icon: FiCode,
        },
        {
            number: "02",
            title: "Work closely with you",
            description: "You speak directly with the people building your project. No unnecessary middlemen.",
            icon: FiUsers,
        },
        {
            number: "03",
            title: "Focus on what matters",
            description: "We solve real problems and help your business move forward.",
            icon: FiTrendingUp,
        },
    ];

    return (
        <section id="meet-nisschay" className="relative w-full overflow-x-clip bg-transparent">
            {/* ========================================================
                CHAPTER 1: WHITE EDITORIAL INTRODUCTION
            ======================================================== */}
            <div className="relative w-full bg-transparent pt-14 sm:pt-18 lg:pt-24 pb-4 sm:pb-6 lg:pb-0">
                <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-end">
                        
                        {/* Left Column: Eyebrow, Large Editorial Headline & Intro (UNTOUCHED TYPOGRAPHY) */}
                        <div className="lg:col-span-7 xl:col-span-7 space-y-5 sm:space-y-6 lg:pb-16">
                            {/* Eyebrow with active pulse radar indicator */}
                            <div className="flex items-center gap-2.5">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0057fe] opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0057fe]" />
                                </span>
                                <span className="w-6 h-[2px] bg-[#0057fe]/60" aria-hidden="true" />
                                <span className="text-xs font-mono font-bold tracking-[0.22em] text-[#0057fe] uppercase">
                                    INSIDE NISSCHAY
                                </span>
                            </div>

                            {/* Headline */}
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black text-[#000c24] tracking-tight leading-[1.1] text-balance">
                                A small studio that<br />
                                builds with{" "}
                                <span className="text-[#0057fe] relative inline-block whitespace-nowrap">
                                    purpose.
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
                                            strokeWidth="3.5"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </span>
                            </h2>

                            {/* Introduction copy */}
                            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal pt-1">
                                We build websites and software, use AI to make work easier, and help businesses grow online. We listen to your needs, find the right solution and make sure it works in everyday business.
                            </p>
                        </div>

                        {/* Right Column: Character Visual (Rendered height reduced ~15–20% on desktop) */}
                        <div className="lg:col-span-5 xl:col-span-5 relative flex items-end justify-center lg:justify-end">
                            {/* Organic soft blue backdrop glow behind character with breathing pulse */}
                            <div
                                className="absolute -right-4 top-1/2 -translate-y-1/2 w-[260px] sm:w-[320px] lg:w-[360px] h-[260px] sm:h-[320px] lg:h-[360px] bg-gradient-to-br from-blue-100/70 via-[#e0efff]/50 to-transparent rounded-full blur-3xl -z-10 pointer-events-none animate-pulse"
                                style={{ animationDuration: "6s" }}
                                aria-hidden="true"
                            />

                            {/* Playful blue spark near character's head with twinkle animation */}
                            <div
                                className="absolute top-6 sm:top-8 right-6 sm:right-8 text-[#0057fe] select-none pointer-events-none animate-sparkle"
                                aria-hidden="true"
                            >
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                    <line x1="6" y1="12" x2="1" y2="12" />
                                    <line x1="8" y1="5" x2="3" y2="2" />
                                    <line x1="15" y1="4" x2="14" y2="1" />
                                </svg>
                            </div>

                            {/* Developer character image — Aligned to bottom edge with no empty gap */}
                            <div className="relative w-full max-w-[240px] sm:max-w-[275px] lg:max-w-[305px] xl:max-w-[315px] flex items-end justify-center translate-y-7 sm:translate-y-9 lg:translate-y-[48px]">
                                <Image
                                    src="/Nisschay-Confident-Developer-Transparent.webp"
                                    alt="Nisschay confident developer"
                                    width={661}
                                    height={1024}
                                    priority
                                    className="w-full h-auto object-contain object-bottom select-none"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 315px"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* ========================================================
                CHAPTER 2: BRAND IDENTITY & PHILOSOPHY ("How We Work")
                Unified soft off-white background matching Hero & site theme
            ======================================================== */}
            <div className="relative w-full bg-transparent text-[#000c24] pt-10 sm:pt-14 lg:pt-18 pb-20 sm:pb-24 lg:pb-28">
                
                <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14 space-y-10 sm:space-y-12 lg:space-y-14">

                    {/* Top Row: Brand Mark + Divider + How we work */}
                    <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
                        {/* Left: Nisschay Brand Mark */}
                        <div className="flex items-center gap-4 shrink-0">
                            <div className="w-12 h-12 flex items-center justify-center shrink-0">
                                <Image
                                    src="/logo-mark.png"
                                    alt="Nisschay Logo"
                                    width={48}
                                    height={48}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="space-y-0.5">
                                <span className="block text-2xl font-black text-[#000c24] tracking-tight">
                                    Nisschay
                                </span>
                                <span className="block text-xs text-slate-500 font-medium">
                                    Engineering &amp; Digital Solutions
                                </span>
                            </div>
                        </div>

                        {/* Thin Vertical Divider (Desktop) */}
                        <div className="hidden lg:block w-px h-12 bg-blue-200/70 shrink-0" aria-hidden="true" />

                        {/* Right: How we work + Description */}
                        <div className="space-y-2 max-w-2xl">
                            <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#000c24] tracking-tight leading-snug">
                                How we{" "}
                                <span className="relative inline-block whitespace-nowrap">
                                    work
                                    <svg
                                        className="absolute -bottom-1 left-0 w-full h-2 text-[#0057fe]"
                                        viewBox="0 0 80 8"
                                        fill="none"
                                        preserveAspectRatio="none"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M2 6C25 2 55 2 78 6"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </span>
                            </h3>

                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                                We believe good work starts with understanding people. We keep things clear, work closely with our clients and focus on solutions that make a real difference.
                            </p>
                        </div>
                    </div>

                    {/* Approved Minimal Numbered Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 items-stretch">
                        {cards.map((card) => {
                            const IconComponent = card.icon;
                            return (
                                <div
                                    key={card.number}
                                    className="group relative h-full bg-white rounded-2xl p-4.5 sm:p-6 lg:p-7 border border-slate-200/80 hover:border-blue-200/90 shadow-[0_2px_8px_rgba(0,12,36,0.03),0_6px_20px_-4px_rgba(0,87,254,0.06)] hover:shadow-[0_8px_24px_rgba(0,87,254,0.12),0_4px_10px_rgba(0,12,36,0.05)] transition-all duration-300 ease-out hover:-translate-y-1.5 active:translate-y-0 active:scale-[0.99] flex flex-col justify-between overflow-hidden"
                                >
                                    {/* Restrained blue accent along the bottom edge */}
                                    <div 
                                        className="absolute bottom-0 inset-x-0 h-[2.5px] bg-[#0057fe]/35 group-hover:bg-[#0057fe] transition-colors duration-300 rounded-b-2xl pointer-events-none" 
                                        aria-hidden="true" 
                                    />

                                    <div className="flex items-center gap-3.5 sm:gap-5 lg:gap-6 w-full h-full">
                                        {/* Large, elegant navy number */}
                                        <div className="shrink-0 flex items-center justify-center">
                                            <span
                                                className="text-[32px] sm:text-[40px] lg:text-[46px] xl:text-[48px] font-bold text-[#000c24] select-none tracking-tight leading-none"
                                                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                                            >
                                                {card.number}
                                            </span>
                                        </div>

                                        {/* Thin vertical blue divider */}
                                        <div 
                                            className="w-[1.5px] self-stretch my-1 sm:my-2 bg-[#0057fe]/25 group-hover:bg-[#0057fe]/45 transition-colors duration-300 shrink-0 rounded-full" 
                                            aria-hidden="true" 
                                        />

                                        {/* Content area: Icon + Bold navy heading + Clean description */}
                                        <div className="flex-1 min-w-0 flex flex-col justify-center">
                                            {/* Small, simple Nisschay-blue line icon */}
                                            <div className="mb-1.5 sm:mb-2.5">
                                                <IconComponent 
                                                    className="w-4.5 h-4.5 sm:w-5 sm:h-5 lg:w-5.5 lg:h-5.5 text-[#0057fe] transition-transform duration-300 group-hover:scale-110" 
                                                    strokeWidth={2.2}
                                                />
                                            </div>

                                            {/* Bold navy heading */}
                                            <h4 className="text-[15px] sm:text-base lg:text-[18px] font-bold text-[#000c24] tracking-tight leading-snug">
                                                {card.title}
                                            </h4>

                                            {/* Clean, readable description */}
                                            <p className="text-[11.5px] sm:text-xs lg:text-[13.5px] text-slate-600 font-normal leading-relaxed mt-1 sm:mt-1.5">
                                                {card.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Explore About Us CTA Button with Ambient Glow & Shimmer */}
                    <div className="pt-1">
                        <div className="relative group/cta inline-flex">
                            {/* Ambient soft glow aura */}
                            <div
                                className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#0057fe] to-[#38bdf8] opacity-35 blur-sm group-hover/cta:opacity-70 transition duration-300 -z-0"
                                aria-hidden="true"
                            />
                            <Link
                                href="/about"
                                className="relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#0057fe] hover:bg-[#0047d6] text-white text-sm font-bold font-outfit rounded-full transition-all duration-300 shadow-[0_4px_14px_rgba(0,87,254,0.35)] hover:shadow-[0_6px_25px_rgba(0,87,254,0.5)] overflow-hidden active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0057fe] z-10"
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
                                <span className="relative z-10">Explore About Us</span>
                                <FiArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 ease-out group-hover/cta:translate-x-1" />
                            </Link>
                        </div>
                    </div>

                </div>

                {/* Overlapping Blue Statement Strip (Pill Shape with subtle shadow & shimmer) */}
                <div className="absolute left-0 bottom-0 translate-y-1/2 z-20 w-full pointer-events-none">
                    <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14 flex justify-center">
                        <div className="relative overflow-hidden pointer-events-auto inline-flex items-center gap-2.5 px-6 sm:px-8 py-2.5 sm:py-3 bg-[#0057fe] text-white rounded-full text-xs sm:text-sm font-medium tracking-wide shadow-[0_8px_25px_rgba(0,87,254,0.28)] border border-blue-400/30 hover:shadow-[0_10px_30px_rgba(0,87,254,0.38)] transition-all duration-300 select-none">
                            {/* Delicate shimmer sweep across statement pill */}
                            <span
                                className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none animate-shimmer-sweep"
                                aria-hidden="true"
                            />
                            {/* Live pulsing white dot indicator */}
                            <span className="relative flex h-2 w-2 shrink-0">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                            </span>
                            <span className="relative z-10">At Nisschay, we keep technology simple, useful and built for real people.</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
