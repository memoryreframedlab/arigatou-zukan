import { searchArticles, getRandomArticles } from "@/lib/articles";
import SearchBox from "@/components/SearchBox";
import ArticleCard from "@/components/ArticleCard";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const results = searchArticles(q);
  const fallback = results.length === 0 ? getRandomArticles([], 3) : [];

  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <h1 className="text-lg font-bold">
        {q ? `「${q}」の検索結果（${results.length}件）` : "記事を検索"}
      </h1>
      <div className="mt-4">
        <SearchBox initialQuery={q} />
      </div>

      {q && results.length === 0 ? (
        <section className="mt-8">
          <p className="text-stone-600">
            「{q}」に一致する記事は見つかりませんでした。
          </p>
          <p className="mt-2 text-sm text-stone-500">
            かわりにこちらはいかがですか？
          </p>
          <div className="mt-4 flex flex-col gap-3">
            {fallback.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      ) : null}

      {results.length > 0 ? (
        <section className="mt-6 flex flex-col gap-3">
          {results.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </section>
      ) : null}
    </main>
  );
}
