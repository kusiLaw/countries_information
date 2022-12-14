import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// eslint-disable-next-line
import axios from 'axios';

const detailsUrl = 'https://restcountries.com/v2/name/';

const initialState = {
  countryDetails: [],
  Loading: false,
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
        name: el.name,
        // officialName: el.name.official,
        capital: el.capital,
        timezone: el.timezones,
        region: el.region,
        population: el.population,
        flag: el.flags.png,
        independent: el.independent,
        unMember: el.unMember,
        currencies: el.currencies,

      })),
      Loading: false,
    }),

    [getDetails.pending]: (() => ({
      countryDetails: [],
      Loading: true,
    })),
  },
});

export default detailsSlice.reducer;
