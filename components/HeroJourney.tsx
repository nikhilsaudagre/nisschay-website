"use client";
import React from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";

/**
 * HERO_JOURNEY_CONTENT
 * 
 * Edit any copy for the 3-step customer journey visual here.
 * No real or invented names, numbers, or ratings.
 */
export const HERO_JOURNEY_CONTENT = {
    step1: {
        title: "You share your idea",
        message: "We need a website that brings us customers.",
    },
    step2: {
        title: "We design, build and launch",
        liveBadge: "Live",
        deployingLabel: "Deploying production build...",
    },
    step3: {
        title: "Customers find you",
        notificationTitle: "New enquiry from your website",
        timestamp: "Just now",
    },
    caption: "Illustration of how it works",
};

export default function HeroJourney() {
    const shouldReduceMotion = useReducedMotion();

    // Step entry animation variants (played once on mount)
    const stepVariants: Variants = {
        hidden: { opacity: 0, y: 14 },
        visible: (customDelay: number) => ({
            opacity: 1,
            y: 0,
            transition: shouldReduceMotion
                ? { duration: 0 }
                : { duration: 0.45, delay: customDelay, ease: "easeOut" },
        }),
    };

    return (
        <div 
            className="w-full flex flex-col items-center select-none"
            aria-label="Illustration of our client project journey: from idea to launch and customer enquiries"
            role="region"
        >
            {/* Main Journey Card */}
            <div className="w-full max-w-[480px] lg:max-w-none bg-gradient-to-b from-white via-white to-slate-50/50 border border-slate-200/90 rounded-2xl sm:rounded-[2rem] shadow-xl sm:shadow-2xl shadow-slate-200/50 p-4 sm:p-6 md:p-7 relative overflow-hidden">
                
                {/* Decorative Subtle Corner Accent (Brand Blue) */}
                <div 
                    aria-hidden="true"
                    className="absolute -top-16 -right-16 w-32 h-32 bg-[#0057fe]/5 rounded-full filter blur-2xl pointer-events-none" 
                />

                {/* 3-Step Vertical Flow */}
                <div className="relative flex flex-col gap-5 sm:gap-6">
                    
                    {/* Vertical Connector Line linking steps */}
                    <div 
                        aria-hidden="true"
                        className="absolute left-[13px] sm:left-[15px] top-4 bottom-4 w-0.5 bg-slate-200/90 pointer-events-none" 
                    />

                    {/* ========================================================================= */}
                    {/* STEP 1: You share your idea */}
                    {/* ========================================================================= */}
                    <motion.div
                        custom={0.1}
                        variants={stepVariants}
                        initial="hidden"
                        animate="visible"
                        className="relative pl-8 sm:pl-9"
                    >
                        {/* Step Marker Dot */}
                        <div 
                            aria-hidden="true"
                            className="absolute left-0 top-1 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-[#0057fe] flex items-center justify-center shadow-xs"
                        >
                            <span className="w-2 h-2 rounded-full bg-[#0057fe]" />
                        </div>

                        {/* Step Label */}
                        <p className="text-xs sm:text-sm font-bold text-[#000c24] mb-2 font-display">
                            {HERO_JOURNEY_CONTENT.step1.title}
                        </p>

                        {/* Chat Message Bubble */}
                        {/* REPLACEABLE: A real client initial brief or quote request message can replace this bubble */}
                        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl rounded-tl-sm px-3.5 sm:px-4 py-2.5 sm:py-3 shadow-xs inline-flex items-start gap-2.5 max-w-full">
                            <div 
                                aria-hidden="true"
                                className="w-6 h-6 rounded-full bg-[#0057fe]/10 text-[#0057fe] flex items-center justify-center shrink-0 mt-0.5"
                            >
                                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                </svg>
                            </div>
                            <p className="text-xs sm:text-[13px] text-slate-700 leading-snug">
                                &ldquo;{HERO_JOURNEY_CONTENT.step1.message}&rdquo;
                            </p>
                        </div>
                    </motion.div>

                    {/* ========================================================================= */}
                    {/* STEP 2: We design, build and launch */}
                    {/* ========================================================================= */}
                    <motion.div
                        custom={0.5}
                        variants={stepVariants}
                        initial="hidden"
                        animate="visible"
                        className="relative pl-8 sm:pl-9"
                    >
                        {/* Step Marker Dot */}
                        <div 
                            aria-hidden="true"
                            className="absolute left-0 top-1 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-[#0057fe] flex items-center justify-center shadow-xs"
                        >
                            <span className="w-2 h-2 rounded-full bg-[#0057fe]" />
                        </div>

                        {/* Step Label + Live Badge */}
                        <div className="flex items-center justify-between gap-2 mb-2">
                            <p className="text-xs sm:text-sm font-bold text-[#000c24] font-display">
                                {HERO_JOURNEY_CONTENT.step2.title}
                            </p>

                            {/* "Live" Badge (Reveals once build finishes) */}
                            <motion.span
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={shouldReduceMotion ? { duration: 0 } : { delay: 1.25, duration: 0.3 }}
                                className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 text-[10px] sm:text-[11px] font-semibold"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                <span>{HERO_JOURNEY_CONTENT.step2.liveBadge}</span>
                            </motion.span>
                        </div>

                        {/* Tiny Browser Wireframe Container */}
                        {/* REPLACEABLE: A real client project preview or screenshot can replace this wireframe */}
                        <div className="bg-white border border-slate-200 rounded-xl p-2.5 sm:p-3 shadow-xs">
                            {/* Browser Bar */}
                            <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-2">
                                <div className="flex items-center gap-1">
                                    <span className="w-2 h-2 rounded-full bg-slate-300" />
                                    <span className="w-2 h-2 rounded-full bg-slate-300" />
                                    <span className="w-2 h-2 rounded-full bg-slate-300" />
                                </div>
                                <div className="w-24 sm:w-32 h-2 bg-slate-100 rounded-full" />
                                <div className="w-3" />
                            </div>

                            {/* Mini Wireframe Page Elements */}
                            <div className="flex items-center gap-2 mb-2.5">
                                <div className="flex-1 space-y-1">
                                    <div className="w-3/4 h-2 bg-slate-200 rounded" />
                                    <div className="w-1/2 h-1.5 bg-slate-100 rounded" />
                                </div>
                                <div className="w-10 sm:w-12 h-4 sm:h-5 bg-[#0057fe] rounded flex items-center justify-center">
                                    <span className="w-5 h-1 bg-white/90 rounded-sm" />
                                </div>
                            </div>

                            {/* Animated Deployment Progress Bar */}
                            <div className="space-y-1">
                                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: "0%" }}
                                        animate={{ width: "100%" }}
                                        transition={shouldReduceMotion ? { duration: 0 } : { delay: 0.65, duration: 0.6, ease: "easeInOut" }}
                                        className="h-full bg-[#0057fe] rounded-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* ========================================================================= */}
                    {/* STEP 3: Customers find you */}
                    {/* ========================================================================= */}
                    <motion.div
                        custom={1.35}
                        variants={stepVariants}
                        initial="hidden"
                        animate="visible"
                        className="relative pl-8 sm:pl-9"
                    >
                        {/* Step Marker Dot */}
                        <div 
                            aria-hidden="true"
                            className="absolute left-0 top-1 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-[#0057fe] flex items-center justify-center shadow-xs"
                        >
                            <span className="w-2 h-2 rounded-full bg-[#0057fe]" />
                        </div>

                        {/* Step Label */}
                        <p className="text-xs sm:text-sm font-bold text-[#000c24] mb-2 font-display">
                            {HERO_JOURNEY_CONTENT.step3.title}
                        </p>

                        {/* Notification Toast Card */}
                        {/* REPLACEABLE: A real enquiry alert or CRM notification can replace this card */}
                        <div className="bg-white border border-slate-200/90 rounded-xl p-3 sm:p-3.5 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between gap-3">
                            <div className="flex items-center gap-2.5 min-w-0">
                                {/* Message Icon with subtle recurring pulse */}
                                <div 
                                    aria-hidden="true"
                                    className="relative w-8 h-8 rounded-lg bg-[#0057fe]/10 text-[#0057fe] flex items-center justify-center shrink-0"
                                >
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                    {/* Subtle recurring notification dot */}
                                    <span 
                                        className={`absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#0057fe] ${
                                            shouldReduceMotion ? "" : "animate-ping"
                                        }`} 
                                    />
                                    <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#0057fe]" />
                                </div>

                                <div className="min-w-0">
                                    <p className="text-xs sm:text-[13px] font-semibold text-[#000c24] truncate">
                                        {HERO_JOURNEY_CONTENT.step3.notificationTitle}
                                    </p>
                                </div>
                            </div>

                            <span className="text-[10px] sm:text-xs text-slate-600 font-medium whitespace-nowrap shrink-0">
                                {HERO_JOURNEY_CONTENT.step3.timestamp}
                            </span>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Small Caption under the Card */}
            <p className="text-[11px] sm:text-xs text-slate-600 font-normal text-center mt-3 select-none">
                {HERO_JOURNEY_CONTENT.caption}
            </p>
        </div>
    );
}
