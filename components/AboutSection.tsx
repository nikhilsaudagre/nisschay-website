"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Caveat } from "next/font/google";
import { 
    FiArrowRight, 
    FiGlobe, 
    FiCode, 
    FiCpu, 
    FiTrendingUp, 
    FiServer,
    FiCheckCircle, 
    FiCompass,
    FiFeather,
    FiTool,
    FiLayers,
    FiCheck,
    FiClock,
    FiShield
} from "react-icons/fi";

const caveat = Caveat({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
});

// ==========================================
// SCRAPBOOK TACTILE CRAFT COMPONENTS
// ==========================================

// Translucent washi / masking tape with realistic jagged ends & sheen
function ScrapbookTape({ 
    className = "", 
    angle = 0,
    style = {} 
}: { 
    className?: string; 
    angle?: number;
    style?: React.CSSProperties 
}) {
    return (
        <div
            className={`pointer-events-none z-20 ${className}`}
            style={{
                transform: angle ? `rotate(${angle}deg)` : undefined,
                clipPath: "polygon(0% 6%, 2.5% 0%, 97.5% 3%, 100% 7%, 98.5% 94%, 96.5% 100%, 3.5% 97%, 0% 93%)",
                background: "linear-gradient(110deg, rgba(255,255,255,0.78) 0%, rgba(245,240,230,0.9) 28%, rgba(255,255,255,0.94) 50%, rgba(238,230,215,0.88) 100%)",
                borderTop: "1px solid rgba(255,255,255,0.85)",
                borderBottom: "1px solid rgba(216,203,181,0.6)",
                boxShadow: "0 1px 4px rgba(7,20,47,0.08)",
                ...style,
            }}
            aria-hidden="true"
        />
    );
}

