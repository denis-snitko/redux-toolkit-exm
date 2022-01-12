import React from 'react';
// import { useDispatch } from 'react-redux';
// import { addTodo } from './store/todoSlice';
// import { TodoList } from './components/TodoList';
// import { InputField } from './components/InputField';

import './App.css';
import { SimpleInput } from './components/SimpleInput';

function App() {
  const [inputValue, setInputValue] = React.useState({ login: '', pass: '', })
  console.log('inputValue: ', inputValue);
  // const [text, setText] = React.useState('');
  // const dispatch = useDispatch();

  return (
    <div className="App">
      {/* <InputField
        text={text}
        setText={setText}
        addTodo={() => {
          dispatch(addTodo({ text }))
          setText('')
        }} />
      <hr />
      <TodoList /> */}
      <label>
        <span>Login: </span>
        <SimpleInput type={'text'} name={'login'} value={inputValue.login} handleChange={setInputValue} />
      </label>
      <br />
      <label>
        <span>Pass: </span>
        <SimpleInput type={'password'} name={'pass'} value={inputValue.pass} handleChange={setInputValue} />
      </label>
    </div>
  );
}

export default App;
