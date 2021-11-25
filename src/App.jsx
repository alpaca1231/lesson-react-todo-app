import { useState } from 'react';
import TodoList from './TodoList';
import InputForm from './InputForm';
// import Count from './Count';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, content: 'タスク' },
    { id: 2, content: 'ダイパする' },
    { id: 3, content: '宇谷と飲み会' },
  ]);

  const [count, setCount] = useState(todoList.length + 1);

  const newId = () => {
    setCount(count + 1);
    return count;
  };

  const addTodo = (value) => {
    setTodoList([...todoList, { id: newId(), content: value }]);
  };

  const removeTodo = (id) => {
    const newTodoList = todoList.filter((item) => {
      if (id === item.id) {
        return false;
      } else {
        return true;
      }
    });
    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <h1>はろーわーるど</h1>
      <TodoList todoList={todoList} removeTodo={removeTodo} />
      <InputForm addTodo={addTodo} />
      {/* <Count /> */}
    </div>
  );
}

export default App;
