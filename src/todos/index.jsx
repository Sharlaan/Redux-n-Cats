import React from 'react';
import TodosForm from './todos.form';
import Todos from './todos.list';
import './todos.styles.css';

export default function TodosSection() {
  return (
    <article className="Todos">
      <TodosForm />
      <Todos />
    </article>
  );
}
