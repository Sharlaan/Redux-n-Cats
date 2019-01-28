import getImages from '../_api';

export const CATS_REQUESTING = 'CATS_REQUESTING';
export const CATS_SUCCEEDED = 'CATS_SUCCEEDED';
export const CATS_FAILED = 'CATS_FAILED';

export const fetchByType = (type, nb) => async (dispatch) => {
  dispatch({ type: CATS_REQUESTING });

  try {
    const urls = await getImages(type, nb);
    return dispatch({ type: CATS_SUCCEEDED, payload: urls });
  } catch (error) {
    return dispatch({ type: CATS_FAILED, payload: error.message });
  }
};
