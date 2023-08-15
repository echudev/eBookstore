import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/";
import Filters from "../src/components/filters";

const genres = ["Genre 1", "Genre 2", "Genre 3"];
const matches = [
  {
    title: "El Señor de los Anillos",
    pages: 1200,
    genre: "Fantasía",
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg",
    synopsis:
      "Una aventura épica en un mundo de fantasía llamado la Tierra Media.",
    year: 1954,
    ISBN: "978-0618640157",
    author: {
      name: "J.R.R. Tolkien",
      otherBooks: ["El Hobbit", "El Silmarillion"],
    },
  },
];

describe("Filters", () => {
  it("renders correctly genre filter", () => {
    render(<Filters matches={matches} genres={genres} />);
    expect(screen.getByText("Todos")).toBeInTheDocument();
  });
});
