"use client";
import { motion } from "framer-motion";
import { FiCheckCircle, FiClock, FiShield } from "react-icons/fi";

export default function ContactHeroSection() {
    const trustIndicators = [
        {
            icon: FiClock,
            text: "24-Hour Response",
            color: "blue"
        },
        {
            icon: FiCheckCircle,
            text: "Free Consultation",
            color: "green"
        },
        {
            icon: FiShield,
            text: "NDA Available",
            color: "purple"
        }
    ];

    return (
        <section className="relative py-16 md:py-20 px-4 overflow-hidden bg-white">
            <div className="max-w-5xl mx-auto text-center">
                {/* Main Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-6 tracking-wide uppercase">
                        Get in Touch
                    </span>

                    <h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]"
                        style={{
                            fontFamily: "var(--font-playfair)",
                            fontWeight: 400,
                            letterSpacing: "-0.02em"
                        }}
                    >
                        <span className="text-gray-900">Let's Bring Your </span>
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Vision to Life
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light mb-12">
                        Ready to start your project? Share your ideas with us and we'll turn them into reality.
                        No commitment required—just a conversation about possibilities.
                    </p>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8"
                >
                    {trustIndicators.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200"
                        >
                            <item.icon className={`text-lg ${item.color === 'blue' ? 'text-blue-600' :
                                    item.color === 'green' ? 'text-green-600' :
                                        'text-purple-600'
                                }`} />
                            <span className="text-sm font-medium text-gray-700">
                                {item.text}
                            </span>
                        </div>
                    ))}
                </motion.div>

                {/* Quick Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="grid grid-cols-3 gap-6 max-w-2xl mx-auto"
                >
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1 font-outfit">25+</div>
                        <div className="text-sm text-gray-600">Projects Delivered</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1 font-outfit">98%</div>
                        <div className="text-sm text-gray-600">Client Satisfaction</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1 font-outfit">15+</div>
                        <div className="text-sm text-gray-600">Team Members</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
