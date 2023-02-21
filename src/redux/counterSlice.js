import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addName: (state, { payload }) => {
      console.log(payload);
      state.username = payload;
    },
  },
});

export const { addName } = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
