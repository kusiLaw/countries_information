import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://restcountries.com/v3.1/all';
const detail_url = 'https://restcountries.com/v3.1/all';
//
//
const initialState = {
  countryList: [],
  searchKeys : [],
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

export const getDetails = createAsyncThunk(
 'countries/getDetailsData',
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
   filterByKey: (state, action)=>{
   if(action.payload !== 'DEFAULT'){
     const filteredCountries = state.countryList.filter(
     (el) => (el.region === action.payload));
     return {
      countryList:state.countryList,
      filteredCountries,
      searchKeys: state.searchKeys,
     }
    }
   return {
    countryList:state.countryList,
    searchKeys: state.searchKeys,
   }
   }
  },

  extraReducers: {
    [getCountriesData.fulfilled]:
    (state, { payload }) => ({ 
     countryList: payload,
     searchKeys: [...new Set(payload.map((el) => (el.region)))],
    })
    ,
  },
});

export const { filterByKey } = countriesSlice.actions;
export default countriesSlice.reducer;
