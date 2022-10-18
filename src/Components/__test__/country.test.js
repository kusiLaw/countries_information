import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import Countries from '../Countries';
import store from './mock/configureStore';

it('Check if the component has changed', async () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Countries />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
