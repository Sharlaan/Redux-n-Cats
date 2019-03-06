import React from 'react';

import { TodosModel, Todo } from './todos.model';

interface IListItemProps {
  todo: Todo;
  remove: TodosModel['remove'];
}

export default ({
  todo: { id, text, isCompleted },
  remove,
}: IListItemProps) => (
  <li id={id.toString()} className={isCompleted ? 'completed' : ''}>
    <span>{text}</span>
    <button
      type="button"
      className="round-button"
      onClick={(event) => {
        event.stopPropagation();
        remove(id.toString());
      }}
    >
      x
    </button>
  </li>
);