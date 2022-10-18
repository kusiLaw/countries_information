import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  countryList: [],
  searchKeys: [],
};

export const getCountriesData = createAsyncThunk(
  'countries/countriesData',
  async () => ({
    name: 'Ghana',
    flag: 'flag.png',
    population: '32100',
  }),
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
      countryList: payload,
      searchKeys: ['all', 'Asia', 'Africa',
        'America', 'Europe', 'Oceania'],
    })
    ,
  },
});

export const { filterByKey } = countriesSlice.actions;
export default countriesSlice.reducer;
