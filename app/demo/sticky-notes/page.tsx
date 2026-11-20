"use client";

import React from "react";
import Image from "next/image";
import { Caveat } from "next/font/google";

const caveat = Caveat({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
});

function ScrapbookTape({ 
    className = "", 
    angle = 0,
    style = {} 
}: { 
    className?: string; 
    angle?: number;
    style?: React.CSSProperties 
}) {
    return (
        <div
            className={`pointer-events-none z-20 ${className}`}
            style={{
                transform: angle ? `rotate(${angle}deg)` : undefined,
                clipPath: "polygon(0% 14%, 1.2% 5%, 2.2% 18%, 1.6% 2%, 3.2% 0%, 96.8% 0%, 98.2% 8%, 99.2% 2%, 100% 14%, 98.6% 36%, 100% 50%, 98.4% 68%, 100% 86%, 98.2% 98%, 96.8% 100%, 3.2% 100%, 1.8% 92%, 0% 96%, 1.2% 78%, 0% 64%, 1.4% 45%, 0% 30%)",
                backgroundImage: `
                    linear-gradient(116deg, transparent 40%, rgba(255,255,255,0.48) 46%, rgba(200,180,140,0.3) 48%, transparent 54%),
                    linear-gradient(108deg, rgba(235, 220, 192, 0.75) 0%, rgba(246, 237, 218, 0.86) 22%, rgba(230, 212, 180, 0.70) 52%, rgba(242, 230, 206, 0.82) 100%)
                `,
                boxShadow: "0 2px 5px rgba(50,30,10,0.12), inset 0 1px 1px rgba(255,255,255,0.6)",
                ...style
            }}
            aria-hidden="true"
        />
    );
}

function MiniTape({ className = "", angle = 0 }: { className?: string; angle?: number }) {
    return (
        <div
            className={`pointer-events-none z-20 ${className}`}
            style={{
                transform: angle ? `rotate(${angle}deg)` : undefined,
                clipPath: "polygon(0% 12%, 2% 4%, 98% 0%, 100% 12%, 98% 96%, 2% 100%, 0% 88%)",
                backgroundImage: `
                    linear-gradient(110deg, rgba(246, 237, 218, 0.9) 0%, rgba(235, 220, 192, 0.8) 100%)
                `,
                boxShadow: "0 1px 3px rgba(50,30,10,0.15), inset 0 1px 1px rgba(255,255,255,0.7)",
            }}
            aria-hidden="true"
        />
    );
}

function RealisticPaperclip({ className = "" }: { className?: string }) {
    return (
        <svg
            className={`pointer-events-none select-none ${className}`}
            width="24"
            height="50"
            viewBox="0 0 24 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <defs>
                <linearGradient id="silverWireGradDemo" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#475569" />
                    <stop offset="20%" stopColor="#94a3b8" />
                    <stop offset="45%" stopColor="#ffffff" />
                    <stop offset="70%" stopColor="#cbd5e1" />
                    <stop offset="100%" stopColor="#334155" />
                </linearGradient>
                <filter id="clipShadowDemo" x="-20%" y="-10%" width="150%" height="130%">
                    <feDropShadow dx="1.5" dy="2.5" stdDeviation="1.8" floodColor="#1e140a" floodOpacity="0.25" />
                </filter>
            </defs>
            <path
                d="M17 14 V38 C17 43 14 47 9.5 47 C5 47 2 43 2 38 V11 C2 5.5 5.5 2 10.5 2 C15.5 2 19 5.5 19 11 V37 C19 40.5 17 43 14 43 C11 43 9 40.5 9 37 V15"
                stroke="url(#silverWireGradDemo)"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#clipShadowDemo)"
            />
        </svg>
    );
}

