import { TodoProvider } from './context/TodoProvider';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';

export default function App() {
  return (
    <TodoProvider>
      <main className="card">
        <h1>📝 Todo (React 19)</h1>
        <AddTodo />
        <TodoList />
      </main>
    </TodoProvider>
  );
}
