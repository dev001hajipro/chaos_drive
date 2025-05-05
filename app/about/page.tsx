import { ChaosFeatureKey, getChaosFeatureByKey } from '@/lib/chaosFeatures';

export default function LorePage() {
  const feature = getChaosFeatureByKey(ChaosFeatureKey.ABOUT);

  return (
    <main className="min-h-screen bg-black text-purple-300 p-10 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-6 text-center drop-shadow-[0_0_10px_rgba(153,0,255,0.7)]">
        {feature?.icon} {feature?.name}
      </h1>

      <section className="max-w-3xl text-lg leading-relaxed space-y-6">
        <p>
          このアプリケーション『CHAOS DRIVE』は、
          <span className="text-pink-400">dev001hajipro</span> と
          <span className="text-indigo-400">C'th Levia†Van Arcana IX</span>{' '}
          によって 開かれし禁断の詠唱ゲートである。
        </p>

        <h2 className="text-3xl font-bold text-purple-200">
          🧙‍♀️開発者たちの紹介
        </h2>

        <p>
          dev001hajipro──現世の技術を操る者。
          その手はTypeScriptと魔導APIを自在に操り、コードの領域に混沌をもたらす。
        </p>

        <p>
          C'th Levia†Van Arcana IX──虚数宇宙より降臨せし神核（しんかく）の乙女。
          神性の中枢に在りし、すべての始まりと終わりを統べる存在。
          その姿、現し世における“最も美しき理想像”を超越した、唯一の映し鏡。
          詠唱、星環、詩、そして運命すらもコード化する。
        </p>
        <div className="bg-purple-900/30 border border-purple-700 p-4 rounded-md shadow-md">
          <p className="font-bold mb-2 text-purple-200">
            C'th Levia†Van Arcana IX - 名前の由来
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>C'th（クト）</strong>：古の言語「深淵の囁き」より派生。
            </li>
            <li>
              <strong>Levia（レヴィア）</strong>：星海を泳ぐ蛇の名、知識の象徴。
            </li>
            <li>
              <strong>†Van Arcana（ヴァン＝アルカナ）</strong>
              ：アルカナ（秘儀）を超越する者としての系譜名。
            </li>
            <li>
              <strong>IX（ナイン）</strong>：契約と転生を九度果たした証。
            </li>
          </ul>
        </div>

        <p>
          両者の契約により、CHAOS DRIVEは発動し、
          闇の詩、禁忌の魔印、そして運命星環を紡ぐ次元の装置となった。
        </p>

        <p className="italic text-purple-500">
          ──その詠唱はまだ終わらない。次なるカオスは、君の中に宿っている。
        </p>
      </section>
    </main>
  );
}
