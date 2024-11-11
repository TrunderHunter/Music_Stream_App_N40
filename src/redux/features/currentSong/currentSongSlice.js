import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  song: null,
  isPlaying: false,
  currentTime: 0,
  playlist: [],
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
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
    setPlaylist: (state, action) => {
      state.playlist = action.payload;
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
    nextSong: (state) => {
      const currentIndex = state.playlist.findIndex(
        (song) => song.id === state.song.id
      );
      if (currentIndex >= 0 && currentIndex < state.playlist.length - 1) {
        state.song = state.playlist[currentIndex + 1];
        state.currentTime = 0;
        state.isPlaying = true;
      }
    },
    prevSong: (state) => {
      const currentIndex = state.playlist.findIndex(
        (song) => song.id === state.song.id
      );
      if (currentIndex > 0) {
        state.song = state.playlist[currentIndex - 1];
        state.currentTime = 0;
        state.isPlaying = true;
      }
    },
    playRandomSong: (state) => {
      if (state.playlist.length > 0) {
        state.playlist = shuffleArray([...state.playlist]);
        const randomIndex = Math.floor(Math.random() * state.playlist.length);
        state.song = state.playlist[randomIndex];
        state.currentTime = 0;
        state.isPlaying = true;
      }
    },
  },
});

export const {
  setSong,
  setPlaylist,
  playPause,
  updateTime,
  closeSong,
  nextSong,
  prevSong,
  playRandomSong,
} = currentSongSlice.actions;
export default currentSongSlice.reducer;
