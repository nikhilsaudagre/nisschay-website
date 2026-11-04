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

