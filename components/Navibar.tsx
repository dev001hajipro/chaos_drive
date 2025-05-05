'use client';

import { IMPLEMENTED_FEATURES } from '@/lib/chaosFeatures';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navibar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

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
          {IMPLEMENTED_FEATURES.map((feature) => {
            const isActive = pathname === feature.path;
            return (
              <Link
                key={feature.path}
                href={feature.path}
                className={`flex items-center space-x-1 transition ${
                  isActive
                    ? 'text-yellow-300 underline underline-offset-4'
                    : 'hover:text-yellow-300'
                }`}
              >
                <span>{feature.icon}</span>
                <span>{feature.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-purple-800 border-t border-purple-700">
          <nav className="flex flex-col space-y-2 p-4 text-lg font-semibold">
            {IMPLEMENTED_FEATURES.map((feature) => {
              const isActive = pathname === feature.path;
              return (
                <Link
                  key={feature.path}
                  href={feature.path}
                  className={`flex items-center space-x-2 transition ${
                    isActive
                      ? 'text-yellow-300 underline underline-offset-4'
                      : 'hover:text-yellow-300'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{feature.icon}</span>
                  <span>{feature.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
