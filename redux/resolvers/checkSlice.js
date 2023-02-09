import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checkboxArr: [],
};

const checkSlice = createSlice({
  initialState,
  name: "checkbox",
  reducers: {
    addOrRemoveCheck: (state, action) => {
      const index = state.checkboxArr.indexOf(action.payload);
      if (index < 0) {
        state.checkboxArr.push(action.payload);
      } else {
        state.checkboxArr = state.checkboxArr.filter(
          (item) => item !== action.payload
        );
      }
    },
  },
});

export const { addOrRemoveCheck } = checkSlice.actions;
export default checkSlice.reducer;
