import { Logger } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { env } from 'src/config';
import { TechToSpeechResponse, TextToSpeechBody } from './params';

export class TextToSpeech {
  private readonly textToSpeechClient: AxiosInstance;
  private readonly logger = new Logger(TextToSpeech.name);
  private readonly voicer: string = '192960c2-5bad-11ef-85c0-00163e06912e'; //Yuzuki Yukari (結月 ゆかり)

  constructor() {
    this.textToSpeechClient = axios.create({
      baseURL: `${env.gen.voiceUrl}`,
      headers: {
        'content-type': 'application/json',
        'x-api-key': env.gen.voiceAPIKey,
      },
    });
  }

  public async genTextToSpeech(text: string) {
    try {
      const textToSpeechBody = new TextToSpeechBody();
      textToSpeechBody.text = text;
      textToSpeechBody.speaker = this.voicer;
      textToSpeechBody.emotion = 'happy';
      const { data } = await this.textToSpeechClient.post<TechToSpeechResponse>(
        `/text2speech`,
        textToSpeechBody,
      );
      return data.data.oss_url;
    } catch (err) {
      return '';
    }
  }
}

export const textToSpeech = new TextToSpeech();
