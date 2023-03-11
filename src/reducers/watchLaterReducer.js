import { WATCH_LATER, REMOVE_WATCH_LATER } from '../actions/watchLater';

export const initialState = {
  watchLaterData: [],
};

const WatchLaterReducer = (state = initialState, action) => {
  switch (action.type) {
    case WATCH_LATER: {
      return {
        watchLaterData: [
          ...state.watchLaterData,
          { data: action?.payload } || [],
        ],
      };
    }
    case REMOVE_WATCH_LATER: {
      const newList = state.watchLaterData.filter(
        (e) => e?.data?.id !== action.id,
      );
      return {
        watchLaterData: newList,
      };
    }
    default: {
      return state;
    }
  }
};

export default WatchLaterReducer;
