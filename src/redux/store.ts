import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import { UserInfo } from "../utils/type";

export const defaulUser: UserInfo = {
  id: "",
  isOnline: false,
  email: "",
  username: "",
  img: "",
  creationTime: "",
  lastSeen: "",
  bio: "",
};

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
