import { formatTime } from "@/lib/formatTime";
import {
  ITranscription,
  ITranscriptionApi,
} from "@/interfaces/transcription.interface";

export const mapResponse = (
  transcriptions: ITranscriptionApi[] | ITranscriptionApi,
): ITranscription | ITranscription[] => {
  if (Array.isArray(transcriptions)) {
    return transcriptions.map((t) => ({
      ...t,
      duration: formatTime(parseInt(t.duration.toFixed(0))),
      createdAt: new Date(t.createdAt).toISOString().split("T")[0],
    }));
  }

  return {
    ...transcriptions,
    duration: formatTime(parseInt(transcriptions.duration.toFixed(0))),
    createdAt: new Date(transcriptions.createdAt).toISOString().split("T")[0],
  };
};
