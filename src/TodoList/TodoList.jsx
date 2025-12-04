import { useState } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  const [name, setName] = useState('');

  function addTodo(e) {
    e.preventDefault();

    setTodos((prev) => [...prev, name]);
    setName('');
  }

  function changeName(e) {
    setName(e.target.value);
  }

  return (
    <>
      <form onSubmit={(e) => addTodo(e)}>
        <label htmlFor="todo">Todo</label>
        <input
          type="text"
          name="todo"
          id="todo"
          required
          value={name}
          onChange={(e) => changeName(e)}
        />
        <button type="submit">Add Todo</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </>
  );
}
