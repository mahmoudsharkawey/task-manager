import { createSlice } from "@reduxjs/toolkit";


export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
  },
  reducers: {
    addTasks: (state: any, action: any) => {
      state.items.push(action.payload);
      console.log(action);
    },
    delTasks: (state: any, action: any) => {
      state.items = state.items.filter(
        (item: any) => item.id !== action.payload
      );
    },
    UpDateTasks: (state: any, action: any) => {
      state.items.map((item: any) => {
        if (item.id === action.payload.id) {
            item.title = action.payload.title;
            item.des = action.payload.des ;
        }
      });
    },
  },
});

export const { addTasks, delTasks, UpDateTasks}: any = tasksSlice.actions;

export default tasksSlice.reducer;
