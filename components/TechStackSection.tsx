"use client";
import { useState } from "react";
import { IconType } from "react-icons";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma, FaJava, FaPython, FaDocker
} from "react-icons/fa";
import {
    SiNextdotjs, SiTailwindcss, SiTypescript, SiSpringboot, SiOracle, SiOpenai, SiTensorflow
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

const colorMap: Record<string, string> = {
    'text-orange-500': '#f97316',
    'text-blue-500': '#3b82f6',
    'text-yellow-400': '#eab308',
    'text-cyan-400': '#06b6d4',
    'text-white': '#334155', // Adjust white variant background color for light mode readability
    'text-cyan-300': '#0891b2',
    'text-blue-600': '#2563eb',
    'text-pink-500': '#db2777',
    'text-red-500': '#ef4444',
    'text-green-500': '#22c55e',
    'text-red-600': '#dc2626',
    'text-blue-400': '#60a5fa',
    'text-yellow-300': '#ca8a04',
    'text-green-300': '#16a34a',
    'text-orange-400': '#fb923c',
};

const orbit1 = [
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "React", icon: FaReact, color: "text-cyan-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "Figma", icon: FaFigma, color: "text-pink-500" },
];

const orbit2 = [
    { name: "Java", icon: FaJava, color: "text-red-500" },
    { name: "Spring Boot", icon: SiSpringboot, color: "text-green-500" },
    { name: "Docker", icon: FaDocker, color: "text-blue-500" },
    { name: "Python", icon: FaPython, color: "text-yellow-300" },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-300" },
];

const orbit3 = [
    { name: "Azure", icon: VscAzure, color: "text-blue-400" },
    { name: "Oracle", icon: SiOracle, color: "text-red-600" },
    { name: "OpenAI", icon: SiOpenai, color: "text-green-300" },
    { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-400" },
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
];

interface TechSpec {
    category: string;
    command: string;
    kpi: string;
    scale: string;
    logs: string[];
}

const techMetadata: Record<string, TechSpec> = {
    HTML5: {
        category: "Markup / Structure",
        command: "npx html-validate index.html",
        kpi: "100% semantic score",
        scale: "SEO optimization",
        logs: [
            "Validating markup semantics...",
            "Checking ARIA attributes...",
            "Success: 0 accessibility issues found.",
            "Lighthouse SEO validation score: 100/100."
        ]
    },
    CSS3: {
        category: "Styling Engine",
        command: "postcss styles.css --use autoprefixer",
        kpi: "Hardware acceleration",
        scale: "Responsive grid systems",
        logs: [
            "Parsing layout stylesheets...",
            "Applying vendor prefixes for major browsers...",
            "Optimizing keyframe transitions...",
            "Layout system verified on Mobile, Tablet & Ultra-wide."
        ]
    },
    JavaScript: {
        category: "Scripting Engine",
        command: "node server.js",
        kpi: "Non-blocking event loop",
        scale: "Dynamic client hydration",
        logs: [
            "Initializing JavaScript V8 runtime...",
            "Injecting client-side interactive modules...",
            "Event listeners attached to active elements.",
            "Module execution completed in 14ms."
        ]
    },
    React: {
        category: "Frontend UI Library",
        command: "npx react-devtools",
        kpi: "60fps interface animations",
        scale: "Concurrent rendering",
        logs: [
            "Mounting React 19 root container...",
            "Initializing virtual DOM hydration...",
            "Concurrent rendering engine initialized...",
            "Component tree rendered in 8.5ms."
        ]
    },
    "Next.js": {
        category: "React Framework",
        command: "npm run build",
        kpi: "Sub-second First Contentful Paint",
        scale: "ISR / Static site generation",
        logs: [
            "▲ Next.js 15.0 - Running static generation...",
            "  Route (app)             Size     First Load JS",
            "  ┌ ○ /services           118 kB   82.1 kB",
            "  └ ● /api/hydrate        2.3 kB   76.4 kB",
            "✓ Compilation successful in 340ms."
        ]
    },
    Tailwind: {
        category: "CSS Utility Framework",
        command: "npx tailwindcss -o build.css --minify",
        kpi: "-85% custom CSS overhead",
        scale: "System-wide design tokens",
        logs: [
            "Scanning classes in source files...",
            "Purging unused utility class selectors...",
            "Minified output CSS: 11.4 kB (gzip: 3.1 kB)",
            "Tailwind compilation completed in 92ms."
        ]
    },
    TypeScript: {
        category: "Programming Language",
        command: "tsc --noEmit",
        kpi: "Zero runtime type exceptions",
        scale: "Scalable codebase architecture",
        logs: [
            "Initializing TypeScript compiler...",
            "Checking syntax & static type declarations...",
            "Type resolution check completed: 0 errors.",
            "Target module system: ESNext."
        ]
    },
    Figma: {
        category: "UI/UX Design Platform",
        command: "figma-api --sync-design-tokens",
        kpi: "Pixel-perfect handoff precision",
        scale: "Design-system-to-code sync",
        logs: [
            "Establishing connection to Figma project...",
            "Extracting spacing, typography & color variables...",
            "Exported 24 local CSS custom properties.",
            "Sync successful."
        ]
    },
    Java: {
        category: "Backend Engine",
        command: "java -XX:+UseG1GC -jar app.jar",
        kpi: "High-concurrency thread safety",
        scale: "Robust enterprise runtimes",
        logs: [
            "Initializing OpenJDK 64-Bit Server VM...",
            "Class data sharing enabled.",
            "Garbage collector: G1GC active.",
            "Running high-concurrency worker threads..."
        ]
    },
    "Spring Boot": {
        category: "Enterprise Java Framework",
        command: "mvn spring-boot:run",
        kpi: "ACID-transaction integrity",
        scale: "Scalable REST microservices",
        logs: [
            "  .   ____          _            __ _ _",
            " /\\\\ / ___'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\",
            "Starting application on localhost:8080",
            "Tomcat web server initialized on port 8080 (http)",
            "Spring Boot container started successfully."
        ]
    },
    Oracle: {
        category: "Relational Database",
        command: "sqlplus admin/db_prod",
        kpi: "Sub-millisecond index hits",
        scale: "ACID storage consistency",
        logs: [
            "Connecting to Oracle 23c Enterprise Edition...",
            "Connected. Session ID: 4193.",
            "SQL> SELECT COUNT(*) FROM ledger_entries;",
            "Result: 12,849,102 rows [Query elapsed: 2.1ms]"
        ]
    },
    Azure: {
        category: "Cloud Infrastructure",
        command: "az deployment group create --name prod-deploy",
        kpi: "99.99% infrastructure availability",
        scale: "Elastic auto-scaling nodes",
        logs: [
            "Initiating resource group orchestration...",
            "Deploying cluster virtual machine scales...",
            "Configuring load balancer and CDN cache nodes...",
            "Azure deployment successfully provisioned."
        ]
    },
    Python: {
        category: "Data & ML Scripting",
        command: "python pipeline.py --run-etl",
        kpi: "Highly readable business logic",
        scale: "Extensive scripting utilities",
        logs: [
            "Initializing python interpreter...",
            "Parsing ETL data ingestion streams...",
            "Processed 4,500 records. Target: DW database.",
            "Pipeline completed successfully."
        ]
    },
    OpenAI: {
        category: "AI Integration API",
        command: "openai.chat.completions.create()",
        kpi: "Semantic intent resolution",
        scale: "LLM agentic workflows",
        logs: [
            "Connecting to api.openai.com endpoints...",
            "Constructing GPT-4o input system prompts...",
            "Latency: 280ms. Prompt tokens: 512. Completion: 96.",
            "Payload validated. Content retrieved."
        ]
    },
    TensorFlow: {
        category: "Deep Learning Engine",
        command: "python train_model.py --gpu",
        kpi: "Parallelized CUDA execution",
        scale: "High-dimensional neural nets",
        logs: [
            "Found CUDA-compatible GPU: NVIDIA RTX-4090.",
            "Loading model weight tensors...",
            "Epoch 50/50 - accuracy: 99.42% - loss: 0.0102",
            "Model weights compiled and saved to disk."
        ]
    },
    Docker: {
        category: "Container Platform",
        command: "docker build -t service-node:prod .",
        kpi: "Unified dev/prod environments",
        scale: "Isolated multi-platform containers",
        logs: [
            "Sending build context to Docker daemon...",
            "Step 3/5 : RUN npm run build",
            " ---> Running in a1b2c3d4e5f6",
            "Successfully built image: service-node:prod"
        ]
    }
};

const getCoordinates = (radius: number, index: number, total: number) => {
    const angle = (index * 2 * Math.PI) / total;
    return {
        x: Math.round(radius * Math.cos(angle) * 1000) / 1000,
        y: Math.round(radius * Math.sin(angle) * 1000) / 1000
    };
};

const getCalcPosition = (val: number) => {
    if (val < 0) {
        return `calc(50% - ${Math.abs(val)}px)`;
    }
    return `calc(50% + ${val}px)`;
};

export default function TechStackSection() {
    const [hoveredTech, setHoveredTech] = useState<string | null>(null);

    const { scrollY } = useScroll();
    const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        const diff = latest - previous;
        if (Math.abs(diff) > 2) {
            setScrollDirection(diff > 0 ? "down" : "up");
        }
    });

    const headerVariants = {
        hidden: (direction: "up" | "down") => ({
            opacity: 0,
            y: direction === "down" ? 30 : -30
        }),
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" as const }
        }
    };

    const containerVariants = {
        hidden: (direction: "up" | "down") => ({
            opacity: 0,
            y: direction === "down" ? 40 : -40,
            scale: 0.96
        }),
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring" as const, stiffness: 50, damping: 15 }
        }
    };

    return (
        <section className="relative w-full py-24 px-0 bg-white overflow-hidden tech-stack-container-3d">
            {/* Inject counter-rotation CSS style rules */}
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes spin-cw {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                @keyframes spin-ccw {
                    0% { transform: rotate(360deg); }
                    100% { transform: rotate(0deg); }
                }
                .spin-clockwise {
                    animation: spin-cw linear infinite;
                }
                .spin-counter {
                    animation: spin-ccw linear infinite;
                }
            `}} />

            <motion.div 
                custom={scrollDirection}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.1 }
                    }
                }}
                className="text-center mb-16 relative z-10 px-4"
            >
                <motion.h2
                    variants={headerVariants}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]"
                    style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 400,
                        letterSpacing: "-0.02em"
                    }}
                >
                    <span className="text-gray-900">Our Technology </span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                        Stack
                    </span>
                </motion.h2>
                <motion.p 
                    variants={headerVariants}
                    className="text-lg md:text-xl text-gray-550 leading-relaxed font-light"
                >
                    An integrated ecosystem of high-concurrency tools, frameworks, and deployment engines.
                </motion.p>
            </motion.div>

            {/* Constellation Container */}
            <motion.div 
                custom={scrollDirection}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-80px" }}
                variants={containerVariants}
                className="relative flex items-center justify-center h-[520px] sm:h-[600px] md:h-[680px] w-full select-none overflow-hidden my-4"
            >
                
                {/* Responsive scaler wrapper */}
                <div className="relative flex items-center justify-center w-[640px] h-[640px] scale-[0.52] sm:scale-[0.72] md:scale-[0.88] lg:scale-100 transition-all duration-500">
                    
                    {/* SVG Orbit Guide Rings (Static dashed circles behind the spinning ones) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                        <circle cx="320" cy="320" r="110" fill="none" stroke="#6366f1" strokeWidth="1" strokeDasharray="3 3" />
                        <circle cx="320" cy="320" r="200" fill="none" stroke="#6366f1" strokeWidth="1" strokeDasharray="3 3" />
                        <circle cx="320" cy="320" r="290" fill="none" stroke="#6366f1" strokeWidth="1" strokeDasharray="3 3" />
                    </svg>

                    {/* Orbit 1 (Inner) */}
                    <div 
                        className="absolute w-[220px] h-[220px] rounded-full flex items-center justify-center spin-clockwise"
                        style={{
                            animationDuration: '28s',
                            animationPlayState: hoveredTech ? 'paused' : 'running'
                        }}
                    >
                        {orbit1.map((tech, idx) => {
                            const { x, y } = getCoordinates(110, idx, orbit1.length);
                            const brandColor = colorMap[tech.color] || '#64748b';
                            return (
                                <div
                                    key={tech.name}
                                    className="absolute"
                                    suppressHydrationWarning
                                    style={{
                                        left: getCalcPosition(x),
                                        top: getCalcPosition(y),
                                        transform: 'translate(-50%, -50%)'
                                    }}
                                >
                                    <div
                                        className="spin-counter"
                                        style={{
                                            animationDuration: '28s',
                                            animationPlayState: hoveredTech ? 'paused' : 'running'
                                        }}
                                    >
                                        <TechPill 
                                            tech={tech}
                                            onHoverStart={() => setHoveredTech(tech.name)}
                                            onHoverEnd={() => setHoveredTech(null)}
                                        />
                                    </div>
                                    {/* Laser connect to core */}
                                    {hoveredTech === tech.name && (
                                        <svg className="absolute pointer-events-none overflow-visible" style={{ left: '50%', top: '50%', width: 0, height: 0 }}>
                                            <defs>
                                                <linearGradient id={`line-grad-1-${tech.name}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
                                                    <stop offset="100%" stopColor={brandColor} stopOpacity="0.8" />
                                                </linearGradient>
                                            </defs>
                                            <motion.line 
                                                x1={-x} 
                                                y1={-y} 
                                                x2={0} 
                                                y2={0} 
                                                stroke={`url(#line-grad-1-${tech.name})`} 
                                                strokeWidth="2.5" 
                                                initial={{ strokeDasharray: "8 8", strokeDashoffset: 100 }}
                                                animate={{ strokeDashoffset: 0 }}
                                                transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                                                className="drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]"
                                            />
                                        </svg>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Orbit 2 (Middle) */}
                    <div 
                        className="absolute w-[400px] h-[400px] rounded-full flex items-center justify-center spin-counter"
                        style={{
                            animationDuration: '38s',
                            animationPlayState: hoveredTech ? 'paused' : 'running'
                        }}
                    >
                        {orbit2.map((tech, idx) => {
                            const { x, y } = getCoordinates(200, idx, orbit2.length);
                            const brandColor = colorMap[tech.color] || '#64748b';
                            return (
                                <div
                                    key={tech.name}
                                    className="absolute"
                                    suppressHydrationWarning
                                    style={{
                                        left: getCalcPosition(x),
                                        top: getCalcPosition(y),
                                        transform: 'translate(-50%, -50%)'
                                    }}
                                >
                                    <div
                                        className="spin-clockwise"
                                        style={{
                                            animationDuration: '38s',
                                            animationPlayState: hoveredTech ? 'paused' : 'running'
                                        }}
                                    >
                                        <TechPill 
                                            tech={tech}
                                            onHoverStart={() => setHoveredTech(tech.name)}
                                            onHoverEnd={() => setHoveredTech(null)}
                                        />
                                    </div>
                                    {/* Laser connect to core */}
                                    {hoveredTech === tech.name && (
                                        <svg className="absolute pointer-events-none overflow-visible" style={{ left: '50%', top: '50%', width: 0, height: 0 }}>
                                            <defs>
                                                <linearGradient id={`line-grad-2-${tech.name}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
                                                    <stop offset="100%" stopColor={brandColor} stopOpacity="0.8" />
                                                </linearGradient>
                                            </defs>
                                            <motion.line 
                                                x1={-x} 
                                                y1={-y} 
                                                x2={0} 
                                                y2={0} 
                                                stroke={`url(#line-grad-2-${tech.name})`} 
                                                strokeWidth="2.5" 
                                                initial={{ strokeDasharray: "8 8", strokeDashoffset: 100 }}
                                                animate={{ strokeDashoffset: 0 }}
                                                transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                                                className="drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]"
                                            />
                                        </svg>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Orbit 3 (Outer) */}
                    <div 
                        className="absolute w-[580px] h-[580px] rounded-full flex items-center justify-center spin-clockwise"
                        style={{
                            animationDuration: '48s',
                            animationPlayState: hoveredTech ? 'paused' : 'running'
                        }}
                    >
                        {orbit3.map((tech, idx) => {
                            const { x, y } = getCoordinates(290, idx, orbit3.length);
                            const brandColor = colorMap[tech.color] || '#64748b';
                            return (
                                <div
                                    key={tech.name}
                                    className="absolute"
                                    suppressHydrationWarning
                                    style={{
                                        left: getCalcPosition(x),
                                        top: getCalcPosition(y),
                                        transform: 'translate(-50%, -50%)'
                                    }}
                                >
                                    <div
                                        className="spin-counter"
                                        style={{
                                            animationDuration: '48s',
                                            animationPlayState: hoveredTech ? 'paused' : 'running'
                                        }}
                                    >
                                        <TechPill 
                                            tech={tech}
                                            onHoverStart={() => setHoveredTech(tech.name)}
                                            onHoverEnd={() => setHoveredTech(null)}
                                        />
                                    </div>
                                    {/* Laser connect to core */}
                                    {hoveredTech === tech.name && (
                                        <svg className="absolute pointer-events-none overflow-visible" style={{ left: '50%', top: '50%', width: 0, height: 0 }}>
                                            <defs>
                                                <linearGradient id={`line-grad-3-${tech.name}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
                                                    <stop offset="100%" stopColor={brandColor} stopOpacity="0.8" />
                                                </linearGradient>
                                            </defs>
                                            <motion.line 
                                                x1={-x} 
                                                y1={-y} 
                                                x2={0} 
                                                y2={0} 
                                                stroke={`url(#line-grad-3-${tech.name})`} 
                                                strokeWidth="2.5" 
                                                initial={{ strokeDasharray: "8 8", strokeDashoffset: 100 }}
                                                animate={{ strokeDashoffset: 0 }}
                                                transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                                                className="drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]"
                                            />
                                        </svg>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Central Core Hub */}
                    <div className="absolute w-[130px] h-[130px] rounded-full flex items-center justify-center z-20 pointer-events-none">
                        <div className="absolute inset-0 rounded-full bg-indigo-500/10 blur-xl"></div>
                        <motion.div 
                            className="absolute inset-0 rounded-full bg-indigo-500/10 border border-indigo-500/20"
                            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        />
                        <div className="w-[100px] h-[100px] rounded-full bg-slate-950/95 border border-indigo-500/30 backdrop-blur-md flex flex-col items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.18)]">
                            <span className="text-[10px] text-indigo-400 font-mono tracking-widest uppercase">NISSCHAY</span>
                            <span className="text-xs text-white font-extrabold tracking-wider mt-0.5">CORE</span>
                        </div>
                    </div>

                </div>
            </motion.div>

            {/* Terminal Console */}
            <motion.div 
                custom={scrollDirection}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
                variants={containerVariants}
                className="max-w-4xl mx-auto px-4 mt-8 relative z-10"
            >
                <div className="w-full bg-[#030712] border border-slate-800 rounded-3xl shadow-2xl overflow-hidden font-mono text-sm text-slate-300">
                    {/* Terminal Title Bar */}
                    <div className="flex items-center justify-between px-6 py-3.5 bg-[#0b0f19] border-b border-slate-800/80">
                        <div className="flex gap-2">
                            <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                            <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                            <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                        </div>
                        <div className="text-xs text-slate-500 select-none">bash - technology_profile.sh</div>
                        <div className="w-12"></div> {/* Spacer for alignment */}
                    </div>
                    {/* Terminal Content */}
                    <div className="p-6 md:p-8 min-h-[260px] flex flex-col justify-between">
                        {hoveredTech && techMetadata[hoveredTech] ? (
                            <div className="flex flex-col gap-4">
                                {/* Header Info */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-400 border-b border-slate-800/60 pb-4">
                                    <div>
                                        <span className="text-blue-400 font-semibold uppercase">Category:</span>{" "}
                                        <span className="text-slate-200">{techMetadata[hoveredTech].category}</span>
                                    </div>
                                    <div>
                                        <span className="text-emerald-400 font-semibold uppercase">KPI Metric:</span>{" "}
                                        <span className="text-slate-200">{techMetadata[hoveredTech].kpi}</span>
                                    </div>
                                    <div>
                                        <span className="text-purple-400 font-semibold uppercase">Scale Focus:</span>{" "}
                                        <span className="text-slate-200">{techMetadata[hoveredTech].scale}</span>
                                    </div>
                                </div>
                                
                                {/* Command */}
                                <div className="text-slate-100 flex items-center gap-2 mt-1">
                                    <span className="text-slate-500 font-bold">$</span>
                                    <span className="text-emerald-400 font-semibold">{techMetadata[hoveredTech].command}</span>
                                </div>

                                {/* Logs */}
                                <div className="flex flex-col gap-1.5 text-slate-400 font-mono text-xs md:text-sm pl-4 border-l border-slate-800">
                                    {techMetadata[hoveredTech].logs.map((log, idx) => (
                                        <div key={idx} className="whitespace-pre-wrap leading-relaxed">
                                            {log}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col justify-center items-center h-[180px] text-slate-500 gap-3">
                                <div className="flex items-center gap-2.5 text-base md:text-lg">
                                    <span className="text-blue-500 animate-pulse font-bold">$</span>
                                    <span className="font-mono text-slate-400">hover_any_technology_for_specs_</span>
                                    <span className="w-2 h-4 bg-blue-500 animate-pulse"></span>
                                </div>
                                <span className="text-xs text-slate-500 text-center max-w-md leading-relaxed select-none">
                                    Move your cursor over any orbiting technology node to trigger dynamic telemetry diagnostic compilation.
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

function TechPill({ 
    tech, 
    onHoverStart, 
    onHoverEnd 
}: { 
    tech: { name: string; icon: IconType; color: string }; 
    onHoverStart: () => void; 
    onHoverEnd: () => void; 
}) {
    const [isHovered, setIsHovered] = useState(false);
    const brandColor = colorMap[tech.color] || '#64748b';

    return (
        <div
            className="group relative flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/60 border border-blue-100/40 backdrop-blur-md cursor-pointer transition-all duration-500 hover:scale-105"
            style={{
                borderColor: isHovered ? brandColor : 'rgba(0, 135, 255, 0.12)',
                boxShadow: isHovered 
                    ? `0 12px 30px -10px ${brandColor}40, 0 1px 1px ${brandColor}20, inset 0 0 12px 2px ${brandColor}15`
                    : '0 4px 20px rgba(0, 0, 0, 0.02)',
                background: isHovered 
                    ? 'rgba(255, 255, 255, 0.95)' 
                    : 'rgba(255, 255, 255, 0.7)',
            }}
            onMouseEnter={() => {
                setIsHovered(true);
                onHoverStart();
            }}
            onMouseLeave={() => {
                setIsHovered(false);
                onHoverEnd();
            }}
        >
            <tech.icon
                className="w-6 h-6 transition-all duration-500"
                style={{ 
                    color: isHovered ? brandColor : '#64748b',
                    transform: isHovered ? 'scale(1.1)' : 'scale(1)'
                }}
            />
            <span
                className="font-semibold text-sm transition-colors duration-500 whitespace-nowrap"
                style={{ 
                    color: isHovered ? brandColor : '#475569',
                    fontFamily: "var(--font-inter)"
                }}
            >
                {tech.name}
            </span>
            
            {/* Ambient inner shine overlay */}
            <div 
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: `radial-gradient(circle at 50% 0%, ${brandColor}15 0%, transparent 70%)`
                }}
            />
        </div>
    );
}
