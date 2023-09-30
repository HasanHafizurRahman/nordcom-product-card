"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { apiSlice } from "../../../features/api/apiSlice";
import authSlice from "@/features/auth/authSlice";

const persistConfig = {
  key: "nordCom",
  version: 1,
  storage,
};
// Slice
const reducers = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);
// configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
