"use client";
import { motion } from "framer-motion";
import { FaArrowRight, FaShieldAlt, FaRocket, FaLayerGroup, FaTrophy } from "react-icons/fa";

export default function CTASection() {
    return (
        <section className="relative py-24 px-4 overflow-hidden bg-white">
            <div className="max-w-5xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Headline - Acknowledging the Scroll */}
                    <h2 className="text-4xl md:text-6xl lg:text-6xl font-bold mb-6 leading-[1.1]"
                        style={{
                            fontFamily: "var(--font-playfair)",
                            fontWeight: 400,
                            letterSpacing: "-0.02em"
                        }}
                    >
                        <span className="text-gray-900">You've Seen What We Can Do.</span>
                        <br />
                        <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                            Let's Build Yours.
                        </span>
                    </h2>

                    {/* Subheading - Connecting exploration to action */}
                    <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                        You've explored our work, understood our process, and seen the results we deliver.
                        Now it's time to turn your vision into reality.
                        <span className="block mt-4 font-medium text-primary-700">Ready to start your success story?</span>
                    </p>

                    {/* Trust Pillars */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
                        <div className="flex flex-col items-center p-4 rounded-xl bg-white/50 border border-white/60 hover:border-blue-200 transition-colors duration-300">
                            <div className="p-3 bg-blue-50 rounded-lg text-blue-600 mb-3">
                                <FaShieldAlt className="text-xl" />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-1">Bank-Grade Security</h3>
                            <p className="text-sm text-gray-500">Uncompromised Protection</p>
                        </div>
                        <div className="flex flex-col items-center p-4 rounded-xl bg-white/50 border border-white/60 hover:border-purple-200 transition-colors duration-300">
                            <div className="p-3 bg-purple-50 rounded-lg text-purple-600 mb-3">
                                <FaRocket className="text-xl" />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-1">High Performance</h3>
                            <p className="text-sm text-gray-500">Speed That Wins</p>
                        </div>
                        <div className="flex flex-col items-center p-4 rounded-xl bg-white/50 border border-white/60 hover:border-cyan-200 transition-colors duration-300">
                            <div className="p-3 bg-cyan-50 rounded-lg text-cyan-600 mb-3">
                                <FaLayerGroup className="text-xl" />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-1">Scalable Architecture</h3>
                            <p className="text-sm text-gray-500">Growth Without Limits</p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <a
                                href="#contact"
                                className="group px-8 py-4 bg-primary-600 text-white font-bold rounded-full text-lg shadow-lg hover:shadow-xl hover:bg-primary-700 transition-all duration-300 flex items-center gap-2 no-underline"
                            >
                                Claim Your Strategy Session
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
