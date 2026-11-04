"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
    FiMonitor, FiSmartphone, FiCpu, FiCloud, 
    FiLayout, FiCode, FiArrowRight, FiCheck
} from "react-icons/fi";
import {
    SiNextdotjs, SiTailwindcss, SiTypescript, SiSpringboot, SiOracle, SiOpenai, SiTensorflow
} from "react-icons/si";
import {
    FaReact, FaFigma, FaJava, FaPython, FaDocker, FaHtml5, FaCss3Alt, FaJs
} from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { useState } from "react";
import Link from "next/link";

const keyServices = [
    {
        id: 1,
        slug: "web-saas",
        title: "Web & SaaS Development",
        category: "SaaS & Web Apps",
        icon: FiMonitor,
        color: "from-blue-600 to-indigo-700",
        accent: "bg-blue-500",
        capabilities: [
            "Custom Client Dashboards",
            "Sub-second Serverless SSR",
            "Multi-tenant SaaS Architecture",
            "Stripe Gateway Subscriptions"
        ],
        tech: [
            { name: "Next.js", icon: SiNextdotjs },
            { name: "React", icon: FaReact },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Tailwind", icon: SiTailwindcss }
        ]
    },
    {
        id: 2,
        slug: "mobile-apps",
        title: "Mobile App Development",
        category: "iOS & Android",
        icon: FiSmartphone,
        color: "from-emerald-500 to-teal-600",
        accent: "bg-emerald-500",
        capabilities: [
            "Offline Data Caching",
            "Native Hardware Integrations",
            "Biometric Authentication",
            "FCM Push Notification Hubs"
        ],
        tech: [
            { name: "React Native", icon: FaReact },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Java", icon: FaJava },
            { name: "Docker", icon: FaDocker }
        ]
    },
    {
        id: 3,
        slug: "ai-automation",
        title: "AI Integration & Automation",
        category: "AI & WhatsApp Automation",
        icon: FiCpu,
        color: "from-purple-600 to-violet-700",
        accent: "bg-purple-500",
        capabilities: [
            "Generative Agent Workflows",
            "Vector Search Pipelines",
            "WhatsApp Business Automation",
            "Multi-model LLM API Sync"
        ],
        tech: [
            { name: "Python", icon: FaPython },
            { name: "OpenAI API", icon: SiOpenai },
            { name: "TensorFlow", icon: SiTensorflow },
            { name: "Docker", icon: FaDocker }
        ]
    },
    {
        id: 4,
        slug: "custom-software",
        title: "Custom Software Development",
        category: "Custom ERPs & SaaS MVPs",
        icon: FiCode,
        color: "from-cyan-500 to-blue-600",
        accent: "bg-cyan-500",
        capabilities: [
            "Bespoke Enterprise ERPs",
            "ACID Storage Integrity",
            "Automated Operations Ledgers",
            "Legacy API Modernization"
        ],
        tech: [
            { name: "Java", icon: FaJava },
            { name: "Spring Boot", icon: SiSpringboot },
            { name: "Oracle DB", icon: SiOracle },
            { name: "Docker", icon: FaDocker }
        ]
    },
    {
        id: 5,
        slug: "ui-ux-design",
        title: "UI/UX & Product Design",
        category: "UX & Interactive Prototypes",
        icon: FiLayout,
        color: "from-rose-500 to-pink-600",
        accent: "bg-rose-500",
        capabilities: [
            "Interactive Figma Prototypes",
            "Design Tokens Code Exports",
            "Wireframe Journey Mappings",
            "A/B Conversion Testing"
        ],
        tech: [
            { name: "Figma", icon: FaFigma },
            { name: "HTML5", icon: FaHtml5 },
            { name: "CSS3", icon: FaCss3Alt },
            { name: "JavaScript", icon: FaJs }
        ]
    },
    {
        id: 6,
        slug: "cloud-devops",
        title: "Cloud & DevOps Services",
        category: "CI/CD & Cloud Scaling",
        icon: FiCloud,
        color: "from-sky-500 to-blue-600",
        accent: "bg-sky-500",
        capabilities: [
            "Elastic Kubernetes Scaling",
            "GitOps CI/CD Pipelines",
            "Global Edge CDN Caching",
            "99.99% Multi-region Uptime"
        ],
        tech: [
            { name: "Docker", icon: FaDocker },
            { name: "Azure Cloud", icon: VscAzure },
            { name: "Java", icon: FaJava },
            { name: "Next.js", icon: SiNextdotjs }
        ]
    },
];

