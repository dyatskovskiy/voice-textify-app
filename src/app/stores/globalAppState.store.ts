import { create } from "zustand";

interface State {
  isLoading: boolean;
  error: string | null;
}

interface Action {
  setIsLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

const useGlobalAppStateStore = create<State & Action>((set) => ({
  isLoading: true,
  error: null,
  setIsLoading: (isLoading) => set(() => ({ isLoading: isLoading })),
  setError: (error) => set(() => ({ error: error })),
}));

export default useGlobalAppStateStore;
