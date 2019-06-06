import React from 'react';
import { useActions, useStore } from 'easy-peasy';

import ListItem from './todos.item';

export default function TodosList() {
  const todos = useStore(({ todos }) => todos.items);
  const { remove, toggle } = useActions(({ todos }) => ({
    remove: todos.remove,
    toggle: todos.toggle,
  }));

  return (
    <ul onClick={(event) => toggle(event.target.id)}>
      {todos.length ? (
        todos.map((todo) => (
          <ListItem key={todo.id} todo={todo} remove={remove} />
        ))
      ) : (
        <p>
          Todo list is empty, please add something
          <span role="img" aria-label="Smiling face and 'on fire' mood">
            😉🔥
          </span>
        </p>
      )}
    </ul>
  );
}
