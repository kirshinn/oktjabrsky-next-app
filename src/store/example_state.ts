import { create } from "zustand";

interface State {
    id: Number;
    setId: (id: Number) => void
}

export const useExampleStateStore = create<State>()((set) => ({
    id: 1,
    setId: (id: Number) => set({ id })
}));
