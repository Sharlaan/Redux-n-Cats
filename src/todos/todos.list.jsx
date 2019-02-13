import React, { useContext } from 'react';
import ListItem from './todos.item';
import { TodosStore } from './todos.provider';

export default function TodosList() {
  const { todos, toggle, remove } = useContext(TodosStore);

  return (
    <ul onClick={(event) => toggle(event.target.closest('li').id)}>
      {todos.length ? (
        todos.map((todo) => <ListItem key={todo.id} todo={todo} remove={remove} />)
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
