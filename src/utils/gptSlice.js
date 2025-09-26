import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearchView: false,
  },
  reducers: {
    showGptToggleView: (state) => {
      state.gptSearchView = !state.gptSearchView;
    },
  },
});

export const { showGptToggleView } = gptSlice.actions;

export default gptSlice.reducer;
