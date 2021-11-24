import React from 'react';

const Count = () => {
  const [count, setCount] = React.useState(0);

  const countUp = (x, y) => {
    return x + y;
  };

  let a = 3;
  let b = 5;

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(countUp(a, b))}>カウントアップ</button>
    </div>
  );
};

export default Count;
