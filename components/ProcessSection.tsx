"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiCheckCircle, FiCompass, FiCpu, FiGitMerge, FiGlobe, FiLayers, FiShield } from "react-icons/fi";

const steps = [
    {
        title: "The Decision",
        desc: "Initial consultation to understand your goals, define project scope, and establish success metrics. We align on a shared vision with clear deliverables.",
        icon: FiCheckCircle,
        number: "01",
        color: "from-emerald-500 to-teal-500",
        bgColor: "bg-emerald-500",
        pathPosition: 0 // Position along the path (0-6)
    },
    {
        title: "Strategic Planning",
        desc: "Comprehensive wireframes, user journey maps, and technical architecture. You'll receive detailed mockups and documentation for approval.",
        icon: FiCompass,
        number: "02",
        color: "from-blue-500 to-indigo-500",
        bgColor: "bg-blue-500",
        pathPosition: 1
    },
    {
        title: "Implementation",
        desc: "Agile development sprints with weekly demos. Watch your product come to life in real-time with continuous feedback loops and iterative improvements.",
        icon: FiCpu,
        number: "03",
        color: "from-violet-500 to-purple-500",
        bgColor: "bg-violet-500",
        pathPosition: 2
    },
    {
        title: "Refinement",
        desc: "Rigorous testing, user feedback integration, and UI/UX polish. Every interaction is refined to perfection based on real-world usage patterns.",
        icon: FiGitMerge,
        number: "04",
        color: "from-pink-500 to-rose-500",
        bgColor: "bg-pink-500",
        pathPosition: 3
    },
    {
        title: "Confirmation",
        desc: "Final quality assurance, performance optimization, and client approval. Your product is battle-tested and ready for the world stage.",
        icon: FiLayers,
        number: "05",
        color: "from-cyan-500 to-blue-500",
        bgColor: "bg-cyan-500",
        pathPosition: 4
    },
    {
        title: "Deployment",
        desc: "Seamless launch with zero downtime. Your product goes live globally with comprehensive monitoring, rollback strategies, and launch support.",
        icon: FiGlobe,
        number: "06",
        color: "from-orange-500 to-amber-500",
        bgColor: "bg-orange-500",
        pathPosition: 5
    },
    {
        title: "Support & Scale",
        desc: "Ongoing maintenance, performance monitoring, and feature enhancements. We ensure stability, security, and continuous growth as you scale.",
        icon: FiShield,
        number: "07",
        color: "from-green-500 to-emerald-500",
        bgColor: "bg-green-500",
        pathPosition: 6
    }
];

// Card positions along the curved road (alternating left/right)
const cardPositions = [
    { x: 15, y: 10, side: 'left' },   // Decision
    { x: 70, y: 18, side: 'right' },  // Planning
    { x: 20, y: 32, side: 'left' },   // Implementation
    { x: 75, y: 42, side: 'right' },  // Refinement
    { x: 18, y: 58, side: 'left' },   // Confirmation
    { x: 72, y: 68, side: 'right' },  // Deployment
    { x: 22, y: 82, side: 'left' },   // Support & Scale
];

