const INITIAL_STATE = [{ id: 0, text: 'todo 0', isCompleted: false }];

export default {
  items: INITIAL_STATE,
  add,
  remove,
  reset,
  toggle,
};

function add({ items }, payload) {
  const id = items.length ? Math.max(...items.map((t) => t.id)) + 1 : 0;
  const text = (payload.showID ? `${id}: ` : '') + payload.text;
  const newTodo = { id, text, isCompleted: false };
  items.push(newTodo);
}

function remove({ items }, payload) {
  const index = items.findIndex((t) => t.id === +payload);
  items.splice(index, 1);
}

// Note: replacing the state instance with a destructured {items}
// breaks Immer's proxying
function reset(state) {
  state.items = [...INITIAL_STATE];
}

function toggle({ items }, payload) {
  const todo = items.find((t) => t.id === +payload);
  if (!todo) return;
  todo.isCompleted = !todo.isCompleted;
}
