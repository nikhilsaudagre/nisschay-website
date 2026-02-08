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
  title: "Nisschay - Tech Solutions & Innovation",
  description: "Nisschay is a tech startup offering cutting-edge web design, app development, and IT services to transform your digital presence.",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      </body>
    </html>
  );
}
