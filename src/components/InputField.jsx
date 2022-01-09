import React from 'react';

export const InputField = ({ text, addTodo, setText }) => {
  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  )
}
