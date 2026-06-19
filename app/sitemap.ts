// app/sitemap.ts

import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.shaheenflowers.ae";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: "2026-05-15",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: "2026-05-15",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: "2026-05-15",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: "2026-05-15",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: "2026-05-15",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: "2026-05-15",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products?category=plants`,
      lastModified: "2026-05-15",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products?category=planters`,
      lastModified: "2026-05-15",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: "2026-05-15",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: "2026-05-15",
      priority: 0.9,
    },
  ];
}
