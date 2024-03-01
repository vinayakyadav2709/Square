import {create} from 'zustand';
import { Mystorage } from './Mystorage';
import { persist, createJSONStorage } from 'zustand/middleware'

const naam = (set, get) => ({
  fishes: 0,
  addAFish: () => set({ fishes: get().fishes + 1 }),
  killAFish: () => set({ fishes: get().fishes - 1 }),
  clearTank: () => set({ fishes:0})
})

export const useFishStore = create(
  persist(
    naam,
    {
      name: 'food-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => Mystorage), // (optional) by default, 'localStorage' is used
    },
  ),
)








