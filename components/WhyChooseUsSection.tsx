"use client";

import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

interface WhyChooseItem {
    number: string;
    title: string;
    description: string;
    benefit: string;
    icon: React.ReactNode;
}

const items: WhyChooseItem[] = [
    {
        number: "01",
        title: "Direct access. No middlemen.",
        description: "Work directly with the people planning and building your solution.",
        benefit: "You always know who is handling your project.",
        icon: (
            <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-slate-800 transition-colors duration-300 group-hover:text-[#0057fe]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
        ),
    },
    {
        number: "02",
        title: "Built for your business, not a template.",
        description: "We understand your goals and recommend what you actually need.",
        benefit: "A solution that fits your needs and budget.",
        icon: (
            <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-slate-800 transition-colors duration-300 group-hover:text-[#0057fe]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
            </svg>
        ),
    },
    {
        number: "03",
        title: "Clear expectations from day one.",
        description: "Understand the scope, costs, timeline and deliverables before we start.",
        benefit: "Fewer surprises and better decisions.",
        icon: (
            <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-slate-800 transition-colors duration-300 group-hover:text-[#0057fe]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
                <path d="m9 16 2 2 4-4" />
            </svg>
        ),
    },
    {
        number: "04",
        title: "Technology that makes sense.",
        description: "We choose practical tools and build solutions that are easier to use and maintain.",
        benefit: "Less complexity. More useful technology.",
        icon: (
            <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-slate-800 transition-colors duration-300 group-hover:text-[#0057fe]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
                <line x1="14" y1="4" x2="10" y2="20" />
            </svg>
        ),
    },
    {
        number: "05",
        title: "Support doesn't end at launch.",
        description: "Get help with updates, improvements and ongoing technical needs.",
        benefit: "A partner to turn to as your business grows.",
        icon: (
            <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-slate-800 transition-colors duration-300 group-hover:text-[#0057fe]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
            </svg>
        ),
    },
];

export default function WhyChooseUsSection() {
    return (
        <section
            id="why-choose-us"
            className="relative w-full py-20 sm:py-24 lg:py-28 bg-transparent overflow-hidden"
        >
            <div className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header: Centered Eyebrow, Editorial Headline with Underline, and Supporting Text */}
                <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
                    {/* Eyebrow */}
                    <div className="inline-flex items-center justify-center gap-2.5 mb-4 sm:mb-5">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0057fe] opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0057fe]" />
                        </span>
                        <span className="w-6 h-[2px] bg-[#0057fe]/60" aria-hidden="true" />
                        <span className="text-xs font-mono font-bold tracking-[0.22em] text-[#0057fe] uppercase">
                            WHY CHOOSE NISSCHAY
                        </span>
                    </div>

                    {/* Headline */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-black text-[#000c24] tracking-tight leading-[1.14] font-display">
                        A{" "}
                        <span className="relative inline-block text-[#0057fe]">
                            better way
                            <svg
                                className="absolute -bottom-1 sm:-bottom-1.5 left-0 w-full h-[6px] sm:h-[7px] text-[#93c5fd] pointer-events-none"
                                viewBox="0 0 200 8"
                                fill="none"
                                preserveAspectRatio="none"
                                aria-hidden="true"
                            >
                                <path
                                    d="M 2 5.5 C 50 1.5, 150 1.5, 198 6.5"
                                    stroke="currentColor"
                                    strokeWidth="3.2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span>{" "}
                        to build your digital business.
                    </h2>

                    {/* Supporting Text */}
                    <p className="text-slate-600 text-base sm:text-lg lg:text-[18px] leading-relaxed font-normal mt-4 sm:mt-5 max-w-2xl mx-auto">
                        We believe good technology starts with understanding your business, making clear decisions and building solutions that work in the real world.
                    </p>
                </div>

                {/* Desktop & Tablet Timeline (sm and up) */}
                <div className="hidden sm:block relative w-full">
                    <div className="space-y-8 sm:space-y-10 lg:space-y-11">
                        {items.map((item, index) => {
                            const isFirst = index === 0;
                            const isLast = index === items.length - 1;
                            return (
                                <div
                                    key={item.number}
                                    className="group relative flex items-start gap-5 lg:gap-6 cursor-default"
                                >
                                    {/* Numbered Circle & Connecting Line Column */}
                                    <div className="relative shrink-0 w-12 flex items-center justify-center pt-1 self-stretch">
                                        {/* Vertical line segment to next item (terminates at last item 05) */}
                                        {!isLast && (
                                            <div
                                                className="absolute top-6 bottom-[-2.25rem] sm:bottom-[-2.75rem] lg:bottom-[-3rem] left-1/2 -translate-x-1/2 w-[2px] bg-blue-100/90 pointer-events-none -z-0"
                                                aria-hidden="true"
                                            />
                                        )}

                                        {/* Numbered Circle */}
                                        <div
                                            className={`relative z-10 w-11 h-11 rounded-full flex items-center justify-center select-none transition-all duration-300 ${
                                                isFirst
                                                    ? "bg-[#0057fe] text-white shadow-[0_2px_10px_rgba(0,87,254,0.35)] group-hover:shadow-[0_4px_14px_rgba(0,87,254,0.45)] group-hover:-translate-y-0.5"
                                                    : "bg-[#eff6ff] border border-blue-200/90 text-[#0057fe] shadow-2xs group-hover:bg-[#0057fe] group-hover:text-white group-hover:border-[#0057fe] group-hover:shadow-[0_4px_12px_rgba(0,87,254,0.3)] group-hover:-translate-y-0.5"
                                            }`}
                                        >
                                            <span
                                                className={`font-mono font-bold text-sm tracking-tight transition-colors duration-300 ${
                                                    isFirst ? "text-white" : "text-[#0057fe] group-hover:text-white"
                                                }`}
                                            >
                                                {item.number}
                                            </span>
                                        </div>

                                        {/* Connector ring halfway to next item with interactive highlight */}
                                        {!isLast && (
                                            <div
                                                className="absolute -bottom-4 sm:-bottom-5 lg:-bottom-5.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full border-2 border-blue-300 bg-white z-10 transition-all duration-300 group-hover:border-[#0057fe] group-hover:scale-125 group-hover:shadow-[0_0_8px_rgba(0,87,254,0.4)]"
                                                aria-hidden="true"
                                            />
                                        )}
                                    </div>

                                    {/* Line Icon Box with tactile lift & refined border glow */}
                                    <div className="shrink-0 w-13 h-13 rounded-2xl bg-white border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] flex items-center justify-center transition-all duration-300 group-hover:border-[#0057fe]/40 group-hover:bg-[#fafcff] group-hover:shadow-[0_8px_20px_rgba(0,87,254,0.12)] group-hover:-translate-y-1 group-hover:scale-[1.04]">
                                        <div className="transition-transform duration-300 group-hover:scale-110">
                                            {item.icon}
                                        </div>
                                    </div>

                                    {/* Content Block */}
                                    <div className="flex-1 pt-0.5">
                                        <h3 className="text-lg sm:text-[19px] lg:text-xl font-bold text-[#000c24] font-display tracking-tight leading-snug transition-colors duration-200 group-hover:text-[#0057fe]">
                                            {item.title}
                                        </h3>

                                        <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal mt-1 mb-2.5">
                                            {item.description}
                                        </p>

                                        {/* Customer Benefit Strip with clean scannable label and text */}
                                        <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 py-1.5 rounded-full bg-[#f0f6ff] border border-blue-100/90 shadow-2xs transition-all duration-300 group-hover:bg-[#e8f2ff] group-hover:border-blue-200/90 group-hover:shadow-xs">
                                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#0057fe]/10 text-[#0057fe] font-mono font-bold text-[10px] tracking-wider uppercase shrink-0 select-none group-hover:bg-[#0057fe] group-hover:text-white transition-colors duration-300">
                                                <span className="text-[10px] leading-none" aria-hidden="true">✦</span>
                                                <span>WHAT THIS MEANS FOR YOU:</span>
                                            </span>
                                            <span className="text-xs sm:text-[13px] text-slate-800 font-semibold group-hover:text-slate-900 transition-colors duration-300">
                                                {item.benefit}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Mobile Stacked Layout (below sm) with Clean Spacing & Subtle Dividers */}
                <div className="block sm:hidden space-y-6">
                    {items.map((item, index) => {
                        const isFirst = index === 0;
                        return (
                            <div
                                key={item.number}
                                className="relative flex items-start gap-3.5 pb-6 border-b border-slate-100 last:border-b-0 last:pb-0"
                            >
                                {/* Numbered Circle */}
                                <div className="shrink-0 pt-0.5">
                                    <div
                                        className={`w-9 h-9 rounded-full flex items-center justify-center select-none ${
                                            isFirst
                                                ? "bg-[#0057fe] text-white shadow-xs"
                                                : "bg-[#eff6ff] border border-blue-200/90 text-[#0057fe]"
                                        }`}
                                    >
                                        <span className="font-mono font-bold text-xs">
                                            {item.number}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Block */}
                                <div className="flex-1 space-y-2">
                                    <div className="flex items-center gap-2.5">
                                        <div className="shrink-0 w-8 h-8 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-center">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-[16px] font-bold text-[#000c24] font-display tracking-tight leading-snug">
                                            {item.title}
                                        </h3>
                                    </div>

                                    <p className="text-slate-600 text-sm leading-relaxed font-normal">
                                        {item.description}
                                    </p>

                                    {/* Customer Benefit Strip */}
                                    <div className="w-full rounded-xl bg-[#f0f6ff] border border-blue-100/90 p-2.5 flex flex-col gap-1">
                                        <span className="inline-flex items-center gap-1 self-start px-2 py-0.5 rounded-full bg-[#0057fe]/10 text-[#0057fe] font-mono font-bold text-[9px] tracking-wider uppercase select-none">
                                            <span className="text-[9px] leading-none" aria-hidden="true">✦</span>
                                            <span>WHAT THIS MEANS FOR YOU:</span>
                                        </span>
                                        <span className="text-xs text-slate-800 font-semibold leading-relaxed">
                                            {item.benefit}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA Banner with Centered Alignment & Consistent Width */}
                <div className="mt-14 sm:mt-18 lg:mt-20 w-full">
                    <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#000c24] via-[#001744] to-[#003ea8] p-7 sm:p-9 md:p-10 shadow-lg border border-blue-900/30">
                        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8">
                            {/* Left Text & Reassurance Commitments */}
                            <div className="max-w-xl space-y-2">
                                <span className="text-[11px] font-mono font-bold tracking-[0.22em] text-[#38bdf8] uppercase block">
                                    THE NEXT STEP
                                </span>
                                <h3 className="text-xl sm:text-2xl md:text-[26px] font-bold text-white font-display tracking-tight leading-snug">
                                    Your business deserves technology that works.
                                </h3>
                                <p className="text-slate-300 text-sm sm:text-[15px] font-normal leading-relaxed">
                                    Let&apos;s understand what you need and find a practical way forward.
                                </p>

                                {/* Micro-Trust Signals / Reassurance Points */}
                                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2.5 text-[11px] sm:text-xs font-mono text-slate-300">
                                    <span className="inline-flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                                        <span>No long sales pitches</span>
                                    </span>
                                    <span className="inline-flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span>Direct discussion with builders</span>
                                    </span>
                                    <span className="inline-flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                                        <span>Transparent pricing upfront</span>
                                    </span>
                                </div>
                            </div>

                            {/* Right Actions: Primary Start Project Button + Secondary Exploratory Link */}
                            <div className="shrink-0 flex flex-col items-start md:items-end gap-2.5">
                                <Link
                                    href="/contact"
                                    className="relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white hover:bg-slate-50 text-[#0057fe] font-bold text-sm sm:text-[15px] font-outfit rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.18)] hover:shadow-[0_6px_22px_rgba(0,87,254,0.3)] hover:scale-[1.02] active:scale-95 transition-all duration-200 group/btn select-none"
                                >
                                    <span>Start a Project</span>
                                    <FiArrowRight
                                        className="w-4 h-4 transition-transform duration-200 ease-out group-hover/btn:translate-x-1"
                                        aria-hidden="true"
                                    />
                                </Link>

                                <Link
                                    href="/services"
                                    className="inline-flex items-center gap-1 text-xs text-slate-300 hover:text-white font-medium transition-colors duration-200 pl-1 md:pl-0"
                                >
                                    <span>Or explore our services</span>
                                    <span aria-hidden="true">→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