// Realistic metallic paperclip
function RealisticPaperclip({ className = "" }: { className?: string }) {
    return (
        <svg
            className={`pointer-events-none select-none drop-shadow-[0_2px_4px_rgba(7,20,47,0.18)] ${className}`}
            width="22"
            height="48"
            viewBox="0 0 22 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path
                d="M7 11V36C7 40.5 10.5 44 15 44C19.5 44 20 40.5 20 36V7C20 3.5 16.5 1 12 1C7.5 1 2 3.5 2 8V38"
                stroke="#64748b"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M7 11V36C7 40.5 10.5 44 15 44C19.5 44 20 40.5 20 36V7C20 3.5 16.5 1 12 1C7.5 1 2 3.5 2 8V38"
                stroke="#cbd5e1"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

// Hand-drawn curved connection arrow
function HandwrittenCurveArrow({ className = "", text = "" }: { className?: string; text?: string }) {
    return (
        <div className={`inline-flex flex-col items-center select-none pointer-events-none ${className}`}>
            {text && (
                <span className={`${caveat.className} text-base sm:text-lg text-[#075BFA] font-bold tracking-wide -mb-1`}>
                    {text}
                </span>
            )}
            <svg
                width="84"
                height="32"
                viewBox="0 0 84 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <path
                    d="M6 14 C 28 4, 54 6, 76 22"
                    stroke="#075BFA"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeDasharray="3 3.5"
                />
                <path
                    d="M66 21 L 78 23 L 73 12"
                    stroke="#075BFA"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
}

// Artisanal studio stamp (crimson ink with studio resolve mark)
function AtelierStamp({ className = "" }: { className?: string }) {
    return (
        <div
            className={`inline-flex flex-col items-center justify-center p-2 rounded-full border-2 border-dashed border-[#b91c1c]/75 text-[#b91c1c] rotate-[-7deg] opacity-85 select-none mix-blend-multiply pointer-events-none ${className}`}
            aria-hidden="true"
        >
            <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full border border-[#b91c1c]/60 flex flex-col items-center justify-center p-1 text-center">
                <span className="text-[8px] font-mono font-bold tracking-widest uppercase text-[#b91c1c]/80">
                    ATELIER
                </span>
                <span className="text-xs sm:text-sm font-bold font-mono tracking-widest uppercase text-[#b91c1c]">
                    NISSCHAY
                </span>
                <span className="text-[7px] font-mono tracking-wider opacity-85">
                    STUDIO RESOLVE
                </span>
                <span className="text-[6.5px] font-mono tracking-widest text-[#b91c1c]/70">
                    EST. 2026
                </span>
            </div>
        </div>
    );
}

// Dual washi tape corner anchors for the cover card with realistic amber sheen & contact shadows
function HeroDualCornerTapes() {
    return (
        <>
            {/* Top-Left Corner Washi Tape */}
            <div
                className="absolute -top-4 -left-3 sm:-top-5 sm:-left-4 w-32 sm:w-40 h-7 sm:h-8 pointer-events-none z-30 -rotate-[32deg]"
                aria-hidden="true"
            >
                <div
                    className="w-full h-full backdrop-blur-[1.5px] border-t border-white/85 border-b border-[#c4b397]/75 shadow-[0_2px_6px_rgba(7,20,47,0.16),0_1px_2px_rgba(7,20,47,0.1)]"
                    style={{
                        clipPath: "polygon(0% 12%, 1.2% 0%, 98.8% 2%, 100% 10%, 99% 90%, 98% 100%, 1.5% 98%, 0% 88%)",
                        background: "linear-gradient(115deg, rgba(228,214,184,0.82) 0%, rgba(246,239,224,0.92) 25%, rgba(255,255,255,0.7) 30%, rgba(228,214,184,0.84) 55%, rgba(242,233,215,0.92) 85%, rgba(225,210,180,0.85) 100%)",
                    }}
                />
            </div>

            {/* Top-Right Corner Washi Tape */}
            <div
                className="absolute -top-4 -right-3 sm:-top-5 sm:-right-4 w-32 sm:w-40 h-7 sm:h-8 pointer-events-none z-30 rotate-[32deg]"
                aria-hidden="true"
            >
                <div
                    className="w-full h-full backdrop-blur-[1.5px] border-t border-white/85 border-b border-[#c4b397]/75 shadow-[0_2px_6px_rgba(7,20,47,0.16),0_1px_2px_rgba(7,20,47,0.1)]"
                    style={{
                        clipPath: "polygon(0% 10%, 1.5% 2%, 98.8% 0%, 100% 12%, 99% 88%, 98.5% 98%, 1.2% 100%, 0% 90%)",
                        background: "linear-gradient(115deg, rgba(228,214,184,0.82) 0%, rgba(246,239,224,0.92) 25%, rgba(255,255,255,0.7) 30%, rgba(228,214,184,0.84) 55%, rgba(242,233,215,0.92) 85%, rgba(225,210,180,0.85) 100%)",
                    }}
                />
            </div>
        </>
    );
}

// Subtle physical paper contact shadow
function PaperContactShadow() {
    return (
        <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
            <div className="absolute top-0 inset-x-8 h-4 bg-amber-950/[0.04] blur-[3px]" />
            <div className="absolute -bottom-3 right-4 sm:right-8 w-2/5 h-10 sm:h-12 bg-amber-950/16 blur-[10px] rounded-[50%] transform rotate-[2.4deg] origin-bottom-right" />
            <div className="absolute -bottom-3 left-4 sm:left-8 w-2/5 h-10 sm:h-12 bg-amber-950/14 blur-[10px] rounded-[50%] transform -rotate-[2.4deg] origin-bottom-left" />
            <div className="absolute inset-x-6 bottom-0 h-16 shadow-[0_16px_36px_-6px_rgba(7,20,47,0.09)]" />
        </div>
    );
}

// Reusable chapter eyebrow with pulse dot and mono uppercase tracking
function ChapterEyebrow({ label }: { label: string }) {
    return (
        <div className="inline-flex items-center justify-center gap-2.5">
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#075BFA] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#075BFA]" />
            </span>
            <span className="w-6 h-[2px] bg-[#075BFA]/60" aria-hidden="true" />
            <span className="text-xs font-mono font-bold tracking-[0.22em] text-[#075BFA] uppercase">
                {label}
            </span>
        </div>
    );
}

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function AboutSection({
    showLearnMore = true,
    isStandalone = false,
}: {
    showLearnMore?: boolean;
    isStandalone?: boolean;
} = {}) {
    const shouldReduceMotion = useReducedMotion();

    // 3D Parallax Tilt for Cover Paper
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const mouseXSpring = useSpring(mouseX, { stiffness: 160, damping: 24 });
    const mouseYSpring = useSpring(mouseY, { stiffness: 160, damping: 24 });
    const tiltRotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["2deg", "-2deg"]);
    const tiltRotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-3deg", "3deg"]);

    const handlePaperMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (shouldReduceMotion) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const xPct = (e.clientX - rect.left) / rect.width - 0.5;
        const yPct = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(xPct);
        mouseY.set(yPct);
    };

    const handlePaperMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    // Shared reveal animation helper
    const fadeInProps = (delay = 0) => shouldReduceMotion ? {} : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-50px" },
        transition: { duration: 0.55, delay, ease: "easeOut" as const },
    };

    return (
        <section
            id="about"
            className={`relative w-full overflow-x-clip bg-[#FAF9F5] text-[#07142F] ${
                isStandalone ? "pt-2 sm:pt-3 lg:pt-4 pb-20 sm:pb-28 lg:pb-36" : "py-20 sm:py-28 lg:py-36"
            }`}
        >
            {/* Global Fine Paper Grain Overlay */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-multiply z-0"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='scrapbookNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23scrapbookNoise)'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "repeat",
                }}
                aria-hidden="true"
            />

            {/* Main Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

                {/* ========================================================
                    OPENING — WHAT IS NISSCHAY? (Authentic Physical Letter)
                ======================================================== */}
                <div className="w-full flex flex-col items-center justify-center text-center select-none space-y-3 sm:space-y-4 mb-16 sm:mb-20 lg:mb-24">
                    {/* Eyebrow Label */}
                    <ChapterEyebrow label="THE MEANING BEHIND THE NAME" />

                    {/* Wide Handmade Editorial Paper Canvas */}
                    <motion.div
                        {...fadeInProps(0)}
                        style={shouldReduceMotion ? {} : { rotateX: tiltRotateX, rotateY: tiltRotateY, transformStyle: "preserve-3d" }}
                        onMouseMove={handlePaperMouseMove}
                        onMouseLeave={handlePaperMouseLeave}
                        className="group relative w-full max-w-4xl lg:max-w-5xl xl:max-w-[1100px] mx-auto mt-2.5 sm:mt-3.5 cursor-default [perspective:1200px]"
                    >
                        {/* 3D Paper Shadow */}
                        <PaperContactShadow />

                        {/* Dual Corner Washi Tapes */}
                        <HeroDualCornerTapes />

                        {/* Physical Cream Stationery Letter Sheet with Torn Left & Right Edges */}
                        <div
                            className="relative z-10 bg-gradient-to-b from-[#FAF7F0] via-[#F6F0E2] to-[#EFE7D5] border-y border-[#dfceb0]/90 px-6 sm:px-12 md:px-16 lg:px-20 py-8 sm:py-11 md:py-13 lg:py-15 text-center overflow-hidden"
                            style={{
                                clipPath: "polygon(0.8% 0%, 99.2% 0.2%, 99.7% 3%, 99.4% 8%, 100% 15%, 99.6% 25%, 99.9% 38%, 99.5% 50%, 100% 62%, 99.6% 75%, 99.9% 88%, 99.3% 97%, 98.8% 100%, 0.9% 99.8%, 0.3% 97%, 0.6% 88%, 0% 75%, 0.4% 62%, 0% 50%, 0.5% 38%, 0.1% 25%, 0.5% 15%, 0% 7%, 0.6% 2%)",
                                boxShadow: "inset 0 1px 1px rgba(255,255,255,0.95), inset 0 -2px 6px rgba(110,80,25,0.06), inset 3px 0 6px rgba(255,255,255,0.7), inset -3px 0 6px rgba(255,255,255,0.7)",
                            }}
                        >
                            {/* Gentle Physical Paper Folds (Horizontal Tri-Fold Creases) */}
                            <div className="absolute inset-x-0 top-[34%] h-[1px] bg-gradient-to-r from-transparent via-amber-950/[0.06] to-transparent pointer-events-none z-10" />
                            <div className="absolute inset-x-0 top-[34%] h-[1px] -translate-y-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none z-10" />
                            <div className="absolute inset-x-0 top-[67%] h-[1px] bg-gradient-to-r from-transparent via-amber-950/[0.06] to-transparent pointer-events-none z-10" />
                            <div className="absolute inset-x-0 top-[67%] h-[1px] -translate-y-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none z-10" />

                            {/* Faint Oversized Nisschay Arch Watermark */}
                            <div 
                                className="absolute -right-4 sm:right-6 md:right-10 top-1/2 -translate-y-1/2 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 pointer-events-none opacity-[0.032] select-none mix-blend-multiply"
                                aria-hidden="true"
                            >
                                <Image 
                                    src="/logo-mark.png" 
                                    alt="" 
                                    fill 
                                    className="object-contain filter grayscale contrast-150" 
                                />
                            </div>

                            {/* Letter Content */}
                            <div className="relative z-20 flex flex-col items-center justify-center max-w-4xl mx-auto">
                                {/* Tasteful Stationery Letterhead Detail */}
                                <div className="w-full flex items-center justify-between pb-4 sm:pb-5 mb-5 sm:mb-6 border-b border-[#07142F]/10 text-slate-500 font-mono text-[9px] sm:text-[10px] tracking-[0.22em] uppercase select-none">
                                    <span>NISSCHAY STUDIO · DIGITAL SOLUTIONS</span>
                                    <span className="font-bold text-[#07142F]">ESTABLISHED · 2026</span>
                                </div>

                                {/* Heading */}
                                <h1 className={`${caveat.className} text-5xl sm:text-6xl md:text-7xl lg:text-[78px] xl:text-[84px] font-bold text-[#075BFA] tracking-normal leading-[1.1] inline-block py-1 filter drop-shadow-[0_1px_1px_rgba(7,91,250,0.18)]`}>
                                    What is Nisschay?
                                </h1>

                                {/* Subtle underline accent */}
                                <div className="w-16 sm:w-24 h-[2px] bg-[#075BFA]/25 rounded-full my-3 sm:my-3.5" />

                                {/* Subline */}
                                <p className={`${caveat.className} text-2xl sm:text-3xl md:text-[34px] lg:text-4xl font-semibold text-[#07142F] tracking-normal leading-snug text-balance max-w-3xl`}>
                                    A name rooted in determination. A belief in making ideas real.
                                </p>

                                {/* Bottom Stationery Sign-off with Establishment Detail */}
                                <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 sm:pt-7 mt-6 sm:mt-8 border-t border-[#07142F]/10">
                                    <div className="text-center sm:text-left">
                                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 block mb-0.5">
                                            BRAND RESOLVE
                                        </span>
                                        <span className={`${caveat.className} text-xl sm:text-2xl text-[#07142F] font-bold inline-block rotate-[-1deg]`}>
                                            Nisschay — A decision to build better.
                                        </span>
                                    </div>
                                    <div className="text-center sm:text-right">
                                        <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.22em] text-[#075BFA] font-bold uppercase block">
                                            ESTABLISHED · 2026
                                        </span>
                                        <span className="text-[8px] font-mono tracking-widest text-slate-400 uppercase">
                                            STUDIO CORRESPONDENCE
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* ========================================================
                    CHAPTERS STACK
                ======================================================== */}
                <div className="space-y-28 sm:space-y-36 lg:space-y-44">

                    {/* ========================================================
                        SECTION 01 — WHY WE EXIST
                        (Compact & Realistic Physical Open Journal)
                    ======================================================== */}
                    <div className="w-full">
                        <div className="text-center mb-8 sm:mb-12">
                            <ChapterEyebrow label="SECTION 01 · WHY WE EXIST" />
                            <motion.h2 
                                {...fadeInProps(0.1)}
                                className="mt-4 text-3xl sm:text-4xl font-bold font-sans tracking-tight text-[#07142F] max-w-2xl mx-auto leading-tight text-balance"
                            >
                                Good businesses deserve better digital solutions.
                            </motion.h2>
                        </div>

                        {/* Compact Physical Open Journal on Desk */}
                        <motion.div
                            {...fadeInProps(0.2)}
                            className="relative w-full max-w-3xl lg:max-w-[820px] mx-auto px-1 sm:px-2"
                        >
                            {/* Silk Bookmark Ribbon Draping over Top Center Spine */}
                            <div 
                                className="hidden md:block absolute -top-3.5 left-1/2 -translate-x-1/2 w-3.5 h-12 bg-gradient-to-b from-[#075BFA] via-[#054ec9] to-[#043d9e] shadow-[0_2px_5px_rgba(7,20,47,0.25)] rounded-t-sm pointer-events-none z-30"
                                style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 86%, 50% 100%, 0% 86%)" }}
                                aria-hidden="true"
                            />

                            {/* Underlying Page Stack Rim & Desk Drop Shadow */}
                            <div className="relative rounded-2xl bg-[#FAF7F0] border border-[#d8ccba] shadow-[0_20px_45px_-10px_rgba(7,20,47,0.14),0_6px_16px_-4px_rgba(7,20,47,0.06)] overflow-hidden">
                                
                                {/* Center Binding Spine & Thread Stitching (Visible on md+) */}
                                <div 
                                    className="hidden md:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-8 pointer-events-none z-20"
                                    aria-hidden="true"
                                >
                                    {/* Deep Spine Crease Shadow */}
                                    <div className="w-full h-full bg-gradient-to-r from-transparent via-amber-950/[0.12] to-transparent" />
                                    {/* Subtle Bookbinding Stitched Thread */}
                                    <div className="absolute inset-y-6 left-1/2 -translate-x-1/2 w-[1px] border-l border-dashed border-[#b3a186]/80" />
                                </div>

                                {/* 2-Page Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#D8CBB5]/60">
                                    
                                    {/* ====================================================
                                        LEFT PAGE — THE PROBLEM
                                    ==================================================== */}
                                    <div className="p-6 sm:p-7 md:p-8 bg-gradient-to-r from-[#FAF8F2] via-[#FAF7F0] to-[#F1E8D7] relative flex flex-col justify-between">
                                        <div>
                                            {/* Small Label */}
                                            <span className="text-[10px] font-mono tracking-widest text-[#075BFA] font-bold uppercase block mb-1.5">
                                                Everyday business challenges
                                            </span>

                                            {/* Handwritten Main Heading */}
                                            <h3 className={`${caveat.className} text-3xl sm:text-4xl font-bold text-[#07142F] tracking-tight leading-[1.15] mb-3`}>
                                                Running a business is <span className="text-[#075BFA]">hard enough.</span>
                                            </h3>

                                            {/* Short Description */}
                                            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-5 font-sans">
                                                Managing customers, daily work and business growth already takes time. Outdated websites, repetitive tasks and disconnected tools make it harder.
                                            </p>

                                            {/* 4 Compact Notes (Tactile Diary List, Not Generic Cards) */}
                                            <div className="space-y-2.5 my-4 pt-1">
                                                <div className="flex items-baseline gap-2 text-xs sm:text-sm text-slate-700 font-sans">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#075BFA] shrink-0 mt-1" />
                                                    <span><strong className="text-[#07142F]">Outdated websites</strong> — <em className="text-slate-600 not-italic font-normal">Poor first impressions.</em></span>
                                                </div>
                                                <div className="flex items-baseline gap-2 text-xs sm:text-sm text-slate-700 font-sans">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#075BFA] shrink-0 mt-1" />
                                                    <span><strong className="text-[#07142F]">Repetitive tasks</strong> — <em className="text-slate-600 not-italic font-normal">Time spent on manual work.</em></span>
                                                </div>
                                                <div className="flex items-baseline gap-2 text-xs sm:text-sm text-slate-700 font-sans">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#075BFA] shrink-0 mt-1" />
                                                    <span><strong className="text-[#07142F]">Disconnected tools</strong> — <em className="text-slate-600 not-italic font-normal">Information in different places.</em></span>
                                                </div>
                                                <div className="flex items-baseline gap-2 text-xs sm:text-sm text-slate-700 font-sans">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#075BFA] shrink-0 mt-1" />
                                                    <span><strong className="text-[#07142F]">Low online visibility</strong> — <em className="text-slate-600 not-italic font-normal">Customers struggle to find you.</em></span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Left Page Footer: Handwritten Takeaway & Page Number */}
                                        <div className="mt-6 pt-3.5 border-t border-[#D8CBB5]/60 flex items-center justify-between">
                                            <div>
                                                <span className={`${caveat.className} text-xl sm:text-2xl text-[#075BFA] font-bold block leading-none`}>
                                                    Good work deserves better tools.
                                                </span>
                                                <div className="w-16 h-[1.5px] bg-[#075BFA]/30 rounded-full mt-1" />
                                            </div>
                                            <span className="font-mono text-[11px] text-slate-400 tracking-wider">
                                                — 12 —
                                            </span>
                                        </div>
                                    </div>

                                    {/* ====================================================
                                        RIGHT PAGE — WHY NISSCHAY EXISTS
                                    ==================================================== */}
                                    <div className="p-6 sm:p-7 md:p-8 bg-gradient-to-r from-[#F1E8D7] via-[#FAF7F0] to-[#FAF8F2] relative flex flex-col justify-between">
                                        <div>
                                            {/* Small Label */}
                                            <span className="text-[10px] font-mono tracking-widest text-[#075BFA] font-bold uppercase block mb-1.5">
                                                Why Nisschay exists
                                            </span>

                                            {/* Handwritten Main Heading */}
                                            <h3 className={`${caveat.className} text-3xl sm:text-4xl font-bold text-[#07142F] tracking-tight leading-[1.15] mb-3`}>
                                                Technology should <span className="text-[#075BFA]">make things easier.</span>
                                            </h3>

                                            {/* Short Description */}
                                            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-4 font-sans">
                                                Nisschay helps businesses find and build practical digital solutions — from websites and software to AI, automation and digital marketing.
                                            </p>

                                            {/* Small Subheading & 4 Short Points */}
                                            <div className="my-3 pt-1">
                                                <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#07142F] uppercase block mb-2">
                                                    Our approach
                                                </span>
                                                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 font-sans">
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-[#075BFA] font-bold text-sm leading-none mt-0.5">•</span>
                                                        <span>Understand the business.</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-[#075BFA] font-bold text-sm leading-none mt-0.5">•</span>
                                                        <span>Find the right solution.</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-[#075BFA] font-bold text-sm leading-none mt-0.5">•</span>
                                                        <span>Build with clear goals.</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-[#075BFA] font-bold text-sm leading-none mt-0.5">•</span>
                                                        <span>Support future improvements when agreed.</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Right Page Footer: Handwritten Statement & Page Number */}
                                        <div className="mt-6 pt-3.5 border-t border-[#D8CBB5]/60 flex items-center justify-between">
                                            <div>
                                                <span className={`${caveat.className} text-xl sm:text-2xl text-[#07142F] font-bold block rotate-[-1deg] leading-none`}>
                                                    Less complexity. <span className="text-[#075BFA]">More progress.</span>
                                                </span>
                                            </div>
                                            <span className="font-mono text-[11px] text-slate-400 tracking-wider">
                                                — 13 —
                                            </span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* ========================================================
                        SECTION 02 — WHAT WE DO
                        (5 Varied Scrapbook Service Notes)
                    ======================================================== */}
                    <div className="w-full">
                        <div className="text-center mb-10 sm:mb-14">
                            <ChapterEyebrow label="SECTION 02 · WHAT WE DO" />
                            <motion.h2 
                                {...fadeInProps(0.1)}
                                className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold font-sans tracking-tight text-[#07142F] max-w-3xl mx-auto leading-tight text-balance"
                            >
                                Different digital needs. Practical solutions in one place.
                            </motion.h2>
                            <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                                We bring technology, development and digital services together to help businesses solve problems and improve the way they work.
                            </p>
                        </div>

                        {/* 5 Varied Service Paper Notes Grid */}
                        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-start">

                            {/* Service 1: Website & Web Development */}
                            <motion.div
                                {...fadeInProps(0.1)}
                                className="relative bg-[#FBF8F0] border border-[#D8CBB5] rounded-xl p-6 sm:p-7 shadow-[0_6px_20px_rgba(7,20,47,0.05)] transform -rotate-[1deg] hover:rotate-0 transition-transform duration-200"
                            >
                                <ScrapbookTape className="absolute -top-3 left-8 w-28 h-5.5" angle={-3} />
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-mono font-bold tracking-widest text-[#075BFA] uppercase">
                                        SERVICE 01
                                    </span>
                                    <div className="w-8 h-8 rounded-full bg-[#075BFA]/10 flex items-center justify-center text-[#075BFA]">
                                        <FiGlobe size={16} />
                                    </div>
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-[#07142F] mb-2 font-sans">
                                    Website & Web Development
                                </h3>
                                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                    Build a professional online presence that helps people understand your business and connect with you.
                                </p>
                                <div className="mt-5 pt-3 border-t border-[#D8CBB5]/60 flex items-center justify-between">
                                    <span className={`${caveat.className} text-base text-[#075BFA] font-bold`}>
                                        * Clean presentation & fast speeds
                                    </span>
                                </div>
                            </motion.div>

                            {/* Service 2: Application & Software Development */}
                            <motion.div
                                {...fadeInProps(0.2)}
                                className="relative bg-[#FAF5EB] border border-[#D8CBB5] rounded-xl p-6 sm:p-7 shadow-[0_6px_20px_rgba(7,20,47,0.05)] transform rotate-[1.2deg] hover:rotate-0 transition-transform duration-200"
                            >
                                <RealisticPaperclip className="absolute -top-4 right-8" />
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-mono font-bold tracking-widest text-[#07142F] uppercase">
                                        SERVICE 02
                                    </span>
                                    <div className="w-8 h-8 rounded-full bg-[#07142F]/10 flex items-center justify-center text-[#07142F]">
                                        <FiCode size={16} />
                                    </div>
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-[#07142F] mb-2 font-sans">
                                    Application & Software Development
                                </h3>
                                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                    Develop useful applications and custom software around your business needs.
                                </p>
                                <div className="mt-5 pt-3 border-t border-[#D8CBB5]/60 flex items-center justify-between">
                                    <span className={`${caveat.className} text-base text-[#075BFA] font-bold`}>
                                        * Tailored around your workflows
                                    </span>
                                </div>
                            </motion.div>

                            {/* Service 3: AI & Automation */}
                            <motion.div
                                {...fadeInProps(0.3)}
                                className="relative bg-[#F7F3E8] border border-[#D8CBB5] rounded-xl p-6 sm:p-7 shadow-[0_6px_20px_rgba(7,20,47,0.05)] transform -rotate-[0.6deg] hover:rotate-0 transition-transform duration-200"
                            >
                                <ScrapbookTape className="absolute -top-3 right-8 w-24 h-5.5" angle={4} />
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-mono font-bold tracking-widest text-[#075BFA] uppercase">
                                        SERVICE 03
                                    </span>
                                    <div className="w-8 h-8 rounded-full bg-[#075BFA]/10 flex items-center justify-center text-[#075BFA]">
                                        <FiCpu size={16} />
                                    </div>
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-[#07142F] mb-2 font-sans">
                                    AI & Automation
                                </h3>
                                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                    Use practical AI tools and automation to reduce repetitive work and simplify everyday processes.
                                </p>
                                <div className="mt-5 pt-3 border-t border-[#D8CBB5]/60 flex items-center justify-between">
                                    <span className={`${caveat.className} text-base text-[#075BFA] font-bold`}>
                                        * Eliminate manual copy-pasting
                                    </span>
                                </div>
                            </motion.div>

                            {/* Service 4: Digital Marketing & SEO */}
                            <motion.div
                                {...fadeInProps(0.4)}
                                className="relative bg-[#FAF6EE] border border-[#D8CBB5] rounded-xl p-6 sm:p-7 shadow-[0_6px_20px_rgba(7,20,47,0.05)] transform rotate-[1.4deg] hover:rotate-0 transition-transform duration-200"
                            >
                                <ScrapbookTape className="absolute -top-3 left-10 w-24 h-5.5" angle={-2} />
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-mono font-bold tracking-widest text-[#07142F] uppercase">
                                        SERVICE 04
                                    </span>
                                    <div className="w-8 h-8 rounded-full bg-[#07142F]/10 flex items-center justify-center text-[#07142F]">
                                        <FiTrendingUp size={16} />
                                    </div>
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-[#07142F] mb-2 font-sans">
                                    Digital Marketing & SEO
                                </h3>
                                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                    Improve your online presence and help the right people discover your business.
                                </p>
                                <div className="mt-5 pt-3 border-t border-[#D8CBB5]/60 flex items-center justify-between">
                                    <span className={`${caveat.className} text-base text-[#075BFA] font-bold`}>
                                        * High-intent customer discovery
                                    </span>
                                </div>
                            </motion.div>

                            {/* Service 5: Cloud, DevOps & IT Support */}
                            <motion.div
                                {...fadeInProps(0.5)}
                                className="relative bg-[#FBF8F1] border border-[#D8CBB5] rounded-xl p-6 sm:p-7 shadow-[0_6px_20px_rgba(7,20,47,0.05)] transform -rotate-[0.8deg] hover:rotate-0 transition-transform duration-200 md:col-span-2 lg:col-span-2"
                            >
                                <RealisticPaperclip className="absolute -top-4 left-10" />
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-mono font-bold tracking-widest text-[#075BFA] uppercase">
                                        SERVICE 05 · INFRASTRUCTURE & RELIABILITY
                                    </span>
                                    <div className="w-8 h-8 rounded-full bg-[#075BFA]/10 flex items-center justify-center text-[#075BFA]">
                                        <FiServer size={16} />
                                    </div>
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-[#07142F] mb-2 font-sans">
                                    Cloud, DevOps & IT Support
                                </h3>
                                <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl">
                                    Get help with deploying, maintaining and managing your digital systems.
                                </p>
                                <div className="mt-5 pt-3 border-t border-[#D8CBB5]/60 flex items-center justify-between">
                                    <span className={`${caveat.className} text-base text-[#075BFA] font-bold`}>
                                        * Secure hosting, backups & uptime monitoring
                                    </span>
                                    <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                                        CONTINUOUS STABILITY
                                    </span>
                                </div>
                            </motion.div>

                        </div>
                    </div>

                    {/* ========================================================
                        SECTION 03 — WHO WE WORK WITH
                        (3 Audience Groups / Customer Starting Points)
                    ======================================================== */}
                    <div className="w-full">
                        <div className="text-center mb-10 sm:mb-14">
                            <ChapterEyebrow label="SECTION 03 · WHO WE WORK WITH" />
                            <motion.h2 
                                {...fadeInProps(0.1)}
                                className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold font-sans tracking-tight text-[#07142F] max-w-3xl mx-auto leading-tight text-balance"
                            >
                                Every business has a different starting point.
                            </motion.h2>
                        </div>

                        {/* 3 Editorial Paper Compositions */}
                        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">

                            {/* Audience 1: Startups and new businesses */}
                            <motion.div
                                {...fadeInProps(0.1)}
                                className="relative bg-[#FAF5EB] border border-[#D8CBB5] rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_6px_20px_rgba(7,20,47,0.05)] transform -rotate-[1deg]"
                            >
                                <ScrapbookTape className="absolute -top-3 left-8 w-28 h-5.5" angle={-3} />
                                <div>
                                    <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block mb-2">
                                        STARTING POINT 01
                                    </span>
                                    <h3 className="text-xl font-bold text-[#07142F] mb-3 font-sans">
                                        Startups and new businesses
                                    </h3>
                                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                        Building a new idea? We help you create the digital foundation to get started.
                                    </p>
                                </div>
                                <div className="mt-6 pt-4 border-t border-[#D8CBB5]/60">
                                    <span className={`${caveat.className} text-base text-[#075BFA] font-bold block`}>
                                        * Clean foundation from day one
                                    </span>
                                </div>
                            </motion.div>

                            {/* Audience 2: Small businesses */}
                            <motion.div
                                {...fadeInProps(0.2)}
                                className="relative bg-[#FBF8F0] border border-[#D8CBB5] rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_6px_20px_rgba(7,20,47,0.05)] transform rotate-[1.2deg]"
                            >
                                <RealisticPaperclip className="absolute -top-4 right-8" />
                                <div>
                                    <span className="text-[10px] font-mono tracking-widest text-[#075BFA] font-bold uppercase block mb-2">
                                        STARTING POINT 02
                                    </span>
                                    <h3 className="text-xl font-bold text-[#07142F] mb-3 font-sans">
                                        Small businesses
                                    </h3>
                                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                        Looking to improve your online presence or make daily work easier? We help identify practical solutions.
                                    </p>
                                </div>
                                <div className="mt-6 pt-4 border-t border-[#D8CBB5]/60">
                                    <span className={`${caveat.className} text-base text-[#075BFA] font-bold block`}>
                                        * Pragmatic upgrades that save time
                                    </span>
                                </div>
                            </motion.div>

                            {/* Audience 3: Growing businesses */}
                            <motion.div
                                {...fadeInProps(0.3)}
                                className="relative bg-[#F8F4EA] border border-[#D8CBB5] rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_6px_20px_rgba(7,20,47,0.05)] transform -rotate-[0.8deg]"
                            >
                                <ScrapbookTape className="absolute -top-3 right-8 w-28 h-5.5" angle={3} />
                                <div>
                                    <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block mb-2">
                                        STARTING POINT 03
                                    </span>
                                    <h3 className="text-xl font-bold text-[#07142F] mb-3 font-sans">
                                        Growing businesses
                                    </h3>
                                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                        Need better software, automation or digital systems? We help you plan and build for your next stage.
                                    </p>
                                </div>
                                <div className="mt-6 pt-4 border-t border-[#D8CBB5]/60">
                                    <span className={`${caveat.className} text-base text-[#075BFA] font-bold block`}>
                                        * Robust architectures ready to scale
                                    </span>
                                </div>
                            </motion.div>

                        </div>

                        {/* Audience Closing Statement */}
                        <div className="mt-10 sm:mt-12 text-center max-w-2xl mx-auto">
                            <div className="inline-block bg-[#FAF6EE] border border-[#D8CBB5] px-6 py-3 rounded-full shadow-xs">
                                <p className={`${caveat.className} text-xl sm:text-2xl text-[#07142F] font-bold`}>
                                    &ldquo;We believe the right solution starts with understanding the business, not choosing technology first.&rdquo;
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ========================================================
                        SECTION 04 — HOW WE WORK
                        (Journal-Style Process Sheet / Timeline)
                    ======================================================== */}
                    <div className="w-full">
                        <div className="text-center mb-10 sm:mb-14">
                            <ChapterEyebrow label="SECTION 04 · HOW WE WORK" />
                            <motion.h2 
                                {...fadeInProps(0.1)}
                                className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold font-sans tracking-tight text-[#07142F] max-w-3xl mx-auto leading-tight text-balance"
                            >
                                A clear approach from the first conversation to launch.
                            </motion.h2>
                        </div>

                        {/* Journal Process Sheet */}
                        <motion.div
                            {...fadeInProps(0.2)}
                            className="relative max-w-4xl mx-auto bg-[#F5F0E6] border border-[#D8CBB5] rounded-2xl p-6 sm:p-10 md:p-12 shadow-[0_12px_32px_rgba(7,20,47,0.06)]"
                        >
                            <ScrapbookTape className="absolute -top-3 left-1/2 -translate-x-1/2 w-36 h-6" />

                            <div className="space-y-6 sm:space-y-8 relative">
                                {/* Connecting Vertical Dotted Line on md+ */}
                                <div className="hidden sm:block absolute left-7 top-6 bottom-6 w-[2px] border-l-2 border-dashed border-[#D8CBB5]" aria-hidden="true" />

                                {/* Stage 01: Understand */}
                                <div className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6 bg-[#FAF7F0] border border-[#D8CBB5] p-5 sm:p-6 rounded-xl shadow-xs">
                                    <div className="w-12 h-12 rounded-full bg-[#075BFA] text-white flex items-center justify-center font-mono font-bold text-sm shrink-0 z-10 shadow-xs">
                                        01
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                                            <h3 className="text-lg sm:text-xl font-bold text-[#07142F] font-sans">
                                                Understand
                                            </h3>
                                            <span className={`${caveat.className} text-base text-[#075BFA] font-bold`}>
                                                Phase 01 · Listening
                                            </span>
                                        </div>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            We learn about your business, your goals and the challenges you want to solve.
                                        </p>
                                    </div>
                                </div>

                                {/* Stage 02: Plan */}
                                <div className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6 bg-[#FAF7F0] border border-[#D8CBB5] p-5 sm:p-6 rounded-xl shadow-xs">
                                    <div className="w-12 h-12 rounded-full bg-[#07142F] text-white flex items-center justify-center font-mono font-bold text-sm shrink-0 z-10 shadow-xs">
                                        02
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                                            <h3 className="text-lg sm:text-xl font-bold text-[#07142F] font-sans">
                                                Plan
                                            </h3>
                                            <span className={`${caveat.className} text-base text-[#075BFA] font-bold`}>
                                                Phase 02 · Scope & Roadmap
                                            </span>
                                        </div>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            We discuss the right approach, project scope, deliverables and expected timeline.
                                        </p>
                                    </div>
                                </div>

                                {/* Stage 03: Build */}
                                <div className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6 bg-[#FAF7F0] border border-[#D8CBB5] p-5 sm:p-6 rounded-xl shadow-xs">
                                    <div className="w-12 h-12 rounded-full bg-[#075BFA] text-white flex items-center justify-center font-mono font-bold text-sm shrink-0 z-10 shadow-xs">
                                        03
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                                            <h3 className="text-lg sm:text-xl font-bold text-[#07142F] font-sans">
                                                Build
                                            </h3>
                                            <span className={`${caveat.className} text-base text-[#075BFA] font-bold`}>
                                                Phase 03 · Design & Code
                                            </span>
                                        </div>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            We design and develop the solution, keeping communication clear throughout the project.
                                        </p>
                                    </div>
                                </div>

                                {/* Stage 04: Launch */}
                                <div className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6 bg-[#FAF7F0] border border-[#D8CBB5] p-5 sm:p-6 rounded-xl shadow-xs">
                                    <div className="w-12 h-12 rounded-full bg-[#07142F] text-white flex items-center justify-center font-mono font-bold text-sm shrink-0 z-10 shadow-xs">
                                        04
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                                            <h3 className="text-lg sm:text-xl font-bold text-[#07142F] font-sans">
                                                Launch
                                            </h3>
                                            <span className={`${caveat.className} text-base text-[#075BFA] font-bold`}>
                                                Phase 04 · Testing & Handoff
                                            </span>
                                        </div>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            We test the work, prepare it for launch and help you get started.
                                        </p>
                                    </div>
                                </div>

                                {/* Stage 05: Improve */}
                                <div className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6 bg-[#FAF7F0] border border-[#D8CBB5] p-5 sm:p-6 rounded-xl shadow-xs">
                                    <div className="w-12 h-12 rounded-full bg-[#075BFA] text-white flex items-center justify-center font-mono font-bold text-sm shrink-0 z-10 shadow-xs">
                                        05
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                                            <h3 className="text-lg sm:text-xl font-bold text-[#07142F] font-sans">
                                                Improve
                                            </h3>
                                            <span className={`${caveat.className} text-base text-[#075BFA] font-bold`}>
                                                Phase 05 · Ongoing Support
                                            </span>
                                        </div>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            When further support is agreed, we help with updates and improvements as your needs change.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    </div>

                    {/* ========================================================
                        SECTION 05 — WHAT WE BELIEVE
                        (Studio Manifesto of Principles)
                    ======================================================== */}
                    <div className="w-full">
                        <div className="text-center mb-10 sm:mb-14">
                            <ChapterEyebrow label="SECTION 05 · WHAT WE BELIEVE" />
                            <motion.h2 
                                {...fadeInProps(0.1)}
                                className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold font-sans tracking-tight text-[#07142F] max-w-3xl mx-auto leading-tight text-balance"
                            >
                                The principles behind every decision.
                            </motion.h2>
                        </div>

                        {/* Staggered Studio Manifesto Notes */}
                        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-start">

                            {/* Principle 01: Understand before building */}
                            <motion.div
                                {...fadeInProps(0.1)}
                                className="relative bg-[#FBF9F2] border border-[#D8CBB5] rounded-xl p-6 sm:p-7 shadow-[0_6px_20px_rgba(7,20,47,0.05)] transform -rotate-[1.2deg] hover:rotate-0 transition-transform duration-200"
                            >
                                <ScrapbookTape className="absolute -top-3 left-10 w-28 h-5.5" angle={-3} />
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-mono font-bold tracking-widest text-[#075BFA] uppercase">
                                        PRINCIPLE 01
                                    </span>
                                    <FiCompass className="text-[#075BFA]" size={18} />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-[#07142F] mb-2 font-sans">
                                    Understand before building
                                </h3>
                                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                    Good solutions begin with listening and asking the right questions.
                                </p>
                                <div className="mt-5 pt-3 border-t border-[#D8CBB5]/60 flex items-center justify-between">
                                    <span className={`${caveat.className} text-base text-[#075BFA] font-bold`}>
                                        * Listen first, design second
                                    </span>
                                </div>
                            </motion.div>

                            {/* Principle 02: Keep things simple */}
                            <motion.div
                                {...fadeInProps(0.2)}
                                className="relative bg-[#FAF5EB] border border-[#D8CBB5] rounded-xl p-6 sm:p-7 shadow-[0_6px_20px_rgba(7,20,47,0.05)] transform rotate-[1.4deg] hover:rotate-0 transition-transform duration-200"
                            >
                                <RealisticPaperclip className="absolute -top-4 right-8" />
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-mono font-bold tracking-widest text-[#07142F] uppercase">
                                        PRINCIPLE 02
                                    </span>
                                    <FiFeather className="text-[#07142F]" size={18} />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-[#07142F] mb-2 font-sans">
                                    Keep things simple
                                </h3>
                                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                    Technology should make life easier, not more complicated.
                                </p>
                                <div className="mt-5 pt-3 border-t border-[#D8CBB5]/60 flex items-center justify-between">
                                    <span className={`${caveat.className} text-base text-[#075BFA] font-bold`}>
                                        * Clarity over complexity
                                    </span>
                                </div>
                            </motion.div>

                            {/* Principle 03: Be honest and clear */}
                            <motion.div
                                {...fadeInProps(0.3)}
                                className="relative bg-[#F7F4EA] border border-[#D8CBB5] rounded-xl p-6 sm:p-7 shadow-[0_6px_20px_rgba(7,20,47,0.05)] transform -rotate-[0.6deg] hover:rotate-0 transition-transform duration-200"
                            >
                                <ScrapbookTape className="absolute -top-3 right-8 w-24 h-5.5" angle={4} />
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-mono font-bold tracking-widest text-[#075BFA] uppercase">
                                        PRINCIPLE 03
                                    </span>
                                    <FiCheckCircle className="text-[#075BFA]" size={18} />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-[#07142F] mb-2 font-sans">
                                    Be honest and clear
                                </h3>
                                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                    Clear communication and realistic expectations matter.
                                </p>
                                <div className="mt-5 pt-3 border-t border-[#D8CBB5]/60 flex items-center justify-between">
                                    <span className={`${caveat.className} text-base text-[#075BFA] font-bold`}>
                                        * Realistic commitments
                                    </span>
                                </div>
                            </motion.div>

                            {/* Principle 04: Build with purpose */}
                            <motion.div
                                {...fadeInProps(0.4)}
                                className="relative bg-[#F9F6EE] border border-[#D8CBB5] rounded-xl p-6 sm:p-7 shadow-[0_6px_20px_rgba(7,20,47,0.05)] transform rotate-[1.2deg] hover:rotate-0 transition-transform duration-200 md:col-span-1 lg:col-span-1"
                            >
                                <ScrapbookTape className="absolute -top-3 left-12 w-24 h-5.5" angle={-2} />
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-mono font-bold tracking-widest text-[#07142F] uppercase">
                                        PRINCIPLE 04
                                    </span>
                                    <FiTool className="text-[#07142F]" size={18} />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-[#07142F] mb-2 font-sans">
                                    Build with purpose
                                </h3>
                                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                    Focus on solutions that address real business needs.
                                </p>
                                <div className="mt-5 pt-3 border-t border-[#D8CBB5]/60 flex items-center justify-between">
                                    <span className={`${caveat.className} text-base text-[#075BFA] font-bold`}>
                                        * Tangible business outcomes
                                    </span>
                                </div>
                            </motion.div>

                            {/* Principle 05: Keep improving */}
                            <motion.div
                                {...fadeInProps(0.5)}
                                className="relative bg-[#FBF8F0] border border-[#D8CBB5] rounded-xl p-6 sm:p-7 shadow-[0_6px_20px_rgba(7,20,47,0.05)] transform -rotate-[0.8deg] hover:rotate-0 transition-transform duration-200 md:col-span-2 lg:col-span-2"
                            >
                                <RealisticPaperclip className="absolute -top-4 left-8" />
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-mono font-bold tracking-widest text-[#075BFA] uppercase">
                                        PRINCIPLE 05 · LONG-TERM HORIZON
                                    </span>
                                    <FiTrendingUp className="text-[#075BFA]" size={18} />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-[#07142F] mb-2 font-sans">
                                    Keep improving
                                </h3>
                                <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl">
                                    Look for better ways to make the work more useful over time.
                                </p>
                                <div className="mt-5 pt-3 border-t border-[#D8CBB5]/60 flex items-center justify-between">
                                    <span className={`${caveat.className} text-base text-[#075BFA] font-bold`}>
                                        * Practical compounding value
                                    </span>
                                    <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                                        MANIFESTO
                                    </span>
                                </div>
                            </motion.div>

                        </div>
                    </div>

                    {/* ========================================================
                        FINAL SECTION — A NOTE TO THE READER
                        (Studio Letter & Call to Action)
                    ======================================================== */}
                    <div className="w-full">
                        <motion.div
                            {...fadeInProps(0.2)}
                            className="relative max-w-3xl mx-auto bg-[#F5F0E6] border border-[#D8CBB5] rounded-2xl p-8 sm:p-12 md:p-14 text-center shadow-[0_16px_36px_rgba(7,20,47,0.06)]"
                        >
                            {/* Top Center Masking Tape */}
                            <ScrapbookTape className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-36 sm:w-48 h-6 sm:h-7" />

                            <ChapterEyebrow label="A NOTE TO THE READER" />

                            {/* Handwritten Main Heading */}
                            <h2 className={`${caveat.className} text-4xl sm:text-5xl md:text-6xl font-bold text-[#075BFA] mt-6 mb-4 leading-tight`}>
                                Every good idea starts somewhere.
                            </h2>

                            {/* Supporting Text */}
                            <div className="text-slate-700 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-8 font-sans space-y-2">
                                <p>
                                    Maybe you have a new idea, a business challenge or something you want to improve.
                                </p>
                                <p>
                                    Whatever the starting point, let&apos;s talk about what you need and explore the right way forward.
                                </p>
                            </div>

                            {/* Call to Action Buttons */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
                                <Link
                                    href="/contact"
                                    className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#075BFA] hover:bg-[#0047d6] text-white text-sm font-bold font-sans rounded-full transition-all duration-200 shadow-sm hover:shadow-md active:scale-95"
                                >
                                    <span>Start a Project</span>
                                    <FiArrowRight size={15} />
                                </Link>
                                {showLearnMore && (
                                    <Link
                                        href="/services"
                                        className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center px-8 py-3.5 bg-white text-[#07142F] hover:text-black text-sm font-semibold font-sans rounded-full border border-[#D8CBB5] hover:bg-[#FAF8F2] transition-all duration-200 active:scale-95"
                                    >
                                        Explore Our Services
                                    </Link>
                                )}
                            </div>

                            {/* Closing Signature Block */}
                            <div className="mt-10 pt-6 border-t border-[#D8CBB5]/70 flex flex-col sm:flex-row items-center justify-between gap-4">
                                <div className="text-center sm:text-left">
                                    <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block">
                                        STUDIO DISPATCH
                                    </span>
                                    <span className={`${caveat.className} text-2xl sm:text-3xl text-[#07142F] font-bold block mt-0.5`}>
                                        Nisschay — A decision to build better.
                                    </span>
                                </div>
                                <AtelierStamp className="scale-90" />
                            </div>
                        </motion.div>
                    </div>

                </div>

            </div>
        </section>
    );
}
