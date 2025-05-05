'use client';

import { createContext, useContext } from 'react';
import { Book } from "@/app/lib/types";

interface BookContextType {
    books: Book[];
}

const BookContext = createContext<BookContextType | null>(null);

/**
 * BookProvider component that provides the book list to its children.
 */
export function BookProvider({ children, bookList }: { children: React.ReactNode; bookList: Book[] }) {
    const books = bookList;

    return (
        <BookContext.Provider value={{ books }}>
            {children}
        </BookContext.Provider>
    );
}

export const useBooks = () => useContext(BookContext);