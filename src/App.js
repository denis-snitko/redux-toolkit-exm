import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './store/todoSlice';
import { TodoList } from './components/TodoList';
import { InputField } from './components/InputField';

import './App.css';

function App() {
  const [text, setText] = React.useState('');
  const dispatch = useDispatch();

  return (
    <div className="App">
      <InputField
        text={text}
        setText={setText}
        addTodo={() => {
          dispatch(addTodo({ text }))
          setText('')
        }} />
      <hr />
      <TodoList />
    </div>
  );
}

export default App;
