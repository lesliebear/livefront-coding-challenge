import { getBookList } from "@/app/lib/data";
import { BookProvider } from "@/app/contexts/BookContext";

/**
 * Server component that fetches book list from NYT api and provides it to the BookProvider.
 */
export default async function BookWrapper({ children }: { children: React.ReactNode }) {
    const books = await getBookList();
    
    return (
        <BookProvider bookList={books}>
            <main>
                {children}
            </main>
        </BookProvider>
    );
}