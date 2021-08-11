import { createStore, createTypedHooks } from 'easy-peasy';
import catsModel, { CatsModel } from './cats/cats.model';
import todosModel, { TodosModel } from './todos/todos.model';

export type StoreModel = {
  cats: CatsModel;
  todos: TodosModel;
};

const storeModel: StoreModel = {
  cats: catsModel,
  todos: todosModel,
};

// redux-devTools are built-in
const store = createStore(storeModel);

const { useStoreActions, useStoreDispatch, useStoreState } = createTypedHooks<StoreModel>();
export { useStoreActions, useStoreDispatch, useStoreState };

export default store;
