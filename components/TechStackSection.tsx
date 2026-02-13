"use client";
import { motion } from "framer-motion";
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma, FaJava, FaPython, FaDocker
} from "react-icons/fa";
import {
    SiNextdotjs, SiTailwindcss, SiTypescript, SiSpringboot, SiOracle, SiOpenai, SiTensorflow
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

const row1 = [
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
    { name: "React", icon: FaReact, color: "text-cyan-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-300" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "Figma", icon: FaFigma, color: "text-pink-500" },
];

const row2 = [
    { name: "Java", icon: FaJava, color: "text-red-500" },
    { name: "Spring Boot", icon: SiSpringboot, color: "text-green-500" },
    { name: "Oracle", icon: SiOracle, color: "text-red-600" },
    { name: "Azure", icon: VscAzure, color: "text-blue-400" },
    { name: "Python", icon: FaPython, color: "text-yellow-300" },
    { name: "OpenAI", icon: SiOpenai, color: "text-green-300" },
    { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-400" },
    { name: "Docker", icon: FaDocker, color: "text-blue-500" },
];

// Duplicate for continuous loop
const marqueeRow1 = [...row1, ...row1, ...row1];
const marqueeRow2 = [...row2, ...row2, ...row2];

export default function TechStackSection() {
    return (
        <section className="relative w-full py-24 px-0 bg-transparent overflow-hidden">
            <div className="text-center mb-16 relative z-10 px-4">
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
                    <span className="text-gray-900">Our Technology </span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                        Stack
                    </span>
                </motion.h2>
                <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-light">Powering innovation with modern, robust toolsets.</p>
            </div>

            <div className="relative flex flex-col gap-10 w-full overflow-hidden">
                {/* Row 1 - Left */}
                <div className="relative w-full flex overflow-hidden mask-linear-fade">
                    <motion.div
                        className="flex gap-8 whitespace-nowrap"
                        animate={{ x: [0, -1000] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 30
                        }}
                    >
                        {marqueeRow1.map((tech, idx) => (
                            <TechPill key={idx} tech={tech} />
                        ))}
                    </motion.div>
                </div>

                {/* Row 2 - Right */}
                <div className="relative w-full flex overflow-hidden mask-linear-fade">
                    <motion.div
                        className="flex gap-8 whitespace-nowrap"
                        animate={{ x: [-1000, 0] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 35
                        }}
                    >
                        {marqueeRow2.map((tech, idx) => (
                            <TechPill key={idx} tech={tech} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function TechPill({ tech }: { tech: any }) {
    const colorMap: Record<string, string> = {
        'text-orange-500': 'rgb(249, 115, 22)',
        'text-blue-500': 'rgb(59, 130, 246)',
        'text-yellow-400': 'rgb(250, 204, 21)',
        'text-cyan-400': 'rgb(34, 211, 238)',
        'text-white': 'rgb(255, 255, 255)',
        'text-cyan-300': 'rgb(103, 232, 249)',
        'text-blue-600': 'rgb(37, 99, 235)',
        'text-pink-500': 'rgb(236, 72, 153)',
        'text-red-500': 'rgb(239, 68, 68)',
        'text-green-500': 'rgb(34, 197, 94)',
        'text-red-600': 'rgb(220, 38, 38)',
        'text-blue-400': 'rgb(96, 165, 250)',
        'text-yellow-300': 'rgb(253, 224, 71)',
        'text-green-300': 'rgb(134, 239, 172)',
        'text-orange-400': 'rgb(251, 146, 60)',
    };

    const brandColor = colorMap[tech.color] || 'rgb(156, 163, 175)';

    return (
        <div
            className="group relative flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm cursor-pointer hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 w-[max-content]"
            onMouseEnter={(e) => {
                const icon = e.currentTarget.querySelector('svg') as SVGElement;
                const text = e.currentTarget.querySelector('span') as HTMLSpanElement;
                if (icon && text) {
                    icon.style.color = brandColor;
                    text.style.color = brandColor;
                }
            }}
            onMouseLeave={(e) => {
                const icon = e.currentTarget.querySelector('svg') as SVGElement;
                const text = e.currentTarget.querySelector('span') as HTMLSpanElement;
                if (icon && text) {
                    icon.style.color = 'rgb(156, 163, 175)';
                    text.style.color = 'rgb(156, 163, 175)';
                }
            }}
        >
            <tech.icon
                className="w-6 h-6 transition-all duration-300"
                style={{ color: 'rgb(156, 163, 175)' }}
            />
            <span
                className="font-medium transition-all duration-300"
                style={{ color: 'rgb(156, 163, 175)' }}
            >
                {tech.name}
            </span>
        </div>
    );
}
