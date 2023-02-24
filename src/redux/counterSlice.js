import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  authToken: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addName: (state, { payload }) => {
      console.log(payload);
      state.username = payload;
    },
    login: (state, { payload }) => {
      state.authToken = payload;
    },
  },
});

export const { addName, login } = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
