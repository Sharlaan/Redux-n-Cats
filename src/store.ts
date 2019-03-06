import { createStore } from 'easy-peasy';

import catsModel, { CatsModel } from './cats/cats.model';
import todosModel, { TodosModel } from './todos/todos.model';

export type StoreModel = {
  cats: CatsModel;
  todos: TodosModel;
};

const rootModel = {
  cats: catsModel,
  todos: todosModel,
};

// redux-devTools are built-in
export default createStore<StoreModel>(rootModel);
