import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const PROMOTIONS_URL = "/promotions";

export const promotionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPromotions: build.query({
      query: () => ({
        url: `${PROMOTIONS_URL}`,
        method: "GET",
      }),
      providesTags: [tagTypes.promotion],
    }),

    getPromotion: build.query({
      query: (id) => ({
        url: `${PROMOTIONS_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.promotion],
    }),

    createPromotion: build.mutation({
      query: (data) => ({
        url: `${PROMOTIONS_URL}`,
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.promotion],
    }),

    updatePromotion: build.mutation({
      query: (values) => ({
        url: `${PROMOTIONS_URL}/${values?.id}`,
        method: "PATCH",
        data: values?.body,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.promotion],
    }),

    deletePromotion: build.mutation({
      query: (id) => ({
        url: `${PROMOTIONS_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.promotion],
    }),
  }),
});

export const {
  useGetPromotionsQuery,
  useGetPromotionQuery,
  useCreatePromotionMutation,
  useUpdatePromotionMutation,
  useDeletePromotionMutation,
} = promotionApi;
