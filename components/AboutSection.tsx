"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Caveat } from "next/font/google";
import { 
    FiArrowRight, 
    FiGlobe, 
    FiSmartphone, 
    FiCode, 
    FiCpu, 
    FiTrendingUp,
    FiAlertCircle,
    FiCheckCircle,
    FiClock,
    FiCompass,
    FiTarget,
    FiRepeat,
    FiEye,
    FiShield
} from "react-icons/fi";
import { siteConfig } from "@/lib/siteConfig";

const caveat = Caveat({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
});

// ==========================================
// STORYTELLING CONTENT CONFIGURATION
// ==========================================
const STORY_CONTENT = {
    hero: {
        tag: "Our Story & Ethos",
        line1: "What's Behind",
        line2: "Nisschay?",
        subheading: "A small studio built on one idea: do the work properly.",
    },
    chapter1: {
        number: "01",
        label: "THE PROBLEM",
        headline: "Good businesses shouldn't be held back by technology.",
        narrative: [
            `Nisschay is a founder-led studio based in ${siteConfig.city || "Amravati"}, India. The name comes from 'nishchay' (निश्चय), meaning resolve and determination.`,
            "We started Nisschay after watching too many capable, hardworking businesses hit an invisible digital wall. Their products and services were exceptional, but their digital presence was working against them: slow pages that drove customers away, fragmented tools that wasted hours, and zero search visibility.",
            "Technology should be an accelerator for your business, not a constant source of friction."
        ],
        pills: [
            { text: "Outdated websites", icon: FiGlobe, rotate: "-rotate-2", offset: "translate-y-0" },
            { text: "Manual processes", icon: FiClock, rotate: "rotate-1", offset: "translate-y-1" },
            { text: "Poor online visibility", icon: FiEye, rotate: "-rotate-1", offset: "translate-y-0" },
            { text: "Disconnected systems", icon: FiAlertCircle, rotate: "rotate-2", offset: "-translate-y-1" },
            { text: "Missed opportunities", icon: FiTarget, rotate: "-rotate-1", offset: "translate-y-1" },
        ],
    },
    chapter2: {
        number: "02",
        label: "WHY NISSCHAY EXISTS",
        headline: "Different capabilities. One connected approach.",
        narrative: [
            "Most businesses are forced to coordinate with multiple disjointed vendors: a designer who doesn't understand code, an agency that doesn't understand operations, and a marketer who doesn't understand the product.",
            "We bring design, modern software engineering, and digital growth under one cohesive roof. Every piece communicates with the next, built by the same core people you talk to directly."
        ],
        capabilities: [
            {
                code: "01. WEB",
                title: "Website Development",
                desc: "Fast, conversion-focused websites that tell your story clearly and work round the clock.",
                icon: FiGlobe,
            },
            {
                code: "02. APP",
                title: "Application Development",
                desc: "Fluid, reliable web and mobile apps engineered with modern reactive frameworks.",
                icon: FiSmartphone,
            },
            {
                code: "03. SYS",
                title: "Custom Software",
                desc: "Bespoke operational tools and dashboards built around how your team actually works.",
                icon: FiCode,
            },
            {
                code: "04. AI",
                title: "AI & Automation",
                desc: "Intelligent workflows, WhatsApp bots, and integrations that eliminate repetitive manual tasks.",
                icon: FiCpu,
            },
            {
                code: "05. SEO",
                title: "Digital Marketing",
                desc: "Targeted SEO, content, and search presence that bring the right high-intent customers to you.",
                icon: FiTrendingUp,
            },
        ],
    },
    chapter3: {
        number: "03",
        label: "WHAT WE BELIEVE",
        headline: "Built with purpose. Delivered with ownership.",
        narrative: "We believe exceptional digital products are born from craft, transparency, and true ownership. These five core principles guide every line of code we write and every decision we make.",
        principles: [
            {
                num: "01",
                title: "Honest Communication",
                desc: "Plain language and direct engineer access. No technical obfuscation, middle managers, or inflated promises.",
                icon: FiCheckCircle,
            },
            {
                num: "02",
                title: "Thoughtful Engineering",
                desc: "We write clean, purposeful code that solves tangible business bottlenecks instead of chasing unnecessary complexity.",
                icon: FiCompass,
            },
            {
                num: "03",
                title: "Clear Execution",
                desc: "Weekly staging deployments, transparent roadmaps, and fixed-price commitments so you never face surprises.",
                icon: FiClock,
            },
            {
                num: "04",
                title: "Long-Term Thinking",
                desc: "You own 100% of your source code and intellectual property. Architectures engineered to scale for years to come.",
                icon: FiTarget,
            },
            {
                num: "05",
                title: "Continuous Improvement",
                desc: "A digital launch is just day one. We test, measure real visitor feedback, and refine your platform so results compound.",
                icon: FiRepeat,
            },
        ],
        cta: {
            prompt: "Ready to build your digital presence properly?",
            primaryLabel: "Book Free Consultation",
            primaryHref: "/contact",
            secondaryLabel: "Explore Our Services",
            secondaryHref: "/services",
        }
    },
} as const;

