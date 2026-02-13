"use client";
import { motion } from "framer-motion";
import { FaEye, FaHeart, FaLightbulb, FaShieldAlt, FaStar } from "react-icons/fa";

export default function MissionVisionSection() {
    return (
        <section className="relative py-20 md:py-32 px-4 sm:px-6 bg-white overflow-hidden">
            {/* Subtle Grid Background */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.06]"
                style={{
                    backgroundImage: 'linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                    backgroundAttachment: 'fixed'
                }}
            />

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Mission Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6"
                        style={{
                            fontFamily: "var(--font-playfair)",
                            fontWeight: 400,
                            letterSpacing: "-0.02em"
                        }}
                    >
                        Our Mission
                    </h2>
                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                        We empower <span className="font-semibold text-blue-600">startups and growing businesses</span> to compete with industry giants by providing enterprise-grade software development, AI automation, and cloud solutions. Our mission is to make <span className="font-semibold text-purple-600">cutting-edge technology accessible</span>—delivering custom web applications, mobile apps, and scalable cloud infrastructure that drive real results. We don't just build software; we build <span className="font-semibold text-rose-600">partnerships</span> that turn ambitious ideas into market-ready products.
                    </p>
                </motion.div>

                {/* Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-16"
                />

                {/* Vision Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >

                    <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6"
                        style={{
                            fontFamily: "var(--font-playfair)",
                            fontWeight: 400,
                            letterSpacing: "-0.02em"
                        }}
                    >
                        Our Vision
                    </h2>
                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                        To become the <span className="font-semibold text-blue-600">go-to development partner</span> for ambitious businesses across the globe—recognized for delivering <span className="font-semibold text-purple-600">exceptional quality</span>, lightning-fast turnaround times, and genuine partnership at every stage. We envision a future where every business, regardless of size, has access to world-class technology solutions that help them <span className="font-semibold text-rose-600">scale, innovate, and dominate</span> their markets.
                    </p>
                </motion.div>

                {/* Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-16"
                />

                {/* Values Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >

                    <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-10"
                        style={{
                            fontFamily: "var(--font-playfair)",
                            fontWeight: 400,
                            letterSpacing: "-0.02em"
                        }}
                    >
                        Our Values
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                        >

                            <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                                <FaShieldAlt className="text-blue-600 text-xl" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2 font-outfit group-hover:text-blue-600 transition-colors">Integrity First</h4>
                            <p className="text-gray-600">Transparent communication and <span className="font-semibold text-blue-600">promises kept</span>.</p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                        >

                            <div className="bg-purple-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-100 transition-colors">
                                <FaLightbulb className="text-purple-600 text-xl" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2 font-outfit group-hover:text-purple-600 transition-colors">Innovation Driven</h4>
                            <p className="text-gray-600">Bringing fresh, <span className="font-semibold text-purple-600">cutting-edge ideas</span> to every project.</p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                        >

                            <div className="bg-rose-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-rose-100 transition-colors">
                                <FaStar className="text-rose-600 text-xl" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2 font-outfit group-hover:text-rose-600 transition-colors">Excellence Always</h4>
                            <p className="text-gray-600">Obsessing over <span className="font-semibold text-rose-600">quality details</span> and user experience.</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
