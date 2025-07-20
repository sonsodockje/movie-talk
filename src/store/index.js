import { create } from "zustand";

export const useUserStore = create((set) => ({
  isLogin: false,
  email: "",
  password: "",
  name: "",
  loginToggleAction: () => set((state) => ({ isLogin: !state.isLogin })),
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setName: (name) => set({ name }),
  clearForm: () => set({ email: "", password: "", name: "" }),
}));