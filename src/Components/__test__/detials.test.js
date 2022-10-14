import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import CountryDetails from '../Country_details';
import store from './mock/configureStore';

it('Check if the component has changed', async () => {
  const tree = renderer.create(
    <Provider store={store}>
      <CountryDetails />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
