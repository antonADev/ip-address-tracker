import { configureStore } from '@reduxjs/toolkit';

import ipDataReducer from './store/ipDataSlice';
import { ipApi } from './features/apiSlice';
export const store = configureStore({
  reducer: {
    // ipData: ipDataReducer,
    [ipApi.reducerPath]: ipApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ipApi.middleware),
});
