import { createApi } from "@reduxjs/toolkit/query";
import { baseQuery } from "./baseQuery";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery ,
  endpoints: () => ({}),
});
