import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  song: null,
  isPlaying: false,
  currentTime: 0,
};

const currentSongSlice = createSlice({
  name: "currentSong",
  initialState,
  reducers: {
    setSong: (state, action) => {
      state.song = action.payload;
      state.isPlaying = true;
      state.currentTime = 0;
    },
    playPause: (state) => {
      state.isPlaying = !state.isPlaying;
    },
    updateTime: (state, action) => {
      state.currentTime = action.payload;
    },
    closeSong: (state) => {
      state.song = null;
      state.isPlaying = false;
      state.currentTime = 0;
    },
  },
});

export const { setSong, playPause, updateTime, closeSong } =
  currentSongSlice.actions;
export default currentSongSlice.reducer;
