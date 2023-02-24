import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./counterSlice";
import AuthReducers from "./reducers";

const RootReducers = combineReducers({ AuthReducers });

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
