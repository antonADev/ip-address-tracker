// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchData = createAsyncThunk(
//   'ipData/fetchData',
//   async (ipAddress) => {
//     return fetch(
//       `https://geo.ipify.org/api/v2/country,city?apiKey=at_ZN19nlh6naEBSRJsP28l6lVGpq98G&ipAddress=${ipAddress}`
//     ).then((res) => res.json());
//   }
// );
// export const fetchInitialData = createAsyncThunk(
//   'ipData/fetchInitialData',
//   async () => {
//     return fetch(
//       `https://geo.ipify.org/api/v2/country,city?apiKey=at_ZN19nlh6naEBSRJsP28l6lVGpq98G`
//     ).then((res) => res.json());
//   }
// );

// const initialState = {
//   ipData: {
//     ip: '8.8.8.8',
//     location: {
//       country: 'US',
//       region: 'California',
//       city: 'Mountain View',
//       lat: 37.40599,
//       lng: -122.078514,
//       postalCode: '94043',
//       timezone: '-07:00',
//       geonameId: 5375481,
//     },
//     domains: [
//       '0d2.net',
//       '003725.com',
//       '0f6.b0094c.cn',
//       '007515.com',
//       '0guhi.jocose.cn',
//     ],
//     as: {
//       asn: 15169,
//       name: 'Google LLC',
//       route: '8.8.8.0/24',
//       domain: 'https://about.google/intl/en/',
//       type: 'Content',
//     },
//     isp: 'Google LLC',
//   },
//   status: null,
// };

// const ipDataSlice = createSlice({
//   name: 'ipData',
//   initialState,
//   reducers: {},
//   extraReducers: {
//     [fetchData.pending]: (state, action) => {
//       state.status = 'loading';
//     },
//     [fetchData.fulfilled]: (state, { payload }) => {
//       state.ipData = payload;
//       state.status = 'success';
//     },
//     [fetchData.rejected]: (state, action) => {
//       state.status = 'failed';
//     },
//     [fetchInitialData.pending]: (state, action) => {
//       state.status = 'loading';
//     },
//     [fetchInitialData.fulfilled]: (state, { payload }) => {
//       state.ipData = payload;
//       state.status = 'success';
//     },
//     [fetchInitialData.rejected]: (state, action) => {
//       state.status = 'failed';
//     },
//   },
// });

// export default ipDataSlice.reducer;

import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { apiSlice } from '../features/apiSlice';
const ipAdapter = createEntityAdapter({
  selectIp: (ip) => ip.ip,
});

const initialState = ipAdapter.getInitialState();

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getIpBySearch: builder.query({
      query: (ipAddress) => `&ipAddress=${ipAddress}`,
    }),
  }),
});

export default ipDataSlice.reducer;
