import Book from "@/components/book";
import getBooks from "@/lib/getBooks";

export default async function Home() {
  const books = await getBooks();

  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 place-items- center p-10">
      {books.map((book, i) => (
        <Book key={i} book={book} />
      ))}
    </ul>
  );
}
