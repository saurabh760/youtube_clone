export const ADD_HISTORY = 'ADD_HISTORY';
export const REMOVE_HISTORY = 'REMOVE_HISTORY';

export const addHistory = (id, title, channel, description, image) => (dispatch) => {
  return dispatch({
    type: ADD_HISTORY,
    payload: { id, title, channel, description, image },
  });
};

export const removeHistory = (id) => (dispatch) => {
  return dispatch({
    type: REMOVE_HISTORY,
    id: id,
  });
};
