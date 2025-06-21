import React from 'react';

const TodoItem = ({ todo, dispatch }) => {
  return (
    <li className="todo-item">
      <span
        onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          cursor: 'pointer',
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
