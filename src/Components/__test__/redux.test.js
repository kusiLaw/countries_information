import store from './mock/configureStore';
import { getCountriesData } from './mock/country';

console.log(store.getState());

describe('test the store', () => {
  it('check if the store is populated after getCountries action is dispatched ', async () => {
    await store.dispatch(getCountriesData());
    expect(store.getState().countries.countryList.name).toEqual('Ghana');
  });
});
