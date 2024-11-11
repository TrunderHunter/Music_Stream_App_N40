import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import currentSongReducer from "./features/currentSong/currentSongSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    currentSong: currentSongReducer,
  },
});

export default store;
