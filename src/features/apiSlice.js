// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const ipApi = createApi({
//   reducerPath: 'ipApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl:
//       'https://geo.ipify.org/api/v2/country,city?apiKey=at_ZN19nlh6naEBSRJsP28l6lVGpq98G',
//   }),
//   endpoints: (builder) => ({
//     getStartingIp: builder.query({
//       query: () => '',
//     }),
//     getIpByIp: builder.query({
//       query: (ipAddress) => `&ipAddress=${ipAddress}`,
//     }),
//   }),
// });

// export const { useGetStartingIpQuery, useGetIpByIpQuery } = ipApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const API_KEY = process.env.REACT_APP_IPIFY_API_KEY;
export const apiSlice = createApi({
  reducerPath: 'ipApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`,
  }),
  endpoints: (builder) => ({}),
});
