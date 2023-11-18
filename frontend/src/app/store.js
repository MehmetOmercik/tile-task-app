import { configureStore } from "@reduxjs/toolkit";
import tileReducer from "../components/tile/tileSlice";
import taskReducer from "../components/task/taskSlice";

export const store = configureStore({
  reducer: {
    tile: tileReducer,
    task: taskReducer,
  },
});

export default store;
