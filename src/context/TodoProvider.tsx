'use client';
import { FC, PropsWithChildren, useReducer } from 'react';
import { nanoid } from 'nanoid';
import { TodoContext, TodoAction, TodoState, Todo } from './TodoContext';

/** Pure reducer keeps state transitions deterministic and easy to test. */
function todoReducer(state: TodoState, action: TodoAction): TodoState {
  switch (action.type) {
    case 'add':
      return {
        todos: [
          ...state.todos,
          { id: nanoid(6), text: action.text, done: false } as Todo,
        ],
      };
    case 'toggle':
      return {
        todos: state.todos.map(t =>
          t.id === action.id ? { ...t, done: !t.done } : t,
        ),
      };
    case 'remove':
      return {
        todos: state.todos.filter(t => t.id !== action.id),
      };
    default:
      return state;
  }
}

export const TodoProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, { todos: [] });

  /** React 19 automatically batches state updates inside dispatch. */
  return (
    <TodoContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
