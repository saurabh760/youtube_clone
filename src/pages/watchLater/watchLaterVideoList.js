import React from 'react';
import { Popover, Image } from '../../components';
import { removeWatchLater } from '../../actions/watchLater';
import { addHistory } from '../../actions/addHistory';
import { useSetPopover } from '../../hooks/useSetPopover';
import '../../styles/videos.css';

const WatchLaterVideoList = ({
  id,
  title,
  icon,
  listIcon,
  description,
  image,
  channel,
  watchLaterLabel,
}) => {
  const { handleToggle, ref, target, show, handleNavigate, handleClick } =
    useSetPopover(
      removeWatchLater(id),
      addHistory(id, title, channel, description, image),
    );

  return (
    <div className="vid-card">
      <div className="d-flex" onClick={() => handleClick(id)}>
        <Image className="img" src={image} />
        <div className="title">
          {title}
          <p className="sub-title"> 27M views 1 year ago</p>
          <p className="text">{description}</p>
        </div>
      </div>
      <Popover
        handleToggle={handleToggle}
        show={show}
        target={target}
        ref={ref}
        handleNavigate={() => handleNavigate(id)}
        icon={icon}
        listIcon={listIcon}
        listItemName={watchLaterLabel}
      />
      {/* <img src={MoreIcon} className="sip-menu-icon" alt="Sip" /> */}
    </div>
  );
};

export default WatchLaterVideoList;
