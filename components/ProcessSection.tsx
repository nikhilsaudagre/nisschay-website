"use client";

import React, { useRef, useState } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useMotionValueEvent,
    useReducedMotion,
    MotionValue,
} from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

interface CalendarPage {
    pageNumber: string;
    stage: string;
    heading: string;
    description: string;
}

const calendarPages: CalendarPage[] = [
    {
        pageNumber: "01",
        stage: "DISCOVER",
        heading: "First, let's understand your business.",
        description:
            "We discuss your idea, your goals and the challenges you want to solve. This helps us understand what matters most before suggesting a solution.",
    },
    {
        pageNumber: "02",
        stage: "PLAN",
        heading: "Make a clear plan.",
        description:
            "We decide what needs to be built, how it should work, and what the project will involve. You know the scope, estimated cost and timeline before development begins.",
    },
    {
        pageNumber: "03",
        stage: "BUILD",
        heading: "Turn the plan into reality.",
        description:
            "We design and develop your website, software or digital solution. You can review the progress and share feedback as the work takes shape.",
    },
    {
        pageNumber: "04",
        stage: "LAUNCH",
        heading: "Get ready to go live.",
        description:
            "We test the important features, fix issues and prepare everything for launch. We help you get started with your new solution.",
    },
    {
        pageNumber: "05",
        stage: "GROW",
        heading: "Keep moving forward.",
        description:
            "Your business will change, and your technology may need to change with it. We can help with updates, improvements and ongoing technical support.",
    },
];

/**
 * Refined Desk Calendar Twin-Wire Metal Binding Rings
 * Features smaller, soft silver / light metallic-grey coils with delicate specular gleam
 * and subtle paper punch slots for a refined, premium editorial appearance.
 */
