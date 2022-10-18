import { configureStore, combineReducers } from '@reduxjs/toolkit';
import countriesReduce from './countries/countries';
import detailsReduce from './Details/detail';

const rootReducer = combineReducers({
  countries: countriesReduce,
  details: detailsReduce,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
