import { create } from 'zustand'
import { BookMetadata } from '@/types/types'

type State = {
  readingList: BookMetadata[]
  addBook: ({book} : {book: BookMetadata}) => void
  remoteBook: ({book} : {book: BookMetadata}) => void
}

const useStore = create((set) => ({
  readingList: [],
  addBook: ({book} : {book: BookMetadata}) => set((state: State) => ({ readingList: [...state.readingList, book] })),
  remoteBook: ({book} : {book: BookMetadata}) => set((state: State) => (state.readingList.filter((b) => b.ISBN !== book.ISBN))),
}))