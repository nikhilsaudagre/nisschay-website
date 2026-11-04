"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { FiCheck, FiTrendingUp, FiShield, FiZap, FiUsers } from "react-icons/fi";

const benefits = [
    {
        icon: FiTrendingUp,
        title: "Scalable Architecture",
        desc: "Built to handle 10x growth without speed degradation."
    },
    {
        icon: FiShield,
        title: "Enterprise Security",
        desc: "Bank-level encryption with strict compliance defaults."
    },
    {
        icon: FiZap,
        title: "Lightning Fast",
        desc: "Optimized for speed with sub-second response times."
    },
    {
        icon: FiUsers,
        title: "Expert Team",
        desc: "Elite engineers and designers from leading tech companies."
    }
];

const steps = [
    {
        step: "01",
        title: "Discovery & Strategy",
        desc: "We dive deep into your business needs, technical requirements, and success metrics to create a tailored roadmap."
    },
    {
        step: "02",
        title: "Agile Development",
        desc: "Work in 2-week sprints with regular staging builds. You see live, testable progress every single week."
    },
    {
        step: "03",
        title: "Quality Assurance",
        desc: "Rigorous automated test suites across devices, browsers, and edge scenarios guarantee flawless operations."
    },
    {
        step: "04",
        title: "Launch & Support",
        desc: "Zero-downtime deployment with active monitoring, performance audits, and long-term optimization."
    }
];

export default function ServiceDetailsSection() {
    const timelineRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start end", "end center"]
    });
    const scrollScaleY = useTransform(scrollYProgress, [0.1, 0.95], [0, 1]);

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
            x: -40,
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
            x: 40,
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
        <section className="relative w-full py-24 px-4 md:px-8 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
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
                    className="text-center mb-20"
                >
                    <motion.h2
                        variants={headerVariants}
                        className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] tracking-tight"
                        style={{
                            fontFamily: "var(--font-display)",
                        }}
                    >
                        <span className="text-gray-900">Why Choose </span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                            Our Services
                        </span>
                    </motion.h2>
                    <motion.p
                        variants={headerVariants}
                        className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed font-light"
                    >
                        We deliver enterprise-grade solutions with startup agility. Here's what sets us apart.
                    </motion.p>
                </motion.div>

                {/* Main Content Grid (Asymmetric Split Screen) */}
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    
                    {/* Left Pane - Floating Mockup Canvas Centerpiece */}
                    <motion.div 
                        custom={scrollDirection}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, margin: "-100px" }}
                        variants={leftColVariants}
                        className="lg:col-span-5 space-y-6 lg:sticky lg:top-28"
                    >
                        <div className="relative aspect-[4/3.2] w-full rounded-3xl overflow-hidden border border-gray-200/60 shadow-2xl bg-gray-50 group select-none">
                            <Image
                                src="/proof-agility-scale.webp"
                                alt="Agility and Scale Collage"
                                fill
                                className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/20 to-transparent pointer-events-none" />

                            {/* Floating Glassmorphic Badges */}
                            {/* Badge 1 */}
                            <motion.div
                                animate={{ y: [0, -6, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-5 left-5 px-3 py-1.5 bg-white/90 backdrop-blur-md border border-gray-200/50 rounded-xl shadow-md flex items-center gap-1.5 text-[9px] font-bold text-gray-900"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                99.9% Production Uptime
                            </motion.div>
                            
                            {/* Badge 2 */}
                            <motion.div
                                animate={{ y: [0, 6, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-8 right-5 px-3 py-1.5 bg-white/90 backdrop-blur-md border border-gray-200/50 rounded-xl shadow-md flex items-center gap-1.5 text-[9px] font-bold text-gray-900"
                            >
                                <span className="text-blue-500 font-bold text-xs">⚡</span>
                                Sub-Second Speeds
                            </motion.div>

                            {/* Badge 3 */}
                            <motion.div
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute top-1/2 -left-3 px-3 py-1.5 bg-white/90 backdrop-blur-md border border-gray-200/50 rounded-xl shadow-md flex items-center gap-1.5 text-[9px] font-bold text-gray-900"
                            >
                                <span className="text-purple-500 font-bold">🛡</span>
                                Bank-Level Security
                            </motion.div>
                        </div>

                        {/* Asymmetric caption */}
                        <div className="pl-4 border-l-2 border-blue-500">
                            <h4 className="text-sm font-bold text-gray-950">Scale & Velocity Unified</h4>
                            <p className="text-xs text-gray-500 leading-relaxed font-light mt-1">
                                We combine standard enterprise architecture with highly optimized workflows to deliver production systems without corporate bureaucracy.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Pane - Staging Timeline & Key Benefits */}
                    <motion.div 
                        custom={scrollDirection}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, margin: "-100px" }}
                        variants={rightColVariants}
                        className="lg:col-span-7 space-y-12"
                    >
                        
                        {/* Process Section */}
                        <div className="space-y-6">
                            <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight leading-none">
                                Our Approach to Excellence
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed font-light">
                                We bypass account managers and middle layers. Speak directly to the engineers executing your roadmap in structured cycles.
                            </p>

                            {/* Timeline steps */}
                            <div ref={timelineRef} className="space-y-6 relative pl-2">
                                {/* Vertical timeline connecting track */}
                                <div className="absolute top-6 bottom-6 left-6 w-[2px] bg-gray-100 -z-10" />
                                <motion.div 
                                    className="absolute top-6 bottom-6 left-6 w-[2.5px] bg-gradient-to-b from-blue-600 to-purple-600 origin-top -z-10"
                                    style={{ scaleY: scrollScaleY }}
                                />

                                {steps.map((step, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: 10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.08 }}
                                        className="flex gap-4 relative z-10"
                                    >
                                        <div className="flex-shrink-0 relative z-20">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center font-bold text-xs shadow-md">
                                                {step.step}
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-sm mb-1">{step.title}</h4>
                                            <p className="text-xs text-gray-500 leading-relaxed font-light">{step.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Core Benefits Sub-grid */}
                        <div className="pt-8 border-t border-gray-150 space-y-6">
                            <h4 className="text-lg font-bold text-gray-900 tracking-tight">
                                Built for Growth, Designed for Scale
                            </h4>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {benefits.map((benefit, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="flex gap-3 p-3.5 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-blue-50/40 transition-colors group"
                                    >
                                        <div className="flex-shrink-0">
                                            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                                <benefit.icon className="w-5 h-5" />
                                            </div>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-gray-900 text-xs mb-0.5">{benefit.title}</h5>
                                            <p className="text-[11px] text-gray-500 leading-normal font-light">{benefit.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}
