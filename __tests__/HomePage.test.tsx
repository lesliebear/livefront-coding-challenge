import { render, screen } from '@testing-library/react';
import Home from '@/app/page';
import { useBooks } from '@/app/contexts/BookContext';
import { mockBooks } from '@/__mocks__/mockBooks';
import '@testing-library/jest-dom';

// Mock the useBooks hook
jest.mock('@/app/contexts/BookContext', () => ({
  useBooks: jest.fn(),
}));

describe('Home Component', () => {
  it('renders the tagline', () => {
    (useBooks as jest.Mock).mockReturnValue({ books: [] });

    render(<Home />);

    expect(
      screen.getByText(
        'Find your next favorite read from the top 15 books from The New York Times Best Sellers list'
      )
    ).toBeInTheDocument();
  });

  it('renders a list of books when books are available', () => {
    (useBooks as jest.Mock).mockReturnValue({ books: mockBooks });

    render(<Home />);

    expect(screen.getByText(mockBooks[0].title)).toBeInTheDocument();
    expect(screen.getByText(mockBooks[1].title)).toBeInTheDocument();
  });

});