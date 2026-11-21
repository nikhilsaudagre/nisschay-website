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
import { LuCalendar } from "react-icons/lu";
import AboutMeetNisschaySection from "@/components/AboutMeetNisschaySection";

const caveat = Caveat({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
});

// ==========================================
// SCRAPBOOK TACTILE CRAFT COMPONENTS
// ==========================================

// Translucent warm kraft masking tape with organic torn ends, realistic wrinkles & natural depth
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
                // Organic hand-torn jagged fibrous edges on both left and right ends
                clipPath: "polygon(0% 14%, 1.2% 5%, 2.2% 18%, 1.6% 2%, 3.2% 0%, 96.8% 0%, 98.2% 8%, 99.2% 2%, 100% 14%, 98.6% 36%, 100% 50%, 98.4% 68%, 100% 86%, 98.2% 98%, 96.8% 100%, 3.2% 100%, 1.8% 92%, 0% 96%, 1.2% 78%, 0% 64%, 1.4% 45%, 0% 30%)",
                // Warm semi-translucent kraft masking tape with subtle diagonal wrinkle reflection
                backgroundImage: `
                    linear-gradient(116deg, transparent 40%, rgba(255,255,255,0.48) 46%, rgba(200,180,140,0.3) 48%, transparent 54%),
                    linear-gradient(108deg, rgba(235, 220, 192, 0.75) 0%, rgba(246, 237, 218, 0.86) 22%, rgba(230, 212, 180, 0.70) 52%, rgba(242, 230, 206, 0.82) 100%)
                `,
                backgroundColor: "rgba(238, 224, 196, 0.78)",
                borderTop: "1px solid rgba(255, 255, 255, 0.65)",
                borderBottom: "1px solid rgba(190, 168, 128, 0.55)",
                filter: "drop-shadow(0 2px 3px rgba(35, 25, 12, 0.16))",
                backdropFilter: "blur(0.5px)",
                ...style,
            }}
            aria-hidden="true"
        />
    );
}

// Realistic Kraft Masking Tape (matching Services Section realistic sticky notes)
function TopMaskingTape({ className = "", angle = -0.5 }: { className?: string; angle?: number }) {
    return (
        <div 
            className={`absolute -top-3.5 left-1/2 -translate-x-1/2 w-24 sm:w-28 h-6 sm:h-7 pointer-events-none z-30 ${className}`}
            style={{ transform: `translateX(-50%) rotate(${angle}deg)` }}
            aria-hidden="true"
        >
            {/* Natural soft contact shadow underneath tape */}
            <div 
                className="absolute inset-x-1.5 bottom-0 h-2 bg-amber-950/15 blur-[1.5px] rounded-full" 
            />
            
            {/* Kraft Tape body with torn serrated ends and crepe texture */}
            <div 
                className="w-full h-full border-t border-white/50 border-b border-[#c2af8a]/40 shadow-[0_1px_4px_rgba(7,20,47,0.08)] opacity-95"
                style={{
                    clipPath: "polygon(0% 20%, 1.2% 4%, 98.8% 5%, 100% 22%, 98.6% 40%, 100% 60%, 98.8% 78%, 100% 96%, 97% 95%, 3% 96%, 0% 80%, 1.2% 60%, 0% 40%)",
                    background: "linear-gradient(108deg, rgba(235,220,188,0.85) 0%, rgba(246,238,220,0.92) 22%, rgba(255,255,255,0.65) 28%, rgba(232,216,182,0.88) 50%, rgba(244,234,212,0.92) 80%, rgba(228,210,175,0.86) 100%)",
                }}
            >
                {/* Micro crepe stripes */}
                <div 
                    className="w-full h-full opacity-20"
                    style={{
                        backgroundImage: "repeating-linear-gradient(90deg, rgba(160,130,80,0.3) 0px, rgba(160,130,80,0.3) 1px, transparent 1px, transparent 4px)",
                    }}
                />
            </div>
        </div>
    );
}

// Realistic thin silver metal paperclip with 3D cylindrical wire reflection, highlights & shadow
function RealisticPaperclip({ className = "" }: { className?: string }) {
    return (
        <svg
            className={`pointer-events-none select-none ${className}`}
            width="24"
            height="50"
            viewBox="0 0 24 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <defs>
                {/* 3D Cylindrical silver wire gradient */}
                <linearGradient id="silverWireGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#475569" />
                    <stop offset="20%" stopColor="#94a3b8" />
                    <stop offset="45%" stopColor="#ffffff" />
                    <stop offset="70%" stopColor="#cbd5e1" />
                    <stop offset="100%" stopColor="#334155" />
                </linearGradient>
                {/* Soft ambient drop shadow for realistic paper clamping depth */}
                <filter id="clipShadow" x="-20%" y="-10%" width="150%" height="130%">
                    <feDropShadow dx="0.8" dy="2.2" stdDeviation="1.5" floodColor="#07142F" floodOpacity="0.28" />
                </filter>
            </defs>

            {/* Realistic Paperclip Shape with Silver Metal Shader & Shadow */}
            <g filter="url(#clipShadow)">
                {/* Dark contact shadow behind wire */}
                <path
                    d="M 7.5 12 V 37 C 7.5 41.5, 11 45, 15.5 45 C 20 45, 20.5 41.5, 20.5 37 V 7.5 C 20.5 3.5, 17 1.5, 12 1.5 C 7 1.5, 2.5 4, 2.5 9 V 39"
                    stroke="#1e293b"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.3"
                />
                {/* Main Silver Metallic Wire */}
                <path
                    d="M 7.5 12 V 37 C 7.5 41.5, 11 45, 15.5 45 C 20 45, 20.5 41.5, 20.5 37 V 7.5 C 20.5 3.5, 17 1.5, 12 1.5 C 7 1.5, 2.5 4, 2.5 9 V 39"
                    stroke="url(#silverWireGrad)"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                {/* Specular White Core Highlight */}
                <path
                    d="M 7.5 13 V 36.5 C 7.5 40.5, 11 44, 15.5 44 C 19.5 44, 20 40.5, 20 36.5 V 8 C 20 4, 16.5 2.2, 12 2.2 C 7.5 2.2, 3.2 4.5, 3.2 9.5 V 38.5"
                    stroke="#ffffff"
                    strokeWidth="0.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.9"
                />
            </g>
        </svg>
    );
}

