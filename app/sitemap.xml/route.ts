import { getAllArticleMeta } from "@/lib/articles";

const BASE = process.env.NEXT_PUBLIC_BASE_URL ?? "https://arigatouzukan.jp";

export const dynamic = "force-dynamic";

export function GET() {
  const articles = getAllArticleMeta();
  const today = new Date(Date.now() + 9 * 60 * 60 * 1000).toISOString().slice(0, 10);

  const staticPages = [
    { url: "/", priority: "1.0", changefreq: "daily", lastmod: today },
    { url: "/about", priority: "0.5", changefreq: "monthly", lastmod: today },
    { url: "/contact", priority: "0.3", changefreq: "yearly", lastmod: today },
    { url: "/privacy-policy", priority: "0.3", changefreq: "yearly", lastmod: today },
  ];

  const articleEntries = articles.map((a) => ({
    url: `/articles/${a.slug}`,
    priority: "0.8",
    changefreq: "monthly",
    lastmod: a.updatedAt || a.publishedAt,
  }));

  const allPages = [...staticPages, ...articleEntries];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (p) => `  <url>
    <loc>${BASE}${p.url}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
