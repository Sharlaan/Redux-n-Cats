import React from 'react';
import { connect } from 'react-redux';

import ListItem from './todos.item';

const TodosList = ({ todos, remove, toggle }) => (
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

const mapState = ({ todos }) => ({ todos });

const mapDispatch = ({ todos: { remove, toggle } }) => ({ remove, toggle });

export default connect(
  mapState,
  mapDispatch,
)(TodosList);
