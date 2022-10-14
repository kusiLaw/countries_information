import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  countryDetails: [],
};

export const getDetails = createAsyncThunk(
  'countries/getDetailsData',
  async () => ({
    name: 'Ghana',
    capital: 'Accra',
    timezone: 'UTC+00',
    region: 'Africa',
    population: '31000',
    flag: 'flags.png',
    independent: true,
    unMember: true,
    currencies: '$',
  }),
);

const detailsSlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
  },

  extraReducers: {
    [getDetails.fulfilled]:
    (state, { payload }) => ({
      countryDetails: payload,
    }),
  },
});

export default detailsSlice.reducer;
