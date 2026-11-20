"use client";

import React from "react";
import Image from "next/image";
import {
    FiUsers,
    FiLayers,
    FiCalendar,
    FiCode,
    FiHeadphones,
} from "react-icons/fi";

interface BenefitCardItem {
    number: string;
    title: string;
    description: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
}

const BENEFIT_CARDS: BenefitCardItem[] = [
    {
        number: "01",
        title: "Work Directly with Your Development Team",
        description:
            "Collaborate with the people who plan, design and build your solution.",
        icon: FiUsers,
    },
    {
        number: "02",
        title: "Custom Software Built Around Your Business",
        description:
            "Solutions designed for your unique workflows, goals and long-term growth.",
        icon: FiLayers,
    },
    {
        number: "03",
        title: "Transparent Scope, Pricing & Timelines",
        description:
            "Know what's being built, how much it costs and when it will be delivered from day one.",
        icon: FiCalendar,
    },
    {
        number: "04",
        title: "Practical Web, Software & AI Solutions",
        description:
            "The right mix of modern technologies to solve real business problems.",
        icon: FiCode,
    },
    {
        number: "05",
        title: "Ongoing Technical Support & Improvements",
        description:
            "Get reliable support, updates and continuous enhancements as your business grows.",
        icon: FiHeadphones,
    },
];

export default function WhyChooseUsSection() {
    return (
        <section
            id="why-choose-us"
            className="relative w-full py-16 sm:py-20 lg:py-24 bg-transparent overflow-hidden"
            aria-label="Why Businesses Choose Nisschay"
        >
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Master Grid: Left Column (Intro + Building) & Right Column (5 Benefit Cards) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-stretch">
                    
                    {/* LEFT COLUMN: Eyebrow, Editorial Heading, Paragraph & Architectural Building */}
                    <div className="lg:col-span-5 flex flex-col justify-between">
                        <div>
                            {/* Eyebrow Label */}
                            <div className="inline-flex items-center gap-2 mb-3.5 sm:mb-4">
                                <span className="w-5 h-[2px] bg-[#0057fe]" aria-hidden="true" />
                                <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#000c24] uppercase">
                                    WHY BUSINESSES CHOOSE NISSCHAY
                                </span>
                            </div>

                            {/* Main Heading with Signature Nisschay Blue Highlight, Rays & Curved Underline */}
                            <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-black text-[#000c24] tracking-tight leading-[1.14] text-balance mb-4 sm:mb-5">
                                A Technology<br />
                                Partner for<br />
                                <span className="relative inline-block text-[#0057fe] whitespace-nowrap">
                                    Real Business
                                    {/* 3 Playful Rays at top right */}
                                    <svg
                                        className="absolute -top-3.5 -right-4 w-6 h-6 text-[#0057fe] pointer-events-none"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        aria-hidden="true"
                                    >
                                        <path d="M12 4 L14 1" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                                        <path d="M18 7 L22 4" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                                        <path d="M19 14 L23 14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                                    </svg>
                                    {/* Curved Underline Brush Stroke */}
                                    <svg
                                        className="absolute -bottom-1.5 sm:-bottom-2 left-0 w-full h-2.5 sm:h-3 text-[#0057fe] pointer-events-none"
                                        viewBox="0 0 160 12"
                                        fill="none"
                                        preserveAspectRatio="none"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M2 9C40 2 120 2 158 9"
                                            stroke="currentColor"
                                            strokeWidth="3.6"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </span>{" "}
                                Growth.
                            </h2>

                            {/* Supporting Paragraph */}
                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-md mb-6 lg:mb-8">
                                Nisschay combines web development, custom software engineering and AI-powered solutions with a practical, customer-focused approach.
                            </p>
                        </div>

                        {/* Architectural Brand Illustration with Oversized N Monogram Arch */}
                        <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-none mx-auto lg:mx-0 mt-4 lg:mt-auto pt-2 overflow-visible">
                            {/* Subtle Oversized N-Monogram Arch behind building */}
                            <div className="absolute -top-8 sm:-top-12 lg:-top-14 left-1/2 -translate-x-1/2 lg:left-10 lg:translate-x-0 w-52 sm:w-64 lg:w-72 h-48 sm:h-56 lg:h-64 pointer-events-none z-0">
                                <svg
                                    className="w-full h-full text-[#0057fe]"
                                    viewBox="0 0 340 280"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M 55,270 L 55,170 A 115,115 0 0,1 285,170 L 285,270"
                                        stroke="currentColor"
                                        strokeWidth="70"
                                        strokeLinecap="butt"
                                        opacity="0.10"
                                    />
                                </svg>
                            </div>

                            {/* Clean Architectural Building Cutout (Unconstrained & Transparent) */}
                            <div className="relative z-10 w-full">
                                <Image
                                    src="/nisschay-building-cutout.webp"
                                    alt="Nisschay modern glass architectural building"
                                    width={1774}
                                    height={887}
                                    className="w-full h-auto object-contain object-bottom select-none pointer-events-none drop-shadow-[0_10px_24px_rgba(7,20,47,0.06)]"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: 5 Benefit Cards Arranged in 2-over-3 Balanced Layout */}
                    <div className="lg:col-span-7 flex flex-col justify-between gap-5 sm:gap-6">
                        
                        {/* Top Row: 2 Cards (Card 01 & Card 02) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                            {BENEFIT_CARDS.slice(0, 2).map((card) => (
                                <BenefitCard key={card.number} card={card} />
                            ))}
                        </div>

                        {/* Bottom Row: 3 Cards (Card 03, Card 04 & Card 05) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                            {BENEFIT_CARDS.slice(2, 5).map((card) => (
                                <BenefitCard key={card.number} card={card} />
                            ))}
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

// =========================================================================
// INDIVIDUAL BENEFIT CARD COMPONENT
// Consistent warm-white card with soft natural shadow, subtle border, rounded corners
// =========================================================================
function BenefitCard({ card }: { card: BenefitCardItem }) {
    const Icon = card.icon;

    return (
        <article className="group relative flex flex-col justify-between w-full h-full min-h-[200px] sm:min-h-[215px] rounded-[22px] sm:rounded-[26px] p-5 sm:p-6 bg-[#FAF8F5] border border-[#EAE4DC] shadow-[0_4px_20px_rgba(7,20,47,0.03),0_1px_3px_rgba(7,20,47,0.02)] hover:-translate-y-1.5 hover:shadow-[0_12px_28px_-4px_rgba(0,87,254,0.10)] hover:border-[#0057fe]/30 transition-all duration-300">
            {/* Top Row: Icon Container on Left, Number Badge on Right */}
            <div className="relative z-10 flex items-center justify-between gap-3 mb-4 sm:mb-4.5">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-50/70 border border-blue-100/60 flex items-center justify-center text-[#0057fe] shrink-0 shadow-2xs group-hover:bg-[#0057fe] group-hover:text-white group-hover:scale-105 transition-all duration-300">
                    <Icon size={22} aria-hidden="true" />
                </div>
                <span className="font-mono font-bold text-xs tracking-wider px-2.5 py-0.5 rounded-full bg-[#EBF5FE] text-[#0057fe] border border-blue-100/60 shrink-0 select-none">
                    {card.number}
                </span>
            </div>

            {/* Middle: Title & Description */}
            <div className="relative z-10 flex-1">
                <h3 className="text-base sm:text-lg font-bold text-[#000c24] tracking-tight leading-snug mb-2 group-hover:text-[#0057fe] transition-colors">
                    {card.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-normal">
                    {card.description}
                </p>
            </div>
        </article>
    );
}
