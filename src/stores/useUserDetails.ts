import { create } from "zustand";

const IUserDetailsDefault: IUserDetails = {
  username: "",
  email: "",
  first_name: "",
  last_name: "",
  birth_date: "",
  teams: [],
}

interface IUserDetails {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  birth_date: string;
  teams: ITeamDetails[];
}

interface ITeamDetails {
  team_id: number;
}

interface IUserDetailsStore {
  userDetails: IUserDetails ;
  setUserDetails: (userDetails: IUserDetails) => void;
  reset: () => void;
}

export const useUserDetailsStore = create<IUserDetailsStore>((set, get) => ({
  userDetails: IUserDetailsDefault,
  setUserDetails: (userDetails: IUserDetails) => {
    set({ userDetails })
  },
  reset: () => { set(
    {userDetails: IUserDetailsDefault}
  )},
}));
