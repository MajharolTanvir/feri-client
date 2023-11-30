import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const WEIGHT_URL = "/weights";

export const weightApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getWeight: build.query({
      query: () => ({
        url: `${WEIGHT_URL}`,
        method: "GET",
      }),
      providesTags: [tagTypes.weights],
    }),

    createWeight: build.mutation({
      query: (data) => ({
        url: `${WEIGHT_URL}`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.weights],
    }),

    updateWeight: build.mutation({
      query: (values) => ({
        url: `${WEIGHT_URL}/${values?.id}`,
        method: "PATCH",
        data: values?.body,
      }),
      invalidatesTags: [tagTypes.weights],
    }),

    deleteWeight: build.mutation({
      query: (id) => ({
        url: `${WEIGHT_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.weights],
    }),
  }),
});

export const {
  useGetWeightQuery,
  useCreateWeightMutation,
  useUpdateWeightMutation,
  useDeleteWeightMutation,
} = weightApi;
