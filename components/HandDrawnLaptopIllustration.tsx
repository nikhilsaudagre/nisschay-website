"use client";

import React from "react";

interface HandDrawnLaptopIllustrationProps {
    className?: string;
}

export default function HandDrawnLaptopIllustration({ className = "" }: HandDrawnLaptopIllustrationProps) {
    return (
        <div className={`relative w-full flex items-center justify-center select-none ${className}`}>
            {/* 
              Hand-Drawn Architectural Sketch Illustration 
              Pure vector SVG with 100% transparent background 
            */}
            <svg
                viewBox="0 0 540 420"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto max-w-[560px] drop-shadow-[0_12px_24px_rgba(7,20,47,0.06)] transition-transform duration-500 hover:scale-[1.015]"
                aria-label="Hand-drawn architectural sketch of Nisschay laptop workspace with plant and coffee mug"
                role="img"
            >
                <defs>
                    {/* Subtle sketch pencil stroke filter for organic hand-drawn grain (subtle & lightweight) */}
                    <linearGradient id="screenGlass" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                        <stop offset="70%" stopColor="#F8FAFD" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#EBF2FE" stopOpacity="0.85" />
                    </linearGradient>

                    <linearGradient id="blueGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0057FE" stopOpacity="1" />
                        <stop offset="100%" stopColor="#1E40AF" stopOpacity="1" />
                    </linearGradient>

                    <linearGradient id="coffeeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#07142F" stopOpacity="0.95" />
                        <stop offset="100%" stopColor="#0F2042" stopOpacity="0.9" />
                    </linearGradient>
                </defs>

                {/* ========================================================
                    1. TABLE / DESK SURFACE GROUNDING & CONTACT SHADOWS
                ======================================================== */}
                <g id="desk-surface-and-shadows" strokeLinecap="round" strokeLinejoin="round">
                    {/* Loose horizontal architectural table lines */}
                    <path
                        d="M 28,282 C 70,280 120,284 165,281"
                        stroke="#94A3B8"
                        strokeWidth="1.2"
                        strokeDasharray="4 2 8 3"
                        opacity="0.6"
                    />
                    <path
                        d="M 18,318 C 50,316 85,319 115,317"
                        stroke="#CBD5E1"
                        strokeWidth="1"
                        opacity="0.5"
                    />
                    <path
                        d="M 125,352 C 185,349 265,353 345,350"
                        stroke="#94A3B8"
                        strokeWidth="1.2"
                        strokeDasharray="6 3 12 4"
                        opacity="0.5"
                    />
                    <path
                        d="M 335,372 C 385,370 445,373 512,371"
                        stroke="#94A3B8"
                        strokeWidth="1.2"
                        strokeDasharray="5 2 10 3"
                        opacity="0.6"
                    />

                    {/* Contact shadow hatching under plant pot */}
                    <path
                        d="M 68,276 C 85,278 105,278 122,276"
                        stroke="#0F2042"
                        strokeWidth="1.8"
                        opacity="0.75"
                    />
                    <path d="M 62,280 L 78,284 M 82,280 L 98,284 M 102,280 L 118,284" stroke="#94A3B8" strokeWidth="1" opacity="0.6" />

                    {/* Contact shadow hatching under laptop front chassis */}
                    <path
                        d="M 70,306 C 120,320 200,336 295,348"
                        stroke="#07142F"
                        strokeWidth="2.2"
                        opacity="0.8"
                    />
                    <path
                        d="M 80,314 L 98,322 M 115,321 L 133,329 M 150,328 L 168,336 M 185,335 L 203,343 M 220,342 L 238,350 M 255,349 L 273,357"
                        stroke="#64748B"
                        strokeWidth="1"
                        opacity="0.45"
                    />

                    {/* Contact shadow hatching under coffee mug */}
                    <path
                        d="M 348,352 C 370,356 395,356 414,352"
                        stroke="#0F2042"
                        strokeWidth="2"
                        opacity="0.8"
                    />
                    <path d="M 355,358 L 372,363 M 378,358 L 395,363 M 400,358 L 416,363" stroke="#94A3B8" strokeWidth="1" opacity="0.5" />
                </g>

                {/* ========================================================
                    2. POTTED PLANT (LEFT)
                ======================================================== */}
                <g id="potted-plant" strokeLinecap="round" strokeLinejoin="round">
                    {/* Leaves & Foliage (Layered behind & branching out) */}
                    {/* Leaf 1 (Top Center) */}
                    <path
                        d="M 98,142 C 86,120 95,98 102,92 C 108,100 118,120 106,142"
                        fill="#F0F7FF"
                        stroke="#0F2042"
                        strokeWidth="1.6"
                    />
                    <path d="M 100,140 C 101,122 102,100 102,93" stroke="#0057FE" strokeWidth="1.2" />
                    {/* Fine hatching on leaf 1 */}
                    <path d="M 95,124 L 100,128 M 94,115 L 101,120" stroke="#0057FE" strokeWidth="0.8" opacity="0.6" />

                    {/* Leaf 2 (Upper Left) */}
                    <path
                        d="M 94,158 C 76,138 65,122 70,112 C 82,116 95,134 98,154"
                        fill="#F0F7FF"
                        stroke="#0F2042"
                        strokeWidth="1.6"
                    />
                    <path d="M 95,156 C 85,142 75,128 71,114" stroke="#0057FE" strokeWidth="1.2" />
                    <path d="M 80,142 L 87,143 M 76,132 L 83,133" stroke="#64748B" strokeWidth="0.8" opacity="0.6" />

                    {/* Leaf 3 (Mid Left) */}
                    <path
                        d="M 92,185 C 68,170 52,160 56,150 C 72,154 86,168 92,182"
                        fill="#F0F7FF"
                        stroke="#0F2042"
                        strokeWidth="1.6"
                    />
                    <path d="M 92,183 C 78,172 65,162 57,152" stroke="#0057FE" strokeWidth="1.2" />
                    <path d="M 72,171 L 79,170 M 66,163 L 73,162" stroke="#64748B" strokeWidth="0.8" opacity="0.6" />

                    {/* Leaf 4 (Lower Left) */}
                    <path
                        d="M 90,208 C 72,200 58,198 60,188 C 75,190 88,199 92,205"
                        fill="#F0F7FF"
                        stroke="#0F2042"
                        strokeWidth="1.6"
                    />
                    <path d="M 91,206 C 80,201 68,198 61,189" stroke="#0057FE" strokeWidth="1.2" />

                    {/* Leaf 5 (Upper Right) */}
                    <path
                        d="M 103,158 C 119,138 130,126 127,115 C 114,119 104,136 102,154"
                        fill="#F0F7FF"
                        stroke="#0F2042"
                        strokeWidth="1.6"
                    />
                    <path d="M 103,156 C 112,142 122,128 126,117" stroke="#0057FE" strokeWidth="1.2" />
                    <path d="M 112,142 L 106,143 M 118,131 L 112,132" stroke="#64748B" strokeWidth="0.8" opacity="0.6" />

                    {/* Leaf 6 (Mid Right) */}
                    <path
                        d="M 104,184 C 126,168 143,160 140,149 C 124,153 110,168 104,180"
                        fill="#F0F7FF"
                        stroke="#0F2042"
                        strokeWidth="1.6"
                    />
                    <path d="M 104,182 C 118,170 131,161 139,151" stroke="#0057FE" strokeWidth="1.2" />
                    <path d="M 122,170 L 115,169 M 128,162 L 121,161" stroke="#64748B" strokeWidth="0.8" opacity="0.6" />

                    {/* Leaf 7 (Lower Right) */}
                    <path
                        d="M 102,208 C 121,200 133,196 131,186 C 116,190 104,200 102,205"
                        fill="#F0F7FF"
                        stroke="#0F2042"
                        strokeWidth="1.6"
                    />
                    <path d="M 102,206 C 114,201 124,196 130,188" stroke="#0057FE" strokeWidth="1.2" />

                    {/* Central Stems */}
                    <path
                        d="M 94,220 C 95,195 96,170 98,144"
                        stroke="#0F2042"
                        strokeWidth="1.8"
                    />
                    <path
                        d="M 96,195 C 100,185 102,172 103,158"
                        stroke="#0F2042"
                        strokeWidth="1.5"
                    />
                    {/* Organic double-stroke detail on stem */}
                    <path
                        d="M 95,216 C 96,198 97,180 99,165"
                        stroke="#0057FE"
                        strokeWidth="0.8"
                        opacity="0.7"
                    />

                    {/* Pot Rim (Front & Ellipse) */}
                    <ellipse
                        cx="94"
                        cy="222"
                        rx="32"
                        ry="6"
                        fill="#E2E8F0"
                        stroke="#0F2042"
                        strokeWidth="1.8"
                    />
                    {/* Soil depth inside pot */}
                    <ellipse
                        cx="94"
                        cy="222"
                        rx="28"
                        ry="4"
                        fill="#CBD5E1"
                        stroke="#475569"
                        strokeWidth="1"
                    />
                    {/* Outer rim collar lip */}
                    <path
                        d="M 62,223 C 62,228 126,228 126,223"
                        stroke="#0F2042"
                        strokeWidth="1.8"
                    />
                    <path
                        d="M 61,225 C 61,230 127,230 127,225"
                        stroke="#0057FE"
                        strokeWidth="0.9"
                        opacity="0.6"
                    />

                    {/* Ceramic Pot Body (Tapered Cylinder) */}
                    <path
                        d="M 65,228 C 68,248 72,266 76,274 C 82,276 106,276 112,274 C 116,266 120,248 123,228 Z"
                        fill="#FFFFFF"
                        stroke="#0F2042"
                        strokeWidth="1.8"
                    />
                    {/* Organic second sketch stroke for pot outline */}
                    <path
                        d="M 66,230 C 69,248 73,264 77,273"
                        stroke="#0057FE"
                        strokeWidth="0.9"
                        opacity="0.5"
                    />
                    <path
                        d="M 122,230 C 119,248 115,264 111,273"
                        stroke="#0F2042"
                        strokeWidth="1.2"
                    />

                    {/* Fine Shading / Hatching lines on right side of pot */}
                    <path d="M 112,236 L 118,237 M 110,242 L 117,243 M 108,248 L 115,249 M 106,254 L 113,255 M 104,260 L 111,261 M 102,266 L 108,267" stroke="#64748B" strokeWidth="1" opacity="0.65" />
                    {/* Soft vertical shading contour */}
                    <path d="M 108,234 C 107,245 105,258 104,268" stroke="#0057FE" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.5" />
                </g>

                {/* ========================================================
                    3. LAPTOP - SCREEN (CENTER SUBJECT, ANGLED PERSPECTIVE)
                ======================================================== */}
                <g id="laptop-screen" strokeLinecap="round" strokeLinejoin="round">
                    {/* Screen Outer Bezel & Casing (Slanted Trapezoid with rounded corners) */}
                    <path
                        d="M 182,126 
                           C 178,126 175,129 174,133 
                           L 146,252 
                           C 145,256 148,259 152,259 
                           L 374,275 
                           C 378,275 381,272 382,268 
                           L 410,147 
                           C 411,143 408,139 404,139 
                           Z"
                        fill="#F8FAFC"
                        stroke="#07142F"
                        strokeWidth="2.2"
                    />

                    {/* Organic second architectural sketch line for outer lid edge */}
                    <path
                        d="M 183,124 L 405,137 C 409,137 412,141 411,145 L 383,267"
                        stroke="#0057FE"
                        strokeWidth="1"
                        opacity="0.6"
                    />

                    {/* Inner Screen Display (White Luminous Surface with bezel offset) */}
                    <path
                        d="M 190,135 
                           C 187,135 185,137 184,140 
                           L 158,247 
                           C 157,250 159,253 162,253 
                           L 365,267 
                           C 368,267 370,265 371,262 
                           L 397,153 
                           C 398,150 396,147 393,147 
                           Z"
                        fill="url(#screenGlass)"
                        stroke="#0F2042"
                        strokeWidth="1.6"
                    />

                    {/* Screen Inner Glass Shading / Subtle Reflection Stroke */}
                    <path
                        d="M 193,138 L 330,147 L 315,195 L 182,185 Z"
                        fill="#0057FE"
                        opacity="0.025"
                    />
                    <path
                        d="M 186,142 C 220,144 260,147 300,150"
                        stroke="#0057FE"
                        strokeWidth="0.8"
                        opacity="0.3"
                    />

                    {/* Top Bezel Webcam Notch / Dot */}
                    <circle cx="295" cy="133" r="1.6" fill="#07142F" />
                    <circle cx="295" cy="133" r="2.8" stroke="#94A3B8" strokeWidth="0.6" opacity="0.6" />

                    {/* ========================================================
                        OFFICIAL NISSCHAY ARCH LOGO (ON SCREEN)
                    ======================================================== */}
                    <g id="screen-logo" className="transition-transform duration-300 hover:scale-105">
                        {/* 
                          The signature Nisschay inverted-U arch logo:
                          Thick bold legs, perfectly rounded semi-circular crown.
                        */}
                        <path
                            d="M 252,224 
                               L 252,184 
                               C 252,168 262,158 277,158 
                               C 292,158 302,168 302,184 
                               L 302,224 
                               L 288,224 
                               L 288,185 
                               C 288,175 283,171 277,171 
                               C 271,171 266,175 266,185 
                               L 266,224 
                               Z"
                            fill="url(#blueGlow)"
                            stroke="#0057FE"
                            strokeWidth="1.2"
                        />
                        {/* Hand-drawn energetic highlight on arch logo */}
                        <path
                            d="M 254,186 C 254,171 263,161 277,161"
                            stroke="#FFFFFF"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            opacity="0.85"
                        />
                        {/* Subtle blue reflection / drop under the logo */}
                        <ellipse cx="277" cy="229" rx="26" ry="3.5" fill="#0057FE" opacity="0.08" />
                    </g>
                </g>

                {/* ========================================================
                    4. LAPTOP - KEYBOARD DECK & BASE (3D FORESHORTENING)
                ======================================================== */}
                <g id="laptop-chassis-and-keys" strokeLinecap="round" strokeLinejoin="round">
                    {/* Hinge Connection Bar */}
                    <path
                        d="M 148,252 L 374,268 L 372,274 L 146,258 Z"
                        fill="#E2E8F0"
                        stroke="#07142F"
                        strokeWidth="1.6"
                    />
                    {/* Hinge segment accents */}
                    <path d="M 200,256 L 199,261 M 320,264 L 319,269" stroke="#64748B" strokeWidth="1" />

                    {/* Laptop Upper Deck Plane (Keyboard + Wrist Rest) */}
                    <path
                        d="M 146,256 
                           L 374,272 
                           C 378,272 381,275 380,278 
                           L 298,348 
                           C 296,350 293,351 289,351 
                           L 75,302 
                           C 71,301 69,298 71,294 
                           L 142,257 
                           C 143,256 145,256 146,256 
                           Z"
                        fill="#FFFFFF"
                        stroke="#07142F"
                        strokeWidth="2.2"
                    />

                    {/* Double organic architectural sketch stroke on laptop base perimeter */}
                    <path
                        d="M 77,303 L 291,351 C 295,351 298,349 300,347 L 380,277"
                        stroke="#0057FE"
                        strokeWidth="1"
                        opacity="0.6"
                    />
                    <path
                        d="M 72,295 L 143,258"
                        stroke="#0057FE"
                        strokeWidth="0.9"
                        opacity="0.5"
                    />

                    {/* Front Edge Thickness Bevel (Depth of the laptop base) */}
                    <path
                        d="M 71,294 
                           L 71,302 
                           C 71,305 73,307 76,308 
                           L 290,356 
                           C 294,357 297,356 299,353 
                           L 298,348"
                        fill="#F1F5F9"
                        stroke="#07142F"
                        strokeWidth="2"
                    />
                    {/* Front Display Opener Thumb Notch */}
                    <path
                        d="M 172,323 C 178,326 194,329 200,329"
                        stroke="#0057FE"
                        strokeWidth="1.6"
                    />

                    {/* Recessed Keyboard Well Area */}
                    <path
                        d="M 142,263 
                           L 352,277 
                           L 282,316 
                           L 115,296 
                           Z"
                        fill="#F8FAFC"
                        stroke="#64748B"
                        strokeWidth="1.2"
                        strokeDasharray="1 0.5"
                    />

                    {/* ========================================================
                        KEYBOARD CHICLET KEYS (HAND-DRAWN PERSPECTIVE GRID)
                    ======================================================== */}
                    {/* Function Key Row (Row 1 - thin) */}
                    <g stroke="#0F2042" strokeWidth="1.1" fill="#FFFFFF">
                        <path d="M 145,265 L 157,266 L 155,269 L 143,268 Z" />
                        <path d="M 160,266 L 172,267 L 170,270 L 158,269 Z" />
                        <path d="M 175,267 L 187,268 L 185,271 L 173,270 Z" />
                        <path d="M 190,268 L 202,269 L 200,272 L 188,271 Z" />
                        <path d="M 205,269 L 217,270 L 215,273 L 203,272 Z" />
                        <path d="M 220,270 L 232,271 L 230,274 L 218,273 Z" />
                        <path d="M 235,271 L 247,272 L 245,275 L 233,274 Z" />
                        <path d="M 250,272 L 262,273 L 260,276 L 248,275 Z" />
                        <path d="M 265,273 L 277,274 L 275,277 L 263,276 Z" />
                        <path d="M 280,274 L 292,275 L 290,278 L 278,277 Z" />
                        <path d="M 295,275 L 307,276 L 305,279 L 293,278 Z" />
                        <path d="M 310,276 L 322,277 L 320,280 L 308,279 Z" />
                        <path d="M 325,277 L 348,278 L 345,281 L 323,280 Z" />
                    </g>

                    {/* Number Row (Row 2) */}
                    <g stroke="#0F2042" strokeWidth="1.1" fill="#FFFFFF">
                        <path d="M 140,270 L 154,271 L 152,275 L 138,274 Z" />
                        <path d="M 157,271 L 170,272 L 168,276 L 155,275 Z" />
                        <path d="M 173,272 L 186,273 L 184,277 L 171,276 Z" />
                        <path d="M 189,273 L 202,274 L 200,278 L 187,277 Z" />
                        <path d="M 205,274 L 218,275 L 216,279 L 203,278 Z" />
                        <path d="M 221,275 L 234,276 L 232,280 L 219,279 Z" />
                        <path d="M 237,276 L 250,277 L 248,281 L 235,280 Z" />
                        <path d="M 253,277 L 266,278 L 264,282 L 251,281 Z" />
                        <path d="M 269,278 L 282,279 L 280,283 L 267,282 Z" />
                        <path d="M 285,279 L 298,280 L 296,284 L 283,283 Z" />
                        <path d="M 301,280 L 314,281 L 312,285 L 299,284 Z" />
                        <path d="M 317,281 L 343,282 L 340,286 L 315,285 Z" />
                    </g>

                    {/* QWERTY Row (Row 3) */}
                    <g stroke="#0F2042" strokeWidth="1.1" fill="#FFFFFF">
                        <path d="M 134,276 L 150,277 L 148,282 L 131,281 Z" />
                        <path d="M 153,277 L 167,278 L 165,283 L 151,282 Z" />
                        <path d="M 170,278 L 184,279 L 182,284 L 168,283 Z" />
                        <path d="M 187,279 L 201,280 L 199,285 L 185,284 Z" />
                        <path d="M 204,280 L 218,281 L 216,286 L 202,285 Z" />
                        <path d="M 221,281 L 235,282 L 233,287 L 219,286 Z" />
                        <path d="M 238,282 L 252,283 L 250,288 L 236,287 Z" />
                        <path d="M 255,283 L 269,284 L 267,289 L 253,288 Z" />
                        <path d="M 272,284 L 286,285 L 284,290 L 270,289 Z" />
                        <path d="M 289,285 L 303,286 L 301,291 L 287,290 Z" />
                        <path d="M 306,286 L 338,287 L 335,292 L 304,291 Z" />
                    </g>

                    {/* Home Row (Row 4) */}
                    <g stroke="#0F2042" strokeWidth="1.1" fill="#FFFFFF">
                        <path d="M 128,283 L 146,284 L 143,289 L 125,288 Z" />
                        <path d="M 149,284 L 164,285 L 162,290 L 146,289 Z" />
                        <path d="M 167,285 L 182,286 L 180,291 L 164,290 Z" />
                        <path d="M 185,286 L 200,287 L 197,292 L 182,291 Z" />
                        <path d="M 203,287 L 218,288 L 215,293 L 200,292 Z" />
                        <path d="M 221,288 L 236,289 L 233,294 L 218,293 Z" />
                        <path d="M 239,289 L 254,290 L 251,295 L 236,294 Z" />
                        <path d="M 257,290 L 272,291 L 269,296 L 254,295 Z" />
                        <path d="M 275,291 L 290,292 L 287,297 L 272,296 Z" />
                        <path d="M 293,292 L 333,293 L 330,298 L 290,297 Z" />
                    </g>

                    {/* Bottom Row & Spacebar (Row 5) */}
                    <g stroke="#0F2042" strokeWidth="1.1" fill="#FFFFFF">
                        <path d="M 120,290 L 140,291 L 137,297 L 117,296 Z" />
                        <path d="M 143,291 L 158,292 L 155,298 L 140,297 Z" />
                        {/* Elongated Spacebar Key with soft electric blue tint */}
                        <path
                            d="M 162,292 L 254,297 L 250,303 L 158,298 Z"
                            fill="#F0F7FF"
                            stroke="#0057FE"
                            strokeWidth="1.2"
                        />
                        <path d="M 258,297 L 274,298 L 271,304 L 255,303 Z" />
                        <path d="M 278,298 L 294,299 L 291,305 L 275,304 Z" />
                        <path d="M 298,299 L 326,300 L 323,306 L 295,305 Z" />
                    </g>

                    {/* ========================================================
                        TRACKPAD (CENTERED ON WRIST REST)
                    ======================================================== */}
                    <path
                        d="M 158,304 
                           L 236,315 
                           L 225,335 
                           L 146,321 
                           Z"
                        fill="#F8FAFC"
                        stroke="#64748B"
                        strokeWidth="1.3"
                    />
                    {/* Trackpad subtle inner sketch border */}
                    <path
                        d="M 161,306 L 233,316 L 223,332 L 150,321 Z"
                        stroke="#0057FE"
                        strokeWidth="0.7"
                        opacity="0.4"
                    />
                </g>

                {/* ========================================================
                    5. COFFEE MUG (RIGHT FOREGROUND)
                ======================================================== */}
                <g id="coffee-mug" strokeLinecap="round" strokeLinejoin="round">
                    {/* Coffee Mug Handle (Loop on the right) */}
                    <path
                        d="M 406,298 
                           C 426,296 436,310 435,322 
                           C 434,334 422,342 404,342"
                        fill="none"
                        stroke="#07142F"
                        strokeWidth="2.2"
                    />
                    <path
                        d="M 407,304 
                           C 421,304 427,314 426,322 
                           C 425,330 417,336 405,336"
                        fill="none"
                        stroke="#0F2042"
                        strokeWidth="1.3"
                    />
                    {/* Organic second sketch stroke on handle */}
                    <path
                        d="M 408,296 C 428,294 438,310 437,323"
                        stroke="#0057FE"
                        strokeWidth="0.9"
                        opacity="0.6"
                    />

                    {/* Mug Body (Cylindrical form) */}
                    <path
                        d="M 352,286 
                           C 353,308 355,332 358,345 
                           C 364,348 396,350 404,346 
                           C 406,332 407,308 408,286 
                           Z"
                        fill="#FFFFFF"
                        stroke="#07142F"
                        strokeWidth="2.2"
                    />
                    {/* Double hand-drawn contour on mug body */}
                    <path
                        d="M 354,288 C 355,308 357,330 360,344"
                        stroke="#0057FE"
                        strokeWidth="0.9"
                        opacity="0.5"
                    />
                    <path
                        d="M 407,288 C 405,308 404,330 403,344"
                        stroke="#0057FE"
                        strokeWidth="0.9"
                        opacity="0.5"
                    />

                    {/* Mug Top Rim Opening (Perspective Ellipse) */}
                    <ellipse
                        cx="380"
                        cy="286"
                        rx="28"
                        ry="8"
                        fill="#E2E8F0"
                        stroke="#07142F"
                        strokeWidth="2"
                    />

                    {/* Fresh Brewed Coffee Liquid Inside */}
                    <ellipse
                        cx="380"
                        cy="287"
                        rx="25"
                        ry="6.5"
                        fill="url(#coffeeGrad)"
                        stroke="#0057FE"
                        strokeWidth="0.8"
                    />
                    {/* Coffee surface liquid specular crescent reflection */}
                    <path
                        d="M 364,286 C 368,283 378,283 384,284"
                        stroke="#FFFFFF"
                        strokeWidth="1.2"
                        opacity="0.8"
                    />

                    {/* Fine Vertical Hatching / Volume Shading on Mug Right Side */}
                    <path d="M 396,298 L 396,338" stroke="#64748B" strokeWidth="0.9" opacity="0.6" strokeDasharray="3 2" />
                    <path d="M 400,296 L 400,340" stroke="#0057FE" strokeWidth="1" opacity="0.5" strokeDasharray="4 2" />
                    <path d="M 403,294 L 403,342" stroke="#64748B" strokeWidth="1" opacity="0.7" />

                    {/* Gentle Steam Aroma Whispers (Subtle, elegant hand-drawn curls) */}
                    <path
                        d="M 374,272 C 370,258 376,248 372,236 C 370,230 372,224 374,220"
                        stroke="#94A3B8"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeDasharray="2 3"
                        opacity="0.55"
                    />
                    <path
                        d="M 386,270 C 382,254 390,244 386,230"
                        stroke="#0057FE"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeDasharray="3 4"
                        opacity="0.45"
                    />
                </g>

                {/* ========================================================
                    6. DYNAMIC ENERGY / ACCENT STROKES (TOP-RIGHT)
                ======================================================== */}
                <g id="spark-energy-lines" strokeLinecap="round">
                    {/* 
                      Three hand-drawn radiating dash strokes matching the reference image:
                      Creates vibrant tech energy and architectural draftsmanship.
                    */}
                    <path
                        d="M 376,112 L 384,94"
                        stroke="#0057FE"
                        strokeWidth="2.4"
                    />
                    <path
                        d="M 396,120 L 414,102"
                        stroke="#0057FE"
                        strokeWidth="2.8"
                    />
                    <path
                        d="M 418,132 L 438,122"
                        stroke="#0057FE"
                        strokeWidth="2.4"
                    />
                    {/* Tiny secondary accent dot */}
                    <circle cx="445" cy="115" r="1.5" fill="#0057FE" opacity="0.8" />
                </g>
            </svg>
        </div>
    );
}
