import { create } from "zustand";

interface IWalletIDStore {
  walletID: IWalletID;
  allWalletID: IWalletID[];
  setWalletID: (walletID: IWalletID) => void;
  setAllWalletID: (allWalletID: IWalletID[]) => void;
}

interface IWalletID {
  id?: number;
  wallet_address: string;
  description: string;
  network: string;
}

const IWalletIDDefault : IWalletID = {
  id: 0,
  wallet_address: "",
  description: "",
  network: ""
}

export const useWalletIDStore = create<IWalletIDStore>((set) => ({
  walletID: IWalletIDDefault,
  allWalletID: [],
  setWalletID: (walletID: IWalletID) => {
    set({ walletID });
  },
  setAllWalletID: (allWalletID: IWalletID[]) => {
    set({ allWalletID });
  }
}));