import { render, screen } from '@testing-library/react';
import Card from '@/app/ui/card/card';
import { Book } from '@/app/lib/types';
import { mockBooks } from '@/__mocks__/mockBooks';
import '@testing-library/jest-dom';

describe('Card Component', () => {
  it('renders book details correctly', () => {
    const mockBook: Book = mockBooks[0];

    render(<Card book={mockBook} />);

    const image = screen.getByRole('img', { name: mockBook.title });
    expect(image.getAttribute('src')).toContain(encodeURIComponent(mockBook.book_image));
    expect(image).toHaveAttribute('alt', mockBook.title);
    expect(screen.getByText('#1')).toBeInTheDocument();
    expect(screen.getByText(mockBook.title)).toBeInTheDocument();
    expect(screen.getByText('See Details')).toBeInTheDocument();

  });
});