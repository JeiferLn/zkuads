import { create } from 'zustand';
import Cookie from 'js-cookie';

interface Player {
  user_id: string;
  username: string;
  score: number;
  teamID : number;
}

interface BestPlayerStore {
  bestPlayers: Player[];
  zkuadScoreID: number;
  setBestPlayers: (player: Player[]) => void;
  setNameZkuad: (score: number) => void;
}

const useBestPlayerStore = create<BestPlayerStore>((set) => ({
  bestPlayers: [],
  zkuadScoreID: Number(Cookie.get("team_id")),
  setBestPlayers: (player: Player[]) => set({ bestPlayers: player }),
  setNameZkuad: (nameZkuad: number) => set({ zkuadScoreID: nameZkuad }),
}));

export default useBestPlayerStore;