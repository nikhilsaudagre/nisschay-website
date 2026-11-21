"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Caveat } from "next/font/google";
import { FiPlus, FiMinus, FiArrowUpRight } from "react-icons/fi";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const caveat = Caveat({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
});

interface FAQItem {
    id: string;
    number: string;
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        id: "faq-01",
        number: "01",
        question: "What IT services does Nisschay provide?",
        answer: "We provide website and web application development, custom software development, AI and business automation, cloud and DevOps solutions, and managed IT services.",
    },
    {
        id: "faq-02",
        number: "02",
        question: "Can you build custom software for my business?",
        answer: "Yes. We develop custom software and web applications tailored to your business requirements, workflows and operational needs.",
    },
    {
        id: "faq-03",
        number: "03",
        question: "How much does website or software development cost?",
        answer: "Project costs depend on the scope, features, integrations and complexity. Contact us with your requirements to receive a project-specific estimate.",
    },
    {
        id: "faq-04",
        number: "04",
        question: "How long does a typical project take?",
        answer: "Project timelines depend on the requirements and complexity. We define the expected milestones and delivery schedule after understanding your project.",
    },
    {
        id: "faq-05",
        number: "05",
        question: "Will my website or application work on mobile devices?",
        answer: "Yes. We build responsive digital experiences designed to work across mobile phones, tablets and desktop screens.",
    },
    {
        id: "faq-06",
        number: "06",
        question: "Do you provide maintenance and technical support after launch?",
        answer: "Yes. We can discuss ongoing maintenance, updates and technical support according to your project's requirements.",
    },
    {
        id: "faq-07",
        number: "07",
        question: "Can you improve my existing website or software?",
        answer: "Yes. We can assess your existing solution and help improve its functionality, performance, user experience and technical capabilities.",
    },
];

