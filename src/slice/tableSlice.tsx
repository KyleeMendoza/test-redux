import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const TableSlice = createSlice({
  name: "table", // Make sure to use a string for the name
  initialState,
  reducers: {
    setData: (state, action) => {
      const { data } = action.payload;
      state.data = data;
    },
  },
});

export const { setData } = TableSlice.actions;

export default TableSlice.reducer;
