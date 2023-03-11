import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserLayout } from '../components/index';
import {
  HistoryPage,
  Home,
  PageNotFound,
  WatchVideo,
  WatchLater,
  SearchResult,
} from '../pages/index';

const Routing = () => {
  const routeMapper = [
    {
      path: '/',
      element: <Home />,
      exact: true,
    },
    {
      path: '/watchLater',
      element: <WatchLater />,
      exact: true,
    },
    {
      path: '/watch/:id',
      element: <WatchVideo />,
      exact: true,
    },
    {
      path: '/search',
      element: <SearchResult />,
      exact: true,
    },
    {
      path: '/history',
      element: <HistoryPage />,
      exact: true,
    },
    {
      path: '*',
      element: <PageNotFound />,
      exact: true,
    },
  ];

  const routeComponents = routeMapper.map(({ path, element }, key) => (
    <Route path={path} key={key} element={<UserLayout>{element}</UserLayout>} />
  ));

  return (
    <Router>
      <Routes>{routeComponents}</Routes>
    </Router>
  );
};

export default Routing;
