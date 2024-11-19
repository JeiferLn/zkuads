import {create} from 'zustand';

interface LeaderboardStore {
  leaderboard: LeaderboardProps[];
  setLeaderboard: (leaderboard: any[]) => void;
}

interface LeaderboardProps {
  id: number
  name: string
  score_fun: number
  score_real: number
}

export const useLeaderboardStore = create<LeaderboardStore>((set) => ({
  leaderboard: [],
  setLeaderboard: (leaderboard : LeaderboardProps[]) => set({leaderboard}),
}));
