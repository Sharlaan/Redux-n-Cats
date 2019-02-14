import { createStore } from 'easy-peasy';

import catsModel from './cats/cats.model';
import todosModel from './todos/todos.model';

const rootModel = {
  cats: catsModel,
  todos: todosModel,
};

// redux-devTools are built-in
export default createStore(rootModel);
