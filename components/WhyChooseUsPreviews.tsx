"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiStar, FiTrendingUp } from "react-icons/fi";

// ==========================================
// 1. PROVEN WORK & SATISFACTION WIDGET
// ==========================================
export function LaunchesStatsWidget() {
    const [startsLit, setStartsLit] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setStartsLit(5);
        }, 500);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="w-full bg-white rounded-2xl p-4 border border-gray-100 shadow-lg flex flex-col font-sans text-xs select-none">
            {/* High-Fidelity Generated Mockup Image */}
            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-gray-200/40 mb-4 shadow-sm bg-gray-50 flex-shrink-0">
                <Image
                    src="/proof-launches.webp"
                    alt="SaaS Analytics Dashboard Mockup"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/20 to-transparent pointer-events-none" />
            </div>

            <div className="flex justify-between items-center mb-3">
                <span className="text-gray-900 font-bold uppercase tracking-wider text-[9px]">Satisfaction Metrics</span>
                <span className="text-blue-650 bg-blue-50/60 border border-blue-100/50 px-2 py-0.5 rounded-md text-[8px] font-mono font-semibold">Live Feed</span>
            </div>

            <div className="space-y-3">
                {/* NPS / Rating Header */}
                <div className="flex items-center justify-between bg-gray-50/70 p-2.5 rounded-xl border border-gray-200/30">
                    <div>
                        <div className="text-[9px] text-gray-400 uppercase tracking-wide">Client Rating</div>
                        <div className="text-base font-black text-gray-900 mt-0.5">4.92 / 5.0</div>
                    </div>
                    {/* Stars */}
                    <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <FiStar 
                                key={i} 
                                className={`w-3.5 h-3.5 transition-colors duration-700 ${
                                    i < startsLit ? "text-amber-400 fill-amber-400" : "text-gray-200"
                                }`} 
                            />
                        ))}
                    </div>
                </div>

                {/* Grid stats */}
                <div className="grid grid-cols-2 gap-2">
                    <div className="border border-gray-100 bg-white p-2.5 rounded-xl flex flex-col justify-center shadow-sm">
                        <span className="text-[8px] text-gray-400 uppercase font-mono">Launches</span>
                        <span className="text-base font-black text-blue-600 mt-0.5">25+</span>
                        <span className="text-[8px] text-gray-500 mt-0.5">Startup MVPs</span>
                    </div>
                    <div className="border border-gray-100 bg-white p-2.5 rounded-xl flex flex-col justify-center shadow-sm">
                        <span className="text-[8px] text-gray-400 uppercase font-mono">Satisfaction</span>
                        <span className="text-base font-black text-emerald-600 mt-0.5">98%</span>
                        <span className="text-[8px] text-gray-500 mt-0.5">Client Rating</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ==========================================
// 2. ACTIVE DAILY COLLABORATION WIDGET
// ==========================================
interface SlackMessage {
    user: string;
    avatarText: string;
    role: string;
    text: string;
    time: string;
    color: string;
}

const SLACK_CONVO: SlackMessage[] = [
    { user: "Client (CEO)", avatarText: "CC", role: "client", text: "Hey! Can we change the styling of the price cards on the subscription tab?", time: "2:14 PM", color: "bg-indigo-500" },
    { user: "Nisschay Lead Engineer", avatarText: "NE", role: "lead", text: "Absolutely. We will make them glassmorphic and adjust the active checkmark gradient to stand out.", time: "2:15 PM", color: "bg-blue-600" },
    { user: "Nisschay Lead Engineer", avatarText: "NE", role: "lead", text: "Code changes completed and compiling. Deploying build to your staging environment now! 🚀", time: "2:17 PM", color: "bg-blue-600" },
    { user: "Client (CEO)", avatarText: "CC", role: "client", text: "Wow, that was fast. Checked the staging link, looks perfect!", time: "2:19 PM", color: "bg-indigo-500" }
];

