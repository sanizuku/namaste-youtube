import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import themeReducer from "./themeSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    theme: themeReducer,
  },
});

export default store;
