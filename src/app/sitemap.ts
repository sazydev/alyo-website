import type { MetadataRoute } from "next";

import { PRIMARY_IMAGE_PATH, SITE_URL } from "@/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL + "/",
      lastModified: new Date("2026-08-26"),
      changeFrequency: "monthly",
      priority: 1,
      images: [SITE_URL + PRIMARY_IMAGE_PATH],
    },
    {
      url: SITE_URL + "/mentions-legales",
      lastModified: new Date("2026-07-01"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: SITE_URL + "/politique-de-confidentialite",
      lastModified: new Date("2026-07-01"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: SITE_URL + "/cgv",
      lastModified: new Date("2026-07-01"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
