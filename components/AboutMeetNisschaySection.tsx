"use client";

import React from "react";
import { LuTarget, LuLayers, LuTrendingUp } from "react-icons/lu";

interface AboutMeetNisschaySectionProps {
    className?: string;
    isEmbedded?: boolean;
}

export default function AboutMeetNisschaySection({ className = "", isEmbedded = false }: AboutMeetNisschaySectionProps) {
    // Three Process Cards
    const processCards = [
        {
            id: "understand",
            title: "Understand",
            description: "Know your business, goals and the real problem to solve.",
            icon: LuTarget,
        },
        {
            id: "build",
            title: "Build",
            description: "Design and develop the right solution using the best-fit technology.",
            icon: LuLayers,
        },
        {
            id: "grow",
            title: "Grow",
            description: "Launch, support and improve your solution as your business evolves.",
            icon: LuTrendingUp,
        },
    ];

    return (
        <section 
            id="meet-nisschay" 
            className={`relative w-full ${isEmbedded ? "py-2 sm:py-4" : "py-16 sm:py-20 lg:py-24"} bg-transparent select-none ${className}`}
        >
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
                
                {/* ========================================================
                    ONE LARGE OUTER CONTAINER CARD
                    Wraps the entire Meet Nisschay section in a warm off-white card
                ======================================================== */}
                <div className="relative w-full rounded-[28px] sm:rounded-[36px] lg:rounded-[40px] bg-gradient-to-b from-[#FFFFFF] via-[#FAF9F5] to-[#F7F6F0] border border-slate-200/85 shadow-[0_16px_48px_rgba(7,20,47,0.045),0_2px_8px_rgba(7,20,47,0.02)] p-6 sm:p-10 md:p-12 lg:p-16 xl:p-18 overflow-hidden">
                    
                    {/* Top specular highlight rim (subtle light reflection) */}
                    <span 
                        className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none rounded-t-[40px]" 
                        aria-hidden="true" 
                    />

                    {/* Centered Content Stack */}
                    <div className="relative z-10 flex flex-col items-center text-center">
                        
                        {/* 1. Eyebrow Label with Dual Electric-Blue Lines */}
                        <div className="inline-flex items-center justify-center gap-2.5 mb-3.5 sm:mb-4">
                            <span className="w-5 sm:w-6 h-[2px] bg-[#0057fe]" aria-hidden="true" />
                            <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.22em] text-[#0057fe] uppercase">
                                MEET NISSCHAY
                            </span>
                            <span className="w-5 sm:w-6 h-[2px] bg-[#0057fe]" aria-hidden="true" />
                        </div>

                        {/* 2. Main Heading with Electric-Blue Underline Arc under 'growing businesses.' */}
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-black tracking-tight leading-[1.14] font-display font-[family-name:var(--font-outfit)] text-center mb-5 sm:mb-6">
                            <span className="block text-[#000c24]">
                                A technology partner for
                            </span>
                            <span className="relative inline-block text-[#0057fe] mt-1 sm:mt-1.5 whitespace-nowrap">
                                growing businesses.
                                <svg
                                    className="absolute -bottom-1.5 sm:-bottom-2 left-0 w-full h-[8px] sm:h-[11px] text-[#0057fe] pointer-events-none"
                                    viewBox="0 0 320 14"
                                    fill="none"
                                    preserveAspectRatio="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M 4 10 C 90 2.5, 230 2.5, 316 9"
                                        stroke="currentColor"
                                        strokeWidth="3.8"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </span>
                        </h2>

                        {/* 3. Description Paragraph 1 */}
                        <p className="text-slate-600 sm:text-slate-700 font-sans font-[family-name:var(--font-inter)] text-sm sm:text-base md:text-[16px] leading-relaxed font-normal max-w-3xl mx-auto text-center mb-3.5 sm:mb-4">
                            Nisschay is a digital solutions company that uses modern engineering and AI to solve real business challenges and create practical, scalable solutions.
                        </p>

                        {/* 4. Description Paragraph 2 */}
                        <p className="text-slate-600 sm:text-slate-700 font-sans font-[family-name:var(--font-inter)] text-sm sm:text-base md:text-[16px] leading-relaxed font-normal max-w-3xl mx-auto text-center mb-10 sm:mb-12 lg:mb-14">
                            We build websites, custom applications, backend systems and AI-powered solutions. By combining the right technologies with a clear understanding of business needs, we simplify workflows, connect systems and help businesses operate more efficiently and grow with confidence.
                        </p>

                        {/* 5. Three Process Cards in One Row (Desktop) / Vertically Stacked (Mobile) */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4.5 sm:gap-5 lg:gap-6 w-full max-w-5xl mx-auto items-stretch">
                            {processCards.map((card) => {
                                const IconComponent = card.icon;
                                return (
                                    <div
                                        key={card.id}
                                        className="group relative flex items-start text-left gap-4 sm:gap-4.5 p-5 sm:p-6 lg:p-7 rounded-[20px] sm:rounded-[22px] bg-white border border-slate-200/85 shadow-[0_2px_8px_rgba(7,20,47,0.03),0_8px_24px_rgba(7,20,47,0.025)] hover:shadow-[0_6px_20px_rgba(7,20,47,0.04),0_14px_32px_rgba(0,87,254,0.08)] hover:border-blue-200/90 hover:-translate-y-1 transition-all duration-300 ease-out h-full"
                                    >
                                        {/* Icon Container in soft blue */}
                                        <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-[16px] bg-blue-50/90 group-hover:bg-[#0057fe] border border-blue-100/90 group-hover:border-[#0057fe] flex items-center justify-center text-[#0057fe] group-hover:text-white transition-all duration-200 shrink-0 shadow-[0_1px_3px_rgba(0,87,254,0.06)]">
                                            <IconComponent 
                                                className="w-5.5 h-5.5 transition-transform duration-200 group-hover:scale-105" 
                                                strokeWidth={2.2} 
                                            />
                                        </div>

                                        {/* Content Block: Bold Title + Description */}
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-base sm:text-[17px] lg:text-[18px] font-bold text-[#000c24] font-display font-[family-name:var(--font-outfit)] tracking-tight leading-snug mb-1">
                                                {card.title}
                                            </h3>
                                            <p className="text-xs sm:text-[12.5px] lg:text-[13px] text-slate-600 font-sans font-[family-name:var(--font-inter)] leading-relaxed font-normal">
                                                {card.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}
