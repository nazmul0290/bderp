const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  token: "",
  user: {},
};

const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    setUser: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    removeUser: (state, action) => {
      state.token = "";
      state.user = {};
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
