import React from 'react';
import { useNavigate } from 'react-router-dom';
import SidebarRow from './sidebarRow';
import '../../styles/sidebar.css';
import {
  Home,
  SubscriptionsIcon,
  WhatsHotIcon,
  VideoLibraryIcon,
  HistoryIcon,
  OnDemandVideoIcon,
  WatchLaterIcon,
  ThumbUpOffAltIcon,
  ExpandMoreIcon,
} from '../../constants/iconConstants';
import { constants } from '../../constants/constants';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const isCollapse = useSelector((state) => state?.sidebar?.isCollapse);
  const { title } = constants?.sidebar || {};
  let navigate = useNavigate();
  const {
    home,
    history,
    library,
    likedVideos,
    showMore,
    subscription,
    trending,
    watchLater,
    yourVideos,
  } = title;

  return (
    <div className={isCollapse ? 'sidebar' : 'sidebar closed'}>
      <div onClick={() => navigate('/')}>
        <SidebarRow selected Icons={Home} title={home} />
      </div>
      <SidebarRow Icons={WhatsHotIcon} title={trending} />
      <SidebarRow Icons={SubscriptionsIcon} title={subscription} />
      <hr />
      <SidebarRow Icons={VideoLibraryIcon} title={library} />
      <div onClick={() => navigate('/history')}>
        <SidebarRow Icons={HistoryIcon} title={history} />
      </div>
      <SidebarRow Icons={OnDemandVideoIcon} title={yourVideos} />
      <div onClick={() => navigate('/watchLater')}>
        <SidebarRow Icons={WatchLaterIcon} title={watchLater} />
      </div>
      <SidebarRow Icons={ThumbUpOffAltIcon} title={likedVideos} />
      <SidebarRow Icons={ExpandMoreIcon} title={showMore} />
    </div>
  );
};

export default Sidebar;
