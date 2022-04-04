import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, { payload: { value } }) {
      if (!value) return;
      state.todos.push({
        id: new Date().toISOString(),
        text: value,
        completed: false,
      })
    },

    removeTodo(state, { payload: { id } }) {
      state.todos = state.todos.filter(todo => todo.id !== id)
    },

    toggleTodoCompete(state, { payload: { id } }) {
      const toggledTodo = state.todos.find(todo => todo.id === id);
      toggledTodo.completed = !toggledTodo.completed;
    },
  },
});

export const { addTodo, removeTodo, toggleTodoCompete } = todoSlice.actions;
export default todoSlice.reducer;