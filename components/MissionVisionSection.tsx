"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { FaLightbulb, FaShieldAlt, FaStar } from "react-icons/fa";

export default function MissionVisionSection() {
    const { scrollY } = useScroll();
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
                staggerChildren: 0.1,
                delayChildren: 0.05
            }
        }
    } as const;

    const itemRevealVariants = {
        hidden: (direction: "up" | "down") => ({
            opacity: 0,
            y: direction === "down" ? 35 : -35,
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

    const cardRef1 = useRef<HTMLDivElement>(null);
    const { scrollYProgress: cardScroll1 } = useScroll({
        target: cardRef1,
        offset: ["start end", "center center"]
    });
    const opacityCard1 = useTransform(cardScroll1, [0, 1], [0.3, 1]);
    const yOffsetCard1 = useTransform(cardScroll1, [0, 1], [45, 0]);

    const cardRef2 = useRef<HTMLDivElement>(null);
    const { scrollYProgress: cardScroll2 } = useScroll({
        target: cardRef2,
        offset: ["start end", "center center"]
    });
    const opacityCard2 = useTransform(cardScroll2, [0, 1], [0.3, 1]);
    const yOffsetCard2 = useTransform(cardScroll2, [0, 1], [45, 0]);

    return (
        <section className="relative py-24 md:py-32 px-4 sm:px-6 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10 space-y-24">
                
                {/* Asymmetric Mission & Vision Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    
                    {/* Left Column: Bold Display Header */}
                    <motion.div 
                        custom={scrollDirection}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, margin: "-100px" }}
                        variants={itemRevealVariants}
                        className="lg:col-span-5 space-y-4 lg:sticky lg:top-32"
                    >
                        <span className="text-xs font-mono uppercase tracking-[0.25em] text-blue-600 block">
                            [ Core Identity ]
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-[1.1]"
                            style={{ fontFamily: "var(--font-display)" }}
                        >
                            Our Foundation & Long-Term Vision.
                        </h2>
                        <p className="text-gray-550 text-base font-light leading-relaxed">
                            We don't build software as a temporary service; we build scalable digital systems that serve as operational engines for growth.
                        </p>
                    </motion.div>

                    {/* Right Column: Sleek Asymmetric Cards */}
                    <div className="lg:col-span-7 space-y-10">
                        {/* Mission Card */}
                        <div ref={cardRef1}>
                            <motion.div
                                style={{ opacity: opacityCard1, y: yOffsetCard1 }}
                                className="p-8 bg-gray-50/40 border border-gray-100 rounded-2xl space-y-4 hover:border-blue-100 hover:bg-white transition-all duration-300 relative group"
                            >
                                <span className="absolute top-6 right-8 text-5xl font-mono font-bold text-gray-200/50 group-hover:text-blue-100 transition-colors duration-300">
                                    01
                                </span>
                                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-blue-600 block">
                                    [ Our Mission ]
                                </span>
                                <h3 className="text-2xl font-bold text-gray-900 font-sans">
                                    Democratize Enterprise-Grade Tech
                                </h3>
                                <p className="text-gray-600 font-light leading-relaxed text-base">
                                    We empower startups and growing businesses to compete with industry giants by providing enterprise-grade software development, custom AI automation, and cloud solutions. We translate ambitious ideas into market-ready products with absolute precision.
                                </p>
                            </motion.div>
                        </div>

                        {/* Vision Card */}
                        <div ref={cardRef2}>
                            <motion.div
                                style={{ opacity: opacityCard2, y: yOffsetCard2 }}
                                className="p-8 bg-gray-50/40 border border-gray-100 rounded-2xl space-y-4 hover:border-blue-100 hover:bg-white transition-all duration-300 relative group"
                            >
                                <span className="absolute top-6 right-8 text-5xl font-mono font-bold text-gray-200/50 group-hover:text-purple-100 transition-colors duration-300">
                                    02
                                </span>
                                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-purple-600 block">
                                    [ Our Vision ]
                                </span>
                                <h3 className="text-2xl font-bold text-gray-900 font-sans">
                                    Global Engineering Partner
                                </h3>
                                <p className="text-gray-600 font-light leading-relaxed text-base">
                                    To become the go-to development partner for ambitious businesses globally—recognized for delivering exceptional quality, predictable release cadences, and zero agency overhead. We envision a future where business scale is unlocked by world-class software engineering.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                </div>

                {/* Divider Line */}
                <div className="w-full h-px bg-gray-100" />                {/* Values Section */}
                <motion.div
                    custom={scrollDirection}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    variants={containerRevealVariants}
                    className="space-y-12"
                >
                    <motion.div
                        variants={itemRevealVariants}
                        className="text-center space-y-3"
                    >
                        <span className="text-xs font-mono uppercase tracking-[0.25em] text-blue-600 block">
                            [ Operating Principles ]
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight"
                            style={{ fontFamily: "var(--font-display)" }}
                        >
                            Values That Drive Our Execution
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Value 1 */}
                        <motion.div
                            variants={itemRevealVariants}
                            className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 group space-y-4"
                        >
                            <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 text-blue-600">
                                <FaShieldAlt className="text-xl" />
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                Integrity First
                            </h4>
                            <p className="text-gray-500 font-light text-sm leading-relaxed">
                                Transparent communication, fully documented progress, and operational promises kept without exception.
                            </p>
                        </motion.div>

                        {/* Value 2 */}
                        <motion.div
                            variants={itemRevealVariants}
                            className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-md transition-all duration-300 group space-y-4"
                        >
                            <div className="bg-purple-50 w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 text-purple-600">
                                <FaLightbulb className="text-xl" />
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                                Innovation Driven
                            </h4>
                            <p className="text-gray-500 font-light text-sm leading-relaxed">
                                Bringing fresh, cutting-edge software paradigms and production-grade AI frameworks to solve business hurdles.
                            </p>
                        </motion.div>

                        {/* Value 3 */}
                        <motion.div
                            variants={itemRevealVariants}
                            className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-rose-200 hover:shadow-md transition-all duration-300 group space-y-4"
                        >
                            <div className="bg-rose-50 w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 text-rose-600">
                                <FaStar className="text-xl" />
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 group-hover:text-rose-600 transition-colors duration-300">
                                Excellence Always
                            </h4>
                            <p className="text-gray-500 font-light text-sm leading-relaxed">
                                Obsessing over clean code structures, lightning-fast rendering speeds, and intuitive UI interactions.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
