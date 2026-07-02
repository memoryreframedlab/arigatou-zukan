import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");

export type ArticleMeta = {
  title: string;
  slug: string;
  publishedAt: string;
  updatedAt: string;
  description: string;
  thumbnail: string;
  relatedSlugs: string[];
};

export type Article = ArticleMeta & {
  contentHtml: string;
};

function readArticleFile(slug: string): { meta: ArticleMeta; content: string } | null {
  const filePath = path.join(ARTICLES_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  const meta: ArticleMeta = {
    title: data.title ?? "",
    slug: data.slug ?? slug,
    publishedAt: data.publishedAt ?? "",
    updatedAt: data.updatedAt ?? data.publishedAt ?? "",
    description: data.description ?? "",
    thumbnail: data.thumbnail ?? "",
    relatedSlugs: Array.isArray(data.relatedSlugs) ? data.relatedSlugs : [],
  };

  return { meta, content };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAllArticleMeta(): ArticleMeta[] {
  return getAllSlugs()
    .map((slug) => readArticleFile(slug)?.meta)
    .filter((meta): meta is ArticleMeta => Boolean(meta))
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getArticleBySlug(slug: string): Article | null {
  const result = readArticleFile(slug);
  if (!result) return null;

  const contentHtml = marked.parse(result.content, { async: false }) as string;

  return { ...result.meta, contentHtml };
}

export function getLeadParagraph(meta: ArticleMeta): string {
  return meta.description;
}

export function getRelatedArticles(meta: ArticleMeta, limit = 2): ArticleMeta[] {
  const all = getAllArticleMeta();
  const related = meta.relatedSlugs
    .map((slug) => all.find((a) => a.slug === slug))
    .filter((a): a is ArticleMeta => Boolean(a));
  return related.slice(0, limit);
}

export function getRandomArticles(
  excludeSlugs: string[],
  limit: number
): ArticleMeta[] {
  const pool = getAllArticleMeta().filter((a) => !excludeSlugs.includes(a.slug));
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, limit);
}

export function getFirstSentence(slug: string): string {
  const result = readArticleFile(slug);
  if (!result) return "";
  const firstLine = result.content
    .split("\n")
    .map((l) => l.trim())
    .find((l) => l.length > 0 && !l.startsWith("#"));
  if (!firstLine) return "";
  const sentence = firstLine.split(/[。！？]/)[0];
  return sentence ? sentence + "。" : firstLine;
}

export function searchArticles(query: string): ArticleMeta[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return getAllArticleMeta().filter(
    (a) =>
      a.title.toLowerCase().includes(q) || a.description.toLowerCase().includes(q)
  );
}
