"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight, FaPaperPlane, FaUsers, FaAward, FaChartLine } from "react-icons/fa";

export default function JoinJourneySection() {
    const stats = [
        {
            icon: FaChartLine,
            value: "25+",
            label: "Projects Delivered",
            color: "blue"
        },
        {
            icon: FaAward,
            value: "98%",
            label: "Client Satisfaction",
            color: "purple"
        },
        {
            icon: FaUsers,
            value: "15+",
            label: "Team Members",
            color: "cyan"
        }
    ];

    const colorClasses = {
        blue: { bg: "bg-blue-100", text: "text-blue-600" },
        purple: { bg: "bg-purple-100", text: "text-purple-600" },
        cyan: { bg: "bg-cyan-100", text: "text-cyan-600" }
    };

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

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl text-gray-900 mb-4"
                        style={{
                            fontFamily: "var(--font-playfair)",
                            fontWeight: 400,
                            letterSpacing: "-0.02em"
                        }}
                    >
                        Ready to Build Something Amazing?
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        Join the growing businesses that trust Nisschay to turn their ideas into powerful digital products. Let's create something extraordinary together.
                    </p>
                </motion.div>

                {/* Stats Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
                >
                    {stats.map((stat, index) => {
                        const colors = colorClasses[stat.color as keyof typeof colorClasses];
                        const Icon = stat.icon;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100 text-center"
                            >
                                <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                                    <Icon className={`${colors.text} text-xl`} />
                                </div>
                                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 font-outfit">{stat.value}</div>
                                <div className="text-gray-600 text-sm">{stat.label}</div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Link
                        href="/contact"
                        className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3"
                    >
                        <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                        <span>Book Free Consultation</span>
                    </Link>
                    <Link
                        href="/portfolio"
                        className="group px-8 py-4 bg-white text-blue-600 font-semibold rounded-full border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-3"
                    >
                        <span>View Our Work</span>
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
