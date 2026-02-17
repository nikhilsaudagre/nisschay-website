"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiCheckCircle, FiCompass, FiCpu, FiGitMerge, FiLayers, FiGlobe, FiShield } from "react-icons/fi";

const steps = [
    {
        title: "The Decision",
        desc: "Initial consultation to understand your goals, define project scope, and establish success metrics. We align on a shared vision with clear deliverables.",
        icon: FiCheckCircle,
        number: "01",
        color: "from-emerald-500 to-teal-500",
        bgColor: "bg-emerald-500"
    },
    {
        title: "Strategic Planning",
        desc: "Comprehensive wireframes, user journey maps, and technical architecture. You'll receive detailed mockups and documentation for approval.",
        icon: FiCompass,
        number: "02",
        color: "from-blue-500 to-indigo-500",
        bgColor: "bg-blue-500"
    },
    {
        title: "Implementation",
        desc: "Agile development sprints with weekly demos. Watch your product come to life in real-time with continuous feedback loops and iterative improvements.",
        icon: FiCpu,
        number: "03",
        color: "from-violet-500 to-purple-500",
        bgColor: "bg-violet-500"
    },
    {
        title: "Refinement",
        desc: "Rigorous testing, user feedback integration, and UI/UX polish. Every interaction is refined to perfection based on real-world usage patterns.",
        icon: FiGitMerge,
        number: "04",
        color: "from-pink-500 to-rose-500",
        bgColor: "bg-pink-500"
    },
    {
        title: "Confirmation",
        desc: "Final quality assurance, performance optimization, and client approval. Your product is battle-tested and ready for the world stage.",
        icon: FiLayers,
        number: "05",
        color: "from-cyan-500 to-blue-500",
        bgColor: "bg-cyan-500"
    },
    {
        title: "Deployment",
        desc: "Seamless launch with zero downtime. Your product goes live globally with comprehensive monitoring, rollback strategies, and launch support.",
        icon: FiGlobe,
        number: "06",
        color: "from-orange-500 to-amber-500",
        bgColor: "bg-orange-500"
    },
    {
        title: "Support & Scale",
        desc: "Ongoing maintenance, performance monitoring, and feature enhancements. We ensure stability, security, and continuous growth as you scale.",
        icon: FiShield,
        number: "07",
        color: "from-green-500 to-emerald-500",
        bgColor: "bg-green-500"
    }
];

export default function ProcessSection() {
    return (
        <section
            className="relative w-full py-20 md:py-32 px-4 sm:px-6 bg-white"
            id="process"
        >
            {/* Decorative Elements */}

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Split Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                    {/* LEFT SIDE - Heading & Subheading */}
                    <div className="relative">
                        <div className="lg:sticky lg:top-32 lg:h-fit">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                            >
                                {/* Eyebrow Text */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="inline-block mb-4"
                                >
                                    <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
                                        Our Process
                                    </span>
                                </motion.div>

                                {/* Main Heading */}
                                <h2
                                    className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight"
                                    style={{
                                        fontFamily: "var(--font-playfair)",
                                        fontWeight: 400,
                                        letterSpacing: "-0.02em"
                                    }}
                                >
                                    <span className="text-gray-900">Your Journey to </span>
                                    <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                        Victory
                                    </span>
                                </h2 >

                                {/* Subheading */}
                                <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8">
                                    From initial spark to market success—our battle-tested process transforms ambitious ideas into scalable digital products that users love and investors notice.
                                </p>

                                {/* CTA Button */}
                                <motion.div>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 hover:-translate-y-1"
                                    >
                                        <span>Start Your Journey</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Vertical Line - Hidden on mobile, visible on desktop */}
                        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-300 to-transparent" />
                    </div>

                    {/* RIGHT SIDE - Process Cards Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            // Make the last item span 2 columns if it's the last odd item
                            const isLastOdd = index === steps.length - 1 && steps.length % 2 !== 0;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -8 }}
                                    className={`group relative bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden ${isLastOdd ? 'sm:col-span-2' : ''}`}
                                >
                                    {/* Gradient Background on Hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                                    <div className="relative">
                                        {/* Number Badge */}
                                        <div className={`absolute -top-3 -right-3 w-12 h-12 rounded-xl ${step.bgColor} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                                            {step.number}
                                        </div>

                                        {/* Icon */}
                                        <div className={`w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-gray-100 ${isLastOdd ? 'mx-auto' : ''}`}>
                                            <Icon className="w-8 h-8 text-gray-900" />
                                        </div>

                                        {/* Content */}
                                        <h3 className={`text-xl md:text-2xl font-bold text-gray-900 mb-3 font-outfit ${isLastOdd ? 'text-center' : ''}`}>
                                            {step.title}
                                        </h3>
                                        <p className={`text-gray-600 leading-relaxed text-sm md:text-base ${isLastOdd ? 'text-center max-w-2xl mx-auto' : ''}`}>
                                            {step.desc}
                                        </p>
                                    </div>

                                    {/* Decorative corner accent */}
                                    <div className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br ${step.color} opacity-10 blur-2xl`} />
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section >
    );
}
