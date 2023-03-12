import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    firstname: null,
    lastname: null,
  },
  reducers: {
    setCredentials: (state, action) => {
        const {firstname, lastname} = action.payload
        state.firstname = firstname
        state.lastname = lastname
    }
  },
})

export const { setCredentials } = userSlice.actions

export default userSlice.reducer

export const selectCurrentFirstname = (state) => state.user.firstname
export const selectCurrentLastname = (state) => state.user.lastname