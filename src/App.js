import React from 'react';
import { useDispatch } from 'react-redux';
import { TodoList } from './components/TodoList';
import { InputField } from './components/InputField';
import { toggleIsShow } from './store/isShowSlice';
import { GateContainer } from './components/GateContainer';

import './App.css';

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <InputField />
      <hr />
      <TodoList />
      <hr />
      <button onClick={() => dispatch(toggleIsShow())}>Show</button>
      <GateContainer>
        <div>
          <h1>Hello StackBlitz!</h1>
          <p>Start editing to see some magic happen :)</p>
        </div>
      </GateContainer>
    </div>
  );
}

export default App;
