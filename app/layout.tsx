import type { Metadata } from 'next';
import { Kiwi_Maru, MedievalSharp } from 'next/font/google';
import NavBar from '@/components/Navibar'
import './globals.css';

const medievalSharp = MedievalSharp({
  variable: '--font-medieval-sharp',
  subsets: ['latin'],
  weight: '400',
});

const kiwiMaru = Kiwi_Maru({
  variable: '--font-kiwi-maru',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: '🔥ChaosDrive ─ 闇を駆ける詠唱機🔥',
  description:
    '闇より生まれし詩を召喚せよ──。ChaosDriveは、中二病魂を震わせるダーク俳句生成器。君の内なるカオスを解き放て。',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${medievalSharp.variable} ${kiwiMaru.variable} antialiased bg-black text-purple-200`}
      >
        <NavBar />
        <main className="container mx-auto px-4 py-8 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
