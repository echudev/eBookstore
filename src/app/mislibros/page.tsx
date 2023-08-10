import getBooks from "@/lib/getBooks";
import MyList from "./MyList";

export default async function MyListPage() {
  const books = await getBooks();

  return <MyList books={books} />;
}
