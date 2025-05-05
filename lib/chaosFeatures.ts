// chaosFeatures.ts

export enum ChaosFeatureKey {
  HAIKU = 'HAIKU',
  EMOJI = 'EMOJI',
  FORTUNE = 'FORTUNE',
  ABOUT = 'ABOUT',
}

export type ChaosFeature = {
  key: ChaosFeatureKey;
  name: string;
  name_en: string;
  path: string;
  icon: string;
  description: string;
};

export function getChaosFeatureByKey(
  key: ChaosFeatureKey
): ChaosFeature | undefined {
  return IMPLEMENTED_FEATURES.find((feature) => feature.key === key);
}

export const IMPLEMENTED_FEATURES: ChaosFeature[] = [
  {
    key: ChaosFeatureKey.HAIKU,
    name: 'カオス俳句 召喚機',
    name_en: 'CHAOS HAIKU Invocation Engine',
    path: '/',
    icon: '🪄',
    description: '詠唱ボタンを押すと、中二病の俳句を生成する。',
  },
  {
    key: ChaosFeatureKey.EMOJI,
    name: '禁忌の魔印カタログ',
    name_en: 'Catalog of Forbidden Glyphs',
    path: '/chaos-emojis',
    icon: '🌀',
    description: '中二病に使えそうな魔法・儀式・混沌系の絵文字一覧ページ',
  },
  {
    key: ChaosFeatureKey.FORTUNE,
    name: '運命星環（Cosmic Ring of Fate）',
    name_en: 'Cosmic Ring of Fate',
    path: '/fortune',
    icon: '🌌',
    description: '「今日の運命」メッセージをランダムに表示する。',
  },
  {
    key: ChaosFeatureKey.ABOUT,
    name: 'このサイトについて',
    name_en: 'About This Chaos',
    path: '/about',
    icon: '🪧',
    description: '開発者紹介、開発思想、アプリ概要',
  },
];