// Realistic Paper Corner Curl component for bottom-right lift
function PaperCornerCurl() {
    return (
        <div className="absolute -bottom-1 -right-1 w-10 h-10 pointer-events-none overflow-hidden select-none">
            {/* Ambient drop shadow cast by lifting corner */}
            <div 
                className="absolute right-0 bottom-0 w-8 h-8 rounded-tl-full opacity-35"
                style={{
                    background: "radial-gradient(circle at 100% 100%, rgba(30,15,5,0.45) 0%, rgba(30,15,5,0.15) 50%, transparent 80%)",
                    transform: "translate(2px, 2px)"
                }}
            />
            {/* The folded/curled corner flap */}
            <div 
                className="absolute right-0 bottom-0 w-6 h-6"
                style={{
                    clipPath: "polygon(100% 0%, 0% 100%, 100% 100%)",
                    background: "linear-gradient(135deg, #DFD9CD 0%, #EDE7DC 45%, #FAF7F0 100%)",
                    boxShadow: "-2px -2px 5px rgba(30,20,10,0.14)"
                }}
            />
        </div>
    );
}

const NOTES_DATA = [
    {
        num: "STARTING POINT 01",
        title: "Startups and new businesses",
        body: "Building a new idea? We help you create the digital foundation to get started.",
        handwritten: "* Clean foundation from day one",
        image: "/images/industries/startups_light.webp",
        imgAlt: "3D Startup Rocket",
        tilt: "-rotate-[0.8deg]",
        caption: "Foundation v1.0",
    },
    {
        num: "STARTING POINT 02",
        title: "Small businesses",
        body: "Looking to improve your online presence or make daily work easier? We help identify practical solutions.",
        handwritten: "* Pragmatic upgrades that save time",
        image: "/images/industries/retail_light.webp",
        imgAlt: "3D Commerce Cart",
        tilt: "rotate-[0.6deg]",
        caption: "Online Presence",
    },
    {
        num: "STARTING POINT 03",
        title: "Growing businesses",
        body: "Need better software, automation or digital systems? We help you plan and build for your next stage.",
        handwritten: "* Robust architectures ready to scale",
        image: "/images/industries/professional_services_light.webp",
        imgAlt: "3D Growth Chart",
        tilt: "-rotate-[0.5deg]",
        caption: "Scalable Systems",
    },
];

