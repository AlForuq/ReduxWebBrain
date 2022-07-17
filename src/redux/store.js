import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Counter";
import studentReducer from "./Student";

export const store = configureStore({
  reducer: {
    counterDemo: counterReducer,
    studentDemo: studentReducer,
  },
});
