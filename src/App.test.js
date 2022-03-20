import { render, screen } from '@testing-library/react';
import App from './App';
import * as CONFIG from './config.js';

test('Renders main title', () => {
  render(<App />);
  const linkElement = screen.getByText(CONFIG.introTitle);
  expect(linkElement).toBeInTheDocument();
});
