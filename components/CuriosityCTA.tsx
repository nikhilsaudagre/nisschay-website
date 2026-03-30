"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function CuriosityCTA() {
    return (
        <section className="relative py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gray-900 rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden group shadow-2xl"
                >
                    {/* Background Decorative elements */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-500/30 transition-colors duration-700" />
                    <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl group-hover:bg-purple-500/30 transition-colors duration-700" />

                    <div className="relative z-10">
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6 border border-blue-500/20"
                        >
                            Curious about the results?
                        </motion.span>
                        
                        <h2 
                            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-10 leading-[1.1]"
                            style={{
                                fontFamily: "var(--font-playfair)",
                                fontWeight: 400,
                                letterSpacing: "-0.01em"
                            }}
                        >
                            See what <span className="italic text-blue-400">we do.</span>
                        </h2>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="/portfolio"
                                className="group/btn inline-flex items-center gap-3 px-10 py-5 bg-white text-gray-900 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl"
                            >
                                Explore Our Portfolio
                                <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
