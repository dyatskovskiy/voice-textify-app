export interface ITranscriptionApi {
  id: number;
  filename: string;
  text: string;
  duration: number;
  language: string;
  wordsQuantity: number;
  ownerId: number;
  createdAt: Date;
}

export interface ITranscription {
  duration: string;
  createdAt: string;
  filename: string;
  wordsQuantity: number;
  language: string;
  id: number;
  text: string;
  ownerId: number;
}

export type ICreateTranscriptionDto = Omit<
  ITranscriptionApi,
  "id" | "createdAt"
>;

export interface ITranscriptionResponse {
  metadata: {
    duration: number;
  };
  results: {
    channels: {
      0: {
        detected_language: string;
        alternatives: {
          0: {
            transcript: string;
            words: Array<string>;
          };
        };
      };
    };
  };
}

export interface IParsedTranscription {
  text: string;
  language: string;
  wordsQuantity: number;
  duration: number;
}
