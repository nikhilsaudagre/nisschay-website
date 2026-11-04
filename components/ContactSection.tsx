"use client";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { siteConfig, getStudioLocation } from "@/lib/siteConfig";
import { IconType } from "react-icons";
import { 
    FaEnvelope, 
    FaPhoneAlt, 
    FaLinkedin, 
    FaTwitter, 
    FaGithub, 
    FaPaperPlane, 
    FaCheckCircle 
} from "react-icons/fa";
import { 
    FiUser, 
    FiMail, 
    FiPhone, 
    FiGlobe, 
    FiShield, 
    FiAward, 
    FiZap,
    FiMapPin
} from "react-icons/fi";

type ServiceType = "Web & SaaS Development" | "Mobile App Development" | "AI Integration & Automation" | "Custom Software Development" | "UI/UX & Product Design" | "Cloud & DevOps Services" | "IT Consulting";

export default function ContactSection() {
    const { scrollY } = useScroll();
    const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        const diff = latest - previous;
        if (Math.abs(diff) > 2) {
            setScrollDirection(diff > 0 ? "down" : "up");
        }
    });

    const leftColVariants = {
        hidden: (direction: "up" | "down") => ({
            opacity: 0,
            x: -40,
            y: direction === "down" ? 30 : -30
        }),
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { type: "spring" as const, stiffness: 50, damping: 15 }
        }
    };

    const rightColVariants = {
        hidden: (direction: "up" | "down") => ({
            opacity: 0,
            x: 40,
            y: direction === "down" ? 30 : -30
        }),
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { type: "spring" as const, stiffness: 50, damping: 15, delay: 0.08 }
        }
    };
    
    // Form States
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [country, setCountry] = useState("");
    const [selectedService, setSelectedService] = useState<ServiceType>("Web & SaaS Development");
    const [brief, setBrief] = useState("");
    
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [emailTouched, setEmailTouched] = useState(false);
    const [nameTouched, setNameTouched] = useState(false);
    const [briefTouched, setBriefTouched] = useState(false);

    const validateEmail = (emailStr: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(emailStr.trim());
    };

    const isFormValid = name.trim() !== "" && validateEmail(email) && brief.trim() !== "";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setNameTouched(true);
        setEmailTouched(true);
        setBriefTouched(true);

        if (!isFormValid) return;

        setIsLoading(true);
        setErrorMessage("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    mobile,
                    country,
                    selectedService,
                    brief,
                }),
            });

            const data = await res.json();

            if (res.ok && data.success) {
                setIsSubmitted(true);
                // Reset form values
                setName("");
                setEmail("");
                setMobile("");
                setCountry("");
                setSelectedService("Web & SaaS Development");
                setBrief("");
                setNameTouched(false);
                setEmailTouched(false);
                setBriefTouched(false);

                // Auto hide success overlay after 8 seconds
                setTimeout(() => {
                    setIsSubmitted(false);
                }, 8000);
            } else {
                setErrorMessage(data.error || "Failed to submit inquiry. Please try again.");
            }
        } catch {
            setErrorMessage("Network error. Please verify your internet connection and try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const servicesList: ServiceType[] = [
        "Web & SaaS Development",
        "Mobile App Development",
        "AI Integration & Automation",
        "Custom Software Development",
        "UI/UX & Product Design",
        "Cloud & DevOps Services",
        "IT Consulting"
    ];

    return (
        <section className="relative py-16 sm:py-20 md:py-24 px-4 overflow-hidden bg-white" id="contact">
            {/* Drifting soft background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[260px] bg-gradient-to-tr from-blue-100/10 to-purple-100/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto rounded-[2.5rem] overflow-hidden relative shadow-2xl border border-slate-100 bg-slate-50/30 backdrop-blur-sm">
                
                <div className="relative z-10 p-6 sm:p-8 md:p-12 lg:p-14">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

                        {/* Left Column: Copy & SLA Commitments */}
                        <motion.div 
                            className="lg:col-span-5 flex flex-col items-start text-left justify-center z-10"
                            custom={scrollDirection}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-120px" }}
                            variants={leftColVariants}
                        >
                            <span className="inline-block py-1.5 px-4 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-700 text-xs font-semibold mb-5 tracking-wide uppercase font-mono">
                                [ GET IN TOUCH ]
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-gray-900 leading-[1.15]"
                                style={{
                                    fontFamily: "var(--font-display)",
                                    letterSpacing: "-0.015em"
                                }}
                            >
                                <span className="text-gray-900">Let&apos;s Build the </span>
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Future Together.
                                </span>
                            </h2>
                            <p className="text-gray-550 text-sm sm:text-base mb-8 leading-relaxed font-light">
                                Have a project in mind? We&apos;d love to hear about it. Fill out our scoping form, and our architects will reach out with a blueprint.
                            </p>

                            {/* Trust SLA badges */}
                            <div className="space-y-4 mb-8 w-full border-t border-slate-100 pt-6">
                                <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-700">
                                    <div className="w-8 h-8 rounded-full bg-blue-100/60 border border-blue-200/50 flex items-center justify-center text-blue-600 shrink-0">
                                        <FiShield className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900">100% IP & NDA Protected</p>
                                        <p className="text-[10px] sm:text-xs text-slate-500">Mutual NDAs pre-signed prior to any structural design call.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-700">
                                    <div className="w-8 h-8 rounded-full bg-emerald-100/60 border border-emerald-200/50 flex items-center justify-center text-emerald-600 shrink-0">
                                        <FiAward className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900">Elite Engineering Guarantee</p>
                                        <p className="text-[10px] sm:text-xs text-slate-500">Zero outsourcing. Your systems are built by local, vetted engineers.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-700">
                                    <div className="w-8 h-8 rounded-full bg-purple-100/60 border border-purple-200/50 flex items-center justify-center text-purple-600 shrink-0">
                                        <FiZap className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900">Dynamic Response SLA</p>
                                        <p className="text-[10px] sm:text-xs text-slate-500">We analyze scoping blueprints and respond under 4 hours.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Links */}
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-3 text-sm text-slate-650 w-full font-mono">
                                <a href="mailto:hello@nisschay.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                                    <FaEnvelope className="text-blue-500 text-xs" />
                                    <span>{siteConfig.email}</span>
                                </a>
                                <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                                    <FaPhoneAlt className="text-blue-500 text-xs" />
                                    <span>{siteConfig.phone}</span>
                                </a>
                            </div>
                            <div className="flex items-center gap-2 text-xs font-mono text-slate-600 mb-6">
                                <FiMapPin className="text-[#0057fe] text-xs shrink-0" />
                                <span>Studio: {getStudioLocation()}</span>
                            </div>

                            <div className="flex gap-3.5">
                                <SocialLink icon={FaLinkedin} href="#" />
                                <SocialLink icon={FaTwitter} href="#" />
                                <SocialLink icon={FaGithub} href="#" />
                            </div>
                        </motion.div>

                        {/* Right Column: Single-Pane Scoping Deck Form */}
                        <motion.div 
                            className="lg:col-span-7 w-full relative z-10"
                            custom={scrollDirection}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-120px" }}
                            variants={rightColVariants}
                        >
                            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-[2rem] border border-slate-100 shadow-2xl relative flex flex-col overflow-hidden">
                                
                                {/* Header Tracker */}
                                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-6 select-none">
                                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                                        SPECIFICATION MATRIX
                                    </span>
                                    <div className="flex items-center gap-1.5 font-mono text-[9px] font-bold text-blue-600">
                                        <span>PROJECT BRIEF</span>
                                    </div>
                                </div>

                                {/* Success Scoping Receipt Overlay */}
                                <AnimatePresence>
                                    {isSubmitted && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            className="absolute inset-0 bg-white/98 flex flex-col items-center justify-center z-20 p-8 text-center"
                                        >
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                                                className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-500 mb-6 shadow-sm"
                                            >
                                                <FaCheckCircle className="text-3xl animate-pulse" />
                                            </motion.div>
                                            
                                            <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight font-display">
                                                Thank You for Reaching Out!
                                            </h3>
                                            
                                            <p className="text-slate-600 text-sm font-light max-w-sm leading-relaxed mb-8">
                                                We have received your submission. Our team will review your project parameters and contact you shortly to begin mapping out your structural blueprint.
                                            </p>

                                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200/60 text-[10px] font-mono font-bold text-slate-500 select-none">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                                <span>RESPONSE SLA // &lt; 4 HOURS</span>
                                            </div>

                                            <button
                                                type="button"
                                                onClick={() => setIsSubmitted(false)}
                                                className="mt-6 text-xs font-mono font-bold text-blue-600 hover:text-blue-700 transition-colors uppercase tracking-wider underline cursor-pointer"
                                            >
                                                Send another request
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <form className="space-y-5 flex flex-col" onSubmit={handleSubmit}>
                                    
                                    {/* 1. Identification Fields */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="relative">
                                            <input
                                                type="text"
                                                required
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                onBlur={() => setNameTouched(true)}
                                                className={`w-full px-4 py-3.5 pl-10 rounded-xl bg-slate-50/50 border transition-all outline-none text-slate-800 text-xs sm:text-sm font-semibold peer ${
                                                    nameTouched && name.trim() === ""
                                                        ? "border-rose-500 focus:border-rose-500 focus:bg-rose-50/5"
                                                        : "border-slate-200 focus:border-blue-500 focus:bg-blue-50/10"
                                                }`}
                                                placeholder="Full Name"
                                            />
                                            <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs peer-focus:text-blue-500 transition-colors" />
                                            {nameTouched && name.trim() === "" && (
                                                <p className="text-[9px] text-rose-500 font-mono mt-1 pl-1 select-none">
                                                    * Name is required.
                                                </p>
                                            )}
                                        </div>

                                        <div className="relative">
                                            <input
                                                type="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                onBlur={() => setEmailTouched(true)}
                                                className={`w-full px-4 py-3.5 pl-10 rounded-xl bg-slate-50/50 border transition-all outline-none text-slate-800 text-xs sm:text-sm font-semibold peer ${
                                                    emailTouched && !validateEmail(email)
                                                        ? "border-rose-500 focus:border-rose-500 focus:bg-rose-50/5"
                                                        : "border-slate-200 focus:border-blue-500 focus:bg-blue-50/10"
                                                }`}
                                                placeholder="Email Address"
                                            />
                                            <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs peer-focus:text-blue-500 transition-colors" />
                                            {emailTouched && email.trim() === "" && (
                                                <p className="text-[9px] text-rose-500 font-mono mt-1 pl-1 select-none">
                                                    * Email is required.
                                                </p>
                                            )}
                                            {emailTouched && !validateEmail(email) && email.trim() !== "" && (
                                                <p className="text-[9px] text-rose-500 font-mono mt-1 pl-1 select-none">
                                                    * Enter a valid email.
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* 2. Optional Demographics */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="relative">
                                            <input
                                                type="tel"
                                                value={mobile}
                                                onChange={(e) => setMobile(e.target.value)}
                                                className="w-full px-4 py-3.5 pl-10 rounded-xl bg-slate-50/50 border border-slate-200 focus:border-blue-500 focus:bg-blue-50/10 transition-all outline-none text-slate-800 text-xs sm:text-sm font-semibold peer"
                                                placeholder="Mobile (optional)"
                                            />
                                            <FiPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs peer-focus:text-blue-500 transition-colors" />
                                        </div>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                value={country}
                                                onChange={(e) => setCountry(e.target.value)}
                                                className="w-full px-4 py-3.5 pl-10 rounded-xl bg-slate-50/50 border border-slate-200 focus:border-blue-500 focus:bg-blue-50/10 transition-all outline-none text-slate-800 text-xs sm:text-sm font-semibold peer"
                                                placeholder="Country (optional)"
                                            />
                                            <FiGlobe className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs peer-focus:text-blue-500 transition-colors" />
                                        </div>
                                    </div>

                                    {/* 3. Service Selection */}
                                    <div>
                                        <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-2 select-none">
                                            Select Service Layer
                                        </label>
                                        <div className="flex flex-wrap gap-1.5">
                                            {servicesList.map((service) => {
                                                const isActive = selectedService === service;
                                                return (
                                                    <button
                                                        type="button"
                                                        key={service}
                                                        onClick={() => setSelectedService(service)}
                                                        className={`px-3 py-1.5 rounded-xl text-[11px] sm:text-xs font-medium border transition-all active:scale-[0.97] ${
                                                            isActive
                                                                ? "border-blue-600 bg-blue-50 text-blue-700 shadow-sm font-semibold"
                                                                : "border-slate-200 bg-slate-50/20 text-slate-600 hover:border-slate-300"
                                                        }`}
                                                    >
                                                        {service}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* 4. Project Brief */}
                                    <div>
                                        <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-2 select-none">
                                            Project Brief
                                        </label>
                                        <textarea
                                            rows={4}
                                            required
                                            value={brief}
                                            onChange={(e) => setBrief(e.target.value)}
                                            onBlur={() => setBriefTouched(true)}
                                            placeholder="Describe your scaling, architecture, or integrations requirements here..."
                                            className={`w-full px-4 py-3 rounded-xl bg-slate-50/50 border focus:border-blue-500 focus:bg-blue-50/10 transition-all outline-none resize-none text-slate-800 text-xs sm:text-sm font-light leading-relaxed ${
                                                briefTouched && brief.trim() === ""
                                                    ? "border-rose-500 focus:border-rose-500 focus:bg-rose-50/5"
                                                    : "border-slate-200 focus:border-blue-500 focus:bg-blue-50/10"
                                            }`}
                                        />
                                        {briefTouched && brief.trim() === "" && (
                                            <p className="text-[9px] text-rose-500 font-mono mt-1 pl-1 select-none">
                                                * Project brief is required.
                                            </p>
                                        )}
                                    </div>

                                    {/* Error Message */}
                                    {errorMessage && (
                                        <div className="text-[11px] font-mono text-rose-500 bg-rose-50 border border-rose-100 rounded-xl p-3 text-left">
                                            [ERROR] {errorMessage}
                                        </div>
                                    )}

                                    {/* Submit Button */}
                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-lg hover:shadow-blue-500/25 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-wider disabled:opacity-40"
                                        >
                                            {isLoading ? (
                                                <>
                                                    <span>Sending Request...</span>
                                                    <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                </>
                                            ) : (
                                                <>
                                                    <span>Send Message</span>
                                                    <FaPaperPlane className="text-[10px]" />
                                                </>
                                            )}
                                        </button>
                                    </div>
                                    
                                </form>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}

function SocialLink({ icon: Icon, href }: { icon: IconType; href: string }) {
    return (
        <a href={href} className="w-10 h-10 rounded-full bg-blue-50 hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300 border border-blue-100/40 flex items-center justify-center text-blue-600">
            <Icon className="text-base" />
        </a>
    );
}
