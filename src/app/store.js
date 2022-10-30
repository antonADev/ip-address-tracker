import { configureStore } from '@reduxjs/toolkit';

import ipSliceReducer from '../features/ipDataSlice';

export const store = configureStore({
  reducer: {
    ipData: ipSliceReducer,
  },
});
