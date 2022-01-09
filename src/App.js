import React from 'react';
import { TodoList } from './components/TodoList';
import { InputField } from './components/InputField';

import './App.css';

function App() {
  const [todos, setTodos] = React.useState([]);
  const [text, setText] = React.useState('');

  const addTodo = () => {
    if (!text.trim().length) return;

    setTodos([
      ...todos,
      {
        id: new Date().toISOString(),
        text,
        completed: false,
      }
    ]);

    setText('');
  };

  const toggleTodoCompete = (todoID) => {
    setTodos(
      todos.map(todo => {
        if (todo.id !== todoID) return todo;
        return {
          ...todo,
          completed: !todo.completed,
        }
      })
    )
  };

  const removeTodo = (todoID) => {
    setTodos(todos.filter(todo => todo.id !== todoID))
  }

  return (
    <div className="App">
      <InputField text={text} addTodo={addTodo} setText={setText} />
      <hr />
      <TodoList todos={todos} toggleTodoCompete={toggleTodoCompete} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
