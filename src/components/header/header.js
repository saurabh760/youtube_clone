import React from 'react';
import { Image } from '../index';
import { sidebar } from '../../actions/sidebar';
import { useDispatch } from 'react-redux';
import SearchBar from '../../pages/searchbar/searchBar';
import {
  AccountCircleIcon,
  AppsIcon,
  MenuSharpIcon,
  NotificationsIcon,
  VideoCallIcon,
} from '../../constants/iconConstants';
import '../../styles/header.css';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="main_header">
      <div className="header-left">
        <MenuSharpIcon onClick={() => dispatch(sidebar(true))} />
        <Image
          className="header_logo"
          src="https://download.logo.wine/logo/YouTube/YouTube-Logo.wine.png"
        />
      </div>
      <div className="header_input">
        <SearchBar />
      </div>
      <div className="header_icons">
        <VideoCallIcon className="header_icon" />
        <AppsIcon className="header_icon" />
        <NotificationsIcon className="header_icon" />
        <AccountCircleIcon className="header_icon" />
      </div>
    </div>
  );
};

export default Header;
