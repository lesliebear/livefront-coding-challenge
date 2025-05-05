/**
 * Properties of a book object returned from the NYT API
 */
export interface Book {
    rank: number;
    book_image: string;
    book_image_width: number;
    book_image_height: number;
    title: string;
    author: string;
    description: string;
    publisher: string;
    weeks_on_list: number;
}