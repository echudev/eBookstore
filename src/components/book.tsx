"use client";
import Image from "next/image";
import { BookMetadata } from "../types/types";
import { useReadingList } from "../store/useReadingList";
import mark from "../assets/mark.png";

export default function Book({ book }: { book: BookMetadata }) {
  const { toggleBook, readingList } = useReadingList();

  return (
    <li
      key={book.ISBN}
      className="flex flex-col items-center border border-transparent hover:border-yellow-100 p-1 rounded transition-all"
    >
      <div className="relative">
        <Image
          src={book.cover}
          alt={book.title}
          width={300}
          height={300}
          className="aspect-[9/14] object-cover rounded shadow-md shadow-black cursor-pointer"
          onClick={() => toggleBook(book.ISBN)}
        />
        <Image
          src={mark}
          alt={"mark"}
          width={40}
          height={20}
          className={
            readingList.includes(book.ISBN)
              ? "absolute right-0 top-0 transition-all opacity-100"
              : "absolute right-0 top-0 transition-all opacity-0"
          }
        />
      </div>
      <h2 className="text-sm p-2 overflow-hidden text-ellipsis whitespace-nowrap max-w-full">
        {book.title}
      </h2>
    </li>
  );
}
