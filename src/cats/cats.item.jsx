import React from 'react';
import styles from './cats.module.css';

export default ({ todo: { id, text, isCompleted }, remove }) => (
  <li id={id}>
    <span className={isCompleted ? styles.completed : ''}>{text}</span>
    <button
      type="button"
      onClick={(event) => {
        event.stopPropagation();
        remove(id);
      }}
    >
      X
    </button>
  </li>
);
