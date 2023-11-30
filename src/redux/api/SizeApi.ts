import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const SIZE_URL = "/sizes";

export const sizeApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSize: build.query({
      query: () => ({
        url: `${SIZE_URL}`,
        method: "GET",
      }),
      providesTags: [tagTypes.sizes],
    }),

    createSize: build.mutation({
      query: (data) => ({
        url: `${SIZE_URL}`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.sizes],
    }),

    updateSize: build.mutation({
      query: (values) => ({
        url: `${SIZE_URL}/${values?.id}`,
        method: "PATCH",
        data: values?.body,
      }),
      invalidatesTags: [tagTypes.sizes],
    }),

    deleteSize: build.mutation({
      query: (id) => ({
        url: `${SIZE_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.sizes],
    }),
  }),
});

export const {
  useGetSizeQuery,
  useCreateSizeMutation,
  useUpdateSizeMutation,
  useDeleteSizeMutation,
} = sizeApi;
