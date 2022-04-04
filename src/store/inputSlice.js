import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
  name: 'inputValue',
  initialState: {
    value: 'dfd',
  },
  reducers: {
    changeValue(state, { payload: { value } }) {
      state.value = value;
    },
  },
});

export const { changeValue } = inputSlice.actions;
export default inputSlice.reducer;