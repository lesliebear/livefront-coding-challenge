/**
 * 
 * @returns List of books and book details from the New York Times API 
 */
export async function getBookList() {
    const key = '0OksQYU5VbADY6FfqLbEe474Z3kHEkse';
    const base_url = 'https://api.nytimes.com/svc/books/v3/';
    const endpoint = 'lists/current/hardcover-fiction.json';

    try {
        return await fetch(`${base_url}${endpoint}?api-key=${key}`, {
            next: { revalidate: 604800 }, // 604800 seconds = 7 days
        })
            .then(res => res.json())
            .then(data => data.results.books)
    } catch (err) {
        console.error(err);
        throw new Error('Failed to fetch data');
    }
}