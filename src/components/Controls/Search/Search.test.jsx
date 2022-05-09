import { render, screen } from '@testing-library/react';
import SearchBar from './Search';

describe('search', () => {
  it('renders the search', () => {
    render(<SearchBar />);
    const searchbar = screen.getByPlaceholderText('Search Pokemon...');
    expect(searchbar).toBeInTheDocument();

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
