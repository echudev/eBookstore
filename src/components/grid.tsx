import Book from "@/components/book";
import type { BookMetadata } from "../types/types";

interface GridProps {
  matches: BookMetadata[];
}

export default function Grid({ matches }: GridProps) {
  return (
    <>
      <ul className="relative grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 place-items- center p-10">
        {matches.map((book, i) => (
          <Book key={i} book={book} />
        ))}
      </ul>
      {matches.length === 0 && (
        <p className="text-center text-xl text-white/70 mt-10">
          No hay coincidencias
        </p>
      )}
    </>
  );
}
