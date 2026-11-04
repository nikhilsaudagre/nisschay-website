"use client";
import React from "react";

/**
 * HeroBusinessJourney
 * 
 * 3D Isometric Animated Business Journey visual for Nisschay Hero section.
 * Features:
 * - Animated WebP: /images/nisschay-business-journey.webp (1000 x 563)
 * - Static single-frame fallback for prefers-reduced-motion: /images/nisschay-business-journey-static.webp
 * - Native <picture> element: zero JS runtime overhead
 * - Prioritized loading with fetchPriority="high"
 * - Intrinsic dimensions (1000x563) to prevent Cumulative Layout Shift (CLS)
 * - object-fit: contain with preserved 16:9 aspect ratio
 */
export default function HeroBusinessJourney() {
    return (
        <div className="w-full max-w-[540px] lg:max-w-none relative flex flex-col items-center">
            {/* Ambient Background Glow matching brand blue */}
            <div 
                aria-hidden="true" 
                className="absolute inset-0 bg-[#0057fe]/5 rounded-3xl filter blur-2xl transform scale-95 pointer-events-none" 
            />

            {/* Animation Card Frame */}
            <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl sm:shadow-2xl shadow-blue-500/5 bg-[#f9faff]">
                <picture>
                    {/* Fallback to static frame when user prefers reduced motion */}
                    <source 
                        srcSet="/images/nisschay-business-journey-static.webp" 
                        media="(prefers-reduced-motion: reduce)" 
                        type="image/webp" 
                    />
                    {/* Main Animated WebP */}
                    <img
                        src="/images/nisschay-business-journey.webp"
                        alt="Nisschay 3D isometric business journey: from idea to software development, launch, and customer growth"
                        width={1000}
                        height={563}
                        fetchPriority="high"
                        decoding="async"
                        className="w-full h-auto object-contain block aspect-[1000/563]"
                    />
                </picture>
            </div>
        </div>
    );
}

