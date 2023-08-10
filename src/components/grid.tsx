"use client";
import Book from "@/components/book";
import { BookMetadata } from "../types/types";

export default function Grid({ books }: { books: BookMetadata[] }) {
  return (
    <ul className="relative grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 place-items- center p-10">
      {books.map((book, i) => (
        <Book key={i} book={book} />
      ))}
    </ul>
  );
}
