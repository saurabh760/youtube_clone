import { combineReducers } from 'redux';
import HistoryReducer from '../reducers/historyReducer';
import SearchResultReducer from '../reducers/searchResult';
import WatchLaterReducer from '../reducers/watchLaterReducer';
import SidebarReducer from '../reducers/sidebarReducer';

const initialState = {
  searchResult: '',
};

const appReducer = combineReducers({
  historyData: HistoryReducer,
  watchLaterData: WatchLaterReducer,
  searchResult: SearchResultReducer,
  sidebar: SidebarReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
export { initialState };
