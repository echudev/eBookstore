import data from "./books.json";
import { BookMetadata } from "../types/types";

export default async function getBooks() {
    const books: BookMetadata[] =  data.library.map((data) => data.book);
    return books;
} 