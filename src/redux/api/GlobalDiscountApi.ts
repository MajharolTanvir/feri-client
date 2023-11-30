import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const GLOBAL_DISCOUNT_URL = "/global-discounts";

export const globalDiscountApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getGlobalDiscounts: build.query({
      query: () => ({
        url: `${GLOBAL_DISCOUNT_URL}`,
        method: "GET",
      }),
      providesTags: [tagTypes.globalDiscount],
    }),

    getGlobalDiscount: build.query({
      query: (id) => ({
        url: `${GLOBAL_DISCOUNT_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.globalDiscount],
    }),

    createGlobalDiscount: build.mutation({
      query: (data) => ({
        url: `${GLOBAL_DISCOUNT_URL}`,
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.globalDiscount],
    }),

    updateGlobalDiscount: build.mutation({
      query: (values) => ({
        url: `${GLOBAL_DISCOUNT_URL}/${values?.id}`,
        method: "PATCH",
        data: values?.body,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.globalDiscount],
    }),

    deleteGlobalDiscount: build.mutation({
      query: (id) => ({
        url: `${GLOBAL_DISCOUNT_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.globalDiscount],
    }),
  }),
});

export const {
  useGetGlobalDiscountsQuery,
  useGetGlobalDiscountQuery,
  useCreateGlobalDiscountMutation,
  useUpdateGlobalDiscountMutation,
  useDeleteGlobalDiscountMutation,
} = globalDiscountApi;
