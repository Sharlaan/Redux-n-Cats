import React from 'react';
import { connect } from 'react-redux';
import { remove, toggle } from './todos.actions';
import ListItem from './todos.item';

const TodosList = ({ todos, toggle, remove }) => (
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

const mapStateToProps = ({ todos }) => ({ todos });

const mapDispatchToProps = (dispatch) => ({
  toggle: (id) => dispatch(toggle(id)),
  remove: (id) => dispatch(remove(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodosList);
