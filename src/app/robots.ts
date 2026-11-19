import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

// Everything may be crawled except the visitor-map API.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: "/api/" }],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
