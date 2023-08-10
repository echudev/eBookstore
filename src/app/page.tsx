import getBooks from "@/lib/getBooks";
import Grid from "@/components/grid";

export default async function Home() {
  const books = await getBooks();

  return <Grid books={books} />;
}
