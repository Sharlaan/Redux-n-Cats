export const TODOS_TOGGLE = 'TODOS_TOGGLE';
export const TODOS_ADD = 'TODOS_ADD';
export const TODOS_REMOVE = 'TODOS_REMOVE';
export const TODOS_RESET = 'TODOS_RESET';

export const add = (text, showID) => ({
  type: TODOS_ADD,
  payload: { text, showID },
});

export const remove = (id) => ({ type: TODOS_REMOVE, payload: id });

export const toggle = (id) => ({
  type: TODOS_TOGGLE,
  payload: id,
});

export const reset = () => ({ type: TODOS_RESET });
