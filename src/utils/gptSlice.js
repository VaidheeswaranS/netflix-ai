import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearchView: false,
    gptSuggestedMovies: null,
    gptSuggestedMovieResults: null,
  },
  reducers: {
    showGptToggleView: (state) => {
      state.gptSearchView = !state.gptSearchView;
    },
    addGptSuggestedMovies: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.gptSuggestedMovies = movieNames;
      state.gptSuggestedMovieResults = movieResults;
    },
  },
});

export const { showGptToggleView, addGptSuggestedMovies } = gptSlice.actions;

export default gptSlice.reducer;