export default function StickyNotesPreviewPage() {
    return (
        <main className="min-h-screen bg-[#F8F9FC] py-16 px-4 sm:px-6 lg:px-8 space-y-24 select-none font-sans">
            
            {/* Page Header */}
            <div className="max-w-4xl mx-auto text-center space-y-3">
                <span className="text-xs font-mono font-bold tracking-[0.22em] text-[#0057fe] uppercase">
                    OPTION 2 REFINED · REAL STICKY NOTE PAPER TOUCH
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#000c24] tracking-tight font-display">
                    Real Paper Touch Previews
                </h1>
                <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                    Based on your feedback, we transformed Option 2 to look and feel like genuine physical paper. Compare these 3 tactile paper treatments below.
                </p>
            </div>


            {/* =========================================================================
                VARIATION 2A: Direct Physical Placement on Textured Paper
                (No fake digital UI box — the 3D illustration casts a natural shadow on the paper,
                 with authentic top adhesive strip, corner curl & paper fiber overlay)
            ========================================================================= */}
            <section id="option-2a" className="max-w-6xl mx-auto space-y-8">
                <div className="border-b border-slate-200 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                    <div>
                        <div className="inline-block px-3 py-1 rounded-full bg-blue-100/80 text-[#0057fe] text-xs font-mono font-bold mb-2">
                            VARIATION 2A (MOST NATURAL & RECOMMENDED)
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#000c24] font-display">
                            Direct Paper Print with Real Adhesive Strip &amp; Corner Lift
                        </h2>
                        <p className="text-sm text-slate-600 mt-1">
                            Replaces the artificial digital UI box with a pure paper experience: the 3D illustration sits directly on the paper fibers with a natural contact shadow, paired with a realistic top glue band and lifted corner.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">
                    {NOTES_DATA.map((note, idx) => (
                        <div
                            key={note.num}
                            className={`relative bg-gradient-to-b from-[#FEFDFB] via-[#FAF7F0] to-[#F5F2EB] border border-[#E2DDD3]/90 rounded-[14px_11px_16px_12px] p-6 sm:p-7 flex flex-col justify-between shadow-[0_3px_6px_rgba(40,25,10,0.04),0_12px_28px_-4px_rgba(40,25,10,0.08),0_20px_40px_-8px_rgba(40,25,10,0.05)] transform ${note.tilt} hover:rotate-0 transition-transform duration-200 overflow-visible`}
                        >
                            {/* Realistic Top Adhesive Glue Band (classic 3M Post-it translucent top bar) */}
                            <div 
                                className="absolute top-0 left-0 right-0 h-10 pointer-events-none rounded-t-[inherit] opacity-60"
                                style={{
                                    background: "linear-gradient(to bottom, rgba(235, 222, 195, 0.45) 0%, rgba(235, 222, 195, 0.15) 75%, transparent 100%)",
                                    borderBottom: "1px dashed rgba(200, 185, 160, 0.25)"
                                }}
                                aria-hidden="true"
                            />

                            {/* Genuine Paper Fiber Texture Overlay */}
                            <div
                                className="absolute inset-0 pointer-events-none opacity-20 mix-blend-multiply rounded-[inherit]"
                                style={{
                                    backgroundImage: "url('/images/cta/paper_fiber_texture.webp')",
                                    backgroundRepeat: "repeat",
                                }}
                                aria-hidden="true"
                            />

                            {/* Tape / Paperclip */}
                            {idx === 0 && <ScrapbookTape className="absolute -top-3.5 left-8 w-28 sm:w-32 h-6" angle={-2} />}
                            {idx === 1 && <RealisticPaperclip className="absolute -top-4.5 right-8 z-20" />}
                            {idx === 2 && <ScrapbookTape className="absolute -top-3.5 right-8 w-28 sm:w-32 h-6" angle={2.2} />}

                            {/* Realistic Corner Curl at Bottom Right */}
                            <PaperCornerCurl />

                            <div className="relative z-10">
                                <span className="text-[10px] font-mono tracking-widest text-[#075BFA] font-bold uppercase block mb-2">
                                    {note.num}
                                </span>
                                <h3 className="text-xl font-bold text-[#07142F] mb-1 font-sans">
                                    {note.title}
                                </h3>

                                {/* Direct Paper Artwork Integration (Physical Object on Paper Surface) */}
                                <div className="relative w-full h-[125px] sm:h-[135px] my-3 flex items-center justify-center">
                                    {/* Soft radial shadow cast by the 3D model onto the paper */}
                                    <div className="absolute bottom-2 w-32 h-6 bg-[#2B1B0E]/12 rounded-full blur-md" />
                                    
                                    <div className="relative w-[130px] h-[130px]">
                                        <Image
                                            src={note.image}
                                            alt={note.imgAlt}
                                            width={140}
                                            height={140}
                                            className="w-full h-full object-contain filter drop-shadow-[0_8px_12px_rgba(30,20,10,0.15)]"
                                        />
                                    </div>
                                </div>

                                <p className="text-sm text-slate-700 leading-relaxed font-sans">
                                    {note.body}
                                </p>
                            </div>

                            {/* Handwritten Note Bottom */}
                            <div className="relative z-10 mt-5 pt-3.5 border-t border-[#E5DFD4]/80">
                                <span className={`${caveat.className} text-base sm:text-[17px] text-[#075BFA] font-bold block`}>
                                    {note.handwritten}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            {/* =========================================================================
                VARIATION 2B: Layered Mini Memo Paper Swatch (Physical Paper Cutout)
                (Keeps an inset framing, but it's an authentic warm paper memo slip
                 with deckled-like cut edges, washi tape tab, and soft paper drop shadow)
            ========================================================================= */}
            <section id="option-2b" className="max-w-6xl mx-auto space-y-8">
                <div className="border-b border-slate-200 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                    <div>
                        <div className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold mb-2">
                            VARIATION 2B (LAYERED PAPER MEMO SLIP)
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#000c24] font-display">
                            Layered Paper Memo Slip with Washi Tab
                        </h2>
                        <p className="text-sm text-slate-600 mt-1">
                            Maintains an inset panel, but renders it as an authentic smaller paper memo slip resting on the main note, secured with a mini kraft tab.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">
                    {NOTES_DATA.map((note, idx) => (
                        <div
                            key={note.num}
                            className={`relative bg-gradient-to-b from-[#FEFDFB] via-[#FAF7F0] to-[#F5F2EB] border border-[#E2DDD3]/90 rounded-[14px_11px_16px_12px] p-6 sm:p-7 flex flex-col justify-between shadow-[0_3px_6px_rgba(40,25,10,0.04),0_12px_28px_-4px_rgba(40,25,10,0.08),0_20px_40px_-8px_rgba(40,25,10,0.05)] transform ${note.tilt} hover:rotate-0 transition-transform duration-200`}
                        >
                            {/* Paper Fiber Texture Overlay */}
                            <div
                                className="absolute inset-0 pointer-events-none opacity-20 mix-blend-multiply rounded-[inherit]"
                                style={{
                                    backgroundImage: "url('/images/cta/paper_fiber_texture.webp')",
                                    backgroundRepeat: "repeat",
                                }}
                                aria-hidden="true"
                            />

                            {/* Tape / Paperclip */}
                            {idx === 0 && <ScrapbookTape className="absolute -top-3.5 left-8 w-28 sm:w-32 h-6" angle={-2} />}
                            {idx === 1 && <RealisticPaperclip className="absolute -top-4.5 right-8 z-20" />}
                            {idx === 2 && <ScrapbookTape className="absolute -top-3.5 right-8 w-28 sm:w-32 h-6" angle={2.2} />}

                            <PaperCornerCurl />

                            <div className="relative z-10">
                                <span className="text-[10px] font-mono tracking-widest text-[#075BFA] font-bold uppercase block mb-2">
                                    {note.num}
                                </span>
                                <h3 className="text-xl font-bold text-[#07142F] mb-2 font-sans">
                                    {note.title}
                                </h3>

                                {/* Layered Paper Memo Slip */}
                                <div className="relative w-full my-3 p-2 bg-[#FFFDF9] border border-[#E0D9CB] rounded-[8px_6px_9px_7px] shadow-[0_3px_10px_rgba(30,20,10,0.08),inset_0_1px_2px_rgba(255,255,255,0.8)] overflow-hidden">
                                    {/* Mini tape tab at top */}
                                    <MiniTape className="absolute -top-1.5 left-6 w-10 h-3.5" angle={1} />
                                    
                                    <div className="h-[105px] sm:h-[115px] flex items-center justify-center">
                                        <Image
                                            src={note.image}
                                            alt={note.imgAlt}
                                            width={130}
                                            height={130}
                                            className="w-full h-full object-contain p-1"
                                        />
                                    </div>
                                    <div className="text-center pb-0.5">
                                        <span className="text-[10px] font-mono font-medium text-slate-400 tracking-wider">
                                            // {note.caption}
                                        </span>
                                    </div>
                                </div>

                                <p className="text-sm text-slate-700 leading-relaxed font-sans mt-2">
                                    {note.body}
                                </p>
                            </div>

                            {/* Handwritten Note Bottom */}
                            <div className="relative z-10 mt-5 pt-3.5 border-t border-[#E5DFD4]/80">
                                <span className={`${caveat.className} text-base sm:text-[17px] text-[#075BFA] font-bold block`}>
                                    {note.handwritten}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            {/* =========================================================================
                VARIATION 2C: Letterpress Pressed / Debossed Paper Well
                (Subtle letterpress paper depression with embossed inner shadow & paper tooth)
            ========================================================================= */}
            <section id="option-2c" className="max-w-6xl mx-auto space-y-8 pb-16">
                <div className="border-b border-slate-200 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                    <div>
                        <div className="inline-block px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-mono font-bold mb-2">
                            VARIATION 2C (LETTERPRESS PRESSED WELL)
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#000c24] font-display">
                            Letterpress Debossed Paper Well
                        </h2>
                        <p className="text-sm text-slate-600 mt-1">
                            A softly debossed, stamped paper recess that feels pressed into the thick cardstock, with soft inner bevels and paper grain.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">
                    {NOTES_DATA.map((note, idx) => (
                        <div
                            key={note.num}
                            className={`relative bg-gradient-to-b from-[#FEFDFB] via-[#FAF7F0] to-[#F5F2EB] border border-[#E2DDD3]/90 rounded-[14px_11px_16px_12px] p-6 sm:p-7 flex flex-col justify-between shadow-[0_3px_6px_rgba(40,25,10,0.04),0_12px_28px_-4px_rgba(40,25,10,0.08),0_20px_40px_-8px_rgba(40,25,10,0.05)] transform ${note.tilt} hover:rotate-0 transition-transform duration-200`}
                        >
                            {/* Paper Fiber Texture Overlay */}
                            <div
                                className="absolute inset-0 pointer-events-none opacity-20 mix-blend-multiply rounded-[inherit]"
                                style={{
                                    backgroundImage: "url('/images/cta/paper_fiber_texture.webp')",
                                    backgroundRepeat: "repeat",
                                }}
                                aria-hidden="true"
                            />

                            {/* Tape / Paperclip */}
                            {idx === 0 && <ScrapbookTape className="absolute -top-3.5 left-8 w-28 sm:w-32 h-6" angle={-2} />}
                            {idx === 1 && <RealisticPaperclip className="absolute -top-4.5 right-8 z-20" />}
                            {idx === 2 && <ScrapbookTape className="absolute -top-3.5 right-8 w-28 sm:w-32 h-6" angle={2.2} />}

                            <PaperCornerCurl />

                            <div className="relative z-10">
                                <span className="text-[10px] font-mono tracking-widest text-[#075BFA] font-bold uppercase block mb-2">
                                    {note.num}
                                </span>
                                <h3 className="text-xl font-bold text-[#07142F] mb-2 font-sans">
                                    {note.title}
                                </h3>

                                {/* Debossed Paper Well */}
                                <div 
                                    className="relative w-full h-[120px] sm:h-[130px] my-3 rounded-[10px] flex items-center justify-center p-2 overflow-hidden"
                                    style={{
                                        background: "linear-gradient(180deg, #F0ECE2 0%, #F5F2EA 100%)",
                                        boxShadow: "inset 1px 2px 4px rgba(40,25,10,0.12), inset 0 1px 1px rgba(0,0,0,0.06), 0 1px 0 rgba(255,255,255,0.9)",
                                        border: "1px solid rgba(215, 205, 190, 0.7)"
                                    }}
                                >
                                    <Image
                                        src={note.image}
                                        alt={note.imgAlt}
                                        width={140}
                                        height={140}
                                        className="w-full h-full object-contain p-1 filter drop-shadow-[0_2px_4px_rgba(30,20,10,0.1)]"
                                    />
                                </div>

                                <p className="text-sm text-slate-700 leading-relaxed font-sans mt-2">
                                    {note.body}
                                </p>
                            </div>

                            {/* Handwritten Note Bottom */}
                            <div className="relative z-10 mt-5 pt-3.5 border-t border-[#E5DFD4]/80">
                                <span className={`${caveat.className} text-base sm:text-[17px] text-[#075BFA] font-bold block`}>
                                    {note.handwritten}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </main>
    );
}
