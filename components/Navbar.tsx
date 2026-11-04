"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
import { FiChevronDown, FiLayers, FiTrendingUp } from "react-icons/fi";

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [visible, setVisible] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [isFocusedInside, setIsFocusedInside] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLElement>(null);
    const lastScrollY = useRef(0);
    const ticking = useRef(false);

    // Passive scroll listener with requestAnimationFrame to handle show/hide
    useEffect(() => {
        const handleScroll = () => {
            if (!ticking.current) {
                window.requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY;

                    // Scrolled state for styling
                    setScrolled(currentScrollY > 20);

                    // Do NOT hide navbar if dropdown is open, mobile menu is open, or keyboard focus is inside
                    if (mobileMenuOpen || servicesDropdownOpen || isFocusedInside) {
                        setVisible(true);
                        lastScrollY.current = currentScrollY;
                        ticking.current = false;
                        return;
                    }

                    // Always show near top
                    if (currentScrollY < 80) {
                        setVisible(true);
                    } else if (currentScrollY > lastScrollY.current + 6) {
                        // Scrolling down after 80px -> hide
                        setVisible(false);
                    } else if (currentScrollY < lastScrollY.current - 6) {
                        // Scrolling up -> show immediately
                        setVisible(true);
                    }

                    lastScrollY.current = currentScrollY;
                    ticking.current = false;
                });
                ticking.current = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [mobileMenuOpen, servicesDropdownOpen, isFocusedInside]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            const originalOverflow = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            return () => {
                document.body.style.overflow = originalOverflow;
            };
        }
    }, [mobileMenuOpen]);

    // Close menus on route change
    useEffect(() => {
        const raf = requestAnimationFrame(() => {
            setMobileMenuOpen(false);
            setServicesDropdownOpen(false);
            setMobileServicesOpen(false);
        });
        return () => cancelAnimationFrame(raf);
    }, [pathname]);

    // Close dropdown on click outside or escape key
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setServicesDropdownOpen(false);
            }
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setServicesDropdownOpen(false);
                setMobileMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    // Check if route is active
    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <nav
            ref={navRef}
            aria-label="Main Navigation"
            onFocusCapture={() => setIsFocusedInside(true)}
            onBlurCapture={(e) => {
                if (!navRef.current?.contains(e.relatedTarget as Node)) {
                    setIsFocusedInside(false);
                }
            }}
            className={`fixed top-0 left-0 right-0 z-50 pt-[env(safe-area-inset-top,0px)] transition-transform duration-[250ms] ease-in-out motion-reduce:transition-none ${
                visible ? "translate-y-0" : "-translate-y-full"
            } ${scrolled ? "py-2 sm:py-2.5" : "py-3 sm:py-5"}`}
        >
            <div
                className={`mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ease-in-out ${
                    scrolled ? "max-w-5xl" : "max-w-7xl"
                }`}
            >
                <div
                    className={`relative flex items-center justify-between transition-all duration-300 ease-in-out ${
                        scrolled
                            ? "px-4 sm:px-6 py-2 sm:py-2.5 bg-white/95 backdrop-blur-md shadow-lg border border-slate-200/80 rounded-full"
                            : "px-4 sm:px-6 py-2.5 sm:py-3 bg-white/90 backdrop-blur-md shadow-sm border border-slate-200/60 rounded-full sm:rounded-2xl"
                    }`}
                >
                    {/* Logo: Full logo on desktop, arch mark on mobile (<sm) */}
                    <div className="flex-shrink-0">
                        <Link
                            href="/"
                            className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0057fe] rounded-lg p-0.5"
                            aria-label="Nisschay Home"
                        >
                            {/* Desktop Full Logo (height 36-38px) */}
                            <Image
                                src="/logo.png"
                                alt="nisschay logo"
                                width={162}
                                height={38}
                                priority
                                className="hidden sm:block h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                            />
                            {/* Mobile Logo Mark (Arch only below sm breakpoint) */}
                            <Image
                                src="/logo-mark.png"
                                alt="nisschay logo"
                                width={36}
                                height={36}
                                priority
                                className="block sm:hidden h-9 w-9 object-contain transition-transform duration-200 group-hover:scale-105"
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        <Link
                            href="/"
                            className={`text-sm font-semibold font-outfit transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0057fe] rounded ${
                                isActive("/")
                                    ? "text-[#0057fe] font-bold"
                                    : "text-slate-600 hover:text-[#0057fe]"
                            }`}
                        >
                            Home
                            {isActive("/") && (
                                <motion.span
                                    layoutId="activeNavIndicator"
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0057fe] rounded-full"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                        </Link>

                        <Link
                            href="/about"
                            className={`text-sm font-semibold font-outfit transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0057fe] rounded ${
                                isActive("/about")
                                    ? "text-[#0057fe] font-bold"
                                    : "text-slate-600 hover:text-[#0057fe]"
                            }`}
                        >
                            About
                            {isActive("/about") && (
                                <motion.span
                                    layoutId="activeNavIndicator"
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0057fe] rounded-full"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                        </Link>

                        {/* Services Link with Accessible Dropdown */}
                        <div
                            ref={dropdownRef}
                            className="relative"
                            onMouseEnter={() => setServicesDropdownOpen(true)}
                            onMouseLeave={() => setServicesDropdownOpen(false)}
                        >
                            <button
                                type="button"
                                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault();
                                        setServicesDropdownOpen(!servicesDropdownOpen);
                                    }
                                }}
                                aria-expanded={servicesDropdownOpen}
                                aria-haspopup="true"
                                className={`flex items-center gap-1.5 text-sm font-semibold font-outfit transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0057fe] rounded ${
                                    isActive("/services")
                                        ? "text-[#0057fe] font-bold"
                                        : "text-slate-600 hover:text-[#0057fe]"
                                }`}
                            >
                                <span>Services</span>
                                <FiChevronDown
                                    size={14}
                                    className={`transition-transform duration-200 ${
                                        servicesDropdownOpen ? "rotate-180 text-[#0057fe]" : "text-slate-400"
                                    }`}
                                />
                                {isActive("/services") && (
                                    <span className="absolute -bottom-1 left-0 right-4 h-0.5 bg-[#0057fe] rounded-full" />
                                )}
                            </button>

                            {/* Dropdown Menu */}
                            <AnimatePresence>
                                {servicesDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                                        transition={{ duration: 0.15, ease: "easeOut" }}
                                        className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-200/80 p-2 z-50 overflow-hidden"
                                    >
                                        <div className="space-y-1">
                                            {/* Build Section */}
                                            <Link
                                                href="/services"
                                                onClick={() => setServicesDropdownOpen(false)}
                                                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0057fe]"
                                            >
                                                <div className="w-8 h-8 rounded-lg bg-blue-100/70 text-[#0057fe] flex items-center justify-center shrink-0 group-hover:bg-[#0057fe] group-hover:text-white transition-colors">
                                                    <FiLayers size={16} />
                                                </div>
                                                <div>
                                                    <p className="text-xs font-bold font-outfit text-slate-900 group-hover:text-[#0057fe] transition-colors">
                                                        Build
                                                    </p>
                                                    <p className="text-[11px] text-slate-500 leading-snug">
                                                        Websites, SaaS apps & AI tools
                                                    </p>
                                                </div>
                                            </Link>

                                            {/* Grow Section */}
                                            {/* // TODO: point to /services/digital-marketing later */}
                                            <Link
                                                href="/services"
                                                onClick={() => setServicesDropdownOpen(false)}
                                                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0057fe]"
                                            >
                                                <div className="w-8 h-8 rounded-lg bg-indigo-100/70 text-indigo-600 flex items-center justify-center shrink-0 group-hover:bg-[#0057fe] group-hover:text-white transition-colors">
                                                    <FiTrendingUp size={16} />
                                                </div>
                                                <div>
                                                    <p className="text-xs font-bold font-outfit text-slate-900 group-hover:text-[#0057fe] transition-colors">
                                                        Grow
                                                    </p>
                                                    <p className="text-[11px] text-slate-500 leading-snug">
                                                        SEO, ads & digital marketing
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link
                            href="/portfolio"
                            className={`text-sm font-semibold font-outfit transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0057fe] rounded ${
                                isActive("/portfolio")
                                    ? "text-[#0057fe] font-bold"
                                    : "text-slate-600 hover:text-[#0057fe]"
                            }`}
                        >
                            Portfolio
                            {isActive("/portfolio") && (
                                <motion.span
                                    layoutId="activeNavIndicator"
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0057fe] rounded-full"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                        </Link>

                        <Link
                            href="/contact"
                            className={`text-sm font-semibold font-outfit transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0057fe] rounded ${
                                isActive("/contact")
                                    ? "text-[#0057fe] font-bold"
                                    : "text-slate-600 hover:text-[#0057fe]"
                            }`}
                        >
                            Contact
                            {isActive("/contact") && (
                                <motion.span
                                    layoutId="activeNavIndicator"
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0057fe] rounded-full"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                        </Link>
                    </div>

                    {/* Primary Action Button: "Book Free Consultation" */}
                    <div className="hidden md:flex items-center">
                        <Link
                            href="/contact"
                            className="px-5 py-2.5 bg-[#0057fe] hover:bg-[#0047d6] text-white text-xs lg:text-sm font-bold font-outfit rounded-full transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2 tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0057fe] active:scale-95"
                        >
                            <span>Book Free Consultation</span>
                            <FaArrowRight size={11} />
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle Button (Min 44x44px tap target) */}
                    <div className="md:hidden flex items-center">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-expanded={mobileMenuOpen}
                            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                            className="text-slate-700 hover:text-[#0057fe] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0057fe] rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors"
                        >
                            {mobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Drawer (Touch-first, min 44px tap targets, body scroll locked) */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 z-50 px-4 pt-2 pb-6 md:hidden max-h-[calc(100vh-5rem)] overflow-y-auto"
                    >
                        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/90 p-4 sm:p-5 flex flex-col space-y-2">
                            {/* Logo Mark in drawer header */}
                            <div className="flex items-center justify-between pb-3 border-b border-slate-100 px-2">
                                <Link
                                    href="/"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center gap-2 min-h-[44px]"
                                    aria-label="Nisschay Home"
                                >
                                    <Image
                                        src="/logo-mark.png"
                                        alt="nisschay logo mark"
                                        width={32}
                                        height={32}
                                        className="h-8 w-8 object-contain"
                                    />
                                    <span className="font-outfit font-black text-slate-900 tracking-tight text-lg">
                                        Nisschay
                                    </span>
                                </Link>
                                <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                                    Menu
                                </span>
                            </div>

                            <Link
                                href="/"
                                className={`min-h-[44px] flex items-center text-base font-bold font-outfit px-3 rounded-xl transition-colors ${
                                    isActive("/") ? "bg-blue-50 text-[#0057fe]" : "text-slate-800 hover:text-[#0057fe]"
                                }`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Home
                            </Link>

                            <Link
                                href="/about"
                                className={`min-h-[44px] flex items-center text-base font-bold font-outfit px-3 rounded-xl transition-colors ${
                                    isActive("/about") ? "bg-blue-50 text-[#0057fe]" : "text-slate-800 hover:text-[#0057fe]"
                                }`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                About
                            </Link>

                            {/* Mobile Services Accordion */}
                            <div>
                                <button
                                    type="button"
                                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                    className="w-full min-h-[44px] flex items-center justify-between text-base font-bold font-outfit px-3 rounded-xl text-slate-800 hover:text-[#0057fe] transition-colors"
                                >
                                    <span>Services</span>
                                    <FiChevronDown
                                        size={18}
                                        className={`transition-transform duration-200 ${
                                            mobileServicesOpen ? "rotate-180 text-[#0057fe]" : "text-slate-400"
                                        }`}
                                    />
                                </button>
                                {mobileServicesOpen && (
                                    <div className="pl-4 pr-1 pt-1 pb-2 space-y-1">
                                        <Link
                                            href="/services"
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="min-h-[44px] flex items-center gap-3 px-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-[#0057fe] transition-colors"
                                        >
                                            <FiLayers size={16} className="text-[#0057fe] shrink-0" />
                                            <span>Build <span className="text-xs text-slate-400 font-normal">(Websites, Apps, AI)</span></span>
                                        </Link>
                                        {/* // TODO: point to /services/digital-marketing later */}
                                        <Link
                                            href="/services"
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="min-h-[44px] flex items-center gap-3 px-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-[#0057fe] transition-colors"
                                        >
                                            <FiTrendingUp size={16} className="text-indigo-600 shrink-0" />
                                            <span>Grow <span className="text-xs text-slate-400 font-normal">(Digital Marketing)</span></span>
                                        </Link>
                                    </div>
                                )}
                            </div>

                            <Link
                                href="/portfolio"
                                className={`min-h-[44px] flex items-center text-base font-bold font-outfit px-3 rounded-xl transition-colors ${
                                    isActive("/portfolio") ? "bg-blue-50 text-[#0057fe]" : "text-slate-800 hover:text-[#0057fe]"
                                }`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Portfolio
                            </Link>

                            <Link
                                href="/contact"
                                className={`min-h-[44px] flex items-center text-base font-bold font-outfit px-3 rounded-xl transition-colors ${
                                    isActive("/contact") ? "bg-blue-50 text-[#0057fe]" : "text-slate-800 hover:text-[#0057fe]"
                                }`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Contact
                            </Link>

                            <div className="pt-3 border-t border-slate-100">
                                <Link
                                    href="/contact"
                                    className="w-full min-h-[48px] px-5 py-3 bg-[#0057fe] hover:bg-[#0047d6] text-white font-bold font-outfit rounded-xl transition-all shadow-md flex items-center justify-center gap-2 tracking-wide text-sm active:scale-95"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span>Book Free Consultation</span>
                                    <FaArrowRight size={12} />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
