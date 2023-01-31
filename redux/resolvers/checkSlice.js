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
      console.log(index);
      if (index < 0) {
        state.checkboxArr.push(action.payload);
      } else {
        console.log("hello");
        state.checkboxArr.slice(index, 1);
      }
    },
  },
});

export const { addOrRemoveCheck } = checkSlice.actions;
export default checkSlice.reducer;
