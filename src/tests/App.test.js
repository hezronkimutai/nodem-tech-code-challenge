import { render } from '@testing-library/react';
import App from '../App';

test('Matches snapshot', () => {
  const AppComponent = render(<App />);
  expect(AppComponent).toMatchSnapshot();
});
