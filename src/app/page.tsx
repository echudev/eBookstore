import getBooks from "@/lib/getBooks";
import Grid from "@/components/grid";

export default async function Home() {
  const books = await getBooks();
  const genres: string[] = Array.from(new Set(books.map((book) => book.genre)));

  return <Grid books={books} genres={genres} />;
}
