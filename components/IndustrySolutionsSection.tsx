"use client";

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import { 
    FiCreditCard, FiTruck, FiDatabase, 
    FiCpu, FiHeart 
} from "react-icons/fi";

const industries = [
    {
        id: "fintech",
        title: "FinTech & Payments",
        icon: FiCreditCard,
        subtitle: "99.99% Secure Transactions",
        description: "We engineer highly secure, low-latency financial systems and checkout gateways tailored for high-volume transactions and absolute ledger integrity.",
        features: [
            "Double-entry ledger database architectures for consistency.",
            "Secure webhook listeners for Razorpay, Stripe, and Cashfree APIs.",
            "Custom subscription logic and usage-based automated billing.",
            "Compliance-ready designs (PCI DSS guidelines, data masking, encryption)."
        ],
        technologies: ["Next.js", "PostgreSQL", "Node.js", "AWS KMS", "Stripe API", "Redis"],
        image: "/proof-launches.webp"
    },
    {
        id: "logistics",
        title: "Logistics & ERPs",
        icon: FiTruck,
        subtitle: "Real-Time Tracking & Sync",
        description: "We build custom internal operation portals and ERP software to automate inventory tracking, warehouse management, and delivery schedules.",
        features: [
            "Real-time dispatch schedules and dynamic tracking dashboards.",
            "Automated receipt generation and digital document audit trails.",
            "Offline-first local caching databases with automated cloud sync.",
            "Multi-location inventory aggregators with analytical reporting."
        ],
        technologies: ["React", "Django", "PostgreSQL", "Google Maps API", "Docker", "RabbitMQ"],
        image: "/proof-agility-scale.webp"
    },
    {
        id: "saas",
        title: "B2B SaaS Platforms",
        icon: FiDatabase,
        subtitle: "Multi-Tenant Scalability",
        description: "We program multi-tenant SaaS products designed to onboard users quickly, convert visitors, and scale infrastructures globally.",
        features: [
            "Robust multi-tenant data isolation and role-based access control (RBAC).",
            "Interactive customer onboarding wizards and feature dashboards.",
            "CI/CD build pipelines deploying updates automatically to staging.",
            "Optimized SEO-ready semantic HTML grids and server-side rendering (SSR)."
        ],
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Auth0 / Clerk", "GitHub Actions"],
        image: "/bento-mobile.webp"
    },
    {
        id: "ai",
        title: "AI Startups & Automation",
        icon: FiCpu,
        subtitle: "Agentic Workflows",
        description: "We deploy state-of-the-art generative AI models and automation chains directly into customer pipelines to lower support overhead.",
        features: [
            "Intelligent WhatsApp customer support bots answering 60%+ of queries.",
            "LangChain and Python agent pipelines fine-tuned on internal wikis.",
            "Workflow triggers connecting CRMs, Gmail, Slack, and spreadsheets.",
            "Vector database setups (Pinecone/ChromaDB) for context-rich search."
        ],
        technologies: ["OpenAI API", "Claude / Anthropic", "Python", "FastAPI", "Pinecone", "WhatsApp API"],
        image: "/bento-ai.webp"
    },
    {
        id: "healthcare",
        title: "Healthcare Tech",
        icon: FiHeart,
        subtitle: "Compliance & Patient Portals",
        description: "We design and build secure, compliant health portals, booking modules, and patient record management dashboards.",
        features: [
            "Secure doctor-patient consultation scheduling and video portals.",
            "GDPR and HIPAA compliance guidelines (data encryption at rest and in transit).",
            "Real-time notification alerts via SMS, WhatsApp, and Email.",
            "Headless CMS integration (Sanity/Strapi) for public health blogs."
        ],
        technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS KMS", "WebRTC"],
        image: "/bento-uiux.webp"
    }
];

