import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Store = {
  links?: { platform: string; url: string }[];
};

export const useLinksStore = create(
  persist<Store & Actions>(
    (set) => ({
      saveLinks: (payload) => set({ links: payload }),
    }),
    {
      name: 'links-store',
    }
  )
);

type Actions = {
  saveLinks: (payload: Store['links']) => void;
};
