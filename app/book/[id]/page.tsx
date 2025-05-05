'use client';

import { useBooks } from '@/app/contexts/BookContext';
import { useParams } from 'next/navigation';
import { formatTitle } from "@/app/lib/utils";
import Image from 'next/image';
import styles from '@/app/ui/book/book.module.css';
import Button from '@/app/ui/button/button';


/**
* This page displays the details of a specific book retrieved by using the book's rank as the id.
* It uses the `useBooks` hook to get the list of books and the `useParams` hook to get the book's rank from the URL.
*/
export default function BookDetail() {
  const { id } = useParams();

  const { books } = useBooks() || { books: [] };
  const book = books.find(b => b.rank === Number(id));

  if (!book) return <p>Book not found.</p>;

  return (
    <>
      <Button link="/" >⬅ Back to List</Button>
      <article className={styles.detailWrapper}>
        <Image
          src={book.book_image}
          width={book.book_image_width}
          height={book.book_image_height}
          alt={formatTitle(book.title)}
          key={book.rank}
          className={styles.image}
          priority
        />
        <div className={styles.textWrapper}>
          <h1 className={styles.title}>{formatTitle(book.title)}</h1>
          <p className={styles.description}><strong>Author:</strong> {book.author}</p>
          <p className={styles.description}><strong>Description:</strong> {book.description}</p>
          <p className={styles.description}><strong>Publisher:</strong> {book.publisher}</p>
          <p className={styles.description}><strong>Weeks on List:</strong> {book.weeks_on_list}</p>
          <p className={styles.description}><strong>Rank:</strong> {book.rank}</p>
        </div>
      </article>
    </>
  );
}