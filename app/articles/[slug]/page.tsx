import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getArticleBySlug,
  getAllSlugs,
  getRelatedArticles,
  getRandomArticles,
} from "@/lib/articles";
import SearchBox from "@/components/SearchBox";
import ArticleCard from "@/components/ArticleCard";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title}｜有難う図鑑`,
    description: article.description,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(article, 2);
  const usedSlugs = [article.slug, ...related.map((a) => a.slug)];
  const recommended = getRandomArticles(usedSlugs, 1);

  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <a href="/" className="text-sm text-stone-500 hover:underline">
        ← 一覧へ
      </a>

      <article className="mt-4">
        <h1 className="text-2xl font-bold leading-snug">{article.title}</h1>
        <p className="mt-2 text-xs text-stone-400">
          公開日：{article.publishedAt}
        </p>

        {article.thumbnail ? (
          <div
            className="mt-4 aspect-video w-full rounded-md bg-stone-100 bg-cover bg-center"
            style={{ backgroundImage: `url(${article.thumbnail})` }}
          />
        ) : null}

        {article.description ? (
          <p className="mt-4 text-stone-700 leading-relaxed">
            {article.description}
          </p>
        ) : null}

        <div
          className="prose prose-stone mt-6 max-w-none prose-headings:font-bold prose-headings:text-xl prose-headings:mt-10 prose-headings:mb-4 prose-headings:text-stone-900 prose-p:leading-relaxed prose-p:text-stone-800"
          dangerouslySetInnerHTML={{ __html: article.contentHtml }}
        />
      </article>

      {related.length > 0 ? (
        <section className="mt-12">
          <h2 className="mb-3 text-sm font-bold text-stone-500">関連記事</h2>
          <div className="flex flex-col gap-3">
            {related.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </section>
      ) : null}

      {recommended.length > 0 ? (
        <section className="mt-8">
          <h2 className="mb-3 text-sm font-bold text-stone-500">おすすめ記事</h2>
          <div className="flex flex-col gap-3">
            {recommended.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </section>
      ) : null}

      <div className="mt-12 border-t border-stone-200 pt-6">
        <p className="mb-2 text-xs text-stone-400">気になることがあれば</p>
        <SearchBox />
      </div>
    </main>
  );
}
