import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const LOCAL_DISCOUNT_URL = "/local-discounts";

export const localDiscountApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getLocalDiscounts: build.query({
      query: () => ({
        url: `${LOCAL_DISCOUNT_URL}`,
        method: "GET",
      }),
      providesTags: [tagTypes.localDiscount],
    }),

    getLocalDiscount: build.query({
      query: (id) => ({
        url: `${LOCAL_DISCOUNT_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.localDiscount],
    }),

    createLocalDiscount: build.mutation({
      query: (data) => ({
        url: `${LOCAL_DISCOUNT_URL}`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.localDiscount],
    }),

    deleteLocalDiscount: build.mutation({
      query: (id) => ({
        url: `${LOCAL_DISCOUNT_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.localDiscount],
    }),
  }),
});

export const {
  useGetLocalDiscountsQuery,
  useGetLocalDiscountQuery,
  useCreateLocalDiscountMutation,
  useDeleteLocalDiscountMutation,
} = localDiscountApi;
