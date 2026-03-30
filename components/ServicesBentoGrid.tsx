"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import {
    FiMonitor, FiSmartphone, FiCpu, FiCloud,
    FiLayout, FiSettings, FiCode, FiUsers, FiBriefcase
} from "react-icons/fi";

const services = [
    {
        title: "Enterprise Web Platforms",
        desc: "Scalable, high-performance web architectures optimized for SEO and speed.",
        icon: FiMonitor,
        colSpan: "md:col-span-2"
    },
    {
        title: "Mobile App Engineering",
        desc: "Native & Cross-platform solutions for seamless iOS & Android experiences.",
        icon: FiSmartphone,
        colSpan: "md:col-span-1"
    },
    {
        title: "Intelligent Automation & AI",
        desc: "Generative AI integrations, smart agents, and workflow automation.",
        icon: FiCpu,
        colSpan: "md:col-span-1"
    },
    {
        title: "Cloud Infrastructure & DevOps",
        desc: "Secure, auto-scaling cloud environments with CI/CD for rapid deployment.",
        icon: FiCloud,
        colSpan: "md:col-span-1"
    },
    {
        title: "Immersive Experience Design",
        desc: "User-centric interfaces backed by behavioral research and premium aesthetics.",
        icon: FiLayout,
        colSpan: "md:col-span-1"
    },
    {
        title: "Managed IT Operations",
        desc: "Proactive infrastructure monitoring, security patching, and 24/7 reliability.",
        icon: FiSettings,
        colSpan: "md:col-span-1"
    },
    {
        title: "Bespoke Digital Solutions",
        desc: "Custom-engineered software solving unique business challenges off-the-shelf tools can't.",
        icon: FiCode,
        colSpan: "md:col-span-2"
    },
    {
        title: "Dedicated Teams",
        desc: "Specialized agile teams integrated seamlessly into your workflow.",
        icon: FiUsers,
        colSpan: "md:col-span-2"
    },
    {
        title: "IT Consulting",
        desc: "Strategic technology guidance to align IT with your business goals.",
        icon: FiBriefcase,
        colSpan: "md:col-span-1"
    }
];

function ServiceCard({ title, desc, icon: Icon, colSpan = "md:col-span-1", index }: { title: string, desc: string, icon: any, colSpan?: string, index: number }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            className={`group relative border border-gray-100 bg-white overflow-hidden rounded-[2rem] hover:border-blue-500/50 transition-colors duration-500 min-h-[240px] flex flex-col justify-center items-center text-center p-5 cursor-pointer shadow-sm hover:shadow-md ${colSpan}`}
            onMouseMove={handleMouseMove}
            initial="idle"
            whileHover="hover"
        >
            {/* Spotlight Gradient */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                        650px circle at ${mouseX}px ${mouseY}px,
                        rgba(59, 130, 246, 0.05),
                        transparent 80%
                        )
                    `,
                }}
            />

            {/* Icon Area */}
            <motion.div
                layout
                variants={{
                    idle: { y: 0, rotate: 0 },
                    hover: { y: -10, rotate: 360 }
                }}
                transition={{ duration: 0.6, type: "spring" }}
                className="mb-4 p-3 rounded-full bg-blue-50/80 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 relative z-10 backdrop-blur-sm"
            >
                <motion.div
                    animate={{
                        y: [0, -5, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2 // Deterministic delay
                    }}
                >
                    <Icon className="w-7 h-7" />
                </motion.div>
            </motion.div>

            {/* Title */}
            <motion.h3
                layout
                variants={{
                    idle: { y: 0 },
                    hover: { y: -5 }
                }}
                transition={{ duration: 0.3 }}
                className="text-xl font-bold text-gray-900 mb-1.5 font-outfit tracking-tight relative z-10"
            >
                {title}
            </motion.h3>

            {/* Description */}
            <p className="text-gray-500 leading-relaxed font-light text-sm px-2 max-w-md mx-auto mt-2 relative z-10">
                {desc}
            </p>
        </motion.div>
    );
}

export default function ServicesBentoGrid() {
    return (
        <section className="relative w-full py-24 px-4 md:px-8 bg-white" id="services-bento">

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]"
                        style={{
                            fontFamily: "var(--font-playfair)",
                            fontWeight: 400,
                            letterSpacing: "-0.02em"
                        }}
                    >
                        <span className="text-gray-900">Engineering </span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                            Digital Excellence
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="max-w-3xl mx-auto text-lg md:text-xl text-gray-500 leading-relaxed font-light"
                    >
                        The Nisschay Stack: A comprehensive suite of specialized services designed to scale your vision and accelerate growth.
                    </motion.p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                >
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            className={service.colSpan || "md:col-span-1"}
                            variants={{
                                hidden: { opacity: 0, y: 50, x: -20 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    x: 0,
                                    transition: {
                                        type: "spring",
                                        stiffness: 50,
                                        damping: 15
                                    }
                                }
                            }}
                        >
                            <ServiceCard {...service} title={service.title} desc={service.desc} icon={service.icon} colSpan="" index={idx} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
