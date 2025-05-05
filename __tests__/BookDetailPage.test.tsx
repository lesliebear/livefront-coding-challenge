import { render, screen } from '@testing-library/react';
import BookDetail from '@/app/book/[id]/page';
import { useBooks } from '@/app/contexts/BookContext';
import { useParams } from 'next/navigation';
import { mockBooks } from '@/__mocks__/mockBooks';
import '@testing-library/jest-dom';

// Mock the useBooks hook
jest.mock('@/app/contexts/BookContext', () => ({
  useBooks: jest.fn(),
}));

// Mock the useParams hook
jest.mock('next/navigation', () => ({
  useParams: jest.fn(),
}));

describe('BookDetail Page', () => {
  it('renders book details when a valid id is provided', () => {

    (useBooks as jest.Mock).mockReturnValue({ books: mockBooks });
    (useParams as jest.Mock).mockReturnValue({ id: '1' });

    render(<BookDetail />);

    const image = screen.getByRole('img', { name: mockBooks[0].title });
    expect(image.getAttribute('src')).toContain(encodeURIComponent(mockBooks[0].book_image));
    expect(image).toHaveAttribute('alt', mockBooks[0].title);
    expect(screen.getByText(mockBooks[0].title)).toBeInTheDocument();
    expect(screen.getByText(mockBooks[0].author)).toBeInTheDocument();
    expect(screen.getByText(mockBooks[0].description)).toBeInTheDocument();
    expect(screen.getByText(mockBooks[0].publisher)).toBeInTheDocument();
    expect(screen.getByText(mockBooks[0].weeks_on_list)).toBeInTheDocument();
    expect(screen.getByText(mockBooks[0].rank)).toBeInTheDocument();

    (useBooks as jest.Mock).mockReturnValue({ books: mockBooks });
    (useParams as jest.Mock).mockReturnValue({ id: '2' });

    render(<BookDetail />);

    const image2 = screen.getByRole('img', { name: mockBooks[1].title });
    expect(image2.getAttribute('src')).toContain(encodeURIComponent(mockBooks[1].book_image));
    expect(image2).toHaveAttribute('alt', mockBooks[1].title);
    expect(screen.getByText(mockBooks[1].title)).toBeInTheDocument();
    expect(screen.getByText(mockBooks[1].author)).toBeInTheDocument();
    expect(screen.getByText(mockBooks[1].description)).toBeInTheDocument();
    expect(screen.getByText(mockBooks[1].publisher)).toBeInTheDocument();
    expect(screen.getByText(mockBooks[1].weeks_on_list)).toBeInTheDocument();
    expect(screen.getByText(mockBooks[1].rank)).toBeInTheDocument();
  });

  it('renders "Book not found" when the book does not exist', () => {
    (useBooks as jest.Mock).mockReturnValue({ books: [] });
    (useParams as jest.Mock).mockReturnValue({ id: '999' });

    render(<BookDetail />);

    expect(screen.getByText('Book not found.')).toBeInTheDocument();
  });
});