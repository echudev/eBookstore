"use client";
import Image from "next/image";
import { BookMetadata } from "../types/types";

export default function Book({ book }: { book: BookMetadata }) {
  return (
    <li
      key={book.ISBN}
      className="w-full flex flex-col items-center border border-transparent hover:border-yellow-100 p-1 rounded transition-all"
    >
      <Image
        src={book.cover}
        alt={book.title}
        width={300}
        height={300}
        className="aspect-[9/14] object-cover rounded shadow-md shadow-black cursor-pointer transition-all ease-in-out"
      />
      <h2 className="text-sm text-yellow-100 p-2 overflow-hidden text-ellipsis whitespace-nowrap max-w-full">
        {book.title}
      </h2>
    </li>
  );
}
