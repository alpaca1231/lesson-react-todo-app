import React from 'react';

const TodoCard = ({ todo, removeTodo }) => {
  return (
    <li>
      <button onClick={() => removeTodo(todo.id)}>削除</button>
      <span>{todo.content}</span>
    </li>
  );
};

export default TodoCard;
