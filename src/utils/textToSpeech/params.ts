export class TextToSpeechBody {
  text: string;
  speaker: string;
  emotion: string;
}

export class DataResponse {
  type: number;
  name: string;
  speaker: string;
  oss_url: string;
}

export class TechToSpeechResponse {
  status: number;
  message: string;
  data: DataResponse;
}
