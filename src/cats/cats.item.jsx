import React from 'react';
import styles from './cats.module.css';

export default function CatItem({ todo: { id, text, isCompleted }, remove }) {
  return (
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
}
