import React from 'react';
import { addTodo } from '../store/todoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { changeValue } from '../store/inputSlice';

export const InputField = () => {
  const dispatch = useDispatch();
  const { value } = useSelector(state => state.inputValue);

  const clickHandler = () => {
    dispatch(addTodo({ value }))
    dispatch(changeValue({ value: '' }))
  }

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => dispatch(changeValue({ value: e.target.value }))}
      />
      <button onClick={clickHandler}>Add Todo</button>
    </div>
  )
}
