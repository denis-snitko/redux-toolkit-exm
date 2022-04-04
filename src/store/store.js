import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoSlice';
import isShowReducer from './isShowSlice';
import inputValueReducer from './inputSlice';

export default configureStore({
  reducer: {
    todos: todoReducer,
    isShow: isShowReducer,
    inputValue: inputValueReducer,
  }
});