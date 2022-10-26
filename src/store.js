import { configureStore } from '@reduxjs/toolkit';

import ipDataReducer from './store/ipDataSlice';

export const store = configureStore({
  reducer: {
    ipData: ipDataReducer,
  },
});
