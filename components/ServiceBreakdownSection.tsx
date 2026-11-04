"use client";

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { serviceBreakdowns } from "@/data/serviceBreakdowns";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import { 
    WebSaaSSimulator, MobileAppSimulator, AIWhatsAppSimulator, 
    CustomSoftwareSimulator, UIUXDesignSimulator, CloudDevOpsSimulator 
} from "./ServiceWorkspacePreviews";

const serviceOrbColors: Record<string, { orb1: string; orb2: string }> = {
    "web-saas": { orb1: "bg-blue-300/20", orb2: "bg-indigo-300/15" },
    "mobile-apps": { orb1: "bg-emerald-300/20", orb2: "bg-teal-300/15" },
    "ai-automation": { orb1: "bg-purple-300/20", orb2: "bg-violet-300/15" },
    "custom-software": { orb1: "bg-cyan-300/20", orb2: "bg-blue-300/15" },
    "ui-ux-design": { orb1: "bg-rose-300/20", orb2: "bg-pink-300/15" },
    "cloud-devops": { orb1: "bg-sky-300/20", orb2: "bg-blue-300/15" }
};

const serviceBadgeColors: Record<string, { bg: string; text: string; border: string; bgHover: string; gradient: string }> = {
    "web-saas": { bg: "bg-blue-50 text-blue-600 border border-blue-100/50", text: "text-blue-600", border: "border-blue-500", bgHover: "hover:bg-blue-50/40", gradient: "from-blue-600 to-indigo-600" },
    "mobile-apps": { bg: "bg-emerald-50 text-emerald-600 border border-emerald-100/50", text: "text-emerald-600", border: "border-emerald-500", bgHover: "hover:bg-emerald-50/40", gradient: "from-emerald-500 to-teal-600" },
    "ai-automation": { bg: "bg-purple-50 text-purple-600 border border-purple-100/50", text: "text-purple-600", border: "border-purple-500", bgHover: "hover:bg-purple-50/40", gradient: "from-purple-600 to-violet-600" },
    "custom-software": { bg: "bg-cyan-50 text-cyan-600 border border-cyan-100/50", text: "text-cyan-600", border: "border-cyan-500", bgHover: "hover:bg-cyan-50/40", gradient: "from-cyan-500 to-blue-500" },
    "ui-ux-design": { bg: "bg-rose-50 text-rose-600 border border-rose-100/50", text: "text-rose-600", border: "border-rose-500", bgHover: "hover:bg-rose-50/40", gradient: "from-rose-500 to-pink-500" },
    "cloud-devops": { bg: "bg-sky-50 text-sky-600 border border-sky-100/50", text: "text-sky-600", border: "border-sky-500", bgHover: "hover:bg-sky-50/40", gradient: "from-sky-500 to-blue-600" }
};

const serviceShortLabels: Record<string, string> = {
    "web-saas": "Next.js / SaaS API",
    "mobile-apps": "iOS & Android Apps",
    "ai-automation": "OpenAI / Agent Bots",
    "custom-software": "ERP / Scale Databases",
    "ui-ux-design": "Figma / User Journeys",
    "cloud-devops": "AWS Cloud / CI/CD Pipelines"
};

type SubTab = "benefits" | "tech" | "scenarios";
const subTabs: { id: SubTab; label: string }[] = [
    { id: "benefits", label: "benefits.json" },
    { id: "tech", label: "tech_stack.ts" },
    { id: "scenarios", label: "scenarios.md" }
];

