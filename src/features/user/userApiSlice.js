import { apiSlice } from '../../app/api/apiSlice'

/**
 * @type {import('@reduxjs/toolkit').ConfigureStoreOptions}
 * @description This function is called by the baseQuery to make the actual request.
 */

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserData: builder.mutation({
      query: () => ({
        url: '/user/profile',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${
            localStorage.getItem('token') || sessionStorage.getItem('token')
          }`,
        },
      }),
    }),
    UpdateUserData: builder.mutation({
      query: (credentials) => ({
        url: '/user/profile',
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${
            localStorage.getItem('token') || sessionStorage.getItem('token')
          }`,
        },
        body: { ...credentials },
      }),
    }),
  }),
})

export const { useGetUserDataMutation, useUpdateUserDataMutation } =
  userApiSlice
