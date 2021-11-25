import React from 'react';
import styled from 'styled-components';
// import styles from './index.module.css';

const TodoCard = ({ todo, removeTodo }) => {
  return (
    <StyledTodoCard>
      <button onClick={() => removeTodo(todo.id)}>削除</button>
      {/* <span className={styles.cardText}>{todo.content}</span> */}
      <span className="card">{todo.content}</span>
    </StyledTodoCard>
  );
};

export default TodoCard;

const StyledTodoCard = styled.li`
  color: blue;
`;
