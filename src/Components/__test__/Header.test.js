import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';
import '@testing-library/jest-dom';

it('Check if the component has changed', () => {
  const tree = renderer.create(

    <BrowserRouter>
      <Header />
    </BrowserRouter>,

  ).toJSON();
  expect(tree).toMatchSnapshot();
});
