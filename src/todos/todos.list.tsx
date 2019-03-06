import React from 'react';
import { useActions, useStore } from '../hooks';

import ListItem from './todos.item';

export default function TodosList() {
  const todos = useStore(({ todos }) => todos.items);
  const { remove, toggle } = useActions(({ todos }) => ({
    remove: todos.remove,
    toggle: todos.toggle,
  }));

  return (
    <ul
      onClick={(event: React.MouseEvent) =>
        toggle((event.target as HTMLLIElement).id)
      }
    >
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
