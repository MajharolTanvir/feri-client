import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const BLOGS_URL = "/blogs";

export const blogApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getBlogs: build.query({
      query: () => ({
        url: `${BLOGS_URL}`,
        method: "GET",
      }),
      providesTags: [tagTypes.blogs],
    }),

    getBlog: build.query({
      query: (id) => ({
        url: `${BLOGS_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.blogs],
    }),

    createBlog: build.mutation({
      query: (data) => ({
        url: `${BLOGS_URL}`,
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.blogs],
    }),

    updateBlog: build.mutation({
      query: (values) => ({
        url: `${BLOGS_URL}/${values?.id}`,
        method: "PATCH",
        data: values?.body,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.blogs],
    }),

    deleteBlog: build.mutation({
      query: (id) => ({
        url: `${BLOGS_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.blogs],
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useGetBlogQuery,
  useCreateBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogApi;
