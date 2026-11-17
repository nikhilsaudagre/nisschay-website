import { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/siteConfig";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getSiteUrl();
  
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "PerplexityBot",
          "ClaudeBot",
          "anthropic-ai",
          "Claude-Web",
          "Google-Extended",
          "Applebot-Extended",
          "Bytespider",
          "CCBot",
          "cohere-ai",
          "Diffbot",
          "FacebookBot",
          "Meta-ExternalAgent",
        ],
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
