"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const showcaseImages = [
    "/assets/projects/artistsland.webp",
    "/assets/projects/helper.webp",
    "/assets/projects/pickme.webp",
    "/assets/projects/nono.webp",
];

export default function WorkTeaserSection() {
    const [isHovered, setIsHovered] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Slideshow logic: only ticks rapidly when hovered
    useEffect(() => {
        if (!isHovered) return;
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % showcaseImages.length);
        }, 150); // fast flicker speed (approx 7 frames a sec)
        return () => clearInterval(interval);
    }, [isHovered]);

    return (
        <section 
            className="relative py-24 md:py-32 bg-white overflow-hidden"
            id="work-teaser"
        >
            <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-16">
                    <motion.span
                        className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-6 tracking-wider uppercase select-none font-mono"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        [ KINETIC STREAM ]
                    </motion.span>
                    
                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.15] mb-6 font-display"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Engineered Interfaces. <br className="sm:hidden" />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                            Curated Launches.
                        </span>
                    </motion.h2>
                    <motion.p
                        className="text-base md:text-lg text-gray-500 max-w-xl leading-relaxed font-light mt-2"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        A high-speed glimpse at the interfaces, databases, and microservices we develop. Tap below to pause and inspect the full portfolio.
                    </motion.p>
                </div>

                {/* Cinematic Wide Banner */}
                <Link 
                    href="/portfolio"
                    className="block w-full max-w-5xl h-[260px] sm:h-[320px] md:h-[400px] bg-[#030712] border border-slate-805 rounded-[2.5rem] relative overflow-hidden flex items-center justify-center cursor-pointer group shadow-2xl transition-all duration-500 hover:border-slate-700 hover:scale-[1.01]"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Background blueprint grid */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
                    
                    {/* Render slideshow images if hovered */}
                    <div className="absolute inset-0 w-full h-full">
                        {showcaseImages.map((img, idx) => (
                            <div
                                key={idx}
                                className={`absolute inset-0 transition-opacity duration-[75ms] ease-in-out ${
                                    isHovered && currentImageIndex === idx ? "opacity-100 scale-100" : "opacity-0 scale-105"
                                }`}
                            >
                                <Image
                                    src={img}
                                    alt="Kinetic Portfolio Slide"
                                    fill
                                    className="object-cover opacity-80"
                                    priority
                                />
                                {/* Blue filter overlay blend */}
                                <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#030712]/90 via-[#030712]/30 to-[#030712]/20" />
                            </div>
                        ))}
                    </div>

                    {/* Holographic default state (when not hovered) */}
                    <div 
                        className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-center transition-all duration-500 z-20 ${
                            isHovered ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"
                        }`}
                    >
                        {/* Glow halo */}
                        <div className="absolute w-64 h-64 rounded-full bg-blue-500/[0.02] border border-blue-500/10 flex items-center justify-center">
                            <motion.div 
                                className="absolute inset-0 rounded-full border border-blue-500/20"
                                animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            />
                            <Play className="w-8 h-8 text-blue-500/50 animate-pulse ml-1" />
                        </div>
                        {/* Prompt */}
                        <div className="relative z-30 flex flex-col items-center gap-2 mt-20">
                            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-blue-400 font-semibold animate-pulse border border-blue-500/20 px-3 py-1 rounded bg-blue-950/20">
                                system_ready: hover to stream details
                            </span>
                            <span className="font-mono text-slate-500 text-[10px] select-none mt-1">
                                Secure local datastream sync - 0xb412
                            </span>
                        </div>
                    </div>

                    {/* Laser scanning filter overlays (always visible but changes on hover) */}
                    <div className="absolute inset-0 border-[15px] border-white/5 rounded-[2.5rem] pointer-events-none z-30" />
                    
                    {/* Hover Inspect Text Overlay */}
                    <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-colors duration-500 flex items-center justify-center z-40 pointer-events-none">
                        <span className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 px-5 py-3 rounded-2xl bg-slate-900/90 border border-slate-800 text-[10px] text-blue-400 font-bold uppercase tracking-widest shadow-2xl font-mono flex items-center gap-2.5">
                            <Eye className="w-4 h-4 text-blue-400" />
                            <span>[ View Portfolio Details ]</span>
                        </span>
                    </div>
                </Link>

                {/* Bottom CTA Link */}
                <div className="mt-16 text-center">
                    <Link href="/portfolio" className="group/btn relative inline-flex items-center gap-3.5 px-8 py-4.5 rounded-full border border-gray-200 bg-white text-gray-900 overflow-hidden transition-all duration-300 hover:bg-slate-950 hover:border-slate-950 hover:text-white hover:px-10 active:scale-95">
                        <span className="relative z-10 text-sm font-semibold transition-colors duration-300">
                            See All Projects
                        </span>
                        <ArrowRight className="relative z-10 w-4 h-4 transition-all duration-300 group-hover/btn:translate-x-1.5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
