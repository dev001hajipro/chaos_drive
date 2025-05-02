import { emojis } from '@/lib/chaos-emojis';

export const metadata = {
  title: '🌀禁忌の魔印カタログ',
  description: '封印されたカオス絵文字たちを解き放て──魔力を高め、召喚せよ！',
};

export default function ChaosEmojisPage() {
  return (
    <main className="min-h-screen bg-black text-purple-300 p-8">
      <h1 className="text-4xl font-bold text-center mb-12 drop-shadow-[0_0_10px_rgba(153,0,255,0.7)]">
        禁忌の魔印（中二病に使えそうな絵文字）
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {emojis.map((emoji) => (
          <div
            key={emoji.icon}
            className="bg-gradient-to-br from-purple-700 to-purple-900 p-6 rounded-xl shadow-lg hover:scale-105 transition transform duration-300 flex flex-col items-center"
          >
            <div className="text-6xl mb-4">{emoji.icon}</div>
            <div className="text-2xl font-semibold mb-2">{emoji.name}</div>
            <div className="text-center text-sm">{emoji.description}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
