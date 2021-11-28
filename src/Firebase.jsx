import { useState } from 'react';
import { db } from './firebase/config';
import { collection, addDoc } from 'firebase/firestore';

const Firebase = () => {
  const [text, setText] = useState('');

  // データの追加
  const add = () => {
    addDoc(collection(db, 'data'), {
      text: '初FireStore',
    });
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={add}>追加</button>
    </div>
  );
};

export default Firebase;