export default function ServicesSection() {
    const [activeID, setActiveID] = useState<number | null>(null);

    return (
        <section 
            className="relative py-24 md:py-32 bg-white overflow-hidden cursor-default"
            id="services"
        >
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-20">
                    <div className="max-w-3xl">
                        <motion.span
                            className="text-xs font-mono uppercase tracking-[0.25em] text-blue-600 block mb-4 select-none"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            [ Specialized Expertise ]
                        </motion.span>
                        <motion.h2
                            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.1]"
                            style={{ 
                                fontFamily: "var(--font-display)", 
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            High-Scale Systems. <br className="hidden sm:inline" />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                                Engineered for Growth.
                            </span>
                        </motion.h2>
                    </div>
                </div>

                {/* Interactive Service Accordions */}
                <div className="relative space-y-4">
                    {keyServices.map((service, index) => {
                        const isExpanded = activeID === service.id;
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 40, x: -25 }}
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ 
                                    duration: 0.8, 
                                    ease: [0.16, 1, 0.3, 1], // easeOutExpo
                                    delay: index * 0.08 // Elegant stagger wave
                                }}
                            >
                                <div
                                    onClick={() => setActiveID(isExpanded ? null : service.id)}
                                    className="group relative border-b border-gray-100 last:border-0 py-8 md:py-10 transition-colors duration-500 hover:border-gray-300 block cursor-pointer"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-baseline gap-4 md:gap-8 overflow-hidden">
                                            <span className="text-gray-300 text-sm md:text-xl font-light font-mono leading-none">
                                                0{index + 1}
                                            </span>
                                            <h3 
                                                className={`text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light text-gray-900 group-hover:text-blue-600 transition-colors duration-300 origin-left`}
                                                style={{ fontFamily: "var(--font-display)" }}
                                            >
                                                {service.title}
                                            </h3>
                                            <div className="hidden md:flex items-center gap-2 opacity-60">
                                                <div className={`w-2 h-2 rounded-full ${service.accent}`} />
                                                <span className="text-xs uppercase tracking-widest text-gray-400 font-medium whitespace-nowrap">
                                                    {service.category}
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <motion.div 
                                            className="w-10 h-10 md:w-16 md:h-16 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-gray-900 group-hover:border-gray-900 transition-all duration-300"
                                            animate={{ rotate: isExpanded ? 90 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <FiArrowRight className="w-5 h-5 md:w-8 md:h-8 text-gray-400 group-hover:text-white transition-colors duration-300" />
                                        </motion.div>
                                    </div>

                                    {/* Expanded Capabilities & Tech Badges Drawer */}
                                    <AnimatePresence initial={false}>
                                        {isExpanded && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                                className="overflow-hidden"
                                                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking drawer content
                                            >
                                                <div className="pt-8 pb-4 pl-4 md:pl-16 pr-4 grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-slate-100/60 mt-6 select-none cursor-default">
                                                    {/* Capabilities Checklist */}
                                                    <div className="md:col-span-7 space-y-4">
                                                        <p className="text-xs uppercase tracking-widest text-slate-400 font-mono font-semibold">Core Capabilities</p>
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                                            {service.capabilities.map((cap, idx) => (
                                                                <div key={idx} className="flex items-center gap-3 text-slate-600 text-sm">
                                                                    <div className="w-5 h-5 rounded-full bg-blue-50/80 border border-blue-100/30 flex items-center justify-center text-blue-600 font-bold select-none">
                                                                        <FiCheck className="w-3.5 h-3.5" />
                                                                    </div>
                                                                    <span className="font-light">{cap}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Tech Stack Badges */}
                                                    <div className="md:col-span-5 space-y-4">
                                                        <p className="text-xs uppercase tracking-widest text-slate-400 font-mono font-semibold">Build Stack</p>
                                                        <div className="flex flex-wrap gap-2.5">
                                                            {service.tech.map((t, idx) => (
                                                                <div 
                                                                    key={idx} 
                                                                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200/55 text-xs text-slate-600 font-medium font-mono"
                                                                >
                                                                    <t.icon className="w-3.5 h-3.5 text-slate-500" />
                                                                    <span>{t.name}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* CTA Link to Specs */}
                                                    <div className="md:col-span-12 pt-4 flex justify-start">
                                                        <Link 
                                                            href={`/services?service=${service.slug}#service-breakdown`}
                                                            className="inline-flex items-center gap-2.5 text-sm font-semibold text-blue-600 hover:text-indigo-600 transition-colors group/link"
                                                        >
                                                            <span>Learn More</span>
                                                            <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Final CTA */}
                <div className="mt-24 md:mt-32 flex flex-col items-center text-center">
                    <p className="text-gray-500 text-sm md:text-base font-light mb-6 max-w-md">
                        Have a unique project in mind? Partner with our expert team to build reliable, high-scale applications.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                        <Link href="/contact" className="group/btn relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-md hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:scale-105 active:scale-95">
                            <span>Get in Touch</span>
                            <FiArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </Link>
                        <Link href="/services" className="group/btn inline-flex items-center gap-2 px-8 py-4 rounded-full border border-gray-200 bg-white text-gray-700 font-medium hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 active:scale-95">
                            <span>Explore All Services</span>
                            <FiArrowRight className="w-4 h-4 text-gray-400 group-hover/btn:text-gray-600 transition-colors" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
