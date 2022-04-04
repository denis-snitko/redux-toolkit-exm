import { createSlice } from "@reduxjs/toolkit";

const isShowSlice = createSlice({
  name: 'isShow',
  initialState: { isShow: false },

  reducers: {
    toggleIsShow(state) {
      state.isShow = !state.isShow;
    },
  },
});

export const { toggleIsShow } = isShowSlice.actions;
export default isShowSlice.reducer;