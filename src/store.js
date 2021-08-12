import { createStore } from 'easy-peasy';
import catsModel from './cats/cats.model';
import todosModel from './todos/todos.model';

const rootModel = {
  cats: catsModel,
  todos: todosModel,
};

const store = createStore(rootModel);

const { useStoreActions, useStoreState } = store;
export { useStoreActions, useStoreState };

// redux-devTools are built-in
export default store;
