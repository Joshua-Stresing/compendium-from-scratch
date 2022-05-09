import { render, screen } from '@testing-library/react';
import Main from './Main';
import userEvent from '@testing-library/user-event';

// import { MemoryRouter } from 'react-router-dom';
// import { fetchPokemon } from '../../services/pokemon/fetchpokemon';

describe('Main', () => {
  it('renders a list of characters to the screen that are filterable', async () => {
    render(<Main />);
    screen.debug();

    screen.getByText(/loading.../i);

    await screen.findAllByAltText('Image of a pokemon');

    const number = await screen.findAllByRole('article');
    expect(number.length).toBe(10);

    const preset = screen.getByPlaceholderText('Search Pokemon...');
    userEvent.type(preset, 'pikachu');

    const button = screen.getByRole('button');
    userEvent.click(button);

    const pika = await screen.findByText('pikachu');
    expect(pika).toBeInTheDocument();
  });
});

// const number = await screen.findAllByRole('article');
//     expect(number.length).toBe(10);
