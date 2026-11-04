"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import {
    FiMessageCircle,
    FiDollarSign,
    FiLock,
    FiMonitor,
    FiMail,
    FiClock,
    FiCheck
} from "react-icons/fi";

const objections = [
    {
        icon: FiMessageCircle,
        color: "blue",
        doubt: "Will they even understand my idea?",
        answer: "Your first session is 100% dedicated to understanding your vision — not pitching ours. We ask, you talk.",
        proof: "We've onboarded 25+ founders with zero technical background."
    },
    {
        icon: FiDollarSign,
        color: "emerald",
        doubt: "How much will this actually cost?",
        answer: "We send a clear, itemized estimate before any work begins. No vague ranges. No hidden fees. A real number.",
        proof: "Fixed-scope pricing available for MVPs & product builds."
    },
    {
        icon: FiLock,
        color: "purple",
        doubt: "What if they steal my idea?",
        answer: "We sign a mutual NDA before you tell us a single word about your project. Your IP is protected from minute one.",
        proof: "100% of our clients have a signed NDA on file before Day 1."
    },
    {
        icon: FiMonitor,
        color: "indigo",
        doubt: "Will it actually get built properly?",
        answer: "Every project ships a live staging release every 2 weeks. You see your product being built in real-time — not just when it's 'done'.",
        proof: "Biweekly demos with your direct feedback loop every sprint."
    },
    {
        icon: FiMail,
        color: "rose",
        doubt: "What if they vanish after I pay?",
        answer: "You get a shared WhatsApp + email thread from Day 1. Direct access to your assigned engineer — no account managers, no delays.",
        proof: "Average response time under 4 hours during business hours."
    },
    {
        icon: FiClock,
        color: "amber",
        doubt: "Am I wasting time on a sales call?",
        answer: "Our first session is 30 minutes max. You leave with a free technical blueprint — yours to keep, even if we never work together.",
        proof: "Zero obligation. Zero pitch pressure. Just clarity."
    },
];

const colorMap: Record<string, { bg: string; text: string; border: string; iconBg: string; tag: string }> = {
    blue:    { bg: "bg-blue-50/60",    text: "text-blue-700",   border: "border-blue-200/60",   iconBg: "bg-blue-100 text-blue-600",   tag: "bg-blue-50 text-blue-600 border-blue-100" },
    emerald: { bg: "bg-emerald-50/60", text: "text-emerald-700",border: "border-emerald-200/60", iconBg: "bg-emerald-100 text-emerald-600", tag: "bg-emerald-50 text-emerald-600 border-emerald-100" },
    purple:  { bg: "bg-purple-50/60",  text: "text-purple-700", border: "border-purple-200/60",  iconBg: "bg-purple-100 text-purple-600",  tag: "bg-purple-50 text-purple-600 border-purple-100" },
    indigo:  { bg: "bg-indigo-50/60",  text: "text-indigo-700", border: "border-indigo-200/60",  iconBg: "bg-indigo-100 text-indigo-600",  tag: "bg-indigo-50 text-indigo-600 border-indigo-100" },
    rose:    { bg: "bg-rose-50/60",    text: "text-rose-700",   border: "border-rose-200/60",    iconBg: "bg-rose-100 text-rose-600",     tag: "bg-rose-50 text-rose-600 border-rose-100" },
    amber:   { bg: "bg-amber-50/60",   text: "text-amber-700",  border: "border-amber-200/60",   iconBg: "bg-amber-100 text-amber-600",   tag: "bg-amber-50 text-amber-600 border-amber-100" },
};

