"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    FiCheckCircle,
    FiCompass,
    FiCpu,
    FiGitMerge,
    FiLayers,
    FiGlobe,
    FiShield,
    FiArrowRight,
    FiCheck
} from "react-icons/fi";

const steps = [
    {
        number: "01",
        phase: "Define",
        phaseColor: "text-emerald-600 bg-emerald-50 border-emerald-100",
        title: "Scoping & Alignment",
        desc: "We conduct deep scoping audits to align product goals, map business logic parameters, and define performance benchmarks.",
        icon: FiCheckCircle,
        deliverables: [
            "Product Spec Document (PRD)",
            "Business Logic Map",
            "Milestone Timeline & Scope"
        ],
        tooling: ["Miro", "Jira Discovery"]
    },
    {
        number: "02",
        phase: "Define",
        phaseColor: "text-emerald-600 bg-emerald-50 border-emerald-100",
        title: "Architectural Blueprinting",
        desc: "Designing high-fidelity Figma prototypes alongside system architecture schemas and secure database models.",
        icon: FiCompass,
        deliverables: [
            "Figma UX/UI Prototypes",
            "Entity Diagrams (ERD)",
            "API Schema Specifications"
        ],
        tooling: ["Figma", "dbdiagram.io"]
    },
    {
        number: "03",
        phase: "Build",
        phaseColor: "text-blue-600 bg-blue-50 border-blue-100",
        title: "Agile Sprints",
        desc: "Iterative coding sprints coupled with weekly staging demos, keeping engineering transparent and feedback loops immediate.",
        icon: FiCpu,
        deliverables: [
            "Feature Iteration Drops",
            "Staging URLs Access",
            "Dev Progress Dashboard"
        ],
        tooling: ["Next.js", "TypeScript"]
    },
    {
        number: "04",
        phase: "Build",
        phaseColor: "text-blue-600 bg-blue-50 border-blue-100",
        title: "Quality & Optimization",
        desc: "Conducting rigorous unit checks, end-to-end integration audits, and visual polishing to refine every interface interaction.",
        icon: FiGitMerge,
        deliverables: [
            "Jest & E2E Code Coverage",
            "Lighthouse Speed Audits",
            "Cross-Device Verification"
        ],
        tooling: ["Jest", "Lighthouse"]
    },
    {
        number: "05",
        phase: "Build",
        phaseColor: "text-blue-600 bg-blue-50 border-blue-100",
        title: "Staging & Sign-off",
        desc: "Subjecting the product to final end-to-end load tests and diagnostic checks prior to client verification.",
        icon: FiLayers,
        deliverables: [
            "User Acceptance Testing (UAT)",
            "System Compliance Audit",
            "Pre-Launch Config Check"
        ],
        tooling: ["Cypress", "SonarQube"]
    },
    {
        number: "06",
        phase: "Scale",
        phaseColor: "text-purple-600 bg-purple-50 border-purple-100",
        title: "Orchestration & Launch",
        desc: "Executing global edge deployments with zero-downtime container overrides and active traffic performance monitoring.",
        icon: FiGlobe,
        deliverables: [
            "Zero-Downtime Release",
            "SSL & DNS Configuration",
            "Edge Cache Diagnostics"
        ],
        tooling: ["Docker", "Cloudflare"]
    },
    {
        number: "07",
        phase: "Scale",
        phaseColor: "text-purple-600 bg-purple-50 border-purple-100",
        title: "Maintenance & Scale",
        desc: "Ongoing infrastructure checks, database optimization, and security patches to ensure stability as your platform scales.",
        icon: FiShield,
        deliverables: [
            "24/7 Uptime Monitoring",
            "Database Query Tuning",
            "Security Updates & Patches"
        ],
        tooling: ["Prometheus", "Datadog"]
    }
];

