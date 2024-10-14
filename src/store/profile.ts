import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Store = Partial<{
  name: string;
  email: string;
  image: string;
}>;

export const useProfileStore = create(
  persist<Store & Actions>(
    (set) => ({
      saveData: (payload) => set(payload),
    }),
    { name: 'profile-store' }
  )
);

type Actions = {
  saveData: (payload: Store) => void;
};
