import { create } from "zustand";
import { ITranscription } from "@/interfaces/transcription.interface";

interface State {
  transcriptions: ITranscription[];
  activeTranscription: ITranscription | null;
}

interface Action {
  setTranscriptions: (transcriptions: ITranscription[]) => void;
  setActiveTranscription: (activeTranscription: ITranscription) => void;
  addNew: (transcription: ITranscription) => void;
}

const useTranscriptionsStore = create<State & Action>((set) => ({
  transcriptions: [],
  activeTranscription: null,
  addNew: (transcription: ITranscription) =>
    set((state) => ({
      transcriptions: [transcription, ...state.transcriptions],
    })),
  setTranscriptions: (transcriptions: ITranscription[]) =>
    set(() => ({ transcriptions: transcriptions })),
  setActiveTranscription: (activeTranscription: ITranscription) =>
    set(() => ({ activeTranscription: activeTranscription })),
}));

export default useTranscriptionsStore;
