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
