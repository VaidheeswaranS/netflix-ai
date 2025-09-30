import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearchView: false,
    gptSuggestedMovies: null,
    gptSuggestedMovieResults: null,
    isLoading: false,
  },
  reducers: {
    showGptToggleView: (state) => {
      state.gptSearchView = !state.gptSearchView;
    },
    setGptLoading: (state, action) => {
      state.isLoading = action.payload === true;
    },
    addGptSuggestedMovies: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.gptSuggestedMovies = movieNames;
      state.gptSuggestedMovieResults = movieResults;
      state.isLoading = false;
    },
    removeGptSuggestedMovies: (state, action) => {
      state.gptSuggestedMovies = null;
      state.gptSuggestedMovieResults = null;
      state.isLoading = false;
    },
  },
});

export const {
  showGptToggleView,
  setGptLoading,
  addGptSuggestedMovies,
  removeGptSuggestedMovies,
} = gptSlice.actions;

export default gptSlice.reducer;
