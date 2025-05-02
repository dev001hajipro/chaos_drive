'use server';

import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // 環境変数からAPIキーを取得
});

export async function generateHaiku(): Promise<string> {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      temperature: 1.2, // ★ 創造性アップ！
      messages: [
        {
          role: 'user',
          content:
            '中二病っぽい俳句を1つだけ、前置きや後書きなしで、俳句本文だけ返してください。',
        },
      ],
    });
    const response = await completion;
    // ★ 俳句の生成結果を取得
    const haiku = response.choices[0]?.message?.content;
    return haiku || '俳句の生成に失敗しました。';
  } catch (error) {
    console.error('Error generating haiku:', error);
    return 'エラーが発生しました。';
  }
}

export async function generateAudio(text: string) {
  const respoinse = await openai.audio.speech.create({
    //model: 'whisper-1',
    model: 'tts-1',
    input: text,
    voice: 'onyx',
    response_format: 'wav',
  });

  const buffer = Buffer.from(await respoinse.arrayBuffer());
  return buffer.toString('base64');
}
