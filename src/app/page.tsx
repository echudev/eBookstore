import getBooks from "@/lib/getBooks";
import ClientPage from "./indexClientPage";

export default async function Home() {
  const books = await getBooks();

  return <ClientPage books={books} />;
}
