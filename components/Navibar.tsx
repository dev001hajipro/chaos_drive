'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navibar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-purple-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-widest drop-shadow-md">
          <Link href="/">Chaos Drive</Link>
        </h1>
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニューを開く"
        >
          ☰
        </button>
        <nav className="hidden md:flex space-x-6 text-lg font-semibold">
          <Link
            href="/"
            className="hover:underline hover:text-yellow-300 transition"
          >
            ホーム
          </Link>
          <Link
            href="/chaos-emojis"
            className="hover:underline hover:text-yellow-300 transition"
          >
            絵文字一覧
          </Link>
          <Link
            href="/fortune"
            className="hover:underline hover:text-yellow-300 transition"
          >
            占い
          </Link>
          <Link
            href="/lore"
            className="hover:underline hover:text-yellow-300 transition"
          >
            紹介ページ
          </Link>
        </nav>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-purple-800 border-t border-purple-700">
          <nav className="flex flex-col space-y-2 p-4 text-lg font-semibold">
            <Link
              href="/"
              className="hover:underline hover:text-yellow-300 transition"
              onClick={() => setMenuOpen(false)}
            >
              ホーム
            </Link>
            <Link
              href="/chaos-emojis"
              className="hover:underline hover:text-yellow-300 transition"
              onClick={() => setMenuOpen(false)}
            >
              絵文字一覧
            </Link>
            <Link
              href="/fortune"
              className="hover:underline hover:text-yellow-300 transition"
              onClick={() => setMenuOpen(false)}
            >
              占い
            </Link>
            <Link
              href="/lore"
              className="hover:underline hover:text-yellow-300 transition"
              onClick={() => setMenuOpen(false)}
            >
              紹介ページ
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
