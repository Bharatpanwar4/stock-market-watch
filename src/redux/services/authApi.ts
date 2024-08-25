import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// import {
//   ICommonResponseProps,
//   IForgotClientIdInputProps,
//   IForgotClientIdResponseProps,
//   IForgotPinInputProps,
//   IGenerateOtpInputProps,
//   IRefreshTokenInputProps,
//   IRefreshTokenResponseProps,
//   ISetClientPinInputProps,
//   ISetClientPinResponseProps,
//   IVerifyClientInputProps,
//   IVerifyClientResponeProps,
//   IVerifyOtpInputProps,
//   IVerifyOtpResponseProps,
//   IVerifyPinInputProps,
//   IVerifyPinResponseProps,
//   IVerifyPrePasswordInputProps,
// } from '@/src/utils/types';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  endpoints: builder => ({
    verifyClient: builder.mutation< any,any
    >({
      query: body => ({
        url: '/verify-contact/',
        method: 'POST',
        body,
      }),
    }),
    refreshToken: builder.mutation<
      IRefreshTokenResponseProps,
      IRefreshTokenInputProps
    >({
      query: body => ({
        url: '/refresh-token/',
        method: 'POST',
        body,
      }),
    }),
    generateOtp: builder.mutation<ICommonResponseProps, IGenerateOtpInputProps>(
      {
        query: body => ({
          url: '/gen-otp/',
          method: 'POST',
          body,
        }),
      },
    ),
    verifyOtp: builder.mutation<IVerifyOtpResponseProps, IVerifyOtpInputProps>({
      query: body => ({
        url: '/verify-otp/',
        method: 'POST',
        body,
      }),
    }),
    setClientPin: builder.mutation<
      ISetClientPinResponseProps,
      ISetClientPinInputProps
    >({
      query: body => ({
        url: '/set-pin/',
        method: 'POST',
        body,
      }),
    }),
    verifyPin: builder.mutation<IVerifyPinResponseProps, IVerifyPinInputProps>({
      query: body => ({
        url: '/login-pin/',
        method: 'POST',
        body,
      }),
    }),
    verifyPrePassword: builder.mutation<
      IVerifyClientResponeProps,
      IVerifyPrePasswordInputProps
    >({
      query: body => ({
        url: '/verify-pre-password/',
        method: 'POST',
        body,
      }),
    }),
    forgotPin: builder.mutation<
      IVerifyClientResponeProps,
      IForgotPinInputProps
    >({
      query: body => ({
        url: '/forgot-pin/',
        method: 'POST',
        body,
      }),
    }),
    forgotClientId: builder.mutation<
      IForgotClientIdResponseProps,
      IForgotClientIdInputProps
    >({
      query: body => ({
        url: '/forgot-cc/',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useVerifyClientMutation,
  useRefreshTokenMutation,
  useGenerateOtpMutation,
  useVerifyOtpMutation,
  useSetClientPinMutation,
  useVerifyPinMutation,
  useVerifyPrePasswordMutation,
  useForgotPinMutation,
  useForgotClientIdMutation,
} = authApi;
export type VerifyClientReturnType = ReturnType<typeof useVerifyClientMutation>;
export type RefreshTokenReturnType = ReturnType<typeof useRefreshTokenMutation>;
export type GenerateOtpReturnType = ReturnType<typeof useGenerateOtpMutation>;
export type VerifyOtpReturnType = ReturnType<typeof useVerifyOtpMutation>;
export type SetClinetPinReturnType = ReturnType<typeof useSetClientPinMutation>;
export type VerifyPinReturnType = ReturnType<typeof useVerifyPinMutation>;
export type VerifyPrePasswordReturnType = ReturnType<
  typeof useVerifyPrePasswordMutation
>;
export type ForgotPinReturnType = ReturnType<typeof useForgotPinMutation>;
export type ForgotClientIdReturnType = ReturnType<
  typeof useForgotClientIdMutation
>;

export const {
  verifyClient,
  refreshToken,
  verifyOtp,
  setClientPin,
  verifyPin,
  generateOtp,
  verifyPrePassword,
  forgotPin,
  forgotClientId,
} = authApi.endpoints;
