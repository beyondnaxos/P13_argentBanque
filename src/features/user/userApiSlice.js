import { apiSlice } from '../../app/api/apiSlice'
import { useSelector } from 'react-redux'
import { selectCurrentToken } from '../auth/AuthSlice'

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserData: builder.mutation({
      query: () => ({
        url: '/user/profile',
        method: 'POST',
        headers: { Authorization: `Bearer ${localStorage.getItem('token') || sessionStorage.getItem('token')}` }
      }),
    }),
    UpdateUserData: builder.mutation({
      query: (credentials) => ({
        url: '/user/profile',
        method: 'PUT',
        headers: { Authorization: `Bearer ${localStorage.getItem('token') || sessionStorage.getItem('token')}` },
        body: { ...credentials },
      }),
    })
  }),
})


export const { useGetUserDataMutation, useUpdateUserDataMutation } = userApiSlice

