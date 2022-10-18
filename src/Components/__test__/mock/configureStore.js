import { configureStore, combineReducers } from '@reduxjs/toolkit';
import countriesReduce from './country';
import detailsReduce from './details';

const rootReducer = combineReducers({
  countries: countriesReduce,
  details: detailsReduce,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
