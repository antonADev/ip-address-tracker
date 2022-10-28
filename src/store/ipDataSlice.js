import { apiSlice } from '../features/apiSlice';

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStartingIp: builder.query({
      query: () => ``,
    }),
    getIpBySearch: builder.query({
      query: (ipAddress) => `&ipAddress=${ipAddress}`,
    }),
  }),
});

export const { useGetStartingIpQuery, useGetIpBySearchQuery } =
  extendedApiSlice;
