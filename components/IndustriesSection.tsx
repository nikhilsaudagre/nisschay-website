"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// =========================================================================
// INDUSTRIES DATA (EXACTLY 5 INDUSTRIES)
// Styled in Nisschay's Warm Off-White / Pastel Brand Palette
// =========================================================================
export interface IndustryItem {
    id: string;
    number: string;
    category: string;
    title: string;
    description: string;
    href: string;
    image: string;
    imageAlt: string;
    cardGradient: string;
    cardBorder: string;
    badgeBg: string;
    badgeText: string;
    accentColor: string;
    shadowGlow: string;
}

export const INDUSTRIES_DATA: IndustryItem[] = [
    {
        id: "healthcare",
        number: "01",
        category: "HEALTHCARE",
        title: "Healthcare & Clinics",
        description:
            "Clinic websites, appointment systems, patient management and workflow automation.",
        href: "/services?industry=healthcare#consultation",
        image: "/images/industries/healthcare_light.webp",
        imageAlt:
            "Modern 3D healthcare clinic building with glowing medical cross and stethoscope",
        cardGradient: "from-[#F3F8FE] via-[#FFFFFF] to-[#F7FAFD]",
        cardBorder: "border-[#D6EAFE]",
        badgeBg: "bg-[#EBF5FE]",
        badgeText: "text-[#0057fe]",
        accentColor: "#0057fe",
        shadowGlow: "hover:shadow-[0_16px_36px_rgba(0,87,254,0.12)]",
    },
    {
        id: "education",
        number: "02",
        category: "EDUCATION",
        title: "Education & E-Learning",
        description:
            "Learning platforms, student management systems and digital education solutions.",
        href: "/services?industry=education#consultation",
        image: "/images/industries/education_light.webp",
        imageAlt:
            "3D graduation cap resting on books next to a glowing e-learning laptop screen",
        cardGradient: "from-[#FFFDF2] via-[#FFFFFF] to-[#FFFDE8]",
        cardBorder: "border-[#FEEA9A]",
        badgeBg: "bg-[#FEF9C3]",
        badgeText: "text-[#a16207]",
        accentColor: "#a16207",
        shadowGlow: "hover:shadow-[0_16px_36px_rgba(234,179,8,0.14)]",
    },
    {
        id: "retail",
        number: "03",
        category: "RETAIL & E-COMMERCE",
        title: "Retail & E-Commerce",
        description:
            "E-commerce websites, inventory management, order systems and business automation.",
        href: "/services?industry=retail#consultation",
        image: "/images/industries/retail_light.webp",
        imageAlt:
            "3D wire shopping cart with packages, shopping bag, and online retail elements",
        cardGradient: "from-[#FFF6F2] via-[#FFFFFF] to-[#FFF1EB]",
        cardBorder: "border-[#FEDDCB]",
        badgeBg: "bg-[#FFEDD5]",
        badgeText: "text-[#c2410c]",
        accentColor: "#c2410c",
        shadowGlow: "hover:shadow-[0_16px_36px_rgba(249,115,22,0.12)]",
    },
    {
        id: "startups",
        number: "04",
        category: "STARTUPS",
        title: "Startups & Entrepreneurs",
        description:
            "MVP development, business websites, custom applications and AI-powered tools.",
        href: "/services?industry=startups#consultation",
        image: "/images/industries/startups_light.webp",
        imageAlt:
            "3D space rocket launching into the sky with cloud exhaust plumes",
        cardGradient: "from-[#F8F5FE] via-[#FFFFFF] to-[#F3EFFF]",
        cardBorder: "border-[#DFCEFB]",
        badgeBg: "bg-[#EDE9FE]",
        badgeText: "text-[#7c3aed]",
        accentColor: "#7c3aed",
        shadowGlow: "hover:shadow-[0_16px_36px_rgba(124,58,237,0.12)]",
    },
    {
        id: "professional-services",
        number: "05",
        category: "PROFESSIONAL SERVICES",
        title: "Professional Services",
        description:
            "Business websites, customer portals, CRM systems and custom workflow solutions.",
        href: "/services?industry=professional-services#consultation",
        image: "/images/industries/professional_services_light.webp",
        imageAlt:
            "3D executive briefcase, digital dashboard tablet with analytics and bar chart",
        cardGradient: "from-[#F1FAF5] via-[#FFFFFF] to-[#E9F8EE]",
        cardBorder: "border-[#C4EED1]",
        badgeBg: "bg-[#CCFBF1]",
        badgeText: "text-[#0f766e]",
        accentColor: "#0f766e",
        shadowGlow: "hover:shadow-[0_16px_36px_rgba(13,148,136,0.12)]",
    },
];

