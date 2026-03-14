import type { MetadataRoute } from "next";

import { navigationLinks, siteMetadata } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return navigationLinks.map((item) => ({
    url: new URL(item.href, siteMetadata.siteUrl).toString(),
    lastModified: new Date(),
    changeFrequency: item.href === "/" ? "weekly" : "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }));
}
