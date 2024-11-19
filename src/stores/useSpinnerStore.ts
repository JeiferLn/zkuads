import { create } from 'zustand';

interface SpinnerSVGStore {
  loadingSpinnerSVG: boolean;
  setFetchSpinnerSVG: (value: boolean) => void;
  setSwithSpinnerSVG: () => void;
}

export const useSpinnerStore = create<SpinnerSVGStore>((set) => ({
  loadingSpinnerSVG: false,
  setFetchSpinnerSVG: (value) => set({ loadingSpinnerSVG: value }),
  setSwithSpinnerSVG: () => {
    set({ loadingSpinnerSVG: true});
    setTimeout(() => {
      set({ loadingSpinnerSVG: false });
    }, 500);
  },
}));