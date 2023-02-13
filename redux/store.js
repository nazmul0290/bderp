import { configureStore } from "@reduxjs/toolkit";
import invoiceSlice from "./resolvers/invoiceSlice";
import userSlice from "./resolvers/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    invoice: invoiceSlice,
  },
});

export default store;
