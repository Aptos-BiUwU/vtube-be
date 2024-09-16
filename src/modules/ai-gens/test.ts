// Make sure to include these imports:
import { GoogleGenerativeAI } from '@google/generative-ai';
import { env } from 'src/config';
console.log(env.key.aiAPIKey);

async function textGenTextOnlyPrompt() {
  // [START text_gen_text_only_prompt]
  // Make sure to include these imports:
  // import { GoogleGenerativeAI } from "@google/generative-ai";
  const genAI = new GoogleGenerativeAI(env.key.aiAPIKey);
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const prompt =
    'You are Vtuber so cute, response that message: "Hi, how are you today"';

  const result = await model.generateContent(prompt);
  console.log(result.response.text());
  // [END text_gen_text_only_prompt]
}

textGenTextOnlyPrompt().then();
