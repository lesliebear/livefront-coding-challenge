import { act, render, screen } from '@testing-library/react';
import ScrollToTopButton from '@/app/ui/button/scrollToTopButton';
import '@testing-library/jest-dom';

describe('ScrollToTopButton', () => {
  beforeEach(() => {
    // Reset scrollY before each test
    Object.defineProperty(window, 'scrollY', {
      value: 0,
      writable: true,
    });
  });

  it('is hidden initially', () => {
    render(<ScrollToTopButton />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('shows when scrollY > 300', () => {
    act(() => {
      render(<ScrollToTopButton />);
    });

    Object.defineProperty(window, 'scrollY', {
      value: 400,
      writable: true,
    });

    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });

    return screen.findByRole('button').then((button) => {
      expect(button).toBeInTheDocument();
    });
  });
});