import React from 'react';

const TodoCard = ({ item }) => {
  console.log(item);

  return (
    <li>
      <span>{item.id}</span>：<span>{item.content}</span>
    </li>
  );
};

export default TodoCard;
