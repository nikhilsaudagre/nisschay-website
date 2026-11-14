"use client";

import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import {
    LuZap,
    LuLayers,
    LuShieldCheck,
} from "react-icons/lu";
import {
    FaAws,
    FaJava,
} from "react-icons/fa6";
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiJavascript,
    SiTailwindcss,
    SiSpringboot,
    SiFastapi,
    SiOpenai,
    SiDocker,
    SiNodedotjs,
    SiPostgresql,
    SiMysql,
    SiShopify,
    SiPytorch,
    SiTensorflow,
    SiHubspot,
    SiMongodb,
    SiRedis,
    SiHtml5,
    SiCss3,
    SiGoogleanalytics,
    SiGoogleads,
    SiMeta,
    SiAnthropic,
    SiLangchain,
    SiSemrush,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

// ============================================================================
// Official Multi-Tone Brand Vectors Matching Industry Reference Design
// ============================================================================

// Official Dual-Tone AWS Vector (Charcoal Text + Vibrant Orange Smile Arrow)
const AwsOfficialLogo = () => (
    <svg className="w-full h-full object-contain shrink-0" viewBox="0 0 24 24" fill="none" aria-label="AWS">
        <path
            d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167z"
            fill="#232F3E"
        />
        <path
            d="M21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.272-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.383.607z"
            fill="#FF9900"
        />
        <path
            d="M22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z"
            fill="#FF9900"
        />
    </svg>
);

// Official Trademarked Python Dual-Tone Vector (Blue & Yellow Intertwined Snakes)
const PythonOfficialLogo = () => (
    <svg className="w-full h-full object-contain shrink-0" viewBox="0 0 110 110" fill="none" aria-label="Python">
        <path
            d="M54.5 9c-24.8 0-23.3 10.7-23.3 10.7l.1 11.1h23.7v3.3H22.4C12.2 34.1 4.5 43.7 4.5 56.6c0 12.9 8.9 22.1 20.7 22.1h6.7v-9.8c0-11.1 9.5-20.9 20.7-20.9h23.5c9.6 0 17.4-8 17.4-17.7 0-9.7-7.9-17.3-17.6-17.3L54.5 9zm-12.3 6.9c2.2 0 3.9 1.8 3.9 3.9s-1.8 3.9-3.9 3.9-3.9-1.8-3.9-3.9 1.8-3.9 3.9-3.9z"
            fill="#3776AB"
        />
        <path
            d="M55.5 101c24.8 0 23.3-10.7 23.3-10.7l-.1-11.1H55v-3.3h32.6c10.2 0 17.9-9.6 17.9-22.5 0-12.9-8.9-22.1-20.7-22.1h-6.7v9.8c0 11.1-9.5 20.9-20.7 20.9H33.9c-9.6 0-17.4 8-17.4 17.7 0 9.7 7.9 17.3 17.6 17.3L55.5 101zm12.3-6.9c-2.2 0-3.9-1.8-3.9-3.9s1.8-3.9 3.9-3.9 3.9 1.8 3.9 3.9-1.8 3.9-3.9 3.9z"
            fill="#FFD43B"
        />
    </svg>
);

// Official JavaScript Yellow Square with Black JS Letters
const JavaScriptOfficialLogo = () => (
    <svg className="w-full h-full object-contain shrink-0" viewBox="0 0 24 24" fill="none" aria-label="JavaScript">
        <rect width="24" height="24" rx="3.5" fill="#F7DF1E" />
        <path
            d="M22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.916-.841 1.516-.646.436.135.84.406 1.156.766l1.983-1.276c-.676-1.171-1.682-1.772-2.928-1.847-1.727-.03-3.349.976-3.469 2.748-.12 1.592.871 2.508 2.523 3.198 1.052.42 1.487.751 1.592 1.292.196.886-.48 1.352-1.637 1.337-1.096-.061-1.787-.586-2.327-1.322l-1.923 1.202c.751 1.486 2.057 2.192 3.964 2.222 2.373.076 4.055-1.126 3.896-3.155zM9.54 11.832H6.988v6.786c0 1.261-.09 2.057-.541 2.507-.48.451-1.171.556-2.027.421-.811-.12-1.442-.496-1.892-.992l-1.472 1.622C1.968 23.27 3.32 24 5.347 24c1.862 0 3.094-.691 3.724-1.652.541-.826.469-1.997.469-3.738v-6.778z"
            fill="#000000"
        />
    </svg>
);

