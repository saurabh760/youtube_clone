export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

export const sidebar = (toggle) => (dispatch) => {
  return dispatch({
    type: TOGGLE_SIDEBAR,
    payload: toggle,
  });
};