export default function ProcessSection() {
    return (
        <section
            className="relative w-full py-20 md:py-28 px-4 sm:px-6 bg-white"
            id="process"
        >
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    
                    {/* Left Sticky Header Panel */}
                    <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col items-start text-left">
                        <motion.span
                            className="text-xs font-mono uppercase tracking-[0.25em] text-blue-600 bg-blue-50 px-4 py-2 rounded-full select-none"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            [ Delivery Process ]
                        </motion.span>
                        
                        <motion.h2
                            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.15] mb-6 mt-4 font-display"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Bespoke Execution. <br className="hidden sm:inline" />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 font-black">
                                Built for Velocity.
                            </span>
                        </motion.h2>

                        <motion.p
                            className="text-base text-gray-500 leading-relaxed font-light mb-8 max-w-lg"
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            We align custom architecture, agile development cycles, and strict security compliance to transform complex concepts into battle-tested products.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="hidden lg:block"
                        >
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
                            >
                                <span>Start Project</span>
                                <FiArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Timeline Panel */}
                    <div className="lg:col-span-7 relative pl-8 sm:pl-12">
                        
                        {/* Vertical timeline connector track */}
                        <div className="absolute left-[11px] sm:left-[15px] top-4 bottom-4 w-[2px] bg-slate-100 z-0" />

                        <div className="space-y-10">
                            {steps.map((step, idx) => {
                                const StepIcon = step.icon;
                                return (
                                    <motion.div
                                        key={idx}
                                        className="group relative flex flex-col items-start gap-1"
                                        initial={{ opacity: 0, y: 25 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.5, delay: idx * 0.05 }}
                                    >
                                        {/* Connector Node */}
                                        <div className="absolute -left-[29px] sm:-left-[39px] top-2 w-6 h-6 sm:w-[26px] sm:h-[26px] rounded-full border-2 border-white bg-slate-100 text-slate-500 font-mono text-[10px] font-bold flex items-center justify-center transition-all duration-300 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white group-hover:shadow-[0_0_8px_rgba(37,99,235,0.4)] z-10 select-none">
                                            {step.number}
                                        </div>

                                        {/* Step Info Card */}
                                        <div className="w-full bg-slate-50/25 border border-slate-100/70 rounded-2xl p-6 transition-all duration-300 hover:border-slate-200/80 hover:bg-slate-50/50 hover:shadow-sm">
                                            <div className="flex items-center gap-3">
                                                <span className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${step.phaseColor}`}>
                                                    {step.phase}
                                                </span>
                                                <div className="text-slate-400 font-mono text-[10px]">
                                                    Step {step.number}
                                                </div>
                                            </div>

                                            <h3 className="text-lg font-bold text-gray-900 mt-2.5 mb-1.5 flex items-center gap-2 font-display">
                                                <StepIcon className="w-4.5 h-4.5 text-slate-700" />
                                                <span>{step.title}</span>
                                            </h3>

                                            <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light">
                                                {step.desc}
                                            </p>

                                            {/* Checklist Deliverables */}
                                            <div className="mt-4 pt-4 border-t border-slate-100/60">
                                                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                                                    Key Deliverables:
                                                </div>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                    {step.deliverables.map((item, dIdx) => (
                                                        <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-600">
                                                            <FiCheck className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                                                            <span className="font-light">{item}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Tool badges */}
                                            <div className="mt-4 pt-3 border-t border-slate-100/40 flex flex-wrap items-center gap-1.5">
                                                <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400 mr-1 select-none">
                                                    Tooling:
                                                </span>
                                                {step.tooling.map((tool, tIdx) => (
                                                    <span
                                                        key={tIdx}
                                                        className="text-[9px] font-mono text-slate-500 bg-slate-100 border border-slate-200/50 px-2 py-0.5 rounded select-none"
                                                    >
                                                        {tool}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="mt-6 text-center lg:hidden">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                            <span>Start Project</span>
                            <FiArrowRight className="w-5 h-5" />
                        </Link>
                    </div>

                </div>
            </div>
        </section >
    );
}
