import { action, Action, Actions, thunk, Thunk } from 'easy-peasy';
import { MimeTypes } from './cats.constants';
import { getImages } from './cats.service';

type State = {
  error: string;
  isFetching: boolean;
  urls: string[];
};

type GetByTypePayload = { nb: number; type: MimeTypes };

export type CatsModel = State & {
  request: Action<CatsModel>;
  success: Action<CatsModel, CatsModel['urls']>;
  fail: Action<CatsModel, string>;
  getByType: Thunk<CatsModel, GetByTypePayload>;
};

const INITIAL_STATE: Readonly<State> = {
  error: '',
  isFetching: false,
  urls: [],
};

export default {
  ...INITIAL_STATE,
  request: action(request),
  success: action(success),
  fail: action(fail),
  getByType: thunk(fetchByType),
} as CatsModel;

function request(state: State) {
  state.isFetching = true;
}

function success(state: State, payload: State['urls']) {
  state.isFetching = false;
  state.urls = payload;
}

function fail(state: State, payload: string) {
  state.isFetching = false;
  state.error = payload;
}

async function fetchByType(actions: Actions<CatsModel>, payload: GetByTypePayload) {
  actions.request(); // dispatch({ type: CATS_REQUESTING });
  try {
    const { type, nb } = payload;
    const urls = await getImages(type, nb);
    return actions.success(urls); // dispatch({ type: CATS_SUCCEEDED, payload: urls });
  } catch (error) {
    return actions.fail(error.message); // dispatch({ type: CATS_FAILED, payload: error.message });
  }
}
