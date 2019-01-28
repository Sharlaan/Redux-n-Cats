import { TODOS_ADD, TODOS_REMOVE, TODOS_RESET, TODOS_TOGGLE } from './todos.constants';

export const add = (text, showID) => ({ type: TODOS_ADD, payload: { text, showID } });

export const remove = (id) => ({ type: TODOS_REMOVE, payload: id });

export const toggle = (id) => ({ type: TODOS_TOGGLE, payload: id });

export const reset = () => ({ type: TODOS_RESET });
