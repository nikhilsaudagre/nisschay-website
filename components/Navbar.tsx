"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Determine if scrolled styling should apply
            setScrolled(currentScrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled
                ? "py-3"
                : "py-6"
                }`}
        >
            <div
                className={`mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500 ease-in-out ${scrolled
                    ? "max-w-4xl"
                    : "max-w-7xl"
                    }`}
            >
                <div
                    className={`relative flex items-center justify-between transition-all duration-500 ease-in-out ${scrolled
                        ? "px-6 py-3 bg-white/80 backdrop-blur-xl shadow-2xl border border-gray-200/50 rounded-full"
                        : "px-6 py-3 bg-white"
                        }`}
                >
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold font-outfit text-primary-600 tracking-tight">
                            Nisschay
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center">
                        <Link href="/contact" className="px-5 py-2 bg-primary-600 text-white text-sm font-semibold rounded-full hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2">
                            Get in Touch
                            <FaArrowRight size={12} />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-gray-600 hover:text-primary-600 focus:outline-none p-2"
                        >
                            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 z-40 p-4 md:hidden"
                    >
                        <div className="mx-4 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100 p-6 flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-gray-800 hover:text-primary-600 transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 border-t border-gray-100">
                                <Link
                                    href="/contact"
                                    className="w-full px-5 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Get in Touch
                                    <FaArrowRight size={14} />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
