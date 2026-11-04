import { IconType } from "react-icons";
import {
    FiMonitor, FiSmartphone, FiCpu, FiCloud,
    FiLayout, FiCode
} from "react-icons/fi";

export interface ServiceBreakdown {
    id: string;
    title: string;
    icon: IconType;
    description: string;
    benefits: {
        title: string;
        description: string;
    }[];
    useCases: {
        scenario: string;
        description: string;
    }[];
    technologies: string[];
    whyChoose: string[];
}

export const serviceBreakdowns: ServiceBreakdown[] = [
    {
        id: "web-saas",
        title: "Web & SaaS Development",
        icon: FiMonitor,
        description: "We build high-performance web applications and custom SaaS products optimized for speed, SEO, and global scaling. We design storefronts and platforms that engage users and convert them into paying customers.",
        benefits: [
            {
                title: "Sub-Second Page Speed",
                description: "Optimized server-side rendering (SSR) and edge delivery for lightning-fast loads."
            },
            {
                title: "SEO-Ready Architecture",
                description: "Built-in dynamic metadata schemas, semantic HTML, and sitemaps for top rankings."
            },
            {
                title: "Payment & Subscription Integrations",
                description: "Seamless integration with Stripe, Razorpay, and subscription engines."
            },
            {
                title: "Scalable Multi-Tenant Platforms",
                description: "Solid databases and multi-tenant logic designed for modern SaaS startups."
            }
        ],
        useCases: [
            {
                scenario: "SaaS Platforms & MVPs",
                description: "User portals, dynamic dashboards, multi-role access control, and subscription billings."
            },
            {
                scenario: "E-Commerce & D2C Storefronts",
                description: "High-speed storefronts with custom checkout experiences, inventory sync, and Indian payment gateways."
            },
            {
                scenario: "Corporate Web Platforms",
                description: "Premium websites with headless CMS integrations like Sanity or Strapi for easy content edits."
            }
        ],
        technologies: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL", "MongoDB", "Stripe / Razorpay"],
        whyChoose: [
            "Startups launched with our MVPs have raised funding successfully",
            "Average 45% improvement in conversion rates after migration to Next.js",
            "Modern, developer-friendly clean codebases that scale cleanly",
            "Ongoing maintenance and optimization post-launch"
        ]
    },
    {
        id: "mobile-apps",
        title: "Mobile App Development",
        icon: FiSmartphone,
        description: "We engineer high-performance native and cross-platform mobile apps for iOS and Android. Our designs prioritize offline capability, smooth 60fps animations, and native device feature integrations.",
        benefits: [
            {
                title: "Single Codebase Efficiency",
                description: "React Native and Flutter save up to 40% development time and cost."
            },
            {
                title: "Fluid Animations & UX",
                description: "Ultra-responsive screens designed for intuitive swipe patterns and gesture controls."
            },
            {
                title: "Device Feature Integrations",
                description: "Seamless connections to GPS, biometrics, camera, Bluetooth, and local storage."
            },
            {
                title: "Offline Syncing Capabilities",
                description: "Local data caching systems ensuring your app works perfectly without internet."
            }
        ],
        useCases: [
            {
                scenario: "D2C Brand Mobile Apps",
                description: "Fast shop layouts, push notifications for deals, cart recovery, and mobile-first payments."
            },
            {
                scenario: "Fintech & Edtech Solutions",
                description: "Secure dashboards, real-time tracking, interactive video players, and data privacy."
            },
            {
                scenario: "On-Demand Delivery Platforms",
                description: "Real-time map tracking, driver dispatch, auto-alerts, and localized payment options."
            }
        ],
        technologies: ["React Native", "Flutter", "TypeScript", "Firebase", "Redux Toolkit", "GraphQL", "iOS (Swift)", "Android (Kotlin)"],
        whyChoose: [
            "Apps designed by us have crossed 100k+ downloads on the App Store & Play Store",
            "Clean store submission support with 100% approval rates",
            "Regular updates, security compliance, and crash tracking integrations",
            "Pre-integrated deep linking and marketing analytics"
        ]
    },
    {
        id: "ai-automation",
        title: "AI Integration & Automation",
        icon: FiCpu,
        description: "We integrate state-of-the-art Generative AI models, vector databases, and custom automation workflows to optimize business operations, increase efficiency, and lower support costs.",
        benefits: [
            {
                title: "Massive Cost Savings",
                description: "Automate 60%+ of repetitive tasks and direct customer queries to AI systems."
            },
            {
                title: "WhatsApp Bot Automation",
                description: "Integrate custom AI customer support directly inside the app your users use daily."
            },
            {
                title: "Vector Search & Retrieval",
                description: "Connect AI agents directly to your proprietary company wikis and PDF knowledge bases."
            },
            {
                title: "24/7 Virtual Workers",
                description: "Support and booking agents operating continuously with no delays or downtime."
            }
        ],
        useCases: [
            {
                scenario: "WhatsApp Customer Support",
                description: "Intelligent chatbot bots answering queries, checking orders, and sharing links on WhatsApp."
            },
            {
                scenario: "Workflow Automations (Zapier/Make)",
                description: "Connecting CRMs, Gmail, Slack, and spreadsheets to sync business pipelines automatically."
            },
            {
                scenario: "Custom AI Content Copilots",
                description: "Internal AI engines designed to generate marketing collateral, transcribe audio, or audit files."
            }
        ],
        technologies: ["OpenAI API", "Claude / Anthropic", "LangChain", "Python", "Pinecone / ChromaDB", "FastAPI", "WhatsApp Cloud API"],
        whyChoose: [
            "Deploy custom AI agents fine-tuned to your brand's unique tone and data",
            "Secure API architectures keeping business information completely private",
            "Average 50% decrease in support response times post-integration",
            "Expertise across modern AI agentic frameworks"
        ]
    },
    {
        id: "custom-software",
        title: "Custom Software Development",
        icon: FiCode,
        description: "We architect and program custom software solutions tailored to your unique internal business workflows. From complex ERP dashboards to custom database portals, we build tools off-the-shelf software can't replace.",
        benefits: [
            {
                title: "Engineered for Your Workflow",
                description: "Completely tailored around your business processes without unnecessary bloat."
            },
            {
                title: "No Monthly Licensing Fees",
                description: "Full intellectual property ownership—build once, own forever."
            },
            {
                title: "Enterprise Security Integration",
                description: "Built-in role-based access controls, complete audit trails, and data encryption."
            },
            {
                title: "Seamless Legacy Integration",
                description: "Connect old systems to modern, fast interfaces without losing history."
            }
        ],
        useCases: [
            {
                scenario: "Internal Operations Hubs",
                description: "Custom ERPs, CRMs, inventory tracking dashboards, and employee portals."
            },
            {
                scenario: "API Integrations & Bridges",
                description: "Connecting disparate third-party tools to create single, cohesive business workflows."
            },
            {
                scenario: "Legacy Tech Modernization",
                description: "Re-platforming slow, old software systems into fast, modern cloud-native web portals."
            }
        ],
        technologies: ["React", "Node.js", "TypeScript", "Python", "Django", "PostgreSQL", "Docker", "REST / GraphQL APIs"],
        whyChoose: [
            "End-to-end consulting, delivery, and onboarding support",
            "Experience rebuilding core business portals with zero uptime disruption",
            "Strict agile delivery models with visible updates every two weeks",
            "Comprehensive post-delivery technical documentation and training"
        ]
    },
    {
        id: "ui-ux-design",
        title: "UI/UX & Product Design",
        icon: FiLayout,
        description: "We craft stunning, premium, and interactive product designs and visual branding identity. We base our work on user research, user journey analysis, and clean component systems to maximize user engagement.",
        benefits: [
            {
                title: "High-Converting Layouts",
                description: "Optimized user paths and conversion rate optimization (CRO) best practices."
            },
            {
                title: "Interactive Prototyping",
                description: "High-fidelity Figma prototypes allowing you to see and feel the app before coding."
            },
            {
                title: "Comprehensive Design Systems",
                description: "Reusable component tokens ensuring brand consistency across web, mobile, and print."
            },
            {
                title: "Research-Driven UX",
                description: "User testing and heatmaps ensuring layouts map cleanly to target demographics."
            }
        ],
        useCases: [
            {
                scenario: "Startup App Blueprinting",
                description: "From napkin sketches to complete dev-ready app interface design prototypes."
            },
            {
                scenario: "Legacy UI Modernization",
                description: "Redesigning old, clunky, complex software to make it intuitive and beautiful."
            },
            {
                scenario: "Visual Identity & Brand Systems",
                description: "Logos, type selections, color schemes, and vector design standards."
            }
        ],
        technologies: ["Figma", "Framer", "Adobe Photoshop / Illustrator", "Storybook", "Hotjar / Heatmaps"],
        whyChoose: [
            "Designs engineered by UI/UX experts targeting high conversion",
            "Deliver clean, organized Figma files with clear developer instructions",
            "Emphasis on sleek, dark modes, gradients, and micro-animations",
            "Agile design sprints that value collaborative iterations"
        ]
    },
    {
        id: "cloud-devops",
        title: "Cloud & DevOps Services",
        icon: FiCloud,
        description: "We design, deploy, and maintain secure, auto-scaling cloud server architectures. We setup automated deployment (CI/CD) pipelines to guarantee high availability and sub-second load times.",
        benefits: [
            {
                title: "99.9% Production Uptime",
                description: "Automated database backups and multi-region failovers."
            },
            {
                title: "CI/CD Pipeline Automations",
                description: "Push changes to staging or production safely in minutes with GitHub Actions."
            },
            {
                title: "Resource Cost Reductions",
                description: "Audit existing cloud systems to terminate unused components and scale resources efficiently."
            },
            {
                title: "Real-time Infrastructure Alerting",
                description: "Continuous monitoring to detect performance issues before they impact your clients."
            }
        ],
        useCases: [
            {
                scenario: "Cloud Migration",
                description: "Moving applications from expensive local servers to secure AWS or Google Cloud servers."
            },
            {
                scenario: "Infrastructure-as-Code (IaC)",
                description: "Using Terraform to configure stable, repeatable setups."
            },
            {
                scenario: "Server Load Optimization",
                description: "Setting up auto-scalers and CDNs to support high traffic on Indian festival/sale days."
            }
        ],
        technologies: ["Amazon Web Services (AWS)", "Google Cloud (GCP)", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Datadog / Prometheus"],
        whyChoose: [
            "Certified Cloud Professionals handling security configurations",
            "Infrastructure design optimized for cost-savings and rapid expansion",
            "Comprehensive server audit report and security recommendations",
            "24/7 emergency response engineering support"
        ]
    }
];

export function getServiceBreakdownById(id: string): ServiceBreakdown | undefined {
    return serviceBreakdowns.find(service => service.id === id);
}