export default function IndustrySolutionsSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeInd = industries[activeIndex];

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

    const leftColVariants = {
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

    const rightColVariants = {
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

    return (
        <section className="relative w-full py-24 px-4 md:px-8 bg-white overflow-hidden border-b border-slate-100">
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
                    className="text-center mb-16 space-y-3"
                >
                    <motion.span
                        variants={headerVariants}
                        className="text-xs font-mono uppercase tracking-[0.25em] text-blue-600 block mb-2 select-none"
                    >
                        [ Target Verticals ]
                    </motion.span>
                    <motion.h2
                        variants={headerVariants}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.1]"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        Tailored Industry Solutions. <br className="hidden sm:inline" />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                            Engineered for Impact.
                        </span>
                    </motion.h2>
                    <motion.p
                        variants={headerVariants}
                        className="max-w-3xl mx-auto text-lg md:text-xl text-gray-500 leading-relaxed font-light"
                    >
                        We configure custom technology architectures specifically designed to solve the operational bottlenecks and compliance demands of your sector.
                    </motion.p>
                </motion.div>

                {/* Dashboard Grid Container */}
                <div className="grid lg:grid-cols-12 gap-8 items-stretch">
                    
                    {/* Left Pane (Industry Selection List) */}
                    <motion.div 
                        custom={scrollDirection}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, margin: "-100px" }}
                        variants={leftColVariants}
                        className="lg:col-span-4 flex flex-col gap-3 justify-center"
                    >
                        <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400 pl-3 mb-1 select-none">
                            📂 Target Industries
                        </div>
                        {industries.map((ind, idx) => {
                            const Icon = ind.icon;
                            const isActive = activeIndex === idx;
                            return (
                                <motion.button
                                    key={ind.id}
                                    onClick={() => setActiveIndex(idx)}
                                    className={`w-full text-left relative p-4 rounded-2xl transition-all flex items-center gap-3.5 z-10 border ${
                                        isActive 
                                            ? "text-white border-transparent" 
                                            : "text-gray-600 hover:text-gray-900 bg-white hover:bg-gray-50 border-gray-150 hover:border-gray-200"
                                    }`}
                                    whileTap={{ scale: 0.99 }}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeIndustrySolutionTab"
                                            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl -z-10 shadow-lg"
                                            transition={{ type: "spring", stiffness: 300, damping: 26 }}
                                        />
                                    )}
                                    <div className={`p-2.5 rounded-xl ${isActive ? 'bg-white/15 text-white' : 'bg-blue-50/70 text-blue-600 border border-blue-100/30'}`}>
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className={`text-sm font-bold truncate ${isActive ? 'text-white' : 'text-gray-900'}`}>
                                            {ind.title}
                                        </h3>
                                        <div className={`text-[9px] font-mono mt-0.5 truncate ${isActive ? 'text-white/75' : 'text-gray-400'}`}>
                                            {ind.subtitle}
                                        </div>
                                    </div>
                                </motion.button>
                            );
                        })}
                    </motion.div>

                    {/* Right Pane (Industry Specifications Dashboard) */}
                    <motion.div 
                        custom={scrollDirection}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, margin: "-100px" }}
                        variants={rightColVariants}
                        className="lg:col-span-8"
                    >
                        <div className="bg-white border border-gray-200 shadow-xl rounded-3xl overflow-hidden relative z-10 flex flex-col min-h-[460px]">
                            
                            {/* Window Top Control Bar */}
                            <div className="bg-gray-50 border-b border-gray-200/80 px-4 py-2.5 flex items-center justify-between select-none">
                                <div className="flex items-center gap-3">
                                    <div className="flex gap-1.5">
                                        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                                    </div>
                                    <span className="text-[10px] text-gray-400 font-mono hidden sm:inline pl-2">
                                        src/industries/{activeInd.id}_spec.json
                                    </span>
                                </div>
                                <span className="text-[10px] font-mono text-gray-400">Industry Config</span>
                            </div>

                            {/* Window Workspace Body */}
                            <div className="p-6 md:p-8 flex-1 grid md:grid-cols-12 gap-8 bg-gray-50/15">
                                
                                {/* Info / Checklist Column */}
                                <div className="md:col-span-7 flex flex-col justify-between">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeIndex}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.2 }}
                                            className="space-y-5 flex-1"
                                        >
                                            <div>
                                                <span className="text-[10px] font-mono text-gray-400 block mb-1">
                                                    // Scoped architecture solutions
                                                </span>
                                                <h4 className="text-lg font-bold text-gray-900">
                                                    {activeInd.title}
                                                </h4>
                                                <p className="text-xs text-gray-550 leading-relaxed font-light mt-1.5">
                                                    {activeInd.description}
                                                </p>
                                            </div>

                                            {/* Feature Checklist */}
                                            <div className="space-y-2.5">
                                                {activeInd.features.map((feat, fIdx) => (
                                                    <div key={fIdx} className="flex gap-2.5 items-start">
                                                        <FiCheck className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                                        <span className="text-xs text-gray-600 leading-normal font-light">{feat}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Tech Stack pills */}
                                            <div className="pt-4 border-t border-gray-200/50">
                                                <span className="text-[9px] font-mono uppercase tracking-widest text-gray-400 block mb-2 select-none">
                                                    // Core Stack Configuration
                                                </span>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {activeInd.technologies.map((tech, tIdx) => (
                                                        <span key={tIdx} className="px-2.5 py-1 bg-white border border-gray-200 text-gray-700 rounded-lg text-[10px] font-semibold shadow-sm select-none">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {/* Mockup Image Column */}
                                <div className="md:col-span-5 flex flex-col justify-center bg-gray-950/5 rounded-2xl border border-gray-200/40 p-3 relative overflow-hidden min-h-[220px] md:min-h-0 select-none">
                                    <div className="absolute top-2.5 right-2.5 text-[8px] font-mono uppercase text-gray-450 z-20 bg-white/70 backdrop-blur-md px-1.5 py-0.5 rounded border border-gray-200/30">
                                        Active UI Mockup
                                    </div>
                                    <div className="relative w-full h-full min-h-[160px] md:min-h-0 rounded-xl overflow-hidden border border-gray-200/40 shadow-sm bg-gray-50 flex items-center justify-center">
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={activeIndex}
                                                initial={{ opacity: 0, scale: 0.98 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.98 }}
                                                transition={{ duration: 0.25 }}
                                                className="absolute inset-0 w-full h-full"
                                            >
                                                <Image
                                                    src={activeInd.image}
                                                    alt={activeInd.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/20 to-transparent" />
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
