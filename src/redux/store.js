import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import { baseApi } from "../api/baseApi";
import persistReducer from "redux-persist/es/persistReducer";
import { persistConfig } from "./persist";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import { setupListeners } from "@reduxjs/toolkit/query";

const reducers = {
  auth: authReducer,
  [baseApi.reducerPath]: baseApi.reducer,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers(reducers)
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
          "base/executeMutation/pending",
          "base/executeMutation/fulfilled",
          "base/executeMutation/rejected",
        ],
        ignorePaths: ["base.mutations", "base.mutations.error.meta.request"],
      },
    }).concat(baseApi.middleware),
  // devTools: process.env.NODE_ENV !== "production",
  devTools: true,
});
setupListeners(store.dispatch);
export const persistor = persistStore(store);
