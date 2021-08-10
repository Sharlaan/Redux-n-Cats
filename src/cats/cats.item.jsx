import React from 'react';

export default function CatItem({ todo: { id, text, isCompleted }, remove }) {
  return (
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
}
