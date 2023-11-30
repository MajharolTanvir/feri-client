import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const REVIEW_URL = "/reviews";

export const reviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getReview: build.query({
      query: () => ({
        url: `${REVIEW_URL}`,
        method: "GET",
      }),
      providesTags: [tagTypes.review],
    }),

    createReview: build.mutation({
      query: (data) => ({
        url: `${REVIEW_URL}`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.review],
    }),

    updateReview: build.mutation({
      query: (values) => ({
        url: `${REVIEW_URL}/${values?.id}`,
        method: "PATCH",
        data: values?.body,
      }),
      invalidatesTags: [tagTypes.review],
    }),

    createReply: build.mutation({
      query: (data) => ({
        url: `${REVIEW_URL}/reply`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.review],
    }),
  }),
});

export const {
  useGetReviewQuery,
  useCreateReviewMutation,
  useUpdateReviewMutation,
  useCreateReplyMutation,
} = reviewApi;
