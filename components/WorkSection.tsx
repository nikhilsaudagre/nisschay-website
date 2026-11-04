"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";

interface Project {
    id: number;
    title: string;
    category: string;
    filterCategory: "saas" | "ai" | "fintech";
    description: string;
    image: string;
    color: string;
    span: string;
    tech: string[];
    details: {
        challenge: string;
        solution: string;
        impact: string[];
    };
}

const projects: Project[] = [
    {
        id: 1,
        title: "ArtistsLand",
        category: "Web3 Talent Directory",
        filterCategory: "saas",
        description: "A high-performance marketplace connecting creative talent with global projects, featuring decentralized escrow agreements.",
        image: "/assets/projects/artistsland.webp",
        color: "from-pink-500 to-rose-500",
        span: "col-span-1",
        tech: ["Next.js", "Solidity", "Tailwind CSS", "IPFS", "Framer Motion"],
        details: {
            challenge: "Traditional creator networks struggle with slow onboarding, high international transaction fees, and lack of verified proof of work, limiting cross-border creative agreements.",
            solution: "Built a server-side rendered (SSR) directory utilizing decentralized identity logs and automated smart templates for scoping talent contracts with minimal transaction overhead.",
            impact: [
                "Onboarded 12,000+ creators globally in the first 45 days.",
                "Reduced contract scoping and checkout processing fees by 70%.",
                "Maintained sub-200ms page response times using Edge-cached ISR routes."
            ]
        }
    },
    {
        id: 2,
        title: "Helper AI",
        category: "Agentic Workspace CRM",
        filterCategory: "ai",
        description: "Conversational workplace CRM and booking scheduler running autonomous LangChain pipelines and WhatsApp triggers.",
        image: "/assets/projects/helper.webp",
        color: "from-blue-400 to-indigo-500",
        span: "col-span-1",
        tech: ["FastAPI", "Python", "LangChain", "OpenAI API", "WhatsApp API"],
        details: {
            challenge: "Physical workspaces and medical providers lose up to 25% of potential client bookings due to friction-heavy scheduling forms and delayed response times.",
            solution: "Deployed a production-grade conversational AI agent running LangChain. The bot handles natural language booking requests over WhatsApp, checking calendar databases and scheduling clients dynamically.",
            impact: [
                "Processed over 8,500 monthly calendar bookings automatically.",
                "Lowered operational customer support costs by 45%.",
                "Maintained scheduling calendar conflicts at 0% error tolerances."
            ]
        }
    },
    {
        id: 3,
        title: "PickMe",
        category: "Local Discovery Finder",
        filterCategory: "ai",
        description: "Hyper-local search directory utilizing vector embedding search indexes for semantic contextual queries.",
        image: "/assets/projects/pickme.webp",
        color: "from-teal-400 to-emerald-500",
        span: "col-span-1",
        tech: ["React", "Node.js", "Pinecone DB", "OpenAI Embeddings", "PostgreSQL"],
        details: {
            challenge: "Static directory searches require users to input exact keywords and filter parameters, yielding high drop-offs and poor discovery patterns.",
            solution: "Programmed a semantic search engine matching user query intents with merchant descriptions based on vector distance math, rendering sub-100ms response maps.",
            impact: [
                "Reduced local search bounce rates by 35% within two weeks.",
                "Boosted merchant click-through rates by 42%.",
                "Indexed over 15,000 regional merchant listings dynamically."
            ]
        }
    },
    {
        id: 4,
        title: "Nono Analytics",
        category: "Growth & Marketing Tech",
        filterCategory: "saas",
        description: "Asynchronous webhook ingestion queue and analytics system measuring real-time ad pixel triggers.",
        image: "/assets/projects/nono.webp",
        color: "from-orange-500 to-red-600",
        span: "col-span-1",
        tech: ["Next.js", "Go", "Redis", "Kafka", "ClickHouse"],
        details: {
            challenge: "Marketing agencies suffer from delayed conversion tracking due to slow write database speeds on tracking pixels during high-volume campaigns.",
            solution: "Designed a high-throughput ingestion pipeline in Go. Webhook payloads are pushed to Kafka buffers, stored in Redis caches, and aggregated inside a ClickHouse analytics database.",
            impact: [
                "Ingests and processes 2.5 million analytics pixels daily.",
                "Achieved sub-10ms query speeds on live tracking dashboards.",
                "Maintained 99.999% database uptime during scale campaigns."
            ]
        }
    },
    {
        id: 5,
        title: "Nexus Ledger",
        category: "FinTech Transaction SaaS",
        filterCategory: "fintech",
        description: "Double-entry cryptographic ledger platform ensuring ledger integrity for multi-tenant SaaS platforms.",
        image: "/assets/projects/nexus.webp",
        color: "from-purple-500 to-indigo-600",
        span: "col-span-1 md:col-span-2",
        tech: ["TypeScript", "PostgreSQL", "AWS KMS", "Docker", "Stripe API"],
        details: {
            challenge: "High-volume SaaS marketplaces suffer database desyncs on transactional microservices, causing financial reconciliation errors and audit failures.",
            solution: "Architected a double-entry transactional ledger with database locks and immutable audit logs, utilizing AWS Key Management Service (KMS) for data encryption.",
            impact: [
                "Secures and audits $12M+ in monthly transactional volume.",
                "Zero reconciliation discrepancies detected since inception.",
                "Obtained complete SOC2 compliance validation readiness."
            ]
        }
    }
];

