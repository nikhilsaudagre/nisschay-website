"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Handshake, Target, Layers, Headset } from "lucide-react";

interface TimelineNode {
    id: string;
    number: string;
    titleLine1: string;
    titleLine2?: string;
    icon: React.ReactNode;
}

const timelineData: TimelineNode[] = [
    {
        id: "business-focused",
        number: "1",
        titleLine1: "Business-Focused",
        titleLine2: "Approach",
        icon: <Handshake className="w-6 h-6 sm:w-7 sm:h-7 text-[#075BFA] stroke-[2.2]" />,
    },
    {
        id: "solutions-built",
        number: "2",
        titleLine1: "Solutions Built",
        titleLine2: "Around Your Needs",
        icon: <Target className="w-6 h-6 sm:w-7 sm:h-7 text-[#075BFA] stroke-[2.2]" />,
    },
    {
        id: "simple-practical",
        number: "3",
        titleLine1: "Simple & Practical",
        titleLine2: "Technology",
        icon: <Layers className="w-6 h-6 sm:w-7 sm:h-7 text-[#075BFA] stroke-[2.2]" />,
    },
    {
        id: "long-term-support",
        number: "4",
        titleLine1: "Long-Term",
        titleLine2: "Support",
        icon: <Headset className="w-6 h-6 sm:w-7 sm:h-7 text-[#075BFA] stroke-[2.2]" />,
    },
    {
        id: "partner-growth",
        number: "5",
        titleLine1: "A Partner for",
        titleLine2: "Growth",
        icon: (
            <svg
                className="w-6 h-6 sm:w-7 sm:h-7 text-[#075BFA]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <rect x="4" y="14" width="3.5" height="7" rx="1" fill="currentColor" />
                <rect x="10" y="10" width="3.5" height="11" rx="1" fill="currentColor" />
                <rect x="16" y="6" width="3.5" height="15" rx="1" fill="currentColor" />
                <path d="M4 10l6-5 5 3 6-5" />
                <path d="M17 3h4v4" />
            </svg>
        ),
    },
];

