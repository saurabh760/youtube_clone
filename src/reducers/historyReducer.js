import { ADD_HISTORY, REMOVE_HISTORY } from '../actions/addHistory';

export const initialState = {
  historyData: [],
};

const HistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_HISTORY: {
      return {
        historyData: [...state?.historyData, { data: action?.payload } || []],
      };
    }
    case REMOVE_HISTORY: {
      const newList = state?.historyData?.filter(
        (e) => e?.data?.id !== action?.id,
      );
      return {
        ...state?.historyData,
        historyData: newList,
      };
    }
    default: {
      return state;
    }
  }
};

export default HistoryReducer;
