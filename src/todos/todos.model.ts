import { action, Action } from 'easy-peasy';

export type Todo = { id: number; text: string; isCompleted: boolean };

type addTodoPayload = { showID: boolean; text: string };

export type TodosModel = {
  items: Todo[];
  add: Action<TodosModel, addTodoPayload>;
  remove: Action<TodosModel, string>;
  reset: Action<TodosModel>;
  toggle: Action<TodosModel, string>;
};

const INITIAL_STATE: ReadonlyArray<Todo> = [{ id: 0, text: 'todo 0', isCompleted: false }];

export default {
  items: [...INITIAL_STATE],
  add: action(add),
  remove: action(remove),
  reset: action(reset),
  toggle: action(toggle),
} as TodosModel;

type State = Pick<TodosModel, 'items'>;

function add({ items }: State, payload: addTodoPayload) {
  const id = items.length ? Math.max(...items.map((t) => t.id)) + 1 : 0;
  const text = (payload.showID ? `${id}: ` : '') + payload.text;
  const newTodo = { id, text, isCompleted: false };
  items.push(newTodo);
}

function remove({ items }: State, payload: string) {
  const index = items.findIndex((t) => t.id === +payload);
  items.splice(index, 1);
}

// Note: replacing the state instance with a destructured {items} breaks Immer's proxying
function reset(state: State) {
  state.items = [...INITIAL_STATE];
}

function toggle({ items }: State, payload: string) {
  const todo = items.find((t) => t.id === +payload);
  if (!todo) return;
  todo.isCompleted = !todo.isCompleted;
}
