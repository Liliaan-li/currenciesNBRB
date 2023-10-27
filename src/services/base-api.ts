import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    tagTypes: ['Currencies'],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.nbrb.by/exrates' }),
    endpoints: ()=>({})
})

