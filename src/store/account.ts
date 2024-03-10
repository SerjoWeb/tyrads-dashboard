import { create } from 'zustand';
import { IStore, IUser } from '../models/interfaces';

export const account = create<IStore>()((set) => ({
  user: undefined,
  setUser: (user: IUser | undefined) => set({ user })
}));
