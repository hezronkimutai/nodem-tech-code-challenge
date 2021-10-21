import { render, screen, fireEvent } from '@testing-library/react';
import LikeButton from '../../components/LikeButton';

test('renders the button with the initial Like texts', () => {
  render(<LikeButton />);
  const elements = screen.getAllByText(/Like/i);
  elements.map(el => expect(el).toBeInTheDocument())
});

test('Matches snapshot', () => {
  const component = render(<LikeButton />);
  expect(component).toMatchSnapshot();
});

test("Simulate click", () => {
  const component = render(
    <LikeButton />
  );
  const { getByText } = component;
  const node = getByText("100");
  fireEvent.click(node);
  const el = screen.getByText(/101/i);
  expect(el).toBeInTheDocument();
});
