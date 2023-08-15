'use client'
import { create } from 'zustand' 

// State 
 interface FilterState {
  filters: {
    genre: string,
    pages: number,
  }
}
// Actions
 interface FilterActions {
  setGenre: (genre: string) => void
  setPages: (pages: number) => void
}
// Store
type FilterStore = FilterState & FilterActions

// Create a store
export const useFilters = create<FilterStore>(
    (set) => ({
      filters: {
        genre: '',
        pages: 1200,
      },
      setGenre: (genre) => set((state) => ({ filters: { ...state.filters, genre } })),
      setPages: (pages) => set((state) => ({ filters: { ...state.filters, pages } })),
    }),
)