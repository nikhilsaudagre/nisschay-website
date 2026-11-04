"use client";
import React, { useState } from "react";
import { 
    FiShield, 
    FiDatabase, 
    FiCheck, 
    FiRefreshCw, 
    FiSliders, 
    FiLock, 
    FiUnlock 
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

type TabType = "database" | "theme" | "auth";
type DbStatus = "idle" | "replicating" | "success";
type ThemeColor = "blue" | "emerald" | "purple";
type AuthStatus = "idle" | "scanning" | "granted";

/**
 * HeroCodeConsole
 * 
 * Preserved interactive code console and live UI sandbox.
 * Previously rendered in HeroSection. Can be reused in Architecture,
 * Tech Stack, or Platform sections.
 */
export default function HeroCodeConsole() {
    const [activeTab, setActiveTab] = useState<TabType>("database");
    const [dbStatus, setDbStatus] = useState<DbStatus>("idle");
    const [dbProgress, setDbProgress] = useState(0);
    const [themeColor, setThemeColor] = useState<ThemeColor>("blue");
    const [authStatus, setAuthStatus] = useState<AuthStatus>("idle");
    const [authLogs, setAuthLogs] = useState<string[]>([]);

    const handleReplication = () => {
        if (dbStatus !== "idle") return;
        setDbStatus("replicating");
        setDbProgress(0);

        const duration = 2000;
        const steps = 10;
        const stepTime = duration / steps;
        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            setDbProgress((currentStep / steps) * 100);
            if (currentStep >= steps) {
                clearInterval(timer);
                setDbStatus("success");
                setTimeout(() => {
                    setDbStatus("idle");
                    setDbProgress(0);
                }, 4000);
            }
        }, stepTime);
    };

    const handleAuthScan = () => {
        if (authStatus !== "idle") return;
        setAuthStatus("scanning");
        setAuthLogs(["[INFO] intercepting GET /api/v1/secure-vault", "[INFO] checking client credentials..."]);

        setTimeout(() => {
            setAuthLogs(prev => [...prev, "[INFO] token found in headers: Bearer nv_jwt_99a8...", "[INFO] running cryptographic RSA decrypt..."]);
        }, 600);

        setTimeout(() => {
            setAuthLogs(prev => [...prev, "[INFO] signature matches verified keys.", "[INFO] requesting authorization lease..."]);
        }, 1300);

        setTimeout(() => {
            setAuthStatus("granted");
            setAuthLogs(prev => [...prev, "[SUCCESS] validation OK - Access granted.", "STATUS: 200 OK // LEASE_SECURED"]);
            setTimeout(() => {
                setAuthStatus("idle");
                setAuthLogs([]);
            }, 3500);
        }, 2100);
    };

    const renderCodeContent = () => {
        if (activeTab === "database") {
            return (
                <div className="font-mono text-[10px] sm:text-[11px] leading-normal text-slate-400 select-none">
                    <div>
                        <span className="text-pink-500">import</span> {"{"} DB {"}"} <span className="text-pink-500">from</span> <span className="text-emerald-400">&quot;@nisschay/db&quot;</span>;
                    </div>
                    <div className="mt-2 text-slate-500">{"// Configure replica topology"}</div>
                    <div>
                        <span className="text-purple-400">interface</span> <span className="text-amber-400">ClusterConfig</span> {"{"}
                    </div>
                    <div>&nbsp;&nbsp;nodes: <span className="text-cyan-400">4</span>;</div>
                    <div>&nbsp;&nbsp;region: <span className="text-emerald-400">&quot;ap-south-1&quot;</span>;</div>
                    <div>&nbsp;&nbsp;replicas: <span className="text-amber-400">true</span>;</div>
                    <div>&nbsp;&nbsp;lagSLA: <span className="text-emerald-400">&quot;&lt; 1ms&quot;</span>;</div>
                    <div>{"}"}</div>
                    
                    <div className="mt-3">
                        <span className="text-purple-400">export async function</span> <span className="text-blue-400">syncCluster</span>() {"{"}
                    </div>
                    <div>
                        &nbsp;&nbsp;<span className="text-purple-400">return await</span> DB.<span className="text-blue-400">replicate</span>({"{"}
                    </div>
                    <div>
                        &nbsp;&nbsp;&nbsp;&nbsp;strategy: <span className="text-emerald-400">&quot;active-active&quot;</span>,
                    </div>
                    <div>
                        &nbsp;&nbsp;&nbsp;&nbsp;verifyChecksum: <span className="text-amber-400">true</span>
                    </div>
                    <div>&nbsp;&nbsp;{"}"});</div>
                    <div>{"}"}</div>
                </div>
            );
        } else if (activeTab === "theme") {
            const hex = themeColor === "blue" ? "#3b82f6" : themeColor === "emerald" ? "#10b981" : "#a855f7";
            const rgb = themeColor === "blue" ? "59, 130, 246" : themeColor === "emerald" ? "16, 185, 129" : "168, 85, 247";
            return (
                <div className="font-mono text-[10px] sm:text-[11px] leading-normal text-slate-400 select-none">
                    <div className="text-slate-500">{"/* Nisschay Design Variables */"}</div>
                    <div>
                        <span className="text-purple-400">:root</span> {"{"}
                    </div>
                    <div>
                        &nbsp;&nbsp;<span className="text-blue-400">--theme-accent</span>: <span className="text-emerald-400">&quot;{hex}&quot;</span>;
                    </div>
                    <div>
                        &nbsp;&nbsp;<span className="text-blue-400">--glow-color</span>: <span className="text-emerald-400">&quot;rgba({rgb}, 0.45)&quot;</span>;
                    </div>
                    <div>
                        &nbsp;&nbsp;<span className="text-blue-400">--border-radius</span>: <span className="text-emerald-400">&quot;1.5rem&quot;</span>;
                    </div>
                    <div>
                        &nbsp;&nbsp;<span className="text-blue-400">--backdrop-blur</span>: <span className="text-emerald-400">&quot;12px&quot;</span>;
                    </div>
                    <div>
                        &nbsp;&nbsp;<span className="text-blue-400">--ui-animation-speed</span>: <span className="text-cyan-400">0.3s</span>;
                    </div>
                    <div>{"}"}</div>
                    
                    <div className="mt-3">
                        <span className="text-purple-400">.glass-preview</span> {"{"}
                    </div>
                    <div>&nbsp;&nbsp;<span className="text-blue-400">background</span>: <span className="text-slate-200">rgba(255, 255, 255, 0.03)</span>;</div>
                    <div>&nbsp;&nbsp;<span className="text-blue-400">backdrop-filter</span>: <span className="text-purple-400">blur</span>(<span className="text-slate-200">var(--backdrop-blur)</span>);</div>
                    <div>&nbsp;&nbsp;<span className="text-blue-400">border</span>: <span className="text-slate-200">1px solid var(--theme-accent)</span>;</div>
                    <div>&nbsp;&nbsp;<span className="text-blue-400">box-shadow</span>: <span className="text-slate-200">0 0 15px var(--glow-color)</span>;</div>
                    <div>{"}"}</div>
                </div>
            );
        } else {
            return (
                <div className="font-mono text-[10px] sm:text-[11px] leading-normal text-slate-400 select-none">
                    <div>
                        <span className="text-pink-500">import</span> {"{"} encrypt {"}"} <span className="text-pink-500">from</span> <span className="text-emerald-400">&quot;nisschay-crypto&quot;</span>;
                    </div>
                    <div className="mt-2 text-slate-500">{"// JWT Authenticator Middleware"}</div>
                    <div>
                        <span className="text-purple-400">export async function</span> <span className="text-blue-400">middleware</span>(req) {"{"}
                    </div>
                    <div>
                        &nbsp;&nbsp;<span className="text-purple-400">const</span> token = req.headers.authorization;
                    </div>
                    <div>
                        &nbsp;&nbsp;<span className="text-purple-400">const</span> isValid = <span className="text-purple-400">await</span> <span className="text-blue-400">verifyToken</span>(token);
                    </div>
                    <br />
                    <div>
                        &nbsp;&nbsp;<span className="text-purple-400">if</span> (!isValid) {"{"}
                    </div>
                    <div>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return new</span> <span className="text-yellow-400">Response</span>(<span className="text-emerald-400">&quot;Unauthorized&quot;</span>, {"{"}
                    </div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;status: <span className="text-cyan-400">401</span></div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;{"}"});</div>
                    <div>&nbsp;&nbsp;{"}"}</div>
                    <div>
                        &nbsp;&nbsp;<span className="text-purple-400">return</span> NextResponse.<span className="text-blue-400">next</span>();
                    </div>
                    <div>{"}"}</div>
                </div>
            );
        }
    };

    const accentStyles = {
        blue: {
            border: "border-blue-500/30",
            bg: "bg-blue-500/10",
            text: "text-blue-400",
            glow: "shadow-[0_0_20px_rgba(59,130,246,0.3)]",
            dot: "bg-blue-400"
        },
        emerald: {
            border: "border-emerald-500/30",
            bg: "bg-emerald-500/10",
            text: "text-emerald-400",
            glow: "shadow-[0_0_20px_rgba(16,185,129,0.3)]",
            dot: "bg-emerald-400"
        },
        purple: {
            border: "border-purple-500/30",
            bg: "bg-purple-500/10",
            text: "text-purple-400",
            glow: "shadow-[0_0_20px_rgba(168,85,247,0.3)]",
            dot: "bg-purple-400"
        }
    };

    const currentTheme = accentStyles[themeColor];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full min-h-[260px] md:h-[340px] bg-[#070b19]/95 border border-slate-800 rounded-2xl sm:rounded-[2rem] relative overflow-hidden shadow-2xl flex flex-col justify-between"
        >
            {/* Inner Grid layout lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c1224_1px,transparent_1px),linear-gradient(to_bottom,#0c1224_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none opacity-40 z-0" />

            {/* Top Chrome Header Bar */}
            <div className="h-10 bg-slate-950/80 border-b border-slate-900 px-4 flex items-center justify-between z-10 relative">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="hidden sm:inline-block ml-3 text-[10px] font-mono text-slate-500 tracking-wider">
                        src/nisschay/engine.config
                    </span>
                </div>

                {/* Active Tabs selectors */}
                <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
                    {(["database", "theme", "auth"] as TabType[]).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-3 py-1 rounded-md text-[10px] sm:text-xs font-mono transition-all duration-200 ${
                                activeTab === tab 
                                    ? "text-blue-400 bg-slate-900 border border-slate-800"
                                    : "text-slate-500 hover:text-slate-300"
                            }`}
                        >
                            {tab === "database" && "Database.ts"}
                            {tab === "theme" && "Theme.css"}
                            {tab === "auth" && "Auth.tsx"}
                        </button>
                    ))}
                </div>
            </div>

            {/* Dual Pane Workspace Content Panel */}
            <div className="flex-1 flex flex-col md:flex-row overflow-hidden z-10 relative">
                
                {/* L-Pane: Simulated IDE Code Panel */}
                <div className="w-full md:w-[48%] border-b md:border-b-0 md:border-r border-slate-900 p-3.5 sm:p-4 overflow-hidden md:overflow-y-auto bg-slate-950/20">
                    <div className="flex items-center gap-1.5 mb-3 select-none">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
                        <span className="text-[9px] font-mono font-bold text-slate-600 uppercase tracking-widest">
                            Source Code
                        </span>
                    </div>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: -6 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 6 }}
                            transition={{ duration: 0.25 }}
                        >
                            {renderCodeContent()}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* R-Pane: Simulated Dynamic Interactive Live Preview UI */}
                <div className="hidden md:flex md:w-[52%] p-3.5 sm:p-4 flex-col bg-slate-950/40 relative">
                    <div className="flex items-center justify-between mb-3 select-none">
                        <div className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[9px] font-mono font-bold text-slate-600 uppercase tracking-widest">
                                Live UI Sandbox
                            </span>
                        </div>
                        <span className="text-[8px] font-mono text-slate-500 uppercase tracking-wider">
                            PORT // 8080
                        </span>
                    </div>

                    {/* Interactive Sandboxes */}
                    <div className="flex-1 flex flex-col justify-center">
                        <AnimatePresence mode="wait">
                            
                            {/* DB TAB PREVIEW */}
                            {activeTab === "database" && (
                                <motion.div
                                    key="db-preview"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="flex flex-col items-center justify-center h-full space-y-3 py-1"
                                >
                                    {/* Cluster topology visualization */}
                                    <div className="w-full max-w-[170px] h-[80px] relative flex items-center justify-center bg-slate-950/60 rounded-2xl border border-slate-900">
                                        <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                            <circle cx="50%" cy="50%" r="25" fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />
                                            {dbStatus === "replicating" && (
                                                <motion.circle 
                                                    cx="50%" 
                                                    cy="50%" 
                                                    r="25" 
                                                    fill="none" 
                                                    stroke="#3b82f6" 
                                                    strokeWidth="1.5" 
                                                    strokeDasharray="8 40"
                                                    animate={{ rotate: 360 }}
                                                    transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                                                />
                                            )}
                                        </svg>

                                        <div className="absolute w-7 h-7 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shadow-lg">
                                            <FiDatabase className="w-3.5 h-3.5 text-blue-400" />
                                        </div>

                                        {/* Replicated Satellite nodes */}
                                        <div className="absolute -top-1 left-2 w-4 h-4 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center">
                                            <div className={`w-1.5 h-1.5 rounded-full ${dbStatus === "success" ? "bg-emerald-400" : "bg-slate-600"}`} />
                                        </div>
                                        <div className="absolute -bottom-1 right-2 w-4 h-4 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center">
                                            <div className={`w-1.5 h-1.5 rounded-full ${dbStatus === "success" ? "bg-emerald-400" : "bg-slate-600"}`} />
                                        </div>
                                    </div>

                                    {/* Interactive Sync Trigger Button */}
                                    <button
                                        onClick={handleReplication}
                                        disabled={dbStatus === "replicating"}
                                        className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-[10px] font-mono tracking-wider font-semibold active:scale-95 transition-all shadow-md flex items-center gap-2 disabled:opacity-50"
                                    >
                                        <FiRefreshCw className={`text-[10px] ${dbStatus === "replicating" ? "animate-spin" : ""}`} />
                                        {dbStatus === "idle" && "EXECUTE AUTO-SYNC"}
                                        {dbStatus === "replicating" && `REPLICATING ${Math.round(dbProgress)}%`}
                                        {dbStatus === "success" && "REPLICATION SYNCD"}
                                    </button>
                                </motion.div>
                            )}

                            {/* THEME ACCENT TAB PREVIEW */}
                            {activeTab === "theme" && (
                                <motion.div
                                    key="theme-preview"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="flex flex-col items-center justify-center h-full space-y-3 py-1"
                                >
                                    <div className="flex gap-2">
                                        {(["blue", "emerald", "purple"] as ThemeColor[]).map((c) => (
                                            <button
                                                key={c}
                                                onClick={() => setThemeColor(c)}
                                                className={`w-6 h-6 rounded-full border-2 transition-all flex items-center justify-center ${
                                                    themeColor === c ? "border-white scale-110 shadow-lg" : "border-transparent opacity-60 hover:opacity-100"
                                                } ${
                                                    c === "blue" ? "bg-blue-500" : c === "emerald" ? "bg-emerald-500" : "bg-purple-500"
                                                }`}
                                            >
                                                {themeColor === c && <FiCheck className="text-white text-[10px]" />}
                                            </button>
                                        ))}
                                    </div>

                                    <div className={`w-full max-w-[190px] p-2.5 rounded-xl border backdrop-blur-md transition-all duration-300 ${currentTheme.border} ${currentTheme.bg} ${currentTheme.glow}`}>
                                        <div className="flex items-center justify-between mb-1.5">
                                            <div className="flex items-center gap-1.5">
                                                <div className={`w-2 h-2 rounded-full ${currentTheme.dot}`} />
                                                <span className={`text-[10px] font-mono font-bold ${currentTheme.text}`}>Dynamic Card</span>
                                            </div>
                                            <FiSliders className={`text-[10px] ${currentTheme.text}`} />
                                        </div>
                                        <div className="w-full bg-slate-900/50 h-1.5 rounded-full overflow-hidden">
                                            <div className={`h-full w-2/3 ${currentTheme.dot}`} />
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* AUTH/SECURITY TAB PREVIEW */}
                            {activeTab === "auth" && (
                                <motion.div
                                    key="auth-preview"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="flex flex-col items-center justify-center h-full space-y-2 py-1"
                                >
                                    <div className="w-full max-w-[210px] h-[85px] bg-slate-950/80 rounded-xl border border-slate-900 p-2 font-mono text-[8px] flex flex-col justify-between overflow-hidden">
                                        <div className="space-y-1 overflow-y-auto">
                                            {authLogs.length === 0 ? (
                                                <div className="text-slate-600 flex items-center gap-1.5">
                                                    <FiLock className="text-[10px]" />
                                                    <span>STANDBY // Awaiting handshake request</span>
                                                </div>
                                            ) : (
                                                authLogs.map((log, index) => {
                                                    const isSuccess = log.startsWith("[SUCCESS]");
                                                    return (
                                                        <div 
                                                            key={index} 
                                                            className={isSuccess ? "text-emerald-400 font-bold" : "text-slate-400"}
                                                        >
                                                            {log}
                                                        </div>
                                                    );
                                                })
                                            )}
                                        </div>

                                        {authStatus === "granted" && (
                                            <motion.div 
                                                initial={{ scale: 0.95 }}
                                                animate={{ scale: 1 }}
                                                className="flex items-center gap-2 border border-emerald-500/30 bg-emerald-500/5 p-1.5 rounded-lg text-emerald-400 mt-2 font-bold"
                                            >
                                                <FiUnlock className="text-xs text-emerald-400 animate-bounce" />
                                                <span>AUTH_TOKEN_LEASE_ACQUIRED</span>
                                            </motion.div>
                                        )}
                                    </div>

                                    <button
                                        onClick={handleAuthScan}
                                        disabled={authStatus === "scanning"}
                                        className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl text-[10px] font-mono tracking-wider font-semibold active:scale-95 transition-all shadow-md flex items-center gap-2 disabled:opacity-50"
                                    >
                                        <FiShield className="text-[10px]" />
                                        {authStatus === "idle" && "VALIDATE SECURITY HANDSHAKE"}
                                        {authStatus === "scanning" && "VALIDATING ENCRYPTIONS..."}
                                        {authStatus === "granted" && "ACCESS GRANTED"}
                                    </button>
                                </motion.div>
                            )}

                        </AnimatePresence>
                    </div>
                </div>

            </div>

            {/* Bottom Readout Info */}
            <div className="h-7 bg-slate-950/80 border-t border-slate-900/60 px-5 flex items-center justify-between text-[8px] font-mono text-slate-500 select-none z-10 relative">
                <span>STATUS // ONLINE</span>
                <span className="text-[9px] text-blue-500/80 animate-pulse font-bold">
                    NISSCHAY_ENGINE_V2.0
                </span>
            </div>
        </motion.div>
    );
}
