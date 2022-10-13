import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const detailsUrl = 'https://restcountries.com/v3.1/name/';

const initialState = {
  countryDetails: [],
};

export const getDetails = createAsyncThunk(
  'countries/getDetailsData',
  async (name) => {
    try {
      const response = await axios.get(`${detailsUrl}${name}`);
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

const detailsSlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
  },

  extraReducers: {
    [getDetails.fulfilled]:
    (state, { payload }) => ({
      countryDetails: payload.map((el) => ({
        name: el.name.common,
        officialName: el.name.official,
        capital: el.capital,
        timezone: el.timezones,
        continents: el.continents,
        population: el.population,
        flag: el.flags.png,
        independent: el.independent,
        unMember: el.unMember,
        currencies: el.currencies,

      })),

    }),
  },
});

export default detailsSlice.reducer;
