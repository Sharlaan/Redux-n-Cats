import { CATS_FAILED, CATS_REQUESTING, CATS_SUCCEEDED } from './cats.constants';

const INITIAL_STATE = {
  error: '',
  isFetching: false,
  urls: [],
};

export default function todosReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case CATS_REQUESTING:
      return { ...state, isFetching: true };

    case CATS_SUCCEEDED:
      return { ...state, isFetching: false, urls: payload };

    case CATS_FAILED:
      return { ...state, isFetching: false, error: payload };

    default:
      return state;
  }
}
