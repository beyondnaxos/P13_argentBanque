import { createSlice } from '@reduxjs/toolkit'

const randomColorSlice = createSlice({
  name: 'randomColor',
  initialState: {
    colorGroup: [
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'indigo',
      'violet',
    ],
    value: '#282c34',
  },
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload
    },
    selectColor: (state) => {
      console.log(state.colorGroup)
      const randomColor =
        state.colorGroup[Math.floor(Math.random() * state.colorGroup.length)]
      state.value = randomColor
    },
  },
})

export const { changeColor, selectColor } = randomColorSlice.actions
export default randomColorSlice.reducer
