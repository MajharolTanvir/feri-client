import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const PROFILE_URL = "/profile";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userProfile: build.query({
      query: () => ({
        url: `${PROFILE_URL}/user-profile`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),

    singleProfile: build.query({
      query: (id) => ({
        url: `${PROFILE_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),

    allProfile: build.query({
      query: () => ({
        url: `${PROFILE_URL}`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),

    profileUpdate: build.mutation({
      query: (data) => ({
        url: `${PROFILE_URL}`,
        method: "PATCH",
        data: data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.user],
    }),

    changeRole: build.mutation({
      query: (values) => ({
        url: `${PROFILE_URL}/change-role/${values.id}`,
        method: "PATCH",
        data: values.values,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useAllProfileQuery,
  useChangeRoleMutation,
  useUserProfileQuery,
  useSingleProfileQuery,
  useProfileUpdateMutation,
} = authApi;
