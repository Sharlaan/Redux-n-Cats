import { TODOS_ADD, TODOS_REMOVE, TODOS_RESET, TODOS_TOGGLE } from './todos.constants';

const INITIAL_STATE = [{ id: 0, text: 'todo 0', isCompleted: false }];

export default function todosReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case TODOS_ADD:
      const id = state.length ? Math.max(...state.map((t) => t.id)) + 1 : 0;
      const text = (payload.showID ? `${id}: ` : '') + payload.text;
      const newTodo = { id, text, isCompleted: false };
      return state.concat(newTodo);

    case TODOS_REMOVE:
      return state.filter((t) => t.id !== +payload);

    case TODOS_TOGGLE:
      const todos = [...state];
      const todo = todos.find((t) => t.id === +payload);
      if (!todo) return state;
      todo.isCompleted = !todo.isCompleted;
      return todos;

    case TODOS_RESET:
      return INITIAL_STATE;

    default:
      return state;
  }
}
