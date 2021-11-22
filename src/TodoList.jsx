import React from 'react';
import TodoCard from './TodoCard';

const TodoList = () => {
  const item = [
    { id: 1, content: 'タスク' },
    { id: 2, content: 'ダイパする' },
    { id: 3, content: '宇谷と飲み会' },
  ];

  return (
    <>
      <h1>Todoリスト</h1>
      <ul>
        <TodoCard item={item[0]} />
        <TodoCard item={item[1]} />
        <TodoCard item={item[2]} />
      </ul>
    </>
  );
};

export default TodoList;
