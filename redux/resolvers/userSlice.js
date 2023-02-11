const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  user: {},
};

const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state, action) => {
      state.user = {};
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
