'use client'
import { create } from 'zustand'

export type State = {
  readingList: string[]
  toggleBook: (ISBN: string) => void
}

export const useReadingList = create<State>((set) => ({
  readingList: [],
  toggleBook: (id) =>
    set((state) => ({
        readingList: state.readingList.includes(id)
            ? state.readingList.filter((prevId) => prevId !== id)
            : [...state.readingList, id],
    })),
}))