"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiChevronLeft, FiChevronRight, FiArrowRight } from "react-icons/fi";
import { Globe, BarChart3, ShoppingCart, Bot, Workflow, Layers } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";

interface SolutionSlide {
    id: string;
    numberBadge: string;
    title: string;
    underlineWord: string;
    description: string;
    ctaText: string;
    ctaHref: string;
    imageSrc: string;
    imageAlt: string;
    categoryLabel: string;
}

const solutionsData: SolutionSlide[] = [
    {
        id: "business-websites",
        numberBadge: "01 / 06",
        title: "Business Websites",
        underlineWord: "Websites",
        description: "Professional, SEO-friendly websites to build your brand and reach more customers online.",
        ctaText: "Build a Website",
        ctaHref: "/contact?service=web-dev",
        imageSrc: "/images/services/solutions/business-websites.webp",
        imageAlt: "Minimal 3D clay laptop displaying a modern business website with abstract UI and potted plant",
        categoryLabel: "Business Websites",
    },
    {
        id: "management-systems",
        numberBadge: "02 / 06",
        title: "Management Systems",
        underlineWord: "Systems",
        description: "Manage customers, bookings, billing and daily operations with software built around your business.",
        ctaText: "Build a Management System",
        ctaHref: "/contact?service=custom-software",
        imageSrc: "/images/services/solutions/management-systems.webp",
        imageAlt: "Minimal 3D clay dashboard interface showing business metrics, bar charts and management tools",
        categoryLabel: "Management Systems",
    },
    {
        id: "ecommerce-platforms",
        numberBadge: "03 / 06",
        title: "E-commerce Platforms",
        underlineWord: "Platforms",
        description: "Sell products online, manage orders and create a better shopping experience for your customers.",
        ctaText: "Build an Online Store",
        ctaHref: "/contact?service=ecommerce",
        imageSrc: "/images/services/solutions/ecommerce-platforms.webp",
        imageAlt: "Minimal 3D clay online shopping interface with shopping cart and parcel delivery boxes",
        categoryLabel: "E-commerce Platforms",
    },
    {
        id: "ai-assistants",
        numberBadge: "04 / 06",
        title: "AI Assistants & Chatbots",
        underlineWord: "Chatbots",
        description: "Use AI-powered assistants to answer questions, support customers and make information easier to access.",
        ctaText: "Explore AI Solutions",
        ctaHref: "/contact?service=ai-automation",
        imageSrc: "/images/services/solutions/ai-assistants.webp",
        imageAlt: "Minimal 3D clay AI assistant interface with glowing conversational chat bubbles and orb",
        categoryLabel: "AI Assistants & Chatbots",
    },
    {
        id: "workflow-automation",
        numberBadge: "05 / 06",
        title: "Workflow Automation",
        underlineWord: "Automation",
        description: "Automate repetitive tasks, connect business tools and reduce manual work across your business.",
        ctaText: "Automate Your Workflow",
        ctaHref: "/contact?service=automation",
        imageSrc: "/images/services/solutions/workflow-automation.webp",
        imageAlt: "Minimal 3D clay connected workflow automation nodes and visual pipeline pathways",
        categoryLabel: "Workflow Automation",
    },
    {
        id: "custom-applications",
        numberBadge: "06 / 06",
        title: "Custom Applications",
        underlineWord: "Applications",
        description: "Build custom web applications that match your business processes and specific requirements.",
        ctaText: "Build a Custom Application",
        ctaHref: "/contact?service=custom-app",
        imageSrc: "/images/services/solutions/custom-applications.webp",
        imageAlt: "Minimal 3D clay layered custom application windows and modular interface components",
        categoryLabel: "Custom Applications",
    },
];

