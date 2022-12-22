import App from './App';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FibonacciPage } from './components/FibonacciPage';

test('Renders the landing page', () => {
  render(<App/>)
});

test('Renders the fibonacci page', () => {
  render(<FibonacciPage/>);
});

describe('Insert value', () => {
  it('should correctly enter the value into the text box', async () => {
    render(<FibonacciPage/>);
    const textboxElement = screen.getByRole('textbox');
    userEvent.type(textboxElement, '4');
    expect(screen.getByRole('textbox')).toHaveValue('4');
  });
});