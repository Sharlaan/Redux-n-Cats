import React from 'react';
import styles from './todos.module.css';

export default ({ todo: { id, text, isCompleted }, remove }) => (
  <li id={id}>
    <span className={isCompleted ? styles.completed : ''}>{text}</span>
    <button
      type="button"
      className={`round-button ${styles['remove-button']}`}
      onClick={(event) => {
        event.stopPropagation();
        remove();
      }}
    >
      x
    </button>
  </li>
);
