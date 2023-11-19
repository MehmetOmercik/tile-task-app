import { createSlice } from "@reduxjs/toolkit";

const taskInitialState = {
  editTask: false,
  editTaskObject: {
    id: 0,
    title: "",
    description: "",
    order: 1,
    type: "survey",
    tile: 0,
  },
};

export const taskSlice = createSlice({
  name: "tile",
  initialState: taskInitialState,
  reducers: {
    updateEditTask: (state, action) => {
      state.editTask = action.payload;
    },
    updateEditTaskObject: (state, action) => {
      switch (action.payload.type) {
        case "UPDATE_PROPERTY":
          return {
            ...state,
            editTaskObject: {
              ...state.editTaskObject,
              [action.payload.property]: action.payload.value,
            },
          };
        case "UPDATE_OBJECT":
          return {
            ...state,
            editTaskObject: action.payload.payload,
          };
      }
    },
  },
});

export const { updateEditTask, updateEditTaskObject } = taskSlice.actions;

export default taskSlice.reducer;
