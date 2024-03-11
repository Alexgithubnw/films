import { createSlice } from "@reduxjs/toolkit";

export const valueSlice = createSlice({
  name: "value",
  initialState: {
    value: " ",
  },
  reducers: {
    valueSearch: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { valueSearch } = valueSlice.actions;

export const selectValue = (state) => state.value.value;

export default valueSlice.reducer;
