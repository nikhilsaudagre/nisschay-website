"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { FaArrowRight, FaPaperPlane } from "react-icons/fa";

export default function JoinJourneySection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollY, scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end end"]
    });
    const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        const diff = latest - previous;
        if (Math.abs(diff) > 2) {
            setScrollDirection(diff > 0 ? "down" : "up");
        }
    });

    const containerRevealVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.05
            }
        }
    } as const;

    const itemRevealVariants = {
        hidden: (direction: "up" | "down") => ({
            opacity: 0,
            y: direction === "down" ? 30 : -30,
        }),
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                stiffness: 50,
                damping: 14
            }
        }
    } as const;

    const orbScale = useTransform(scrollYProgress, [0, 1], [0.6, 1.2]);
    const orbOpacity = useTransform(scrollYProgress, [0, 1], [0.15, 0.5]);

    return (
        <section ref={sectionRef} className="relative py-24 md:py-36 px-4 sm:px-6 bg-white overflow-hidden">
            {/* Glowing Accent Orbs in Background */}
            <motion.div 
                style={{ scale: orbScale, opacity: orbOpacity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-50/40 rounded-full filter blur-[120px] pointer-events-none z-0" 
            />

            <motion.div 
                custom={scrollDirection}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
                variants={containerRevealVariants}
                className="max-w-4xl mx-auto relative z-10 text-center space-y-12"
            >
                {/* Section Header */}
                <motion.div
                    variants={itemRevealVariants}
                    className="space-y-6"
                >
                    <span className="text-xs font-mono uppercase tracking-[0.25em] text-blue-600 block">
                        [ Work With Us ]
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 font-bold tracking-tight leading-tight"
                        style={{
                            fontFamily: "var(--font-display)",
                            letterSpacing: "-0.02em"
                        }}
                    >
                        Ready to Build Something Amazing?
                    </h2>
                    <p className="text-gray-550 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
                        Join the growing startups and enterprises that trust Nisschay to engineer high-stakes digital products. Let's design your roadmap and build for impact.
                    </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    variants={itemRevealVariants}
                    className="flex flex-col sm:flex-row gap-5 justify-center items-center"
                >
                    <Link
                        href="/contact"
                        className="group w-full sm:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 flex items-center justify-center gap-3 no-underline"
                    >
                         <FaPaperPlane className="group-hover:translate-x-0.5 transition-transform" />
                         <span>Book a Call</span>
                    </Link>
                    <Link
                        href="/portfolio"
                        className="group w-full sm:w-auto px-8 py-4 bg-white text-primary-600 font-medium rounded-full border border-primary-500 hover:bg-primary-50 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 flex items-center justify-center gap-3"
                    >
                        <span>View Our Work</span>
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}