// Production Lucide Category Icons matching the Reference Mockup
function CategoryIcon({ index, className = "w-4.5 h-4.5" }: { index: number; className?: string }) {
    switch (index) {
        case 0:
            return <Globe className={className} strokeWidth={2.2} />;
        case 1:
            return <BarChart3 className={className} strokeWidth={2.2} />;
        case 2:
            return <ShoppingCart className={className} strokeWidth={2.2} />;
        case 3:
            return <Bot className={className} strokeWidth={2.2} />;
        case 4:
            return <Workflow className={className} strokeWidth={2.2} />;
        case 5:
        default:
            return <Layers className={className} strokeWidth={2.2} />;
    }
}

export default function WhatWeCanBuildSection() {
    const shouldReduceMotion = useReducedMotion();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const [isPaused, setIsPaused] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    // Touch swipe refs
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);

    // Slide navigation helpers
    const nextSlide = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % solutionsData.length);
    }, []);

    const prevSlide = useCallback(() => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + solutionsData.length) % solutionsData.length);
    }, []);

    const goToSlide = (index: number) => {
        setHasInteracted(true);
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    const handleManualNext = () => {
        setHasInteracted(true);
        nextSlide();
    };

    const handleManualPrev = () => {
        setHasInteracted(true);
        prevSlide();
    };

    // Auto-advance timer (6 seconds), pauses on hover or after user interaction
    useEffect(() => {
        if (isPaused || hasInteracted || shouldReduceMotion) return;

        const timer = setInterval(() => {
            nextSlide();
        }, 6000);

        return () => clearInterval(timer);
    }, [isPaused, hasInteracted, shouldReduceMotion, nextSlide]);

    // Touch swipe handlers
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.targetTouches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.targetTouches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;
        const diff = touchStartX.current - touchEndX.current;
        const minSwipeDistance = 45;

        if (diff > minSwipeDistance) {
            handleManualNext();
        } else if (diff < -minSwipeDistance) {
            handleManualPrev();
        }

        touchStartX.current = null;
        touchEndX.current = null;
    };

    // Keyboard navigation (Left / Right Arrow)
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowLeft") {
            handleManualPrev();
        } else if (e.key === "ArrowRight") {
            handleManualNext();
        }
    };

    const currentSlide = solutionsData[currentIndex];

    // Slide transition animation variants
    const slideVariants: Variants = {
        enter: (dir: number) => ({
            x: shouldReduceMotion ? 0 : dir > 0 ? 50 : -50,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: {
                duration: shouldReduceMotion ? 0.15 : 0.45,
                ease: "easeOut",
            },
        },
        exit: (dir: number) => ({
            x: shouldReduceMotion ? 0 : dir > 0 ? -50 : 50,
            opacity: 0,
            transition: {
                duration: shouldReduceMotion ? 0.15 : 0.35,
                ease: "easeOut",
            },
        }),
    };

    return (
        <section
            id="what-we-can-build"
            aria-label="What We Can Build"
            className="w-full py-16 sm:py-20 lg:py-28 relative overflow-x-clip"
        >
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* ========================================================
                    SECTION HEADER & INTRODUCTION
                ======================================================== */}
                <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
                    
                    {/* Eyebrow: • — WHAT WE CAN BUILD */}
                    <div className="inline-flex items-center justify-center gap-2 mb-3.5 select-none">
                        <span className="w-2 h-2 rounded-full bg-[#075BFA]" aria-hidden="true" />
                        <span className="w-5 h-[2px] bg-[#075BFA] rounded-full" aria-hidden="true" />
                        <span className="text-xs sm:text-[12.5px] font-mono font-bold tracking-[0.2em] text-[#07142F] uppercase">
                            WHAT WE CAN BUILD
                        </span>
                    </div>

                    {/* H2 Main Heading with hand-drawn blue underline */}
                    <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-black font-display text-[#07142F] tracking-tight leading-[1.18] mb-4">
                        Digital Solutions for{" "}
                        <span className="relative inline-block whitespace-nowrap">
                            <span>Your Business</span>
                            <svg
                                className="absolute -bottom-1.5 sm:-bottom-2 left-0 w-full h-[7px] sm:h-[9px] text-[#075BFA] pointer-events-none"
                                viewBox="0 0 200 10"
                                fill="none"
                                preserveAspectRatio="none"
                                aria-hidden="true"
                            >
                                <path
                                    d="M3 6.5C55 2.5 145 2.5 197 7"
                                    stroke="currentColor"
                                    strokeWidth="3.2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span>
                    </h2>

                    {/* Supporting Description Text */}
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans max-w-xl mx-auto">
                        From websites and custom software to AI automation, we build practical solutions that make your work easier and help your business grow.
                    </p>
                </div>

                {/* ========================================================
                    FULL-WIDTH CAROUSEL CONTAINER
                    (Warm White #FAF8F4 surface, tactile borders, smooth navigation)
                ======================================================== */}
                <div
                    className="relative w-full"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onFocus={() => setIsPaused(true)}
                    onBlur={() => setIsPaused(false)}
                    tabIndex={0}
                    onKeyDown={handleKeyDown}
                    role="region"
                    aria-roledescription="carousel"
                    aria-label="Digital Solutions Carousel"
                >
                    {/* Previous Navigation Arrow */}
                    <button
                        onClick={handleManualPrev}
                        aria-label="Previous slide"
                        className="absolute -left-3 sm:-left-5 lg:-left-6 top-1/2 -translate-y-1/2 z-30 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white text-[#075BFA] shadow-[0_4px_16px_rgba(7,20,47,0.12)] border border-slate-200/90 flex items-center justify-center hover:scale-105 hover:border-[#075BFA] active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#075BFA]/50"
                    >
                        <FiChevronLeft className="w-5 h-5 stroke-[2.5]" />
                    </button>

                    {/* Next Navigation Arrow */}
                    <button
                        onClick={handleManualNext}
                        aria-label="Next slide"
                        className="absolute -right-3 sm:-right-5 lg:-right-6 top-1/2 -translate-y-1/2 z-30 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white text-[#075BFA] shadow-[0_4px_16px_rgba(7,20,47,0.12)] border border-slate-200/90 flex items-center justify-center hover:scale-105 hover:border-[#075BFA] active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#075BFA]/50"
                    >
                        <FiChevronRight className="w-5 h-5 stroke-[2.5]" />
                    </button>

                    {/* Main Rounded Carousel Card */}
                    <div
                        className="relative w-full bg-gradient-to-br from-[#FCFAF6] via-[#FAF7F2] to-[#F5F1E8] rounded-[28px] sm:rounded-[36px] lg:rounded-[40px] border-2 border-[#075BFA]/40 p-6 sm:p-9 lg:p-12 shadow-[0_10px_35px_-5px_rgba(7,91,250,0.08),0_2px_6px_rgba(7,20,47,0.03)] overflow-hidden select-none"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {/* Subtle Pale-Blue Decorative Corner Ambiance */}
                        <div
                            className="absolute -top-24 -left-24 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl pointer-events-none"
                            aria-hidden="true"
                        />
                        <div
                            className="absolute -bottom-24 -right-24 w-72 h-72 bg-sky-100/35 rounded-full blur-3xl pointer-events-none"
                            aria-hidden="true"
                        />

                        {/* Animated Slide Content */}
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={currentSlide.id}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center"
                            >
                                {/* Left Content: Slide Number, Title, Description, CTA Button */}
                                <div className="lg:col-span-5 flex flex-col justify-center order-1 lg:order-1">
                                    
                                    {/* Number Badge */}
                                    <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#EBF2FE] text-[#075BFA] font-bold text-xs font-mono tracking-wider w-fit mb-3.5">
                                        {currentSlide.numberBadge}
                                    </div>

                                    {/* H3 Heading */}
                                    <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold font-display text-[#07142F] leading-tight tracking-tight mb-2">
                                        {currentSlide.title}
                                    </h3>

                                    {/* Hand-Drawn Blue Underline */}
                                    <svg
                                        className="w-20 sm:w-24 h-2 text-[#075BFA] mt-0.5 mb-4"
                                        viewBox="0 0 80 8"
                                        fill="none"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M2 5C24 2 56 2 78 5"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                        />
                                    </svg>

                                    {/* Description Text */}
                                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans mb-6 max-w-md">
                                        {currentSlide.description}
                                    </p>

                                    {/* CTA Pill Button */}
                                    <div>
                                        <Link
                                            href={currentSlide.ctaHref}
                                            className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#075BFA] text-white font-bold text-sm sm:text-[15px] shadow-[0_4px_16px_rgba(7,91,250,0.3)] hover:shadow-[0_6px_22px_rgba(7,91,250,0.4)] hover:bg-[#054cd4] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                                        >
                                            <span>{currentSlide.ctaText}</span>
                                            <FiArrowRight className="w-4 h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Right Content: Generated 16:9 3D Illustration */}
                                <div className="lg:col-span-7 flex items-center justify-center order-2 lg:order-2">
                                    <div className="relative w-full aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_12px_28px_rgba(7,20,47,0.08)] bg-white/70 border border-white/80">
                                        <Image
                                            src={currentSlide.imageSrc}
                                            alt={currentSlide.imageAlt}
                                            fill
                                            priority={currentIndex === 0}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 58vw, 680px"
                                            className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* ========================================================
                        PAGINATION DOTS
                    ======================================================== */}
                    <div
                        className="flex items-center justify-center gap-2.5 my-6 sm:my-8 select-none"
                        role="tablist"
                        aria-label="Carousel pagination"
                    >
                        {solutionsData.map((slide, idx) => (
                            <button
                                key={slide.id}
                                onClick={() => goToSlide(idx)}
                                role="tab"
                                aria-selected={currentIndex === idx}
                                aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
                                className={`h-2.5 transition-all duration-300 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#075BFA]/50 ${
                                    currentIndex === idx
                                        ? "w-8 bg-[#075BFA] shadow-[0_2px_8px_rgba(7,91,250,0.4)]"
                                        : "w-2.5 bg-blue-200/80 hover:bg-blue-300"
                                }`}
                            />
                        ))}
                    </div>

                    {/* ========================================================
                        SIX CLICKABLE CATEGORY SELECTORS
                        (Desktop: Clean centered row | Mobile: Horizontally scrollable)
                    ======================================================== */}
                    <div className="w-full flex justify-center">
                        <div
                            className="flex items-center justify-start lg:justify-center gap-2 sm:gap-3 overflow-x-auto lg:overflow-x-visible pb-2 pt-1 px-4 sm:px-6 lg:px-0 snap-x [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden w-full lg:w-auto"
                            role="tablist"
                            aria-label="Solution category tabs"
                        >
                            {solutionsData.map((slide, idx) => {
                                const isActive = currentIndex === idx;
                                return (
                                    <button
                                        key={slide.id}
                                        onClick={() => goToSlide(idx)}
                                        role="tab"
                                        aria-selected={isActive}
                                        className={`flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-[13px] font-bold tracking-tight whitespace-nowrap transition-all duration-200 shrink-0 cursor-pointer snap-start focus:outline-none ${
                                            isActive
                                                ? "bg-[#EBF2FE] border border-[#075BFA]/40 text-[#075BFA] shadow-[0_2px_8px_rgba(7,91,250,0.12)]"
                                                : "bg-white/80 border border-slate-200/70 text-slate-600 hover:text-[#07142F] hover:bg-white hover:border-slate-300"
                                        }`}
                                    >
                                        <span className={isActive ? "text-[#075BFA]" : "text-slate-500"}>
                                            <CategoryIcon index={idx} className="w-4 sm:w-4.5 h-4 sm:h-4.5 shrink-0" />
                                        </span>
                                        <span>{slide.categoryLabel}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
