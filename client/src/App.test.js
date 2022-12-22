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
  it('should return the correct result when passing a correct value', async () => {
    render(<FibonacciPage/>);
    const textboxElement = screen.getByRole('textbox');
    const buttonElement = screen.getByRole('button');
    userEvent.type(textboxElement, '4');
    userEvent.click(buttonElement);
    expect(screen.getAllByText('0,1,1,2,3')).toBeInTheDocument();
  });
});