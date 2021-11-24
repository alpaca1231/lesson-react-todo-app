import { useState } from 'react';

// 入力した文字をitem配列に追加したい

const InputForm = ({ addTodo }) => {
  const [value, setValue] = useState('');
  console.log(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="タスクを入力"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button onClick={handleSubmit}>送信</button>
      </form>
    </div>
  );
};

export default InputForm;
