export interface ITranscription {
  id: number;
  filename: string;
  text: string;
  duration: number;
  language: string;
  wordsQuantity: number;
  ownerId: number;
  createdAt: Date;
}

export type ICreateTranscriptionDto = Omit<ITranscription, "id" | "createdAt">;

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
