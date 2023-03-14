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
        console.log(state.firstname)
      }
  },
})

export const { setCredentials } = userSlice.actions

export default userSlice.reducer

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const selectCurrentFirstname = (state) => capitalizeFirstLetter(state.user.firstname)
export const selectCurrentLastname = (state) => capitalizeFirstLetter(state.user.lastname)