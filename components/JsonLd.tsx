import { getSiteUrl } from "@/lib/siteConfig";

export default function JsonLd() {
  const siteUrl = getSiteUrl();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${siteUrl}/#organization`,
    name: "Nisschay",
    alternateName: "Nisschay Software Engineering",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/Nisschay_Blue_Arch_Logo.png`,
      width: "512",
      height: "512",
    },
    image: `${siteUrl}/Nisschay_Blue_Arch_Logo.png`,
    description:
      "Nisschay is a high-performance software engineering and digital solutions company delivering custom software, SaaS products, AI workflows, and modern web applications.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Amravati",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 20.9374,
      longitude: 77.7796,
    },
    areaServed: [
      {
        "@type": "Country",
        name: "India",
      },
      {
        "@type": "AdministrativeArea",
        name: "Worldwide",
      },
    ],
    priceRange: "$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Engineering & Digital Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Software Development",
            description: "Bespoke, scalable system architecture engineered for enterprise scale and startup velocity.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SaaS Product Engineering",
            description: "Full-stack multi-tenant web applications built with modern frameworks and robust security.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI & Workflow Automation",
            description: "Agentic AI integrations, custom LLM pipelines, and automated business workflows.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Modern Web Presence & SEO",
            description: "High-performance websites with sub-second page loads and search engine optimization.",
          },
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://nisschay.com/#website",
    url: "https://nisschay.com",
    name: "Nisschay",
    description: "High-Performance Software Engineering and AI Solutions",
    publisher: {
      "@id": "https://nisschay.com/#organization",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
