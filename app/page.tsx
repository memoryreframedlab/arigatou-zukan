import { getAllArticleMeta, getRandomArticles } from "@/lib/articles";
import SearchBox from "@/components/SearchBox";
import ArticleCard from "@/components/ArticleCard";

export default function Home() {
  const allArticles = getAllArticleMeta();
  const recommended = getRandomArticles([], 4);

  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <section className="mb-8">
        <p className="text-stone-600">
          今では当たり前にあるものを、昔の暮らしと比べてみる。
          <br />
          そこにある「へぇ」を、ただ楽しむための図鑑です。
        </p>
        <div className="mt-4">
          <SearchBox />
        </div>
      </section>

      {recommended.length > 0 ? (
        <section className="mb-10">
          <h2 className="mb-3 text-sm font-bold text-stone-500">おすすめ記事</h2>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {recommended.map((article) => (
              <div key={article.slug} className="w-56 shrink-0">
                <ArticleCard article={article} showDescription={false} />
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section>
        <h2 className="mb-3 text-sm font-bold text-stone-500">新着記事</h2>
        {allArticles.length === 0 ? (
          <p className="text-sm text-stone-500">まだ記事がありません。</p>
        ) : (
          <div className="flex flex-col gap-3">
            {allArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
