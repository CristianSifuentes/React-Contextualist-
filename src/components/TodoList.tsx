import { useTodo } from '../context/useTodo';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
  const { todos } = useTodo();
  if (!todos.length) return <p>No todos yet 🎉</p>;

  return (
    <ul className="stack">
      {todos.map(t => (
        <TodoItem key={t.id} todo={t} />
      ))}
    </ul>
  );
};
