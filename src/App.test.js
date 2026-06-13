// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainMega title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainMega/i);
    expect(titleElement).toBeInTheDocument();
});
