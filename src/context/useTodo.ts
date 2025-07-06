import { useContext } from 'react';
import { TodoContext } from './TodoContext';

/**
 * Custom hook that exposes the context and ensures the caller
 * is wrapped in <TodoProvider>. Avoids repetitive useContext imports.
 */
export function useTodo() {
  const ctx = useContext(TodoContext);
  if (!ctx) {
    throw new Error('useTodo must be used inside <TodoProvider>');
  }
  return ctx;
}
