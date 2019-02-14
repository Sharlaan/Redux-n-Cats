import { thunk } from 'easy-peasy';

import getImages from '../_api';

const INITIAL_STATE = {
  error: '',
  isFetching: false,
  urls: [],
};

export default {
  ...INITIAL_STATE,
  request,
  success,
  fail,
  getByType: thunk(fetchByType),
};

function request(state) {
  state.isFetching = true;
}

function success(state, payload) {
  state.isFetching = false;
  state.urls = payload;
}

function fail(state, payload) {
  state.isFetching = false;
  state.error = payload;
}

async function fetchByType(actions, payload) {
  actions.request(); // dispatch({ type: CATS_REQUESTING });
  try {
    const { type, nb } = payload;
    const urls = await getImages(type, nb);
    return actions.success(urls); // dispatch({ type: CATS_SUCCEEDED, payload: urls });
  } catch (error) {
    return actions.fail(error.message); // dispatch({ type: CATS_FAILED, payload: error.message });
  }
}
