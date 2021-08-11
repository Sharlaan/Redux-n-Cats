import { ActionCreator } from 'easy-peasy';
import React from 'react';
import { Todo } from './todos.model';
import styles from './todos.module.css';

interface IListItemProps {
  todo: Todo;
  remove: ActionCreator<string>;
}

export default function TodoItem({ todo: { id, text, isCompleted }, remove }: IListItemProps) {
  return (
    <li id={id.toString()}>
      <span className={isCompleted ? styles.completed : ''}>{text}</span>
      <button
        type="button"
        className={`round-button ${styles['remove-button']}`}
        onClick={(event) => {
          event.stopPropagation();
          remove(id.toString());
        }}
      >
        x
      </button>
    </li>
  );
}
