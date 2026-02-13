"use client";
import { motion } from "framer-motion";
import { FiCheck, FiTrendingUp, FiShield, FiZap, FiUsers } from "react-icons/fi";

export default function ServiceDetailsSection() {
    return (
        <section className="relative w-full py-24 px-4 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]"
                        style={{
                            fontFamily: "var(--font-playfair)",
                            fontWeight: 400,
                            letterSpacing: "-0.02em"
                        }}
                    >
                        <span className="text-gray-900">Why Choose </span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                            Our Services
                        </span>
                    </h2>
                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                        We deliver enterprise-grade solutions with startup agility. Here's what sets us apart.
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    {/* Left Column - Key Benefits */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                            Built for Growth, Designed for Scale
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            Whether you're launching your first product or scaling to millions of users, our services are designed to grow with you. We combine cutting-edge technology with proven methodologies to deliver solutions that drive real business results.
                        </p>

                        <div className="space-y-4">
                            {[
                                {
                                    icon: FiTrendingUp,
                                    title: "Scalable Architecture",
                                    desc: "Built to handle 10x growth without performance degradation"
                                },
                                {
                                    icon: FiShield,
                                    title: "Enterprise Security",
                                    desc: "Bank-level security with compliance certifications"
                                },
                                {
                                    icon: FiZap,
                                    title: "Lightning Fast",
                                    desc: "Optimized for speed with sub-second response times"
                                },
                                {
                                    icon: FiUsers,
                                    title: "Expert Team",
                                    desc: "15+ years combined experience from leading tech companies"
                                }
                            ].map((benefit, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex gap-4 p-4 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors group"
                                >
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                            <benefit.icon className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">{benefit.title}</h4>
                                        <p className="text-sm text-gray-600">{benefit.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column - Service Approach */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                            Our Approach to Excellence
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            We don't just build software—we build partnerships. Every project starts with understanding your unique challenges and goals, then crafting a solution that delivers measurable impact.
                        </p>

                        {/* Process Steps */}
                        <div className="space-y-6">
                            {[
                                {
                                    step: "01",
                                    title: "Discovery & Strategy",
                                    desc: "We dive deep into your business needs, technical requirements, and success metrics to create a tailored roadmap."
                                },
                                {
                                    step: "02",
                                    title: "Agile Development",
                                    desc: "Work in 2-week sprints with regular demos and feedback loops. You see progress every step of the way."
                                },
                                {
                                    step: "03",
                                    title: "Quality Assurance",
                                    desc: "Rigorous testing across devices, browsers, and scenarios ensures a flawless user experience."
                                },
                                {
                                    step: "04",
                                    title: "Launch & Support",
                                    desc: "Smooth deployment with monitoring, analytics, and ongoing optimization to maximize ROI."
                                }
                            ].map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex gap-4"
                                >
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center font-bold text-sm">
                                            {step.step}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                                        <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
