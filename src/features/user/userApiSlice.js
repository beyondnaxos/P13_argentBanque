import { apiSlice } from "../../app/api/apiSlice"

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login : builder.mutation({
            query: credentials => ({
                url: '/user/profile', 
                method: 'PUT',
                body: {...credentials}
            })
        }),
        
    })
})

export const { useLoginMutation } = userApiSlice