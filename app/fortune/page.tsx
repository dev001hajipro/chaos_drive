// app/unmei-seikan/page.tsx
import { Metadata } from 'next';
import { getRandomFortune } from '@/lib/cosmic_ring_of_fate';

export const metadata: Metadata = {
  title: '運命星環（うんめいせいかん）',
  description: '星の輪が導く、選ばれし一日の軌跡──中二病占い',
};


export default function UnmeiSeikanPage() {
  const fortune = getRandomFortune();

  return (
    <main className="min-h-screen bg-black text-purple-300 p-8 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4 text-center drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">
        運命星環（うんめいせいかん）
      </h1>
      <h2 className="text-xl text-center mb-10 italic text-purple-400">
        ― 星の輪が導く、選ばれし一日の軌跡 ―
      </h2>

      <div className="bg-purple-900/30 border border-purple-700 p-6 rounded-xl shadow-lg text-center max-w-lg">
        <div className="text-6xl mb-4">{fortune.icon}</div>
        <div className="text-xl font-bold mb-2">{fortune.name}</div>
        <p className="text-4xl italic">{fortune.description}</p>
      </div>

      <p className="mt-10 text-sm text-purple-500">
        選ばれし者よ…この印を胸に刻み、今日を歩め。
      </p>
    </main>
  );
}