export default function ServiceBreakdownSection() {
    const [activeService, setActiveService] = useState(0);
    const [activeSubTab, setActiveSubTab] = useState<SubTab>("benefits");
    
    const { scrollY } = useScroll();
    const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        const diff = latest - previous;
        if (Math.abs(diff) > 2) {
            setScrollDirection(diff > 0 ? "down" : "up");
        }
    });

    const headerVariants = {
        hidden: (direction: "up" | "down") => ({
            opacity: 0,
            y: direction === "down" ? 30 : -30
        }),
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" as const }
        }
    };

    const leftPaneVariants = {
        hidden: (direction: "up" | "down") => ({
            opacity: 0,
            x: -30,
            y: direction === "down" ? 30 : -30
        }),
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { type: "spring" as const, stiffness: 50, damping: 15 }
        }
    };

    const rightPaneVariants = {
        hidden: (direction: "up" | "down") => ({
            opacity: 0,
            x: 30,
            y: direction === "down" ? 30 : -30
        }),
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { type: "spring" as const, stiffness: 50, damping: 15, delay: 0.08 }
        }
    };

    const service = serviceBreakdowns[activeService];
    const ServiceIcon = service.icon;

    useEffect(() => {
        const handleLocationChange = () => {
            const params = new URLSearchParams(window.location.search);
            const serviceSlug = params.get("service");
            if (serviceSlug) {
                const idx = serviceBreakdowns.findIndex(s => s.id === serviceSlug);
                if (idx !== -1) {
                    setActiveService(idx);
                    // Smooth scroll to the breakdown section on load
                    setTimeout(() => {
                        const element = document.getElementById("service-breakdown");
                        if (element) {
                            element.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                    }, 100);
                }
            }
        };

        const handleSelectServiceEvent = (e: Event) => {
            const slug = (e as CustomEvent).detail;
            if (slug) {
                const idx = serviceBreakdowns.findIndex(s => s.id === slug);
                if (idx !== -1) {
                    setActiveService(idx);
                    setTimeout(() => {
                        const element = document.getElementById("service-breakdown");
                        if (element) {
                            element.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                    }, 50);
                }
            }
        };

        handleLocationChange();
        window.addEventListener("popstate", handleLocationChange);
        window.addEventListener("nisschay-select-service", handleSelectServiceEvent);
        return () => {
            window.removeEventListener("popstate", handleLocationChange);
            window.removeEventListener("nisschay-select-service", handleSelectServiceEvent);
        };
    }, []);

    const currentTheme = serviceOrbColors[service.id] || { orb1: "bg-blue-300/20", orb2: "bg-indigo-300/15" };
    const activeBadge = serviceBadgeColors[service.id] || { bg: "bg-blue-50 text-blue-600 border border-blue-100/50", text: "text-blue-600", border: "border-blue-500", bgHover: "hover:bg-blue-50/40", gradient: "from-blue-600 to-indigo-600" };

    const renderVisualPreview = (id: string) => {
        switch(id) {
            case "web-saas": return <WebSaaSSimulator />;
            case "mobile-apps": return <MobileAppSimulator />;
            case "ai-automation": return <AIWhatsAppSimulator />;
            case "custom-software": return <CustomSoftwareSimulator />;
            case "ui-ux-design": return <UIUXDesignSimulator />;
            case "cloud-devops": return <CloudDevOpsSimulator />;
            default: return null;
        }
    };

    return (
        <section className="relative w-full py-24 px-4 md:px-8 bg-white overflow-hidden" id="service-breakdown">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    custom={scrollDirection}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.1 }
                        }
                    }}
                    className="text-center mb-16"
                >
                    <motion.span
                        variants={headerVariants}
                        className="text-xs font-mono uppercase tracking-[0.25em] text-blue-600 block mb-4 select-none"
                    >
                        [ Technical Blueprints ]
                    </motion.span>
                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-[1.1] tracking-tight"
                        style={{
                            fontFamily: "var(--font-display)",
                        }}
                    >
                        Detailed Specifications. <br className="hidden sm:inline" />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                            Built for Impact.
                        </span>
                    </h2>
                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed font-light mt-4">
                        Select a capability below to explore target use cases, integrated toolsets, core performance benefits, and our exact engineering guarantees.
                    </p>
                </motion.div>

                {/* Dashboard Grid Container */}
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left Pane (File Explorer Navigation) */}
                    <motion.div 
                        custom={scrollDirection}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, margin: "-100px" }}
                        variants={leftPaneVariants}
                        className="lg:col-span-4"
                    >
                        {/* Desktop: Vertical Explorer List */}
                        <div className="hidden lg:block space-y-2.5 pr-2">
                            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400 pl-3 mb-3 select-none">
                                📂 Capabilities Explorer
                            </div>
                            {serviceBreakdowns.map((svc, idx) => {
                                const Icon = svc.icon;
                                const isActive = activeService === idx;
                                return (
                                    <motion.button
                                        key={idx}
                                        onClick={() => {
                                            setActiveService(idx);
                                            // Reset active subtab to benefits to keep display clean
                                            setActiveSubTab("benefits");
                                        }}
                                        className={`w-full text-left relative px-4 py-3.5 rounded-2xl transition-all flex items-center gap-3.5 z-10 border ${
                                            isActive 
                                                ? "text-white border-transparent" 
                                                : "text-gray-600 hover:text-gray-900 bg-gray-50/50 hover:bg-gray-50 border-gray-200/50 hover:border-gray-200"
                                        }`}
                                        whileTap={{ scale: 0.99 }}
                                    >
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeServiceVerticalTabPill"
                                                className={`absolute inset-0 bg-gradient-to-r ${serviceBadgeColors[svc.id]?.gradient || 'from-blue-600 to-purple-600'} rounded-2xl -z-10 shadow-lg`}
                                                transition={{ type: "spring", stiffness: 300, damping: 26 }}
                                            />
                                        )}
                                        <div className={`p-2.5 rounded-xl ${isActive ? 'bg-white/15 text-white' : 'bg-white text-gray-500 shadow-sm border border-gray-200/40'}`}>
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className={`text-sm font-bold truncate ${isActive ? 'text-white' : 'text-gray-900'}`}>{svc.title}</div>
                                            <div className={`text-[10px] truncate mt-0.5 ${isActive ? 'text-white/75 font-mono' : 'text-gray-400 font-mono'}`}>
                                                {serviceShortLabels[svc.id]}
                                            </div>
                                        </div>
                                    </motion.button>
                                );
                            })}
                        </div>

                        {/* Mobile: Horizontal Carousel Tabs */}
                        <div className="lg:hidden mb-4 overflow-x-auto pb-3 scrollbar-none flex gap-2">
                            {serviceBreakdowns.map((svc, idx) => {
                                const Icon = svc.icon;
                                const isActive = activeService === idx;
                                return (
                                    <motion.button
                                        key={idx}
                                        onClick={() => {
                                            setActiveService(idx);
                                            setActiveSubTab("benefits");
                                        }}
                                        className={`relative px-4 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 whitespace-nowrap z-10 border text-xs ${
                                            isActive 
                                                ? "text-white border-transparent" 
                                                : "text-gray-600 hover:text-gray-900 bg-gray-50/50 border-gray-200/50"
                                        }`}
                                        whileTap={{ scale: 0.97 }}
                                    >
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeServiceTabPillMobile"
                                                className={`absolute inset-0 bg-gradient-to-r ${serviceBadgeColors[svc.id]?.gradient || 'from-blue-600 to-purple-600'} rounded-xl -z-10 shadow-md`}
                                                transition={{ type: "spring", stiffness: 350, damping: 28 }}
                                            />
                                        )}
                                        <Icon className="w-4 h-4" />
                                        <span>{svc.title}</span>
                                    </motion.button>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Right Pane (Interactive IDE Window) */}
                    <motion.div 
                        custom={scrollDirection}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, margin: "-100px" }}
                        variants={rightPaneVariants}
                        className="lg:col-span-8"
                    >
                        <div className="bg-white border border-gray-200 shadow-xl rounded-3xl overflow-hidden relative z-10 flex flex-col min-h-[520px]">
                            
                            {/* Window Top Control Bar */}
                            <div className="bg-gray-50 border-b border-gray-200/80 px-4 py-2.5 flex flex-wrap gap-4 items-center justify-between">
                                {/* Window Buttons & Path Label */}
                                <div className="flex items-center gap-3">
                                    <div className="flex gap-1.5">
                                        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                                    </div>
                                    <span className="text-[10px] text-gray-400 font-mono hidden sm:inline select-none">
                                        src/services/{service.id}/
                                    </span>
                                </div>

                                {/* File Tab Selectors */}
                                <div className="flex gap-1">
                                    {subTabs.map((tab) => {
                                        const isTabActive = activeSubTab === tab.id;
                                        return (
                                            <button
                                                key={tab.id}
                                                onClick={() => setActiveSubTab(tab.id)}
                                                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                                                    isTabActive
                                                        ? "bg-white text-gray-900 border border-gray-200/60 shadow-sm font-semibold"
                                                        : "text-gray-400 hover:text-gray-700"
                                                }`}
                                            >
                                                {tab.label}
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* Status details */}
                                <div className="hidden md:flex items-center gap-1.5 text-[10px] font-mono text-gray-400 select-none">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                                    <span>TypeScript</span>
                                </div>
                            </div>

                            {/* Window Workspace Body */}
                            <div className="p-6 md:p-8 flex-1 grid lg:grid-cols-12 gap-8 bg-gray-50/15">
                                
                                {/* Info / Data Sub-pane (Left Inside) */}
                                <div className="lg:col-span-7 flex flex-col justify-between">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeSubTab}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.2 }}
                                            className="flex-1"
                                        >
                                            {/* Subtab 1: Benefits */}
                                            {activeSubTab === "benefits" && (
                                                <div className="space-y-5">
                                                    <div>
                                                        <span className="text-[10px] font-mono text-gray-400 block mb-1 select-none">
                                                            // Core business advantages & engineering benefits
                                                        </span>
                                                        <h4 className="text-lg font-bold text-gray-900 mb-4">
                                                            Key Deliverables
                                                        </h4>
                                                    </div>
                                                    <div className="space-y-3">
                                                        {service.benefits.map((benefit, idx) => (
                                                            <div 
                                                                key={idx} 
                                                                className={`flex gap-3 p-3 rounded-xl border border-gray-100 bg-white/80 shadow-sm transition-all hover:shadow-md`}
                                                            >
                                                                <div className="flex-shrink-0 mt-0.5">
                                                                    <FiCheck className={`w-4 h-4 ${activeBadge.text}`} />
                                                                </div>
                                                                <div>
                                                                    <h5 className="font-semibold text-gray-900 text-xs mb-0.5">{benefit.title}</h5>
                                                                    <p className="text-[11px] text-gray-500 leading-relaxed">{benefit.description}</p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    <div className="mt-5 pt-3 border-t border-gray-200/50">
                                                        <span className="text-[9px] font-mono uppercase tracking-widest text-gray-400 block mb-2 select-none">// Why Choose Nisschay</span>
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px] text-gray-600">
                                                            {service.whyChoose.map((reason, idx) => (
                                                                <div key={idx} className="flex gap-1.5 items-start">
                                                                    <FiArrowRight className={`w-3 h-3 flex-shrink-0 mt-0.5 ${activeBadge.text}`} />
                                                                    <span className="leading-tight">{reason}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Subtab 2: Tech Stack */}
                                            {activeSubTab === "tech" && (
                                                <div className="space-y-6">
                                                    <div>
                                                        <span className="text-[10px] font-mono text-gray-400 block mb-1 select-none">
                                                            // Technology selections tailored for scale, speed, and safety
                                                        </span>
                                                        <h4 className="text-lg font-bold text-gray-900 mb-4">
                                                            Selected Stack
                                                        </h4>
                                                        <p className="text-xs text-gray-500 leading-relaxed mb-4">
                                                            We select modern tools and frameworks to enforce reliable performance, high SEO grades, security benchmarks, and seamless developer handoff.
                                                        </p>
                                                    </div>

                                                    <div className="flex flex-wrap gap-2">
                                                        {service.technologies.map((tech, idx) => (
                                                            <motion.span 
                                                                key={idx}
                                                                initial={{ opacity: 0, scale: 0.9 }}
                                                                animate={{ opacity: 1, scale: 1 }}
                                                                transition={{ delay: idx * 0.03 }}
                                                                className="px-3 py-2 bg-white border border-gray-200/60 hover:border-gray-300 text-gray-700 rounded-xl text-xs font-semibold shadow-sm hover:shadow transition-all select-none"
                                                            >
                                                                {tech}
                                                            </motion.span>
                                                        ))}
                                                    </div>

                                                    <div className="mt-6 p-4 bg-gray-50 border border-gray-200/50 rounded-2xl">
                                                        <h5 className="text-xs font-bold text-gray-900 mb-1">Architecture Standard</h5>
                                                        <p className="text-[11px] text-gray-500 leading-relaxed">
                                                            Every stack item is configured with custom linting rules, automated build diagnostics, and modular patterns that prevent tech debt from Day 1.
                                                        </p>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Subtab 3: Scenarios */}
                                            {activeSubTab === "scenarios" && (
                                                <div className="space-y-5">
                                                    <div>
                                                        <span className="text-[10px] font-mono text-gray-400 block mb-1 select-none">
                                                            // Target project profiles & perfect fit scenarios
                                                        </span>
                                                        <h4 className="text-lg font-bold text-gray-900 mb-4">
                                                            Perfect Use Cases
                                                        </h4>
                                                    </div>
                                                    <div className="space-y-3">
                                                        {service.useCases.map((useCase, idx) => (
                                                            <div 
                                                                key={idx} 
                                                                className={`p-3.5 rounded-xl border-l-4 bg-white border border-gray-100/80 shadow-sm flex flex-col gap-1 ${activeBadge.border}`}
                                                            >
                                                                <h5 className="font-bold text-gray-900 text-xs">{useCase.scenario}</h5>
                                                                <p className="text-[11px] text-gray-500 leading-relaxed">{useCase.description}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {/* Live Visual Preview sub-pane (Right Inside) */}
                                <div className="lg:col-span-5 flex flex-col justify-center bg-gray-950/5 rounded-2xl border border-gray-200/40 p-4 min-h-[280px] lg:min-h-0 relative overflow-hidden">
                                    <div className="absolute top-3 right-3 text-[8px] font-mono uppercase text-gray-400 select-none flex items-center gap-1 z-15 bg-white/70 backdrop-blur-md px-2 py-0.5 rounded-md border border-gray-200/50">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                                        <span>LIVE WORKBENCH</span>
                                    </div>
                                    <div className="w-full flex items-center justify-center relative z-10">
                                        {renderVisualPreview(service.id)}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Discuss Under Tab Card */}
                        <div className="mt-8 text-center relative z-10">
                            <p className="text-gray-500 text-sm mb-4">
                                Ready to build with our <span className="font-semibold text-gray-900">{service.title}</span> capabilities?
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-xl hover:shadow-lg transition-all duration-300 group"
                            >
                                <span>Let's Discuss Your Project</span>
                                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
