import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://restcountries.com/v3.1/all';
//
//
const initialState = {
  countryList: [],
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
  },

  extraReducers: {
    [getCountriesData.fulfilled]:
    (state, { payload }) => ({ countryList: payload })
    ,
  },
});

export default countriesSlice.reducer;
