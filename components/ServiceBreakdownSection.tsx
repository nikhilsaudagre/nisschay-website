"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { serviceBreakdowns } from "@/data/serviceBreakdowns";
import { FiCheck, FiArrowRight } from "react-icons/fi";

export default function ServiceBreakdownSection() {
    const [activeService, setActiveService] = useState(0);
    const service = serviceBreakdowns[activeService];
    const ServiceIcon = service.icon;

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
                        <span className="text-gray-900">Find Your Perfect </span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                            Service Match
                        </span>
                    </h2>
                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                        Explore each service in detail to understand which solution best fits your needs
                    </p>
                </motion.div>

                {/* Service Tabs */}
                <div className="mb-12 overflow-x-auto pb-4">
                    <div className="flex gap-3 min-w-max md:min-w-0 md:flex-wrap md:justify-center">
                        {serviceBreakdowns.map((svc, idx) => {
                            const Icon = svc.icon;
                            return (
                                <motion.button
                                    key={idx}
                                    onClick={() => setActiveService(idx)}
                                    className={`px-4 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${activeService === idx
                                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                                        : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                                        }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Icon className="w-4 h-4" />
                                    <span className="text-sm">{svc.title}</span>
                                </motion.button>
                            );
                        })}
                    </div>
                </div>

                {/* Service Content */}
                <motion.div
                    key={activeService}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
                >
                    {/* Service Header */}
                    <div className="flex items-start gap-6 mb-8 pb-8 border-b border-gray-200">
                        <div className="flex-shrink-0">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center">
                                <ServiceIcon className="w-8 h-8" />
                            </div>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    </div>

                    {/* Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Left Column */}
                        <div className="space-y-10">
                            {/* Benefits */}
                            <div>
                                <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">
                                        1
                                    </span>
                                    Key Benefits
                                </h4>
                                <div className="space-y-4">
                                    {service.benefits.map((benefit, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="flex gap-3 p-4 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors group"
                                        >
                                            <div className="flex-shrink-0 mt-1">
                                                <FiCheck className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-gray-900 mb-1">
                                                    {benefit.title}
                                                </h5>
                                                <p className="text-sm text-gray-600">
                                                    {benefit.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Technologies */}
                            <div>
                                <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center text-sm font-bold">
                                        2
                                    </span>
                                    Technologies We Use
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {service.technologies.map((tech, idx) => (
                                        <motion.span
                                            key={idx}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: idx * 0.05 }}
                                            className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 rounded-lg text-sm font-semibold border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all"
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-10">
                            {/* Use Cases */}
                            <div>
                                <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-lg bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold">
                                        3
                                    </span>
                                    Perfect For
                                </h4>
                                <div className="space-y-4">
                                    {service.useCases.map((useCase, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: 10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="p-4 rounded-xl border-l-4 border-blue-600 bg-gray-50"
                                        >
                                            <h5 className="font-bold text-gray-900 mb-2">
                                                {useCase.scenario}
                                            </h5>
                                            <p className="text-sm text-gray-600">
                                                {useCase.description}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Why Choose */}
                            <div>
                                <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center text-sm font-bold">
                                        4
                                    </span>
                                    Why Choose Us
                                </h4>
                                <div className="space-y-3">
                                    {service.whyChoose.map((reason, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: 10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="flex items-start gap-3"
                                        >
                                            <FiArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                            <p className="text-gray-700">{reason}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                        <p className="text-gray-600 mb-6">
                            Ready to get started with {service.title}?
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 group"
                        >
                            <span>Let's Discuss Your Project</span>
                            <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
