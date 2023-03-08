import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    // useSelector
  name: 'counter',
  initialState: {
    value: 0,
  },
//   useDispatch ( called with dispatch(methodName()) )
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    reset : (state) => {
        state.value = 0
    },
    incrementByAmmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, reset, incrementByAmmount } = counterSlice.actions

export default counterSlice.reducer