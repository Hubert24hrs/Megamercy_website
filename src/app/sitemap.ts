import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.magmercyapartments.com";

  const routes = [
    "",
    "/apartment",
    "/amenities",
    "/security",
    "/booking",
    "/location",
    "/gallery",
    "/reviews",
    "/about",
    "/contact",
    "/guide",
    "/links",
    "/legal",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/booking" ? ("daily" as const) : ("weekly" as const),
    priority: route === "" ? 1.0 : route === "/booking" || route === "/apartment" ? 0.9 : 0.7,
  }));
}
