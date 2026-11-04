"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiAward, FiActivity, FiRotateCw, FiCode } from "react-icons/fi";
import { 
    LaunchesStatsWidget, SlackSyncWidget, 
    ReleasePipelineWidget, AuditComparisonWidget 
} from "./WhyChooseUsPreviews";

const reasons = [
    {
        id: 0,
        icon: FiAward,
        title: "Proven Work & Satisfaction",
        subtitle: "98% Satisfaction",
        description: "With over 25 successful startup launches, we prioritize performance, security, and high-fidelity code. Our satisfaction rating reflects our commitment to zero-compromise product engineering."
    },
    {
        id: 1,
        icon: FiActivity,
        title: "Active Daily Collaboration",
        subtitle: "100% Active Sync",
        description: "We work actively on your project, integrating directly into your Slack channels, holding daily standup updates, and sync-editing Figma layouts so you always know where we are."
    },
    {
        id: 2,
        icon: FiRotateCw,
        title: "Weekly Release Cadence",
        subtitle: "Fast Friday Ships",
        description: "We compile and deploy progress to your active staging environment every Friday. This weekly feedback loop lets you touch, test, and iterate on actual software constantly."
    },
    {
        id: 3,
        icon: FiCode,
        title: "Bespoke Product Engineering",
        subtitle: "100% Custom Code",
        description: "We code from first principles. Whether deploying scalable SaaS systems, building custom databases, or writing intelligent AI pipelines, your product is crafted uniquely for your workflow."
    }
];

export default function WhyChooseUsSection() {
    const [activeTab, setActiveTab] = useState(0);

    const activeReason = reasons[activeTab];

    const renderProofWidget = (id: number) => {
        switch (id) {
            case 0: return <LaunchesStatsWidget />;
            case 1: return <SlackSyncWidget />;
            case 2: return <ReleasePipelineWidget />;
            case 3: return <AuditComparisonWidget />;
            default: return null;
        }
    };

    return (
        <section className="relative w-full py-20 md:py-28 bg-white overflow-hidden">

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
                
                {/* Section Header */}
                <div className="text-center space-y-3">
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600 block">
                        [ Engineering Excellence ]
                    </span>
                    <h2 
                        className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-[1.1]"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        Why Choose Nisschay?
                    </h2>
                    <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
                        Pure engineering execution, zero agency overhead.
                    </p>
                </div>

                {/* Dashboard Grid Layout */}
                <div className="grid lg:grid-cols-12 gap-8 items-stretch">
                    
                    {/* Left Column (Pill Selector Buttons) */}
                    <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
                        <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400 pl-3 mb-1 select-none">
                            📂 Value Pillars
                        </div>
                        {reasons.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeTab === item.id;
                            return (
                                <motion.button
                                    key={item.id}
                                    onClick={() => setActiveTab(item.id)}
                                    className={`w-full text-left relative p-5 rounded-2xl transition-all flex gap-4 z-10 border ${
                                        isActive 
                                            ? "text-white border-transparent" 
                                            : "text-gray-600 hover:text-gray-900 bg-white/90 hover:bg-gray-50 border-gray-100 hover:border-gray-200"
                                    }`}
                                    whileTap={{ scale: 0.99 }}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeWhyChooseTab"
                                            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl -z-10 shadow-lg"
                                            transition={{ type: "spring", stiffness: 300, damping: 26 }}
                                        />
                                    )}
                                    <div className={`p-3 h-fit rounded-xl ${isActive ? 'bg-white/15 text-white' : 'bg-blue-50/70 text-blue-600 border border-blue-100/30'}`}>
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1 min-w-0 space-y-1.5">
                                        <div className="flex flex-wrap gap-2 items-center">
                                            <span className={`inline-block px-2 py-0.5 rounded-md text-[8px] font-mono font-bold border transition-colors ${
                                                isActive 
                                                    ? 'bg-white/15 text-white border-white/20' 
                                                    : 'bg-blue-50/50 text-blue-600 border-blue-100/30'
                                            }`}>
                                                {item.subtitle}
                                            </span>
                                        </div>
                                        <h3 className={`text-base font-bold ${isActive ? 'text-white' : 'text-gray-900'}`}>
                                            {item.title}
                                        </h3>
                                        <p className={`text-xs font-light leading-relaxed ${isActive ? 'text-white/80' : 'text-gray-500'}`}>
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.button>
                            );
                        })}
                    </div>

                    {/* Right Column (Interactive Proof Viewport) */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                        <div className="bg-white border border-gray-200 shadow-xl rounded-3xl overflow-hidden relative z-10 flex flex-col min-h-[400px]">
                            
                            {/* Header Bar */}
                            <div className="bg-gray-50 border-b border-gray-200/80 px-4 py-3 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="flex gap-1.5">
                                        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                                    </div>
                                    <span className="text-[10px] text-gray-400 font-mono select-none pl-2">
                                        src/guarantees/p_{activeReason.id + 1}_proof.ts
                                    </span>
                                </div>
                                <span className="text-[10px] font-mono text-gray-400">Value Guarantee</span>
                            </div>

                            {/* Viewport content */}
                            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between bg-gray-50/15 gap-6">
                                <div className="flex-1 flex items-center justify-center">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeTab}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ duration: 0.25 }}
                                            className="w-full max-w-sm"
                                        >
                                            {renderProofWidget(activeReason.id)}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                <div className="p-4 bg-gray-50 border border-gray-150 rounded-2xl">
                                    <h4 className="text-xs font-bold text-gray-900 mb-1 flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                        Engineering Verification
                                    </h4>
                                    <p className="text-[11px] text-gray-500 leading-relaxed font-light">
                                        This proof illustrates how Nisschay acts directly as a technical accelerator. We remove the operational fluff so we can focus 100% on clean delivery.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
