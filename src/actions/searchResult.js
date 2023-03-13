import { getSearchResults } from '../apis/searchApi.js';

export const SEARCH_RESULT = 'SEARCH_RESULT';

const getSearchResult = (body) => (dispatch) => {
  return getSearchResults(body).then((res) => {
    if (res?.status === 200) {
      dispatch({
        type: SEARCH_RESULT,
        payload: res?.data?.items,
      });
    }
    return res;
  })
  .catch((e) => {
    alert('Something wents wrong!');

  });
  
};

export { getSearchResult };
