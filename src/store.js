import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import todosReducer from './todos/todos.reducer';
import catsReducer from './cats/cats.reducer';

const rootReducer = combineReducers({
  cats: catsReducer,
  todos: todosReducer,
});

const composedEnhancers = composeWithDevTools(applyMiddleware(thunk));

export default createStore(
  rootReducer,
  /* preloadedState, */
  composedEnhancers,
);
