import { emojis } from '@/lib/chaos-emojis';
import { ChaosFeatureKey, getChaosFeatureByKey } from '@/lib/chaosFeatures';

const feature = getChaosFeatureByKey(ChaosFeatureKey.EMOJI);

export const metadata = {
  title: feature?.name,
  description: feature?.description,
};

export default function ChaosEmojisPage() {
  return (
    <main className="min-h-screen bg-black text-purple-300 p-8">
      <h1 className="text-4xl font-bold text-center mb-12 drop-shadow-[0_0_10px_rgba(153,0,255,0.7)]">
        {feature?.icon} {feature?.name}
      </h1>
      
      <p className="text-lg text-center mb-8">
        {feature?.description}
        <br />
        <span className="text-pink-400">封印されたカオス絵文字たちを解き放て──</span>
        <br />
      </p>

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
