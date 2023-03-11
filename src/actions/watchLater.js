export const WATCH_LATER = 'WATCH_LATER';
export const REMOVE_WATCH_LATER = 'REMOVE_WATCH_LATER';

export const WatchLaterData =
  (id, title, channel, description, image) => (dispatch) => {
    return dispatch({
      type: WATCH_LATER,
      payload: { id, title, channel, description, image },
    });
  };

export const removeWatchLater = (id) => (dispatch) => {
  return dispatch({
    type: REMOVE_WATCH_LATER,
    id: id,
  });
};
