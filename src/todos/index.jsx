import React from 'react';
import TodosForm from './todos.form';
import Todos from './todos.list';
import styles from './todos.module.css';
import TodosProvider from './todos.provider';

export default () => (
  <article className={styles.main}>
    <TodosProvider>
      <TodosForm />
      <Todos />
    </TodosProvider>
  </article>
);
