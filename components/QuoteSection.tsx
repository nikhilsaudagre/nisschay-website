"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Caveat } from "next/font/google";

const caveat = Caveat({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
});

export default function QuoteSection() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className="relative py-10 sm:py-12 md:py-14 bg-white overflow-hidden flex items-center justify-center">
            {/* Background decorative soft glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-gradient-to-tr from-blue-100/20 to-indigo-100/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-5 sm:px-6 md:px-8 text-center relative z-10">
                <motion.div
                    initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.7, ease: "easeOut" }}
                    className="flex flex-col items-center justify-center gap-4 sm:gap-5"
                >
                    <h2 className="text-balance font-light text-[#000c24] tracking-tight leading-[1.2] text-[clamp(1.65rem,1.8vw+0.8rem,2.65rem)] max-w-3xl">
                        <span className="block">A good idea needs someone to build it.</span>
                        <span className={`${caveat.className} text-[#0057fe] text-[clamp(2.1rem,2.5vw+0.9rem,3.25rem)] block rotate-[-1.5deg] font-bold py-1 px-3 relative mt-1`}>
                            and someone to help people find it.
                            {/* Brush Underline Effect */}
                            <svg className="absolute -bottom-0.5 left-0 w-full h-3 text-[#0057fe]/25 -z-10 pointer-events-none" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0,6 Q50,11 100,6" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                            </svg>
                        </span>
                    </h2>

                    <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-[580px] mx-auto text-balance font-normal">
                        We design and build your website, app or automation, then help the right customers discover it.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
