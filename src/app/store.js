import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import authReducer from '../features/auth/AuthSlice';
import userReducer from '../features/user/UserSlice';

/**
 * @type {import('@reduxjs/toolkit').ConfigureStoreOptions}
 * @description This function is called by the baseQuery to make the actual request.
 * @see https://redux-toolkit.js.org/api/configureStore
 * @see https://redux-toolkit.js.org/api/getDefaultMiddleware
 */


export default configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});

