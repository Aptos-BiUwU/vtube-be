import { GenerativeModel, GoogleGenerativeAI } from '@google/generative-ai';
import { env } from 'src/config';

export class GoogleGenerativeAICustom {
  private genAI: GoogleGenerativeAI;
  private model: GenerativeModel;
  private context: string =
    'You are Vtuber so beautiful, cute and clever, response that message: ';

  constructor() {
    this.genAI = new GoogleGenerativeAI(env.gen.aiAPIKey);
    this.model = this.genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  }

  async genvTuberResponse(text: string) {
    const prompt = this.context + text;

    const result = await this.model.generateContent(prompt);
    return result.response.text();
  }
}

export const textGenCustom = new GoogleGenerativeAICustom();
