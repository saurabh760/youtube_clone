import React from 'react';
import { Header, Sidebar } from '../index';
import '../../styles/mainPage.css';

const UserLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main_page">
        <Sidebar />
        {children}
      </main>
    </>
  );
};

export default UserLayout;
