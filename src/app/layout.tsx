// src/app/layout.tsx
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
    title: "misto",
    description: "This is a Next.js app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <header className="bg-rose-100 text-gray-900 p-4">
          <nav className="flex items-center justify-between relative">
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <Link href="/">
                <span className="text-2xl font-bold">misto</span>
              </Link>
            </div>
  
            <div className="ml-auto">
              <Link
                href="/login"
                className="block px-4 py-2 bg-slate-50 hover:bg-rose-500 text-gray-900 transition-colors duration-300 rounded"
              >
                ログイン
              </Link>
            </div>
          </nav>
        </header>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
  
}
