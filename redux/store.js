import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./resolvers/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default store;
