import Link from "next/link";
import { CATEGORIES, getAllArticleMeta } from "@/lib/articles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "カテゴリ一覧 | ありがとう図鑑",
  description: "ありがとう図鑑の記事をカテゴリ別に探せます。",
};

export default function CategoriesPage() {
  const allMeta = getAllArticleMeta();

  const counts = Object.fromEntries(
    CATEGORIES.map((cat) => [cat, allMeta.filter((a) => a.category === cat).length])
  );

  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="mb-8 text-2xl font-bold">カテゴリ一覧</h1>
      <ul className="space-y-3">
        {CATEGORIES.map((cat) => (
          <li key={cat}>
            <Link
              href={`/categories/${encodeURIComponent(cat)}`}
              className="flex items-center justify-between rounded-lg border border-stone-200 bg-white px-5 py-4 hover:border-stone-400 transition-colors"
            >
              <span className="font-medium">{cat}</span>
              <span className="text-sm text-stone-400">{counts[cat]}本</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