export default function WorkSection() {
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
            transition: { duration: 0.6, ease: "easeOut" }
        }
    } as const;

    const cardVariants = {
        hidden: (direction: "up" | "down") => ({
            opacity: 0,
            y: direction === "down" ? 50 : -50,
            scale: 0.96
        }),
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 55,
                damping: 14
            }
        }
    } as const;

    return (
        <section id="portfolio" className="relative py-24 md:py-32 px-4 overflow-hidden bg-white">
            {/* Solid white background */}
            <div className="absolute inset-0 bg-white z-0" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="mb-16 md:mb-20">
                    <motion.span
                        className="inline-block py-1.5 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-mono uppercase tracking-widest mb-4 select-none"
                        custom={scrollDirection}
                        initial="hidden"
                        whileInView="visible"
                        variants={headerVariants}
                        viewport={{ once: false, margin: "-100px" }}
                    >
                        [ Selected Work ]
                    </motion.span>
                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-none tracking-tight"
                        style={{ fontFamily: "var(--font-display)" }}
                        custom={scrollDirection}
                        initial="hidden"
                        whileInView="visible"
                        variants={headerVariants}
                        viewport={{ once: false, margin: "-100px" }}
                    >
                        Real Concepts. <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                            Engineered for Scale.
                        </span>
                    </motion.h2>
                    <motion.p
                        className="text-lg md:text-xl text-gray-500 max-w-xl leading-relaxed font-light"
                        custom={scrollDirection}
                        initial="hidden"
                        whileInView="visible"
                        variants={headerVariants}
                        viewport={{ once: false, margin: "-100px" }}
                    >
                        Demonstrating engineering precision across SaaS platforms, natural-language AI structures, and secure transactional ledgers.
                    </motion.p>
                </div>

                {/* Grid Layout - Balanced 2-Column Grid */}
                <div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            custom={scrollDirection}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.08 }}
                            className={`group relative rounded-[2rem] overflow-hidden ${project.span} h-[380px] md:h-[420px] border border-gray-150 shadow-sm bg-white hover:border-blue-500/40 hover:shadow-lg transition-all duration-500`}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 w-full h-full">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-103"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent opacity-85 group-hover:opacity-75 transition-opacity duration-500 z-10" />
                            </div>

                            {/* Floating Content (Inside Image Viewport) */}
                            <div className="absolute inset-0 p-6 z-20 flex flex-col justify-end pointer-events-none">
                                {/* Tech Badges */}
                                <div className="flex flex-wrap gap-1.5 mb-3 opacity-90">
                                    {project.tech.slice(0, 3).map((t, idx) => (
                                        <span 
                                            key={idx} 
                                            className="px-2 py-0.5 rounded-md bg-white/10 backdrop-blur-md border border-white/10 text-[9px] font-mono font-bold text-white select-none"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                    {project.tech.length > 3 && (
                                        <span className="px-2 py-0.5 rounded-md bg-white/10 backdrop-blur-md border border-white/10 text-[9px] font-mono font-bold text-white select-none">
                                            +{project.tech.length - 3}
                                        </span>
                                    )}
                                </div>

                                {/* Category Label */}
                                <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-blue-400 mb-1 select-none">
                                    {project.category}
                                </span>

                                {/* Project Title */}
                                <h3 className="text-2xl font-black text-white tracking-tight leading-none mb-2 select-none">
                                    {project.title}
                                </h3>

                                {/* Short Description */}
                                <p className="text-xs text-white/70 font-light leading-relaxed mb-4 line-clamp-2 max-w-md select-none">
                                    {project.description}
                                </p>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
