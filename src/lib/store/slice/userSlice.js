import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoggedIn: false,
  source: "", // "google" or "local"
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.source = action.payload.source;
    },
    clearUser(state) {
      state.user = null;
      state.isLoggedIn = false;
      state.source = "";
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
