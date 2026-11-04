"use client";
import { useState } from "react";
import Link from "next/link";
import { siteConfig, getStudioLocation } from "@/lib/siteConfig";
import Image from "next/image";
import { IconType } from "react-icons";
import { FaLinkedinIn, FaTwitter, FaGithub, FaInstagram, FaHeart } from "react-icons/fa";

export default function Footer() {
    const [newsEmail, setNewsEmail] = useState("");
    const [newsStatus, setNewsStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [newsError, setNewsError] = useState("");
    const [newsTouched, setNewsTouched] = useState(false);

    const validateEmail = (emailStr: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(emailStr.trim());
    };

    const handleNewsletterSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setNewsTouched(true);

        if (!newsEmail.trim()) {
            setNewsStatus("error");
            setNewsError("Email address is required.");
            return;
        }

        if (!validateEmail(newsEmail)) {
            setNewsStatus("error");
            setNewsError("Please enter a valid email address structure (e.g., name@domain.com)");
            return;
        }

        setNewsStatus("submitting");
        setNewsError("");

        try {
            const res = await fetch("/api/newsletter", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: newsEmail }),
            });

            const data = await res.json();

            if (res.ok && data.success) {
                setNewsStatus("success");
                setNewsEmail("");
                setNewsTouched(false);
            } else {
                setNewsStatus("error");
                setNewsError(data.error || "Subscription failed. Please try again.");
            }
        } catch {
            setNewsStatus("error");
            setNewsError("Connection error.");
        }
    };

    return (
        <footer className="relative bg-gradient-to-r from-blue-100/40 via-sky-50/40 to-blue-100/40 text-gray-900 pt-20 pb-10 border-t border-blue-200/60 font-inter overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column & Systems Status */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block transition-transform duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0057fe] rounded-lg">
                            <Image
                                src="/logo.png"
                                alt="nisschay logo"
                                width={154}
                                height={36}
                                className="h-9 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-slate-600 text-sm leading-relaxed max-w-xs font-normal">
                            We combine bespoke visual design with elite system architecture. From secure SaaS platforms to agentic AI workflows—we build the code that runs your business.
                        </p>
                        
                        {/* Live Status Badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-[9px] font-mono font-bold text-emerald-600 select-none">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span>SYSTEMS OPERATIONAL // 99.98% SLA</span>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-3 pt-2">
                            <SocialIcon icon={FaLinkedinIn} href="#" />
                            <SocialIcon icon={FaTwitter} href="#" />
                            <SocialIcon icon={FaGithub} href="#" />
                            <SocialIcon icon={FaInstagram} href="#" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xs font-semibold text-gray-900 tracking-wider uppercase font-mono mb-6">Quick Links</h4>
                        <ul className="space-y-3.5 text-slate-700 text-sm font-normal">
                            <li><Link href="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link></li>
                            <li><Link href="/portfolio" className="hover:text-blue-600 transition-colors">Portfolio</Link></li>
                            <li><Link href="/portfolio#faq" className="hover:text-blue-600 transition-colors">FAQ</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-600 transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h4 className="text-xs font-semibold text-gray-900 tracking-wider uppercase font-mono mb-6">Services Spec</h4>
                        <ul className="space-y-3.5 text-slate-700 text-sm font-normal">
                            <li><Link href="/services?service=web-saas#service-breakdown" className="hover:text-blue-600 transition-colors">Web & SaaS Platforms</Link></li>
                            <li><Link href="/services?service=mobile-apps#service-breakdown" className="hover:text-blue-600 transition-colors">Mobile Applications</Link></li>
                            <li><Link href="/services?service=ai-automation#service-breakdown" className="hover:text-blue-600 transition-colors">AI & WhatsApp Automation</Link></li>
                            <li><Link href="/services?service=cloud-devops#service-breakdown" className="hover:text-blue-600 transition-colors">Cloud scaling & DevOps</Link></li>
                            <li><Link href="/services?service=ui-ux-design#service-breakdown" className="hover:text-blue-600 transition-colors">UI/UX Product Design</Link></li>
                            <li><Link href="/services?service=custom-software#service-breakdown" className="hover:text-blue-600 transition-colors">Enterprise ERP Solutions</Link></li>
                        </ul>
                    </div>

                    {/* Contact Coordinates & Newsletter */}
                    <div className="space-y-6">
                        <div>
                            <h4 className="text-xs font-semibold text-gray-900 tracking-wider uppercase font-mono mb-4">Contact Info</h4>
                            <ul className="space-y-2 text-slate-700 text-xs font-mono font-medium">
                                <li>{siteConfig.email}</li>
                                <li>{siteConfig.phone}</li>
                                <li>{getStudioLocation()}</li>
                                <li className="text-[10px] text-blue-700 uppercase font-extrabold tracking-wider pt-0.5">Response SLA: &lt; 4 hours</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xs font-semibold text-gray-900 tracking-wider uppercase font-mono mb-3">Devstream Specs</h4>
                            {newsStatus === "success" ? (
                                <p className="text-xs text-emerald-650 bg-emerald-50 border border-emerald-100 rounded-xl p-3 font-mono font-bold select-none text-center">
                                    [SUCCESS] ACTIVE_STREAM
                                </p>
                            ) : (
                                <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2">
                                    <div className="flex gap-2">
                                        <input 
                                            type="email" 
                                            required
                                            value={newsEmail}
                                            onChange={(e) => {
                                                setNewsEmail(e.target.value);
                                                if (newsStatus === "error") {
                                                    setNewsStatus("idle");
                                                    setNewsError("");
                                                }
                                            }}
                                            onBlur={() => setNewsTouched(true)}
                                            placeholder="Enter your email" 
                                            className={`px-3.5 py-2.5 rounded-xl bg-slate-50 border text-xs font-normal outline-none transition-all w-full text-slate-800 ${
                                                newsTouched && newsEmail.trim() !== "" && !validateEmail(newsEmail)
                                                    ? "border-rose-500 focus:border-rose-500 focus:bg-rose-50/5"
                                                    : "border-slate-300 focus:border-blue-500 focus:bg-white"
                                            }`}
                                            disabled={newsStatus === "submitting"}
                                        />
                                        <button 
                                            type="submit"
                                            disabled={newsStatus === "submitting"}
                                            className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold font-mono transition-all active:scale-95 select-none disabled:opacity-40"
                                        >
                                            {newsStatus === "submitting" ? "..." : "JOIN"}
                                        </button>
                                    </div>
                                    {newsStatus === "error" && (
                                        <span className="text-[10px] text-rose-500 font-mono">
                                            {newsError}
                                        </span>
                                    )}
                                </form>
                            )}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-blue-200/40 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-xs font-normal">
                    <div className="flex flex-wrap items-center gap-4">
                        <p>&copy; {new Date().getFullYear()} Nisschay. All rights reserved.</p>
                        <span className="text-slate-300">|</span>
                        <Link href="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-[10px] text-slate-500">
                        <span>MADE WITH</span>
                        <FaHeart className="text-red-500 animate-pulse text-xs" />
                        <span>BY NISSCHAY ENGINEERS</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ icon: Icon, href }: { icon: IconType; href: string }) {
    return (
        <a
            href={href}
            className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:border-slate-900 hover:text-white transition-all duration-300"
        >
            <Icon size={14} />
        </a>
    );
}
