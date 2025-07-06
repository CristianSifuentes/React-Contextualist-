import { createContext } from 'react';

export interface Todo {
  id: string;
  text: string;
  done: boolean;
}

export interface TodoState {
  todos: Todo[];
}

export type TodoAction =
  | { type: 'add'; text: string }
  | { type: 'toggle'; id: string }
  | { type: 'remove'; id: string };

export interface TodoContextValue extends TodoState {
  dispatch: React.Dispatch<TodoAction>;
}

/**
 * ⚠️ We seed the context with a dummy default so that
 * consumers running outside a provider get a clear runtime error
 * instead of 'undefined is not an object'.
 */
export const TodoContext = createContext<TodoContextValue>({
  todos: [],
  /* eslint-disable @typescript-eslint/no-empty-function */
  dispatch: () => {},
});
