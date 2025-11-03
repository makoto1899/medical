import { render, screen } from '@testing-library/react';
import App from './App';

test('renders medical pwa text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Medical PWA/i);
  expect(linkElement).toBeInTheDocument();
});

