import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const PRODUCTS_URL = "/products";

export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => ({
        url: `${PRODUCTS_URL}`,
        method: "GET",
      }),
      providesTags: [tagTypes.products],
    }),

    getProduct: build.query({
      query: (id) => ({
        url: `${PRODUCTS_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.products],
    }),

    createProduct: build.mutation({
      query: (data) => ({
        url: `${PRODUCTS_URL}`,
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.products],
    }),

    updateProduct: build.mutation({
      query: (values) => ({
        url: `${PRODUCTS_URL}/${values?.id}`,
        method: "PATCH",
        data: values?.body,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.products],
    }),

    deleteProduct: build.mutation({
      query: (id) => ({
        url: `${PRODUCTS_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.products],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
