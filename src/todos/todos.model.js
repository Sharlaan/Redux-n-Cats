import produce from 'immer';

const INITIAL_STATE = [{ id: 0, text: 'todo 0', isCompleted: false }];

export default {
  state: INITIAL_STATE,
  reducers: {
    add(state, payload) {
      const id = state.length ? Math.max(...state.map((t) => t.id)) + 1 : 0;
      const text = (payload.showID ? `${id}: ` : '') + payload.text;
      const newTodo = { id, text, isCompleted: false };
      return state.concat(newTodo);
    },
    remove: (state, payload) => state.filter((t) => t.id !== +payload),
    reset: () => INITIAL_STATE,
    toggle: produce((state, payload) => {
      const todo = state.find((t) => t.id === +payload);
      if (todo) todo.isCompleted = !todo.isCompleted;
    }),
  },
};
