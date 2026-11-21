"use client";
import React from "react";
import Image from "next/image";
import { Caveat } from "next/font/google";

const caveat = Caveat({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
});

export default function QuoteSection() {
    return (
        <section 
            id="quote" 
            className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-transparent overflow-hidden flex items-center justify-center"
        >
            {/* Container: Spans up to 1140px, keeping native off-white background */}
            <div className="w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 md:px-8 relative z-10 flex flex-col items-center justify-center">
                
                {/* Photorealistic Wide Torn-Paper Banner with Increased Height */}
                <div className="w-full sm:w-[94%] lg:w-[92%] max-w-[1140px] mx-auto relative group flex items-center justify-center">
                    
                    {/* 1. Photorealistic Handmade Paper Canvas (Deckled Edges, Tape, Curled 3D Corner) */}
                    <div 
                        className="w-full relative select-none pointer-events-none"
                        style={{
                            filter: "drop-shadow(0 16px 28px rgba(7, 20, 47, 0.09)) drop-shadow(0 4px 10px rgba(7, 20, 47, 0.05))",
                        }}
                    >
                        <Image
                            src="/images/torn_paper_canvas.webp"
                            alt="Handmade torn paper banner canvas"
                            width={1966}
                            height={540}
                            priority
                            quality={100}
                            className="w-full h-auto object-contain block"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 94vw, 1140px"
                        />
                    </div>

                    {/* 2. Pin-Sharp 100% Vector HTML/SVG Typography Overlay (Zero Blur on any display) */}
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-between px-6 xs:px-8 sm:px-14 md:px-20 lg:px-24 pt-7 xs:pt-8 sm:pt-10 md:pt-12 lg:pt-14 pb-5 xs:pb-6 sm:pb-8 md:pb-10 pointer-events-none select-none">
                        
                        {/* Stationery Header Rule */}
                        <div className="w-full flex items-center justify-between text-[#07142F]/65 font-mono text-[8px] xs:text-[9.5px] sm:text-[11px] md:text-[12px] tracking-[0.22em] uppercase">
                            <span className="font-semibold whitespace-nowrap">NISSCHAY NOTE · 01</span>
                            <div className="h-[1px] bg-[#07142F]/20 mx-2 sm:mx-4 flex-1" />
                            <span className="font-bold tracking-[0.24em] whitespace-nowrap">PHILOSOPHY</span>
                        </div>

                        {/* Central Statement */}
                        <div className="flex flex-col items-center justify-center my-auto py-1 sm:py-2 text-center w-full">
                            {/* Line 1: Modern Geometric Bold Sans */}
                            <h2 className="font-bold text-[#07142F] tracking-[-0.02em] leading-[1.18] text-[15px] xs:text-[18px] sm:text-[25px] md:text-[30px] lg:text-[34px] max-w-4xl">
                                A good idea needs someone to build it.
                            </h2>

                            {/* Line 2: Handwritten Script in Nisschay Electric Blue with Tapered Brush Stroke */}
                            <div className="mt-0.5 sm:mt-1 relative inline-block">
                                <span className={`${caveat.className} text-[#075BFA] text-[20px] xs:text-[25px] sm:text-[34px] md:text-[42px] lg:text-[47px] font-bold leading-tight block px-2 relative z-10`}>
                                    and someone to help people find it.
                                </span>
                                {/* Crisp Vector Tapered Underline */}
                                <svg 
                                    className="w-[92%] sm:w-[96%] h-2 sm:h-3 text-[#075BFA] mx-auto -mt-1 sm:-mt-1.5 opacity-90" 
                                    viewBox="0 0 300 10" 
                                    preserveAspectRatio="none"
                                    aria-hidden="true"
                                >
                                    <path 
                                        d="M3,5 C80,9 220,9 297,4" 
                                        stroke="currentColor" 
                                        strokeWidth="2.8" 
                                        strokeLinecap="round" 
                                        fill="none" 
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Bottom Spacer to balance with the top rule */}
                        <div className="w-full h-[6px] sm:h-[10px]" />

                    </div>

                </div>
            </div>
        </section>
    );
}
