import { Book } from '@/app/lib/types';

export const mockBooks: Book[] = [
    {
        rank: 1,
        title: 'Mock Book 1',
        book_image: 'https://sample.com/image1.jpg',
        book_image_width: 100,
        book_image_height: 300,
        author: 'Sample Author',
        description: 'sample description',
        publisher: 'sample publisher',
        weeks_on_list: 10
    },
    {
        rank: 2,
        title: 'Mock Book 2',
        book_image: 'https://sample.com/image2.jpg',
        book_image_width: 200,
        book_image_height: 500,
        author: 'sample author 2',
        description: 'sample description 2',
        publisher: 'sample publisher 2',
        weeks_on_list: 5
    }
];