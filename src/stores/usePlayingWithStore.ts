import {create} from 'zustand';

interface PlayingWithStore {
    playingWith: "diamond" | "zcoins";
    setPlayingWith: (value: "diamond" | "zcoins") => void;
}

const usePlayingWithStore = create<PlayingWithStore>((set) => ({
    playingWith: 'diamond',
    setPlayingWith: (value: "diamond" | "zcoins") => set({ playingWith: value }),
}));

export default usePlayingWithStore;