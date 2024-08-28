import { ITickerSearchInputProps, ITickerSearchResponseProps } from './../../utils/type';
import { IBSETickerInputProps, IBSETickerResponseProps } from '@/src/utils/type';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export const commonApi = createApi({
  reducerPath: 'commonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_FINANCIAL,
  }),
  endpoints: builder => ({
    getFinancialData: builder.query< IBSETickerResponseProps,IBSETickerInputProps
    >({
      query: params => ({
        url: `api/v3/stock-screener?exchange=${params.exchange}&apikey=${process.env.NEXT_PUBLIC_API_KEY_FINANCIAL_DATA}`,
        method: 'GET',
      
      }),
    }),
    getSearch: builder.query< ITickerSearchResponseProps,ITickerSearchInputProps
    >({
      query: params => ({
        url: `api/v3/search-ticker?query=${params.query}&limit=${params.limit}&exchange=${params.exchange}&apikey=${process.env.NEXT_PUBLIC_API_KEY_FINANCIAL_DATA}`,
        method: 'GET',
      
      }),
    }),
   
   
    // generateOtp: builder.mutation<ICommonResponseProps, IGenerateOtpInputProps>(
    //   {
    //     query: body => ({
    //       url: '/gen-otp/',
    //       method: 'POST',
    //       body,
    //     }),
    //   },
    // ),
   

  }),
});

export const {
useGetFinancialDataQuery,useGetSearchQuery
  
} = commonApi;
export type getFinancialDataReturnType = ReturnType<typeof useGetFinancialDataQuery>;
export type getSearchReturnType = ReturnType<typeof useGetSearchQuery>;



export const {
 getFinancialData,getSearch
} = commonApi.endpoints;
