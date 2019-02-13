import React, { createContext, useState } from 'react';

const INITIAL_STATE = [{ id: 0, text: 'todo 0', isCompleted: false }];

export const TodosStore = createContext();

export default function TodosProvider({ children }) {
  const [todos, setTodos] = useState(INITIAL_STATE);

  const add = (payload) => {
    const id = todos.length ? Math.max(...todos.map((t) => t.id)) + 1 : 0;
    const text = (payload.showID ? `${id}: ` : '') + payload.text;
    const newTodo = { id, text, isCompleted: false };
    setTodos(todos.concat(newTodo));
  };

  const remove = (payload) => setTodos(todos.filter((t) => t.id !== +payload));

  const reset = () => setTodos(INITIAL_STATE);

  const toggle = (payload) => {
    const updatedTodos = [...todos];
    const todo = updatedTodos.find((t) => t.id === +payload);
    if (!todo) return todos;
    todo.isCompleted = !todo.isCompleted;
    setTodos(updatedTodos);
  };

  const methods = { add, remove, reset, toggle };
  return <TodosStore.Provider value={{ todos, ...methods }}>{children}</TodosStore.Provider>;
}