// ============================================================================
// Types & 24 Relevant Core Technologies (AI, Fullstack, Cloud & Digital Marketing)
// ============================================================================

interface TechItem {
    name: string;
    customComponent?: React.ComponentType;
    icon?: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
    brandColor: string;
}

// Column 1: AI, Web & Analytics (React, Google Analytics, AWS, Claude, PostgreSQL, HTML5)
const column1: TechItem[] = [
    { name: "React", icon: SiReact, brandColor: "#00D8FF" },
    { name: "Google Analytics", icon: SiGoogleanalytics, brandColor: "#F9AB00" },
    { name: "AWS", customComponent: AwsOfficialLogo, brandColor: "#FF9900" },
    { name: "Anthropic Claude", icon: SiAnthropic, brandColor: "#D97706" },
    { name: "PostgreSQL", icon: SiPostgresql, brandColor: "#4169E1" },
    { name: "HTML5", icon: SiHtml5, brandColor: "#E34F26" },
];

// Column 2: AI, Fullstack & Paid Social (Next.js, Meta Ads, Docker, OpenAI, HubSpot, CSS3)
const column2: TechItem[] = [
    { name: "Next.js", icon: SiNextdotjs, brandColor: "#000000" },
    { name: "Meta Ads", icon: SiMeta, brandColor: "#0081FB" },
    { name: "Docker", icon: SiDocker, brandColor: "#2496ED" },
    { name: "OpenAI", icon: SiOpenai, brandColor: "#10A37F" },
    { name: "HubSpot", icon: SiHubspot, brandColor: "#FF7A59" },
    { name: "CSS3", icon: SiCss3, brandColor: "#1572B6" },
];

// Column 3: AI Frameworks & Search Marketing (Python, Google Ads, PyTorch, Tailwind, JS, LangChain)
const column3: TechItem[] = [
    { name: "Python", customComponent: PythonOfficialLogo, brandColor: "#3776AB" },
    { name: "Google Ads", icon: SiGoogleads, brandColor: "#4285F4" },
    { name: "PyTorch", icon: SiPytorch, brandColor: "#EE4C2C" },
    { name: "Tailwind CSS", icon: SiTailwindcss, brandColor: "#06B6D4" },
    { name: "JavaScript", customComponent: JavaScriptOfficialLogo, brandColor: "#F7DF1E" },
    { name: "LangChain", icon: SiLangchain, brandColor: "#1C3C3C" },
];

// Column 4: AI Systems, Cloud & Growth Marketing (Azure, Shopify, Node.js, TensorFlow, Semrush, MongoDB)
const column4: TechItem[] = [
    { name: "Microsoft Azure", icon: VscAzure, brandColor: "#0078D4" },
    { name: "Shopify", icon: SiShopify, brandColor: "#7AB55C" },
    { name: "Node.js", icon: SiNodedotjs, brandColor: "#5FA04E" },
    { name: "TensorFlow", icon: SiTensorflow, brandColor: "#FF6F00" },
    { name: "Semrush", icon: SiSemrush, brandColor: "#FF642D" },
    { name: "MongoDB", icon: SiMongodb, brandColor: "#47A248" },
];

const columns = [
    { id: "col-1", items: column1, animationClass: "animate-stripe-up", delay: "0s" },
    { id: "col-2", items: column2, animationClass: "animate-stripe-down", delay: "-8s" },
    { id: "col-3", items: column3, animationClass: "animate-stripe-up-fast", delay: "-16s" },
    { id: "col-4", items: column4, animationClass: "animate-stripe-down-slow", delay: "-24s" },
];

const supportingPoints = [
    {
        title: "Reliable & Performance",
        description: "A modern technology stack for stable, high-performing solutions.",
        icon: LuZap,
    },
    {
        title: "Scalable & Flexible",
        description: "Solutions that can grow as your business needs change.",
        icon: LuLayers,
    },
    {
        title: "Secure & Maintainable",
        description: "Built with good engineering practices for long-term use.",
        icon: LuShieldCheck,
    },
];

