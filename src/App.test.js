import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the App component with the Home text (?', () => {
  render(<App />);

  screen.getByText('Hola c: me gusta la birulana');
});
