import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove, toggle } from './todos.actions';
import ListItem from './todos.item';

export default () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  return (
    <ul onClick={(event) => dispatch(toggle(event.target.closest('li').id))}>
      {todos.length ? (
        todos.map((todo) => (
          <ListItem key={todo.id} todo={todo} remove={() => dispatch(remove(todo.id))} />
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
};
