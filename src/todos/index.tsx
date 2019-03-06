import React from 'react';

import './todos.styles.css';

import TodosForm from './todos.form';
import Todos from './todos.list';

export default () => (
  <article className="Todos">
    <TodosForm />
    <Todos />
  </article>
);