// Realistic 3D Organic Corner Curl component (matching Services sticky notes design)
function RealisticCornerCurl({ undersideColor }: { undersideColor: string }) {
    return (
        <div 
            className="absolute bottom-0 right-0 w-12 h-12 pointer-events-none z-20 overflow-hidden" 
            aria-hidden="true"
        >
            {/* Soft curved contact shadow cast by the lifted paper curl on the surface */}
            <div 
                className="absolute bottom-0 right-0 w-11 h-11 bg-slate-900/18 blur-[3px] rounded-tl-[100%]"
                style={{ transform: "translate(1.5px, 1.5px)" }}
            />
            
            {/* Shaded cavity under the fold */}
            <div 
                className="absolute bottom-0 right-0 w-0 h-0 border-b-[40px] border-b-black/16 border-l-[40px] border-l-transparent" 
            />
            
            {/* The rolled paper underside flap with subtle curved highlight */}
            <div 
                className="absolute bottom-0 right-0 w-0 h-0 border-t-[38px] border-r-[38px] border-r-transparent filter drop-shadow-[0_2px_4px_rgba(7,20,47,0.18)]"
                style={{ 
                    borderTopColor: undersideColor,
                }}
            />
            
            {/* Natural lighting rim along the curved roll edge */}
            <div 
                className="absolute bottom-0 right-0 w-0 h-0 border-t-[38px] border-t-white/50 border-r-[38px] border-r-transparent"
                style={{ transform: "scale(0.95)" }}
            />
        </div>
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
                className="absolute -top-2.5 -left-2.5 xs:-top-3 xs:-left-3 sm:-top-5 sm:-left-4 w-20 xs:w-24 sm:w-36 lg:w-40 h-5 sm:h-7 lg:h-8 pointer-events-none z-30 -rotate-[18deg] xs:-rotate-[22deg] sm:-rotate-[28deg] lg:-rotate-[32deg]"
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
                className="absolute -top-2.5 -right-2.5 xs:-top-3 xs:-right-3 sm:-top-5 sm:-right-4 w-20 xs:w-24 sm:w-36 lg:w-40 h-5 sm:h-7 lg:h-8 pointer-events-none z-30 rotate-[18deg] xs:rotate-[22deg] sm:rotate-[28deg] lg:rotate-[32deg]"
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
            className={`relative w-full overflow-x-clip bg-transparent text-[#07142F] scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32 ${
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
                    OPENING — WHAT IS NISSCHAY? (Authentic Handmade Paper Canvas)
                ======================================================== */}
                <div id="meaning-behind-the-name" className="w-full flex flex-col items-center justify-center text-center select-none mb-16 sm:mb-20 lg:mb-24">
                    {/* Section Eyebrow (Placed cleanly above the paper sheet on website background) */}
                    <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 mb-5 sm:mb-8 lg:mb-10 px-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0057fe] shrink-0" aria-hidden="true" />
                        <span className="w-3 sm:w-5 h-[1.5px] bg-[#0057fe] shrink-0" aria-hidden="true" />
                        <span className="text-[9.5px] xs:text-[10.5px] sm:text-xs font-mono font-bold tracking-[0.14em] sm:tracking-[0.22em] text-[#0057fe] uppercase whitespace-nowrap">
                            THE STORY BEHIND OUR NAME · EST. 2026
                        </span>
                        <span className="w-3 sm:w-5 h-[1.5px] bg-[#0057fe] shrink-0" aria-hidden="true" />
                    </div>

                    {/* DESKTOP VIEW (lg+): Large Horizontal Handmade Deckled Paper Sheet */}
                    <div className="hidden lg:block relative w-full max-w-[1020px] xl:max-w-[1080px] mx-auto">
                        <div className="relative w-full aspect-[2048/1100] overflow-visible">
                            {/* Background Paper Sheet Artwork with Deckled Edges, Natural Contact Shadow & Kraft Tapes */}
                            <Image
                                src="/images/about/brand_story_paper.webp"
                                alt="The Story Behind Our Name - Nisschay"
                                fill
                                priority
                                unoptimized
                                className="object-contain pointer-events-none select-none"
                            />

                            {/* Semantic Accessible HTML Content Layer */}
                            <div className="absolute inset-0 z-10 flex flex-col justify-between pt-[13%] lg:pt-[14%] xl:pt-[15%] pb-[9%] lg:pb-[10%] xl:pb-[11%] px-10 lg:px-16 xl:px-20 text-center">
                                {/* 1. Header Block: Main Heading with Rays + Handwritten Subline with Underline */}
                                <div className="flex flex-col items-center">
                                    {/* Main Heading H1 */}
                                    <div className="inline-flex items-center justify-center gap-1.5 mb-1 lg:mb-1.5">
                                        <h1 className="text-3xl lg:text-[40px] xl:text-[46px] font-black text-[#000c24] tracking-tight font-display leading-[1.12]">
                                            What is Nisschay?
                                        </h1>
                                        {/* 3 Hand-Drawn Accent Rays */}
                                        <svg
                                            className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-[#0057fe] -mt-2 lg:-mt-3 shrink-0"
                                            viewBox="0 0 32 32"
                                            fill="none"
                                            aria-hidden="true"
                                        >
                                            <path d="M 8 18 L 12 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                            <path d="M 15 23 L 26 13" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                            <path d="M 20 30 L 30 26" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                        </svg>
                                    </div>

                                    {/* Highlighted Handwritten Statement */}
                                    <div className="flex flex-col items-center justify-center">
                                        <p className={`${caveat.className} text-xl lg:text-[25px] xl:text-[29px] font-bold text-[#0057fe] tracking-normal leading-tight`}>
                                            A decision to turn ideas into reality.
                                        </p>
                                        {/* Hand-drawn Curved Underline */}
                                        <svg
                                            className="w-56 lg:w-72 xl:w-[350px] h-2 lg:h-2.5 text-[#0057fe] mt-0.5 pointer-events-none"
                                            viewBox="0 0 360 12"
                                            fill="none"
                                            preserveAspectRatio="none"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M 6 10 C 80 2, 260 2, 354 8"
                                                stroke="currentColor"
                                                strokeWidth="3.2"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </div>
                                </div>

                                {/* 2. Two Content Blocks Side-by-Side with Vertical Divider */}
                                <div className="grid grid-cols-12 items-start gap-4 xl:gap-8 max-w-[880px] xl:max-w-[940px] mx-auto text-left w-full my-auto px-2">
                                    {/* Content Block 1 — THE MEANING */}
                                    <div className="col-span-5 flex flex-col justify-start">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="relative w-8 h-8 lg:w-8.5 lg:h-8.5 flex items-center justify-center shrink-0">
                                                <div className="absolute inset-0 bg-[#dbeafe]/80 rounded-[40%_60%_70%_30%/40%_50%_60%_55%] rotate-[-6deg]" />
                                                <FiFeather className="relative z-10 w-4 h-4 text-[#0057fe] stroke-[2.2]" />
                                            </div>
                                            <h2 className="text-[11.5px] lg:text-xs xl:text-[13px] font-mono font-bold tracking-[0.2em] text-[#0057fe] uppercase">
                                                THE MEANING
                                            </h2>
                                        </div>
                                        <p className="text-[11.5px] lg:text-xs xl:text-[13.5px] text-slate-700 leading-relaxed font-normal">
                                            Nisschay represents determination — the decision to move forward with purpose. It reflects our belief that meaningful ideas deserve commitment, thoughtful planning and the right execution.
                                        </p>
                                    </div>

                                    {/* Subtle Vertical Divider */}
                                    <div className="col-span-2 flex justify-center self-center h-20 lg:h-22">
                                        <div className="w-[1px] h-full bg-[#07142F]/15" />
                                    </div>

                                    {/* Content Block 2 — WHEN IT BEGAN */}
                                    <div className="col-span-5 flex flex-col justify-start">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="relative w-8 h-8 lg:w-8.5 lg:h-8.5 flex items-center justify-center shrink-0">
                                                <div className="absolute inset-0 bg-[#dbeafe]/80 rounded-[55%_45%_60%_40%/50%_65%_35%_50%] rotate-[12deg]" />
                                                <LuCalendar className="relative z-10 w-4 h-4 text-[#0057fe] stroke-[2.2]" />
                                            </div>
                                            <h2 className="text-[11.5px] lg:text-xs xl:text-[13px] font-mono font-bold tracking-[0.2em] text-[#0057fe] uppercase">
                                                WHEN IT BEGAN
                                            </h2>
                                        </div>
                                        <p className="text-[11.5px] lg:text-xs xl:text-[13.5px] text-slate-700 leading-relaxed font-normal">
                                            Established in 2026, Nisschay was built around a simple purpose: helping businesses move forward through thoughtful technology, custom software, AI-powered solutions and digital innovation.
                                        </p>
                                    </div>
                                </div>

                                {/* 3. Closing Brand Statement with Light Blue Highlighter */}
                                <div className="flex justify-center">
                                    <div className="bg-[#dbeafe]/85 px-5 lg:px-7 py-1.5 lg:py-2 rounded-[4px] border-y border-blue-200/50 inline-flex items-center justify-center gap-3 select-none shadow-2xs">
                                        <span className="w-4 lg:w-5 h-[1.5px] bg-[#0057fe] shrink-0" aria-hidden="true" />
                                        <p className="text-[9.5px] lg:text-[10.5px] xl:text-[11.5px] font-mono font-bold tracking-[0.22em] text-[#000c24] uppercase text-center">
                                            NISSCHAY — BUILT WITH PURPOSE. DRIVEN BY DETERMINATION.
                                        </p>
                                        <span className="w-4 lg:w-5 h-[1.5px] bg-[#0057fe] shrink-0" aria-hidden="true" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* MOBILE & TABLET VIEW (<lg): Stacked Layout Preserving Paper Aesthetic */}
                    <div className="lg:hidden relative w-full max-w-xl mx-auto px-2 sm:px-4">
                        <div className="relative w-full rounded-[24px] sm:rounded-[32px] bg-[#FAF6F0] border border-[#EAE2D5] shadow-[0_4px_24px_rgba(7,20,47,0.06),0_1px_3px_rgba(7,20,47,0.02)] pt-11 pb-7 px-5 sm:px-9 sm:pt-14 sm:pb-9 overflow-visible text-center">
                            {/* Subtle Paper Fiber Texture Overlay */}
                            <div
                                className="absolute inset-0 rounded-[24px] sm:rounded-[32px] pointer-events-none opacity-[0.08] mix-blend-multiply"
                                style={{
                                    backgroundImage: "url('/images/cta/paper_fiber_texture.webp')",
                                    backgroundRepeat: "repeat",
                                    backgroundSize: "280px 280px",
                                }}
                                aria-hidden="true"
                            />

                            {/* Realistic Translucent Masking Tape: Top-Left */}
                            <div className="absolute -top-3.5 -left-3 sm:-top-4 sm:-left-4 w-20 sm:w-24 pointer-events-none z-20">
                                <Image
                                    src="/images/about/brand_story_tape_left.webp"
                                    alt=""
                                    width={120}
                                    height={90}
                                    className="w-full h-auto object-contain select-none"
                                />
                            </div>

                            {/* Realistic Translucent Masking Tape: Top-Right */}
                            <div className="absolute -top-3.5 -right-3 sm:-top-4 sm:-right-4 w-20 sm:w-24 pointer-events-none z-20">
                                <Image
                                    src="/images/about/brand_story_tape_right.webp"
                                    alt=""
                                    width={120}
                                    height={90}
                                    className="w-full h-auto object-contain select-none"
                                />
                            </div>

                            {/* Content Container */}
                            <div className="relative z-10 flex flex-col items-center">
                                {/* Main Heading H1 */}
                                <div className="inline-flex items-center justify-center gap-1 mb-1.5 pt-2">
                                    <h1 className="text-2xl sm:text-3xl font-black text-[#000c24] tracking-tight font-display leading-tight">
                                        What is Nisschay?
                                    </h1>
                                    <svg
                                        className="w-5 h-5 text-[#0057fe] -mt-2 shrink-0"
                                        viewBox="0 0 32 32"
                                        fill="none"
                                        aria-hidden="true"
                                    >
                                        <path d="M 8 18 L 12 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                        <path d="M 15 23 L 26 13" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                        <path d="M 20 30 L 30 26" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                    </svg>
                                </div>

                                {/* Highlighted Handwritten Statement */}
                                <div className="flex flex-col items-center justify-center mb-6">
                                    <p className={`${caveat.className} text-xl sm:text-2xl font-bold text-[#0057fe] tracking-normal leading-tight`}>
                                        A decision to turn ideas into reality.
                                    </p>
                                    <svg
                                        className="w-56 sm:w-64 h-2 text-[#0057fe] mt-0.5 pointer-events-none"
                                        viewBox="0 0 360 12"
                                        fill="none"
                                        preserveAspectRatio="none"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M 6 10 C 80 2, 260 2, 354 8"
                                            stroke="currentColor"
                                            strokeWidth="3.2"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>

                                {/* Block 1: The Meaning - Inked directly on paper */}
                                <div className="w-full text-left mb-5 pb-5 border-b border-[#07142F]/10">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="relative w-7 h-7 flex items-center justify-center shrink-0">
                                            <div className="absolute inset-0 bg-[#dbeafe]/80 rounded-[40%_60%_70%_30%/40%_50%_60%_55%] rotate-[-6deg]" />
                                            <FiFeather className="relative z-10 w-3.5 h-3.5 text-[#0057fe] stroke-[2.2]" />
                                        </div>
                                        <h2 className="text-xs font-mono font-bold tracking-[0.18em] text-[#0057fe] uppercase">
                                            THE MEANING
                                        </h2>
                                    </div>
                                    <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
                                        Nisschay represents determination — the decision to move forward with purpose. It reflects our belief that meaningful ideas deserve commitment, thoughtful planning and the right execution.
                                    </p>
                                </div>

                                {/* Block 2: When It Began - Inked directly on paper */}
                                <div className="w-full text-left mb-6">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="relative w-7 h-7 flex items-center justify-center shrink-0">
                                            <div className="absolute inset-0 bg-[#dbeafe]/80 rounded-[55%_45%_60%_40%/50%_65%_35%_50%] rotate-[12deg]" />
                                            <LuCalendar className="relative z-10 w-3.5 h-3.5 text-[#0057fe] stroke-[2.2]" />
                                        </div>
                                        <h2 className="text-xs font-mono font-bold tracking-[0.18em] text-[#0057fe] uppercase">
                                            WHEN IT BEGAN
                                        </h2>
                                    </div>
                                    <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
                                        Established in 2026, Nisschay was built around a simple purpose: helping businesses move forward through thoughtful technology, custom software, AI-powered solutions and digital innovation.
                                    </p>
                                </div>

                                {/* Closing Brand Statement */}
                                <div className="w-full bg-[#dbeafe]/85 px-4 py-2.5 rounded-[4px] border-y border-blue-200/50 flex items-center justify-center gap-2 select-none">
                                    <span className="w-3.5 h-[1.5px] bg-[#0057fe] shrink-0" aria-hidden="true" />
                                    <p className="text-[9px] sm:text-[10px] font-mono font-bold tracking-[0.16em] text-[#000c24] uppercase text-center leading-tight">
                                        NISSCHAY — BUILT WITH PURPOSE. DRIVEN BY DETERMINATION.
                                    </p>
                                    <span className="w-3.5 h-[1.5px] bg-[#0057fe] shrink-0" aria-hidden="true" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/* ========================================================
                    CHAPTERS STACK
                ======================================================== */}
                <div className="space-y-28 sm:space-y-36 lg:space-y-44">

                    <div id="why-we-exist" className="scroll-mt-28" />
                    <div id="meet-nisschay" className="scroll-mt-28" />
                    {/* ========================================================
                        SECTION 01 — MEET NISSCHAY (Company Introduction)
                    ======================================================== */}
                    <div className="w-full">
                        <AboutMeetNisschaySection isEmbedded={true} />
                    </div>

                    <div id="who-we-work-with" className="scroll-mt-28" />
                    {/* ========================================================
                        SECTION 02 — WHO WE WORK WITH
                        (3 Audience Groups / Customer Starting Points)
                    ======================================================== */}
                    <div className="w-full">
                        <div className="text-center mb-10 sm:mb-14">
                            <ChapterEyebrow label="SECTION 02 · WHO WE WORK WITH" />
                            <motion.h2 
                                {...fadeInProps(0.1)}
                                className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold font-sans tracking-tight text-[#07142F] max-w-3xl mx-auto leading-tight text-balance"
                            >
                                Every business has a{" "}
                                <span className="relative inline-block whitespace-nowrap pb-3 sm:pb-4">
                                    different starting point.
                                    {/* Hand-Drawn Blue Brush Underline */}
                                    <svg
                                        className="absolute bottom-0 left-0 w-full h-3 sm:h-3.5 text-[#075BFA] pointer-events-none translate-y-2 sm:translate-y-3"
                                        viewBox="0 0 280 14"
                                        fill="none"
                                        preserveAspectRatio="none"
                                        aria-hidden="true"
                                    >
                                        <motion.path
                                            d="M 3 10 C 80 4, 200 4, 277 9"
                                            stroke="currentColor"
                                            strokeWidth="3.5"
                                            strokeLinecap="round"
                                            initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                                            whileInView={{ pathLength: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.85, delay: 0.2, ease: "easeOut" }}
                                        />
                                    </svg>
                                </span>
                            </motion.h2>
                        </div>

                        {/* 3 Editorial Paper Compositions (Matching Services Section Realistic Pastel Sticky Notes) */}
                        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">

                            {/* Audience 1: Startups and new businesses (Pastel Soft Blue) */}
                            <motion.div
                                {...fadeInProps(0.1)}
                                className="group relative w-full h-full transform -rotate-[1deg] hover:rotate-0 hover:-translate-y-1.5 transition-all duration-300 ease-out origin-top select-none"
                            >
                                {/* Hanging Paper Drop Shadow beneath note */}
                                <div 
                                    className="absolute inset-x-2 -bottom-2 h-8 bg-[#07142f]/[0.08] blur-[8px] rounded-[50%] pointer-events-none group-hover:bg-[#07142f]/[0.14] group-hover:blur-[12px] group-hover:-bottom-3 transition-all duration-300"
                                    aria-hidden="true"
                                />

                                {/* Realistic Kraft Masking Tape */}
                                <TopMaskingTape angle={-0.8} />

                                {/* Main Sticky Note Sheet (Pastel Soft Blue) */}
                                <div
                                    className="relative flex flex-col justify-between w-full h-full min-h-[340px] bg-gradient-to-br from-[#EEF6FF] via-[#E0EFFE] to-[#CFE5FD] border border-[#B8DCFE] rounded-[2px] p-6 sm:p-7 shadow-[0_2px_6px_rgba(7,20,47,0.04),0_8px_18px_-3px_rgba(7,20,47,0.07)] group-hover:shadow-[0_4px_12px_rgba(7,20,47,0.06),0_18px_30px_-5px_rgba(7,20,47,0.12)] transition-shadow duration-300 overflow-hidden"
                                    style={{
                                        clipPath: "polygon(0% 0%, 100% 0%, 100% calc(100% - 38px), calc(100% - 38px) 100%, 0% 100%)",
                                    }}
                                >
                                    {/* 1. Paper Grain Texture Overlay */}
                                    <div 
                                        className="absolute inset-0 pointer-events-none opacity-[0.07] mix-blend-multiply z-0"
                                        style={{
                                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='stickyGrainAbout1'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23stickyGrainAbout1)'/%3E%3C/svg%3E")`,
                                            backgroundRepeat: "repeat",
                                        }}
                                        aria-hidden="true" 
                                    />

                                    {/* 2. Organic Paper Wrinkles & Soft Lighting Folds */}
                                    <div 
                                        className="absolute inset-0 pointer-events-none z-0 opacity-60"
                                        style={{
                                            background: "linear-gradient(125deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 24%, rgba(0,0,0,0.02) 28%, rgba(255,255,255,0.3) 34%, rgba(255,255,255,0) 48%, rgba(0,0,0,0.025) 58%, rgba(255,255,255,0.35) 66%, rgba(255,255,255,0) 85%, rgba(0,0,0,0.02) 100%)",
                                        }}
                                        aria-hidden="true" 
                                    />



                                    {/* 4. Playful Ray Burst Doodled in Top Right */}
                                    <svg 
                                        className="absolute top-3.5 right-4 w-4 h-4 text-[#0057fe] pointer-events-none opacity-70 z-10" 
                                        viewBox="0 0 16 16" 
                                        fill="none"
                                        aria-hidden="true"
                                    >
                                        <path d="M3 3 L5.5 5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                                        <path d="M8 1 L8 4.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                                        <path d="M13 3 L10.5 5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                                    </svg>

                                    {/* 5. 3D Corner Dog-Ear Roll */}
                                    <RealisticCornerCurl undersideColor="#BCDDFC" />

                                    <div className="relative z-10">
                                        <span className="text-[10px] font-mono tracking-widest text-[#0057fe] font-bold uppercase block mb-2">
                                            STARTING POINT 01
                                        </span>
                                        <h3 className="text-xl font-bold text-[#000c24] mb-1 font-sans">
                                            Startups and new businesses
                                        </h3>

                                        {/* Direct Paper Artwork Integration */}
                                        <div className="relative w-full h-[125px] sm:h-[135px] my-3 flex items-center justify-center">
                                            <div className="absolute bottom-2 w-32 h-6 bg-[#001c44]/15 rounded-full blur-md" />
                                            <div className="relative w-[130px] h-[130px] group-hover:scale-105 transition-transform duration-300">
                                                <Image
                                                    src="/images/industries/startups_light.webp"
                                                    alt="3D Startup Rocket"
                                                    width={140}
                                                    height={140}
                                                    className="w-full h-full object-contain filter drop-shadow-[0_8px_12px_rgba(7,20,47,0.16)]"
                                                />
                                            </div>
                                        </div>

                                        <p className="text-sm sm:text-base text-[#000c24]/80 leading-relaxed font-sans">
                                            Building a new idea? We help you create the digital foundation to get started.
                                        </p>
                                    </div>

                                    {/* Handwritten Note Bottom */}
                                    <div className="relative z-10 mt-5 pt-3.5 border-t border-[#B8DCFE]/90">
                                        <span className={`${caveat.className} text-base sm:text-[17px] text-[#0057fe] font-bold block`}>
                                            * Clean foundation from day one
                                        </span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Audience 2: Small businesses (Pastel Warm Canary Yellow) */}
                            <motion.div
                                {...fadeInProps(0.2)}
                                className="group relative w-full h-full transform rotate-[0.6deg] hover:rotate-0 hover:-translate-y-1.5 transition-all duration-300 ease-out origin-top select-none"
                            >
                                {/* Hanging Paper Drop Shadow beneath note */}
                                <div 
                                    className="absolute inset-x-2 -bottom-2 h-8 bg-[#07142f]/[0.08] blur-[8px] rounded-[50%] pointer-events-none group-hover:bg-[#07142f]/[0.14] group-hover:blur-[12px] group-hover:-bottom-3 transition-all duration-300"
                                    aria-hidden="true"
                                />

                                {/* Realistic Kraft Masking Tape */}
                                <TopMaskingTape angle={0.6} />

                                {/* Main Sticky Note Sheet (Pastel Warm Canary Yellow) */}
                                <div
                                    className="relative flex flex-col justify-between w-full h-full min-h-[340px] bg-gradient-to-br from-[#FFFEEA] via-[#FFF6C8] to-[#FEEA9A] border border-[#F8E285] rounded-[2px] p-6 sm:p-7 shadow-[0_2px_6px_rgba(7,20,47,0.04),0_8px_18px_-3px_rgba(7,20,47,0.07)] group-hover:shadow-[0_4px_12px_rgba(7,20,47,0.06),0_18px_30px_-5px_rgba(7,20,47,0.12)] transition-shadow duration-300 overflow-hidden"
                                    style={{
                                        clipPath: "polygon(0% 0%, 100% 0%, 100% calc(100% - 38px), calc(100% - 38px) 100%, 0% 100%)",
                                    }}
                                >
                                    {/* 1. Paper Grain Texture Overlay */}
                                    <div 
                                        className="absolute inset-0 pointer-events-none opacity-[0.07] mix-blend-multiply z-0"
                                        style={{
                                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='stickyGrainAbout2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23stickyGrainAbout2)'/%3E%3C/svg%3E")`,
                                            backgroundRepeat: "repeat",
                                        }}
                                        aria-hidden="true" 
                                    />

                                    {/* 2. Organic Paper Wrinkles & Soft Lighting Folds */}
                                    <div 
                                        className="absolute inset-0 pointer-events-none z-0 opacity-60"
                                        style={{
                                            background: "linear-gradient(125deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 24%, rgba(0,0,0,0.02) 28%, rgba(255,255,255,0.3) 34%, rgba(255,255,255,0) 48%, rgba(0,0,0,0.025) 58%, rgba(255,255,255,0.35) 66%, rgba(255,255,255,0) 85%, rgba(0,0,0,0.02) 100%)",
                                        }}
                                        aria-hidden="true" 
                                    />



                                    {/* 4. Playful Ray Burst Doodled in Top Left */}
                                    <svg 
                                        className="absolute top-3.5 left-4 w-4 h-4 text-[#b45309] pointer-events-none opacity-60 z-10" 
                                        viewBox="0 0 16 16" 
                                        fill="none"
                                        aria-hidden="true"
                                    >
                                        <path d="M3 3 L5.5 5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                                        <path d="M8 1 L8 4.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                                        <path d="M13 3 L10.5 5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                                    </svg>

                                    {/* 5. 3D Corner Dog-Ear Roll */}
                                    <RealisticCornerCurl undersideColor="#F7DF7C" />

                                    <div className="relative z-10">
                                        <span className="text-[10px] font-mono tracking-widest text-[#b45309] font-bold uppercase block mb-2">
                                            STARTING POINT 02
                                        </span>
                                        <h3 className="text-xl font-bold text-[#000c24] mb-1 font-sans">
                                            Small businesses
                                        </h3>

                                        {/* Direct Paper Artwork Integration */}
                                        <div className="relative w-full h-[125px] sm:h-[135px] my-3 flex items-center justify-center">
                                            <div className="absolute bottom-2 w-32 h-6 bg-[#3a2800]/15 rounded-full blur-md" />
                                            <div className="relative w-[130px] h-[130px] group-hover:scale-105 transition-transform duration-300">
                                                <Image
                                                    src="/images/industries/retail_light.webp"
                                                    alt="3D Commerce Cart"
                                                    width={140}
                                                    height={140}
                                                    className="w-full h-full object-contain filter drop-shadow-[0_8px_12px_rgba(40,25,0,0.16)]"
                                                />
                                            </div>
                                        </div>

                                        <p className="text-sm sm:text-base text-[#000c24]/80 leading-relaxed font-sans">
                                            Looking to improve your online presence or make daily work easier? We help identify practical solutions.
                                        </p>
                                    </div>

                                    {/* Handwritten Note Bottom (Blue Ink on Canary Yellow) */}
                                    <div className="relative z-10 mt-5 pt-3.5 border-t border-[#F8E285]/90">
                                        <span className={`${caveat.className} text-base sm:text-[17px] text-[#0057fe] font-bold block`}>
                                            * Pragmatic upgrades that save time
                                        </span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Audience 3: Growing businesses (Pastel Soft Peach / Warm Coral) */}
                            <motion.div
                                {...fadeInProps(0.3)}
                                className="group relative w-full h-full transform -rotate-[0.8deg] hover:rotate-0 hover:-translate-y-1.5 transition-all duration-300 ease-out origin-top select-none"
                            >
                                {/* Hanging Paper Drop Shadow beneath note */}
                                <div 
                                    className="absolute inset-x-2 -bottom-2 h-8 bg-[#07142f]/[0.08] blur-[8px] rounded-[50%] pointer-events-none group-hover:bg-[#07142f]/[0.14] group-hover:blur-[12px] group-hover:-bottom-3 transition-all duration-300"
                                    aria-hidden="true"
                                />

                                {/* Realistic Kraft Masking Tape */}
                                <TopMaskingTape angle={-0.5} />

                                {/* Main Sticky Note Sheet (Pastel Soft Peach) */}
                                <div
                                    className="relative flex flex-col justify-between w-full h-full min-h-[340px] bg-gradient-to-br from-[#FFF2EB] via-[#FEDDCB] to-[#FECBBA] border border-[#F9BAA5] rounded-[2px] p-6 sm:p-7 shadow-[0_2px_6px_rgba(7,20,47,0.04),0_8px_18px_-3px_rgba(7,20,47,0.07)] group-hover:shadow-[0_4px_12px_rgba(7,20,47,0.06),0_18px_30px_-5px_rgba(7,20,47,0.12)] transition-shadow duration-300 overflow-hidden"
                                    style={{
                                        clipPath: "polygon(0% 0%, 100% 0%, 100% calc(100% - 38px), calc(100% - 38px) 100%, 0% 100%)",
                                    }}
                                >
                                    {/* 1. Paper Grain Texture Overlay */}
                                    <div 
                                        className="absolute inset-0 pointer-events-none opacity-[0.07] mix-blend-multiply z-0"
                                        style={{
                                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='stickyGrainAbout3'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23stickyGrainAbout3)'/%3E%3C/svg%3E")`,
                                            backgroundRepeat: "repeat",
                                        }}
                                        aria-hidden="true" 
                                    />

                                    {/* 2. Organic Paper Wrinkles & Soft Lighting Folds */}
                                    <div 
                                        className="absolute inset-0 pointer-events-none z-0 opacity-60"
                                        style={{
                                            background: "linear-gradient(125deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 24%, rgba(0,0,0,0.02) 28%, rgba(255,255,255,0.3) 34%, rgba(255,255,255,0) 48%, rgba(0,0,0,0.025) 58%, rgba(255,255,255,0.35) 66%, rgba(255,255,255,0) 85%, rgba(0,0,0,0.02) 100%)",
                                        }}
                                        aria-hidden="true" 
                                    />



                                    {/* 4. Playful Ray Burst Doodled in Top Right */}
                                    <svg 
                                        className="absolute top-3.5 right-4 w-4 h-4 text-[#ea580c] pointer-events-none opacity-60 z-10" 
                                        viewBox="0 0 16 16" 
                                        fill="none"
                                        aria-hidden="true"
                                    >
                                        <path d="M3 3 L5.5 5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                                        <path d="M8 1 L8 4.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                                        <path d="M13 3 L10.5 5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                                    </svg>

                                    {/* 5. 3D Corner Dog-Ear Roll */}
                                    <RealisticCornerCurl undersideColor="#F7B59E" />

                                    <div className="relative z-10">
                                        <span className="text-[10px] font-mono tracking-widest text-[#ea580c] font-bold uppercase block mb-2">
                                            STARTING POINT 03
                                        </span>
                                        <h3 className="text-xl font-bold text-[#000c24] mb-1 font-sans">
                                            Growing businesses
                                        </h3>

                                        {/* Direct Paper Artwork Integration */}
                                        <div className="relative w-full h-[125px] sm:h-[135px] my-3 flex items-center justify-center">
                                            <div className="absolute bottom-2 w-32 h-6 bg-[#3a1500]/15 rounded-full blur-md" />
                                            <div className="relative w-[130px] h-[130px] group-hover:scale-105 transition-transform duration-300">
                                                <Image
                                                    src="/images/industries/professional_services_light.webp"
                                                    alt="3D Growth Chart"
                                                    width={140}
                                                    height={140}
                                                    className="w-full h-full object-contain filter drop-shadow-[0_8px_12px_rgba(40,15,0,0.16)]"
                                                />
                                            </div>
                                        </div>

                                        <p className="text-sm sm:text-base text-[#000c24]/80 leading-relaxed font-sans">
                                            Need better software, automation or digital systems? We help you plan and build for your next stage.
                                        </p>
                                    </div>

                                    {/* Handwritten Note Bottom */}
                                    <div className="relative z-10 mt-5 pt-3.5 border-t border-[#F9BAA5]/90">
                                        <span className={`${caveat.className} text-base sm:text-[17px] text-[#0057fe] font-bold block`}>
                                            * Robust architectures ready to scale
                                        </span>
                                    </div>
                                </div>
                            </motion.div>

                        </div>

                        {/* Audience Closing Statement */}
                        <div className="mt-10 sm:mt-12 text-center max-w-2xl mx-auto">
                            <div className="inline-block bg-[#FCFAF6] border border-[#E2DDD3]/90 px-6 py-3 rounded-full shadow-[0_2px_8px_rgba(30,20,10,0.04)]">
                                <p className={`${caveat.className} text-xl sm:text-2xl text-[#07142F] font-bold`}>
                                    &ldquo;We believe the right solution starts with understanding the business, not choosing technology first.&rdquo;
                                </p>
                            </div>
                        </div>
                    </div>

                    <div id="how-we-work" className="scroll-mt-28" />
                    {/* ========================================================
                        SECTION 03 — HOW WE WORK
                        (Exact Editorial Reference Layout: 5 Process Steps + Workspace Photo)
                    ======================================================== */}
                    <div className="w-full">
                        {/* Section Header: Centered Eyebrow + "Our Process" + Subtitle */}
                        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                            {/* Eyebrow Label: Matching Reference Image (dot + horizontal line + uppercase tracking) */}
                            <div className="inline-flex items-center gap-2.5 mb-4 sm:mb-5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#075BFA]" />
                                <span className="w-6 h-[2px] bg-[#075BFA]/70" aria-hidden="true" />
                                <span className="text-xs font-mono font-bold tracking-[0.22em] text-[#075BFA] uppercase">
                                    SECTION 03 · HOW WE WORK
                                </span>
                            </div>

                            {/* Main Heading: Our Process with Hand-Drawn Blue Underline */}
                            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-black text-[#07142F] tracking-tight leading-tight font-sans max-w-3xl mx-auto">
                                Our{" "}
                                <span className="relative inline-block whitespace-nowrap pb-3 sm:pb-4">
                                    Process
                                    {/* Hand-Drawn Blue Brush Underline */}
                                    <svg
                                        className="absolute bottom-0 left-0 w-full h-3 sm:h-4 text-[#075BFA] pointer-events-none translate-y-2 sm:translate-y-3"
                                        viewBox="0 0 280 14"
                                        fill="none"
                                        preserveAspectRatio="none"
                                        aria-hidden="true"
                                    >
                                        <motion.path
                                            d="M 3 10 C 80 4, 200 4, 277 9"
                                            stroke="currentColor"
                                            strokeWidth="3.5"
                                            strokeLinecap="round"
                                            initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                                            whileInView={{ pathLength: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.85, delay: 0.2, ease: "easeOut" }}
                                        />
                                    </svg>
                                </span>
                            </h2>

                            {/* Subtitle / Supporting Paragraph */}
                            <p className="mt-5 sm:mt-6 text-slate-600 text-sm sm:text-base md:text-[17px] max-w-2xl mx-auto leading-relaxed font-sans text-balance">
                                A structured and collaborative process that takes you from idea to a working solution.
                            </p>
                        </div>

                        {/* Main Grid: 5 Steps in 3-Columns (Left) + Vertical Workspace Image (Right) */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-14 items-center max-w-7xl mx-auto">
                            
                            {/* Left Area: 5 Process Steps in 3x2 Grid on desktop */}
                            <div className="lg:col-span-8 xl:col-span-8">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 lg:gap-x-10 gap-y-10 sm:gap-y-12 lg:gap-y-14">
                                    {[
                                        {
                                            num: "01",
                                            title: "Understand",
                                            desc: "We learn about your business, your goals and the challenges you want to solve.",
                                            isBlue: true,
                                        },
                                        {
                                            num: "02",
                                            title: "Plan",
                                            desc: "We discuss the right approach, project scope, deliverables and expected timeline.",
                                            isBlue: false,
                                        },
                                        {
                                            num: "03",
                                            title: "Build",
                                            desc: "We design and develop the solution, keeping communication clear throughout the project.",
                                            isBlue: false,
                                        },
                                        {
                                            num: "04",
                                            title: "Launch",
                                            desc: "We test the work, prepare it for launch and help you get started.",
                                            isBlue: false,
                                        },
                                        {
                                            num: "05",
                                            title: "Improve",
                                            desc: "When further support is agreed, we help with updates and improvements as your needs change.",
                                            isBlue: false,
                                        },
                                    ].map((step) => (
                                        <div key={step.num} className="flex flex-col">
                                            {/* Large Bold Numeral */}
                                            <span 
                                                className={`text-5xl sm:text-6xl lg:text-[64px] font-black font-sans leading-none tracking-tight ${
                                                    step.isBlue ? "text-[#075BFA]" : "text-[#07142F]"
                                                }`}
                                            >
                                                {step.num}
                                            </span>

                                            {/* Step Title */}
                                            <h3 className="text-xl sm:text-2xl font-bold text-[#07142F] font-sans tracking-tight mt-3 sm:mt-3.5">
                                                {step.title}
                                            </h3>

                                            {/* Blue Accent Underline */}
                                            <div className="w-6 h-[2px] bg-[#075BFA] mt-2 mb-3" aria-hidden="true" />

                                            {/* Description */}
                                            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-sans max-w-xs">
                                                {step.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Area: Vertical Editorial Photograph (2:3 Aspect Ratio) */}
                            <div className="lg:col-span-4 xl:col-span-4 flex justify-center lg:justify-end">
                                <div className="relative w-full max-w-sm lg:max-w-none aspect-[2/3] rounded-2xl overflow-hidden border border-slate-200/90 shadow-[0_8px_30px_rgba(7,20,47,0.06)] bg-slate-100">
                                    <Image
                                        src="/nisschay_vertical_workspace.webp"
                                        alt="Nisschay workspace showing a laptop with code and digital website design."
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 45vw, 420px"
                                        className="object-cover"
                                        loading="lazy"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div id="what-we-believe" className="scroll-mt-28" />
                    {/* ========================================================
                        SECTION 04 — WHAT WE BELIEVE
                        (Studio Manifesto of Principles)
                    ======================================================== */}
                    <div className="w-full">
                        <div className="text-center mb-10 sm:mb-14">
                            <ChapterEyebrow label="SECTION 04 · WHAT WE BELIEVE" />
                            <motion.h2 
                                {...fadeInProps(0.1)}
                                className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold font-sans tracking-tight text-[#07142F] max-w-3xl mx-auto leading-tight text-balance"
                            >
                                The principles behind{" "}
                                <span className="relative inline-block whitespace-nowrap pb-3 sm:pb-4">
                                    every decision.
                                    {/* Hand-Drawn Blue Brush Underline */}
                                    <svg
                                        className="absolute bottom-0 left-0 w-full h-3 sm:h-3.5 text-[#075BFA] pointer-events-none translate-y-2 sm:translate-y-3"
                                        viewBox="0 0 280 14"
                                        fill="none"
                                        preserveAspectRatio="none"
                                        aria-hidden="true"
                                    >
                                        <motion.path
                                            d="M 3 10 C 80 4, 200 4, 277 9"
                                            stroke="currentColor"
                                            strokeWidth="3.5"
                                            strokeLinecap="round"
                                            initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                                            whileInView={{ pathLength: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.85, delay: 0.2, ease: "easeOut" }}
                                        />
                                    </svg>
                                </span>
                            </motion.h2>
                        </div>

                        {/* Staggered Studio Manifesto Notes (Realistic Pastel Sticky Notes) */}
                        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-start">

                            {/* Principle 01: Understand before building (Pastel Soft Blue) */}
                            <motion.div
                                {...fadeInProps(0.1)}
                                className="group relative w-full h-full transform -rotate-[0.9deg] hover:rotate-0 hover:-translate-y-1.5 transition-all duration-300 ease-out origin-top select-none"
                            >
                                {/* Hanging Paper Drop Shadow */}
                                <div 
                                    className="absolute inset-x-2 -bottom-2 h-8 bg-[#07142f]/[0.08] blur-[8px] rounded-[50%] pointer-events-none group-hover:bg-[#07142f]/[0.14] group-hover:blur-[12px] group-hover:-bottom-3 transition-all duration-300"
                                    aria-hidden="true"
                                />

                                {/* Realistic Kraft Masking Tape */}
                                <TopMaskingTape angle={-0.8} />

                                {/* Sticky Note Sheet (Pastel Soft Blue) */}
                                <div
                                    className="relative flex flex-col justify-between w-full h-full min-h-[250px] bg-gradient-to-br from-[#EEF6FF] via-[#E0EFFE] to-[#CFE5FD] border border-[#B8DCFE] rounded-[2px] p-6 sm:p-7 shadow-[0_2px_6px_rgba(7,20,47,0.04),0_8px_18px_-3px_rgba(7,20,47,0.07)] group-hover:shadow-[0_4px_12px_rgba(7,20,47,0.06),0_18px_30px_-5px_rgba(7,20,47,0.12)] transition-shadow duration-300 overflow-hidden"
                                    style={{
                                        clipPath: "polygon(0% 0%, 100% 0%, 100% calc(100% - 38px), calc(100% - 38px) 100%, 0% 100%)",
                                    }}
                                >
                                    {/* Paper Grain Texture */}
                                    <div 
                                        className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-multiply z-0"
                                        style={{
                                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paperGrainB1'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paperGrainB1)'/%3E%3C/svg%3E")`,
                                            backgroundRepeat: "repeat",
                                        }}
                                        aria-hidden="true"
                                    />

                                    {/* Organic Paper Wrinkles & Soft Folds */}
                                    <div 
                                        className="absolute inset-0 pointer-events-none z-0 opacity-60"
                                        style={{
                                            background: "linear-gradient(125deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 24%, rgba(0,0,0,0.02) 28%, rgba(255,255,255,0.3) 34%, rgba(255,255,255,0) 48%, rgba(0,0,0,0.025) 58%, rgba(255,255,255,0.35) 66%, rgba(255,255,255,0) 85%, rgba(0,0,0,0.02) 100%)",
                                        }}
                                        aria-hidden="true" 
                                    />

                                    {/* Playful Doodled Ray Burst in Top Right */}
                                    <svg 
                                        className="absolute top-3.5 right-4 w-4 h-4 text-[#0057fe] pointer-events-none opacity-70 z-10" 
                                        viewBox="0 0 16 16" 
                                        fill="none" 
                                        aria-hidden="true"
                                    >
                                        <path d="M3 3 L5.5 5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                                        <path d="M8 1 L8 4.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                                        <path d="M13 3 L10.5 5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                                    </svg>

                                    {/* 3D Corner Dog-Ear Roll */}
                                    <RealisticCornerCurl undersideColor="#BCDDFC" />

                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-xs font-mono font-bold tracking-widest text-[#0057fe] uppercase">
                                                PRINCIPLE 01
                                            </span>
                                            <FiCompass className="text-[#0057fe]" size={18} />
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold text-[#000c24] mb-2 font-sans">
                                            Understand before building
                                        </h3>
                                        <p className="text-sm sm:text-base text-[#000c24]/80 leading-relaxed font-sans">
                                            Good solutions begin with listening and asking the right questions.
                                        </p>
                                    </div>
                                    <div className="relative z-10 mt-5 pt-3.5 border-t border-[#B8DCFE]/90 flex items-center justify-between">
                                        <span className={`${caveat.className} text-base text-[#0057fe] font-bold`}>
                                            * Listen first, design second
                                        </span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Principle 02: Keep things simple (Pastel Warm Canary Yellow) */}
                            <motion.div
                                {...fadeInProps(0.2)}
                                className="group relative w-full h-full transform rotate-[0.8deg] hover:rotate-0 hover:-translate-y-1.5 transition-all duration-300 ease-out origin-top select-none"
                            >
                                {/* Hanging Paper Drop Shadow */}
                                <div 
                                    className="absolute inset-x-2 -bottom-2 h-8 bg-[#07142f]/[0.08] blur-[8px] rounded-[50%] pointer-events-none group-hover:bg-[#07142f]/[0.14] group-hover:blur-[12px] group-hover:-bottom-3 transition-all duration-300"
                                    aria-hidden="true"
                                />

                                {/* Realistic Kraft Masking Tape */}
                                <TopMaskingTape angle={0.6} />

                                {/* Sticky Note Sheet (Pastel Warm Canary Yellow) */}
                                <div
                                    className="relative flex flex-col justify-between w-full h-full min-h-[250px] bg-gradient-to-br from-[#FFFEEA] via-[#FFF6C8] to-[#FEEA9A] border border-[#F8E285] rounded-[2px] p-6 sm:p-7 shadow-[0_2px_6px_rgba(7,20,47,0.04),0_8px_18px_-3px_rgba(7,20,47,0.07)] group-hover:shadow-[0_4px_12px_rgba(7,20,47,0.06),0_18px_30px_-5px_rgba(7,20,47,0.12)] transition-shadow duration-300 overflow-hidden"
                                    style={{
                                        clipPath: "polygon(0% 0%, 100% 0%, 100% calc(100% - 38px), calc(100% - 38px) 100%, 0% 100%)",
                                    }}
                                >
                                    {/* Paper Grain Texture */}
                                    <div 
                                        className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-multiply z-0"
                                        style={{
                                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paperGrainB2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paperGrainB2)'/%3E%3C/svg%3E")`,
                                            backgroundRepeat: "repeat",
                                        }}
                                        aria-hidden="true"
                                    />

                                    {/* Organic Paper Wrinkles & Soft Folds */}
                                    <div 
                                        className="absolute inset-0 pointer-events-none z-0 opacity-60"
                                        style={{
                                            background: "linear-gradient(125deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 24%, rgba(0,0,0,0.02) 28%, rgba(255,255,255,0.3) 34%, rgba(255,255,255,0) 48%, rgba(0,0,0,0.025) 58%, rgba(255,255,255,0.35) 66%, rgba(255,255,255,0) 85%, rgba(0,0,0,0.02) 100%)",
                                        }}
                                        aria-hidden="true" 
                                    />



                                    {/* Playful Doodled Ray Burst in Top Right */}
                                    <svg 
                                        className="absolute top-3.5 right-4 w-4 h-4 text-[#b45309] pointer-events-none opacity-60 z-10" 
                                        viewBox="0 0 16 16" 
                                        fill="none" 
                                        aria-hidden="true"
                                    >
                                        <path d="M3 3 L5.5 5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                                        <path d="M8 1 L8 4.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                                        <path d="M13 3 L10.5 5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                                    </svg>

                                    {/* 3D Corner Dog-Ear Roll */}
                                    <RealisticCornerCurl undersideColor="#F7DF7C" />

                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-xs font-mono font-bold tracking-widest text-[#b45309] uppercase">
                                                PRINCIPLE 02
                                            </span>
                                            <FiFeather className="text-[#b45309]" size={18} />
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold text-[#000c24] mb-2 font-sans">
                                            Keep things simple
                                        </h3>
                                        <p className="text-sm sm:text-base text-[#000c24]/80 leading-relaxed font-sans">
                                            Technology should make life easier, not more complicated.
                                        </p>
                                    </div>
                                    <div className="relative z-10 mt-5 pt-3.5 border-t border-[#F8E285]/90 flex items-center justify-between">
                                        <span className={`${caveat.className} text-base text-[#0057fe] font-bold`}>
                                            * Clarity over complexity
                                        </span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Principle 03: Be honest and clear (Pastel Soft Peach / Warm Coral) */}
                            <motion.div
                                {...fadeInProps(0.3)}
                                className="group relative w-full h-full transform -rotate-[0.6deg] hover:rotate-0 hover:-translate-y-1.5 transition-all duration-300 ease-out origin-top select-none"
                            >
                                {/* Hanging Paper Drop Shadow */}
                                <div 
                                    className="absolute inset-x-2 -bottom-2 h-8 bg-[#07142f]/[0.08] blur-[8px] rounded-[50%] pointer-events-none group-hover:bg-[#07142f]/[0.14] group-hover:blur-[12px] group-hover:-bottom-3 transition-all duration-300"
                                    aria-hidden="true"
                                />

                                {/* Realistic Kraft Masking Tape */}
                                <TopMaskingTape angle={-0.5} />

                                {/* Sticky Note Sheet (Pastel Soft Peach) */}
                                <div
                                    className="relative flex flex-col justify-between w-full h-full min-h-[250px] bg-gradient-to-br from-[#FFF2EB] via-[#FEDDCB] to-[#FECBBA] border border-[#F9BAA5] rounded-[2px] p-6 sm:p-7 shadow-[0_2px_6px_rgba(7,20,47,0.04),0_8px_18px_-3px_rgba(7,20,47,0.07)] group-hover:shadow-[0_4px_12px_rgba(7,20,47,0.06),0_18px_30px_-5px_rgba(7,20,47,0.12)] transition-shadow duration-300 overflow-hidden"
                                    style={{
                                        clipPath: "polygon(0% 0%, 100% 0%, 100% calc(100% - 38px), calc(100% - 38px) 100%, 0% 100%)",
                                    }}
                                >
                                    {/* Paper Grain Texture */}
                                    <div 
                                        className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-multiply z-0"
                                        style={{
                                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paperGrainB3'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paperGrainB3)'/%3E%3C/svg%3E")`,
                                            backgroundRepeat: "repeat",
                                        }}
                                        aria-hidden="true"
                                    />

                                    {/* Organic Paper Wrinkles & Soft Folds */}
                                    <div 
                                        className="absolute inset-0 pointer-events-none z-0 opacity-60"
                                        style={{
                                            background: "linear-gradient(125deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 24%, rgba(0,0,0,0.02) 28%, rgba(255,255,255,0.3) 34%, rgba(255,255,255,0.48) 48%, rgba(0,0,0,0.025) 58%, rgba(255,255,255,0.35) 66%, rgba(255,255,255,0) 85%, rgba(0,0,0,0.02) 100%)",
                                        }}
                                        aria-hidden="true" 
                                    />

                                    {/* Playful Doodled Ray Burst in Top Right */}
                                    <svg 
                                        className="absolute top-3.5 right-4 w-4 h-4 text-[#ea580c] pointer-events-none opacity-60 z-10" 
                                        viewBox="0 0 16 16" 
                                        fill="none" 
                                        aria-hidden="true"
                                    >
                                        <path d="M3 3 L5.5 5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                                        <path d="M8 1 L8 4.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                                        <path d="M13 3 L10.5 5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                                    </svg>

                                    {/* 3D Corner Dog-Ear Roll */}
                                    <RealisticCornerCurl undersideColor="#F7B59E" />

                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-xs font-mono font-bold tracking-widest text-[#ea580c] uppercase">
                                                PRINCIPLE 03
                                            </span>
                                            <FiCheckCircle className="text-[#ea580c]" size={18} />
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold text-[#000c24] mb-2 font-sans">
                                            Be honest and clear
                                        </h3>
                                        <p className="text-sm sm:text-base text-[#000c24]/80 leading-relaxed font-sans">
                                            Clear communication and realistic expectations matter.
                                        </p>
                                    </div>
                                    <div className="relative z-10 mt-5 pt-3.5 border-t border-[#F9BAA5]/90 flex items-center justify-between">
                                        <span className={`${caveat.className} text-base text-[#0057fe] font-bold`}>
                                            * Realistic commitments
                                        </span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Principle 04: Build with purpose (Pastel Light Lavender) */}
                            <motion.div
                                {...fadeInProps(0.4)}
                                className="group relative w-full h-full transform rotate-[0.7deg] hover:rotate-0 hover:-translate-y-1.5 transition-all duration-300 ease-out origin-top select-none md:col-span-1 lg:col-span-1"
                            >
                                {/* Hanging Paper Drop Shadow */}
                                <div 
                                    className="absolute inset-x-2 -bottom-2 h-8 bg-[#07142f]/[0.08] blur-[8px] rounded-[50%] pointer-events-none group-hover:bg-[#07142f]/[0.14] group-hover:blur-[12px] group-hover:-bottom-3 transition-all duration-300"
                                    aria-hidden="true"
                                />

                                {/* Realistic Kraft Masking Tape */}
                                <TopMaskingTape angle={0.7} />

                                {/* Sticky Note Sheet (Pastel Light Lavender) */}
                                <div
                                    className="relative flex flex-col justify-between w-full h-full min-h-[250px] bg-gradient-to-br from-[#F7F1FE] via-[#EDE0FC] to-[#DFCEFB] border border-[#D2B6F8] rounded-[2px] p-6 sm:p-7 shadow-[0_2px_6px_rgba(7,20,47,0.04),0_8px_18px_-3px_rgba(7,20,47,0.07)] group-hover:shadow-[0_4px_12px_rgba(7,20,47,0.06),0_18px_30px_-5px_rgba(7,20,47,0.12)] transition-shadow duration-300 overflow-hidden"
                                    style={{
                                        clipPath: "polygon(0% 0%, 100% 0%, 100% calc(100% - 38px), calc(100% - 38px) 100%, 0% 100%)",
                                    }}
                                >
                                    {/* Paper Grain Texture */}
                                    <div 
                                        className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-multiply z-0"
                                        style={{
                                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paperGrainB4'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paperGrainB4)'/%3E%3C/svg%3E")`,
                                            backgroundRepeat: "repeat",
                                        }}
                                        aria-hidden="true"
                                    />

                                    {/* Organic Paper Wrinkles & Soft Folds */}
                                    <div 
                                        className="absolute inset-0 pointer-events-none z-0 opacity-60"
                                        style={{
                                            background: "linear-gradient(125deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 24%, rgba(0,0,0,0.02) 28%, rgba(255,255,255,0.3) 34%, rgba(255,255,255,0.48) 48%, rgba(0,0,0,0.025) 58%, rgba(255,255,255,0.35) 66%, rgba(255,255,255,0) 85%, rgba(0,0,0,0.02) 100%)",
                                        }}
                                        aria-hidden="true" 
                                    />

                                    {/* Playful Doodled Ray Burst in Top Right */}
                                    <svg 
                                        className="absolute top-3.5 right-4 w-4 h-4 text-[#7c3aed] pointer-events-none opacity-60 z-10" 
                                        viewBox="0 0 16 16" 
                                        fill="none" 
                                        aria-hidden="true"
                                    >
                                        <path d="M3 3 L5.5 5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                                        <path d="M8 1 L8 4.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                                        <path d="M13 3 L10.5 5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                                    </svg>

                                    {/* 3D Corner Dog-Ear Roll */}
                                    <RealisticCornerCurl undersideColor="#CBACF6" />

                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-xs font-mono font-bold tracking-widest text-[#7c3aed] uppercase">
                                                PRINCIPLE 04
                                            </span>
                                            <FiTool className="text-[#7c3aed]" size={18} />
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold text-[#000c24] mb-2 font-sans">
                                            Build with purpose
                                        </h3>
                                        <p className="text-sm sm:text-base text-[#000c24]/80 leading-relaxed font-sans">
                                            Focus on solutions that address real business needs.
                                        </p>
                                    </div>
                                    <div className="relative z-10 mt-5 pt-3.5 border-t border-[#D2B6F8]/90 flex items-center justify-between">
                                        <span className={`${caveat.className} text-base text-[#0057fe] font-bold`}>
                                            * Tangible business outcomes
                                        </span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Principle 05: Keep improving (Pastel Pale Mint / Fresh Green) */}
                            <motion.div
                                {...fadeInProps(0.5)}
                                className="group relative w-full h-full transform -rotate-[0.8deg] hover:rotate-0 hover:-translate-y-1.5 transition-all duration-300 ease-out origin-top select-none md:col-span-2 lg:col-span-2"
                            >
                                {/* Hanging Paper Drop Shadow */}
                                <div 
                                    className="absolute inset-x-2 -bottom-2 h-8 bg-[#07142f]/[0.08] blur-[8px] rounded-[50%] pointer-events-none group-hover:bg-[#07142f]/[0.14] group-hover:blur-[12px] group-hover:-bottom-3 transition-all duration-300"
                                    aria-hidden="true"
                                />

                                {/* Realistic Kraft Masking Tape */}
                                <TopMaskingTape angle={-0.4} />

                                {/* Sticky Note Sheet (Pastel Pale Mint / Fresh Green) */}
                                <div
                                    className="relative flex flex-col justify-between w-full h-full min-h-[250px] bg-gradient-to-br from-[#EDFAF2] via-[#DBF4E2] to-[#C4EED1] border border-[#B2E2C4] rounded-[2px] p-6 sm:p-7 shadow-[0_2px_6px_rgba(7,20,47,0.04),0_8px_18px_-3px_rgba(7,20,47,0.07)] group-hover:shadow-[0_4px_12px_rgba(7,20,47,0.06),0_18px_30px_-5px_rgba(7,20,47,0.12)] transition-shadow duration-300 overflow-hidden"
                                    style={{
                                        clipPath: "polygon(0% 0%, 100% 0%, 100% calc(100% - 38px), calc(100% - 38px) 100%, 0% 100%)",
                                    }}
                                >
                                    {/* Paper Grain Texture */}
                                    <div 
                                        className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-multiply z-0"
                                        style={{
                                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paperGrainB5'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paperGrainB5)'/%3E%3C/svg%3E")`,
                                            backgroundRepeat: "repeat",
                                        }}
                                        aria-hidden="true"
                                    />

                                    {/* Organic Paper Wrinkles & Soft Folds */}
                                    <div 
                                        className="absolute inset-0 pointer-events-none z-0 opacity-60"
                                        style={{
                                            background: "linear-gradient(125deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 24%, rgba(0,0,0,0.02) 28%, rgba(255,255,255,0.3) 34%, rgba(255,255,255,0.48) 48%, rgba(0,0,0,0.025) 58%, rgba(255,255,255,0.35) 66%, rgba(255,255,255,0) 85%, rgba(0,0,0,0.02) 100%)",
                                        }}
                                        aria-hidden="true" 
                                    />

                                    {/* Playful Doodled Ray Burst in Top Right */}
                                    <svg 
                                        className="absolute top-3.5 right-4 w-4 h-4 text-[#059669] pointer-events-none opacity-60 z-10" 
                                        viewBox="0 0 16 16" 
                                        fill="none" 
                                        aria-hidden="true"
                                    >
                                        <path d="M3 3 L5.5 5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                                        <path d="M8 1 L8 4.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                                        <path d="M13 3 L10.5 5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                                    </svg>

                                    {/* 3D Corner Dog-Ear Roll */}
                                    <RealisticCornerCurl undersideColor="#A7DDC0" />

                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-xs font-mono font-bold tracking-widest text-[#059669] uppercase">
                                                PRINCIPLE 05 · LONG-TERM HORIZON
                                            </span>
                                            <FiTrendingUp className="text-[#059669]" size={18} />
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold text-[#000c24] mb-2 font-sans">
                                            Keep improving
                                        </h3>
                                        <p className="text-sm sm:text-base text-[#000c24]/80 leading-relaxed max-w-2xl font-sans">
                                            Look for better ways to make the work more useful over time.
                                        </p>
                                    </div>
                                    <div className="relative z-10 mt-5 pt-3.5 border-t border-[#B2E2C4]/90 flex items-center justify-between">
                                        <span className={`${caveat.className} text-base text-[#0057fe] font-bold`}>
                                            * Practical compounding value
                                        </span>
                                        <span className="text-[10px] font-mono tracking-widest text-[#059669]/70 font-bold uppercase">
                                            MANIFESTO
                                        </span>
                                    </div>
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
                            className="relative max-w-3xl mx-auto bg-slate-50/80 border border-slate-200/90 rounded-2xl p-8 sm:p-12 md:p-14 text-center shadow-[0_16px_36px_rgba(7,20,47,0.06)]"
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
                                        className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center px-8 py-3.5 bg-white text-[#07142F] hover:text-black text-sm font-semibold font-sans rounded-full border border-slate-200 hover:bg-slate-50 transition-all duration-200 active:scale-95"
                                    >
                                        Explore Our Services
                                    </Link>
                                )}
                            </div>

                            {/* Closing Signature Block */}
                            <div className="mt-10 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
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
