import client from '../setup/client';

export const getSearchResults = (body) => {
  return client.get('/search', {
    params: {
      q: body,
    },
  });
};

export const getListResult = (body) => {
  return client.get(`/search`,{ params:{q: body?.q}});
};
