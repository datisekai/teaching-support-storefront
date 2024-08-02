import { User } from "@/types/UserModel";
import { create } from "zustand";

interface UserState {
  user: User;
  setUser: (user: User) => void;
}

const useUserStore = create<UserState>((set) => ({
  user: {} as User,
  setUser: (user) => set({ user }),
}));

export default useUserStore;
