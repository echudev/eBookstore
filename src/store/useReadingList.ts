'use client'
import { createWithEqualityFn } from 'zustand/traditional' // reeplace create with createWithEqualityFn
import { persist, createJSONStorage } from 'zustand/middleware'// Persist is a middwlare that allows us to persist the state of our store in local storage.
import { useState, useEffect } from 'react'



// State 
 interface State {
  readingList: string[]
}
// Actions
 interface Actions {
  toggleBook: (ISBN: string) => void
}
// Store
type Store = State & Actions

// Create a store
export const useReadingList = createWithEqualityFn(
  persist<Store>(
    (set) => ({
      readingList: [],
      toggleBook: (id) => set((state) => ({ readingList: state.readingList.includes(id)
            ? state.readingList.filter((prevId) => prevId !== id)
            : [...state.readingList, id],
            })),
    }),
    {
      name: 'reading-list', // name of the localStorage key
      storage: createJSONStorage(() => localStorage), // Use localStorage
    }
  ),
  // Use Object.is as the default equality function
  Object.is,
)


const emptyStore: Store = {
  readingList: [],
  toggleBook: () => {},
}

// This a fix to ensure zustand never hydrates the store before React hydrates the page
// else it causes a mismatch between SSR/SSG and client side on first draw which produces an error
export const useStore = ((selector, compare) => {

  const store = useReadingList(selector, compare);
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);

  return hydrated ? store : emptyStore;
}) as typeof useReadingList;