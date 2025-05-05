import { render, screen } from '@testing-library/react';
import Header from '@/app/ui/header/header';
import '@testing-library/jest-dom';

describe('Header Component', () => {
  it('renders the header with the correct text', () => {
    render(<Header />);

    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();

    expect(screen.getByText('Book Worming')).toBeInTheDocument();
  });
});