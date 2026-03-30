"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const showcaseImages = [
    "/assets/projects/artistsland.png",
    "/assets/projects/helper.png",
    "/assets/projects/pickme.png",
    "/assets/projects/nono.png",
];

export default function WorkTeaserSection() {
    const [isHovered, setIsHovered] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 30, stiffness: 200 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            mouseX.set(e.clientX - rect.left);
            mouseY.set(e.clientY - rect.top);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    // Slideshow logic inside the portal
    useEffect(() => {
        if (!isHovered) return;
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % showcaseImages.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [isHovered]);

    return (
        <section 
            ref={containerRef}
            className="relative py-40 md:py-64 bg-white overflow-hidden cursor-none border-y border-gray-100"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center text-center">
                <motion.span
                    className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-6 tracking-wider uppercase"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    Curated Portfolio
                </motion.span>
                
                <Link href="/portfolio" className="group">
                    <motion.h2
                        className="text-6xl md:text-8xl lg:text-9xl font-normal leading-tight text-gray-900 group-hover:italic transition-all duration-700"
                        style={{ 
                            fontFamily: "var(--font-playfair)", 
                            letterSpacing: "-0.04em" 
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        See Our <br /> Work.
                    </motion.h2>
                </Link>

                <div className="mt-16">
                    <Link href="/portfolio" className="group/btn relative inline-flex items-center gap-4 px-10 py-6 rounded-full border border-gray-200 bg-white text-gray-900 overflow-hidden transition-all duration-500 hover:bg-blue-600 hover:border-blue-600 hover:text-white hover:px-14 active:scale-95">
                        <span className="relative z-10 text-xl font-medium transition-colors duration-500 group-hover/btn:text-white">
                            Explore Full Portfolio
                        </span>
                        <ArrowRight className="relative z-10 w-6 h-6 transition-all duration-500 group-hover/btn:translate-x-2 group-hover/btn:text-white" />
                    </Link>
                </div>
            </div>

            {/* The Creative Visual Portal (Lens) */}
            <motion.div
                className="pointer-events-none absolute z-20 w-[200px] h-[200px] md:w-[450px] md:h-[450px] overflow-hidden rounded-full shadow-[0_0_100px_rgba(0,135,255,0.2)] bg-gray-50 border-4 border-white"
                style={{
                    left: springX,
                    top: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                    scale: isHovered ? 1 : 0, 
                    opacity: isHovered ? 1 : 0,
                }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            >
                <div className="relative w-full h-full">
                    {showcaseImages.map((img, idx) => (
                        <div
                            key={idx}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                                currentImageIndex === idx ? "opacity-100 scale-100" : "opacity-0 scale-110"
                            }`}
                        >
                            <Image
                                src={img}
                                alt="Portfolio Preview"
                                fill
                                className="object-cover"
                                priority
                            />
                            {/* Premium Overlay Filter */}
                            <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
                        </div>
                    ))}

                    {/* Lens Decoration */}
                    <div className="absolute inset-0 border-[20px] border-white/10 rounded-full pointer-events-none" />
                </div>
            </motion.div>

            {/* Mouse Tooltip Hint */}
            <motion.div
                className="pointer-events-none absolute z-30 bg-blue-600 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full whitespace-nowrap shadow-xl"
                style={{
                    left: springX,
                    top: springY,
                    translateX: "50px",
                    translateY: "50px",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
            >
                View Project
            </motion.div>
        </section>
    );
}
