import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const USERS_URL = "/users";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    signup: build.mutation({
      query: (data) => ({
        url: `${USERS_URL}/signup`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    confirmedSignUp: build.mutation({
      query: (data) => ({
        url: `${USERS_URL}/confirm-signup`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    login: build.mutation({
      query: (data) => ({
        url: `${USERS_URL}/signin`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    forgetPassword: build.mutation({
      query: (data) => ({
        url: `${USERS_URL}/forget-password`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    resetPassword: build.mutation({
      query: (values) => ({
        url: `${USERS_URL}/reset-password?token=${values.token}`,
        method: "POST",
        data: values.values,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useSignupMutation,
  useConfirmedSignUpMutation,
  useLoginMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation,
} = authApi;
