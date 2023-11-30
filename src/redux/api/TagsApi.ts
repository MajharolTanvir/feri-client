import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const TAGS_URL = "/tags";

export const tagsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTags: build.query({
      query: () => ({
        url: `${TAGS_URL}`,
        method: "GET",
      }),
      providesTags: [tagTypes.tags],
    }),

    createTags: build.mutation({
      query: (data) => ({
        url: `${TAGS_URL}`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.tags],
    }),

    updateTags: build.mutation({
      query: (values) => ({
        url: `${TAGS_URL}/${values?.id}`,
        method: "PATCH",
        data: values?.body,
      }),
      invalidatesTags: [tagTypes.tags],
    }),

    deleteTags: build.mutation({
      query: (id) => ({
        url: `${TAGS_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.tags],
    }),
  }),
});

export const {
  useGetTagsQuery,
  useCreateTagsMutation,
  useUpdateTagsMutation,
  useDeleteTagsMutation,
} = tagsApi;
