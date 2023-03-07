import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { setCredentials, logOut } from '../../features/auth/AuthSlice'

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3500',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }
    return headers
  },
})

export const apiSlice = createApi({
  baseQuery: baseQuery,
  endpoints: builder => ({})
})

// const baseQueryWithReauth = async (args, api, extraOptions) => {
//   let result = await baseQuery(args, api, extraOptions)
//   if (result?.error?.originalStatus === 403) {
//     console.log('sending refresh token')
//     // send refresh token to get new access token
//     const refreshResult = await baseQuery('/refresh', api, extraOptions)
//     console.log(refreshResult)
//     if (refreshResult?.data) {
//       const user = api.getState().auth.user
//       // store the new token
//       api.dispatch(setCredentials({ ...refreshResult.data, user }))
//       // retry the original query with the new token
//       result = await baseQuery(args, api, extraOptions)
//     } else {
//       api.dispatch(logOut())
//     }
//   }
//   return result
// }

