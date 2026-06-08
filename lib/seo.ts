import type { Metadata } from "next";

const siteName = "Shaheen Flowers and Ornamental Plants Trading LLC";
const siteUrl = "https://shaheenflowers.com";

export const defaultKeywords = [
  "Landscaping with AMC in UAE",
  "Outdoor Landscaping with AMC in UAE",
  "Indoor Plants and Pots Supply in UAE",
  "Indoor Plants Maintenance with AMC in UAE",
  "Artificial Plants and Green Wall Solutions in UAE",
  "Garden Maintenance UAE",
  "Landscaping Company UAE",
  "Indoor Plant Supplier UAE",
  "Commercial Landscaping UAE",
  "Green Wall Installation UAE",
  "Artificial Plant Supplier UAE",
  "Landscape Maintenance UAE",
  "Ornamental Plant Supplier UAE",
];

type PageMeta = {
  title: string;
  description: string;
  path?: string;
};

export function createPageMetadata({
  title,
  description,
  path = "",
}: PageMeta): Metadata {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    keywords: defaultKeywords,
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.jpg"],
    },
    alternates: {
      canonical: url,
    },
  };
}

export const pageMetadata = {
  home: createPageMetadata({
    title:
      "Landscaping with AMC in UAE | Shaheen Flowers – Plants & Garden Services",
    description:
      "Shaheen Flowers offers landscaping with AMC in UAE, outdoor garden maintenance, indoor plants supply, and green wall solutions. Call +91 85474 16951 for a quote.",
    path: "/",
  }),
  about: createPageMetadata({
    title: "About Us | Landscaping Company UAE – Shaheen Flowers",
    description:
      "Learn about Shaheen Flowers, a UAE landscaping company specialising in garden design, ornamental plant supply, and landscape maintenance for homes and businesses.",
    path: "/about",
  }),
  services: createPageMetadata({
    title:
      "Landscaping & Plant Services UAE | Indoor, Outdoor & AMC Maintenance",
    description:
      "Indoor plants and pots supply, indoor plant maintenance with AMC, outdoor landscaping with AMC, and artificial green wall solutions across the UAE.",
    path: "/services",
  }),
  products: createPageMetadata({
    title:
      "Indoor & Ornamental Plants UAE | Planters & Commercial Greenery",
    description:
      "Browse indoor plants, ornamental plants, decorative planters, and commercial greenery solutions from a trusted ornamental plant supplier in the UAE.",
    path: "/products",
  }),
  portfolio: createPageMetadata({
    title: "Landscaping Portfolio UAE | Garden & Greenery Projects",
    description:
      "View completed landscaping projects, garden installations, commercial landscaping, indoor greenery, and AMC maintenance work across the UAE.",
    path: "/portfolio",
  }),
  contact: createPageMetadata({
    title: "Contact Shaheen Flowers | Landscaping & Plant Services UAE",
    description:
      "Get in touch with Shaheen Flowers for landscaping with AMC, indoor plants, and garden maintenance in the UAE. Call +91 85474 16951 or send an enquiry.",
    path: "/contact",
  }),
  landscapingAmc: createPageMetadata({
    title:
      "Landscaping with AMC in UAE | Outdoor Garden Maintenance Contracts",
    description:
      "Professional landscaping with AMC in UAE. Garden maintenance, irrigation support, plant care, and commercial & residential landscaping from Shaheen Flowers.",
    path: "/landscaping-with-amc-uae",
  }),
};
