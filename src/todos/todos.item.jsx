import React from 'react';

export default ({ todo: { id, text, isCompleted }, remove }) => (
  <li id={id} className={isCompleted ? 'completed' : ''}>
    <span>{text}</span>
    <button
      type="button"
      className="round-button"
      onClick={(event) => {
        event.stopPropagation();
        remove(id);
      }}
    >
      x
    </button>
  </li>
);
