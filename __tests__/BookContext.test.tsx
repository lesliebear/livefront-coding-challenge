import { render, screen } from '@testing-library/react';
import { BookProvider, useBooks } from '@/app/contexts/BookContext';
import type { Book } from '@/app/lib/types';
import '@testing-library/jest-dom';
import { mockBooks } from '@/__mocks__/mockBooks';

function BookConsumer() {
    const { books } = useBooks() || { books: [] }
    return (
        <ul>
            {books?.map((book: Book) => (
                <li key={book.rank}>
                    <p>{book.title}</p>
                    <p>{book.author}</p>
                    <p>{book.book_image}</p>
                    <p>{book.book_image_height}</p>
                    <p>{book.book_image_width}</p>
                    <p>{book.description}</p>
                    <p>{book.publisher}</p>
                    <p>{book.weeks_on_list}</p>
                    <p>{book.rank}</p>
                </li>
            ))}
        </ul>
    );
}

describe('BookContext', () => {
    it('provides books to its consumers', () => {
        render(
            <BookProvider bookList={mockBooks}>
                <BookConsumer />
            </BookProvider>
        );

        expect(screen.getByText(mockBooks[0].title)).toBeInTheDocument();
        expect(screen.getByText(mockBooks[1].title)).toBeInTheDocument();
    });
});