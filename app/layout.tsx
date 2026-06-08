import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import WhatsAppButton from "@/components/layout/whatsapp-button";

import { defaultKeywords } from "@/lib/seo";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shaheenflowers.com"),

  title: {
    default:
      "Landscaping with AMC in UAE | Shaheen Flowers – Plants & Garden Services",
    template: "%s | Shaheen Flowers",
  },

  description:
    "Shaheen Flowers offers landscaping with AMC in UAE, outdoor garden maintenance, indoor plants supply, and green wall solutions. Call +91 85474 16951 for a quote.",

  keywords: defaultKeywords,

  authors: [{ name: "Shaheen Flowers and Ornamental Plants Trading LLC" }],
  creator: "Shaheen Flowers and Ornamental Plants Trading LLC",
  publisher: "Shaheen Flowers and Ornamental Plants Trading LLC",

  icons: {
    icon: [
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon.ico",
      },
    ],

    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],

    shortcut: "/favicon.ico",
  },

  openGraph: {
    title:
      "Landscaping with AMC in UAE | Shaheen Flowers – Plants & Garden Services",
    description:
      "Shaheen Flowers offers landscaping with AMC in UAE, outdoor garden maintenance, indoor plants supply, and green wall solutions.",

    url: "https://shaheenflowers.com",

    siteName: "Shaheen Flowers and Ornamental Plants Trading LLC",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shaheen Flowers Landscaping Services",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Landscaping with AMC in UAE | Shaheen Flowers – Plants & Garden Services",

    description:
      "Outdoor landscaping with AMC, indoor plants maintenance, and green wall solutions across the UAE.",

    images: ["/og-image.jpg"],
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

  category: "business",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geist.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased bg-white">
        <Navbar />

        <main className="pt-24">{children}</main>

        <Footer />

        <WhatsAppButton />

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
