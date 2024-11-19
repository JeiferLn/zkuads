import { create } from 'zustand'

const ErrorDefault: Error = {
  codeError: 0,
  messageError: "",
}

interface Error {
  codeError?: number;
  messageError: string;
}

interface ErrorStore {
  error: Error;
  setError: (error: Error) => void;
  reset: () => void;
}

export const useErrorStore = create<ErrorStore>((set) => ({
  error : ErrorDefault,
  setError: (error: Error) => {set({error})},
  reset: () => (set({error: ErrorDefault}))
}));