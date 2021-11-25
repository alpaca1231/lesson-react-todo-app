import React from 'react';
import TodoCard from './TodoCard';

const TodoList = ({ todoList, removeTodo }) => {
  // console.log('親から受け取ったProps', todoList);

  return (
    <>
      <h1>Todoリスト</h1>
      <ul>
        {todoList.map((item) => {
          // console.log('これはmapで取り出した１つ ：', item);
          return <TodoCard key={item.id} todo={item} removeTodo={removeTodo} />;
        })}

        {/* 
        <TodoCard todo={todoList[0]} />
        <TodoCard todo={todoList[1]} />
        <TodoCard todo={todoList[2]} /> 
        */}
      </ul>
    </>
  );
};

export default TodoList;
