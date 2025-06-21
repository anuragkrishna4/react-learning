import React, { useReducer, useState } from 'react';
import { todoReducer } from '../reducers/todoReducers';
import TodoItem from './TodoItem';

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim() !== '') {
      dispatch({ type: 'ADD_TODO', payload: input });
      setInput('');
    }
  };

  const completed = todos.filter(todo => todo.completed).length;
  const pending = todos.length - completed;

  return (
    <div className="todo-container">
      <h2>Todo List</h2>
      <div className="input-section">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task..."
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul className="todo-list">
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </ul>

      <p> Completed: {completed} | Pending: {pending}</p>
    </div>
  );
};

export default TodoApp;
