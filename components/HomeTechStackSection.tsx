"use client";
import { useState } from "react";
import Image from "next/image";
import { IconType } from "react-icons";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma, FaJava, FaPython, FaDocker
} from "react-icons/fa";
import {
    SiNextdotjs, SiTailwindcss, SiTypescript, SiSpringboot, SiOracle, SiOpenai, SiTensorflow
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

const colorMap: Record<string, string> = {
    'text-orange-500': '#f97316',
    'text-blue-500': '#3b82f6',
    'text-yellow-400': '#eab308',
    'text-cyan-400': '#06b6d4',
    'text-white': '#0f172a', // Use dark charcoal instead of white variant text for contrast on light background
    'text-cyan-300': '#0891b2',
    'text-blue-600': '#2563eb',
    'text-pink-500': '#db2777',
    'text-red-500': '#ef4444',
    'text-green-500': '#22c55e',
    'text-red-600': '#dc2626',
    'text-blue-400': '#60a5fa',
    'text-yellow-300': '#ca8a04',
    'text-green-300': '#16a34a',
    'text-orange-400': '#fb923c',
};

const techNodes = [
    { name: "Next.js", icon: SiNextdotjs, color: "text-white", x: 15, y: 15, delay: 0, duration: 6, category: "React Framework", kpi: "Sub-second FCP" },
    { name: "React", icon: FaReact, color: "text-cyan-400", x: 45, y: 10, delay: 1, duration: 7, category: "UI Library", kpi: "60fps animations" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600", x: 75, y: 18, delay: 0.5, duration: 5.5, category: "Programming Language", kpi: "Zero type errors" },
    { name: "Figma", icon: FaFigma, color: "text-pink-500", x: 10, y: 40, delay: 1.5, duration: 8, category: "UX Design Platform", kpi: "Pixel-perfect handoff" },
    
    { name: "Java", icon: FaJava, color: "text-red-500", x: 38, y: 32, delay: 2, duration: 6.5, category: "Backend Engine", kpi: "High-concurrency VM" },
    { name: "Spring Boot", icon: SiSpringboot, color: "text-green-500", x: 68, y: 35, delay: 0.2, duration: 7.2, category: "Enterprise Framework", kpi: "Secure transaction logs" },
    { name: "Docker", icon: FaDocker, color: "text-blue-500", x: 20, y: 62, delay: 0.8, duration: 5.8, category: "Container Platform", kpi: "Unified dev/prod envs" },
    { name: "Python", icon: FaPython, color: "text-yellow-300", x: 50, y: 55, delay: 1.2, duration: 6.8, category: "Data & ML Language", kpi: "Bespoke automation" },
    
    { name: "JavaScript", icon: FaJs, color: "text-yellow-400", x: 80, y: 50, delay: 2.2, duration: 7.5, category: "Scripting Platform", kpi: "Non-blocking execution" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-300", x: 12, y: 80, delay: 0.4, duration: 6.2, category: "CSS Utility Engine", kpi: "-85% design style lag" },
    { name: "Azure", icon: VscAzure, color: "text-blue-400", x: 42, y: 78, delay: 1.6, duration: 8.5, category: "Cloud Infrastructure", kpi: "99.99% SLA availability" },
    { name: "Oracle", icon: SiOracle, color: "text-red-600", x: 72, y: 72, delay: 0.9, duration: 6.9, category: "Relational Database", kpi: "Sub-millisecond query loops" },
    
    { name: "OpenAI", icon: SiOpenai, color: "text-green-300", x: 28, y: 48, delay: 1.7, duration: 7.1, category: "AI Integration API", kpi: "Cognitive agent logic" },
    { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-400", x: 60, y: 60, delay: 0.3, duration: 5.9, category: "Deep Learning Engine", kpi: "Optimized GPU training" },
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500", x: 55, y: 22, delay: 2.4, duration: 6.4, category: "Semantic Markup", kpi: "W3C conformant layout" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500", x: 85, y: 82, delay: 1.1, duration: 7.8, category: "Layout Styling", kpi: "GPU accelerated layouts" }
];

export default function HomeTechStackSection() {
    return (
        <section className="relative w-full py-24 px-4 md:px-8 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                
                {/* Left Side: Header & Illustration */}
                <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <span className="text-xs font-mono uppercase tracking-[0.25em] text-blue-600 block mb-4">
                        [ Our Stack Ecosystem ]
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.15] mb-6 font-display"
                        style={{
                            fontWeight: 400,
                            letterSpacing: "-0.01em"
                        }}
                    >
                        Modern Stack. <br className="hidden lg:inline"/>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                            Bespoke Performance.
                        </span>
                    </h2>
                    <p className="text-base text-gray-500 max-w-md mb-8 leading-relaxed font-light">
                        We select and orchestrate optimal technology profiles, building robust software pipelines directly aligned with your growth parameters.
                    </p>
                    
                    {/* Developer Illustration Core */}
                    <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden bg-slate-950/[0.02] border border-slate-100/80 p-4 shadow-xl flex items-center justify-center">
                        {/* Glowing backdrop */}
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-blue-500/5 blur-2xl"></div>
                        {/* Image */}
                        <Image 
                            src="/developer-tech-galaxy.webp" 
                            alt="Developer tech constellation" 
                            fill
                            className="object-cover rounded-2xl relative z-10 filter drop-shadow-2xl select-none pointer-events-none" 
                        />
                    </div>
                </div>
                
                {/* Right Side: Floating Tech Galaxy Cloud */}
                <div className="lg:col-span-7 relative w-full h-[520px] md:h-[620px] bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden flex items-center justify-center shadow-sm">
                    
                    {/* Floating Field Container */}
                    <div className="absolute inset-0 p-6">
                        {techNodes.map((node, idx) => (
                            <FloatingTechNode key={idx} node={node} />
                        ))}
                    </div>
                </div>
                
            </div>
        </section>
    );
}

function FloatingTechNode({ node }: { node: { name: string; icon: IconType; color: string; x: number; y: number; delay: number; duration: number; category: string; kpi: string } }) {
    const [isHovered, setIsHovered] = useState(false);
    const brandColor = colorMap[node.color] || '#64748b';

    return (
        <div 
            className="absolute"
            style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: "translate(-50%, -50%)",
                zIndex: isHovered ? 50 : 10
            }}
        >
            <motion.div
                animate={isHovered ? { y: 0, x: 0 } : { 
                    y: [0, -12, 0],
                    x: [0, 5, 0]
                }}
                transition={{
                    repeat: Infinity,
                    duration: node.duration,
                    delay: node.delay,
                    ease: "easeInOut"
                }}
                className="relative"
            >
                {/* Micro Tooltip */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: -54, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute left-1/2 -translate-x-1/2 w-48 bg-slate-950/95 border border-slate-800 backdrop-blur-md rounded-2xl p-3.5 shadow-2xl text-left font-mono z-50 pointer-events-none"
                            style={{ transformOrigin: "bottom center" }}
                        >
                            <p className="text-[9px] text-blue-400 font-bold uppercase tracking-widest mb-0.5">{node.category}</p>
                            <p className="text-xs text-slate-100 font-extrabold leading-tight mb-1">{node.name}</p>
                            <p className="text-[10px] text-emerald-400 font-medium leading-none">{node.kpi}</p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Pill */}
                <div
                    className="flex items-center gap-2.5 px-4.5 py-2.5 rounded-full border bg-transparent cursor-pointer transition-all duration-300 hover:scale-108"
                    style={{
                        borderColor: isHovered ? brandColor : 'rgba(148, 163, 184, 0.25)',
                        boxShadow: isHovered 
                            ? `0 10px 20px -8px ${brandColor}35, inset 0 0 10px 1px ${brandColor}10`
                            : 'none',
                        background: isHovered ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.35)',
                        opacity: isHovered ? 1 : 0.75,
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <node.icon
                        className="w-4.5 h-4.5 transition-all duration-300"
                        style={{ 
                            color: isHovered ? brandColor : '#94a3b8',
                            transform: isHovered ? 'scale(1.08)' : 'scale(1)'
                        }}
                    />
                    <span
                        className="font-semibold text-xs md:text-sm transition-colors duration-300 whitespace-nowrap"
                        style={{ 
                            color: isHovered ? brandColor : '#475569',
                            fontFamily: "var(--font-inter)"
                        }}
                    >
                        {node.name}
                    </span>
                </div>

            </motion.div>
        </div>
    );
}
