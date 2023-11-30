import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const COLOR_URL = "/colors";

export const colorApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getColor: build.query({
      query: () => ({
        url: `${COLOR_URL}`,
        method: "GET",
      }),
      providesTags: [tagTypes.color],
    }),

    createColor: build.mutation({
      query: (data) => ({
        url: `${COLOR_URL}`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.color],
    }),

    updateColor: build.mutation({
      query: (values) => ({
        url: `${COLOR_URL}/${values?.id}`,
        method: "PATCH",
        data: values?.body,
      }),
      invalidatesTags: [tagTypes.color],
    }),

    deleteColor: build.mutation({
      query: (id) => ({
        url: `${COLOR_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.color],
    }),
  }),
});

export const {
  useGetColorQuery,
  useCreateColorMutation,
  useUpdateColorMutation,
  useDeleteColorMutation,
} = colorApi;
