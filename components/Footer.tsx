import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub, FaHeart } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="relative bg-gray-900 text-white pt-20 pb-10 border-t border-gray-800 font-inter overflow-hidden">
            {/* Subtle Grid Background */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: 'linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                    backgroundAttachment: 'fixed'
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="text-2xl font-bold font-outfit tracking-tight">
                            nisschay
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Empowering businesses with cutting-edge digital solutions. We transform ideas into scalable, high-performance reality.
                        </p>
                        <div className="flex gap-4">
                            <SocialIcon icon={FaLinkedinIn} href="#" />
                            <SocialIcon icon={FaTwitter} href="#" />
                            <SocialIcon icon={FaGithub} href="#" />
                            <SocialIcon icon={FaInstagram} href="#" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 font-outfit">Quick Links</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-blue-400 transition-colors">About</Link></li>
                            <li><Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
                            <li><Link href="/portfolio" className="hover:text-blue-400 transition-colors">Portfolio</Link></li>
                            <li><Link href="/portfolio#faq" className="hover:text-blue-400 transition-colors">FAQ</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 font-outfit">Services</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><Link href="/services" className="hover:text-blue-400 transition-colors">Web Platforms</Link></li>
                            <li><Link href="/services" className="hover:text-blue-400 transition-colors">Mobile Apps</Link></li>
                            <li><Link href="/services" className="hover:text-blue-400 transition-colors">AI Automation</Link></li>
                            <li><Link href="/services" className="hover:text-blue-400 transition-colors">Cloud & DevOps</Link></li>
                            <li><Link href="/services" className="hover:text-blue-400 transition-colors">UX Design</Link></li>
                            <li><Link href="/services" className="hover:text-blue-400 transition-colors">IT Operations</Link></li>
                            <li><Link href="/services" className="hover:text-blue-400 transition-colors">Custom Solutions</Link></li>
                            <li><Link href="/services" className="hover:text-blue-400 transition-colors">Dedicated Teams</Link></li>
                            <li><Link href="/services" className="hover:text-blue-400 transition-colors">IT Consulting</Link></li>
                        </ul>
                    </div>


                    {/* Legal */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 font-outfit">Legal</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Nisschay. All rights reserved.</p>
                    <div className="flex items-center gap-2">
                        <span>Made with</span>
                        <FaHeart className="text-red-500 animate-pulse" />
                        <span>by Nisschay Team</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ icon: Icon, href }: any) {
    return (
        <a
            href={href}
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
        >
            <Icon />
        </a>
    );
}
