"use client";

import React, { useState } from "react";
import Link from "next/link";
import TechParticlesBackground from "@/components/TechParticlesBackground";
import { FiSliders, FiEye, FiArrowLeft, FiRefreshCw } from "react-icons/fi";
import Image from "next/image";

export default function ParticlesDemoPage() {
    const [count, setCount] = useState(55);
    const [distance, setDistance] = useState(130);
    const [speed, setSpeed] = useState(0.55);
    const [opacity, setOpacity] = useState(0.24);
    const [theme, setTheme] = useState<"blue" | "cyan" | "navy">("blue");
    const [showHeroMock, setShowHeroMock] = useState(true);

    const themeColors = {
        blue: { p: "0, 87, 254", l: "0, 87, 254", name: "Electric Blue (Nisschay Official)" },
        cyan: { p: "6, 182, 212", l: "14, 165, 233", name: "Cyber Sky Cyan" },
        navy: { p: "7, 20, 47", l: "0, 87, 254", name: "Deep Navy + Blue Links" },
    };

    return (
        <main className="relative min-h-screen bg-[#F8F9FC] text-[#000c24] overflow-hidden">
            {/* Live Particles Canvas Component in Background */}
            <div className="absolute inset-0 z-0">
                <TechParticlesBackground
                    key={`${count}-${distance}-${speed}-${opacity}-${theme}`}
                    particleCount={count}
                    maxDistance={distance}
                    speed={speed}
                    opacity={opacity}
                    particleColor={themeColors[theme].p}
                    lineColor={themeColors[theme].l}
                    interactive={true}
                />
            </div>

            {/* Top Bar Navigation */}
            <header className="relative z-30 w-full px-6 py-4 flex items-center justify-between border-b border-slate-200/80 bg-white/70 backdrop-blur-md">
                <div className="flex items-center gap-3">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-[#0057fe] transition-colors"
                    >
                        <FiArrowLeft className="w-4 h-4" />
                        <span>Back to Website</span>
                    </Link>
                    <span className="text-slate-300">|</span>
                    <span className="text-xs font-mono font-bold tracking-wider text-[#0057fe] uppercase">
                        tsParticles Constellation Demo
                    </span>
                </div>

                <div className="flex items-center gap-2.5">
                    <button
                        onClick={() => setShowHeroMock(!showHeroMock)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                            showHeroMock
                                ? "bg-[#0057fe] text-white border-[#0057fe] shadow-sm"
                                : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                        }`}
                    >
                        <FiEye className="w-3.5 h-3.5" />
                        <span>{showHeroMock ? "Viewing: Hero Mockup" : "Viewing: Fullscreen Canvas"}</span>
                    </button>
                </div>
            </header>

            {/* Main Stage */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 py-8 sm:py-12">
                {showHeroMock ? (
                    /* Real Nisschay Hero Layout with Particles behind it */
                    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[500px]">
                        <div className="lg:col-span-7 space-y-5">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-slate-200/90 text-xs font-mono font-semibold uppercase tracking-[0.16em] text-slate-700 shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-[#0057fe]" />
                                <span>Interactive Background Demonstration</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black font-display text-[#000c24] tracking-tight leading-[1.12]">
                                Technology Solutions That Move Your{" "}
                                <span className="bg-gradient-to-r from-[#0057fe] via-[#206aff] to-[#0047d6] bg-clip-text text-transparent">
                                    Business Forward
                                </span>
                            </h1>

                            <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed max-w-xl">
                                Move your mouse across the screen to see how the tech particles react, connect, and form dynamic constellation networks.
                            </p>

                            <div className="flex items-center gap-4 pt-2">
                                <button className="px-6 py-3.5 rounded-xl bg-[#0057fe] text-white font-semibold text-sm shadow-[0_4px_14px_rgba(0,87,254,0.35)] hover:shadow-[0_6px_20px_rgba(0,87,254,0.45)] transition-all">
                                    Start a Project →
                                </button>
                                <button className="px-5 py-3.5 rounded-xl bg-white/80 border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-white transition-all">
                                    Explore All Services
                                </button>
                            </div>
                        </div>

                        <div className="lg:col-span-5 flex justify-center">
                            <div className="relative w-full max-w-[420px] transition-transform duration-500 hover:scale-[1.01]">
                                <Image
                                    src="/nisschay-realistic-sketch.webp"
                                    alt="Nisschay Realistic Concept Sketch"
                                    width={997}
                                    height={776}
                                    priority
                                    className="w-full h-auto object-contain select-none"
                                />
                            </div>
                        </div>
                    </div>
                ) : (
                    /* Fullscreen Canvas Mode */
                    <div className="flex flex-col items-center justify-center text-center py-20">
                        <div className="p-8 rounded-3xl bg-white/75 backdrop-blur-md border border-slate-200/90 shadow-lg max-w-lg">
                            <h2 className="text-2xl font-bold font-display text-[#000c24] mb-2">
                                Interactive Constellation Canvas
                            </h2>
                            <p className="text-sm text-slate-600 mb-4">
                                Move your cursor anywhere on the screen to watch nodes connect and respond to your movement.
                            </p>
                            <span className="text-xs font-mono text-[#0057fe] font-bold">
                                {count} particles active · {distance}px max link distance
                            </span>
                        </div>
                    </div>
                )}

                {/* Floating Interactive Settings Drawer */}
                <aside className="fixed bottom-6 right-6 z-40 w-[320px] sm:w-[350px] p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-[0_12px_32px_rgba(7,20,47,0.12)] space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                        <div className="flex items-center gap-2">
                            <FiSliders className="w-4 h-4 text-[#0057fe]" />
                            <span className="text-xs font-bold font-mono tracking-wider uppercase text-[#000c24]">
                                Particle Controls
                            </span>
                        </div>
                        <button
                            onClick={() => {
                                setCount(55);
                                setDistance(130);
                                setSpeed(0.55);
                                setOpacity(0.24);
                                setTheme("blue");
                            }}
                            title="Reset to recommended defaults"
                            className="text-slate-400 hover:text-slate-700 transition-colors p-1"
                        >
                            <FiRefreshCw className="w-3.5 h-3.5" />
                        </button>
                    </div>

                    {/* Color Theme Selector */}
                    <div className="space-y-1.5">
                        <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                            Color Theme
                        </label>
                        <div className="grid grid-cols-3 gap-1.5">
                            {(["blue", "cyan", "navy"] as const).map((t) => (
                                <button
                                    key={t}
                                    onClick={() => setTheme(t)}
                                    className={`py-1.5 px-2 rounded-lg text-xs font-medium border text-center capitalize transition-all ${
                                        theme === t
                                            ? "border-[#0057fe] bg-blue-50/80 text-[#0057fe] font-bold"
                                            : "border-slate-200 text-slate-600 hover:bg-slate-50"
                                    }`}
                                >
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Particle Count Slider */}
                    <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                            <span className="text-slate-500 font-medium">Particle Count</span>
                            <span className="font-mono font-bold text-[#0057fe]">{count}</span>
                        </div>
                        <input
                            type="range"
                            min="20"
                            max="110"
                            step="5"
                            value={count}
                            onChange={(e) => setCount(Number(e.target.value))}
                            className="w-full accent-[#0057fe] cursor-pointer"
                        />
                    </div>

                    {/* Connection Distance Slider */}
                    <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                            <span className="text-slate-500 font-medium">Link Distance</span>
                            <span className="font-mono font-bold text-[#0057fe]">{distance}px</span>
                        </div>
                        <input
                            type="range"
                            min="70"
                            max="200"
                            step="10"
                            value={distance}
                            onChange={(e) => setDistance(Number(e.target.value))}
                            className="w-full accent-[#0057fe] cursor-pointer"
                        />
                    </div>

                    {/* Speed Slider */}
                    <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                            <span className="text-slate-500 font-medium">Drift Speed</span>
                            <span className="font-mono font-bold text-[#0057fe]">{speed.toFixed(2)}x</span>
                        </div>
                        <input
                            type="range"
                            min="0.1"
                            max="1.5"
                            step="0.05"
                            value={speed}
                            onChange={(e) => setSpeed(Number(e.target.value))}
                            className="w-full accent-[#0057fe] cursor-pointer"
                        />
                    </div>

                    {/* Opacity Slider */}
                    <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                            <span className="text-slate-500 font-medium">Opacity (Delicacy)</span>
                            <span className="font-mono font-bold text-[#0057fe]">
                                {Math.round(opacity * 100)}%
                            </span>
                        </div>
                        <input
                            type="range"
                            min="0.08"
                            max="0.5"
                            step="0.02"
                            value={opacity}
                            onChange={(e) => setOpacity(Number(e.target.value))}
                            className="w-full accent-[#0057fe] cursor-pointer"
                        />
                    </div>
                </aside>
            </div>
        </main>
    );
}
