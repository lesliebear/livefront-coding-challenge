'use client';

import Card from "./ui/card/card";
import { Book } from "@/app/lib/types";
import { useBooks } from "./contexts/BookContext";
import ScrollToTopButton from "./ui/button/scrollToTopButton";


export default function Home() {
  const { books } = useBooks() || { books: [] };

  return (
    <>
      <h2 className="tagline"> Find your next favorite read from the top 15 books from The New York Times Best Sellers list </h2>
      {books.map((book: Book) => (
        <Card book={book} key={book.rank} />
      ))}
      <ScrollToTopButton />
    </>
  );
}
