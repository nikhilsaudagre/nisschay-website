"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaLinkedin, FaTwitter, FaGithub, FaPaperPlane, FaCheckCircle } from "react-icons/fa";

export default function ContactSection() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Show success message
        setIsSubmitted(true);
        // Reset form after 5 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            (e.target as HTMLFormElement).reset();
        }, 5000);
    };

    return (
        <section className="relative py-16 sm:py-20 md:py-24 px-4 overflow-hidden bg-white" id="contact">
            <div className="max-w-7xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden relative shadow-xl border border-gray-200">

                {/* Light Background */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-50 to-white"></div>

                <div className="relative z-10 p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">

                        {/* Left Column: Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block py-1.5 px-4 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-700 text-xs sm:text-sm font-semibold mb-4 sm:mb-6 tracking-wide uppercase">
                                Get in Touch
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-900 leading-[1.1]"
                                style={{
                                    fontFamily: "var(--font-playfair)",
                                    fontWeight: 400,
                                    letterSpacing: "-0.02em"
                                }}
                            >
                                <span className="text-gray-900">Let's Build the </span>
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Future Together.
                                </span>
                            </h2>
                            <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-lg leading-relaxed font-light">
                                Have a project in mind? We'd love to hear about it. Reach out to us and let's start a conversation that matters.
                            </p>

                            <div className="space-y-6 mb-12">
                                <ContactItem
                                    icon={FaEnvelope}
                                    title="Email Us"
                                    content="hello@nisschay.com"
                                    link="mailto:hello@nisschay.com"
                                />
                                <ContactItem
                                    icon={FaPhoneAlt}
                                    title="Call Us"
                                    content="+91 98765 43210"
                                    link="tel:+919876543210"
                                />
                                <ContactItem
                                    icon={FaMapMarkerAlt}
                                    title="Visit Us"
                                    content="Bangalore, India"
                                    link="#"
                                />
                            </div>

                            {/* Business Hours & Response Time */}
                            <div className="mb-8 p-4 rounded-xl bg-blue-50/50 border border-blue-100">
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-center gap-2 text-gray-700">
                                        <span className="font-semibold">Business Hours:</span>
                                        <span>Mon-Fri, 9 AM - 6 PM IST</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-700">
                                        <span className="font-semibold">Response Time:</span>
                                        <span>Usually within 24 hours</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <SocialLink icon={FaLinkedin} href="#" />
                                <SocialLink icon={FaTwitter} href="#" />
                                <SocialLink icon={FaGithub} href="#" />
                            </div>
                        </motion.div>

                        {/* Right Column: Glass Form */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-blue-200/50 shadow-xl relative">
                                {/* Success Message Overlay */}
                                <AnimatePresence>
                                    {isSubmitted && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            className="absolute inset-0 bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl flex flex-col items-center justify-center z-20 p-8"
                                        >
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                            >
                                                <FaCheckCircle className="text-5xl sm:text-6xl text-green-500 mb-4" />
                                            </motion.div>
                                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Message Received!</h3>
                                            <p className="text-gray-700 text-center text-sm sm:text-base font-medium mb-4">
                                                What happens next:
                                            </p>
                                            <div className="text-left max-w-sm mx-auto space-y-2 text-sm text-gray-600">
                                                <div className="flex items-start gap-2">
                                                    <span className="text-blue-600 font-bold">1.</span>
                                                    <span>We'll review your request (within 2 hours)</span>
                                                </div>
                                                <div className="flex items-start gap-2">
                                                    <span className="text-blue-600 font-bold">2.</span>
                                                    <span>You'll hear from us (within 24 hours)</span>
                                                </div>
                                                <div className="flex items-start gap-2">
                                                    <span className="text-blue-600 font-bold">3.</span>
                                                    <span>We'll schedule a discovery call</span>
                                                </div>
                                            </div>
                                            <p className="text-gray-500 text-xs mt-4">
                                                Check your email for confirmation.
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <form className="space-y-5" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <ModernInput label="First Name" placeholder="John" type="text" required />
                                        <ModernInput label="Last Name" placeholder="Doe" type="text" required />
                                    </div>
                                    <ModernInput label="Email Address" placeholder="john@company.com" type="email" required />

                                    <div className="relative group">
                                        <select required className="w-full px-5 py-4 pt-5 rounded-xl bg-white border border-gray-300 focus:border-blue-500 focus:bg-blue-50/50 transition-all duration-300 outline-none text-gray-900 appearance-none font-medium cursor-pointer relative z-10">
                                            <option value="" className="text-gray-900 bg-white">Select a Service</option>
                                            <option className="text-gray-900 bg-white">Web Development</option>
                                            <option className="text-gray-900 bg-white">Mobile Application</option>
                                            <option className="text-gray-900 bg-white">UI/UX Design</option>
                                            <option className="text-gray-900 bg-white">IT Consulting</option>
                                            <option className="text-gray-900 bg-white">AI/ML Integration</option>
                                            <option className="text-gray-900 bg-white">Other</option>
                                        </select>
                                        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 pointer-events-none text-gray-400 z-0">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="relative group">
                                            <select className="w-full px-5 py-4 pt-5 rounded-xl bg-white border border-gray-300 focus:border-blue-500 focus:bg-blue-50/50 transition-all duration-300 outline-none text-gray-900 appearance-none font-medium cursor-pointer relative z-10">
                                                <option value="" className="text-gray-900 bg-white">Budget Range</option>
                                                <option className="text-gray-900 bg-white">Under $5,000</option>
                                                <option className="text-gray-900 bg-white">$5,000 - $15,000</option>
                                                <option className="text-gray-900 bg-white">$15,000 - $30,000</option>
                                                <option className="text-gray-900 bg-white">$30,000+</option>
                                                <option className="text-gray-900 bg-white">Not sure yet</option>
                                            </select>
                                            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 pointer-events-none text-gray-400 z-0">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                            </div>
                                        </div>
                                        <div className="relative group">
                                            <select className="w-full px-5 py-4 pt-5 rounded-xl bg-white border border-gray-300 focus:border-blue-500 focus:bg-blue-50/50 transition-all duration-300 outline-none text-gray-900 appearance-none font-medium cursor-pointer relative z-10">
                                                <option value="" className="text-gray-900 bg-white">Project Timeline</option>
                                                <option className="text-gray-900 bg-white">ASAP (1-2 weeks)</option>
                                                <option className="text-gray-900 bg-white">1-2 months</option>
                                                <option className="text-gray-900 bg-white">3-6 months</option>
                                                <option className="text-gray-900 bg-white">6+ months</option>
                                                <option className="text-gray-900 bg-white">Flexible</option>
                                            </select>
                                            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 pointer-events-none text-gray-400 z-0">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative group">
                                        <select className="w-full px-5 py-4 pt-5 rounded-xl bg-white border border-gray-300 focus:border-blue-500 focus:bg-blue-50/50 transition-all duration-300 outline-none text-gray-900 appearance-none font-medium cursor-pointer relative z-10">
                                            <option value="" className="text-gray-900 bg-white">How did you hear about us?</option>
                                            <option className="text-gray-900 bg-white">Google Search</option>
                                            <option className="text-gray-900 bg-white">Referral</option>
                                            <option className="text-gray-900 bg-white">LinkedIn</option>
                                            <option className="text-gray-900 bg-white">Portfolio/Website</option>
                                            <option className="text-gray-900 bg-white">Social Media</option>
                                            <option className="text-gray-900 bg-white">Other</option>
                                        </select>
                                        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 pointer-events-none text-gray-400 z-0">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                    </div>

                                    <div className="relative group">
                                        <textarea
                                            rows={4}
                                            className="w-full px-5 py-4 pt-6 rounded-xl bg-white border border-gray-300 focus:border-blue-500 focus:bg-blue-50/50 transition-all duration-300 outline-none resize-none text-gray-900 peer"
                                            placeholder=" "
                                            id="message"
                                            required
                                        ></textarea>
                                        <label htmlFor="message" className="absolute left-5 top-2 text-gray-600 text-xs transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600 pointer-events-none">
                                            Tell us about your project...
                                        </label>
                                    </div>

                                    <button type="submit" className="w-full py-4 sm:py-4.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 mt-2 text-sm sm:text-base">
                                        Send Message
                                        <FaPaperPlane className="text-xs" />
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ContactItem({ icon: Icon, title, content, link }: any) {
    return (
        <a href={link} className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 border border-blue-200">
                <Icon className="text-lg" />
            </div>
            <div>
                <p className="text-gray-600 text-sm mb-0.5">{title}</p>
                <p className="text-gray-900 font-medium group-hover:text-blue-600 transition-colors">{content}</p>
            </div>
        </a>
    );
}

function ModernInput({ label, placeholder, type, required }: any) {
    return (
        <div className="relative group">
            <input
                type={type}
                className="w-full px-5 py-4 pt-6 rounded-xl bg-white border border-gray-300 focus:border-blue-500 focus:bg-blue-50/50 transition-all duration-300 outline-none text-gray-900 peer font-medium"
                placeholder=" "
                id={label}
                required={required}
            />
            <label
                htmlFor={label}
                className="absolute left-5 top-2 text-gray-600 text-xs transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-blue-600 pointer-events-none"
            >
                {label}
            </label>
        </div>
    );
}

function SocialLink({ icon: Icon, href }: any) {
    return (
        <a href={href} className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300 border border-blue-200">
            <Icon className="text-lg" />
        </a>
    );
}
