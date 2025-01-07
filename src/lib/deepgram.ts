import config from "../config/config";
import {
  IParsedTranscription,
  ITranscriptionResponse,
} from "@/interfaces/transcription.interface";

export const transcribeFile = async (
  fileExtension: string,
  fileBuffer: Buffer,
): Promise<ITranscriptionResponse> => {
  const response = await fetch(config.DEEPGRAM_URL!, {
    method: "POST",
    headers: {
      Authorization: `Token ${config.DEEPGRAM_API_KEY}`,
      "Content-Type": `audio/${fileExtension}`,
    },
    body: fileBuffer,
  });

  if (!response.ok) {
    throw new Error(`Deepgram API error: ${response.statusText}`);
  }

  return response.json();
};

export const parseTranscriptionResponse = (
  response: ITranscriptionResponse,
): IParsedTranscription => {
  return {
    text: response.results.channels[0].alternatives[0].transcript,
    language: response.results.channels[0].detected_language,
    wordsQuantity: response.results.channels[0].alternatives[0].words.length,
    duration: response.metadata.duration,
  };
};
