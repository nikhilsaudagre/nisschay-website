"use client";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function StoryTimelineSection() {
    const milestones = [
        {
            year: "2023",
            title: "The Beginning",
            description: "Nisschay was founded with a vision to democratize premium development services for growing businesses.",
            color: "blue"
        },
        {
            year: "2023",
            title: "First Client Success",
            description: "Delivered our first project—a complete web application that helped a startup secure seed funding.",
            color: "purple"
        },
        {
            year: "2024",
            title: "Team Expansion",
            description: "Grew to 15+ talented developers, designers, and strategists committed to client success.",
            color: "cyan"
        },
        {
            year: "2024",
            title: "25+ Projects Milestone",
            description: "Celebrated delivering 25+ successful projects across web, mobile, and cloud solutions.",
            color: "green"
        },
        {
            year: "2025",
            title: "Looking Ahead",
            description: "Expanding our services and building long-term partnerships with ambitious businesses worldwide.",
            color: "indigo"
        }
    ];

    const colorClasses = {
        blue: { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-200" },
        purple: { bg: "bg-purple-100", text: "text-purple-600", border: "border-purple-200" },
        cyan: { bg: "bg-cyan-100", text: "text-cyan-600", border: "border-cyan-200" },
        green: { bg: "bg-green-100", text: "text-green-600", border: "border-green-200" },
        indigo: { bg: "bg-indigo-100", text: "text-indigo-600", border: "border-indigo-200" }
    };

    return (
        <section className="relative py-20 md:py-32 px-4 sm:px-6 bg-white">
            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                        style={{ fontFamily: "var(--font-playfair)" }}
                    >
                        Our Journey
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        From a bold idea to a trusted development partner—here's how we got here.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2"></div>

                    {/* Milestones */}
                    <div className="space-y-12">
                        {milestones.map((milestone, index) => {
                            const colors = colorClasses[milestone.color as keyof typeof colorClasses];
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    {/* Content */}
                                    <div className={`flex-1 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} pl-16 md:pl-0`}>
                                        <div className={`inline-block px-3 py-1 rounded-full ${colors.bg} ${colors.text} text-sm font-bold mb-2`}>
                                            {milestone.year}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                                        <p className="text-gray-600">{milestone.description}</p>
                                    </div>

                                    {/* Center Dot */}
                                    <div className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full ${colors.bg} border-4 ${colors.border} bg-white z-10`}></div>

                                    {/* Spacer for even layout */}
                                    <div className="hidden md:block flex-1"></div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
