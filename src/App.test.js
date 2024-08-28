import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navbar and news', () => {
  render(<App />);
  // Check if the Navbar is rendered
  const navbarElement = screen.getByText(/News Golory/i);
  expect(navbarElement).toBeInTheDocument();

  // Check if the News section is rendered
  const newsElement = screen.getByText(/Today's Top headlines/i);
  expect(newsElement).toBeInTheDocument();
});
