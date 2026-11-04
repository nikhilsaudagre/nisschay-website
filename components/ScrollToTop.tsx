"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const { scrollY, scrollYProgress } = useScroll();

    // Smooth scroll progress value
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Translate progress [0, 1] to SVG stroke-dashoffset [113.1, 0] (for radius 18)
    const strokeDashoffset = useTransform(smoothProgress, [0, 1], [113.097, 0]);

    useEffect(() => {
        const handleScrollToggle = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScrollToggle, { passive: true });
        return () => window.removeEventListener("scroll", handleScrollToggle);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    onClick={scrollToTop}
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="fixed bottom-6 right-6 z-[9999] p-3 rounded-full bg-white text-gray-900 border border-gray-200/80 shadow-2xl hover:border-blue-500/50 flex items-center justify-center cursor-pointer group"
                    aria-label="Scroll to top"
                >
                    {/* SVG Radial Progress Circle */}
                    <svg className="w-10 h-10 transform -rotate-90" viewBox="0 0 40 40">
                        {/* Background track */}
                        <circle
                            cx="20"
                            cy="20"
                            r="18"
                            className="stroke-gray-100 fill-none"
                            strokeWidth="2.5"
                        />
                        {/* Active progress border */}
                        <motion.circle
                            cx="20"
                            cy="20"
                            r="18"
                            className="stroke-blue-600 fill-none"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            style={{
                                strokeDasharray: 113.097,
                                strokeDashoffset,
                            }}
                        />
                    </svg>

                    {/* Up Arrow Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <FiArrowUp className="w-4 h-4 text-gray-750 group-hover:text-blue-600 group-hover:-translate-y-0.5 transition-all duration-300" />
                    </div>
                </motion.button>
            )}
        </AnimatePresence>
    );
}
