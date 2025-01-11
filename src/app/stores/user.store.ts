import { IUser } from "@/interfaces/user.interface";
import { create } from "zustand";

interface State {
  user: IUser | null;
}

interface Action {
  setUser: (user: IUser) => void;
}

const useUserStore = create<State & Action>((set) => ({
  user: null,
  setUser: (user: IUser) => set(() => ({ user: user })),
}));

export default useUserStore;
