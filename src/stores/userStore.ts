import { create } from "zustand";

export interface IUser {
  id: number;
  code: string;
  email: string;
  role: string;
  active: boolean;
  name: string;
}

interface UserState {
  user: IUser;
  setUser: (user: IUser) => void;
}

const useUserStore = create<UserState>((set) => ({
  user: {} as IUser,
  setUser: (user) => set({ user }),
}));

export default useUserStore;
