import { createSlice } from '@reduxjs/toolkit'

/**
 * @type {import('@reduxjs/toolkit').ConfigureStoreOptions}
 * @description This function create slice for auth.
 * @see https://redux-toolkit.js.org/api/createSlice
 */

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    email: null,
    token: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      const { email, accessToken } = action.payload
      state.email = email
      state.token = accessToken || localStorage.getItem('token')
    },
    logOut: (state) => {
      localStorage.removeItem('token')
      sessionStorage.removeItem('token')
      state.email = null
      state.token = null
    },
  },
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentEmail = (state) => state.auth.email
export const selectCurrentToken = (state) => state.auth.token
