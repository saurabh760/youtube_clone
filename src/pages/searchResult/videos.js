import React from 'react';
import { VideoPlayer, Popover } from '../../components';
import { WatchLaterData } from '../../actions/watchLater';
import { useSetPopover } from '../../hooks/useSetPopover';
import { addHistory } from '../../actions/addHistory';
import { getUrl } from '../../utility/others';
import {
  MoreVertIcon,
  WatchLaterOutlinedIcon,
} from '../../constants/iconConstants';
import '../../styles/videos.css';

const Videos = ({
  id,
  title,
  channel,
  description,
  watchLaterLabel,
  image,
}) => {
  const { handleToggle, ref, target, show, handleNavigate, handleClick } =
    useSetPopover(
      WatchLaterData(id, title, channel, description, image),
      addHistory(id, title, channel, description, image),
    );

  return (
    <div className="vid-card">
      <div className="d-flex" onClick={() => handleClick(id)}>
        <VideoPlayer
          className="img"
          src={getUrl(id)}
          title={id}
          allowFullScreen={true}
        />
        <div className="title">
          {title}
          <div className="sub-title"> 27M views 1 year ago</div>
          <div className="text">{description}</div>
        </div>
      </div>
      <Popover
        handleToggle={handleToggle}
        show={show}
        target={target}
        ref={ref}
        handleNavigate={() => handleNavigate(id)}
        icon={<MoreVertIcon />}
        listIcon={<WatchLaterOutlinedIcon />}
        listItemName={watchLaterLabel}
      />
    </div>
  );
};

export default Videos;
