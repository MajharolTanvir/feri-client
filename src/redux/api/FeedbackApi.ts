import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const FEEDBACK_URL = "/feedbacks";

export const feedbackApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getFeedbacks: build.query({
      query: () => ({
        url: `${FEEDBACK_URL}`,
        method: "GET",
      }),
      providesTags: [tagTypes.feedback],
    }),

    getFeedback: build.query({
      query: (id) => ({
        url: `${FEEDBACK_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.feedback],
    }),

    createFeedback: build.mutation({
      query: (data) => ({
        url: `${FEEDBACK_URL}`,
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
    }),

    deleteFeedback: build.mutation({
      query: (id) => ({
        url: `${FEEDBACK_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.feedback],
    }),
  }),
});

export const {
  useGetFeedbacksQuery,
  useGetFeedbackQuery,
  useCreateFeedbackMutation,
  useDeleteFeedbackMutation,
} = feedbackApi;