export default function ContactObjectionSection() {
    const [resolved, setResolved] = useState<number[]>([]);
    const { scrollY } = useScroll();
    const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        const diff = latest - previous;
        if (Math.abs(diff) > 2) {
            setScrollDirection(diff > 0 ? "down" : "up");
        }
    });

    const toggleResolved = (idx: number) => {
        setResolved(prev =>
            prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
        );
    };

    const allResolved = resolved.length === objections.length;

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

    const cardVariants = {
        hidden: (direction: "up" | "down") => ({
            opacity: 0,
            y: direction === "down" ? 40 : -40
        }),
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring" as const, stiffness: 60, damping: 14 }
        }
    };

    return (
        <section className="relative w-full py-20 md:py-28 px-4 bg-white border-t border-slate-100 overflow-hidden">

            {/* Subtle dot grid background — matches CTASection style */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.035]"
                style={{
                    backgroundImage: "radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)",
                    backgroundSize: "24px 24px"
                }}
            />

            {/* Soft ambient blue glow — top center */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-b from-blue-100/25 via-indigo-50/10 to-transparent rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Section Header */}
                <motion.div
                    custom={scrollDirection}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    variants={headerVariants}
                    className="text-center mb-14"
                >
                    <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-blue-600 bg-blue-50/80 border border-blue-100 px-3.5 py-1.5 rounded-full select-none inline-block mb-5">
                        [ Before You Send ]
                    </span>

                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-[1.15] mb-5"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        We Know What's{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                            Holding You Back.
                        </span>
                    </h2>

                    <p className="max-w-2xl mx-auto text-base md:text-lg text-slate-500 font-light leading-relaxed">
                        Every serious client has these exact thoughts before reaching out.
                        <br />
                        <span className="font-semibold text-slate-700">Check each box below to clear your doubt</span> — we've answered every one honestly.
                    </p>

                    {/* Progress bar */}
                    <div className="mt-8 max-w-xs mx-auto">
                        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-2 select-none">
                            <span>DOUBTS CLEARED</span>
                            <span className={`font-bold ${allResolved ? "text-emerald-600" : "text-blue-600"}`}>
                                {resolved.length}/{objections.length}
                            </span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                            <motion.div
                                className={`h-full rounded-full transition-colors duration-500 ${allResolved ? "bg-emerald-500" : "bg-gradient-to-r from-blue-500 to-indigo-500"}`}
                                animate={{ width: `${(resolved.length / objections.length) * 100}%` }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Objection Cards Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                    custom={scrollDirection}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-60px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.08 }
                        }
                    }}
                >
                    {objections.map((item, idx) => {
                        const Icon = item.icon;
                        const colors = colorMap[item.color];
                        const isResolved = resolved.includes(idx);

                        return (
                             <motion.div
                                key={idx}
                                custom={scrollDirection}
                                variants={cardVariants}
                                onClick={() => toggleResolved(idx)}
                                className={`group relative border rounded-2xl p-6 cursor-pointer transition-all duration-300 select-none overflow-hidden ${
                                    isResolved
                                        ? `${colors.bg} ${colors.border} shadow-sm`
                                        : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-md"
                                }`}
                            >
                                {/* Resolved checkmark overlay indicator */}
                                {isResolved && (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className={`absolute top-4 right-4 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs shadow ${colors.iconBg}`}
                                    >
                                        <FiCheck className="w-3.5 h-3.5" />
                                    </motion.div>
                                )}

                                {/* Icon Badge */}
                                <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 ${isResolved ? colors.iconBg : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"}`}>
                                    <Icon className="w-4 h-4" />
                                </div>

                                {/* Doubt (italic grey) */}
                                <p className="text-xs font-mono italic text-slate-400 mb-3 leading-relaxed">
                                    "{item.doubt}"
                                </p>

                                {/* Answer (confident, colored on resolved) */}
                                <p className={`text-sm font-medium leading-relaxed mb-3 transition-colors duration-300 ${isResolved ? colors.text : "text-slate-700"}`}>
                                    {item.answer}
                                </p>

                                {/* Proof tag */}
                                <div className={`inline-flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-1 rounded-lg border transition-colors duration-300 ${isResolved ? colors.tag : "bg-slate-50 text-slate-400 border-slate-200"}`}>
                                    <FiCheck className="w-2.5 h-2.5" />
                                    <span>{item.proof}</span>
                                </div>

                                {/* Checkbox hint on unresolved cards */}
                                {!isResolved && (
                                    <div className="flex items-center gap-2 mt-4 pt-3 border-t border-slate-100">
                                        <div className="w-4 h-4 rounded border-2 border-slate-300 group-hover:border-blue-400 transition-colors flex-shrink-0" />
                                        <span className="text-[10px] font-mono text-slate-400 group-hover:text-slate-500 transition-colors">
                                            Click to mark as understood
                                        </span>
                                    </div>
                                )}
                                {/* Checked state on resolved cards */}
                                {isResolved && (
                                    <div className={`flex items-center gap-2 mt-4 pt-3 border-t ${colors.border}`}>
                                        <div className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 ${colors.iconBg}`}>
                                            <FiCheck className="w-2.5 h-2.5" />
                                        </div>
                                        <span className={`text-[10px] font-mono font-semibold ${colors.text}`}>
                                            Doubt cleared ✓
                                        </span>
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* All-resolved CTA or default CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-14 text-center"
                >
                    {allResolved ? (
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="inline-flex flex-col items-center gap-4"
                        >
                            <p className="text-emerald-600 font-semibold text-sm font-mono flex items-center gap-2">
                                <FiCheck className="w-4 h-4" />
                                All doubts cleared — you're ready.
                            </p>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 text-sm"
                            >
                                <span>Fill the Scoping Form Below</span>
                                <FiCheck className="w-4 h-4" />
                            </a>
                        </motion.div>
                    ) : (
                        <div className="space-y-3">
                            <p className="text-slate-400 text-xs font-mono select-none">
                                Still have a question we haven't answered?
                            </p>
                            <a
                                href="mailto:hello@nisschay.com"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-indigo-600 transition-colors"
                            >
                                <FiMail className="w-4 h-4" />
                                <span>Email us directly — hello@nisschay.com</span>
                            </a>
                        </div>
                    )}
                </motion.div>

            </div>
        </section>
    );
}
