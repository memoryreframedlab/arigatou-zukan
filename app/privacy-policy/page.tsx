export const metadata = { title: "プライバシーポリシー｜有難う図鑑" };

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <h1 className="text-lg font-bold">プライバシーポリシー</h1>

      <div className="mt-6 flex flex-col gap-6 text-stone-700 leading-relaxed">
        <section>
          <h2 className="font-bold">広告について</h2>
          <p className="mt-2">
            当サイトは、第三者配信の広告サービス（Google
            AdSenseなど）を利用する場合があります。このような広告配信事業者は、
            ユーザーの興味に応じた広告を表示するためにCookieを使用することがあります。
          </p>
          <p className="mt-2">
            Cookieを無効にする方法やGoogle
            AdSenseに関する詳細は、
            <a
              href="https://policies.google.com/technologies/ads?hl=ja"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Googleのポリシーと規約
            </a>
            をご確認ください。
          </p>
        </section>

        <section>
          <h2 className="font-bold">アクセス解析ツールについて</h2>
          <p className="mt-2">
            当サイトでは、サイトの利用状況を把握するためにアクセス解析ツールを利用する場合があります。
            これらのツールはCookieを利用してデータを収集しますが、個人を特定する情報は含まれません。
          </p>
        </section>

        <section>
          <h2 className="font-bold">お問い合わせフォームについて</h2>
          <p className="mt-2">
            お問い合わせの際にご入力いただいたメールアドレス等の個人情報は、
            お問い合わせへの回答以外の目的では使用いたしません。
          </p>
        </section>

        <section>
          <h2 className="font-bold">免責事項</h2>
          <p className="mt-2">
            当サイトの記事内容には正確な情報を掲載するよう努めておりますが、
            正確性や安全性を保証するものではありません。当サイトの情報を用いて行う行動について、
            一切の責任を負いかねます。
          </p>
        </section>

        <section>
          <h2 className="font-bold">プライバシーポリシーの変更について</h2>
          <p className="mt-2">
            当サイトは、本ポリシーの内容を予告なく変更する場合があります。
          </p>
        </section>
      </div>
    </main>
  );
}
