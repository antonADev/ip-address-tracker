import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk(
  'ipData/fetchData',
  async (ipAddress) => {
    return fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_ZN19nlh6naEBSRJsP28l6lVGpq98G&ipAddress=${ipAddress}`
    ).then((res) => res.json());
  }
);
export const fetchInitialData = createAsyncThunk(
  'ipData/fetchInitialData',
  async () => {
    return fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_ZN19nlh6naEBSRJsP28l6lVGpq98G`
    ).then((res) => res.json());
  }
);

const initialState = {
  ipData: {},
  status: null,
};

const ipDataSlice = createSlice({
  name: 'ipData',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchData.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchData.fulfilled]: (state, { payload }) => {
      state.ipData = payload;
      state.status = 'success';
    },
    [fetchData.rejected]: (state, action) => {
      state.status = 'failed';
    },
    [fetchInitialData.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchInitialData.fulfilled]: (state, { payload }) => {
      state.ipData = payload;
      state.status = 'success';
    },
    [fetchInitialData.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export default ipDataSlice.reducer;
