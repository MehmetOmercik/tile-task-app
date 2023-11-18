import { configureStore } from "@reduxjs/toolkit";
import tileReducer from "../components/tile/tileSlice";

export const store = configureStore({
  reducer: {
    tile: tileReducer,
  },
});

export default store;
