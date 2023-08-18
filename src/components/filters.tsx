"use client";
import { BookMetadata } from "@/types/types";
import { useFilters } from "../store/useFilters";

interface FiltersProps {
  matches: BookMetadata[];
  genres: BookMetadata["genre"][];
}

export default function Filters({ matches, genres }: FiltersProps) {
  const { filters, setGenre, setPages } = useFilters();

  return (
    <div className="flex gap-7 px-10 py-6 items-center justify-center">
      <div className="flex items-center flex-col gap-3 p-2">
        <label htmlFor="range">Páginas: {filters.pages}</label>
        <input
          type="range"
          min={5}
          max={1200}
          value={filters.pages}
          className="accent-yellow-300"
          onChange={(e) => setPages(parseInt(e.target.value))}
        />
      </div>
      <div className="flex items-center  flex-col gap-2 p-2">
        <label htmlFor="genre">Género</label>
        <select
          value={filters.genre}
          onChange={(e) => setGenre(e.target.value)}
          className="rounded border-2 border-yellow-300"
        >
          <option value="">Todos</option>
          {genres.map((g, i) => (
            <option key={i} value={g}>
              {g}
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
  );
}
