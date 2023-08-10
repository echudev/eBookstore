"use client";
import Book from "@/components/book";
import { BookMetadata } from "../types/types";
import { useState, useMemo } from "react";

interface GridProps {
  books: BookMetadata[];
  genres: string[];
}

export default function Grid({ books, genres }: GridProps) {
  const [genre, setGenre] = useState<string>("");
  const [pages, setPages] = useState<string>("1200");
  const matches = useMemo(
    () =>
      books.filter((book) => {
        if (genre === "") {
          return book.pages <= parseInt(pages);
        } else {
          return book.genre === genre && book.pages <= parseInt(pages);
        }
      }),
    [genre, pages, books]
  );

  return (
    <>
      <div className="flex gap-7 px-10 py-6 items-center justify-center">
        <div className="flex items-center flex-col gap-3 p-2">
          <label htmlFor="range">Páginas: {pages}</label>
          <input
            type="range"
            min={5}
            max={1200}
            defaultValue={1200}
            className="accent-yellow-300"
            onChange={(e) => setPages(e.target.value)}
          />
        </div>
        <div className="flex items-center  flex-col gap-2 p-2">
          <label htmlFor="genre">Género</label>
          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="rounded border-2 border-yellow-300"
          >
            <option value="">Todos</option>
            {genres.map((genre, i) => (
              <option key={i} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col items-center p-2">
          <p className="">Coincidencias</p>
          <p className="flex items-center shadow-black/50 shadow-md justify-center mt-1 bg-yellow-300 h-8 w-8 text-black font-bold rounded-full">
            {matches.length}
          </p>
        </div>
      </div>
      <ul className="relative grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 place-items- center p-10">
        {matches.map((book, i) => (
          <Book key={i} book={book} />
        ))}
      </ul>
    </>
  );
}
