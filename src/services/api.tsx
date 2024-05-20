import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://664b2843a300e8795d446ec6.mockapi.io/",
  }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: (endpoint) => `${endpoint}`,
    }),
  }),
});

export const { useGetDataQuery } = api;
