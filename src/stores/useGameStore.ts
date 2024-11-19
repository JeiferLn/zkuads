import { create } from 'zustand';

interface Game {
  game_id: string;
  image: string;
  name: string;
}

interface GameState {
  gameList: Game[] | undefined;
  lastGame: Game[] | undefined;
  setGameList: (gameList: Game[]) => void;
  setLastGame: (lastGame: Game[]) => void;
  gameFind: (name: string) => Game | undefined;
  resetLastGame: () => void;
}

export const useGameStore = create<GameState>((set, get) => ({
  gameList: [],
  lastGame: [],
  setGameList: (gameList: Game[]) => set({ gameList }),
  setLastGame: (lastGame: Game[]) => set({ lastGame }),
  gameFind: (name: string) => {
    const { gameList } = get();
    
    return gameList?.find((game) => game.name === name); 
  },
  resetLastGame: () => set({ lastGame: [] }),
}));