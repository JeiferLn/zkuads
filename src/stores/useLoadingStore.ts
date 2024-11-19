import {create} from 'zustand';

interface LoadingStore {
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
}

export const useLoadingStore = create<LoadingStore>((set) => ({
  isLoading: true,
  setLoading: (isLoading: boolean) => set({ isLoading }),
}));