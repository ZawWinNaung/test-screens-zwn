import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  isLoggedIn: false,
  username: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addName: (state, { payload }) => {
      console.log(payload);
      state.username = payload;
    },
    setSignIn: (state, { payload }) => {
      state.isLoggedIn = payload.isLoggedIn;
      state.username = payload.userName;
      storeData("token", payload.userName + ".auth");
      console.log(payload);
    },
    setSignOut: (state) => {
      state.username = null;
      state.isLoggedIn = false;
      removeItemValue("token");
    },
    setAuthStatus: (state, { payload }) => {
      state.isLoggedIn = payload;
    },
  },
});

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log("setItem", e);
  }
};

const removeItemValue = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log("removeItem", e);
  }
};

export const { addName, setSignIn, setSignOut, setAuthStatus } =
  authSlice.actions;
const authReducer = authSlice.reducer;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUserName = (state) => state.auth.username;

export default authReducer;
