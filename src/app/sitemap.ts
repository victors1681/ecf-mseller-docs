import { source } from "@/lib/source";
import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ecf.mseller.app";

  // Get all documentation pages
  const pages = source.getPages();

  const docUrls: MetadataRoute.Sitemap = pages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: page.url === "/docs" ? 1.0 : 0.8,
  }));

  // Add main pages
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  return [...mainPages, ...docUrls];
}