export default function ProcessSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section
            ref={containerRef}
            className="relative w-full lg:min-h-[225vh] py-20 px-4 bg-white overflow-hidden"
            id="process"
        >
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-20 relative z-10"
            >
                <h2
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]"
                    style={{
                        fontFamily: "var(--font-playfair)",
                        fontWeight: 400,
                        letterSpacing: "-0.02em"
                    }}
                >
                    <span className="text-gray-900">Your Journey to </span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                        Victory
                    </span>
                </h2>
                <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-light">
                    From initial spark to market success—our battle-tested process transforms ambitious ideas into scalable digital products that users love and investors notice
                </p>
            </motion.div>

            {/* Desktop: Journey Path Visualization */}
            <div className="hidden lg:block relative w-full max-w-5xl mx-auto" style={{ height: '1800px' }}>
                {/* SVG Curved Road */}
                <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 1000 1800"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <defs>
                        <linearGradient id="roadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.4" />
                        </linearGradient>
                        <linearGradient id="progressGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="50%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                    </defs>

                    {/* Background road (full path) */}
                    <motion.path
                        d="M 300 80
                           Q 200 200, 300 320
                           Q 400 440, 700 400
                           Q 900 370, 800 560
                           Q 700 750, 300 720
                           Q 100 700, 200 900
                           Q 300 1100, 700 1120
                           Q 900 1140, 800 1320
                           Q 700 1500, 300 1470
                           Q 100 1450, 300 1620
                           Q 500 1790, 500 1720"
                        fill="none"
                        stroke="url(#roadGradient)"
                        strokeWidth="50"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />

                    {/* Animated progress road */}
                    <motion.path
                        d="M 300 80
                           Q 200 200, 300 320
                           Q 400 440, 700 400
                           Q 900 370, 800 560
                           Q 700 750, 300 720
                           Q 100 700, 200 900
                           Q 300 1100, 700 1120
                           Q 900 1140, 800 1320
                           Q 700 1500, 300 1470
                           Q 100 1450, 300 1620
                           Q 500 1790, 500 1720"
                        fill="none"
                        stroke="url(#progressGradient)"
                        strokeWidth="50"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                            pathLength: pathLength,
                        }}
                        initial={{ pathLength: 0 }}
                    />

                    {/* Road center line (dashed) */}
                    <motion.path
                        d="M 300 80
                           Q 200 200, 300 320
                           Q 400 440, 700 400
                           Q 900 370, 800 560
                           Q 700 750, 300 720
                           Q 100 700, 200 900
                           Q 300 1100, 700 1120
                           Q 900 1140, 800 1320
                           Q 700 1500, 300 1470
                           Q 100 1450, 300 1620
                           Q 500 1790, 500 1720"
                        fill="none"
                        stroke="white"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeDasharray="30 30"
                        opacity="0.7"
                    />
                </svg>

                {/* Cards positioned along the road */}
                {steps.map((step, index) => {
                    const pos = cardPositions[index];

                    return (
                        <motion.div
                            key={index}
                            className="absolute"
                            style={{
                                left: `${pos.x}%`,
                                top: `${pos.y}%`,
                                transform: pos.side === 'center' ? 'translate(-50%, -50%)' :
                                    pos.side === 'left' ? 'translate(-100%, -50%)' :
                                        'translate(0%, -50%)',
                            }}
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1, type: "spring", stiffness: 150 }}
                        >
                            <PathCard step={step} side={pos.side} />
                        </motion.div>
                    );
                })}

                {/* Animated vehicle traveling along road */}
                <motion.div
                    className="absolute w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-xl flex items-center justify-center z-50"
                    style={{
                        left: useTransform(scrollYProgress,
                            [0, 0.14, 0.28, 0.42, 0.57, 0.71, 0.85, 1],
                            ['30%', '20%', '30%', '70%', '80%', '30%', '20%', '22%']
                        ),
                        top: useTransform(scrollYProgress,
                            [0, 0.14, 0.28, 0.42, 0.57, 0.71, 0.85, 1],
                            ['4.2%', '10%', '16.7%', '20.8%', '29.2%', '37.5%', '45.8%', '83.3%']
                        ),
                        boxShadow: '0 0 30px rgba(59, 130, 246, 0.8)',
                    }}
                >
                    <div className="w-4 h-4 rounded-full bg-white animate-pulse" />
                </motion.div>
            </div>

            {/* Mobile & Tablet: Card Stack with Parallax */}
            <div className="lg:hidden relative w-full max-w-lg mx-auto px-4">
                {/* Background decorative elements with parallax */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Floating gradient orbs */}
                    <motion.div
                        className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-3xl"
                        style={{ top: '10%', left: '-20%' }}
                        animate={{
                            y: [0, 30, 0],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-3xl"
                        style={{ top: '50%', right: '-20%' }}
                        animate={{
                            y: [0, -30, 0],
                            scale: [1, 1.15, 1],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </div>

                {/* Progress indicator */}
                <div className="sticky top-20 z-10 mb-8">
                    <div className="bg-white/80 backdrop-blur-md rounded-full p-2 shadow-lg border border-gray-200/50">
                        <div className="flex items-center justify-between px-4 py-2">
                            <span className="text-sm font-semibold text-gray-700">Your Progress</span>
                            <div className="flex gap-1.5">
                                {steps.map((_, index) => (
                                    <motion.div
                                        key={index}
                                        className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                                        initial={{ scale: 0.6, opacity: 0.3 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: false, amount: 0.8, margin: "-100px" }}
                                        transition={{ delay: index * 0.1 }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stacked cards with parallax effect */}
                <div className="space-y-6 relative">
                    {steps.map((step, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={index}
                                className="relative"
                                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: "-50px", amount: 0.3 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 20,
                                    delay: index * 0.1
                                }}
                            >
                                {/* Parallax background layer */}
                                <motion.div
                                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.color} opacity-10 blur-xl`}
                                    style={{
                                        transform: `translateY(${index * 2}px)`,
                                    }}
                                    whileInView={{
                                        y: [0, -10, 0],
                                    }}
                                    viewport={{ once: false, amount: 0.5 }}
                                    transition={{
                                        duration: 3 + index * 0.5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />

                                {/* Main card with depth */}
                                <motion.div
                                    className="relative bg-white rounded-3xl p-6 shadow-xl border border-gray-200/60 overflow-hidden"
                                    style={{
                                        transformStyle: 'preserve-3d',
                                    }}
                                    whileHover={{
                                        y: -8,
                                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {/* Gradient overlay on hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 hover:opacity-5 transition-opacity duration-300`} />

                                    {/* Floating icon with parallax */}
                                    <motion.div
                                        className="relative mb-6"
                                        style={{
                                            transform: 'translateZ(20px)',
                                        }}
                                        whileInView={{
                                            y: [0, -8, 0],
                                        }}
                                        viewport={{ once: false, amount: 0.5 }}
                                        transition={{
                                            duration: 2.5,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: index * 0.2
                                        }}
                                    >
                                        <div className="flex items-center justify-between">
                                            {/* Icon */}
                                            <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                                                <step.icon className="w-8 h-8 text-white relative z-10" />
                                                {/* Icon glow */}
                                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} blur-md opacity-50`} />
                                            </div>

                                            {/* Step number badge */}
                                            <motion.div
                                                className={`w-14 h-14 rounded-xl ${step.bgColor} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                                                whileHover={{ rotate: 360 }}
                                                transition={{ duration: 0.6 }}
                                            >
                                                {step.number}
                                            </motion.div>
                                        </div>
                                    </motion.div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3 font-outfit">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>

                                    {/* Decorative corner accent */}
                                    <div className={`absolute -bottom-6 ${isEven ? '-right-6' : '-left-6'} w-24 h-24 rounded-full bg-gradient-to-br ${step.color} opacity-10 blur-2xl`} />

                                    {/* Progress connector line */}
                                    {index < steps.length - 1 && (
                                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-gradient-to-b from-gray-300 to-transparent" />
                                    )}
                                </motion.div>

                                {/* Side accent line with parallax */}
                                <motion.div
                                    className={`absolute top-8 ${isEven ? '-left-2' : '-right-2'} w-1 h-20 rounded-full bg-gradient-to-b ${step.color} opacity-30`}
                                    initial={{ scaleY: 0 }}
                                    whileInView={{ scaleY: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                                />
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom completion indicator */}
                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-semibold text-sm">Journey Complete</span>
                    </div>
                </motion.div>
            </div>

            {/* Call to Action - Professional & Reassuring */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-24 mb-12 text-center relative z-10 max-w-2xl mx-auto"
            >
                {/* Reassuring Message */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mb-8"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 font-outfit">
                        We're Here to Solve Your Problems
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Don't hesitate. Let's discuss how we can help bring your vision to life.
                    </p>
                </motion.div>

                {/* Sleek Professional Button - Matching Hero Section */}
                <motion.a
                    href="#contact"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 text-white font-semibold rounded-full overflow-hidden no-underline transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-primary-700 hover:scale-105 touch-manipulation"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => {
                        e.preventDefault();
                        const contactSection = document.getElementById('contact');
                        if (contactSection) {
                            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                    }}
                >
                    {/* Subtle shine effect on hover */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    <span className="relative z-10">Get Started Today</span>
                </motion.a>

                {/* Trust Badge */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-6 text-sm text-gray-500 flex items-center justify-center gap-2"
                >
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Free consultation • No commitment required
                </motion.p>
            </motion.div>

        </section>
    );
}

function PathCard({ step, side }: { step: any; side: string }) {
    return (
        <motion.div
            className={`w-80 p-7 rounded-2xl bg-white shadow-xl hover:shadow-2xl border border-gray-200/60 backdrop-blur-xl transition-all duration-300 group relative ${side === 'left' ? 'ml-8' : side === 'right' ? 'mr-8' : ''
                }`}
            whileHover={{ scale: 1.05, y: -8 }}
        >
            {/* Step Number Badge */}
            <div className={`absolute -top-3 -right-3 w-12 h-12 rounded-xl ${step.bgColor} flex items-center justify-center text-white font-bold text-lg shadow-lg z-10`}>
                {step.number}
            </div>

            {/* Icon */}
            <div className={`w-16 h-16 mx-auto mb-5 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                <step.icon className="w-8 h-8 text-white" />
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center font-outfit">
                {step.title}
            </h3>
            <p className="text-sm text-gray-600 text-center leading-relaxed">
                {step.desc}
            </p>

            {/* Hover glow */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`} />

            {/* Animated Arrow Connector to road */}
            {side !== 'center' && (
                <svg
                    className={`absolute top-1/2 -translate-y-1/2 ${side === 'left' ? '-right-8' : '-left-8'
                        }`}
                    width="32"
                    height="24"
                    viewBox="0 0 32 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {side === 'left' ? (
                        // Arrow pointing right (from card to road)
                        <>
                            <motion.path
                                d="M0 12 L24 12"
                                stroke={`currentColor`}
                                strokeWidth="2"
                                strokeLinecap="round"
                                className={`${step.bgColor.replace('bg-', 'text-')}`}
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            />
                            <motion.path
                                d="M20 8 L28 12 L20 16"
                                stroke={`currentColor`}
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                className={`${step.bgColor.replace('bg-', 'text-')}`}
                                initial={{ opacity: 0, x: -5 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                            />
                        </>
                    ) : (
                        // Arrow pointing left (from card to road)
                        <>
                            <motion.path
                                d="M32 12 L8 12"
                                stroke={`currentColor`}
                                strokeWidth="2"
                                strokeLinecap="round"
                                className={`${step.bgColor.replace('bg-', 'text-')}`}
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            />
                            <motion.path
                                d="M12 8 L4 12 L12 16"
                                stroke={`currentColor`}
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                className={`${step.bgColor.replace('bg-', 'text-')}`}
                                initial={{ opacity: 0, x: 5 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                            />
                        </>
                    )}
                </svg>
            )}
        </motion.div>
    );
}

function MobileCard({ step }: { step: any }) {
    return (
        <motion.div
            className="w-full p-7 rounded-2xl bg-white shadow-xl hover:shadow-2xl border border-gray-200/60 backdrop-blur-xl transition-all duration-300 group relative"
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98 }}
        >
            {/* Step Number Badge */}
            <div className={`absolute -top-3 -right-3 w-12 h-12 rounded-xl ${step.bgColor} flex items-center justify-center text-white font-bold text-lg shadow-lg z-10`}>
                {step.number}
            </div>

            {/* Icon */}
            <div className={`w-16 h-16 mx-auto mb-5 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                <step.icon className="w-8 h-8 text-white" />
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center font-outfit">
                {step.title}
            </h3>
            <p className="text-sm text-gray-600 text-center leading-relaxed">
                {step.desc}
            </p>

            {/* Hover glow */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`} />
        </motion.div>
    );
}

