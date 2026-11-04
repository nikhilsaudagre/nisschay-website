"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
    FiSmartphone, FiCpu, FiDatabase, 
    FiLayout, FiSend
} from "react-icons/fi";

// ==========================================
// 1. WEB & SAAS SIMULATOR
// ==========================================
export function WebSaaSSimulator() {
    const [mrr, setMrr] = useState(12800);
    const [activeUsers, setActiveUsers] = useState(1420);

    useEffect(() => {
        const interval = setInterval(() => {
            setMrr(prev => prev + Math.floor(Math.random() * 80) - 30);
            setActiveUsers(prev => prev + Math.floor(Math.random() * 6) - 3);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-full bg-gray-950 rounded-2xl overflow-hidden border border-gray-800/80 shadow-2xl flex flex-col text-[10px] sm:text-xs text-gray-400 font-mono">
            {/* Browser Header Bar */}
            <div className="bg-gray-900 px-3 py-2 border-b border-gray-800 flex items-center justify-between">
                <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                </div>
                <div className="bg-gray-950 px-6 py-0.5 rounded-md border border-gray-800/50 text-[9px] text-gray-500 w-1/2 text-center truncate select-none">
                    nisschay.io/saas-dashboard
                </div>
                <div className="w-8" />
            </div>
            {/* Browser Body */}
            <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between overflow-y-auto">
                <div className="flex justify-between items-center mb-3">
                    <div>
                        <div className="text-[9px] uppercase tracking-wider text-gray-500">Live Platform Traffic</div>
                        <div className="text-sm sm:text-lg font-bold text-white mt-0.5 font-sans">
                            {activeUsers.toLocaleString()} <span className="text-green-500 text-[10px] font-normal font-mono">+12%</span>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-[9px] uppercase tracking-wider text-gray-500">Monthly Recurring Revenue</div>
                        <div className="text-sm sm:text-lg font-bold text-white mt-0.5 font-sans">
                            ${mrr.toLocaleString()}
                        </div>
                    </div>
                </div>

                {/* Animated Graph */}
                <div className="flex-1 bg-gray-900/50 border border-gray-800/60 rounded-lg p-2 flex flex-col justify-between relative min-h-[90px]">
                    <div className="absolute inset-0 grid grid-rows-3 grid-cols-4 pointer-events-none opacity-20">
                        {Array.from({ length: 12 }).map((_, i) => (
                            <div key={i} className="border-b border-r border-gray-700" />
                        ))}
                    </div>
                    <svg className="w-full h-full mt-2 overflow-visible" viewBox="0 0 100 30" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        {/* Area Fill */}
                        <motion.path
                            d="M 0 30 Q 15 20, 25 25 T 50 12 T 75 18 T 100 5 L 100 30 Z"
                            fill="url(#chartGrad)"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                        {/* Line */}
                        <motion.path
                            d="M 0 30 Q 15 20, 25 25 T 50 12 T 75 18 T 100 5"
                            fill="none"
                            stroke="#3b82f6"
                            strokeWidth="1.5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                        {/* Dots */}
                        <motion.circle cx="100" cy="5" r="1.5" fill="#3b82f6" initial={{ scale: 0 }} animate={{ scale: [0, 1.5, 1] }} transition={{ delay: 1.5 }} />
                    </svg>
                </div>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-2 gap-2 mt-3 text-[9px]">
                    <div className="bg-gray-900/80 p-2 rounded-md border border-gray-800/50 flex flex-col justify-center">
                        <span className="text-gray-500">API Response</span>
                        <span className="text-green-400 font-semibold mt-0.5">140ms (99th pct)</span>
                    </div>
                    <div className="bg-gray-900/80 p-2 rounded-md border border-gray-800/50 flex flex-col justify-center">
                        <span className="text-gray-500">Conversion Rate</span>
                        <span className="text-blue-400 font-semibold mt-0.5">3.92% (optimized)</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ==========================================
// 2. MOBILE APP SIMULATOR
// ==========================================
export function MobileAppSimulator() {
    return (
        <div className="w-[170px] sm:w-[190px] h-[300px] sm:h-[320px] bg-gray-950 rounded-[36px] p-2 border-[6px] border-gray-800 shadow-2xl relative flex flex-col overflow-hidden mx-auto">
            {/* Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-800 rounded-full z-20 flex items-center justify-around px-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-900" />
                <span className="w-6 h-1 bg-gray-900 rounded-full" />
            </div>

            {/* Screen */}
            <div className="flex-1 bg-gray-900 rounded-[28px] overflow-hidden flex flex-col text-[8px] sm:text-[9px] text-gray-400 font-sans p-3 pt-6 relative select-none">
                {/* Header */}
                <div className="flex justify-between items-center mb-3 border-b border-gray-800 pb-2">
                    <span className="font-bold text-white text-[10px]">ShopEase</span>
                    <FiSmartphone className="text-gray-500" />
                </div>

                {/* Card List Animation */}
                <div className="flex-1 space-y-2 overflow-y-auto scrollbar-none">
                    <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-gray-800/60 p-2 rounded-xl border border-gray-700/30 flex gap-2"
                    >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold text-[12px]">📦</div>
                        <div className="flex-1 flex flex-col justify-center">
                            <div className="text-white font-medium text-[9px]">Running Shoes</div>
                            <div className="text-emerald-400 font-bold">$89.00</div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-gray-800/60 p-2 rounded-xl border border-gray-700/30 flex gap-2"
                    >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold text-[12px]">🎧</div>
                        <div className="flex-1 flex flex-col justify-center">
                            <div className="text-white font-medium text-[9px]">ANC Headphones</div>
                            <div className="text-emerald-400 font-bold">$149.00</div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-gray-800/60 p-2 rounded-xl border border-gray-700/30 flex gap-2"
                    >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white font-bold text-[12px]">⌚</div>
                        <div className="flex-1 flex flex-col justify-center">
                            <div className="text-white font-medium text-[9px]">Smart Watch v2</div>
                            <div className="text-emerald-400 font-bold">$199.00</div>
                        </div>
                    </motion.div>
                </div>

                {/* Simulated Bottom Navigation */}
                <div className="bg-gray-950 -mx-3 -mb-3 py-2 px-4 border-t border-gray-800 flex justify-between text-gray-500 mt-2">
                    <span className="text-emerald-400 font-bold">●</span>
                    <span>■</span>
                    <span>▲</span>
                </div>
            </div>
        </div>
    );
}

// ==========================================
// 3. AI & WHATSAPP AUTOMATION SIMULATOR
// ==========================================
interface Message {
    sender: "bot" | "user";
    text: string;
    time: string;
}

const CONVO: Message[] = [
    { sender: "user", text: "Hey! Is order #2405 shipped yet?", time: "11:42 AM" },
    { sender: "bot", text: "🔍 Retrieving data...", time: "11:42 AM" },
    { sender: "bot", text: "Yes! Order #2405 was dispatched via BlueDart. Tracking: BD948301. Expected arrival: Friday afternoon.", time: "11:42 AM" },
    { sender: "user", text: "Awesome, thanks!", time: "11:43 AM" },
    { sender: "bot", text: "You're welcome! Let me know if you need anything else. 😊", time: "11:43 AM" }
];

export function AIWhatsAppSimulator() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [currentIdx, setCurrentIdx] = useState(0);
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        if (currentIdx >= CONVO.length) {
            const resetTimeout = setTimeout(() => {
                setMessages([]);
                setCurrentIdx(0);
            }, 6000);
            return () => clearTimeout(resetTimeout);
        }

        const nextMsg = CONVO[currentIdx];
        if (nextMsg.sender === "bot") {
            const startTypingTimeout = setTimeout(() => {
                setIsTyping(true);
            }, 0);
            const typingTimeout = setTimeout(() => {
                setIsTyping(false);
                setMessages(prev => [...prev, nextMsg]);
                setCurrentIdx(prev => prev + 1);
            }, 1800);
            return () => {
                clearTimeout(startTypingTimeout);
                clearTimeout(typingTimeout);
            };
        } else {
            const userTimeout = setTimeout(() => {
                setMessages(prev => [...prev, nextMsg]);
                setCurrentIdx(prev => prev + 1);
            }, 1200);
            return () => clearTimeout(userTimeout);
        }
    }, [currentIdx]);

    return (
        <div className="w-full h-full bg-[#0b141a] rounded-2xl overflow-hidden border border-[#222d34] shadow-2xl flex flex-col text-[10px] text-gray-300 font-sans">
            {/* Header */}
            <div className="bg-[#202c33] p-3 flex items-center justify-between border-b border-[#2a3942]">
                <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white">
                        <FiCpu className="w-3.5 h-3.5" />
                    </div>
                    <div>
                        <div className="font-bold text-white text-[11px] leading-tight">Nisschay AI Assistant</div>
                        <div className="text-[8px] text-emerald-400">online</div>
                    </div>
                </div>
                <div className="flex gap-2 text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-3 overflow-y-auto space-y-2 flex flex-col justify-end min-h-[140px] bg-[radial-gradient(#1c2a33_1px,transparent_1px)] [background-size:16px_16px]">
                <AnimatePresence>
                    {messages.map((msg, i) => (
                        <motion.div
                            key={i}
                            initial={{ scale: 0.9, opacity: 0, y: 10 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            className={`max-w-[85%] rounded-lg p-2 flex flex-col ${
                                msg.sender === "user" 
                                    ? "bg-[#005c4b] text-white self-end rounded-tr-none" 
                                    : "bg-[#202c33] text-gray-200 self-start rounded-tl-none"
                            }`}
                        >
                            <span className="break-words leading-relaxed text-[9px] sm:text-[10px]">{msg.text}</span>
                            <span className="text-[7px] text-gray-400 text-right mt-1">{msg.time}</span>
                        </motion.div>
                    ))}

                    {isTyping && (
                        <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="bg-[#202c33] text-gray-400 self-start rounded-lg rounded-tl-none px-3 py-1.5 text-[9px] flex gap-1 items-center"
                        >
                            <span>types</span>
                            <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1 }} className="font-bold">.</motion.span>
                            <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.3 }} className="font-bold">.</motion.span>
                            <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.6 }} className="font-bold">.</motion.span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Text Input Row */}
            <div className="bg-[#202c33] p-2 flex items-center gap-2 border-t border-[#2a3942]">
                <div className="flex-1 bg-[#2a3942] rounded-full py-1.5 px-3 text-[9px] text-gray-400 truncate">
                    Type a message...
                </div>
                <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center text-white cursor-pointer hover:bg-emerald-600 transition-colors">
                    <FiSend className="w-3 h-3" />
                </div>
            </div>
        </div>
    );
}

