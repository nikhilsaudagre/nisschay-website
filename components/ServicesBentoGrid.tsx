"use client";
import { motion, useMotionTemplate, useMotionValue, useScroll, useMotionValueEvent } from "framer-motion";
import { MouseEvent, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { IconType } from "react-icons";
import {
    FiMonitor, FiSmartphone, FiCpu, FiCloud,
    FiLayout, FiCode
} from "react-icons/fi";

const services = [
    {
        slug: "web-saas",
        title: "Web & SaaS Development",
        desc: "High-performance web applications and custom SaaS storefronts optimized for speed, SEO, and conversion.",
        icon: FiMonitor,
        image: "/proof-launches.webp",
        colSpan: "md:col-span-2"
    },
    {
        slug: "mobile-apps",
        title: "Mobile App Development",
        desc: "Native & cross-platform Flutter/React Native solutions built for seamless iOS & Android experiences.",
        icon: FiSmartphone,
        image: "/bento-mobile.webp",
        colSpan: "md:col-span-1"
    },
    {
        slug: "ai-automation",
        title: "AI Integration & Automation",
        desc: "Generative AI custom agents, WhatsApp Business bot integrations, and smart workflows.",
        icon: FiCpu,
        image: "/bento-ai.webp",
        colSpan: "md:col-span-1"
    },
    {
        slug: "custom-software",
        title: "Custom Software Development",
        desc: "Custom operational software, ERPs, CRM databases, and start-up MVP portals built for scale.",
        icon: FiCode,
        image: "/proof-engineering.webp",
        colSpan: "md:col-span-2"
    },
    {
        slug: "ui-ux-design",
        title: "UI/UX & Product Design",
        desc: "Premium interface layouts, user journey maps, and high-fidelity interactive blueprints.",
        icon: FiLayout,
        image: "/bento-uiux.webp",
        colSpan: "md:col-span-1"
    },
    {
        slug: "cloud-devops",
        title: "Cloud & DevOps Services",
        desc: "Secure, auto-scaling AWS/GCP setups with continuous deployment pipelines for 99.9% uptime.",
        icon: FiCloud,
        image: "/proof-release.webp",
        colSpan: "md:col-span-2"
    }
];

function ServiceCard({ title, desc, icon: Icon, colSpan = "md:col-span-1", image }: { title: string, desc: string, icon: IconType, colSpan?: string, image: string }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const isWide = colSpan.includes("col-span-2");

    return (
        <motion.div
            className={`group relative border border-gray-150 bg-white overflow-hidden rounded-[2rem] hover:border-blue-500/50 transition-colors duration-500 min-h-[260px] flex flex-col justify-between p-6 cursor-pointer shadow-sm hover:shadow-md ${colSpan}`}
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
                        rgba(59, 130, 246, 0.04),
                        transparent 80%
                        )
                    `,
                }}
            />

            {isWide ? (
                /* Wide Card Layout: Left text, Right cropped image */
                <div className="flex flex-col md:flex-row gap-6 items-center justify-between h-full w-full">
                    {/* Left text pane */}
                    <div className="flex flex-col text-left justify-center h-full pr-4 relative z-10 w-full md:w-[55%]">
                        {/* Icon */}
                        <div className="w-fit mb-4 p-3 rounded-2xl bg-blue-50/80 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                            <Icon className="w-6 h-6" />
                        </div>
                        {/* Title & Desc */}
                        <h3 className="text-lg font-bold text-gray-900 mb-2 font-outfit tracking-tight">
                            {title}
                        </h3>
                        <p className="text-gray-500 leading-relaxed font-light text-xs md:text-sm">
                            {desc}
                        </p>
                        {/* Explore action */}
                        <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 mt-4 flex items-center gap-1 group-hover:gap-2 transition-all">
                            Explore Service <FiArrowRight className="w-3.5 h-3.5" />
                        </span>
                    </div>

                    {/* Right cropped image pane */}
                    <div className="relative w-full md:w-[45%] h-[160px] md:h-[200px] overflow-hidden rounded-2xl border border-gray-200/40 shadow-sm bg-gray-50 select-none flex-shrink-0 self-center">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/10 to-transparent pointer-events-none" />
                    </div>
                </div>
            ) : (
                /* Standard Card Layout: Top text, Bottom cropped image */
                <div className="flex flex-col justify-between h-full w-full">
                    <div className="flex flex-col items-center text-center w-full relative z-10">
                        {/* Icon */}
                        <div className="mb-4 p-3 rounded-full bg-blue-50/80 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                            <Icon className="w-6 h-6" />
                        </div>
                        {/* Title & Desc */}
                        <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1.5 font-outfit tracking-tight">
                            {title}
                        </h3>
                        <p className="text-gray-500 leading-relaxed font-light text-xs px-2">
                            {desc}
                        </p>
                    </div>

                    {/* Bottom image */}
                    <div className="relative w-full h-[140px] mt-6 overflow-hidden rounded-t-2xl border-t border-x border-gray-200/50 shadow-sm bg-gray-50 select-none flex-shrink-0">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/10 to-transparent pointer-events-none" />
                    </div>
                </div>
            )}
        </motion.div>
    );
}

export default function ServicesBentoGrid() {
    const { scrollY } = useScroll();
    const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        const diff = latest - previous;
        if (Math.abs(diff) > 2) {
            setScrollDirection(diff > 0 ? "down" : "up");
        }
    });

    const headerVariants = {
        hidden: (direction: "up" | "down") => ({
            opacity: 0,
            y: direction === "down" ? 30 : -30
        }),
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" as const }
        }
    };

    const cardVariants = {
        hidden: (direction: "up" | "down") => ({
            opacity: 0,
            y: direction === "down" ? 50 : -50,
            scale: 0.95
        }),
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring" as const,
                stiffness: 50,
                damping: 15
            }
        }
    };

    return (
        <section className="relative w-full py-24 px-4 md:px-8 bg-white overflow-hidden" id="services-bento">
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    custom={scrollDirection}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.1 }
                        }
                    }}
                    className="text-center mb-20"
                >
                    <motion.span
                        variants={headerVariants}
                        className="text-xs font-mono uppercase tracking-[0.25em] text-blue-600 block mb-4 select-none"
                    >
                        [ Our Core Offerings ]
                    </motion.span>
                    <motion.h2
                        variants={headerVariants}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-[1.1] tracking-tight"
                        style={{
                            fontFamily: "var(--font-display)",
                        }}
                    >
                        Architecting High-Scale Platforms. <br className="hidden sm:inline" />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                            Built to Grow.
                        </span>
                    </motion.h2>
                    <motion.p
                        variants={headerVariants}
                        className="max-w-3xl mx-auto text-lg md:text-xl text-gray-500 leading-relaxed font-light mt-4"
                    >
                        We engineer software that acts as the backbone of your business. From initial MVP to global scale, we deploy custom SaaS products, robust mobile apps, and custom AI agents optimized for high conversion and absolute reliability.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr"
                    custom={scrollDirection}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.08 }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.12
                            }
                        }
                    }}
                >
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            className={service.colSpan || "md:col-span-1"}
                            custom={scrollDirection}
                            variants={cardVariants}
                        >
                            <Link 
                                href={`/services?service=${service.slug}#service-breakdown`} 
                                className="block h-full w-full"
                                onClick={() => {
                                    if (typeof window !== "undefined") {
                                        const event = new CustomEvent("nisschay-select-service", { detail: service.slug });
                                        window.dispatchEvent(event);
                                    }
                                }}
                            >
                                <ServiceCard {...service} title={service.title} desc={service.desc} icon={service.icon} colSpan={service.colSpan} image={service.image} />
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
