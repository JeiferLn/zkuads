import { create } from 'zustand';

interface BalanceStoreProps {
  balance: BalanceProps;
  setBalance: (balance: BalanceProps) => void;
}

type BalanceProps = [
  {
    name: string,
    balance: number,
  },
  {
    name: string,
    balance: number
  }
]


export const useBalanceStore = create<BalanceStoreProps>((set) => ({
  balance: [{ name: "", balance: 0 }, { name: "", balance: 0 }],
  setBalance: (balance) => set({ balance }),
}));
