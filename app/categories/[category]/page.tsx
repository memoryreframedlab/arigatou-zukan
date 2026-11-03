import { notFound } from "next/navigation";
import { CATEGORIES, getArticlesByCategory } from "@/lib/articles";
import type { Category } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";
import type { Metadata } from "next";

type Props = { params: Promise<{ category: string }> };

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({ category: encodeURIComponent(cat) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const name = decodeURIComponent(category);
  return {
    title: `${name} | ありがとう図鑑`,
    description: `「${name}」カテゴリの記事一覧です。`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const name = decodeURIComponent(category) as Category;

  if (!(CATEGORIES as readonly string[]).includes(name)) notFound();

  const articles = getArticlesByCategory(name);

  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <p className="mb-1 text-sm text-stone-400">
        <a href="/categories" className="hover:underline">カテゴリ一覧</a>
        {" › "}
      </p>
      <h1 className="mb-6 text-2xl font-bold">{name}</h1>
      <p className="mb-8 text-sm text-stone-500">{articles.length}本の記事</p>
      <div className="space-y-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </main>
  );
}
