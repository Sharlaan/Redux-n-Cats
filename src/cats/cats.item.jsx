import React from 'react';

export default ({ todo: { id, text, isCompleted }, remove }) => (
  <li id={id} className={isCompleted ? 'completed' : ''}>
    <span>{text}</span>
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
