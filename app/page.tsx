'use client';
import { generateHaiku } from '@/app/action';
import Link from 'next/link';
import { useState, useTransition } from 'react';

export default function Page() {
  const [haiku, setHaiku] = useState('🧙‍♂️──ここに闇の詩が刻まれる──');
  const [audioSrc, setAudioSrc] = useState<string | null>(null);

  const [isPending, startTransition] = useTransition();

  const handleSummon = () => {
    startTransition(async () => {
      // 俳句生成
      const text = await generateHaiku();
      console.log('生成された俳句:', text);
      setHaiku(text);

      /*
      // 無料枠で使うために10秒待機
      await new Promise((resolve) => setTimeout(resolve, 10 * 1000));

      // 音声生成
      const base64Audio = await generateAudio(text);
      setAudioSrc(`data:audio/wav;base64,${base64Audio}`);
      */
    });
  };

  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-black text-purple-300">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center drop-shadow-[0_0_10px_rgba(153,0,255,0.7)]">
        CHAOS HAIKU召喚機
      </h1>

      <h2 className="text-xl md:text-2xl text-center mb-8 drop-shadow-[0_0_5px_rgba(255,0,255,0.6)] leading-relaxed">
        ✝️無窮なる虚無を越え、 汝はここに至った。 いまこそ、禁断の力を解き放て──
        選ばれし者よ、闇の詩を紡げ。 ✝️
      </h2>

      <div className="mb-10 text-2xl whitespace-pre-line min-h-[6em] text-center drop-shadow-[0_0_5px_rgba(255,0,255,0.6)]">
        {isPending ? '詠唱中…' : haiku}
      </div>

      <button
        onClick={handleSummon}
        disabled={isPending}
        className="mt-6 bg-gradient-to-br from-indigo-700 to-purple-900 text-indigo-200 text-lg py-2 px-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 hover:shadow-indigo-500/50"
      >
        {isPending ? '詠唱中…' : '🪄 詠唱する'}
      </button>

      {audioSrc && (
        <audio
          className="mt-8"
          controls
          autoPlay
          src={audioSrc}
          onEnded={() => setAudioSrc(null)}
        >
          Your browser does not support the audio element.
        </audio>
      )}

      {/* カオス絵文字召喚ボタン */}
      <Link
        href="/chaos-emojis"
        className="mt-6 bg-gradient-to-br from-indigo-700 to-purple-900 text-indigo-200 text-lg py-2 px-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 hover:shadow-indigo-500/50"
      >
        🌀 禁忌の魔印へ転移（中二病に使えそうな絵文字）
      </Link>

      {/* フォーチュンボタン */}
      <Link
        href="/fortune"
        className="mt-6 bg-gradient-to-br from-indigo-700 to-purple-900 text-indigo-200 text-lg py-2 px-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 hover:shadow-indigo-500/50"
      >
        🔮 運命星環（うんめいせいかん）を占う
      </Link>

      {/* 闇の創世記ボタン */}
      <Link
        href="/lore"
        className="mt-6 bg-gradient-to-br from-indigo-700 to-purple-900 text-indigo-200 text-lg py-2 px-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 hover:shadow-indigo-500/50"
      >
        🧙‍♀️ 創造者たちの記録（開発者一覧）
      </Link>
    </main>
  );
}
