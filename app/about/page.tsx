export const metadata = { title: "運営者情報｜有難う図鑑" };

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <h1 className="text-lg font-bold">運営者情報</h1>

      <div className="mt-6 flex flex-col gap-6 text-stone-700 leading-relaxed">
        <section>
          <h2 className="font-bold">このサイトについて</h2>
          <p className="mt-2">
            「有難う図鑑」は、今では当たり前に存在するもの（水道・電気・冷蔵庫など）を、
            過去の暮らしや歴史と比較しながら紹介する読み物サイトです。
          </p>
          <p className="mt-2">
            「感謝しましょう」「昔の人は偉い」といった結論を押し付けることはしません。
            事実や背景を分かりやすく伝え、そこから何を感じるかは読者の自由に委ねています。
          </p>
        </section>

        <section>
          <h2 className="font-bold">運営者</h2>
          <p className="mt-2">運営者名：（準備中）</p>
          <p className="mt-1">所在地：（準備中）</p>
        </section>

        <section>
          <h2 className="font-bold">お問い合わせ</h2>
          <p className="mt-2">
            ご連絡は<a href="/contact" className="underline">お問い合わせページ</a>
            からお願いいたします。
          </p>
        </section>
      </div>
    </main>
  );
}
