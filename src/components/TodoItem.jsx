export const TodoItem = ({ id, text, completed, toggleTodoCompete, removeTodo }) => {
  return (
    <li key={id}>
      <input className='checkbox' type="checkbox" checked={completed} onChange={() => toggleTodoCompete(id)} />
      <div className='text'>{text}</div>
      <button className='delete' onClick={() => removeTodo(id)}>&times;</button>
    </li>
  )
}
