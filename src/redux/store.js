import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filterSlice';
import { contactApi } from './contactSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/auth-slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    [filterSlice.name]: filterSlice.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactApi.middleware,
  ],
});

export const persistor = persistStore(store);
