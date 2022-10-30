import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchInitialIp, fetchSearchedIp } from './ipAPI';

const initialState = {
  data: {},
  status: 'loading',
  message: '',
};

export const fetchInitialData = createAsyncThunk(
  'ipData/fetchInitialData',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchInitialIp();
      return data;
    } catch (error) {
      return rejectWithValue(
        `An error occurred. It wasn't possibile to retrieve the requested data`
      );
    }
  }
);
export const fetchSearchedData = createAsyncThunk(
  'ipData/fetchSearchedData',
  async (userInput, { rejectWithValue }) => {
    try {
      const data = await fetchSearchedIp(userInput);
      return data;
    } catch (error) {
      return rejectWithValue(
        `An error occurred. It wasn't possibile to retrieve the requested data`
      );
    }
  }
);

export const ipSlice = createSlice({
  name: 'ipData',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchInitialData.pending](state) {
      state.status = 'loading';
    },
    [fetchInitialData.fulfilled](state, action) {
      state.status = 'idle';
      state.data = action.payload;
    },
    [fetchInitialData.rejected](state, action) {
      state.status = 'error';
      state.message = action.payload;
    },
    [fetchSearchedData.pending](state) {
      state.status = 'loading';
    },
    [fetchSearchedData.fulfilled](state, action) {
      state.status = 'idle';
      state.data = action.payload;
    },
    [fetchSearchedData.rejected](state, action) {
      state.status = 'error';
      state.message = action.payload;
    },
  },
});
export default ipSlice.reducer;
// export const fetchData = createAsyncThunk(
//   'ipData/fetchData',
//   async (ipAddress) => {
//     return fetch(
//       `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ipAddress}`
//     ).then((res) => res.json());
//   }
// );
// export const fetchInitialData = createAsyncThunk(
//   'ipData/fetchInitialData',
//   async () => {
//     return fetch(
//       `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`
//     ).then((res) => res.json());
//   }
// );

// const initialState = {
//   ipData: {
//     ip: '192.212.174.101',
//     location: {
//       country: 'US',
//       region: 'NY',
//       city: 'Brooklyn',
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
