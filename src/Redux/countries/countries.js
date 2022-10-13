import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { act } from 'react-dom/test-utils';

const url = 'https://restcountries.com/v3.1/all';
const detail_url = 'https://restcountries.com/v3.1/all';
//
//
const initialState = {
  countryList: [],
  searchKeys : [],
  hasFiltered : false
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
      countryList: filteredCountries,
      main :state.countryList,
      searchKeys: state.searchKeys,
      hasFiltered: true
     }
    }
   return {
    countryList: state.main,
    searchKeys: state.searchKeys,
    hasFiltered: false
   }
   }
  },

  extraReducers: {
    [getCountriesData.fulfilled]:
    (state, { payload }) => ({ 
     countryList: payload,
     searchKeys: [...new Set(payload.map((el) => (el.region)))],
     hasFiltered : false
    })
    ,
  },
});

export const { filterByKey } = countriesSlice.actions;
export default countriesSlice.reducer;
