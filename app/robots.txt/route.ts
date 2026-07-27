const BASE = process.env.NEXT_PUBLIC_BASE_URL ?? "https://arigatou.memoryreframedlab.com";

export function GET() {
  return new Response(
    `User-agent: *
Allow: /

Sitemap: ${BASE}/sitemap.xml
`,
    { headers: { "Content-Type": "text/plain" } }
  );
}
