import { CATS_FAILED, CATS_REQUESTING, CATS_SUCCEEDED } from './cats.constants';
import { getImages } from './cats.service';

export const fetchByType = (type, nb) => async (dispatch) => {
  dispatch({ type: CATS_REQUESTING });

  try {
    const urls = await getImages(type, nb);
    return dispatch({ type: CATS_SUCCEEDED, payload: urls });
  } catch (error) {
    return dispatch({ type: CATS_FAILED, payload: error.message });
  }
};
