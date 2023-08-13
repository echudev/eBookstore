"use client";
import Book from "@/components/book";
import type { BookMetadata } from "../types/types";
import { useStore } from "@/store/useReadingList";

export default function MyBooks({ books }: { books: BookMetadata[] }) {
  const { readingList } = useStore();

  return (
    <ul className="relative grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 place-items- center p-10">
      {readingList.length === 0 ? (
        <p className="absolute text-xl flex justify-center items-center w-full h-full">
          Aún no tienes libros en tu lista!
        </p>
      ) : (
        books.map((book, i) => {
          if (readingList.includes(book.ISBN)) {
            return <Book key={i} book={book} />;
          }
        })
      )}
    </ul>
  );
}
