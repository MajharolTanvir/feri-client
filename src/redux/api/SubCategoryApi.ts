import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const SUBCATEGORIES_URL = "/subcategories";

export const subcategoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSubcategory: build.query({
      query: () => ({
        url: `${SUBCATEGORIES_URL}`,
        method: "GET",
      }),
      providesTags: [tagTypes.subcategory],
    }),

    createSubcategory: build.mutation({
      query: (data) => ({
        url: `${SUBCATEGORIES_URL}`,
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.subcategory],
    }),

    updateSubcategory: build.mutation({
      query: (values) => ({
        url: `${SUBCATEGORIES_URL}/${values?.id}`,
        method: "PATCH",
        data: values?.body,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.subcategory],
    }),

    deleteSubcategory: build.mutation({
      query: (id) => ({
        url: `${SUBCATEGORIES_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.subcategory],
    }),
  }),
});

export const {
  useGetSubcategoryQuery,
  useCreateSubcategoryMutation,
  useUpdateSubcategoryMutation,
  useDeleteSubcategoryMutation,
} = subcategoryApi;
