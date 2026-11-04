import type { Metadata } from "next";
import { Playfair_Display, Outfit, Inter } from "next/font/google";
import "./globals.css";

// Premium Typography System - Option 1
// Display Headings (H1) - Elegant Serif
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Section Headings (H2-H5) - Modern Sans
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Body Text & UI - Readable Sans
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nisschay.com"),
  title: {
    default: "Nisschay - High-Performance Software Engineering",
    template: "%s | Nisschay",
  },
  description: "Nisschay is the best IT company in Amravati, engineering custom software, SaaS products, mobile applications, and AI integrations designed for enterprise scale and startup velocity.",
  keywords: ["SaaS Development", "Custom Software Development", "AI Solutions", "WhatsApp Business Automation", "Mobile App Development", "IT Solutions", "best IT company in Amravati", "IT company in Amravati", "software development in Amravati"],
  authors: [{ name: "Nisschay Team" }],
  openGraph: {
    title: "Nisschay - High-Performance Software Engineering",
    description: "Bespoke system architecture and premium visual designs. From secure SaaS platforms to agentic AI workflows—we build the code that runs your business.",
    url: "https://nisschay.com",
    siteName: "Nisschay",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nisschay - High-Performance Software Engineering",
    description: "Bespoke system architecture and premium visual designs. From secure SaaS platforms to agentic AI workflows.",
    creator: "@nisschay",
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${outfit.variable} ${inter.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
