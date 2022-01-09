import { TodoItem } from './TodoItem';

export const TodoList = ({ todos, toggleTodoCompete, removeTodo }) => {
  return (
    <ul>{todos.map(todo => <TodoItem key={todo.id} {...todo} toggleTodoCompete={toggleTodoCompete} removeTodo={removeTodo} />)}</ul>
  )
}
