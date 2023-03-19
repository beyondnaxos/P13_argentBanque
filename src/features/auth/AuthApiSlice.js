import { apiSlice } from '../../app/api/apiSlice'

/**
 * @type {import('@reduxjs/toolkit').ConfigureStoreOptions}
 * @description This function is called by the baseQuery to make the actual request.
 */

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/user/login',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
  }),
})

export const { useLoginMutation } = authApiSlice
