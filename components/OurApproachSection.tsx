"use client";
import { motion } from "framer-motion";
import { FaComments, FaCode, FaRocket, FaHeadset } from "react-icons/fa";

export default function OurApproachSection() {
    const steps = [
        {
            icon: FaComments,
            title: "Discovery & Strategy",
            description: "We start by deeply understanding your business goals, target audience, and technical requirements. No cookie-cutter solutions—every project is tailored to your needs.",
            color: "blue"
        },
        {
            icon: FaCode,
            title: "Agile Development",
            description: "Using modern development practices, we build in sprints with continuous feedback loops. You're involved at every stage, ensuring we're always aligned with your vision.",
            color: "purple"
        },
        {
            icon: FaRocket,
            title: "Launch & Deployment",
            description: "We handle everything from testing to deployment, ensuring a smooth launch. Our team ensures your product goes live without a hitch.",
            color: "cyan"
        },
        {
            icon: FaHeadset,
            title: "Ongoing Support",
            description: "Our partnership doesn't end at launch. We provide ongoing maintenance, updates, and support to ensure your product continues to perform at its best.",
            color: "green"
        }
    ];

    const colorClasses = {
        blue: { bg: "bg-blue-50", iconBg: "bg-blue-100", text: "text-blue-600", border: "border-blue-200" },
        purple: { bg: "bg-purple-50", iconBg: "bg-purple-100", text: "text-purple-600", border: "border-purple-200" },
        cyan: { bg: "bg-cyan-50", iconBg: "bg-cyan-100", text: "text-cyan-600", border: "border-cyan-200" },
        green: { bg: "bg-green-50", iconBg: "bg-green-100", text: "text-green-600", border: "border-green-200" }
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

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl text-gray-900 mb-4"
                        style={{
                            fontFamily: "var(--font-playfair)",
                            fontWeight: 400,
                            letterSpacing: "-0.02em"
                        }}
                    >
                        How We Work
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Our proven process ensures quality, transparency, and results at every step.
                    </p>
                </motion.div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => {
                        const colors = colorClasses[step.color as keyof typeof colorClasses];
                        const Icon = step.icon;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="relative"
                            >
                                {/* Step Number */}
                                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg z-10">
                                    {index + 1}
                                </div>

                                {/* Card */}
                                <div className={`bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow border ${colors.border} h-full`}>
                                    <div className={`w-12 h-12 ${colors.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                                        <Icon className={`${colors.text} text-xl`} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 font-outfit">{step.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <p className="text-blue-600 font-bold text-lg">
                        Ready to experience the Nisschay difference?
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
