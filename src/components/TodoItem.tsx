import { memo } from 'react';
import { Todo } from '../context/TodoContext';
import { useTodo } from '../context/useTodo';

export const TodoItem = memo(({ todo }: { todo: Todo }) => {
  const { dispatch } = useTodo();

  return (
    <li className={todo.done ? 'done' : ''}>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => dispatch({ type: 'toggle', id: todo.id })}
      />
      {todo.text}
      <button onClick={() => dispatch({ type: 'remove', id: todo.id })}>✕</button>
    </li>
  );
});
