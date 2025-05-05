import { render, screen } from '@testing-library/react';
import Button from '@/app/ui/button/button';
import '@testing-library/jest-dom';

describe('Button Component', () => {
  it('renders correctly with the provided props', () => {
    const mockLink = '/test-link/1';
    const mockChildren = 'See Details';

    render(<Button link={mockLink} >{mockChildren}</Button>);

    const linkElement = screen.getByRole('link', { name: mockChildren });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', mockLink);
  });
});