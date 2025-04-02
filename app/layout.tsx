import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Load Inter font with Latin subset
const inter = Inter({ subsets: ["latin"], display: "swap" });

// Comprehensive metadata for better SEO
export const metadata: Metadata = {
  title: "Shazia Praveen | Digital Marketing & Event Manager",
  description:
    "Professional portfolio of Shazia Praveen, a results-driven digital marketer and event manager specializing in social media management, content creation, and brand promotion.",
  keywords: [
    "Shazia Praveen",
    "Digital Marketing",
    "Event Manager",
    "Social Media Management",
    "Content Creation",
    "SEO",
    "Brand Promotion",
    "Marketing Specialist",
    "Portfolio",
    "Delhi",
  ],
  authors: [{ name: "Shazia Praveen" }],
  creator: "Shazia Praveen",
  publisher: "Shazia Praveen",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Shazia Praveen | Digital Marketing & Event Manager",
    description:
      "Professional portfolio showcasing expertise in digital marketing, social media management, and event planning.",
    url: "https://shazia-praveen.com",
    siteName: "Shazia Praveen Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shazia Praveen | Digital Marketing & Event Manager",
    description:
      "Professional portfolio showcasing expertise in digital marketing, social media management, and event planning.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.dev",
};

// Viewport configuration for responsive design
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Cross-browser compatibility meta tags */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="color-scheme" content="dark light" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        {/* Skip to content link for accessibility */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-black focus:text-white focus:z-50"
        >
          Skip to content
        </a>
        <main id="main">{children}</main>
      </body>
    </html>
  );
}

import "./globals.css";
