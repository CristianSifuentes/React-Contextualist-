import { FormEvent, useState } from 'react';
import { useTodo } from '../context/useTodo';

/** Input + dispatch component */
export const AddTodo = () => {
  const { dispatch } = useTodo();
  const [text, setText] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (text.trim()) {
      dispatch({ type: 'add', text });
      setText('');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="stack-row">
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="What needs doing?"
      />
      <button type="submit">Add</button>
    </form>
  );
};
