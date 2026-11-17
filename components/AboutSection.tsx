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
                            className="relative z-10 bg-gradient-to-b from-[#FAF7F0] via-[#F6F0E2] to-[#EFE7D5] border-y border-[#dfceb0]/90 px-5 xs:px-6 sm:px-12 md:px-16 lg:px-20 py-7 xs:py-8 sm:py-11 md:py-13 lg:py-15 text-center overflow-hidden"
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
                                    src="/logo-mark.webp" 
                                    alt="" 
                                    fill 
                                    priority
                                    sizes="(max-width: 640px) 192px, (max-width: 1024px) 320px, 384px"
                                    className="object-contain filter grayscale contrast-150" 
                                />
                            </div>

                            {/* Letter Content */}
                            <div className="relative z-20 flex flex-col items-center justify-center max-w-4xl mx-auto">
                                {/* Tasteful Stationery Letterhead Detail */}
                                <div className="w-full flex flex-col xs:flex-row items-center justify-between gap-1 xs:gap-2 pb-3.5 sm:pb-5 mb-4 sm:mb-6 border-b border-[#07142F]/10 text-slate-500 font-mono text-[8.5px] sm:text-[10px] tracking-[0.14em] sm:tracking-[0.22em] uppercase select-none">
                                    <span className="text-center xs:text-left">NISSCHAY STUDIO · DIGITAL SOLUTIONS</span>
                                    <span className="font-bold text-[#07142F] text-center xs:text-right shrink-0">ESTABLISHED · 2026</span>
                                </div>

                                {/* Heading */}
                                <h1 className={`${caveat.className} text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[78px] xl:text-[84px] font-bold text-[#075BFA] tracking-normal leading-[1.1] inline-block py-1 filter drop-shadow-[0_1px_1px_rgba(7,91,250,0.18)]`}>
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

                {/* Chapter Quick-Jump Navigation Track (Visible on md+) */}
                <div className="hidden md:flex items-center justify-center select-none -mt-6 sm:-mt-8 mb-4">
                    <nav 
                        aria-label="About page chapters"
                        className="inline-flex items-center gap-1 p-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-[0_2px_12px_rgba(7,20,47,0.04)] text-xs font-mono font-medium text-slate-600"
                    >
                        <a 
                            href="#why-we-exist" 
                            className="px-3.5 py-1.5 rounded-full hover:text-[#075BFA] hover:bg-blue-50/80 transition-colors"
                        >
                            01 · Why We Exist
                        </a>
                        <span className="text-slate-300">/</span>
                        <a 
                            href="#how-we-help" 
                            className="px-3.5 py-1.5 rounded-full hover:text-[#075BFA] hover:bg-blue-50/80 transition-colors"
                        >
                            02 · How We Help
                        </a>
                        <span className="text-slate-300">/</span>
                        <a 
                            href="#who-we-work-with" 
                            className="px-3.5 py-1.5 rounded-full hover:text-[#075BFA] hover:bg-blue-50/80 transition-colors"
                        >
                            03 · Clients
                        </a>
                        <span className="text-slate-300">/</span>
                        <a 
                            href="#how-we-work" 
                            className="px-3.5 py-1.5 rounded-full hover:text-[#075BFA] hover:bg-blue-50/80 transition-colors"
                        >
                            04 · Approach
                        </a>
                        <span className="text-slate-300">/</span>
                        <a 
                            href="#what-we-believe" 
                            className="px-3.5 py-1.5 rounded-full hover:text-[#075BFA] hover:bg-blue-50/80 transition-colors"
                        >
                            05 · Manifesto
                        </a>
                    </nav>
                </div>

                {/* ========================================================
                    CHAPTERS STACK
                ======================================================== */}
                <div className="space-y-28 sm:space-y-36 lg:space-y-44">

                    <div id="why-we-exist" className="scroll-mt-28" />
                    {/* ========================================================
                        SECTION 01 — WHY WE EXIST
                        (Exact Editorial Reference Layout)
                    ======================================================== */}
                    <div className="w-full">
                        {/* Section Header: Eyebrow + Headline with Hand-Drawn Underline */}
                        <div className="mb-10 sm:mb-12 lg:mb-14">
                            {/* Eyebrow Label: Matching Reference Image (dot + horizontal line + uppercase tracking) */}
                            <div className="inline-flex items-center gap-2.5 mb-4 sm:mb-5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#075BFA]" />
                                <span className="w-6 h-[2px] bg-[#075BFA]/70" aria-hidden="true" />
                                <span className="text-xs font-mono font-bold tracking-[0.22em] text-[#075BFA] uppercase">
                                    SECTION 01 · WHY WE EXIST
                                </span>
                            </div>

                            {/* Main Heading: 2 Lines with Blue Brush Underline Accent */}
                            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-black text-[#07142F] tracking-tight leading-[1.08] font-sans">
                                Technology should<br />
                                <span className="relative inline-block mt-1 sm:mt-2 pb-3 sm:pb-4">
                                    make things easier.
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
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                            initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                                            whileInView={{ pathLength: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.85, delay: 0.2, ease: "easeOut" }}
                                        />
                                    </svg>
                                </span>
                            </h2>
                        </div>

                        {/* Two-Column Editorial Spread */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-start pt-2">
                            
                            {/* Left Column: Why Nisschay Exists */}
                            <div className="lg:col-span-5 xl:col-span-4 lg:pr-10 xl:pr-12 space-y-4 sm:space-y-5">
                                <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
                                    <span className="w-1.5 h-5 bg-[#075BFA] rounded-full shrink-0" aria-hidden="true" />
                                    <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#07142F] uppercase">
                                        WHY NISSCHAY EXISTS
                                    </span>
                                </div>

                                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-sans">
                                    Nisschay helps businesses find and build practical digital solutions — from websites and software to AI, automation and digital marketing.
                                </p>
                                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-sans">
                                    Our goal is simple: use technology to solve real business problems and help you move forward.
                                </p>
                            </div>

                            {/* Vertical Divider on lg+ & Right Column: 4 Numbered Rows */}
                            <div className="lg:col-span-7 xl:col-span-8 lg:border-l lg:border-t-0 border-t border-slate-300/80 pt-8 lg:pt-0 lg:pl-10 xl:pl-14">
                                <div className="space-y-3 sm:space-y-3.5">
                                    {[
                                        {
                                            num: "01",
                                            title: "Understand the business",
                                            desc: "Learn about your goals, challenges and what you want to achieve.",
                                        },
                                        {
                                            num: "02",
                                            title: "Find the right solution",
                                            desc: "Suggest practical, simple and effective options for your needs.",
                                        },
                                        {
                                            num: "03",
                                            title: "Build with clear goals",
                                            desc: "Design and develop the solution with transparent communication.",
                                        },
                                        {
                                            num: "04",
                                            title: "Support and improve",
                                            desc: "Help you keep things running and make improvements when agreed.",
                                        },
                                    ].map((step) => (
                                        <motion.div
                                            key={step.num}
                                            whileHover={{ y: -2 }}
                                            whileTap={{ y: 2 }}
                                            transition={{ type: "spring", stiffness: 450, damping: 26 }}
                                            className="group relative w-full text-left p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 border-b-[3px] border-b-slate-300/90 shadow-[0_2px_0_rgba(15,23,42,0.03),0_3px_8px_rgba(15,23,42,0.02)] hover:bg-[#F2F6FE] hover:border-blue-200/90 hover:border-b-[3px] hover:border-b-blue-300/80 hover:shadow-[0_3px_0_rgba(7,91,250,0.08),0_8px_20px_rgba(7,20,47,0.04)] transition-all duration-200 cursor-pointer select-none"
                                        >
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-6">
                                                <div className="flex items-center gap-3.5 sm:gap-5 shrink-0">
                                                    {/* Keycap numeral badge */}
                                                    <span className="w-10 h-10 rounded-xl bg-slate-100/90 border border-slate-200/80 border-b-2 border-b-slate-300/80 font-mono font-bold text-sm sm:text-base text-slate-700 group-hover:bg-white group-hover:border-blue-200 group-hover:border-b-2 group-hover:border-b-blue-300 group-hover:text-[#075BFA] flex items-center justify-center transition-colors duration-200 shrink-0 shadow-sm">
                                                        {step.num}
                                                    </span>
                                                    <span className="font-bold text-[#07142F] group-hover:text-[#075BFA] text-base sm:text-lg font-sans w-auto sm:w-52 lg:w-56 shrink-0 transition-colors duration-200">
                                                        {step.title}
                                                    </span>
                                                </div>
                                                <p className="text-slate-600 group-hover:text-slate-700 text-sm sm:text-[15px] leading-relaxed font-sans flex-1 pl-[50px] sm:pl-0 transition-colors duration-200">
                                                    {step.desc}
                                                </p>
                                                <div className="hidden sm:flex items-center pl-2 shrink-0">
                                                    <span className="w-7 h-7 rounded-full bg-transparent group-hover:bg-white flex items-center justify-center text-slate-300 group-hover:text-[#075BFA] group-hover:translate-x-0.5 transition-all duration-200 shadow-none group-hover:shadow-xs">
                                                        <FiArrowRight className="w-4 h-4" />
                                                    </span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

<div id="how-we-help" className="scroll-mt-28" />
                    <div id="what-we-do" className="scroll-mt-28" />
                    {/* ========================================================
                        SECTION 02 — HOW WE HELP
                        (Exact Editorial Reference Layout)
                    ======================================================== */}
                    <div className="w-full">
                        {/* Section Header: Centered Eyebrow + Headline + Supporting Paragraph */}
                        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                            {/* Eyebrow Label: Matching Reference Image (dot + horizontal line + uppercase tracking) */}
                            <div className="inline-flex items-center gap-2.5 mb-4 sm:mb-5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#075BFA]" />
                                <span className="w-6 h-[2px] bg-[#075BFA]/70" aria-hidden="true" />
                                <span className="text-xs font-mono font-bold tracking-[0.22em] text-[#075BFA] uppercase">
                                    SECTION 02 · HOW WE HELP
                                </span>
                            </div>

                            {/* Main Heading: Centered with Blue Brush Underline */}
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-[#07142F] tracking-tight leading-[1.12] font-sans max-w-4xl mx-auto text-balance">
                                Different challenges.{" "}
                                <span className="relative inline-block whitespace-nowrap pb-3 sm:pb-4">
                                    One digital partner.
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
                            </h2>

                            {/* Supporting Paragraph */}
                            <p className="mt-5 sm:mt-6 text-slate-600 text-sm sm:text-base md:text-[17px] max-w-2xl mx-auto leading-relaxed font-sans text-balance">
                                From your first online presence to the systems that run your business, we help you find the right digital solutions and bring them together.
                            </p>
                        </div>

                        {/* 4 Full-Width Horizontal Editorial Rows */}
                        <div className="w-full border-t border-slate-300/80 divide-y divide-slate-300/80 border-b">
                            {[
                                {
                                    num: "01",
                                    category: "REACH CUSTOMERS",
                                    headline: "Make your business easier to find.",
                                    description: "Build a clear online presence that helps people understand what you offer and how to reach you.",
                                    serviceTag: "WEB PRESENCE · ONLINE VISIBILITY",
                                },
                                {
                                    num: "02",
                                    category: "SERVE CUSTOMERS",
                                    headline: "Give customers a better experience.",
                                    description: "Make it easier for people to explore your services, make enquiries and work with your business.",
                                    serviceTag: "WEBSITES · DIGITAL APPLICATIONS",
                                },
                                {
                                    num: "03",
                                    category: "SIMPLIFY WORK",
                                    headline: "Spend less time on repetitive tasks.",
                                    description: "Use useful software and automation to simplify everyday work and reduce manual effort.",
                                    serviceTag: "CUSTOM SOFTWARE · AI · AUTOMATION",
                                },
                                {
                                    num: "04",
                                    category: "KEEP MOVING",
                                    headline: "Keep your digital systems running.",
                                    description: "Get help with hosting, deployment, maintenance and improvements as your needs change.",
                                    serviceTag: "CLOUD · DEVOPS · TECHNICAL SUPPORT",
                                },
                            ].map((row) => (
                                <div
                                    key={row.num}
                                    className="flex flex-col md:flex-row md:items-stretch py-7 sm:py-8 lg:py-10 transition-colors duration-200 hover:bg-white/40"
                                >
                                    {/* Area 1: Large Blue Number */}
                                    <div className="w-full md:w-28 lg:w-36 shrink-0 md:border-r border-slate-300/80 md:pr-6 lg:pr-8 flex items-center mb-3 md:mb-0">
                                        <span 
                                            className="font-serif font-bold text-4xl sm:text-5xl lg:text-[54px] text-[#075BFA] tracking-tight leading-none"
                                            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                                        >
                                            {row.num}
                                        </span>
                                    </div>

                                    {/* Area 2: Blue Category Label & Prominent Headline */}
                                    <div className="w-full md:flex-[1.25] md:border-r border-slate-300/80 md:px-8 lg:px-12 flex flex-col justify-center mb-4 md:mb-0">
                                        <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#075BFA] uppercase mb-1.5 sm:mb-2 block">
                                            {row.category}
                                        </span>
                                        <h3 
                                            className="font-serif font-bold text-2xl sm:text-2xl md:text-[26px] lg:text-[29px] text-[#07142F] tracking-tight leading-snug"
                                            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                                        >
                                            {row.headline}
                                        </h3>
                                    </div>

                                    {/* Area 3: Short Explanation & Small Uppercase Service Category */}
                                    <div className="w-full md:flex-[1.1] flex flex-col justify-center md:pl-8 lg:pl-12">
                                        <p className="text-slate-600 text-sm sm:text-[15px] lg:text-base leading-relaxed font-sans max-w-xl">
                                            {row.description}
                                        </p>
                                        <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-[0.2em] text-slate-500 uppercase mt-2.5 sm:mt-3 block">
                                            {row.serviceTag}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div id="who-we-work-with" className="scroll-mt-28" />
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

                        {/* 3 Editorial Paper Compositions */}
                        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">

                            {/* Audience 1: Startups and new businesses */}
                            <motion.div
                                {...fadeInProps(0.1)}
                                className="relative bg-gradient-to-b from-[#FEFDFB] via-[#FAF7F0] to-[#F5F2EB] border border-[#E2DDD3]/90 rounded-[14px_11px_15px_12px] p-6 sm:p-8 flex flex-col justify-between shadow-[0_2px_4px_rgba(30,20,10,0.03),0_8px_20px_-3px_rgba(30,20,10,0.06),0_16px_32px_-6px_rgba(30,20,10,0.04)] transform -rotate-[0.8deg] hover:rotate-0 transition-transform duration-200 select-none"
                            >
                                {/* Fine Paper Fiber Grain Overlay */}
                                <div
                                    className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-multiply rounded-[inherit]"
                                    style={{
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paperGrain1'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paperGrain1)'/%3E%3C/svg%3E")`,
                                        backgroundRepeat: "repeat",
                                    }}
                                    aria-hidden="true"
                                />

                                {/* Realistic Translucent Kraft Masking Tape */}
                                <ScrapbookTape className="absolute -top-3.5 left-8 w-28 sm:w-32 h-6" angle={-2} />

                                <div className="relative z-10">
                                    <span className="text-[10px] font-mono tracking-widest text-[#075BFA] font-bold uppercase block mb-2">
                                        STARTING POINT 01
                                    </span>
                                    <h3 className="text-xl font-bold text-[#07142F] mb-3 font-sans">
                                        Startups and new businesses
                                    </h3>
                                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
                                        Building a new idea? We help you create the digital foundation to get started.
                                    </p>
                                </div>
                                <div className="relative z-10 mt-6 pt-4 border-t border-[#E5DFD4]/80">
                                    <span className={`${caveat.className} text-base sm:text-[17px] text-[#075BFA] font-bold block`}>
                                        * Clean foundation from day one
                                    </span>
                                </div>
                            </motion.div>

                            {/* Audience 2: Small businesses */}
                            <motion.div
                                {...fadeInProps(0.2)}
                                className="relative bg-gradient-to-b from-[#FEFDFB] via-[#FAF7F0] to-[#F5F2EB] border border-[#E2DDD3]/90 rounded-[11px_15px_12px_14px] p-6 sm:p-8 flex flex-col justify-between shadow-[0_2px_4px_rgba(30,20,10,0.03),0_8px_20px_-3px_rgba(30,20,10,0.06),0_16px_32px_-6px_rgba(30,20,10,0.04)] transform rotate-[0.6deg] hover:rotate-0 transition-transform duration-200 select-none"
                            >
                                {/* Fine Paper Fiber Grain Overlay */}
                                <div
                                    className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-multiply rounded-[inherit]"
                                    style={{
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paperGrain2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paperGrain2)'/%3E%3C/svg%3E")`,
                                        backgroundRepeat: "repeat",
                                    }}
                                    aria-hidden="true"
                                />

                                {/* Realistic Silver Metal Paperclip */}
                                <RealisticPaperclip className="absolute -top-4.5 right-8 z-20" />

                                <div className="relative z-10">
                                    <span className="text-[10px] font-mono tracking-widest text-[#075BFA] font-bold uppercase block mb-2">
                                        STARTING POINT 02
                                    </span>
                                    <h3 className="text-xl font-bold text-[#07142F] mb-3 font-sans">
                                        Small businesses
                                    </h3>
                                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
                                        Looking to improve your online presence or make daily work easier? We help identify practical solutions.
                                    </p>
                                </div>
                                <div className="relative z-10 mt-6 pt-4 border-t border-[#E5DFD4]/80">
                                    <span className={`${caveat.className} text-base sm:text-[17px] text-[#075BFA] font-bold block`}>
                                        * Pragmatic upgrades that save time
                                    </span>
                                </div>
                            </motion.div>

                            {/* Audience 3: Growing businesses */}
                            <motion.div
                                {...fadeInProps(0.3)}
                                className="relative bg-gradient-to-b from-[#FEFDFB] via-[#FAF7F0] to-[#F5F2EB] border border-[#E2DDD3]/90 rounded-[15px_12px_14px_11px] p-6 sm:p-8 flex flex-col justify-between shadow-[0_2px_4px_rgba(30,20,10,0.03),0_8px_20px_-3px_rgba(30,20,10,0.06),0_16px_32px_-6px_rgba(30,20,10,0.04)] transform -rotate-[0.5deg] hover:rotate-0 transition-transform duration-200 select-none"
                            >
                                {/* Fine Paper Fiber Grain Overlay */}
                                <div
                                    className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-multiply rounded-[inherit]"
                                    style={{
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paperGrain3'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paperGrain3)'/%3E%3C/svg%3E")`,
                                        backgroundRepeat: "repeat",
                                    }}
                                    aria-hidden="true"
                                />

                                {/* Realistic Translucent Kraft Masking Tape */}
                                <ScrapbookTape className="absolute -top-3.5 right-8 w-28 sm:w-32 h-6" angle={2.2} />

                                <div className="relative z-10">
                                    <span className="text-[10px] font-mono tracking-widest text-[#075BFA] font-bold uppercase block mb-2">
                                        STARTING POINT 03
                                    </span>
                                    <h3 className="text-xl font-bold text-[#07142F] mb-3 font-sans">
                                        Growing businesses
                                    </h3>
                                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
                                        Need better software, automation or digital systems? We help you plan and build for your next stage.
                                    </p>
                                </div>
                                <div className="relative z-10 mt-6 pt-4 border-t border-[#E5DFD4]/80">
                                    <span className={`${caveat.className} text-base sm:text-[17px] text-[#075BFA] font-bold block`}>
                                        * Robust architectures ready to scale
                                    </span>
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
                        SECTION 04 — HOW WE WORK
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
                                    SECTION 04 · HOW WE WORK
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

                        {/* Staggered Studio Manifesto Notes */}
                        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-start">

                            {/* Principle 01: Understand before building */}
                            <motion.div
                                {...fadeInProps(0.1)}
                                className="relative bg-gradient-to-b from-[#FEFDFB] via-[#FAF7F0] to-[#F5F2EB] border border-[#E2DDD3]/90 rounded-[14px_11px_15px_12px] p-6 sm:p-7 shadow-[0_2px_4px_rgba(30,20,10,0.03),0_8px_20px_-3px_rgba(30,20,10,0.06),0_16px_32px_-6px_rgba(30,20,10,0.04)] transform -rotate-[0.9deg] hover:rotate-0 transition-transform duration-200 select-none"
                            >
                                {/* Fine Paper Fiber Grain Overlay */}
                                <div
                                    className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-multiply rounded-[inherit]"
                                    style={{
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paperGrainB1'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paperGrainB1)'/%3E%3C/svg%3E")`,
                                        backgroundRepeat: "repeat",
                                    }}
                                    aria-hidden="true"
                                />

                                {/* Realistic Translucent Kraft Masking Tape */}
                                <ScrapbookTape className="absolute -top-3.5 left-8 w-28 sm:w-32 h-6" angle={-2.5} />

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-mono font-bold tracking-widest text-[#075BFA] uppercase">
                                            PRINCIPLE 01
                                        </span>
                                        <FiCompass className="text-[#075BFA]" size={18} />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-[#07142F] mb-2 font-sans">
                                        Understand before building
                                    </h3>
                                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
                                        Good solutions begin with listening and asking the right questions.
                                    </p>
                                    <div className="mt-5 pt-3 border-t border-[#E5DFD4]/80 flex items-center justify-between">
                                        <span className={`${caveat.className} text-base text-[#075BFA] font-bold`}>
                                            * Listen first, design second
                                        </span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Principle 02: Keep things simple */}
                            <motion.div
                                {...fadeInProps(0.2)}
                                className="relative bg-gradient-to-b from-[#FEFDFB] via-[#FAF7F0] to-[#F5F2EB] border border-[#E2DDD3]/90 rounded-[11px_15px_12px_14px] p-6 sm:p-7 shadow-[0_2px_4px_rgba(30,20,10,0.03),0_8px_20px_-3px_rgba(30,20,10,0.06),0_16px_32px_-6px_rgba(30,20,10,0.04)] transform rotate-[0.8deg] hover:rotate-0 transition-transform duration-200 select-none"
                            >
                                {/* Fine Paper Fiber Grain Overlay */}
                                <div
                                    className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-multiply rounded-[inherit]"
                                    style={{
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paperGrainB2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paperGrainB2)'/%3E%3C/svg%3E")`,
                                        backgroundRepeat: "repeat",
                                    }}
                                    aria-hidden="true"
                                />

                                {/* Realistic Silver Metal Paperclip */}
                                <RealisticPaperclip className="absolute -top-4.5 right-8 z-20" />

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-mono font-bold tracking-widest text-[#07142F] uppercase">
                                            PRINCIPLE 02
                                        </span>
                                        <FiFeather className="text-[#07142F]" size={18} />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-[#07142F] mb-2 font-sans">
                                        Keep things simple
                                    </h3>
                                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
                                        Technology should make life easier, not more complicated.
                                    </p>
                                    <div className="mt-5 pt-3 border-t border-[#E5DFD4]/80 flex items-center justify-between">
                                        <span className={`${caveat.className} text-base text-[#075BFA] font-bold`}>
                                            * Clarity over complexity
                                        </span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Principle 03: Be honest and clear */}
                            <motion.div
                                {...fadeInProps(0.3)}
                                className="relative bg-gradient-to-b from-[#FEFDFB] via-[#FAF7F0] to-[#F5F2EB] border border-[#E2DDD3]/90 rounded-[15px_12px_14px_11px] p-6 sm:p-7 shadow-[0_2px_4px_rgba(30,20,10,0.03),0_8px_20px_-3px_rgba(30,20,10,0.06),0_16px_32px_-6px_rgba(30,20,10,0.04)] transform -rotate-[0.6deg] hover:rotate-0 transition-transform duration-200 select-none"
                            >
                                {/* Fine Paper Fiber Grain Overlay */}
                                <div
                                    className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-multiply rounded-[inherit]"
                                    style={{
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paperGrainB3'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paperGrainB3)'/%3E%3C/svg%3E")`,
                                        backgroundRepeat: "repeat",
                                    }}
                                    aria-hidden="true"
                                />

                                {/* Realistic Translucent Kraft Masking Tape */}
                                <ScrapbookTape className="absolute -top-3.5 right-8 w-28 sm:w-32 h-6" angle={2.2} />

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-mono font-bold tracking-widest text-[#075BFA] uppercase">
                                            PRINCIPLE 03
                                        </span>
                                        <FiCheckCircle className="text-[#075BFA]" size={18} />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-[#07142F] mb-2 font-sans">
                                        Be honest and clear
                                    </h3>
                                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
                                        Clear communication and realistic expectations matter.
                                    </p>
                                    <div className="mt-5 pt-3 border-t border-[#E5DFD4]/80 flex items-center justify-between">
                                        <span className={`${caveat.className} text-base text-[#075BFA] font-bold`}>
                                            * Realistic commitments
                                        </span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Principle 04: Build with purpose */}
                            <motion.div
                                {...fadeInProps(0.4)}
                                className="relative bg-gradient-to-b from-[#FEFDFB] via-[#FAF7F0] to-[#F5F2EB] border border-[#E2DDD3]/90 rounded-[13px_15px_11px_14px] p-6 sm:p-7 shadow-[0_2px_4px_rgba(30,20,10,0.03),0_8px_20px_-3px_rgba(30,20,10,0.06),0_16px_32px_-6px_rgba(30,20,10,0.04)] transform rotate-[0.7deg] hover:rotate-0 transition-transform duration-200 select-none md:col-span-1 lg:col-span-1"
                            >
                                {/* Fine Paper Fiber Grain Overlay */}
                                <div
                                    className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-multiply rounded-[inherit]"
                                    style={{
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paperGrainB4'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paperGrainB4)'/%3E%3C/svg%3E")`,
                                        backgroundRepeat: "repeat",
                                    }}
                                    aria-hidden="true"
                                />

                                {/* Realistic Translucent Kraft Masking Tape */}
                                <ScrapbookTape className="absolute -top-3.5 left-10 w-28 sm:w-32 h-6" angle={-1.8} />

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-mono font-bold tracking-widest text-[#07142F] uppercase">
                                            PRINCIPLE 04
                                        </span>
                                        <FiTool className="text-[#07142F]" size={18} />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-[#07142F] mb-2 font-sans">
                                        Build with purpose
                                    </h3>
                                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
                                        Focus on solutions that address real business needs.
                                    </p>
                                    <div className="mt-5 pt-3 border-t border-[#E5DFD4]/80 flex items-center justify-between">
                                        <span className={`${caveat.className} text-base text-[#075BFA] font-bold`}>
                                            * Tangible business outcomes
                                        </span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Principle 05: Keep improving */}
                            <motion.div
                                {...fadeInProps(0.5)}
                                className="relative bg-gradient-to-b from-[#FEFDFB] via-[#FAF7F0] to-[#F5F2EB] border border-[#E2DDD3]/90 rounded-[14px_12px_15px_11px] p-6 sm:p-7 shadow-[0_2px_4px_rgba(30,20,10,0.03),0_8px_20px_-3px_rgba(30,20,10,0.06),0_16px_32px_-6px_rgba(30,20,10,0.04)] transform -rotate-[0.8deg] hover:rotate-0 transition-transform duration-200 select-none md:col-span-2 lg:col-span-2"
                            >
                                {/* Fine Paper Fiber Grain Overlay */}
                                <div
                                    className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-multiply rounded-[inherit]"
                                    style={{
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paperGrainB5'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paperGrainB5)'/%3E%3C/svg%3E")`,
                                        backgroundRepeat: "repeat",
                                    }}
                                    aria-hidden="true"
                                />

                                {/* Realistic Silver Metal Paperclip */}
                                <RealisticPaperclip className="absolute -top-4.5 left-8 z-20" />

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-mono font-bold tracking-widest text-[#075BFA] uppercase">
                                            PRINCIPLE 05 · LONG-TERM HORIZON
                                        </span>
                                        <FiTrendingUp className="text-[#075BFA]" size={18} />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-[#07142F] mb-2 font-sans">
                                        Keep improving
                                    </h3>
                                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl font-sans">
                                        Look for better ways to make the work more useful over time.
                                    </p>
                                    <div className="mt-5 pt-3 border-t border-[#E5DFD4]/80 flex items-center justify-between">
                                        <span className={`${caveat.className} text-base text-[#075BFA] font-bold`}>
                                            * Practical compounding value
                                        </span>
                                        <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
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
