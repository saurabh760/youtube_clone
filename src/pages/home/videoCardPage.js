import React from 'react';
import { addHistory } from '../../actions/addHistory';
import { WatchLaterData } from '../../actions/watchLater';
import { useSetPopover } from '../../hooks/useSetPopover';
import { Popover, Image } from '../../components';
import {
  MoreVertIcon,
  WatchLaterOutlinedIcon,
} from '../../constants/iconConstants';

const VideoCardPage = ({
  image,
  title,
  channel,
  views,
  timestamp,
  id,
  description,
  watchLaterLabel,
}) => {
  const { handleToggle, ref, target, show, handleNavigate, handleClick } =
    useSetPopover(
      WatchLaterData(id, title, channel, description, image),
      addHistory(id, title, channel, description, image),
    );

  return (
    <div>
      <div className="videoCard" onClick={() => handleClick(id)}>
        <Image className="VideoCard_image" src={image} />
        <div className="videoCard_info">
          <div className="videoCard_text">
            <h4>{title}</h4>
            <p>{channel}</p>
            <p>
              {views} . {timestamp}
            </p>
          </div>
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

export default VideoCardPage;