export default function ServiceDetailsSection() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section
            id="why-choose-nisschay"
            aria-label="Why Choose Nisschay"
            className="w-full py-14 sm:py-20 lg:py-28 relative overflow-x-clip bg-transparent"
        >
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* ========================================================
                    LARGE RECTANGULAR WARM WHITE CARD CONTAINER
                    (#FAF8F4 surface, soft elevation, pale-blue corner glows)
                ======================================================== */}
                <div className="relative w-full bg-[#FAF8F4] bg-gradient-to-br from-[#FCFAF6] via-[#FAF8F4] to-[#F7F3EC] rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] border border-[#EAE4D8] p-7 sm:p-12 lg:py-16 lg:px-14 shadow-[0_12px_40px_-8px_rgba(7,20,47,0.06),0_2px_8px_rgba(7,91,250,0.04)] overflow-hidden select-none">
                    
                    {/* Ambient Pale-Blue Decorative Corner Glows inside the Card */}
                    <div
                        className="absolute -top-24 -left-24 w-80 h-80 sm:w-96 sm:h-96 bg-blue-100/45 rounded-full blur-3xl pointer-events-none"
                        aria-hidden="true"
                    />
                    <div
                        className="absolute -bottom-28 -right-28 w-88 h-88 sm:w-[420px] sm:h-[420px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none"
                        aria-hidden="true"
                    />

                    {/* ========================================================
                        SECTION HEADER & INTRODUCTION
                    ======================================================== */}
                    <motion.div
                        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 lg:mb-20 relative z-10"
                    >
                        {/* Eyebrow: — WHY CHOOSE NISSCHAY — */}
                        <div className="inline-flex items-center justify-center gap-3 mb-3.5 select-none">
                            <span className="w-6 sm:w-8 h-[2px] bg-[#075BFA] rounded-full" aria-hidden="true" />
                            <span className="text-xs sm:text-[12.5px] font-mono font-bold tracking-[0.2em] text-[#075BFA] uppercase">
                                WHY CHOOSE NISSCHAY
                            </span>
                            <span className="w-6 sm:w-8 h-[2px] bg-[#075BFA] rounded-full" aria-hidden="true" />
                        </div>

                        {/* H2 Main Heading with Electric Blue Brand Highlight */}
                        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black font-display text-[#07142F] tracking-tight leading-[1.18] mb-4 text-balance">
                            A Reliable Technology Partner for{" "}
                            <span className="text-[#075BFA] whitespace-nowrap">Your Business</span>
                        </h2>

                        {/* Concise Supporting Description */}
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans max-w-xl mx-auto text-balance">
                            We combine business understanding, the right technology and long-term support to build digital solutions that help your business grow.
                        </p>
                    </motion.div>

                    {/* ========================================================
                        DESKTOP HORIZONTAL TIMELINE (md+)
                    ======================================================== */}
                    <div className="hidden md:block relative w-full select-none z-10">
                        
                        {/* 1. Sequential Connecting Line Segments (Draws from Card to Card) */}
                        {Array.from({ length: 4 }).map((_, i) => {
                            const lineDelay = i * 0.55 + 0.35;
                            return (
                                <React.Fragment key={`desktop-line-${i}`}>
                                    {/* Background subtle track segment */}
                                    <div
                                        style={{
                                            left: `${10 + i * 20}%`,
                                            width: "20%",
                                        }}
                                        className="absolute top-[48px] lg:top-[52px] h-[2.5px] bg-blue-100/70 -z-0"
                                        aria-hidden="true"
                                    />

                                    {/* Scroll-triggered electric blue connecting segment */}
                                    <motion.div
                                        initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        viewport={{ once: true, amount: 0.1 }}
                                        transition={{
                                            duration: 0.32,
                                            delay: lineDelay,
                                            ease: "easeInOut",
                                        }}
                                        style={{
                                            left: `${10 + i * 20}%`,
                                            width: "20%",
                                            originX: 0,
                                        }}
                                        className="absolute top-[48px] lg:top-[52px] h-[2.5px] bg-[#075BFA] shadow-[0_0_8px_rgba(7,91,250,0.35)] z-0"
                                        aria-hidden="true"
                                    />
                                </React.Fragment>
                            );
                        })}

                        {/* 2. Five Timeline Cards/Nodes Distributed Horizontally (Show up one by one) */}
                        <div className="relative z-10 grid grid-cols-5 gap-3 lg:gap-6 items-start">
                            {timelineData.map((node, index) => {
                                // Sequential stagger calculation: Card appears -> Line draws to next -> Next card appears
                                const nodeDelay = index * 0.55 + 0.1;

                                return (
                                    <div
                                        key={node.id}
                                        className="group flex flex-col items-center text-center cursor-default"
                                    >
                                        {/* Circular Icon Node Container */}
                                        <div className="relative flex items-center justify-center mb-5">
                                            
                                            {/* Outer Concentric Ring with Smooth Scale & Fade In */}
                                            <motion.div
                                                initial={shouldReduceMotion ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.75, y: 8 }}
                                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                                viewport={{ once: true, amount: 0.1 }}
                                                transition={{
                                                    duration: 0.45,
                                                    delay: nodeDelay,
                                                    ease: [0.16, 1, 0.3, 1],
                                                }}
                                                className="w-24 h-24 lg:w-[104px] lg:h-[104px] rounded-full bg-blue-50/70 border border-blue-100 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-[0_4px_16px_rgba(7,91,250,0.06)]"
                                            >
                                                {/* Middle Concentric Ring */}
                                                <div className="w-[74px] h-[74px] lg:w-[82px] lg:h-[82px] rounded-full bg-[#EBF2FE]/80 border border-blue-200/60 flex items-center justify-center">
                                                    
                                                    {/* Inner Pure White Circle Holding Icon */}
                                                    <div className="w-14 h-14 lg:w-15 lg:h-15 rounded-full bg-white shadow-[0_2px_8px_rgba(7,91,250,0.1)] border border-blue-200/90 flex items-center justify-center transition-colors duration-300 group-hover:border-[#075BFA]/60">
                                                        {node.icon}
                                                    </div>
                                                </div>
                                            </motion.div>

                                            {/* Number Badge (1 to 5) Pop In */}
                                            <motion.div
                                                initial={shouldReduceMotion ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0, y: 6 }}
                                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                                viewport={{ once: true, amount: 0.1 }}
                                                transition={{
                                                    duration: 0.35,
                                                    delay: nodeDelay + 0.12,
                                                    type: "spring",
                                                    stiffness: 280,
                                                    damping: 16,
                                                }}
                                                className="absolute top-0.5 right-0.5 lg:top-1 lg:right-1 z-20 w-6 h-6 lg:w-6.5 lg:h-6.5 rounded-full bg-[#075BFA] text-white flex items-center justify-center text-xs font-bold font-mono shadow-[0_2px_6px_rgba(7,91,250,0.35)] border-2 border-white select-none"
                                            >
                                                {node.number}
                                            </motion.div>
                                        </div>

                                        {/* Node Heading with Subtle Stagger */}
                                        <motion.h3
                                            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, amount: 0.1 }}
                                            transition={{
                                                duration: 0.45,
                                                delay: nodeDelay + 0.15,
                                                ease: "easeOut",
                                            }}
                                            className="text-[15px] lg:text-[16px] font-extrabold font-display text-[#07142F] group-hover:text-[#075BFA] leading-snug tracking-tight transition-colors duration-200 max-w-[170px]"
                                        >
                                            <span>{node.titleLine1}</span>
                                            {node.titleLine2 && (
                                                <>
                                                    <br />
                                                    <span>{node.titleLine2}</span>
                                                </>
                                            )}
                                        </motion.h3>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* ========================================================
                        MOBILE VERTICAL TIMELINE (< md)
                    ======================================================== */}
                    <div className="md:hidden relative w-full pl-1 sm:pl-2 select-none z-10">
                        
                        {/* Stacked Vertical Nodes */}
                        <div className="relative z-10 space-y-7 sm:space-y-9">
                            {timelineData.map((node, index) => {
                                const nodeDelay = index * 0.55 + 0.1;
                                const isLast = index === timelineData.length - 1;

                                return (
                                    <div
                                        key={node.id}
                                        className="flex items-center gap-5 sm:gap-6"
                                    >
                                        {/* Left Node Icon Container */}
                                        <div className="relative shrink-0">
                                            
                                            {/* Outer Concentric Circle */}
                                            <motion.div
                                                initial={shouldReduceMotion ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.75, y: 8 }}
                                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                                viewport={{ once: true, amount: 0.1 }}
                                                transition={{
                                                    duration: 0.45,
                                                    delay: nodeDelay,
                                                    ease: [0.16, 1, 0.3, 1],
                                                }}
                                                className="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-blue-50/80 border border-blue-100 flex items-center justify-center shadow-[0_4px_14px_rgba(7,91,250,0.06)]"
                                            >
                                                {/* Middle Circle */}
                                                <div className="w-[62px] h-[62px] sm:w-[68px] sm:h-[68px] rounded-full bg-[#EBF2FE]/90 border border-blue-200/60 flex items-center justify-center">
                                                    
                                                    {/* Inner Pure White Circle */}
                                                    <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-white shadow-sm border border-blue-200/90 flex items-center justify-center">
                                                        {node.icon}
                                                    </div>
                                                </div>
                                            </motion.div>

                                            {/* Number Badge (1 to 5) */}
                                            <motion.div
                                                initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true, amount: 0.1 }}
                                                transition={{
                                                    duration: 0.35,
                                                    delay: nodeDelay + 0.12,
                                                    type: "spring",
                                                    stiffness: 280,
                                                    damping: 16,
                                                }}
                                                className="absolute top-0 right-0 z-20 w-6 h-6 rounded-full bg-[#075BFA] text-white flex items-center justify-center text-xs font-bold font-mono shadow-[0_2px_6px_rgba(7,91,250,0.35)] border-2 border-white"
                                            >
                                                {node.number}
                                            </motion.div>

                                            {/* Connecting Line Segment to Next Node (Top to Bottom) */}
                                            {!isLast && (
                                                <>
                                                    {/* Background Track Segment */}
                                                    <div
                                                        className="absolute left-1/2 -translate-x-1/2 top-20 sm:top-[88px] h-7 sm:h-9 w-[2.5px] bg-blue-100/70 -z-0"
                                                        aria-hidden="true"
                                                    />
                                                    {/* Animated Blue Progress Line Segment */}
                                                    <motion.div
                                                        initial={shouldReduceMotion ? { scaleY: 1 } : { scaleY: 0 }}
                                                        whileInView={{ scaleY: 1 }}
                                                        viewport={{ once: true, amount: 0.1 }}
                                                        transition={{
                                                            duration: 0.32,
                                                            delay: nodeDelay + 0.35,
                                                            ease: "easeInOut",
                                                        }}
                                                        style={{ originY: 0 }}
                                                        className="absolute left-1/2 -translate-x-1/2 top-20 sm:top-[88px] h-7 sm:h-9 w-[2.5px] bg-[#075BFA] shadow-[0_0_8px_rgba(7,91,250,0.35)] z-0"
                                                        aria-hidden="true"
                                                    />
                                                </>
                                            )}
                                        </div>

                                        {/* Right Text Content */}
                                        <motion.div
                                            initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 14 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, amount: 0.1 }}
                                            transition={{
                                                duration: 0.45,
                                                delay: nodeDelay + 0.15,
                                                ease: "easeOut",
                                            }}
                                            className="flex-1 min-w-0"
                                        >
                                            <h3 className="text-base sm:text-lg font-extrabold font-display text-[#07142F] leading-snug tracking-tight">
                                                {node.titleLine1} {node.titleLine2}
                                            </h3>
                                        </motion.div>
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
