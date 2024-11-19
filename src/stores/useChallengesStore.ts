import { create } from 'zustand';

interface ChallengesStoreProps {
  challenges: ChallengesProps[];
  weeklyChallenges: WeeklyChallengesProps[];
  progress: number;
  quantityComplete: number;
  timeLeft: timeLeftProps;
  setChallenges: (challenges: ChallengesProps[]) => void;
  setWeeklyChallenges: (weeklyChallenges: WeeklyChallengesProps[]) => void;
  setProgress: (progress: number) => void;
  setQuantityComplete: (quantityComplete: number) => void;
  setTimeLeft: (timeLeft: timeLeftProps) => void;
  setNewTimeLeft: (hours: number, minutes: number) => void;
}

interface timeLeftProps {
  hours: number;
  minutes: number;
}

interface ChallengesProps {
  challenge: {
    id: number;
    description: string;
    challenge_type: string;
    objective: number;
    game: string;
    currency_type: string;
    balance: string;
  };
  status: string;
  progress: number;
  is_active: boolean;
}

interface WeeklyChallengesProps {
  milestones: {
    id: number;
    
  }[];
  total_completed_challenges: number;
}


const useChallengesStore = create<ChallengesStoreProps>((set) => ({
  challenges: [],
  weeklyChallenges: [],
  progress: 0,
  quantityComplete: 0,
  timeLeft: {
    hours: 0,
    minutes: 0,
  },
  setChallenges: (challenges) => set({ challenges }),
  setProgress: (progress) => set({ progress }),
  setWeeklyChallenges: (weeklyChallenges) => set({ weeklyChallenges }),
  setQuantityComplete: (quantityComplete) => set({ quantityComplete }),
  setTimeLeft: (timeLeft) => set({ timeLeft }),
  setNewTimeLeft: (hours, minutes) => set({ timeLeft: { hours, minutes } }),
}));

export default useChallengesStore;