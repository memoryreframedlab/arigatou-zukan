export const metadata = { title: "お問い合わせ｜有難う図鑑" };

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <h1 className="text-lg font-bold">お問い合わせ</h1>
      <p className="mt-4 leading-relaxed text-stone-700">
        サイトに関するご意見・ご指摘・記事の誤りのご指摘などは、以下のメールアドレスまでご連絡ください。
      </p>
      <p className="mt-4">
        <a
          href="mailto:contact@example.com"
          className="font-medium underline"
        >
          contact@example.com
        </a>
      </p>
      <p className="mt-6 text-sm text-stone-500">
        ※内容によってはお返事できない場合がございます。あらかじめご了承ください。
      </p>
    </main>
  );
}
