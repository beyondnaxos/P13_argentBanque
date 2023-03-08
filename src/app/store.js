import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import authReducer from '../features/auth/AuthSlice';
import counterReducer from '../features/counter/counterSlice';
import randomColorReducer from '../features/randomColor/RandomColorSlice';


export default configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    counter: counterReducer,
    randomColor: randomColorReducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});

