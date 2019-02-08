import produce from 'immer';

import getImages from '../_api';

const INITIAL_STATE = {
  error: '',
  isFetching: false,
  urls: [],
};

export default {
  state: INITIAL_STATE,
  reducers: {
    requesting: produce((state) => {
      state.isFetching = true;
    }),

    succeeded: produce((state, payload) => {
      state.isFetching = false;
      state.urls = payload;
    }),

    failed: produce((state, payload) => {
      state.isFetching = false;
      state.error = payload;
    }),
  },
  effects: (dispatch) => ({
    async fetchByType({ type, nb }) {
      dispatch.cats.requesting();
      try {
        const urls = await getImages(type, nb);
        dispatch.cats.succeeded(urls);
      } catch (error) {
        dispatch.cats.failed(error.message);
      }
    },
  }),
};
