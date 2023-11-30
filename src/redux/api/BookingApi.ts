import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const Booking_URL = "/bookings";

export const bookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getBooking: build.query({
      query: () => ({
        url: `${Booking_URL}`,
        method: "GET",
      }),
      providesTags: [tagTypes.booking],
    }),

    createBooking: build.mutation({
      query: (data) => ({
        url: `${Booking_URL}`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.booking],
    }),

    deleteBooking: build.mutation({
      query: (id) => ({
        url: `${Booking_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.booking],
    }),
  }),
});

export const {
  useGetBookingQuery,
  useCreateBookingMutation,
  useDeleteBookingMutation,
} = bookingApi;
