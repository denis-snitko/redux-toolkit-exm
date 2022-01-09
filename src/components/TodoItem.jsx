import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodoCompete } from '../store/todoSlice';

export const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <li key={id}>
      <input
        className='checkbox'
        type="checkbox" checked={completed}
        onChange={() => dispatch(toggleTodoCompete({ id }))}
      />
      <div className='text'>{text}</div>
      <button className='delete' onClick={() => dispatch(removeTodo({ id }))}>&times;</button>
    </li>
  )
}
