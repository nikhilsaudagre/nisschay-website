"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    FiMonitor, FiSmartphone, FiCpu, FiCode,
    FiLayout, FiCloud, FiHeadphones,
    FiZap, FiLock, FiCheckCircle, FiRefreshCw
} from "react-icons/fi";

const services = [
    { icon: FiMonitor,     label: "Web & SaaS Development",        color: "blue" },
    { icon: FiSmartphone,  label: "Mobile App Development",         color: "emerald" },
    { icon: FiCpu,         label: "AI Integration & Automation",    color: "purple" },
    { icon: FiCode,        label: "Custom Software Development",     color: "cyan" },
    { icon: FiLayout,      label: "UI/UX & Product Design",         color: "rose" },
    { icon: FiCloud,       label: "Cloud & DevOps Services",        color: "sky" },
    { icon: FiHeadphones,  label: "IT Consulting",                  color: "amber" },
];

const colorMap: Record<string, string> = {
    blue:    "bg-blue-50    border-blue-200/70   text-blue-700   hover:bg-blue-100/60",
    emerald: "bg-emerald-50 border-emerald-200/70 text-emerald-700 hover:bg-emerald-100/60",
    purple:  "bg-purple-50  border-purple-200/70  text-purple-700  hover:bg-purple-100/60",
    cyan:    "bg-cyan-50    border-cyan-200/70   text-cyan-700   hover:bg-cyan-100/60",
    rose:    "bg-rose-50    border-rose-200/70   text-rose-700   hover:bg-rose-100/60",
    sky:     "bg-sky-50     border-sky-200/70    text-sky-700    hover:bg-sky-100/60",
    amber:   "bg-amber-50   border-amber-200/70  text-amber-700  hover:bg-amber-100/60",
};

const iconColorMap: Record<string, string> = {
    blue:    "text-blue-500",
    emerald: "text-emerald-500",
    purple:  "text-purple-500",
    cyan:    "text-cyan-500",
    rose:    "text-rose-500",
    sky:     "text-sky-500",
    amber:   "text-amber-500",
};

const trustBadges = [
    { icon: FiZap,         label: "Blueprint in 4 Hours",       sub: "Delivered same day"           },
    { icon: FiLock,        label: "NDA Pre-Signed",              sub: "Before we hear a word"        },
    { icon: FiCheckCircle, label: "Free First Session",          sub: "Zero obligation"              },
    { icon: FiRefreshCw,   label: "Biweekly Live Deliveries",    sub: "Staging releases every 2 wks" },
];

const stats = [
    { value: "25+",  label: "Live Platforms Deployed",     sub: "From MVP to enterprise scale" },
    { value: "4hr",  label: "Average First Response",      sub: "Faster than your inbox" },
    { value: "98%",  label: "Return for Phase 2",          sub: "Clients come back for more" },
];

export default function ContactHeroSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    });

    const yContent = useTransform(scrollYProgress, [0, 1], [0, 80]);
    const opacityContent = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scaleContent = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);

    return (
        <section ref={sectionRef} className="relative py-16 md:py-24 px-4 overflow-hidden bg-white border-b border-slate-100">

            {/* Subtle ambient light — top center glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-b from-blue-100/20 via-indigo-50/10 to-transparent rounded-full blur-[100px] pointer-events-none" />

            {/* Faint dot grid — matches CTASection */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: "radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)",
                    backgroundSize: "28px 28px"
                }}
            />

            <motion.div 
                style={{ y: yContent, opacity: opacityContent, scale: scaleContent }}
                className="max-w-5xl mx-auto text-center relative z-10"
            >

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block text-[10px] font-mono uppercase tracking-[0.25em] text-blue-600 bg-blue-50/80 border border-blue-100 px-3.5 py-1.5 rounded-full select-none mb-6">
                        [ Let's Get Specific ]
                    </span>
                </motion.div>

                {/* H1 */}
                <motion.h1
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.08 }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.12] mb-5"
                    style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
                >
                    Tell Us What You're Building.{" "}
                    <br className="hidden sm:inline" />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                        We'll Tell You How.
                    </span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed font-light mb-10"
                >
                    Whether it's a SaaS product, mobile app, or AI workflow — describe it in plain English.
                    We'll map the full technical architecture and send you a{" "}
                    <span className="font-semibold text-slate-700">free blueprint within 4 hours.</span>
                </motion.p>

                {/* Service Pills Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.22 }}
                    className="flex flex-wrap justify-center gap-2.5 mb-12"
                >
                    {services.map((svc, idx) => {
                        const Icon = svc.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.25 + idx * 0.05 }}
                                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-semibold transition-all duration-200 cursor-default select-none ${colorMap[svc.color]}`}
                            >
                                <Icon className={`w-3.5 h-3.5 ${iconColorMap[svc.color]}`} />
                                <span>{svc.label}</span>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Trust Badges — 4 column strip */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.32 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mb-12"
                >
                    {trustBadges.map((badge, idx) => {
                        const Icon = badge.icon;
                        return (
                            <div
                                key={idx}
                                className="flex flex-col items-center gap-1.5 px-4 py-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-200"
                            >
                                <Icon className="w-4 h-4 text-blue-500" />
                                <span className="text-xs font-semibold text-slate-800 text-center leading-tight">{badge.label}</span>
                                <span className="text-[10px] font-mono text-slate-400 text-center leading-tight">{badge.sub}</span>
                            </div>
                        );
                    })}
                </motion.div>

                {/* Stats Row — with dividers */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex justify-center items-stretch divide-x divide-slate-200 max-w-2xl mx-auto"
                >
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex-1 text-center px-6 py-2">
                            <div
                                className="text-3xl md:text-4xl font-black text-gray-900 mb-0.5"
                                style={{ fontFamily: "var(--font-display)" }}
                            >
                                {stat.value}
                            </div>
                            <div className="text-xs font-semibold text-slate-700 mb-0.5">{stat.label}</div>
                            <div className="text-[10px] font-mono text-slate-400">{stat.sub}</div>
                        </div>
                    ))}
                </motion.div>



            </motion.div>
        </section>
    );
}
