import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const CATEGORIES_URL = "/categories";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCategory: build.query({
      query: () => ({
        url: `${CATEGORIES_URL}`,
        method: "GET",
      }),
      providesTags: [tagTypes.category],
    }),

    createCategory: build.mutation({
      query: (data) => ({
        url: `${CATEGORIES_URL}`,
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.category],
    }),

    updateCategory: build.mutation({
      query: (values) => ({
        url: `${CATEGORIES_URL}/${values?.id}`,
        method: "PATCH",
        data: values?.body,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.category],
    }),

    deleteCategory: build.mutation({
      query: (id) => ({
        url: `${CATEGORIES_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.category],
    }),
  }),
});

export const {
  useGetCategoryQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation
} = categoryApi;
