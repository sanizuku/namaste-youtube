import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: false, // Initial theme (light mode)
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode; // Toggle between light and dark mode
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
