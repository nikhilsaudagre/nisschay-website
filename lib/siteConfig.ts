export interface SiteConfig {
  name: string;
  city: string;
  country: string;
  email: string;
  phone: string;
  ctaLabel: string;
}

export const siteConfig: SiteConfig = {
  name: "Nisschay",
  // Primary operating city. Displays on contact page and footer only.
  // Set to your city name (e.g. "Amravati", "Pune", "Mumbai", "Bengaluru")
  // or leave as "" for fallback "India".
  city: "Amravati",
  country: "India",
  email: "hello@nisschay.com",
  phone: "+91 98765 43210",
  ctaLabel: "Book Free Consultation",
};

export function getStudioLocation(): string {
  if (siteConfig.city && siteConfig.city.trim().length > 0) {
    return `${siteConfig.city}, ${siteConfig.country}`;
  }
  return siteConfig.country;
}

export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "https://nisschay-website.vercel.app";
}