export default function HomeTechStackSection() {
    return (
        <section
            id="technology"
            className="relative w-full bg-white py-16 sm:py-20 lg:py-26 overflow-hidden select-none"
        >
            {/* Embedded Keyframes for Seamless Vertical Stripe Marquee */}
            <style>{`
                @keyframes stripeScrollUp {
                    0% {
                        transform: translateY(0);
                    }
                    100% {
                        transform: translateY(-50%);
                    }
                }

                @keyframes stripeScrollDown {
                    0% {
                        transform: translateY(-50%);
                    }
                    100% {
                        transform: translateY(0);
                    }
                }

                .animate-stripe-up {
                    animation: stripeScrollUp 28s linear infinite;
                }

                .animate-stripe-down {
                    animation: stripeScrollDown 32s linear infinite;
                }

                .animate-stripe-up-fast {
                    animation: stripeScrollUp 25s linear infinite;
                }

                .animate-stripe-down-slow {
                    animation: stripeScrollDown 34s linear infinite;
                }

                /* Hardware 60fps/120fps GPU Acceleration */
                .stripe-track {
                    will-change: transform;
                    transform: translate3d(0, 0, 0);
                    backface-visibility: hidden;
                }

                /* Hover interaction: Pause only the hovered column without any glow */
                .stripe-column:hover .stripe-track {
                    animation-play-state: paused;
                }

                /* Gradual Opacity Fade: Transparent near top/bottom edges, 100% solid in central view */
                .tech-viewport-mask {
                    mask-image: linear-gradient(
                        to bottom,
                        transparent 0%,
                        rgba(0, 0, 0, 0.4) 2.5%,
                        rgba(0, 0, 0, 0.85) 6%,
                        black 10%,
                        black 90%,
                        rgba(0, 0, 0, 0.85) 94%,
                        rgba(0, 0, 0, 0.4) 97.5%,
                        transparent 100%
                    );
                    -webkit-mask-image: linear-gradient(
                        to bottom,
                        transparent 0%,
                        rgba(0, 0, 0, 0.4) 2.5%,
                        rgba(0, 0, 0, 0.85) 6%,
                        black 10%,
                        black 90%,
                        rgba(0, 0, 0, 0.85) 94%,
                        rgba(0, 0, 0, 0.4) 97.5%,
                        transparent 100%
                    );
                }

                @media (prefers-reduced-motion: reduce) {
                    .animate-stripe-up,
                    .animate-stripe-down,
                    .animate-stripe-up-fast,
                    .animate-stripe-down-slow {
                        animation: none !important;
                    }
                }
            `}</style>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
                    {/* ============================================================
                        LEFT COLUMN: Editorial Content (Strictly Preserved)
                    ============================================================ */}
                    <div className="lg:col-span-5 flex flex-col items-start text-left w-full min-w-0">
                        {/* Eyebrow - Matching Nisschay Homepage Design System (OUR PROCESS / WHY CHOOSE NISSCHAY) */}
                        <div className="inline-flex items-center gap-2 mb-4">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0057fe] opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0057fe]" />
                            </span>
                            <span className="w-5 h-[2px] bg-[#0057fe]" aria-hidden="true" />
                            <span className="text-xs font-mono font-bold tracking-[0.22em] text-[#0057fe] uppercase">
                                OUR TECHNOLOGY
                            </span>
                        </div>

                        {/* Headline */}
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-extrabold text-[#000c24] tracking-tight leading-[1.18] font-display mb-4">
                            The tools behind{" "}
                            <br className="sm:hidden" />
                            <span className="relative inline-block text-[#0057fe]">
                                better digital solutions.
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
                        <p className="text-slate-600 text-sm sm:text-base lg:text-[17px] leading-relaxed font-normal mb-7 sm:mb-8 max-w-lg">
                            We use proven technologies to build websites, software, AI solutions, digital marketing platforms and reliable systems.
                        </p>

                        {/* Three Supporting Points */}
                        <div className="flex flex-col gap-3.5 w-full mb-9 max-w-md">
                            {supportingPoints.map((point, idx) => {
                                const Icon = point.icon;
                                return (
                                    <div
                                        key={idx}
                                        className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/80 border border-slate-200/70 shadow-2xs hover:bg-white hover:border-blue-200 hover:shadow-xs transition-all duration-200"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-blue-50/90 border border-blue-100 text-[#0057fe] flex items-center justify-center shrink-0 text-lg shadow-2xs mt-0.5">
                                            <Icon />
                                        </div>
                                        <div className="min-w-0">
                                            <h3 className="text-sm font-bold text-[#000c24] font-display leading-tight">
                                                {point.title}
                                            </h3>
                                            <p className="text-xs text-slate-500 leading-relaxed mt-1">
                                                {point.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* CTA Button - Clean, Glow-Free Button Matching Nisschay Design System */}
                        <Link
                            href="/services"
                            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#0057fe] hover:bg-[#0047d6] text-white font-bold font-outfit text-sm rounded-full shadow-xs hover:shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 select-none group"
                        >
                            <span>Explore Our Capabilities</span>
                            <FiArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </Link>
                    </div>

                    {/* ============================================================
                        RIGHT COLUMN: Dribbble-Inspired Soft Tray & Floating Tiles
                    ============================================================ */}
                    <div className="lg:col-span-7 flex flex-col items-center justify-center w-full min-w-0">
                        {/* Display Tray Container: Architectural Inset Dock with Soft Contrast */}
                        <div className="w-full max-w-[500px] relative rounded-[28px] sm:rounded-[34px] md:rounded-[40px] p-3 sm:p-5 md:p-6 bg-gradient-to-b from-[#eef2f7] via-[#ebf0f6] to-[#e6ecf4] border border-slate-200/90 shadow-[inset_0_2px_5px_rgba(15,23,42,0.04),inset_0_-1px_2px_rgba(255,255,255,0.85),0_20px_50px_-15px_rgba(15,23,42,0.06)] overflow-hidden">
                            {/* Subtle Ambient Radial Highlight */}
                            <div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-400/[0.03] blur-3xl rounded-full pointer-events-none"
                                aria-hidden="true"
                            />

                            {/* Viewport with Smooth Gradual Opacity Fade - Mobile-tuned height */}
                            <div className="tech-viewport-mask relative h-[340px] sm:h-[420px] md:h-[480px] lg:h-[500px] overflow-hidden">
                                {/* 4 Vertical Moving Stripes Grid */}
                                <div className="grid grid-cols-4 gap-2.5 sm:gap-3.5 md:gap-4 h-full relative z-10 justify-items-center">
                                    {columns.map((col) => {
                                        // Duplicate 6 items to 12 items for seamless mathematical loop
                                        const duplicatedItems = [...col.items, ...col.items];
                                        return (
                                            <div
                                                key={col.id}
                                                className="stripe-column overflow-hidden h-full flex flex-col items-center hover:z-20 relative"
                                            >
                                                <div
                                                    className={`stripe-track ${col.animationClass} flex flex-col gap-2.5 sm:gap-3.5 md:gap-4 will-change-transform py-2`}
                                                    style={{ animationDelay: col.delay }}
                                                >
                                                    {duplicatedItems.map((tech, itemIdx) => {
                                                        const IconComponent = tech.icon;
                                                        const CustomLogo = tech.customComponent;
                                                        return (
                                                            <div
                                                                key={`${tech.name}-${itemIdx}`}
                                                                className="group/tile relative flex items-center justify-center w-[52px] h-[52px] sm:w-[62px] sm:h-[62px] md:w-[72px] md:h-[72px] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] bg-gradient-to-b from-[#ffffff] via-[#ffffff] to-[#f8fafd] border border-slate-200/90 shadow-[inset_0_1.5px_1px_0_rgba(255,255,255,1),inset_1px_0_0_0_rgba(255,255,255,0.9),inset_0_-1.5px_0_0_rgba(203,213,225,0.45),0_2px_5px_0_rgba(15,23,42,0.04),0_8px_20px_-3px_rgba(15,23,42,0.09)] hover:-translate-y-1.5 hover:scale-[1.03] hover:z-30 hover:border-slate-300 hover:shadow-[inset_0_1.5px_1px_0_white,0_16px_32px_-4px_rgba(15,23,42,0.14),0_6px_14px_-2px_rgba(15,23,42,0.07)] transition-all duration-200 cursor-pointer select-none shrink-0"
                                                            >
                                                                {/* Centered Official Brand Logo - Proportional with clean breathing room (47% scale) and micro-spring */}
                                                                <div className="relative z-10 w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[34px] md:h-[34px] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover/tile:scale-110 group-hover/tile:rotate-[-2deg]">
                                                                    {CustomLogo ? (
                                                                        <CustomLogo />
                                                                    ) : IconComponent ? (
                                                                        <IconComponent
                                                                            className="w-full h-full object-contain shrink-0"
                                                                            style={{ color: tech.brandColor }}
                                                                        />
                                                                    ) : null}
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
