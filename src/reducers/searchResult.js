import { SEARCH_RESULT } from '../actions/searchResult';

export const initialState = {
  searchResults: [],
};

const SearchResultReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_RESULT: {
      return {
        ...state,
        searchResults: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default SearchResultReducer;
