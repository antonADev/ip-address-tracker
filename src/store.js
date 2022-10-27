import { configureStore } from '@reduxjs/toolkit';

import ipDataReducer from './store/ipDataSlice';
import { apiSlice } from './features/apiSlice';
export const store = configureStore({
  reducer: {
    // ipData: ipDataReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