export function SlackSyncWidget() {
    const [messages, setMessages] = useState<SlackMessage[]>([]);
    const [idx, setIdx] = useState(0);
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        if (idx >= SLACK_CONVO.length) {
            const timeout = setTimeout(() => {
                setMessages([]);
                setIdx(0);
            }, 6000);
            return () => clearTimeout(timeout);
        }

        const msg = SLACK_CONVO[idx];
        if (msg.role === "lead") {
            const startTypingTimeout = setTimeout(() => {
                setIsTyping(true);
            }, 0);
            const typingTimeout = setTimeout(() => {
                setIsTyping(false);
                setMessages(prev => [...prev, msg]);
                setIdx(prev => prev + 1);
            }, 2000);
            return () => {
                clearTimeout(startTypingTimeout);
                clearTimeout(typingTimeout);
            };
        } else {
            const userTimeout = setTimeout(() => {
                setMessages(prev => [...prev, msg]);
                setIdx(prev => prev + 1);
            }, 1200);
            return () => clearTimeout(userTimeout);
        }
    }, [idx]);

    return (
        <div className="w-full bg-[#1A1D21] rounded-2xl overflow-hidden border border-[#2B2F33] shadow-lg flex flex-col text-[10px] text-gray-300 font-sans select-none">
            {/* High-Fidelity Generated Mockup Image */}
            <div className="relative w-full aspect-[16/10] overflow-hidden border-b border-[#2B2F33] bg-[#121417] flex-shrink-0">
                <Image
                    src="/proof-collaboration.webp"
                    alt="Active Collaborative Team Figma Design Sync"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 to-transparent pointer-events-none" />
            </div>

            {/* Slack Header */}
            <div className="bg-[#121417] p-2.5 flex items-center justify-between border-b border-[#2B2F33]">
                <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-[10px]"># nisschay-client-sync</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                </div>
                <div className="text-gray-500 text-[8px]">Daily Active Sync</div>
            </div>

            {/* Conversation Feed */}
            <div className="p-3 space-y-2.5 flex-1 flex flex-col justify-end min-h-[140px] max-h-[160px] overflow-y-auto scrollbar-none">
                <AnimatePresence>
                    {messages.map((m, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex gap-2 items-start text-[9px] sm:text-[10px]"
                        >
                            <div className={`w-5 h-5 rounded flex-shrink-0 flex items-center justify-center text-white font-bold text-[8px] ${m.color}`}>
                                {m.avatarText}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-baseline gap-1.5">
                                    <span className="font-bold text-white text-[9px]">{m.user}</span>
                                    <span className="text-[7px] text-gray-500 font-mono">{m.time}</span>
                                </div>
                                <p className="text-gray-300 leading-normal mt-0.5 break-words">{m.text}</p>
                            </div>
                        </motion.div>
                    ))}

                    {isTyping && (
                        <div className="flex gap-2 items-center text-gray-500 pl-7 text-[8px]">
                            <span>Lead Engineer typing</span>
                            <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1 }}>.</motion.span>
                            <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.3 }}>.</motion.span>
                            <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.6 }}>.</motion.span>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

