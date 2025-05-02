export type Fortune = {
  icon?: string;
  name: string;
  description: string;
};

export const fortunes: Fortune[] = [
  {
    icon: '🌠',
    name: '流星の導き',
    description: '希望の光が闇を貫く。運命が動き出す兆し。',
  },
  {
    icon: '🔮',
    name: '水晶の啓示',
    description: '封じられた未来が、静かに語りかけてくる。',
  },
  {
    icon: '🌓',
    name: '月影の均衡',
    description: '光と闇の境界で、お前の力が試される。',
  },
  {
    icon: '🪐',
    name: '惑星の輪唱',
    description: '星の声が、選ばれし魂に共鳴する。',
  },
  {
    icon: '💫',
    name: '次元の揺らぎ',
    description: 'この世と異界の狭間で、真実がささやく。',
  },
  {
    icon: '☄️',
    name: '星滅の兆し',
    description: '運命の輪が逆転し、闇の運気が流れ込む。今日は孤高を保て。',
  },
  {
    icon: '🛡️',
    name: '漆黒の加護',
    description: '影の領域から守護が届く。危機の中にこそ力が宿るだろう。',
  },
  {
    icon: '🔥',
    name: '煌炎の宿命',
    description: '燃え上がる星の意志が宿る。情熱のまま突き進め。',
  },
  {
    icon: '👁️',
    name: '虚無の囁き',
    description: '空虚の淵から声がする。静かに内なる声に耳を傾けよ。',
  },
  {
    icon: '🌑',
    name: '宵闇の召喚',
    description: '闇の精霊が目覚め、君を導く。選ばれし言葉を唱えよ。',
  },
  {
    icon: '📜',
    name: '深淵の啓示',
    description: '心の底から浮かぶ直感。それは神託に近い。信じて進め。',
  },
  {
    icon: '⏳',
    name: '時空の歪み',
    description: '過去と未来が交差する日。選択を誤れば、歪みは拡がる。',
  },
  {
    icon: '🌘',
    name: '月影の契約',
    description: '今夜、ひとつの契りが結ばれる。闇の名のもとに。',
  },
  {
    icon: '🌌',
    name: '星環の導き',
    description: '星々の連なりが語りかける。進むべき道は、空に描かれている。',
  },
  {
    icon: '💀',
    name: '終焉の息吹',
    description: 'すべての終わりは始まりの兆し。恐れず歩みを止めるな。',
  },
];

export const getRandomFortune = (): Fortune => {
  const index = Math.floor(Math.random() * fortunes.length);
  return fortunes[index];
};
