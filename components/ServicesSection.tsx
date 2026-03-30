"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { 
    FiMonitor, FiSmartphone, FiCpu, FiCloud, 
    FiLayout, FiCode, FiArrowRight, FiArrowUpRight
} from "react-icons/fi";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const keyServices = [
    {
        id: 1,
        title: "Enterprise Web Platforms",
        category: "Scalable Architecture",
        icon: FiMonitor,
        color: "from-blue-600 to-indigo-700",
        accent: "bg-blue-500",
    },
    {
        id: 2,
        title: "Mobile App Engineering",
        category: "iOS & Android",
        icon: FiSmartphone,
        color: "from-emerald-500 to-teal-600",
        accent: "bg-emerald-500",
    },
    {
        id: 3,
        title: "Intelligent AI Solutions",
        category: "Generative AI & Agents",
        icon: FiCpu,
        color: "from-purple-600 to-violet-700",
        accent: "bg-purple-500",
    },
    {
        id: 4,
        title: "Cloud & DevOps",
        category: "Secure Infrastructure",
        icon: FiCloud,
        color: "from-sky-500 to-blue-600",
        accent: "bg-sky-500",
    },
    {
        id: 5,
        title: "Experience Design",
        category: "UI/UX & Branding",
        icon: FiLayout,
        color: "from-rose-500 to-pink-600",
        accent: "bg-rose-500",
    },
    {
        id: 6,
        title: "Bespoke Software",
        category: "Custom Engineering",
        icon: FiCode,
        color: "from-cyan-500 to-blue-600",
        accent: "bg-cyan-500",
    },
];

export default function ServicesSection() {
    const [hoveredID, setHoveredID] = useState<number | null>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
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

    return (
        <section 
            ref={containerRef}
            className="relative py-24 md:py-32 bg-white overflow-hidden cursor-default border-y border-gray-100"
            id="services"
        >
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-20">
                    <div className="max-w-3xl">
                        <motion.span
                            className="inline-block py-1 px-3 rounded-full bg-gray-50 text-gray-500 text-xs font-semibold mb-4 tracking-wider uppercase"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            Specialized Expertise
                        </motion.span>
                        <motion.h2
                            className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-gray-900"
                            style={{ 
                                fontFamily: "var(--font-playfair)", 
                                letterSpacing: "-0.03em" 
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Engineering Excellence.
                        </motion.h2>
                    </div>
                </div>

                {/* Interactive Service Titles */}
                <div className="relative space-y-4">
                    {keyServices.map((service, index) => (
                        <div
                            key={service.id}
                            className="group relative border-b border-gray-100 last:border-0 py-8 md:py-12 transition-colors duration-500 hover:border-gray-300"
                            onMouseEnter={() => setHoveredID(service.id)}
                            onMouseLeave={() => setHoveredID(null)}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-baseline gap-4 md:gap-8 overflow-hidden">
                                    <span className="text-gray-300 text-sm md:text-xl font-light font-mono leading-none">
                                        0{index + 1}
                                    </span>
                                    <motion.h3 
                                        className="text-3xl md:text-5xl lg:text-6xl font-light text-gray-900 group-hover:italic transition-all duration-500 origin-left"
                                        style={{ fontFamily: "var(--font-playfair)" }}
                                    >
                                        {service.title}
                                    </motion.h3>
                                    <div className="hidden md:flex items-center gap-2 opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 delay-100">
                                        <div className={`w-3 h-3 rounded-full ${service.accent}`} />
                                        <span className="text-sm uppercase tracking-widest text-gray-400 font-medium whitespace-nowrap">
                                            {service.category}
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-gray-900 group-hover:border-gray-900 transition-all duration-500">
                                    <FiArrowUpRight className="w-6 h-6 md:w-10 md:h-10 text-gray-400 group-hover:text-white transition-colors duration-500" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Final CTA */}
                <div className="mt-20 md:mt-32 flex justify-center">
                    <Link href="/contact" className="group/btn relative inline-flex items-center gap-4 px-10 py-6 rounded-full border border-gray-200 bg-white text-gray-900 overflow-hidden transition-all duration-500 hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:px-14 active:scale-95">
                        <span className="relative z-10 text-xl font-medium transition-colors duration-500 group-hover/btn:text-white">
                            Build Your Vision
                        </span>
                        <FiArrowRight className="relative z-10 w-6 h-6 transition-all duration-500 group-hover/btn:translate-x-2 group-hover/btn:text-white" />
                    </Link>
                </div>
            </div>

            {/* Floating Portal (Icon & Color Reveal) */}
            <motion.div
                className="pointer-events-none absolute z-20 w-[250px] h-[350px] md:w-[400px] md:h-[400px] overflow-hidden rounded-[2rem] shadow-2xl bg-white border border-gray-100"
                style={{
                    left: springX,
                    top: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                    display: hoveredID ? "block" : "none",
                }}
                initial={{ scale: 0, opacity: 0, rotate: -15 }}
                animate={{ 
                    scale: hoveredID ? 1 : 0, 
                    opacity: hoveredID ? 1 : 0,
                    rotate: hoveredID ? 0 : -15,
                }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            >
                <div className="relative w-full h-full">
                    {keyServices.map((service) => (
                        <div
                            key={service.id}
                            className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
                                hoveredID === service.id ? "opacity-100 scale-100" : "opacity-0 scale-110"
                            }`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-90`} />
                            {/* Decorative Pattern */}
                            <div className="absolute inset-0 opacity-20" 
                                 style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                            
                            <motion.div
                                animate={hoveredID === service.id ? { 
                                    scale: [1, 1.1, 1],
                                    rotate: [0, 5, -5, 0]
                                } : {}}
                                transition={{ duration: 4, repeat: Infinity }}
                            >
                                <service.icon size={150} className="text-white relative z-10 filter drop-shadow-2xl" />
                            </motion.div>

                            <div className="absolute bottom-10 left-10 right-10 text-white z-10">
                                <p className="text-white/60 text-xs uppercase tracking-[0.3em] font-bold mb-2">Service Highlight</p>
                                <h4 className="text-3xl font-bold font-outfit">{service.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