// ==========================================
// 3. WEEKLY RELEASE CADENCE WIDGET
// ==========================================
export function ReleasePipelineWidget() {
    const [progress, setProgress] = useState(0);
    const [statusText, setStatusText] = useState("Idle");

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    setStatusText("Staging Deployed Successfully! ✨");
                    return 100;
                }
                const nextVal = prev + Math.floor(Math.random() * 20) + 10;
                if (nextVal >= 100) {
                    setStatusText("Staging Deployed Successfully! ✨");
                    return 100;
                }
                setStatusText("Compiling assets & static pages...");
                return nextVal;
            });
        }, 800);

        return () => clearInterval(interval);
    }, []);

    // Reset progress in a loop
    useEffect(() => {
        if (progress === 100) {
            const reset = setTimeout(() => {
                setProgress(0);
                setStatusText("Starting CI/CD build pipeline...");
            }, 4000);
            return () => clearTimeout(reset);
        }
    }, [progress]);

    return (
        <div className="w-full bg-white rounded-2xl p-4 border border-gray-100 shadow-lg flex flex-col font-sans text-xs select-none">
            {/* High-Fidelity Generated Mockup Image */}
            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-gray-200/40 mb-4 shadow-sm bg-gray-50 flex-shrink-0">
                <Image
                    src="/proof-release.webp"
                    alt="Weekly Release Pipeline Calendar Sync Illustration"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/20 to-transparent pointer-events-none" />
            </div>

            <div className="flex justify-between items-center mb-3 border-b border-gray-100 pb-2">
                <span className="text-gray-900 font-bold uppercase tracking-wider text-[9px]">Weekly Release Timeline</span>
                <span className="text-emerald-650 bg-emerald-50 border border-emerald-100/50 px-2 py-0.5 rounded-md text-[8px] font-mono">Friday release</span>
            </div>

            <div className="space-y-3">
                {/* Micro Steps timeline */}
                <div className="flex justify-between items-center gap-2 text-[9px]">
                    <div className="flex flex-col items-center flex-1">
                        <span className="w-5 h-5 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600 font-bold">✓</span>
                        <span className="text-gray-900 font-semibold mt-1">Mon</span>
                        <span className="text-[7px] text-gray-400">Spec Lock</span>
                    </div>
                    <div className="w-6 h-0.5 bg-blue-200 flex-shrink-0 mb-3" />
                    <div className="flex flex-col items-center flex-1">
                        <span className="w-5 h-5 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600 font-bold">✓</span>
                        <span className="text-gray-900 font-semibold mt-1">Wed</span>
                        <span className="text-[7px] text-gray-400">Code sync</span>
                    </div>
                    <div className="w-6 h-0.5 bg-blue-200 flex-shrink-0 mb-3" />
                    <div className="flex flex-col items-center flex-1">
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold border transition-colors ${
                            progress === 100 ? "bg-emerald-100 border-emerald-200 text-emerald-600" : "bg-blue-600 border-blue-600 text-white animate-pulse"
                        }`}>
                            {progress === 100 ? "✓" : "🚀"}
                        </span>
                        <span className="text-gray-900 font-semibold mt-1">Fri</span>
                        <span className="text-[7px] text-gray-400">Ship Day</span>
                    </div>
                </div>

                {/* Staging deployment animation console */}
                <div className="bg-gray-950 rounded-xl p-2.5 border border-gray-900 text-[8px] sm:text-[9px] text-gray-400 font-mono">
                    <div className="flex justify-between text-gray-500 mb-1">
                        <span>Pipeline: #stg-release-42</span>
                        <span>{progress}%</span>
                    </div>
                    {/* Progress Track */}
                    <div className="w-full h-1 bg-gray-900 rounded-full overflow-hidden mb-1.5">
                        <div 
                            className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <div className="text-[8px] text-green-400 truncate">
                        $ {statusText}
                    </div>
                </div>
            </div>
        </div>
    );
}

// ==========================================
// 4. BESPOKE PRODUCT ENGINEERING WIDGET
// ==========================================
export function AuditComparisonWidget() {
    return (
        <div className="w-full bg-[#090D16] rounded-2xl p-4 border border-[#172237] shadow-lg flex flex-col font-sans text-xs select-none">
            {/* High-Fidelity Generated Mockup Image */}
            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-[#172237] mb-4 shadow-sm bg-gray-950 flex-shrink-0">
                <Image
                    src="/proof-engineering.webp"
                    alt="TypeScript Custom System Architecture Schematic Blueprint"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090D16]/50 to-transparent pointer-events-none" />
            </div>

            <div className="flex justify-between items-center mb-3">
                <span className="text-white font-bold uppercase tracking-wider text-[9px] flex items-center gap-1.5">
                    <FiTrendingUp className="text-emerald-500" />
                    Speed & Audit Comparison
                </span>
                <span className="text-gray-500 text-[8px] font-mono">Lighthouse Core</span>
            </div>

            <div className="space-y-3 text-[9px] sm:text-[10px]">
                {/* Metric 1: Speed Index */}
                <div className="space-y-1">
                    <div className="flex justify-between text-gray-400 font-medium">
                        <span>Lighthouse Performance Score</span>
                        <span className="text-white">Nisschay vs Template</span>
                    </div>
                    <div className="space-y-1">
                        {/* Nisschay */}
                        <div className="flex items-center gap-2">
                            <span className="w-16 text-gray-500 text-[8px]">Nisschay</span>
                            <div className="flex-1 h-3 bg-gray-900 rounded overflow-hidden relative">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "99%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 flex items-center pl-2"
                                >
                                    <span className="text-[7px] text-white font-bold font-mono">99%</span>
                                </motion.div>
                            </div>
                        </div>
                        {/* Template agency */}
                        <div className="flex items-center gap-2">
                            <span className="w-16 text-gray-500 text-[8px]">Standard Agency</span>
                            <div className="flex-1 h-3 bg-gray-900 rounded overflow-hidden relative">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "45%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                                    className="h-full bg-gradient-to-r from-red-500 to-orange-400 flex items-center pl-2"
                                >
                                    <span className="text-[7px] text-white font-bold font-mono">45%</span>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Metric 2: SEO Schema */}
                <div className="space-y-1 mt-1">
                    <div className="flex justify-between text-gray-400 font-medium">
                        <span>SEO Index Grade</span>
                        <span className="text-white">Custom vs Template</span>
                    </div>
                    <div className="space-y-1">
                        {/* Nisschay */}
                        <div className="flex items-center gap-2">
                            <span className="w-16 text-gray-500 text-[8px]">Nisschay</span>
                            <div className="flex-1 h-3 bg-gray-900 rounded overflow-hidden relative">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 flex items-center pl-2"
                                >
                                    <span className="text-[7px] text-white font-bold font-mono">100%</span>
                                </motion.div>
                            </div>
                        </div>
                        {/* Template agency */}
                        <div className="flex items-center gap-2">
                            <span className="w-16 text-gray-500 text-[8px]">Standard Agency</span>
                            <div className="flex-1 h-3 bg-gray-900 rounded overflow-hidden relative">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "62%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                                    className="h-full bg-gradient-to-r from-yellow-500 to-orange-400 flex items-center pl-2"
                                >
                                    <span className="text-[7px] text-white font-bold font-mono">62%</span>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
