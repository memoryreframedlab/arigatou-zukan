import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "有難う図鑑",
  description: "今では当たり前にあるものの、知らなかった話。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-stone-50 text-stone-900">
        <header className="border-b border-stone-200 bg-white">
          <div className="mx-auto max-w-2xl px-4 py-3">
            <a href="/" className="text-lg font-bold tracking-tight">
              有難う図鑑
            </a>
          </div>
        </header>
        <div className="flex-1">{children}</div>
        <footer className="border-t border-stone-200 bg-white">
          <div className="mx-auto max-w-2xl px-4 py-6 text-sm text-stone-500 flex flex-wrap gap-x-4 gap-y-2">
            <a href="/about" className="hover:underline">
              運営者情報
            </a>
            <a href="/contact" className="hover:underline">
              お問い合わせ
            </a>
            <a href="/privacy-policy" className="hover:underline">
              プライバシーポリシー
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