const AUTOPLAY_INTERVAL = 4500; // 4.5 seconds

export default function IndustriesSection() {
    // 3x duplicated array for infinite seamless looping
    const displayCards = [
        ...INDUSTRIES_DATA,
        ...INDUSTRIES_DATA,
        ...INDUSTRIES_DATA,
    ];
    const initialIndex = INDUSTRIES_DATA.length; // Start at middle set (index 5)

    const [trackIndex, setTrackIndex] = useState(initialIndex);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const [cardStep, setCardStep] = useState(354); // card width + gap in px

    const trackRef = useRef<HTMLDivElement>(null);
    const firstCardRef = useRef<HTMLDivElement>(null);
    const dragStartX = useRef<number | null>(null);
    const isDragging = useRef(false);

    // Calculate active index (0 to 4) for pagination indicators
    const activeIndex =
        ((trackIndex % INDUSTRIES_DATA.length) + INDUSTRIES_DATA.length) %
        INDUSTRIES_DATA.length;

    // Dynamically measure card step width (card width + gap)
    const updateCardStep = useCallback(() => {
        if (firstCardRef.current) {
            const cardWidth = firstCardRef.current.offsetWidth;
            const gap = window.innerWidth < 640 ? 16 : 24;
            setCardStep(cardWidth + gap);
        }
    }, []);

    useEffect(() => {
        updateCardStep();
        window.addEventListener("resize", updateCardStep);
        return () => window.removeEventListener("resize", updateCardStep);
    }, [updateCardStep]);

    // Handle seamless loop normalization when transitioning ends
    const handleTransitionEnd = () => {
        if (trackIndex >= INDUSTRIES_DATA.length * 2) {
            setIsTransitioning(false);
            setTrackIndex(trackIndex - INDUSTRIES_DATA.length);
        } else if (trackIndex < INDUSTRIES_DATA.length) {
            setIsTransitioning(false);
            setTrackIndex(trackIndex + INDUSTRIES_DATA.length);
        }
    };

    // Re-enable transition on the next frame after an instant jump
    useEffect(() => {
        if (!isTransitioning) {
            const raf = requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setIsTransitioning(true);
                });
            });
            return () => cancelAnimationFrame(raf);
        }
    }, [isTransitioning]);

    // Navigation functions
    const nextSlide = useCallback(() => {
        setIsTransitioning(true);
        setTrackIndex((prev) => prev + 1);
    }, []);

    const prevSlide = useCallback(() => {
        setIsTransitioning(true);
        setTrackIndex((prev) => prev - 1);
    }, []);

    const goToSlide = (targetIndex: number) => {
        setIsTransitioning(true);
        setTrackIndex(INDUSTRIES_DATA.length + targetIndex);
    };

    // Autoplay Timer (Pauses on hover, tab blur, or prefers-reduced-motion)
    useEffect(() => {
        const prefersReduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
        if (prefersReduced) return;

        let interval: NodeJS.Timeout | null = null;

        const startAutoplay = () => {
            if (!interval && !isHovered && !document.hidden) {
                interval = setInterval(() => {
                    nextSlide();
                }, AUTOPLAY_INTERVAL);
            }
        };

        const stopAutoplay = () => {
            if (interval) {
                clearInterval(interval);
                interval = null;
            }
        };

        const handleVisibilityChange = () => {
            if (document.hidden) {
                stopAutoplay();
            } else {
                startAutoplay();
            }
        };

        startAutoplay();
        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            stopAutoplay();
            document.removeEventListener(
                "visibilitychange",
                handleVisibilityChange
            );
        };
    }, [isHovered, nextSlide]);

    // Touch & Mouse Drag Handlers
    const handleTouchStart = (e: React.TouchEvent) => {
        dragStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (dragStartX.current === null) return;
        const diff = dragStartX.current - e.changedTouches[0].clientX;
        if (diff > 45) {
            nextSlide();
        } else if (diff < -45) {
            prevSlide();
        }
        dragStartX.current = null;
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        dragStartX.current = e.clientX;
        isDragging.current = true;
    };

    const handleMouseUp = (e: React.MouseEvent) => {
        if (!isDragging.current || dragStartX.current === null) return;
        const diff = dragStartX.current - e.clientX;
        if (diff > 50) {
            nextSlide();
        } else if (diff < -50) {
            prevSlide();
        }
        dragStartX.current = null;
        isDragging.current = false;
    };

    return (
        <section
            id="industries"
            className="relative w-full overflow-x-clip bg-transparent py-16 sm:py-20 lg:py-24 scroll-mt-20 sm:scroll-mt-24"
            aria-roledescription="carousel"
            aria-label="Industries We Build For"
        >
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">

                {/* ========================================================
                    TOP ROW: HEADLINE & PARAGRAPH LIFTED ON TOP
                    Eyebrow, Main Heading with Signature Brand Stroke & Paragraph
                ======================================================== */}
                <div className="max-w-2xl sm:max-w-3xl space-y-3.5 sm:space-y-4">
                    {/* Eyebrow: — INDUSTRIES WE SERVE */}
                    <div className="inline-flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#0057fe]" aria-hidden="true" />
                        <span className="w-4 h-[2px] bg-[#0057fe]" aria-hidden="true" />
                        <span className="text-xs font-mono font-bold tracking-[0.22em] text-[#0057fe] uppercase">
                            INDUSTRIES WE SERVE
                        </span>
                    </div>

                    {/* Semantic H2 Heading with Signature Brand Underline Stroke */}
                    <h2 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] font-black text-[#000c24] tracking-tight leading-[1.14] text-balance">
                        Industries We{" "}
                        <span className="relative inline-block text-[#0057fe] whitespace-nowrap">
                            Build For
                            <svg
                                className="absolute -bottom-1.5 sm:-bottom-2 left-0 w-full h-2.5 sm:h-3 text-[#0057fe] pointer-events-none"
                                viewBox="0 0 160 12"
                                fill="none"
                                preserveAspectRatio="none"
                                aria-hidden="true"
                            >
                                <path
                                    d="M2 9C40 2 120 2 158 9"
                                    stroke="currentColor"
                                    strokeWidth="3.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span>
                    </h2>

                    {/* Supporting Paragraph */}
                    <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
                        Nisschay delivers technology solutions that address real business challenges across different industries. From custom software and web applications to AI-powered automation, we build solutions around the way businesses work.
                    </p>
                </div>

                {/* ========================================================
                    BOTTOM ROW: FULL-WIDTH HORIZONTAL CAROUSEL UNDERNEATH
                    Spans horizontally across the screen with smooth translation
                ======================================================== */}
                <div
                    className="w-full overflow-hidden relative cursor-grab active:cursor-grabbing select-none py-2"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={(e) => {
                        setIsHovered(false);
                        handleMouseUp(e);
                    }}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                >
                    <div
                        ref={trackRef}
                        className="flex items-stretch gap-5 sm:gap-6"
                        style={{
                            transform: `translateX(-${trackIndex * cardStep}px)`,
                            transition: isTransitioning
                                ? "transform 600ms cubic-bezier(0.25, 1, 0.5, 1)"
                                : "none",
                        }}
                        onTransitionEnd={handleTransitionEnd}
                    >
                        {displayCards.map((industry, i) => {
                            const isFirst = i === 0;
                            return (
                                <div
                                    key={`${industry.id}-${i}`}
                                    ref={isFirst ? firstCardRef : undefined}
                                    className="w-[280px] sm:w-[310px] md:w-[330px] lg:w-[340px] shrink-0"
                                    role="group"
                                    aria-roledescription="slide"
                                    aria-label={`${industry.title} (${(i % 5) + 1} of 5)`}
                                >
                                    <IndustryCard industry={industry} />
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* ========================================================
                    BOTTOM ROW: SCROLLER DIAL & NAV BUTTONS UNDER IMAGES
                    Centered underneath the carousel track for intuitive navigation
                ======================================================== */}
                <div className="flex items-center justify-center gap-5 sm:gap-7 pt-2 sm:pt-4">
                    {/* Clickable Pagination Indicators (Scroller Dial) */}
                    <div
                        className="flex items-center gap-2"
                        role="tablist"
                        aria-label="Select industry card"
                    >
                        {INDUSTRIES_DATA.map((ind, idx) => {
                            const isActive = activeIndex === idx;
                            return (
                                <button
                                    key={ind.id}
                                    onClick={() => goToSlide(idx)}
                                    role="tab"
                                    aria-selected={isActive}
                                    aria-label={`Show ${ind.title}`}
                                    className={`transition-all duration-300 rounded-full h-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0057fe] cursor-pointer ${
                                        isActive
                                            ? "w-8 bg-[#0057fe]"
                                            : "w-2.5 bg-slate-300 hover:bg-slate-400"
                                    }`}
                                />
                            );
                        })}
                    </div>

                    {/* Prev & Next Buttons */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={prevSlide}
                            aria-label="Previous industry card"
                            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-slate-200 bg-white hover:border-[#0057fe] hover:text-[#0057fe] text-slate-700 shadow-sm flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0057fe] cursor-pointer"
                        >
                            <FiChevronLeft size={19} aria-hidden="true" />
                        </button>
                        <button
                            onClick={nextSlide}
                            aria-label="Next industry card"
                            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-slate-200 bg-white hover:border-[#0057fe] hover:text-[#0057fe] text-slate-700 shadow-sm flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0057fe] cursor-pointer"
                        >
                            <FiChevronRight size={19} aria-hidden="true" />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}

// =========================================================================
// INDIVIDUAL WARM WHITE / PASTEL INDUSTRY CARD COMPONENT
// Consistent with Nisschay's warm off-white brand palette
// =========================================================================
function IndustryCard({ industry }: { industry: IndustryItem }) {
    return (
        <Link
            href={industry.href}
            aria-label={`${industry.title}: ${industry.description}`}
            className={`group relative flex flex-col justify-between w-full h-[370px] sm:h-[390px] rounded-[24px] sm:rounded-[28px] p-5 sm:p-6 bg-gradient-to-b ${industry.cardGradient} ${industry.cardBorder} border shadow-[0_4px_16px_rgba(7,20,47,0.04),0_12px_28px_-4px_rgba(7,20,47,0.06)] ${industry.shadowGlow} hover:-translate-y-2 hover:border-[#0057fe]/40 transition-all duration-300 overflow-hidden`}
        >
            {/* Top Area: Category Badge, Heading & Description */}
            <div className="relative z-10">
                {/* Category Badge */}
                <span
                    className={`inline-block text-[11px] font-mono font-bold tracking-[0.16em] uppercase px-2.5 py-1 rounded-full ${industry.badgeBg} ${industry.badgeText} mb-2.5`}
                >
                    {industry.category}
                </span>

                {/* Card Title (Semantic H3) */}
                <h3 className="text-lg sm:text-xl font-bold text-[#000c24] tracking-tight leading-snug group-hover:text-[#0057fe] transition-colors mb-1.5">
                    {industry.title}
                </h3>

                {/* Concise Description */}
                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-normal line-clamp-3">
                    {industry.description}
                </p>
            </div>

            {/* Bottom Area: Compact 3D Industry Illustration on Warm White Background */}
            <div className="relative z-10 w-full h-36 sm:h-40 mt-auto flex items-end justify-center overflow-hidden">
                <div className="relative w-full h-full flex items-end justify-center transform group-hover:scale-105 transition-transform duration-500 ease-out">
                    <Image
                        src={industry.image}
                        alt={industry.imageAlt}
                        width={360}
                        height={360}
                        className="w-full h-full object-contain object-bottom filter drop-shadow-[0_8px_18px_rgba(7,20,47,0.07)] pointer-events-none select-none"
                    />
                </div>
            </div>
        </Link>
    );
}
