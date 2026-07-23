import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../src/slice/AuthSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});