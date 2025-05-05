import Image from "next/image";
import styles from "./card.module.css";
import { formatTitle } from "@/app/lib/utils";
import { Book } from "@/app/lib/types";
import Button from "@/app/ui/button/button";

/**
 * Displays a book's primary information (image, title, and rank) and button-link to its corresponding details page.
 */
export default function Card({ book }: { book: Book }) {
    return (
        <section className={styles.card} key={book.rank}>
            <h2 className={styles.rank}>#{book.rank}</h2>
            <div className={styles.imageWrapper}>
                <Image
                    src={book.book_image}
                    width={book.book_image_width}
                    height={book.book_image_height}
                    alt={formatTitle(book.title)}
                    key={book.rank}
                    className={styles.image}
                    priority={book.rank === 1 || book.rank === 2}
                />
            </div>
            <div className={styles.titleWrapper}>
                <p className={styles.title}>{formatTitle(book.title)}</p>
                <Button link={`/book/${book.rank}`}> See Details </Button>
            </div>
        </section>
    )
}