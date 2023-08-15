"use client";
import Filters from "@/components/filters";
import Grid from "@/components/grid";
import type { BookMetadata } from "../types/types";
import { useFilters } from "../store/useFilters";
import { useMemo } from "react";

interface PageProps {
  books: BookMetadata[];
}

export default function ClientPagePage({ books }: PageProps) {
  const genres: BookMetadata["genre"][] = Array.from(
    new Set(books.map((book) => book.genre))
  );
  const { filters } = useFilters();
  const matches = useMemo(
    () =>
      books.filter((book) => {
        if (filters.genre === "") {
          return book.pages <= filters.pages;
        } else {
          return book.genre === filters.genre && book.pages <= filters.pages;
        }
      }),
    [books, filters.genre, filters.pages]
  );

  return (
    <>
      <Filters matches={matches} genres={genres} />
      <Grid matches={matches} />
    </>
  );
}