export default function ServicesFAQSection() {
    // First question is open by default as specified in requirements
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const shouldReduceMotion = useReducedMotion();

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section
            id="faq"
            aria-label="Frequently Asked Questions"
            className="w-full py-16 sm:py-20 lg:py-28 relative overflow-x-clip bg-transparent"
        >
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* ========================================================
                    TOP TWO-COLUMN SECTION: (Left: Intro + Illustration | Right: 7-Item Accordion)
                ======================================================== */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start mb-16 sm:mb-20">
                    
                    {/* ----------------------------------------------------
                        LEFT COLUMN: Editorial Heading & 3D Clay Illustration
                    ---------------------------------------------------- */}
                    <div className="lg:col-span-5 flex flex-col justify-start">
                        
                        {/* Small Eyebrow Label: — FAQ */}
                        <div className="inline-flex items-center gap-2 mb-3 select-none">
                            <span className="w-5 h-[2px] bg-[#075BFA] rounded-full" aria-hidden="true" />
                            <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#075BFA] uppercase">
                                FAQ
                            </span>
                        </div>

                        {/* Editorial Main Heading with signature 3 blue rays matching reference */}
                        <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[46px] font-black font-display text-[#07142F] tracking-tight leading-[1.12] mb-4">
                            <span className="relative inline-block">
                                Frequently Asked
                                {/* 3 Playful Radiating Blue Rays above "Asked" */}
                                <svg
                                    className="absolute -top-3.5 sm:-top-4 -right-7 sm:-right-8 w-6 h-6 sm:w-7 sm:h-7 text-[#075BFA] pointer-events-none select-none"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <path d="M10 6 L12 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                    <path d="M16 8 L21 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                    <path d="M17 15 L22 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                </svg>
                            </span>
                            <br />
                            Questions
                        </h2>

                        {/* Supporting Introduction Text */}
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans max-w-md mb-8 sm:mb-10">
                            Have questions about our services, process or working with Nisschay? Here are the answers to the most common ones.
                        </p>

                        {/* Friendly 3D Nisschay Character with Laptop */}
                        <div className="relative w-full max-w-[360px] sm:max-w-[400px] lg:max-w-[430px] mx-auto lg:mx-0 mt-2 sm:mt-4">
                            <Image
                                src="/images/services/nisschay-faq-human-laptop.webp"
                                alt="Friendly Nisschay character sitting with a laptop, ready to answer questions."
                                width={1199}
                                height={1312}
                                className="w-full h-auto object-contain select-none"
                                sizes="(max-width: 640px) 360px, (max-width: 1024px) 400px, 430px"
                                priority
                            />
                        </div>

                    </div>

                    {/* ----------------------------------------------------
                        RIGHT COLUMN: 7-Item Accordion List
                    ---------------------------------------------------- */}
                    <div className="lg:col-span-7 flex flex-col space-y-3.5 sm:space-y-4 select-none">
                        {faqData.map((item, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div
                                    key={item.id}
                                    className={`rounded-2xl transition-all duration-300 border ${
                                        isOpen
                                            ? "bg-[#EBF3FE] border-[#BFDBFE] shadow-[0_4px_20px_rgba(7,91,250,0.08)]"
                                            : "bg-white/95 hover:bg-[#F9FAFC] border-slate-200/80 hover:border-blue-200 shadow-[0_2px_8px_rgba(7,20,47,0.02)]"
                                    } p-4 sm:p-5`}
                                >
                                    {/* Accordion Trigger Button */}
                                    <button
                                        type="button"
                                        onClick={() => toggleFAQ(index)}
                                        aria-expanded={isOpen}
                                        aria-controls={`faq-answer-${item.id}`}
                                        id={`faq-question-${item.id}`}
                                        className="w-full flex items-center justify-between text-left gap-3.5 sm:gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#075BFA] rounded-xl cursor-pointer"
                                    >
                                        {/* Number Badge & Question Text */}
                                        <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                                            {/* Number Badge (01 to 07) */}
                                            <span
                                                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-mono font-bold text-xs sm:text-[13px] shrink-0 transition-colors duration-200 ${
                                                    isOpen
                                                        ? "bg-[#D9EAFE] text-[#075BFA]"
                                                        : "bg-slate-100 text-slate-600"
                                                }`}
                                            >
                                                {item.number}
                                            </span>

                                            {/* Question Heading */}
                                            <h3 className="text-[15px] sm:text-base lg:text-[16.5px] font-bold font-display text-[#07142F] leading-snug">
                                                {item.question}
                                            </h3>
                                        </div>

                                        {/* Expand / Collapse Circular Icon Button */}
                                        <div
                                            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                                                isOpen
                                                    ? "bg-white text-[#075BFA] shadow-xs"
                                                    : "bg-slate-50 text-slate-500 border border-slate-200/80"
                                            }`}
                                            aria-hidden="true"
                                        >
                                            {isOpen ? (
                                                <FiMinus className="w-4 h-4 stroke-[2.5]" />
                                            ) : (
                                                <FiPlus className="w-4 h-4 stroke-[2.5]" />
                                            )}
                                        </div>
                                    </button>

                                    {/* Smoothly Animated Expandable Answer Panel */}
                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                id={`faq-answer-${item.id}`}
                                                role="region"
                                                aria-labelledby={`faq-question-${item.id}`}
                                                initial={
                                                    shouldReduceMotion
                                                        ? { opacity: 1, height: "auto" }
                                                        : { opacity: 0, height: 0 }
                                                }
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={
                                                    shouldReduceMotion
                                                        ? { opacity: 0, height: 0 }
                                                        : { opacity: 0, height: 0 }
                                                }
                                                transition={{ duration: 0.28, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <p className="text-slate-600 text-xs sm:text-[14.5px] leading-relaxed pt-3 sm:pt-3.5 pl-10 sm:pl-12">
                                                    {item.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>

                </div>

                {/* ========================================================
                    BOTTOM CTA BANNER: Pale-Blue Banner with Torn-Paper Style
                    ("Still have questions? Tell us what you're planning...")
                ======================================================== */}
                <div className="relative w-full rounded-[22px] sm:rounded-[28px] bg-[#E1EEFE] border border-blue-200/80 p-6 sm:p-8 lg:p-10 shadow-[0_8px_28px_rgba(7,91,250,0.06)] overflow-hidden select-none">
                    
                    {/* Blue Painter's Tape Strips on Edges */}
                    <div
                        className="absolute -top-3 left-8 sm:left-12 w-12 sm:w-14 h-5 bg-[#60A5FA]/45 -rotate-12 shadow-2xs pointer-events-none"
                        aria-hidden="true"
                    />
                    <div
                        className="absolute -top-3 right-10 sm:right-16 w-10 sm:w-12 h-4.5 bg-[#60A5FA]/40 rotate-6 shadow-2xs pointer-events-none"
                        aria-hidden="true"
                    />

                    {/* Subtle torn edge decorative vector highlight */}
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 lg:gap-8">
                        
                        {/* Left: Handwritten Headline with Blue Brush Underline */}
                        <div className="shrink-0 text-center md:text-left">
                            <span className={`${caveat.className} block text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#07142F] leading-none`}>
                                Still have questions?
                            </span>
                            {/* Brush Underline */}
                            <svg
                                className="w-44 sm:w-52 h-2.5 text-[#075BFA] mx-auto md:mx-0 mt-1.5 opacity-90"
                                viewBox="0 0 200 8"
                                fill="none"
                                aria-hidden="true"
                            >
                                <path d="M2 5C45 2 145 2 198 6" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
                            </svg>
                        </div>

                        {/* Middle Vertical Divider (Desktop) */}
                        <div className="hidden md:block w-[1.5px] h-12 bg-blue-300/60 shrink-0" aria-hidden="true" />

                        {/* Middle: Concise Supporting Copy */}
                        <p className="text-slate-700 text-sm sm:text-[15.5px] font-medium leading-relaxed text-center md:text-left flex-1 max-w-xl">
                            Tell us what you&apos;re planning. Let&apos;s discuss the right solution for your business.
                        </p>

                        {/* Right: Primary Vibrant Blue CTA Button */}
                        <div className="shrink-0">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#075BFA] hover:bg-[#004cdb] text-white text-sm sm:text-[15px] font-semibold rounded-full shadow-[0_4px_14px_rgba(7,91,250,0.28)] hover:shadow-[0_8px_20px_rgba(7,91,250,0.38)] hover:-translate-y-0.5 active:scale-[0.98] transition-all whitespace-nowrap cursor-pointer"
                            >
                                <span>Talk to Our Team</span>
                                <FiArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                            </Link>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}
