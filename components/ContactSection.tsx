"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
    FiCheck, 
    FiArrowRight, 
    FiShield, 
    FiMail, 
    FiClock, 
    FiChevronDown 
} from "react-icons/fi";

const serviceOptions = [
    "Website & Web Development",
    "Web Application Development",
    "Custom Software Development",
    "AI Development & Automation",
    "Digital Marketing & SEO",
    "Cloud, DevOps & IT Support",
    "Not sure yet",
];

export default function ContactSection() {
    // Form fields
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [service, setService] = useState("Website & Web Development");
    const [description, setDescription] = useState("");
    const [marketingConsent, setMarketingConsent] = useState(false);

    // Validation & submission states
    const [nameTouched, setNameTouched] = useState(false);
    const [emailTouched, setEmailTouched] = useState(false);
    const [descriptionTouched, setDescriptionTouched] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const validateEmail = (val: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(val.trim());
    };

    const isFormValid = name.trim() !== "" && validateEmail(email) && description.trim() !== "";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setNameTouched(true);
        setEmailTouched(true);
        setDescriptionTouched(true);

        if (!isFormValid) {
            return;
        }

        setIsLoading(true);
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: name.trim(),
                    email: email.trim(),
                    mobile: phone.trim() || undefined,
                    selectedService: service,
                    brief: description.trim(),
                    marketingConsent,
                }),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setIsSubmitted(true);
            } else {
                setErrorMessage(data.error || "Failed to send inquiry. Please try again or email us directly.");
            }
        } catch (error) {
            setErrorMessage("A network error occurred. Please check your connection or contact us directly at hello@nisschay.com.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section
            id="contact"
            className="relative w-full py-20 sm:py-24 lg:py-28 bg-gradient-to-b from-transparent via-blue-50/25 to-transparent overflow-hidden"
        >
            {/* Subtle TrueCraft-inspired dotted background texture */}
            <div
                className="absolute inset-0 pointer-events-none opacity-30"
                style={{
                    backgroundImage: "radial-gradient(#0057fe 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                }}
                aria-hidden="true"
            />

            {/* Soft Ambient Radial Accents */}
            <div
                className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none"
                aria-hidden="true"
            />
            <div
                className="absolute bottom-10 -right-32 w-96 h-96 bg-sky-100/30 rounded-full blur-3xl pointer-events-none"
                aria-hidden="true"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start w-full">
                    {/* ============================================================
                        LEFT COLUMN: Introduction & Why work with Nisschay
                    ============================================================ */}
                    <div className="lg:col-span-5 flex flex-col items-start text-left w-full min-w-0">
                        {/* Section Eyebrow - Matching Nisschay Design Language */}
                        <div className="inline-flex items-center gap-2 mb-4">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0057fe] opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0057fe]" />
                            </span>
                            <span className="w-5 h-[2px] bg-[#0057fe]" aria-hidden="true" />
                            <span className="text-xs font-mono font-bold tracking-[0.22em] text-[#0057fe] uppercase">
                                LET&apos;S CONNECT
                            </span>
                        </div>

                        {/* Headline */}
                        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#000c24] tracking-tight leading-[1.18] font-display mb-5">
                            Let&apos;s talk about what you want to build.
                        </h2>

                        {/* Description */}
                        <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-normal">
                            Have an idea, a business challenge or a project in mind? Tell us what you need. We&apos;ll understand your goals and discuss how Nisschay can help.
                        </p>

                        {/* Subsection: Why work with Nisschay? */}
                        <div className="pt-6 border-t border-slate-200/80 mb-8 w-full">
                            <h3 className="text-sm font-semibold tracking-wide text-[#000c24] uppercase mb-4 font-mono">
                                Why work with Nisschay?
                            </h3>
                            <ul className="space-y-3.5">
                                {[
                                    "Solutions built around your needs.",
                                    "Direct communication with the people doing the work.",
                                    "Clear project scope and practical guidance.",
                                ].map((point, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#0057fe] border border-blue-200/70">
                                            <FiCheck className="h-2.5 w-2.5 stroke-[3]" />
                                        </span>
                                        <span className="text-sm text-slate-700 font-medium leading-relaxed">
                                            {point}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Quick Direct Contact Info */}
                        <div className="space-y-3 w-full max-w-md">
                            <a
                                href="mailto:hello@nisschay.com"
                                className="group flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/90 border border-slate-200/80 hover:border-[#0057fe]/40 hover:shadow-xs transition-all text-slate-700"
                            >
                                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0057fe] flex items-center justify-center shrink-0 group-hover:bg-[#0057fe] group-hover:text-white transition-colors">
                                    <FiMail className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 font-medium">Direct Inquiries</p>
                                    <p className="text-sm font-semibold text-slate-800 group-hover:text-[#0057fe] transition-colors">
                                        hello@nisschay.com
                                    </p>
                                </div>
                            </a>

                            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/90 border border-slate-200/80 text-slate-700">
                                <div className="w-10 h-10 rounded-xl bg-slate-50 text-[#0057fe] flex items-center justify-center shrink-0">
                                    <FiClock className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 font-medium">Response Time</p>
                                    <p className="text-sm font-semibold text-slate-800">
                                        Prompt responses within 24 business hours
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ============================================================
                        RIGHT COLUMN: Inquiry Form Card
                    ============================================================ */}
                    <div className="lg:col-span-7 w-full min-w-0">
                        <div className="bg-white rounded-[28px] sm:rounded-3xl border border-slate-200/90 p-6 sm:p-8 md:p-10 shadow-[0_12px_40px_-15px_rgba(15,23,42,0.06)] relative overflow-hidden">
                            {/* Card Header */}
                            <div className="mb-6 sm:mb-8">
                                <h3 className="text-2xl sm:text-[26px] font-bold text-[#000c24] font-display tracking-tight">
                                    Tell us about your project
                                </h3>
                                <p className="text-slate-500 text-sm mt-1.5">
                                    A few details will help us understand your requirements.
                                </p>
                            </div>

                            {/* Submission Feedback or Form */}
                            {isSubmitted ? (
                                <div className="py-10 px-4 flex flex-col items-center text-center">
                                    <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mb-4">
                                        <FiCheck className="w-7 h-7 stroke-[2.5]" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-[#000c24] font-display mb-2">
                                        Inquiry Received
                                    </h4>
                                    <p className="text-slate-600 text-sm max-w-md mb-6 leading-relaxed">
                                        Thank you for reaching out, <span className="font-semibold text-slate-800">{name}</span>. We have received your project details and our team will get in touch with you shortly.
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setIsSubmitted(false);
                                            setName("");
                                            setEmail("");
                                            setPhone("");
                                            setDescription("");
                                            setService("Website & Web Development");
                                            setNameTouched(false);
                                            setEmailTouched(false);
                                            setDescriptionTouched(false);
                                        }}
                                        className="text-xs font-semibold text-[#0057fe] hover:underline cursor-pointer"
                                    >
                                        Send another project inquiry
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                                    {/* Error Banner */}
                                    {errorMessage && (
                                        <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs leading-relaxed">
                                            {errorMessage}
                                        </div>
                                    )}

                                    {/* 1. Full Name (Required) */}
                                    <div>
                                        <label
                                            htmlFor="contact-name"
                                            className="block text-xs font-semibold text-slate-800 uppercase tracking-wider mb-1.5"
                                        >
                                            Full name <span className="text-[#0057fe]">*</span>
                                        </label>
                                        <input
                                            id="contact-name"
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            onBlur={() => setNameTouched(true)}
                                            placeholder="John Doe"
                                            required
                                            className={`w-full h-11 sm:h-12 px-4 rounded-xl border bg-slate-50/60 hover:bg-white focus:bg-white text-slate-900 text-sm outline-none transition-all placeholder:text-slate-400 ${
                                                nameTouched && !name.trim()
                                                    ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                                                    : "border-slate-200 focus:border-[#0057fe] focus:ring-2 focus:ring-blue-100"
                                            }`}
                                        />
                                        {nameTouched && !name.trim() && (
                                            <p className="text-xs text-red-500 mt-1">
                                                Please enter your full name.
                                            </p>
                                        )}
                                    </div>

                                    {/* 2 & 3. Email Address (Required) + Phone Number (Optional) */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4">
                                        {/* Email Address */}
                                        <div>
                                            <label
                                                htmlFor="contact-email"
                                                className="block text-xs font-semibold text-slate-800 uppercase tracking-wider mb-1.5"
                                            >
                                                Email address <span className="text-[#0057fe]">*</span>
                                            </label>
                                            <input
                                                id="contact-email"
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                onBlur={() => setEmailTouched(true)}
                                                placeholder="john@example.com"
                                                required
                                                className={`w-full h-11 sm:h-12 px-4 rounded-xl border bg-slate-50/60 hover:bg-white focus:bg-white text-slate-900 text-sm outline-none transition-all placeholder:text-slate-400 ${
                                                    emailTouched && (!email.trim() || !validateEmail(email))
                                                        ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                                                        : "border-slate-200 focus:border-[#0057fe] focus:ring-2 focus:ring-blue-100"
                                                }`}
                                            />
                                            {emailTouched && !email.trim() && (
                                                <p className="text-xs text-red-500 mt-1">
                                                    Please enter your email address.
                                                </p>
                                            )}
                                            {emailTouched && email.trim() && !validateEmail(email) && (
                                                <p className="text-xs text-red-500 mt-1">
                                                    Please enter a valid email address.
                                                </p>
                                            )}
                                        </div>

                                        {/* Phone Number */}
                                        <div>
                                            <label
                                                htmlFor="contact-phone"
                                                className="block text-xs font-semibold text-slate-800 uppercase tracking-wider mb-1.5"
                                            >
                                                Phone number{" "}
                                                <span className="text-slate-400 font-normal lowercase tracking-normal">
                                                    (optional)
                                                </span>
                                            </label>
                                            <input
                                                id="contact-phone"
                                                type="tel"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                placeholder="+91 98765 43210"
                                                className="w-full h-11 sm:h-12 px-4 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white focus:bg-white text-slate-900 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-[#0057fe] focus:ring-2 focus:ring-blue-100"
                                            />
                                        </div>
                                    </div>

                                    {/* 4. What do you need help with? (Required Dropdown) */}
                                    <div>
                                        <label
                                            htmlFor="contact-service"
                                            className="block text-xs font-semibold text-slate-800 uppercase tracking-wider mb-1.5"
                                        >
                                            What do you need help with? <span className="text-[#0057fe]">*</span>
                                        </label>
                                        <div className="relative">
                                            <select
                                                id="contact-service"
                                                value={service}
                                                onChange={(e) => setService(e.target.value)}
                                                className="w-full h-11 sm:h-12 px-4 pr-10 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white focus:bg-white text-slate-900 text-sm outline-none transition-all focus:border-[#0057fe] focus:ring-2 focus:ring-blue-100 appearance-none cursor-pointer"
                                            >
                                                {serviceOptions.map((opt) => (
                                                    <option key={opt} value={opt}>
                                                        {opt}
                                                    </option>
                                                ))}
                                            </select>
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                                <FiChevronDown className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* 5. Project Description (Required Textarea) */}
                                    <div>
                                        <label
                                            htmlFor="contact-description"
                                            className="block text-xs font-semibold text-slate-800 uppercase tracking-wider mb-1.5"
                                        >
                                            Project description <span className="text-[#0057fe]">*</span>
                                        </label>
                                        <textarea
                                            id="contact-description"
                                            rows={3}
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            onBlur={() => setDescriptionTouched(true)}
                                            placeholder="Tell us what you're planning to build, target audience, timeline, or key technical challenges..."
                                            required
                                            className={`w-full p-3.5 sm:p-4 rounded-xl border bg-slate-50/60 hover:bg-white focus:bg-white text-slate-900 text-sm outline-none transition-all placeholder:text-slate-400 resize-y min-h-[95px] ${
                                                descriptionTouched && !description.trim()
                                                    ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                                                    : "border-slate-200 focus:border-[#0057fe] focus:ring-2 focus:ring-blue-100"
                                            }`}
                                        />
                                        {descriptionTouched && !description.trim() && (
                                            <p className="text-xs text-red-500 mt-1">
                                                Please share a brief summary of your project.
                                            </p>
                                        )}
                                    </div>

                                    {/* Marketing Consent (Separate, Optional, Unchecked by default) */}
                                    <div className="pt-0.5">
                                        <label className="flex items-start gap-2.5 cursor-pointer select-none">
                                            <input
                                                type="checkbox"
                                                checked={marketingConsent}
                                                onChange={(e) => setMarketingConsent(e.target.checked)}
                                                className="mt-0.5 h-4 w-4 rounded border-slate-300 text-[#0057fe] focus:ring-[#0057fe] cursor-pointer shrink-0"
                                            />
                                            <span className="text-xs text-slate-600 leading-relaxed">
                                                Keep me updated with occasional technology insights and engineering articles from Nisschay.{" "}
                                                <span className="text-slate-400 font-normal">(Optional)</span>
                                            </span>
                                        </label>
                                    </div>

                                    {/* Point of Data Collection DPDP Notice */}
                                    <div className="rounded-xl p-3 bg-slate-50/90 border border-slate-200/80 text-[11px] leading-relaxed text-slate-500 space-y-1">
                                        <div className="flex items-center gap-1.5 font-semibold text-slate-700">
                                            <FiShield className="w-3.5 h-3.5 text-[#0057fe]" />
                                            <span>Data Protection & Privacy Notice</span>
                                        </div>
                                        <p>
                                            <strong className="text-slate-600">Information collected:</strong> Your name, email, phone (if provided), and project requirements.
                                        </p>
                                        <p>
                                            <strong className="text-slate-600">Why it is collected:</strong> To evaluate project requirements, prepare practical technical guidance, and respond to your inquiry. We retain inquiry records only as long as active discussions continue and never sell or rent your information.
                                        </p>
                                        <p>
                                            <strong className="text-slate-600">Your rights:</strong> You can contact us anytime at{" "}
                                            <a
                                                href="mailto:hello@nisschay.com"
                                                className="text-[#0057fe] hover:underline font-medium"
                                            >
                                                hello@nisschay.com
                                            </a>{" "}
                                            to request access, correction, or deletion of your information. Learn more in our{" "}
                                            <Link
                                                href="/privacy"
                                                className="text-[#0057fe] hover:underline font-medium"
                                            >
                                                Privacy Policy
                                            </Link>
                                            .
                                        </p>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="group w-full h-12 rounded-xl bg-[#0057fe] hover:bg-[#0047d6] text-white font-medium text-sm flex items-center justify-center gap-2 transition-all shadow-xs hover:shadow active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                                    >
                                        {isLoading ? (
                                            <>
                                                <svg
                                                    className="animate-spin h-4 w-4 text-white"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                >
                                                    <circle
                                                        className="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                    />
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8v8H4z"
                                                    />
                                                </svg>
                                                <span>Sending Inquiry...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Send Project Inquiry</span>
                                                <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
