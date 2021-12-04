import { useState } from 'react';
import { db } from './firebase/config';
import {
  collection,
  doc,
  addDoc,
  setDoc,
  deleteDoc,
  updateDoc,
  getDoc,
  query,
  getDocs,
  onSnapshot,
} from 'firebase/firestore';

const Firebase = () => {
  const [text, setText] = useState('');

  // データの追加
  const add = () => {
    addDoc(collection(db, 'data'), {
      text,
    });
  };
  const set = () => {
    setDoc(doc(db, 'data', 'iddddd'), {
      text,
    });
  };

  // データの削除
  const remove = () => {
    deleteDoc(doc(db, 'data', 'iddddd'));
  };

  // データの更新
  const update = () => {
    updateDoc(doc(db, 'data', 'iddddd'), {
      text: 'アップデートしたよ',
    });
  };

  const docRef = doc(db, 'data', 'iddddd');

  // 取得
  const get = async () => {
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data());
  };

  // 全取得
  const getAll = async () => {
    const q = query(collection(db, 'data'));
    const querySnapshot = await getDocs(q);
    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, ' => ', doc.data());
    // });

    // 配列で取得するとき
    const fetchData = querySnapshot.docs.map((doc) => doc.data());
    console.log(fetchData);
  };

  const [list, setList] = useState([]);

  // データの監視
  const observe = async () => {
    // collectionの中身を全て監視
    const q = query(collection(db, 'data'));
    onSnapshot(q, (snapshot) => {
      const fetchData = snapshot.docs.map((doc) => doc.data());
      setList(fetchData);
    });

    // 指定したdocのみを監視
    // onSnapshot(doc(db, 'data', 'iddddd'), (doc) => {
    //   console.log(doc.data());
    // });
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={add}>追加</button>
      <button onClick={set}>セット</button>
      <button onClick={remove}>削除</button>
      <button onClick={update}>更新</button>
      <button onClick={get}>取得</button>
      <button onClick={getAll}>全取得</button>
      <button onClick={observe}>監視</button>
      <ul>
        {list.map((data, index) => {
          return <li key={index}>{data.text}</li>;
        })}
      </ul>
    </div>
  );
};

export default Firebase;
