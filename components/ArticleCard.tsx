import Link from "next/link";
import type { ArticleMeta } from "@/lib/articles";

export default function ArticleCard({
  article,
  showDescription = true,
}: {
  article: ArticleMeta;
  showDescription?: boolean;
}) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="block rounded-lg border border-stone-200 bg-white p-4 hover:border-stone-400 transition-colors"
    >
      {article.thumbnail ? (
        <div
          className="mb-3 aspect-video w-full rounded-md bg-stone-100 bg-cover bg-center"
          style={{ backgroundImage: `url(${article.thumbnail})` }}
        />
      ) : null}
      <h3 className="font-bold leading-snug">{article.title}</h3>
      {showDescription && article.description ? (
        <p className="mt-1 text-sm text-stone-500 line-clamp-2">
          {article.description}
        </p>
      ) : null}
    </Link>
  );
}
