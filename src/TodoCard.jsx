import React from 'react';

const TodoCard = ({ todo }) => {
  return (
    <li>
      <span>{todo.id}</span>：<span>{todo.content}</span>
    </li>
  );
};

export default TodoCard;