function RefinedTwinWireBinding() {
    return (
        <div className="relative w-full bg-slate-50/60 pt-2.5 pb-2 select-none overflow-hidden border-b border-slate-100">
            {/* 6 Refined Twin-Wire Silver Spiral Rings */}
            <div
                className="w-full flex items-center justify-between px-7 sm:px-11 relative z-10"
                aria-hidden="true"
            >
                {[0, 1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="relative flex flex-col items-center">
                        {/* Soft Silver Metallic Twin-Wire Coil */}
                        <svg
                            className="w-3.5 h-5 -mb-1.5 overflow-visible z-20 pointer-events-none drop-shadow-[0_1px_1.5px_rgba(15,23,42,0.12)]"
                            viewBox="0 0 16 22"
                            fill="none"
                        >
                            <defs>
                                <linearGradient
                                    id={`silverWireGrad-${i}`}
                                    x1="0%"
                                    y1="0%"
                                    x2="100%"
                                    y2="0%"
                                >
                                    <stop offset="0%" stopColor="#94a3b8" />
                                    <stop offset="35%" stopColor="#ffffff" />
                                    <stop offset="70%" stopColor="#cbd5e1" />
                                    <stop offset="100%" stopColor="#64748b" />
                                </linearGradient>
                            </defs>
                            {/* Left wire coil loop */}
                            <path
                                d="M 5 0 C 5 0, 3 8, 5 16 C 6 20, 6.5 22, 6.5 22"
                                stroke={`url(#silverWireGrad-${i})`}
                                strokeWidth="1.6"
                                strokeLinecap="round"
                            />
                            {/* Right wire coil loop */}
                            <path
                                d="M 11 0 C 11 0, 9 8, 11 16 C 12 20, 12.5 22, 12.5 22"
                                stroke={`url(#silverWireGrad-${i})`}
                                strokeWidth="1.6"
                                strokeLinecap="round"
                            />
                        </svg>

                        {/* Refined Punched Paper Slot (Soft Slate, not Black) */}
                        <div className="w-2.5 h-3.5 rounded-full bg-slate-200/90 shadow-[inset_0_1px_2px_rgba(15,23,42,0.15)] border-b border-white/80 z-10 flex items-center justify-center">
                            {/* Subtle internal wire segments */}
                            <div className="flex gap-1 h-full items-center opacity-70">
                                <div className="w-[1.5px] h-2 bg-slate-400 rounded-full" />
                                <div className="w-[1.5px] h-2 bg-slate-400 rounded-full" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Subtle micro-perforation tear line */}
            <div
                className="w-full mt-1.5 border-b border-dashed border-slate-200/80 relative"
                aria-hidden="true"
            >
                <div className="absolute left-3 -top-0.5 w-1.5 h-1.5 rounded-full bg-slate-100 border border-slate-200" />
                <div className="absolute right-3 -top-0.5 w-1.5 h-1.5 rounded-full bg-slate-100 border border-slate-200" />
            </div>
        </div>
    );
}

/**
 * Realistic Tactile Paper Texture Overlay
 * Creates authentic organic paper fiber tooth and fine cotton grain
 * using SVG fractal noise and soft paper edge roll-off.
 */
function PaperTextureOverlay() {
    return (
        <div
            className="pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-3xl select-none"
            aria-hidden="true"
        >
            {/* Fine Organic Paper Fiber Grain */}
            <svg
                className="w-full h-full opacity-[0.035] mix-blend-multiply"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <filter id="paperGrainFilter">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.8"
                        numOctaves="4"
                        stitchTiles="stitch"
                    />
                    <feColorMatrix type="saturate" values="0" />
                </filter>
                <rect width="100%" height="100%" filter="url(#paperGrainFilter)" />
            </svg>

            {/* Subtle Paper Ambient Edge Shading (Vignette) */}
            <div
                className="absolute inset-0 rounded-3xl shadow-[inset_0_0_24px_rgba(0,12,36,0.02)] pointer-events-none"
                aria-hidden="true"
            />
        </div>
    );
}

/**
 * Editorial Desk Calendar Sheet Content
 * Clean, readable paper card layout with authentic paper grain and physical tooth.
 */
function CalendarPageContent({
    page,
    index,
    total,
}: {
    page: CalendarPage;
    index: number;
    total: number;
}) {
    return (
        <div className="w-full h-full bg-gradient-to-b from-[#fcfdfd] via-[#ffffff] to-[#f9fafb] rounded-3xl border border-slate-200/90 shadow-[inset_0_1px_1px_0_rgba(255,255,255,1),inset_1px_0_0_0_rgba(255,255,255,0.9),inset_0_-1px_0_0_rgba(226,232,240,0.5),0_2px_6px_rgba(0,14,40,0.03),0_16px_40px_rgba(0,14,40,0.06)] flex flex-col justify-between overflow-hidden relative">
            {/* Realistic Tactile Paper Fiber Texture */}
            <PaperTextureOverlay />

            {/* Top Wire Binding Rings (Refined Soft Silver) */}
            <RefinedTwinWireBinding />

            {/* Top Paper Crease / Binding Roll-off Shadow */}
            <div
                className="h-2.5 w-full bg-gradient-to-b from-slate-900/[0.035] via-slate-900/[0.01] to-transparent pointer-events-none relative z-20"
                aria-hidden="true"
            />

            {/* Calendar Stage Header Bar */}
            <div className="pt-3 pb-4 px-6 sm:px-9 flex items-center justify-between border-b border-slate-100/90 bg-white/80 backdrop-blur-[1px] relative z-20">
                <div className="flex items-center gap-3">
                    {/* Compact Date/Stage Stamp */}
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-[#0057fe] to-[#003db3] text-white flex flex-col items-center justify-center shadow-xs border border-blue-400/30 shrink-0 select-none">
                        <span className="text-[7px] font-mono font-bold tracking-widest text-blue-100 uppercase leading-none">
                            STAGE
                        </span>
                        <span className="text-base font-black font-display tracking-tight leading-none mt-0.5">
                            {page.pageNumber}
                        </span>
                    </div>

                    <div>
                        <span className="text-xs font-mono font-bold text-slate-900 tracking-wider uppercase">
                            {page.stage}
                        </span>
                        <div className="text-[10px] font-mono text-slate-400 tracking-wider uppercase">
                            PHASE {page.pageNumber} OF {String(total).padStart(2, "0")}
                        </div>
                    </div>
                </div>

                {/* Understated Stage Progress Indicator */}
                <div className="flex items-center gap-1.5 font-mono text-xs font-semibold text-slate-400 select-none">
                    <span className="text-[#0057fe] font-bold">{page.pageNumber}</span>
                    <span>/</span>
                    <span>{String(total).padStart(2, "0")}</span>
                </div>
            </div>

            {/* Editorial Body */}
            <div className="p-7 sm:p-9 lg:p-10 flex-1 flex flex-col justify-between relative z-20">
                {/* Subtle debossed watermark stage number in the background */}
                <div
                    className="absolute right-6 top-8 text-slate-900/[0.035] drop-shadow-[0_1px_0_rgba(255,255,255,0.9)] font-display font-black text-8xl sm:text-9xl select-none pointer-events-none -z-0"
                    aria-hidden="true"
                >
                    {page.pageNumber}
                </div>

                <div className="relative z-10">
                    {/* Calendar Micro Tag */}
                    <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0057fe]" />
                        <span>NISSCHAY DELIVERY CALENDAR</span>
                    </div>

                    {/* Large, Readable Stage Heading */}
                    <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#000c24] font-display tracking-tight leading-[1.2] mb-4">
                        {page.heading}
                    </h3>

                    {/* Short, Easy-To-Understand Description */}
                    <p className="text-slate-600 text-base sm:text-[17px] leading-relaxed font-normal max-w-lg">
                        {page.description}
                    </p>
                </div>

                {/* Bottom Footer Detail: Only the small, understated page indicator */}
                <div className="relative z-10 pt-5 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="font-medium text-slate-400 tracking-wider">
                        PAGE {page.pageNumber} OF {String(total).padStart(2, "0")}
                    </span>
                </div>
            </div>
        </div>
    );
}

/**
 * Desktop Animated Rolling Calendar Page
 * Uses top-axis hinge (center top) to roll pages upward like a desk calendar.
 */
function DesktopCalendarPage({
    page,
    index,
    totalSteps,
    scrollYProgress,
    shouldReduceMotion,
}: {
    page: CalendarPage;
    index: number;
    totalSteps: number;
    scrollYProgress: MotionValue<number>;
    shouldReduceMotion: boolean | null;
}) {
    const isFirst = index === 0;
    const isLast = index === totalSteps - 1;

    const stepInterval = 0.2;
    const transitionDuration = 0.06;

    const settleStart = index * stepInterval;
    const exitStart = settleStart + (stepInterval - transitionDuration);
    const exitEnd = (index + 1) * stepInterval;
    const exitFadeStart = exitStart + transitionDuration * 0.75;

    const enterStart = isFirst
        ? 0
        : (index - 1) * stepInterval + (stepInterval - transitionDuration);
    const enterEnd = settleStart;

    let inputRange: number[];
    let rotateXRange: number[];
    let yRange: number[];
    let opacityRange: number[];
    let scaleRange: number[];

    if (isFirst) {
        inputRange = [0, exitStart, exitFadeStart, exitEnd];
        rotateXRange = [0, 0, -48, -66];
        yRange = [0, 0, -28, -44];
        scaleRange = [1, 1, 0.98, 0.96];
        opacityRange = [1, 1, 1, 0];
    } else if (isLast) {
        inputRange = [enterStart - 0.02, enterStart, enterEnd, 1.0];
        rotateXRange = [8, 8, 0, 0];
        yRange = [20, 20, 0, 0];
        scaleRange = [0.96, 0.96, 1, 1];
        opacityRange = [0, 1, 1, 1];
    } else {
        inputRange = [
            enterStart - 0.02,
            enterStart,
            enterEnd,
            exitStart,
            exitFadeStart,
            exitEnd,
        ];
        rotateXRange = [8, 8, 0, 0, -48, -66];
        yRange = [20, 20, 0, 0, -28, -44];
        scaleRange = [0.96, 0.96, 1, 1, 0.98, 0.96];
        opacityRange = [0, 1, 1, 1, 1, 0];
    }

    const rotateX = useTransform(
        scrollYProgress,
        inputRange,
        shouldReduceMotion ? inputRange.map(() => 0) : rotateXRange
    );
    const y = useTransform(
        scrollYProgress,
        inputRange,
        shouldReduceMotion ? inputRange.map(() => 0) : yRange
    );
    const opacity = useTransform(scrollYProgress, inputRange, opacityRange);
    const scale = useTransform(
        scrollYProgress,
        inputRange,
        shouldReduceMotion ? inputRange.map(() => 1) : scaleRange
    );

    // Stacking order: higher z-index for top cards, moved behind after exit
    const zIndex = useTransform(scrollYProgress, (progress) => {
        if (!isLast && progress >= exitEnd) {
            return 0;
        }
        return (totalSteps - index) * 10;
    });

    const visibility = useTransform(opacity, (val) =>
        val > 0.01 ? "visible" : "hidden"
    );

    const pointerEvents = useTransform(opacity, (val) =>
        val > 0.5 ? "auto" : "none"
    );

    return (
        <motion.div
            style={{
                rotateX,
                y,
                opacity,
                scale,
                zIndex,
                visibility,
                pointerEvents,
                transformOrigin: "center top",
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
            }}
            className="absolute inset-0 w-full"
        >
            <CalendarPageContent
                page={page}
                index={index}
                total={totalSteps}
            />
        </motion.div>
    );
}

export default function ProcessSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const shouldReduceMotion = useReducedMotion();
    const [activeStepIndex, setActiveStepIndex] = useState(0);

    // Scroll progress across deliberate pinning distance
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Update active index for indicator
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const step = Math.min(4, Math.floor(latest / 0.2));
        setActiveStepIndex(step);
    });

    // Smooth click-to-jump to any stage with immediate visual feedback
    const handleJumpToStage = (idx: number) => {
        setActiveStepIndex(idx);
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const currentScrollY = window.scrollY;
        const containerTop = rect.top + currentScrollY;
        const pinningDist = containerRef.current.offsetHeight - window.innerHeight;
        const targetProgress = Math.min(0.95, idx * 0.2 + 0.05);
        const targetScrollY = containerTop + pinningDist * targetProgress;
        window.scrollTo({
            top: targetScrollY,
            behavior: "smooth",
        });
    };

    return (
        <section className="relative w-full bg-white" id="process">
            {/* ============================================================
                DESKTOP VIEW: Desk Calendar 3D Page-Roll Two-Column Interaction
            ============================================================ */}
            <div
                ref={containerRef}
                className="hidden lg:block relative w-full h-[320vh]"
            >
                {/* Pinned Viewport Container */}
                <div className="sticky top-0 w-full h-screen min-h-[640px] flex items-center overflow-hidden">
                    <div className="max-w-7xl w-full mx-auto px-6 lg:px-8 relative z-10">
                        <div className="grid grid-cols-12 gap-10 lg:gap-16 items-center">
                            {/* Left Sticky Header Panel */}
                            <div className="col-span-12 lg:col-span-5 flex flex-col items-start text-left">
                                {/* Eyebrow: OUR PROCESS */}
                                <div className="inline-flex items-center gap-2 mb-4">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0057fe] opacity-75" />
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0057fe]" />
                                    </span>
                                    <span className="w-5 h-[2px] bg-[#0057fe]" aria-hidden="true" />
                                    <span className="text-xs font-mono font-bold tracking-[0.22em] text-[#0057fe] uppercase">
                                        OUR PROCESS
                                    </span>
                                </div>

                                {/* Headline with Subtle Handwritten Underline Swoop */}
                                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold text-[#000c24] tracking-tight leading-[1.14] font-display">
                                    From idea to launch,{" "}
                                    <span className="relative inline-block text-[#0057fe]">
                                        step by step.
                                        <svg
                                            className="absolute -bottom-1 sm:-bottom-1.5 left-0 w-full h-[6px] text-[#93c5fd] pointer-events-none"
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
                                    </span>
                                </h2>

                                {/* Supporting Text */}
                                <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal mt-5 max-w-md">
                                    Every project starts with a conversation. We understand what you need, plan the work and build a solution that helps your business move forward.
                                </p>

                                {/* Understated Progress Tracker */}
                                <div className="mt-7 w-full max-w-xs p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80">
                                    <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400 font-bold px-1 mb-3">
                                        DELIVERY STAGES
                                    </div>

                                    {/* Stage Stepper with Subtle Connecting Line */}
                                    <div className="relative space-y-2">
                                        {/* Subtle vertical connecting line */}
                                        <div
                                            className="absolute left-[13px] top-2.5 bottom-2.5 w-px bg-slate-200"
                                            aria-hidden="true"
                                        />
                                        {/* Active fill line */}
                                        <div
                                            className="absolute left-[13px] top-2.5 w-px bg-[#0057fe] transition-all duration-300"
                                            style={{
                                                height: `${(activeStepIndex / (calendarPages.length - 1)) * 82}%`,
                                            }}
                                            aria-hidden="true"
                                        />

                                        {calendarPages.map((p, idx) => {
                                            const isActive = idx === activeStepIndex;
                                            const isCompleted = idx < activeStepIndex;

                                            return (
                                                <button
                                                    type="button"
                                                    key={p.pageNumber}
                                                    onClick={() => handleJumpToStage(idx)}
                                                    className={`relative z-10 w-full flex items-center justify-between px-2 py-1.5 rounded-lg transition-colors duration-150 cursor-pointer text-left ${
                                                        isActive
                                                            ? "bg-blue-50/80 text-[#0057fe]"
                                                            : "text-slate-500 hover:text-slate-900 hover:bg-slate-100/60"
                                                    }`}
                                                >
                                                    <div className="flex items-center gap-2.5">
                                                        <span
                                                            className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono font-bold transition-colors ${
                                                                isActive
                                                                    ? "bg-[#0057fe] text-white shadow-xs"
                                                                    : isCompleted
                                                                    ? "bg-blue-100/80 text-[#0057fe]"
                                                                    : "bg-white border border-slate-200 text-slate-400"
                                                            }`}
                                                        >
                                                            {p.pageNumber}
                                                        </span>
                                                        <span
                                                            className={`text-xs font-mono uppercase tracking-wider ${
                                                                isActive ? "font-bold text-[#000c24]" : "font-medium"
                                                            }`}
                                                        >
                                                            {p.stage}
                                                        </span>
                                                    </div>

                                                    {isActive && (
                                                        <span className="text-[9px] font-mono font-bold tracking-widest text-[#0057fe] uppercase">
                                                            ACTIVE
                                                        </span>
                                                    )}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Understated Closing CTA Box */}
                                <div className="mt-5 p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 w-full max-w-xs">
                                    <h3 className="text-sm font-bold text-[#000c24] font-display tracking-tight mb-1">
                                        Have a project in mind?
                                    </h3>
                                    <p className="text-xs text-slate-600 leading-relaxed mb-3.5">
                                        Let&apos;s talk about what you want to build and how we can help.
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#0057fe] hover:bg-[#0047d6] text-white text-xs font-bold font-outfit rounded-full shadow-xs transition-colors duration-200"
                                    >
                                        <span>Start a Project</span>
                                        <FiArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            </div>

                            {/* Right Column: Desk Calendar Stage Viewport with Easel Stand */}
                            <div className="col-span-12 lg:col-span-7 flex flex-col items-center justify-center">
                                {/* Calendar Desktop Stage Backing Easel / Frame */}
                                <div className="relative w-full max-w-lg h-[475px]">
                                    {/* Architectural desk easel base / shadow plate */}
                                    <div
                                        className="absolute -bottom-3 inset-x-8 h-3 bg-gradient-to-b from-slate-400/20 via-slate-300/10 to-transparent blur-sm -z-40 pointer-events-none"
                                        aria-hidden="true"
                                    />

                                    {/* Deep Navy Architectural Easel Backboard Frame */}
                                    <div
                                        className="absolute -inset-1.5 bg-gradient-to-b from-[#000f2e] via-[#001744] to-[#000b20] rounded-[28px] border border-blue-900/30 -z-40 shadow-lg"
                                        aria-hidden="true"
                                    />

                                    {/* Layer 2 (deepest backing sheet): tactile paper caliper & tilt */}
                                    <div
                                        className="absolute inset-0 translate-y-2.5 translate-x-1.5 rotate-[0.7deg] bg-gradient-to-b from-[#fafbfc] to-[#f4f6f8] rounded-3xl border border-slate-200/80 -z-30 shadow-[0_1px_3px_rgba(0,12,36,0.04)]"
                                        aria-hidden="true"
                                    />

                                    {/* Layer 1 (middle underlay sheet): subtle counter tilt & caliper */}
                                    <div
                                        className="absolute inset-0 translate-y-1.5 -translate-x-1 rotate-[-0.4deg] bg-gradient-to-b from-[#fbfcfd] to-[#f6f8fa] rounded-3xl border border-slate-200/80 -z-20 shadow-[0_1px_3px_rgba(0,12,36,0.03)]"
                                        aria-hidden="true"
                                    />

                                    {/* Front paper pad underlay */}
                                    <div
                                        className="absolute inset-0 translate-y-0.5 bg-white rounded-3xl border border-slate-200 -z-10 shadow-2xs"
                                        aria-hidden="true"
                                    />

                                    {/* 3D Perspective Card Viewing Stage */}
                                    <div
                                        className="relative w-full h-full"
                                        style={{ perspective: 1200 }}
                                    >
                                        {calendarPages.map((page, idx) => (
                                            <DesktopCalendarPage
                                                key={page.pageNumber}
                                                page={page}
                                                index={idx}
                                                totalSteps={calendarPages.length}
                                                scrollYProgress={scrollYProgress}
                                                shouldReduceMotion={shouldReduceMotion}
                                            />
                                        ))}
                                    </div>

                                    {/* Brushed aluminum bottom rail shelf of the easel */}
                                    <div
                                        className="absolute -bottom-1.5 inset-x-12 h-1.5 rounded-full bg-gradient-to-r from-slate-400 via-slate-100 to-slate-400 shadow-sm z-30 pointer-events-none"
                                        aria-hidden="true"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ============================================================
                MOBILE & TABLET VIEW: Clean Stacked Calendar Layout
            ============================================================ */}
            <div className="block lg:hidden py-16 sm:py-20 px-4 sm:px-6">
                <div className="max-w-xl mx-auto space-y-8">
                    {/* Header Panel */}
                    <div className="flex flex-col items-start text-left">
                        <div className="inline-flex items-center gap-2 mb-3">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0057fe] opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0057fe]" />
                            </span>
                            <span className="w-5 h-[2px] bg-[#0057fe]" aria-hidden="true" />
                            <span className="text-xs font-mono font-bold tracking-[0.22em] text-[#0057fe] uppercase">
                                OUR PROCESS
                            </span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000c24] tracking-tight leading-[1.15] font-display mb-4">
                            From idea to launch,{" "}
                            <span className="relative inline-block text-[#0057fe]">
                                step by step.
                                <svg
                                    className="absolute -bottom-1 left-0 w-full h-[5px] text-[#93c5fd] pointer-events-none"
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
                            </span>
                        </h2>

                        <p className="text-slate-600 text-base leading-relaxed font-normal">
                            Every project starts with a conversation. We understand what you need, plan the work and build a solution that helps your business move forward.
                        </p>
                    </div>

                    {/* Stacked Calendar Cards with Real Desk-Calendar Styling */}
                    <div className="space-y-6 pt-2">
                        {calendarPages.map((page, idx) => (
                            <div key={page.pageNumber} className="w-full relative">
                                <CalendarPageContent
                                    page={page}
                                    index={idx}
                                    total={calendarPages.length}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Closing Message CTA Banner */}
                    <div className="mt-8 p-7 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 text-center">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#000c24] font-display tracking-tight mb-2">
                            Have a project in mind?
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed mb-6 max-w-md mx-auto">
                            Let&apos;s talk about what you want to build and how we can help.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#0057fe] hover:bg-[#0047d6] text-white text-sm font-bold font-outfit rounded-full shadow-xs transition-colors duration-200"
                        >
                            <span>Start a Project</span>
                            <FiArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
