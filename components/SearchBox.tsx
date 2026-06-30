"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox({ initialQuery = "" }: { initialQuery?: string }) {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    router.push(`/search?q=${encodeURIComponent(q)}`);
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="キーワードで探す"
        className="flex-1 rounded-md border border-stone-300 bg-white px-3 py-2 text-sm focus:border-stone-500 focus:outline-none"
      />
      <button
        type="submit"
        className="rounded-md bg-stone-900 px-4 py-2 text-sm font-medium text-white"
      >
        検索
      </button>
    </form>
  );
}
