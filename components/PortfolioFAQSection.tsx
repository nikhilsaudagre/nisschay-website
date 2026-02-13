"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiChevronDown, FiHelpCircle } from "react-icons/fi";

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "Can you build a similar project for my business?",
        answer: "Absolutely! Each project in our portfolio showcases our capabilities and expertise. We can create custom solutions tailored to your specific business needs, industry, and goals. Let's discuss your requirements and we'll craft a solution that exceeds your expectations."
    },
    {
        question: "I have a limited budget. Can you still help me?",
        answer: "Yes! We understand that every business has budget constraints. We offer flexible pricing models including phased development, MVP-first approaches, and milestone-based payments. Let's discuss your budget openly, and we'll find a solution that delivers maximum value within your financial comfort zone."
    },
    {
        question: "What if I don't like the design or direction?",
        answer: "Your satisfaction is our priority. We include revision rounds in every project phase and maintain open communication throughout. If something doesn't feel right, we'll iterate until it does. We work collaboratively, not dictatorially—your feedback shapes the final product."
    },
    {
        question: "How do I know you won't disappear mid-project?",
        answer: "We've been in business since 2023 with 25+ successful projects and a 98% client satisfaction rate. We use milestone-based contracts, maintain regular communication, and provide project management access so you can track progress in real-time. Our reputation is built on reliability and transparency."
    },
    {
        question: "Are these real client projects or just concepts?",
        answer: "Our portfolio features a mix of both real client work and concept demonstrations. Real projects showcase our proven track record, while concepts demonstrate our innovation and ability to solve complex problems. Each project is clearly labeled to indicate its status."
    },
    {
        question: "Can I talk to your previous clients?",
        answer: "Absolutely! We're happy to connect you with past clients who can share their experience working with us. Client testimonials and references are available upon request. Nothing speaks louder than the success stories of those we've partnered with."
    },
    {
        question: "What if my project idea changes halfway through?",
        answer: "Change is natural in software development! We use agile methodology specifically to accommodate evolving requirements. While major scope changes may affect timeline and budget, we're flexible and will work with you to integrate new ideas smoothly without derailing the project."
    },
    {
        question: "How long does a typical project take?",
        answer: "Project timelines vary based on complexity and scope. A simple web application typically takes 4-6 weeks, while more complex enterprise solutions may require 8-12 weeks or more. We provide detailed timelines during our initial consultation and keep you updated throughout the development process."
    },
    {
        question: "Will I own the code and design?",
        answer: "Yes, 100%! Upon final payment, you receive complete ownership of all source code, designs, assets, and intellectual property. We believe in full transparency and transfer—what we build for you belongs to you, with no strings attached."
    },
    {
        question: "What if something breaks after launch?",
        answer: "All projects include a warranty period for bug fixes related to our work. Beyond that, we offer affordable maintenance packages for ongoing support, updates, and enhancements. We're here for the long haul—your success doesn't end at launch."
    },
    {
        question: "Do I need to understand technical stuff?",
        answer: "Not at all! We speak both 'tech' and 'human.' We'll explain everything in simple terms, avoid jargon, and ensure you understand what's happening at every stage. You focus on your business vision; we handle the technical complexity."
    },
    {
        question: "How involved do I need to be?",
        answer: "As much or as little as you prefer! Some clients want weekly check-ins and hands-on involvement, while others prefer to see major milestones. We adapt to your communication style and availability. At minimum, we need your input at key decision points."
    },
    {
        question: "What makes you different from other agencies?",
        answer: "We combine boutique-level attention with enterprise-grade expertise. Unlike large agencies, you work directly with senior developers, not junior teams. Unlike freelancers, we have the capacity and reliability of an established company. Plus, we genuinely care about your success—not just completing projects."
    },
    {
        question: "Can you sign an NDA before we discuss my idea?",
        answer: "Absolutely! We respect confidentiality and are happy to sign NDAs before any detailed discussions. Your ideas and business information are safe with us. Protecting client privacy is fundamental to how we operate."
    },
    {
        question: "What if I'm not sure exactly what I need?",
        answer: "That's completely normal! Many clients start with a vision but aren't sure about technical requirements. Our discovery phase helps clarify your needs, explore options, and define a clear roadmap. We're consultants first, developers second—we'll help you figure it out together."
    }
];

export default function PortfolioFAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="relative py-20 md:py-32 px-4 bg-white overflow-hidden">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-6">
                        <FiHelpCircle className="text-base" />
                        <span>Frequently Asked Questions</span>
                    </div>
                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]"
                        style={{
                            fontFamily: "var(--font-playfair)",
                            fontWeight: 400,
                            letterSpacing: "-0.02em"
                        }}
                    >
                        <span className="text-gray-900">Got </span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                            Questions?
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
                        Everything you need to know about our portfolio and how we can help bring your vision to life.
                    </p>
                </motion.div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                            <div
                                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index
                                    ? "border-blue-200 shadow-lg shadow-blue-100/50"
                                    : "border-gray-200 hover:border-gray-300 shadow-sm"
                                    }`}
                            >
                                {/* Question Button */}
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between gap-4 text-left transition-colors duration-200 hover:bg-gray-50"
                                >
                                    <span className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
                                        {faq.question}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex-shrink-0"
                                    >
                                        <FiChevronDown
                                            className={`w-6 h-6 transition-colors duration-200 ${openIndex === index ? "text-blue-600" : "text-gray-400"
                                                }`}
                                        />
                                    </motion.div>
                                </button>

                                {/* Answer Content */}
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 pb-6 md:px-8 md:pb-8 pt-2">
                                                <div className="h-px bg-gradient-to-r from-blue-200 via-purple-200 to-transparent mb-4"></div>
                                                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-600 mb-6 text-lg">
                        Still have questions? We'd love to hear from you.
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                        onClick={(e) => {
                            e.preventDefault();
                            const contactSection = document.getElementById('contact');
                            if (contactSection) {
                                contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            } else {
                                window.location.href = '/#contact';
                            }
                        }}
                    >
                        Get in Touch
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
