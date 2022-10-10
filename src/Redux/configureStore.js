import { configureStore, combineReducers } from '@reduxjs/toolkit';
import countriesReduce from './countries/countries';

const rootReducer = combineReducers({
  countries: countriesReduce,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
