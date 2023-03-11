import client from '../setup/client';

export const getSearchResultsResults = (body) => {
  return client.get('/search', {
    params: {
      q: body,
    },
  });
};

export const getListResult = (body) => {
  return client.get(`/search`,{ params:{q: body?.q}});
};
