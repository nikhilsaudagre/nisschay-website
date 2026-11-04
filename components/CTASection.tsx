"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiCompass, FiCpu, FiGlobe, FiArrowRight, FiArrowUpRight, FiCheck } from "react-icons/fi";

const blueprintSteps = [
    {
        icon: FiCompass,
        title: "System Blueprinting",
        deliverable: "Figma & ERD Specifications",
        desc: "We map database entities, API structures, and high-fidelity prototypes to establish a strict technical source of truth.",
        badges: ["dbdiagram", "Figma", "Mermaid.js"]
    },
    {
        icon: FiCpu,
        title: "Iterative Sprints",
        deliverable: "Weekly Staging Releases",
        desc: "Deploying production-ready iterations every 5 days, backed by weekly UAT review demos and immediate feedback loops.",
        badges: ["Next.js", "TypeScript", "Cypress"]
    },
    {
        icon: FiGlobe,
        title: "Edge Optimization",
        deliverable: "Uptime & Performance SLA",
        desc: "Configuring dockerized servers, failover backups, and global caching to guarantee sub-second load latencies.",
        badges: ["Docker", "Cloudflare", "Datadog"]
    }
];

export default function CTASection() {
    return (
        <section 
            className="relative w-full py-24 md:py-32 px-4 bg-white"
        >
            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative bg-white border border-blue-100 rounded-[2.5rem] p-8 sm:p-12 md:p-16 shadow-md overflow-hidden"
                >
                    {/* Soft light-blue radial glow circles */}
                    <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-blue-400/8 blur-[80px] pointer-events-none animate-pulse" style={{ animationDuration: '6s' }} />
                    <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-sky-400/8 blur-[80px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />

                    {/* CAD workspace corner coordinate markings */}
                    <div className="absolute top-4 left-5 text-[8px] sm:text-[9px] font-mono text-blue-400/70 select-none uppercase tracking-wider">
                        SYS.LOC // 45.92.81
                    </div>
                    <div className="absolute top-4 right-5 text-[8px] sm:text-[9px] font-mono text-blue-400/70 select-none uppercase tracking-wider">
                        COORD_X // 1024
                    </div>
                    <div className="absolute bottom-4 left-5 text-[8px] sm:text-[9px] font-mono text-blue-400/70 select-none uppercase tracking-wider hidden sm:block">
                        NISSCHAY_ENGINEERING
                    </div>
                    <div className="absolute bottom-4 right-5 text-[8px] sm:text-[9px] font-mono text-blue-400/70 select-none uppercase tracking-wider hidden sm:block">
                        SCALE // 1.0
                    </div>



                    <div className="relative z-10 text-center max-w-2xl mx-auto mb-12 sm:mb-16 mt-4">
                        {/* Blueprint tag */}
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-blue-600 bg-blue-50/80 border border-blue-100 px-3.5 py-1.5 rounded-full select-none">
                            [ System Blueprint ]
                        </span>

                        {/* Title */}
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.15] mb-6 mt-6 font-display">
                            From Blueprint to <br className="hidden sm:inline" />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 font-black">
                                Scaled Reality.
                            </span>
                        </h2>

                        {/* Subtitle */}
                        <p className="text-sm md:text-base text-slate-500 leading-relaxed font-light">
                            A structured, transparent engineering lifecycle designed to launch scalable software with zero execution waste. Let&apos;s map your technical specifications.
                        </p>
                    </div>

                    {/* Blueprint Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 relative z-10">
                        {blueprintSteps.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={idx}
                                    className="group relative flex flex-col p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:bg-blue-50/5 hover:shadow-md transition-all duration-300 overflow-hidden"
                                >


                                    <div className="relative z-10 flex items-center gap-3 mb-4 mt-2">
                                        <div className="p-2 bg-blue-50 border border-blue-100 rounded-lg text-blue-600 flex-shrink-0">
                                            <Icon className="text-base" />
                                        </div>
                                        <h3 className="font-bold text-gray-900 text-sm tracking-tight">
                                            {item.title}
                                        </h3>
                                    </div>

                                    {/* Commitments check label */}
                                    <div className="relative z-10 flex items-center gap-2 text-[10px] font-mono font-bold text-blue-600 uppercase mb-2">
                                        <FiCheck className="w-3.5 h-3.5 text-blue-500" />
                                        <span>{item.deliverable}</span>
                                    </div>

                                    <p className="relative z-10 text-[11px] md:text-xs text-slate-500 leading-relaxed font-light flex-1 mb-4">
                                        {item.desc}
                                    </p>

                                    {/* Badges footer (themed in light blue) */}
                                    <div className="relative z-10 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                                        {item.badges.map((badge, bIdx) => (
                                            <span
                                                key={bIdx}
                                                className="text-[9px] font-mono text-blue-600 bg-blue-50/40 border border-blue-100/30 px-2 py-0.5 rounded select-none"
                                            >
                                                {badge}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Dual Action CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="w-full sm:w-auto"
                        >
                            <Link
                                href="/contact"
                                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#0057fe] text-white font-semibold rounded-full text-base shadow-sm hover:shadow-md hover:bg-[#0047d6] transition-all duration-300 no-underline"
                            >
                                <span>Book Free Consultation</span>
                                <FiArrowRight className="group-hover:translate-x-1.5 transition-transform" />
                            </Link>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="w-full sm:w-auto"
                        >
                            <Link
                                href="/services"
                                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white border border-blue-200 text-blue-600 font-semibold rounded-full text-base hover:bg-blue-50/50 hover:border-blue-300 transition-all duration-300 no-underline"
                            >
                                <span>Our Services</span>
                                <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
