import { createSlice } from "@reduxjs/toolkit";
import { isoStringDateFunc } from "../../utils/helpers";

const tileInitialState = {
  editTile: false,
  editTileObject: {
    launchDate: isoStringDateFunc(),
    status: "",
  },
};

export const tileSlice = createSlice({
  name: "tile",
  initialState: tileInitialState,
  reducers: {
    updateEditTile: (state, action) => {
      state.editTile = action.payload;
    },
    updateEditTileObject: (state, action) => {
      switch (action.payload.type) {
        case "UPDATE_PROPERTY":
          return {
            ...state,
            editTileObject: {
              ...state.editTileObject,
              [action.payload.property]: action.payload.value,
            },
          };
        case "UPDATE_OBJECT":
          return {
            ...state,
            editTileObject: action.payload.payload,
          };
      }
    },
  },
});

export const { updateEditTile, updateEditTileObject } = tileSlice.actions;

export default tileSlice.reducer;
