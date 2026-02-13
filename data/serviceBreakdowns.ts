import { IconType } from "react-icons";
import {
    FiMonitor, FiSmartphone, FiCpu, FiCloud,
    FiLayout, FiSettings, FiCode, FiUsers, FiBriefcase
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
        id: "web-platforms",
        title: "Enterprise Web Platforms",
        icon: FiMonitor,
        description: "Build scalable, high-performance web applications that handle millions of users. From e-commerce platforms to SaaS products, we create web solutions optimized for speed, SEO, and conversion.",
        benefits: [
            {
                title: "Lightning-Fast Performance",
                description: "Sub-second page loads with Next.js and advanced caching strategies"
            },
            {
                title: "SEO Optimized",
                description: "Server-side rendering and metadata optimization for top search rankings"
            },
            {
                title: "Scalable Architecture",
                description: "Handle 10x traffic growth without performance degradation"
            },
            {
                title: "Conversion Focused",
                description: "UX design backed by behavioral research to maximize conversions"
            }
        ],
        useCases: [
            {
                scenario: "E-Commerce Platform",
                description: "High-traffic online stores with complex product catalogs, payment processing, and inventory management"
            },
            {
                scenario: "SaaS Application",
                description: "Multi-tenant platforms with user dashboards, analytics, and subscription management"
            },
            {
                scenario: "Corporate Website",
                description: "Professional brand presence with CMS integration, blogs, and lead generation"
            }
        ],
        technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS", "Vercel"],
        whyChoose: [
            "Proven track record with 25+ successful web projects",
            "Average 40% improvement in page load speed",
            "Built-in analytics and performance monitoring",
            "Ongoing support and optimization post-launch"
        ]
    },
    {
        id: "mobile-apps",
        title: "Mobile App Engineering",
        icon: FiSmartphone,
        description: "Native and cross-platform mobile applications for iOS and Android. We build apps that users love, with smooth performance, intuitive UX, and seamless integration with your backend systems.",
        benefits: [
            {
                title: "Cross-Platform Efficiency",
                description: "One codebase for iOS and Android saves 40% development time"
            },
            {
                title: "Native Performance",
                description: "Smooth 60fps animations and instant response times"
            },
            {
                title: "Offline Capability",
                description: "Apps work seamlessly even without internet connection"
            },
            {
                title: "Push Notifications",
                description: "Re-engage users with targeted, personalized notifications"
            }
        ],
        useCases: [
            {
                scenario: "Consumer Apps",
                description: "Social platforms, fitness trackers, food delivery, and lifestyle apps"
            },
            {
                scenario: "Business Tools",
                description: "Field service apps, inventory management, and employee productivity tools"
            },
            {
                scenario: "On-Demand Services",
                description: "Ride-sharing, home services, and marketplace applications"
            }
        ],
        technologies: ["React Native", "Flutter", "TypeScript", "Firebase", "Redux", "GraphQL", "iOS", "Android"],
        whyChoose: [
            "Apps with 200K+ active users in production",
            "Average 4.5+ star rating on app stores",
            "Complete App Store and Play Store submission support",
            "Post-launch monitoring and crash analytics"
        ]
    },
    {
        id: "ai-automation",
        title: "Intelligent Automation & AI",
        icon: FiCpu,
        description: "Harness the power of AI to automate workflows, analyze data, and enhance customer experiences. From chatbots to predictive analytics, we integrate cutting-edge AI into your business processes.",
        benefits: [
            {
                title: "Cost Reduction",
                description: "Reduce operational costs by 40-60% through intelligent automation"
            },
            {
                title: "24/7 Availability",
                description: "AI agents work around the clock without breaks or downtime"
            },
            {
                title: "Data-Driven Insights",
                description: "Uncover patterns and predictions from your business data"
            },
            {
                title: "Scalable Support",
                description: "Handle unlimited customer queries simultaneously"
            }
        ],
        useCases: [
            {
                scenario: "Customer Support Automation",
                description: "AI chatbots handling 70% of support tickets with 95% accuracy"
            },
            {
                scenario: "Document Processing",
                description: "Automated extraction and analysis of invoices, contracts, and forms"
            },
            {
                scenario: "Predictive Analytics",
                description: "Forecast sales, detect fraud, and optimize inventory with ML models"
            }
        ],
        technologies: ["OpenAI GPT-4", "Claude", "LangChain", "Python", "TensorFlow", "Pinecone", "FastAPI"],
        whyChoose: [
            "Expertise in latest AI models (GPT-4, Claude, Gemini)",
            "Custom training on your business data",
            "Ethical AI implementation with bias mitigation",
            "Continuous model improvement and fine-tuning"
        ]
    },
    {
        id: "cloud-devops",
        title: "Cloud Infrastructure & DevOps",
        icon: FiCloud,
        description: "Build secure, auto-scaling cloud environments with automated deployment pipelines. We handle infrastructure so you can focus on building great products.",
        benefits: [
            {
                title: "Auto-Scaling",
                description: "Automatically handle traffic spikes without manual intervention"
            },
            {
                title: "99.9% Uptime",
                description: "High availability with multi-region redundancy"
            },
            {
                title: "Rapid Deployment",
                description: "Ship updates in minutes with CI/CD automation"
            },
            {
                title: "Cost Optimization",
                description: "Pay only for resources you use with smart scaling"
            }
        ],
        useCases: [
            {
                scenario: "Microservices Architecture",
                description: "Containerized applications with Kubernetes orchestration"
            },
            {
                scenario: "Data Pipeline",
                description: "ETL workflows processing millions of records daily"
            },
            {
                scenario: "Disaster Recovery",
                description: "Automated backups and failover systems for business continuity"
            }
        ],
        technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions"],
        whyChoose: [
            "Certified cloud architects (AWS, Azure, GCP)",
            "Infrastructure as Code for reproducibility",
            "24/7 monitoring and alerting",
            "Security best practices and compliance"
        ]
    },
    {
        id: "ux-design",
        title: "Immersive Experience Design",
        icon: FiLayout,
        description: "Create user interfaces that delight and convert. Our designs are backed by user research, accessibility standards, and modern aesthetics that make your brand stand out.",
        benefits: [
            {
                title: "User-Centered Design",
                description: "Research-driven interfaces optimized for your target audience"
            },
            {
                title: "Accessibility First",
                description: "WCAG compliant designs that work for everyone"
            },
            {
                title: "Brand Consistency",
                description: "Design systems ensuring cohesive experience across platforms"
            },
            {
                title: "Conversion Optimization",
                description: "A/B tested designs that maximize user engagement"
            }
        ],
        useCases: [
            {
                scenario: "Product Redesign",
                description: "Modernize legacy applications with fresh, intuitive interfaces"
            },
            {
                scenario: "Design System",
                description: "Scalable component libraries for consistent brand experience"
            },
            {
                scenario: "User Research",
                description: "Usability testing and user interviews to validate design decisions"
            }
        ],
        technologies: ["Figma", "Adobe XD", "Framer", "React", "Tailwind CSS", "Storybook", "Analytics"],
        whyChoose: [
            "Award-winning design portfolio",
            "Average 35% increase in user engagement",
            "Rapid prototyping and iteration",
            "Handoff-ready designs with developer specs"
        ]
    },
    {
        id: "it-operations",
        title: "Managed IT Operations",
        icon: FiSettings,
        description: "Proactive infrastructure monitoring, security patching, and 24/7 reliability. We keep your systems running smoothly so you can focus on your business.",
        benefits: [
            {
                title: "Proactive Monitoring",
                description: "Detect and resolve issues before they impact users"
            },
            {
                title: "Security Patching",
                description: "Regular updates to protect against vulnerabilities"
            },
            {
                title: "24/7 Support",
                description: "Round-the-clock technical support and incident response"
            },
            {
                title: "Performance Optimization",
                description: "Continuous tuning for maximum efficiency"
            }
        ],
        useCases: [
            {
                scenario: "Application Monitoring",
                description: "Real-time alerts for downtime, errors, and performance issues"
            },
            {
                scenario: "Database Management",
                description: "Backup, optimization, and scaling of production databases"
            },
            {
                scenario: "Security Compliance",
                description: "Regular audits and compliance reporting (SOC 2, HIPAA, GDPR)"
            }
        ],
        technologies: ["Datadog", "New Relic", "PagerDuty", "Splunk", "Prometheus", "Grafana", "Ansible"],
        whyChoose: [
            "Average 99.95% uptime for managed systems",
            "15-minute response time for critical issues",
            "Transparent reporting and SLA tracking",
            "Predictable monthly pricing"
        ]
    },
    {
        id: "custom-solutions",
        title: "Bespoke Digital Solutions",
        icon: FiCode,
        description: "Custom-engineered software solving unique business challenges that off-the-shelf tools can't address. From complex integrations to industry-specific platforms.",
        benefits: [
            {
                title: "Tailored to Your Needs",
                description: "Built specifically for your business processes and requirements"
            },
            {
                title: "Competitive Advantage",
                description: "Unique features that differentiate you from competitors"
            },
            {
                title: "Full Ownership",
                description: "Complete control over your codebase and intellectual property"
            },
            {
                title: "Seamless Integration",
                description: "Works perfectly with your existing systems and workflows"
            }
        ],
        useCases: [
            {
                scenario: "Industry-Specific Platform",
                description: "Healthcare portals, legal case management, or financial trading systems"
            },
            {
                scenario: "Complex Integrations",
                description: "Connect disparate systems (ERP, CRM, legacy databases)"
            },
            {
                scenario: "Internal Tools",
                description: "Custom dashboards, reporting tools, and workflow automation"
            }
        ],
        technologies: ["Full Stack", "API Development", "System Integration", "Legacy Modernization", "Custom Frameworks"],
        whyChoose: [
            "Experience across 15+ industries",
            "Agile development with 2-week sprints",
            "Comprehensive documentation and training",
            "Long-term partnership and evolution"
        ]
    },
    {
        id: "dedicated-teams",
        title: "Dedicated Teams",
        icon: FiUsers,
        description: "Specialized agile teams integrated seamlessly into your workflow. Scale your development capacity with experienced engineers, designers, and product managers.",
        benefits: [
            {
                title: "Rapid Scaling",
                description: "Add 5-10 skilled team members in 2 weeks"
            },
            {
                title: "Cost Effective",
                description: "40-60% savings compared to local hiring"
            },
            {
                title: "Full Integration",
                description: "Teams work in your timezone and use your tools"
            },
            {
                title: "Flexible Contracts",
                description: "Scale up or down based on project needs"
            }
        ],
        useCases: [
            {
                scenario: "Product Development",
                description: "Full-stack teams building your product roadmap"
            },
            {
                scenario: "Staff Augmentation",
                description: "Fill skill gaps with specialized developers"
            },
            {
                scenario: "Long-Term Partnership",
                description: "Dedicated teams that grow with your company"
            }
        ],
        technologies: ["Your Tech Stack", "Agile Methodologies", "Jira", "Slack", "Git", "CI/CD"],
        whyChoose: [
            "Average 3+ years tenure with clients",
            "Pre-vetted senior engineers (5+ years experience)",
            "Transparent time tracking and reporting",
            "No long-term contracts required"
        ]
    },
    {
        id: "it-consulting",
        title: "IT Consulting",
        icon: FiBriefcase,
        description: "Strategic technology guidance to align IT with your business goals. From architecture reviews to digital transformation roadmaps.",
        benefits: [
            {
                title: "Strategic Planning",
                description: "Technology roadmaps aligned with business objectives"
            },
            {
                title: "Risk Mitigation",
                description: "Identify and address technical debt and vulnerabilities"
            },
            {
                title: "Vendor Selection",
                description: "Unbiased recommendations for tools and platforms"
            },
            {
                title: "Team Training",
                description: "Upskill your team on modern technologies and practices"
            }
        ],
        useCases: [
            {
                scenario: "Architecture Review",
                description: "Audit existing systems and recommend improvements"
            },
            {
                scenario: "Digital Transformation",
                description: "Modernize legacy systems and processes"
            },
            {
                scenario: "Technology Selection",
                description: "Choose the right tech stack for your next project"
            }
        ],
        technologies: ["Architecture Patterns", "Best Practices", "Industry Standards", "Technology Evaluation"],
        whyChoose: [
            "15+ years combined consulting experience",
            "Worked with Fortune 500 and startups",
            "Actionable recommendations, not just reports",
            "Hands-on implementation support available"
        ]
    }
];

export function getServiceBreakdownById(id: string): ServiceBreakdown | undefined {
    return serviceBreakdowns.find(service => service.id === id);
}
