import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// eslint-disable-next-line
import axios from 'axios';

const url = 'https://restcountries.com/v3.1/all';

const initialState = {
  countryList: [],
  searchKeys: [],
};

export const getCountriesData = createAsyncThunk(
  'countries/countriesData',
  async () => {
    try {
      const response = await axios.get(`${url}`);
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

const countriesSlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    filterByKey: (state, action) => {
      if (action.payload !== 'DEFAULT') {
        const filteredCountries = state.countryList.filter(
          (el) => (el.region === action.payload),
        );
        return {
          countryList: state.countryList,
          filteredCountries,
          searchKeys: state.searchKeys,
        };
      }
      return {
        countryList: state.countryList,
        searchKeys: state.searchKeys,
      };
    },
  },

  extraReducers: {
    [getCountriesData.fulfilled]:
    (state, { payload }) => ({
      countryList: payload.map((el) => ({
        name: el.name.common,
        flag: el.flags.svg,
        population: el.population,
        region: el.region,
      })),

      searchKeys: [...new Set(payload.map((el) => (el.region)))],
    })
    ,
  },
});

export const { filterByKey } = countriesSlice.actions;
export default countriesSlice.reducer;
