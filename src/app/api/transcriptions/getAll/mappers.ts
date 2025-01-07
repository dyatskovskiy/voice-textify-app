import { formatTime } from "@/lib/formatTime";
import {
  ITranscription,
  ITranscriptionApi,
} from "@/interfaces/transcription.interface";

export const mapResponse = (
  transcriptions: ITranscriptionApi[],
): ITranscription[] => {
  return transcriptions.map((t) => ({
    ...t,
    duration: formatTime(parseInt(t.duration.toFixed(0))),
    createdAt: new Date(t.createdAt).toISOString().split("T")[0],
  }));
};
