import { createSlice } from '@reduxjs/toolkit'

/**
 * @type {import('@reduxjs/toolkit').ConfigureStoreOptions}
 * @description This function create slice for user.
 * @see https://redux-toolkit.js.org/api/createSlice
 */

const userSlice = createSlice({
  name: 'user',
  initialState: {
    firstname: '',
    lastname: '',
  },
  reducers: {
    setCredentials: (state, action) => {
      const { firstname, lastname } = action.payload
      state.firstname = firstname
      state.lastname = lastname
    },
  },
})

export const { setCredentials } = userSlice.actions

export default userSlice.reducer

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const selectCurrentFirstname = (state) =>
  state.user.firstname && capitalizeFirstLetter(state.user.firstname)
export const selectCurrentLastname = (state) =>
  state.user.lastname && capitalizeFirstLetter(state.user.lastname)
