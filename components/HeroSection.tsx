"use client";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowRight, FaCode, FaMobile, FaServer, FaPaperPlane, FaCheckCircle, FaUsers, FaClock } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

export default function HeroSection() {
    // Typewriter State
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);
    const [isFlying, setIsFlying] = useState(false);

    // Words to cycle through - More impactful messaging
    const words = ["Digital Excellence", "Market Leaders", "Growth Engines", "User Experiences"];

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % words.length;
            const fullText = words[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            // Typing Speed logic
            setTypingSpeed(isDeleting ? 50 : 150);

            if (!isDeleting && text === fullText) {
                // Finished typing word, pause before deleting
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === "") {
                // Finished deleting, move to next word
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed, words]);



    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-20 pb-32 md:pb-24 px-4 sm:px-6 bg-white">

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-20">
                <div className="text-center">

                    {/* Main Heading - Bricolage Grotesque (Distinctive Display Font) */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="leading-[1.1] mb-8 md:mb-6 px-2 sm:px-8 md:px-12 overflow-visible w-full"
                        style={{
                            fontFamily: "var(--font-playfair)",
                            fontWeight: 400,
                            letterSpacing: "-0.02em",
                            fontSize: "clamp(1.75rem, 5vw + 1rem, 4.5rem)"
                        }}
                    >
                        <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-500 bg-clip-text text-transparent inline-block px-2">Transform Ideas Into</span>
                        <br />
                        <span className="text-gray-900 inline-flex items-center justify-center w-full">
                            {text}
                            <span className="typewriter-cursor" style={{ height: "clamp(2.5rem, 5vw + 1rem, 5rem)" }}>&nbsp;</span>
                        </span>
                    </motion.h1>


                    {/* Subheading - Geist Sans Typography */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-gray-900 w-full max-w-[95%] md:max-w-[1000px] mx-auto mb-12 md:mb-10 px-4 sm:px-6 box-border"
                        style={{
                            fontFamily: "var(--font-inter)",
                            fontWeight: 500,
                            lineHeight: 1.5,
                            letterSpacing: "0.01em",
                            fontSize: "clamp(1rem, 2vw + 0.3rem, 1.25rem)"
                        }}
                    >
                        Full-stack development agency specializing in<br className="md:hidden" /> web apps, mobile apps, and cloud solutions<br className="md:hidden" /> for <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">growing businesses</span>.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-5 md:gap-4 justify-center items-center mb-16 md:mb-12 w-full max-w-xs mx-auto sm:max-w-none px-4 sm:px-12 md:px-0"
                    >
                        <Link
                            href="/contact"
                            onClick={(e) => {
                                setIsFlying(true);
                                setTimeout(() => {
                                    setIsFlying(false);
                                }, 800);
                            }}
                            className={`btn-flight group w-full sm:w-auto min-w-[160px] px-6 py-3.5 bg-primary-600 text-white text-sm font-medium rounded-full hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2 no-underline ${isFlying ? "is-flying" : ""}`}
                        >
                            <div className="svg-wrapper scale-90">
                                <FaPaperPlane />
                            </div>
                            <span>Book Free Consultation</span>
                        </Link>
                        <Link href="/portfolio" className="w-full sm:w-auto min-w-[160px] px-6 py-3.5 bg-white text-primary-600 text-sm font-medium rounded-full border border-primary-500 hover:bg-primary-50 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 flex items-center justify-center">
                            View Our Work
                        </Link>
                    </motion.div>

                    {/* Stats Ticker - Continuous Scroll */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="mt-16 md:mt-12 w-full max-w-2xl mx-auto overflow-hidden relative"
                    >
                        {/* Gradient fade masks on edges */}
                        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                        <div className="relative w-full flex overflow-hidden">
                            <motion.div
                                className="flex gap-8 whitespace-nowrap"
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{
                                    repeat: Infinity,
                                    ease: "linear",
                                    duration: 20
                                }}
                            >
                                {/* Duplicate stats for seamless loop */}
                                {[...Array(2)].map((_, setIndex) => (
                                    <div key={setIndex} className="flex gap-8">
                                        <StatPill number="25+" label="Projects Delivered" icon={FaCheckCircle} />
                                        <StatPill number="25+" label="Happy Clients" icon={FaUsers} />
                                        <StatPill number="2+" label="Years Experience" icon={FaClock} />
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>


                </div>
            </div >
        </section >
    );
}

// StatPill Component for scrolling stats
function StatPill({ number, label, icon: Icon }: { number: string; label: string; icon: any }) {
    return (
        <div className="flex items-center gap-2">
            <Icon className="w-4 h-4 text-blue-600" />
            <span className="text-lg font-bold text-gray-900" style={{ fontFamily: "var(--font-outfit)" }}>
                {number}
            </span>
            <span className="text-sm font-medium text-gray-600">
                {label}
            </span>
            <span className="text-gray-300 mx-2">•</span>
        </div>
    );
}
