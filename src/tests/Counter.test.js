// import necessary react testing library helpers here
// import the Counter component here
import { render, screen, act } from '@testing-library/react';
import Counter from '../components/Counter';
beforeEach(() => {
  // Render the Counter component here
})

test('renders counter message', () => {
  render(<Counter />);
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
  const count = screen.getByTestId('count');
  expect(count).toBeInTheDocument();

});

test('should render initial count with value of 0', () => {
  render(<Counter />);
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  render(<Counter />);
  const incrementButton = screen.getByText('+');
  const count = screen.getByTestId('count');
  act(() => {
    incrementButton.click();
  });
  expect(count).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  render(<Counter />);
  const decrementButton = screen.getByText('-');
  const count = screen.getByTestId('count');
  act(() => {
    decrementButton.click();
  })
  expect(count).toHaveTextContent('-1');
});
