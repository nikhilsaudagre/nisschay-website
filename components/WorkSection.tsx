"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    color: string;
    span: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "ArtistsLand",
        category: "Discovery Platform",
        description: "A vibrant marketplace connecting creative talent with global opportunities.",
        image: "/assets/projects/artistsland.png",
        color: "from-pink-500 to-rose-500",
        span: "col-span-1",
    },
    {
        id: 2,
        title: "Helper",
        category: "AI Office Automation",
        description: "Smart booking system for modern workplaces powered by conversational AI.",
        image: "/assets/projects/helper.png",
        color: "from-blue-400 to-indigo-500",
        span: "col-span-1",
    },
    {
        id: 3,
        title: "PickMe",
        category: "Hyper-local Finder",
        description: "Community-driven discovery app integrated directly with WhatsApp.",
        image: "/assets/projects/pickme.png",
        color: "from-teal-400 to-emerald-500",
        span: "col-span-1",
    },
    {
        id: 4,
        title: "Nono",
        category: "Marketing Tech",
        description: "High-performance analytics dashboard for aggressive growth campaigns.",
        image: "/assets/projects/nono.png",
        color: "from-orange-500 to-red-600",
        span: "col-span-1",
    },
];

export default function WorkSection() {
    return (
        <section id="portfolio" className="relative py-24 md:py-32 px-4 overflow-hidden">
            {/* Light Blue Grid Pattern */}
            <div
                className="absolute inset-0 pointer-events-none opacity-60"
                style={{
                    backgroundImage: 'linear-gradient(to right, rgba(59, 130, 246, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.15) 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }}
            />


            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-16 md:mb-24">
                    <motion.span
                        className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Selected Concepts
                    </motion.span>
                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]"
                        style={{
                            fontFamily: "var(--font-playfair)",
                            fontWeight: 400,
                            letterSpacing: "-0.02em"
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <span className="text-gray-900">Real Ideas, </span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                            Future Reality
                        </span>
                    </motion.h2>
                    <motion.p
                        className="text-lg md:text-xl text-gray-500 max-w-xl leading-relaxed font-light"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Showcasing versatility through specific product concepts ranging from creative platforms to enterprise AI.
                    </motion.p>
                </div>

                {/* Projects Grid - 2x2 Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className={`group relative rounded-2xl overflow-hidden cursor-pointer ${project.span} h-[300px] md:h-[380px] border border-gray-100 shadow-sm`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {/* Image Container */}
                            <div className="absolute inset-0 w-full h-full">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                            </div>

                            {/* Content Card (Floating) */}
                            <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <span className={`inline-block px-2 py-1 rounded text-[10px] font-medium bg-gradient-to-r ${project.color} text-white mb-2`}>
                                            {project.category}
                                        </span>
                                        <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                                        <p className="text-white/80 text-xs line-clamp-2">{project.description}</p>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center transform -rotate-45 group-hover:rotate-0 transition-transform duration-500 shrink-0 ml-3">
                                        <ArrowUpRight className="w-4 h-4 text-gray-900" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