export default function AboutSection({
    showLearnMore = true,
    isStandalone = false,
}: {
    showLearnMore?: boolean;
    showDetailed?: boolean;
    isStandalone?: boolean;
} = {}) {
    const shouldReduceMotion = useReducedMotion();

    // Section header slide animations (600ms ease-out)
    const animLine1 = shouldReduceMotion
        ? { initial: { opacity: 1, x: 0 } }
        : {
            initial: { opacity: 0, x: -50 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true, margin: "-40px" },
            transition: { duration: 0.6, ease: "easeOut" as const },
        };

    const animLine2 = shouldReduceMotion
        ? { initial: { opacity: 1, x: 0 } }
        : {
            initial: { opacity: 0, x: 50 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true, margin: "-40px" },
            transition: { duration: 0.6, ease: "easeOut" as const, delay: 0.1 },
        };

    // Stagger animation helpers
    const animFadeLeft = shouldReduceMotion
        ? {}
        : {
            initial: { opacity: 0, x: -30 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true, margin: "-40px" },
            transition: { duration: 0.5, ease: "easeOut" as const },
        };

    const animFadeRight = shouldReduceMotion
        ? {}
        : {
            initial: { opacity: 0, x: 30 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true, margin: "-40px" },
            transition: { duration: 0.5, ease: "easeOut" as const },
        };

    return (
        <section
            id="about"
            className={`relative w-full overflow-x-clip bg-white ${isStandalone ? "pt-8 sm:pt-12 lg:pt-16 pb-24 sm:pb-32 lg:pb-40" : "py-20 sm:py-28 lg:py-36"}`}
        >
            {/* Same container as Navbar and Hero */}
            <div className="relative z-10 w-full max-w-7xl mx-auto pl-6 pr-5 sm:pl-12 sm:pr-8 lg:pl-14 lg:pr-12 space-y-28 sm:space-y-36 lg:space-y-44">

                {/* ========================================================
                    TOP SECTION HEADER: Brand Slide-in Typography
                ======================================================== */}
                <div className="w-full flex flex-col items-center justify-center text-center select-none space-y-4">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200/90 text-xs font-mono uppercase tracking-widest text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0057fe]" />
                        <span>{isStandalone ? "About Nisschay · Studio Story" : STORY_CONTENT.hero.tag}</span>
                    </div>

                    <div className="flex flex-col items-center justify-center leading-none">
                        <motion.h2
                            {...animLine1}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#000c24] tracking-tight"
                        >
                            {STORY_CONTENT.hero.line1}
                        </motion.h2>
                        <motion.h2
                            {...animLine2}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#0057fe] tracking-tight mt-1"
                        >
                            {STORY_CONTENT.hero.line2}
                        </motion.h2>
                    </div>

                    <p className="text-slate-600 text-base sm:text-lg md:text-xl font-normal max-w-2xl mt-4 leading-relaxed text-balance">
                        {STORY_CONTENT.hero.subheading}
                    </p>
                </div>


                {/* ========================================================
                    CHAPTER 01 — THE PROBLEM (Asymmetric Editorial Spread)
                ======================================================== */}
                <div className="relative">
                    {/* Chapter Header Anchor */}
                    <div className="flex items-center gap-4 mb-10 sm:mb-14">
                        <span className="text-xs font-mono font-bold tracking-widest text-[#0057fe] uppercase px-3.5 py-1.5 bg-blue-50/80 border border-blue-200/60 rounded-full">
                            Chapter {STORY_CONTENT.chapter1.number}{" · "}{STORY_CONTENT.chapter1.label}
                        </span>
                        <div className="h-px bg-slate-200 flex-1 max-w-xs" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        
                        {/* Narrative Left Column */}
                        <motion.div 
                            {...animFadeLeft}
                            className="lg:col-span-6 space-y-6"
                        >
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#000c24] tracking-tight leading-[1.25] text-balance">
                                {STORY_CONTENT.chapter1.headline}
                            </h3>

                            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                                {STORY_CONTENT.chapter1.narrative.map((para, idx) => (
                                    <p key={idx}>{para}</p>
                                ))}
                            </div>

                            <div className="pt-2">
                                <span className={`${caveat.className} text-xl sm:text-2xl text-[#0057fe] font-bold rotate-[-1.5deg] inline-block`}>
                                    technology should remove barriers, not build them.
                                </span>
                            </div>
                        </motion.div>

                        {/* Asymmetric Problem Pills Composition Right Column */}
                        <motion.div 
                            {...animFadeRight}
                            className="lg:col-span-6"
                        >
                            <div className="relative bg-slate-50/80 rounded-3xl border border-slate-200/90 p-8 sm:p-12 min-h-[380px] flex flex-col justify-center">
                                
                                <div className="space-y-6">
                                    <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0" />
                                        Common friction points businesses face
                                    </div>

                                    {/* Asymmetric Pills Cluster */}
                                    <div className="flex flex-wrap items-center gap-3 sm:gap-3.5">
                                        {STORY_CONTENT.chapter1.pills.map((pill, idx) => {
                                            const Icon = pill.icon;
                                            return (
                                                <div
                                                    key={idx}
                                                    className={`inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-white shadow-xs border border-slate-200/80 text-slate-700 ${pill.rotate} ${pill.offset} hover:border-[#0057fe]/40 transition-all select-none`}
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500/80 shrink-0" />
                                                    <Icon className="text-slate-400 text-sm" />
                                                    <span className="text-sm sm:text-[15px] font-medium text-[#000c24]">
                                                        {pill.text}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* Editorial handwritten margin aside */}
                                    <div className="pt-4 flex justify-end pr-2 select-none">
                                        <div className="inline-flex items-center gap-1.5 rotate-[-2deg]">
                                            <span className={`${caveat.className} text-lg sm:text-xl font-bold text-slate-500`}>
                                                sound familiar?
                                            </span>
                                            <svg className="w-4 h-4 text-slate-400 translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M7 17l9.2-9.2M17 17V7H7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </motion.div>

                    </div>
                </div>


                {/* ========================================================
                    CHAPTER 02 — WHY NISSCHAY EXISTS (Capability Convergence)
                ======================================================== */}
                <div className="relative">
                    {/* Chapter Header Anchor */}
                    <div className="flex items-center gap-4 mb-8 sm:mb-12">
                        <span className="text-xs font-mono font-bold tracking-widest text-[#0057fe] uppercase px-3.5 py-1.5 bg-blue-50/80 border border-blue-200/60 rounded-full">
                            Chapter {STORY_CONTENT.chapter2.number}{" · "}{STORY_CONTENT.chapter2.label}
                        </span>
                        <div className="h-px bg-slate-200 flex-1 max-w-xs" />
                    </div>

                    <div className="max-w-3xl space-y-4 mb-14">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#000c24] tracking-tight leading-[1.25] text-balance">
                            {STORY_CONTENT.chapter2.headline}
                        </h3>

                        <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                            {STORY_CONTENT.chapter2.narrative[0]}
                        </p>
                    </div>

                    {/* Convergence Architecture: Left Wing + Center Hub + Right Wing */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                        
                        {/* Left Wing (Capabilities 1 & 2) */}
                        <motion.div 
                            {...animFadeLeft}
                            className="lg:col-span-4 flex flex-col justify-between gap-5"
                        >
                            {STORY_CONTENT.chapter2.capabilities.slice(0, 2).map((cap, idx) => {
                                const Icon = cap.icon;
                                return (
                                    <div
                                        key={idx}
                                        className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-[#0057fe]/40 transition-all flex flex-col justify-between flex-1 group"
                                    >
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between">
                                                <span className="text-xs font-mono font-bold text-[#0057fe]">
                                                    {cap.code}
                                                </span>
                                                <Icon className="text-slate-400 group-hover:text-[#0057fe] transition-colors text-base" />
                                            </div>
                                            <h4 className="text-lg font-bold text-[#000c24] tracking-tight">
                                                {cap.title}
                                            </h4>
                                            <p className="text-[15px] text-slate-600 leading-relaxed font-normal">
                                                {cap.desc}
                                            </p>
                                        </div>

                                        <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-[#0057fe]">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#0057fe]" />
                                            <span>In-house engineering</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </motion.div>

                        {/* Center Hub: The Unified Engine Anchor */}
                        <div className="lg:col-span-4 rounded-3xl bg-slate-50 border border-slate-200/90 p-8 sm:p-10 flex flex-col items-center justify-center text-center space-y-6">
                            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-center justify-center p-4">
                                <Image
                                    src="/logo-mark.png"
                                    alt="Nisschay Logo Mark"
                                    width={64}
                                    height={64}
                                    className="w-full h-full object-contain"
                                    priority
                                />
                            </div>

                            <div className="space-y-2">
                                <span className="text-xs font-mono uppercase tracking-widest text-[#0057fe] font-bold block">
                                    Nisschay Studio
                                </span>
                                <h4 className="text-lg sm:text-xl font-bold text-[#000c24]">
                                    One Unified Delivery Team
                                </h4>
                                <p className="text-sm text-slate-600 max-w-xs mx-auto leading-relaxed">
                                    {STORY_CONTENT.chapter2.narrative[1]}
                                </p>
                            </div>

                            <div className="pt-2 border-t border-slate-200/80 w-full max-w-xs flex items-center justify-center gap-2 text-xs font-mono text-slate-500">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                <span>Zero middleman markup</span>
                            </div>
                        </div>

                        {/* Right Wing (Capabilities 3, 4 & 5) */}
                        <motion.div 
                            {...animFadeRight}
                            className="lg:col-span-4 flex flex-col justify-between gap-5"
                        >
                            {STORY_CONTENT.chapter2.capabilities.slice(2, 5).map((cap, idx) => {
                                const Icon = cap.icon;
                                return (
                                    <div
                                        key={idx}
                                        className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-[#0057fe]/40 transition-all flex flex-col justify-between flex-1 group"
                                    >
                                        <div className="space-y-2 sm:space-y-3">
                                            <div className="flex items-center justify-between">
                                                <span className="text-xs font-mono font-bold text-[#0057fe]">
                                                    {cap.code}
                                                </span>
                                                <Icon className="text-slate-400 group-hover:text-[#0057fe] transition-colors text-base" />
                                            </div>
                                            <h4 className="text-base sm:text-lg font-bold text-[#000c24] tracking-tight">
                                                {cap.title}
                                            </h4>
                                            <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
                                                {cap.desc}
                                            </p>
                                        </div>

                                        <div className="pt-3 mt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-[#0057fe]">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#0057fe]" />
                                            <span>Integrated delivery</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </motion.div>

                    </div>
                </div>


                {/* ========================================================
                    CHAPTER 03 — WHAT WE BELIEVE (Principles & Ownership)
                ======================================================== */}
                <div className="relative">
                    {/* Chapter Header Anchor */}
                    <div className="flex items-center gap-4 mb-8 sm:mb-12">
                        <span className="text-xs font-mono font-bold tracking-widest text-[#0057fe] uppercase px-3.5 py-1.5 bg-blue-50/80 border border-blue-200/60 rounded-full">
                            Chapter {STORY_CONTENT.chapter3.number}{" · "}{STORY_CONTENT.chapter3.label}
                        </span>
                        <div className="h-px bg-slate-200 flex-1 max-w-xs" />
                    </div>

                    <div className="max-w-3xl space-y-4 mb-14">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#000c24] tracking-tight leading-[1.25] text-balance">
                            {STORY_CONTENT.chapter3.headline}
                        </h3>

                        <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                            {STORY_CONTENT.chapter3.narrative}
                        </p>
                    </div>

                    {/* Editorial Layout: Studio Ownership Anchor + 5 Principles Ledger */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        
                        {/* Left Anchor: Clear IP Sovereignty Commitment */}
                        <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-[#000c24] text-white flex flex-col justify-between min-h-[380px] space-y-8 shadow-sm">
                            <div className="space-y-4">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-mono text-blue-300">
                                    <FiShield className="text-sm" />
                                    <span>Client Sovereignty</span>
                                </div>
                                <h4 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                                    You Own Your Code. Always.
                                </h4>
                                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                                    We build systems with standard frameworks and clean architecture. You receive 100% of the intellectual property, repository access, and documentation. No vendor lock-in or proprietary traps.
                                </p>
                            </div>

                            <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                                <span className={`${caveat.className} text-xl sm:text-2xl text-blue-300 font-bold`}>
                                    built with conviction.
                                </span>
                                <span className="text-xs font-mono text-slate-400">100% IP Handover</span>
                            </div>
                        </div>

                        {/* Right Ledger: The 5 Principles */}
                        <div className="lg:col-span-7 divide-y divide-slate-200 border-y border-slate-200">
                            {STORY_CONTENT.chapter3.principles.map((pr, idx) => {
                                const Icon = pr.icon;
                                return (
                                    <div
                                        key={idx}
                                        className="py-5 sm:py-6 flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-6 group"
                                    >
                                        <div className="flex items-center gap-3 shrink-0">
                                            <span className="text-xs font-mono font-bold text-[#0057fe] w-6">
                                                {pr.num}
                                            </span>
                                            <Icon className="text-slate-400 group-hover:text-[#0057fe] transition-colors text-base" />
                                        </div>

                                        <div className="flex-1 space-y-1">
                                            <h4 className="text-base sm:text-lg font-bold text-[#000c24] tracking-tight">
                                                {pr.title}
                                            </h4>
                                            <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
                                                {pr.desc}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                    </div>

                    {/* Concluding CTA Strip */}
                    <div className="mt-14 sm:mt-18 p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div className="space-y-1 text-center sm:text-left">
                            <h4 className="text-lg sm:text-xl font-bold text-[#000c24]">
                                {STORY_CONTENT.chapter3.cta.prompt}
                            </h4>
                            <p className="text-sm text-slate-600">
                                Direct consultation with engineers. No sales pitches, just clear roadmaps.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 items-center w-full sm:w-auto">
                            <Link
                                href={STORY_CONTENT.chapter3.cta.primaryHref}
                                className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0057fe] hover:bg-[#0047d6] text-white text-sm font-bold font-outfit rounded-full transition-all duration-200 shadow-sm hover:shadow-md active:scale-95"
                            >
                                <span>{STORY_CONTENT.chapter3.cta.primaryLabel}</span>
                                <FiArrowRight size={14} />
                            </Link>
                            {showLearnMore && (
                                <Link
                                    href={STORY_CONTENT.chapter3.cta.secondaryHref}
                                    className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center px-7 py-3.5 bg-white text-slate-700 hover:text-slate-900 text-sm font-semibold font-outfit rounded-full border border-slate-200/90 hover:bg-slate-50 transition-all duration-200 active:scale-95 shadow-xs"
                                >
                                    {STORY_CONTENT.chapter3.cta.secondaryLabel}
                                </Link>
                            )}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
