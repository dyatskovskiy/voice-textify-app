import { create } from "zustand";

interface State {
  isLoading: boolean;
  isError: boolean;
}

interface Action {
  setIsLoading: (isLoading: boolean) => void;
  setIsError: (error: boolean) => void;
}

const useGlobalAppStateStore = create<State & Action>((set) => ({
  isLoading: false,
  isError: false,
  setIsLoading: (isLoading) => set(() => ({ isLoading: isLoading })),
  setIsError: (error) => set(() => ({ isError: error })),
}));

export default useGlobalAppStateStore;
