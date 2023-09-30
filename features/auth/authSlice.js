const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  accessToken: "",
  user: {},
  isUser: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
      state.isUser = true;
    },
    userLoggedOut: (state) => {
      state.accessToken = "";
      state.isUser = false;
      state.user = {};
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;
