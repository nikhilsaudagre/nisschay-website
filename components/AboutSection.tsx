"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { FaRocket, FaHeart, FaShieldAlt, FaStar, FaHandshake, FaLightbulb } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";


// Animated Counter Component
function AnimatedCounter({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number | null = null;
        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * end));

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, end, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
}

export default function AboutSection({ showLearnMore = false }: { showLearnMore?: boolean }) {

    const coreValues = [
        {
            icon: FaLightbulb,
            title: "Innovation",
            desc: "We don't just follow trends; we set them. Pioneering solutions for complex challenges.",
            color: "text-amber-500",
            bg: "bg-amber-50",
            colSpan: "col-span-1 md:col-span-2",
        },
        {
            icon: FaShieldAlt,
            title: "Integrity",
            desc: "Transparency is our foundation. We build trust through honest collaboration.",
            color: "text-emerald-500",
            bg: "bg-emerald-50",
            colSpan: "col-span-1",
            delay: 0.1,
        },
        {
            icon: FaHeart,
            title: "Passion",
            desc: "We love what we do, and it shows in every line of code we write.",
            color: "text-rose-500",
            bg: "bg-rose-50",
            colSpan: "col-span-1",
            delay: 0.2,
        },
        {
            icon: FaStar,
            title: "Excellence",
            desc: "Good isn't enough. We strive for pixel-perfect perfection in every delivery.",
            color: "text-purple-500",
            bg: "bg-purple-50",
            colSpan: "col-span-1 md:col-span-2",
            delay: 0.3,
        },
    ];

    return (
        <section id="about" className="relative w-full overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

                {/* LEFT SIDE: Image Backdrop with Overlay */}
                <div className="relative flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-16 sm:py-20 lg:py-0 overflow-hidden group min-h-[500px] sm:min-h-[600px] lg:min-h-[800px] lg:h-auto">
                    {/* Background Image - Full Visibility */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/about-team.png"
                            alt="Nisschay Team Collaboration"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-1000"
                            priority
                            unoptimized={true}
                        />

                        {/* Gradient Overlay for Text Readability - Darkening bottom/center */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/60 to-gray-900/30 z-10" />
                        <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay z-10" />
                    </div>

                    {/* Content */}
                    <div className="relative z-20 max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block px-4 py-1.5 mb-4 sm:mb-6 rounded-full bg-white/10 border border-white/20 text-white text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md">
                                WHO WE ARE
                            </div>
                            <h2
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8 leading-[1.1] text-white"
                                style={{
                                    fontFamily: "var(--font-playfair)",
                                    fontWeight: 400,
                                    letterSpacing: "-0.02em"
                                }}
                            >
                                <span className="opacity-90">Your Growth</span>
                                <br />
                                <span className="bg-gradient-to-r from-blue-200 via-indigo-200 to-white bg-clip-text text-transparent font-normal">
                                    Partner in Tech.
                                </span>
                            </h2>
                            <p className="text-gray-100 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 max-w-lg font-light drop-shadow-sm">
                                We turn complex business challenges into elegant digital solutions—helping startups and growing businesses <span className="font-semibold text-white">launch faster, scale smarter, and compete stronger.</span>
                            </p>
                            <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-lg drop-shadow-sm">
                                Unlike traditional agencies, we act as your extended tech team—bringing Silicon Valley-level expertise without the Silicon Valley price tag.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* RIGHT SIDE: Clean White Background & Informative About Content */}
                <div className="relative bg-white flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-16 sm:py-20 lg:py-12">
                    <div className="relative w-full max-w-2xl mx-auto space-y-8 sm:space-y-12">

                        {/* Section 1: About Nisschay Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                About Nisschay
                                <div className="h-px flex-1 bg-gray-200 rounded-full"></div>
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                The software development industry had a problem: businesses were forced to choose between expensive agencies with slow processes or cheap solutions with unreliable quality.
                            </p>
                            <p className="text-gray-600 leading-relaxed mt-4">
                                We founded Nisschay in 2023 to fill that gap—offering enterprise-grade development with startup agility. Our team brings experience from leading tech companies, but we operate with the speed and flexibility that growing businesses need.
                            </p>
                            <p className="text-gray-600 leading-relaxed mt-4">
                                We're not just building software; we're building long-term partnerships that help our clients scale confidently.
                            </p>
                        </motion.div>

                        {/* Section 2: Company Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-4"
                        >
                            <div className="bg-gradient-to-br from-blue-50 to-white p-5 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow">
                                <div className="text-3xl font-bold text-blue-600 mb-1">2023</div>
                                <div className="text-xs text-gray-600 font-medium">Founded</div>
                            </div>
                            <div className="bg-gradient-to-br from-purple-50 to-white p-5 rounded-xl border border-purple-100 hover:shadow-lg transition-shadow">
                                <div className="text-3xl font-bold text-purple-600 mb-1"><AnimatedCounter end={15} />+</div>
                                <div className="text-xs text-gray-600 font-medium">Team Members</div>
                            </div>
                            <div className="bg-gradient-to-br from-cyan-50 to-white p-5 rounded-xl border border-cyan-100 hover:shadow-lg transition-shadow">
                                <div className="text-3xl font-bold text-cyan-600 mb-1"><AnimatedCounter end={25} />+</div>
                                <div className="text-xs text-gray-600 font-medium">Projects Delivered</div>
                            </div>
                            <div className="bg-gradient-to-br from-green-50 to-white p-5 rounded-xl border border-green-100 hover:shadow-lg transition-shadow">
                                <div className="text-3xl font-bold text-green-600 mb-1"><AnimatedCounter end={98} suffix="%" /></div>
                                <div className="text-xs text-gray-600 font-medium">Client Satisfaction</div>
                            </div>
                        </motion.div>

                        {/* Section 3: Why Choose Nisschay */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h4 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Nisschay</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="group p-5 rounded-xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                        <FaRocket size={20} />
                                    </div>
                                    <h5 className="font-bold text-gray-900 mb-2">End-to-End Solutions</h5>
                                    <p className="text-sm text-gray-600 leading-relaxed">From concept to deployment and beyond, we handle every aspect of your digital journey.</p>
                                </div>
                                <div className="group p-5 rounded-xl bg-white border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300">
                                    <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                        <FaLightbulb size={20} />
                                    </div>
                                    <h5 className="font-bold text-gray-900 mb-2">Agile Methodology</h5>
                                    <p className="text-sm text-gray-600 leading-relaxed">Rapid iterations with continuous feedback ensure we're always aligned with your goals.</p>
                                </div>
                                <div className="group p-5 rounded-xl bg-white border border-gray-100 hover:border-cyan-200 hover:shadow-lg transition-all duration-300">
                                    <div className="w-10 h-10 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                        <FaStar size={20} />
                                    </div>
                                    <h5 className="font-bold text-gray-900 mb-2">Modern Tech Stack</h5>
                                    <p className="text-sm text-gray-600 leading-relaxed">Leveraging cutting-edge technologies to build future-proof, scalable solutions.</p>
                                </div>
                                <div className="group p-5 rounded-xl bg-white border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300">
                                    <div className="w-10 h-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                        <FaHandshake size={20} />
                                    </div>
                                    <h5 className="font-bold text-gray-900 mb-2">True Partnership</h5>
                                    <p className="text-sm text-gray-600 leading-relaxed">We're invested in your long-term success, not just project completion.</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Section 4: Core Values (Compact) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="pt-8 border-t border-gray-200"
                        >
                            <h4 className="text-xl font-bold text-gray-900 mb-4">Our Core Values</h4>
                            <div className="flex flex-wrap gap-3">
                                {coreValues.map((value, idx) => (
                                    <div
                                        key={idx}
                                        className={`group flex items-center gap-2 px-4 py-2.5 rounded-full ${value.bg} border border-gray-100 hover:shadow-md transition-all duration-300`}
                                    >
                                        <value.icon className={`${value.color} group-hover:scale-110 transition-transform`} size={18} />
                                        <span className="font-semibold text-gray-900 text-sm">{value.title}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Learn More Button */}
                        {showLearnMore && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="pt-6"
                            >
                                <a
                                    href="/about"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg group"
                                >
                                    <span>Learn More About Us</span>
                                    <svg
                                        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </motion.div>
                        )}

                    </div>
                </div>

            </div>
        </section>
    );
}
