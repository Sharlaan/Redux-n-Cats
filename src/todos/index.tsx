import React from 'react';
import TodosForm from './todos.form';
import Todos from './todos.list';
import styles from './todos.module.css';

export default () => (
  <article className={styles.main}>
    <TodosForm />
    <Todos />
  </article>
);