// ==========================================
// 4. CUSTOM SOFTWARE SIMULATOR
// ==========================================
export function CustomSoftwareSimulator() {
    return (
        <div className="w-full h-full bg-gray-950 rounded-2xl overflow-hidden border border-gray-800/80 shadow-2xl flex flex-col text-[10px] text-gray-400 font-mono p-4">
            <div className="flex justify-between items-center mb-3">
                <span className="text-white font-semibold flex items-center gap-1.5 text-[10px]">
                    <FiDatabase className="text-blue-500 animate-pulse" />
                    SYSTEM CONNECTOR MAP
                </span>
                <span className="text-[9px] text-green-500 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
                    OPERATIONAL
                </span>
            </div>

            {/* Simulated Architecture Graph Canvas */}
            <div className="flex-1 bg-gray-900/40 border border-gray-800/60 rounded-xl flex items-center justify-center p-3 relative min-h-[120px]">
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                    {/* Connection lines */}
                    <line x1="20" y1="50" x2="50" y2="25" stroke="#4b5563" strokeWidth="0.5" strokeDasharray="2" />
                    <line x1="20" y1="50" x2="50" y2="75" stroke="#4b5563" strokeWidth="0.5" strokeDasharray="2" />
                    <line x1="50" y1="25" x2="80" y2="50" stroke="#4b5563" strokeWidth="0.5" strokeDasharray="2" />
                    <line x1="50" y1="75" x2="80" y2="50" stroke="#4b5563" strokeWidth="0.5" strokeDasharray="2" />

                    {/* Animated energy pulses */}
                    <motion.circle 
                        r="1.5" 
                        fill="#3b82f6" 
                        animate={{
                            cx: [20, 50, 80],
                            cy: [50, 25, 50]
                        }}
                        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                    />
                    <motion.circle 
                        r="1.5" 
                        fill="#8b5cf6" 
                        animate={{
                            cx: [20, 50, 80],
                            cy: [50, 75, 50]
                        }}
                        transition={{ repeat: Infinity, duration: 4, ease: "linear", delay: 1 }}
                    />
                </svg>

                {/* Nodes */}
                <div className="w-full h-full flex justify-between items-center relative z-10 text-[8px] sm:text-[9px]">
                    <div className="bg-gray-950 p-2 rounded-lg border border-gray-800 text-center shadow-lg w-20 flex flex-col gap-0.5">
                        <span className="font-semibold text-white">ERP Portal</span>
                        <span className="text-[7px] text-gray-500">React Client</span>
                    </div>

                    <div className="flex flex-col gap-8">
                        <div className="bg-gray-950 p-2 rounded-lg border border-gray-800 text-center shadow-lg w-20 flex flex-col gap-0.5">
                            <span className="font-semibold text-blue-400">Node API</span>
                            <span className="text-[7px] text-gray-500">Fast Sync</span>
                        </div>
                        <div className="bg-gray-950 p-2 rounded-lg border border-gray-800 text-center shadow-lg w-20 flex flex-col gap-0.5">
                            <span className="font-semibold text-purple-400">SQL Cluster</span>
                            <span className="text-[7px] text-gray-500">Primary DB</span>
                        </div>
                    </div>

                    <div className="bg-gray-950 p-2 rounded-lg border border-gray-800 text-center shadow-lg w-20 flex flex-col gap-0.5">
                        <span className="font-semibold text-white">Payment Sync</span>
                        <span className="text-[7px] text-gray-500">Razorpay API</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ==========================================
// 5. UI/UX DESIGN SIMULATOR
// ==========================================
export function UIUXDesignSimulator() {
    return (
        <div className="w-full h-full bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 shadow-2xl flex flex-col text-[9px] text-gray-400 font-sans relative">
            {/* Top Toolbar */}
            <div className="bg-gray-950 p-2 border-b border-gray-800 flex items-center justify-between select-none">
                <div className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded bg-rose-500 flex items-center justify-center text-white text-[7px] font-bold">F</span>
                    <span className="text-white text-[9px] font-semibold">Nisschay Design Space</span>
                </div>
                <div className="flex gap-2 text-gray-500 text-[8px]">
                    <span className="px-1.5 py-0.5 bg-gray-900 rounded border border-gray-800">Vector</span>
                    <span className="px-1.5 py-0.5 bg-gray-900 rounded border border-gray-800 text-rose-400">Preview</span>
                </div>
            </div>

            {/* Designer Canvas */}
            <div className="flex-1 bg-gray-950 p-3 flex items-center justify-center relative min-h-[130px] overflow-hidden bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:12px_12px]">
                {/* Mockup Wireframe Canvas */}
                <div className="w-44 h-28 bg-gray-900 rounded-lg border border-gray-800 p-2 relative flex flex-col justify-between shadow-xl">
                    <div className="flex justify-between items-center border-b border-gray-800 pb-1">
                        <span className="w-3.5 h-1.5 bg-gray-800 rounded" />
                        <div className="flex gap-1">
                            <span className="w-1.5 h-1.5 bg-gray-800 rounded-full" />
                            <span className="w-1.5 h-1.5 bg-gray-800 rounded-full" />
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-center gap-1">
                        <div className="w-3/4 h-2 bg-gray-800 rounded" />
                        <div className="w-1/2 h-1.5 bg-gray-800 rounded" />
                    </div>

                    <motion.div 
                        id="cta-mock-btn"
                        animate={{ 
                            scale: [1, 1.05, 1],
                            borderColor: ["#e11d48", "#f43f5e", "#e11d48"]
                        }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-full h-3 bg-gradient-to-r from-rose-500 to-pink-500 rounded border border-rose-600 flex items-center justify-center"
                    >
                        <span className="text-white text-[6px] font-bold">Get In Touch</span>
                    </motion.div>
                </div>

                {/* Animated Mouse Cursor */}
                <motion.div 
                    className="absolute z-20 pointer-events-none"
                    animate={{
                        x: [-30, 10, -30],
                        y: [20, -10, 20]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 5,
                        ease: "easeInOut"
                    }}
                >
                    <FiLayout className="w-3.5 h-3.5 text-rose-500 filter drop-shadow-md" />
                    <span className="absolute left-3.5 top-3 bg-rose-500 text-white font-mono text-[7px] px-1 py-0.5 rounded shadow">UX Designer</span>
                </motion.div>
            </div>
        </div>
    );
}

// ==========================================
// 6. CLOUD & DEVOPS SIMULATOR
// ==========================================
const TERMINAL_LINES = [
    "$ terraform init",
    "Initializing the backend...",
    "Initializing provider plugins...",
    "Terraform has been successfully initialized! ✔",
    "$ terraform apply -auto-approve",
    "aws_vpc.main: Creating...",
    "aws_subnet.public: Creating...",
    "aws_vpc.main: Creation complete [3.4s]",
    "aws_subnet.public: Creation complete [1.2s]",
    "Apply complete! Resources: 2 added, 0 changed.",
    "$ git push origin main",
    "Running deployment pipeline...",
    "✓ Live server loaded: https://prod-lb-8492.aws.com",
    "Deployment successful! 🎉"
];

export function CloudDevOpsSimulator() {
    const [lines, setLines] = useState<string[]>([]);
    const [lineIdx, setLineIdx] = useState(0);

    useEffect(() => {
        if (lineIdx >= TERMINAL_LINES.length) {
            const resetTimeout = setTimeout(() => {
                setLines([]);
                setLineIdx(0);
            }, 6000);
            return () => clearTimeout(resetTimeout);
        }

        const addLineTimeout = setTimeout(() => {
            setLines(prev => [...prev, TERMINAL_LINES[lineIdx]]);
            setLineIdx(prev => prev + 1);
        }, 1200);

        return () => clearTimeout(addLineTimeout);
    }, [lineIdx]);

    return (
        <div className="w-full h-full bg-black rounded-2xl overflow-hidden border border-gray-800 shadow-2xl flex flex-col text-[9px] sm:text-[10px] text-green-400 font-mono p-3">
            {/* Window Top Controls */}
            <div className="flex justify-between items-center mb-3 pb-2 border-b border-gray-900 select-none">
                <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500/80" />
                    <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                    <span className="w-2 h-2 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[8px] text-gray-500 font-mono">bash - devops@nisschay-infrastructure</span>
                <div className="w-8" />
            </div>

            {/* Terminal output area */}
            <div className="flex-1 space-y-1.5 overflow-y-auto leading-relaxed max-h-[145px] scrollbar-none select-none">
                {lines.map((line, i) => {
                    const isCommand = line.startsWith("$");
                    return (
                        <div key={i} className={isCommand ? "text-white font-semibold" : "text-green-500/80"}>
                            {line}
                        </div>
                    );
                })}
                {/* Active flashing cursor */}
                <div className="inline-block w-1.5 h-3 bg-white ml-0.5 animate-pulse" />
            </div>
        </div>
    );
}
