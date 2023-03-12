import { apiSlice } from '../../app/api/apiSlice'
import { useSelector } from 'react-redux'
import { selectCurrentToken } from '../auth/AuthSlice'

const token = useSelector(selectCurrentToken)
export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/user/profile',
        method: 'PUT',
        headers: { Authorization: `Bearer ${token}` },
        body: { ...credentials },
      }),
    }),
  }),
})

export const { useLoginMutation } = userApiSlice
