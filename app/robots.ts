import type { MetadataRoute } from "next";

import { siteMetadata } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("/sitemap.xml", siteMetadata.siteUrl).toString(),
  };
}
