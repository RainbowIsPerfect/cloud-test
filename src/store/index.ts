import { configureStore } from '@reduxjs/toolkit';
import { formReducer } from './slices/formSlice';
import { formApi } from './api/api';

export const store = configureStore({
  reducer: {
    form: formReducer,
    [formApi.reducerPath]: formApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(formApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
