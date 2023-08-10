import getBooks from "@/lib/getBooks";
import MyBooks from "../../components/mybooks";

export default async function MyListPage() {
  const books = await getBooks();

  return <MyBooks books={books} />;
}
