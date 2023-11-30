import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const ADD_TO_CART_URL = "/add-to-cart";

export const addToCartApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAddToCart: build.query({
      query: () => ({
        url: `${ADD_TO_CART_URL}`,
        method: "GET",
      }),
      providesTags: [tagTypes.addToCart],
    }),

    createAddToCart: build.mutation({
      query: (data) => ({
        url: `${ADD_TO_CART_URL}`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.addToCart],
    }),

    deleteAddToCart: build.mutation({
      query: (id) => ({
        url: `${ADD_TO_CART_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.addToCart],
    }),
  }),
});

export const {
  useGetAddToCartQuery,
  useCreateAddToCartMutation,
  useDeleteAddToCartMutation,
} = addToCartApi;
