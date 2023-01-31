import { configureStore } from "@reduxjs/toolkit";
import checkSlice from "./resolvers/checkSlice";

const store = configureStore({
  reducer: {
    checkbox: checkSlice,
  },
});

export default store;
